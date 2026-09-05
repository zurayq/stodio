// HTTP regression checks against a running production build.
// npm run build && npm run start -- --port 3002
// node scripts/check-portfolio.mjs http://127.0.0.1:3002
import assert from "node:assert/strict";

const origin = process.argv[2] || "http://127.0.0.1:3002";
const canonical = "https://studio.zurayq.lol";
const locales = ["en", "tr", "ar"];
const slugs = ["passport-power", "your-friendly-neighborhood", "memocore"];
const removed = ["sahra-house", "relay", "form-index", "type-space"];
const stale = /sahra-house|Sahra House|\bRelay\b|\/work\/relay|form-index|Form Index|type-space|Type \/ Space|concept project|studio experiment/i;
let checks = 0;

async function request(path, status = 200) {
  const response = await fetch(`${origin}${path}`, { redirect: "manual", signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, status, `${path}: HTTP status`);
  checks++;
  return response;
}

function clean(text, path) {
  assert.doesNotMatch(text, stale, `${path}: no placeholder portfolio`);
  checks++;
}

const api = await (await request("/api/studio")).json();
assert.deepEqual(api.portfolio.map(p => p.id), slugs, "exact curated portfolio order");
assert.deepEqual(api.portfolio.map(p => p.sourceUrl), [
  "https://github.com/zurayq/pasaporto",
  "https://github.com/zurayq/Your-Friendly-Neighborhood",
  "https://github.com/zurayq/memocore",
]);
assert.equal(api.portfolio[2].liveUrl, null, "no invented MemoCore demo");
assert.ok(api.portfolio.every(p => p.provenance === "independent project"));
assert.match(api.portfolio[2].implementationNotes, /reminders currently go to logs/);
clean(JSON.stringify(api), "/api/studio");

for (const locale of locales) {
  const home = await (await request(`/${locale}`)).text();
  clean(home, `/${locale}`);
  const cardLinks = [...home.matchAll(/class="work-item__link" href="([^"]+)"/g)].map(m => m[1]);
  // The project articles are the public ordering contract, independent of link styling.
  const workSection = home.slice(home.indexOf('id="work"'));
  const positions = slugs.map(slug => workSection.indexOf(`/${locale}/work/${slug}`));
  assert.ok(positions.every((position, i) => position >= 0 && (i === 0 || position > positions[i - 1])), `${locale}: selected work order`);
  if (cardLinks.length) assert.deepEqual(cardLinks, slugs.map(slug => `/${locale}/work/${slug}`));

  for (const [i, slug] of slugs.entries()) {
    const path = `/${locale}/work/${slug}`;
    const html = await (await request(path)).text();
    const project = api.portfolio[i];
    clean(html, path);
    assert.ok(html.includes(`<h1>${project.name}</h1>`), `${path}: public title`);
    assert.ok(html.includes(`lang="${locale}" dir="${locale === "ar" ? "rtl" : "ltr"}"`), `${path}: locale and direction`);
    assert.ok(html.includes(`rel="canonical" href="${canonical}${path}"`), `${path}: canonical`);
    for (const alternate of [...locales, "x-default"]) {
      assert.ok(html.includes(`hrefLang="${alternate}" href="${canonical}/${alternate === "x-default" ? "en" : alternate}/work/${slug}"`), `${path}: ${alternate} alternate`);
    }
    assert.ok(html.includes(`href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer"`), `${path}: safe source action`);
    const actionHtml = html.match(/class="case-project-links">([\s\S]*?)<\/div>/)?.[1] || "";
    assert.equal([...actionHtml.matchAll(/<a /g)].length, project.liveUrl ? 2 : 1, `${path}: conditional live action`);
    if (project.liveUrl) assert.ok(html.includes(`href="${project.liveUrl}"`), `${path}: verified live action`);
    const next = slugs[(i + 1) % slugs.length];
    assert.ok(html.includes(`class="next-project"><a href="/${locale}/work/${next}"`), `${path}: next-project cycle`);
    const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    const creativeWork = graphs.flatMap(g => g["@graph"] || []).find(n => n["@type"] === "CreativeWork");
    assert.equal(creativeWork?.name, project.name, `${path}: structured work name`);
    assert.equal(creativeWork?.isBasedOn, project.sourceUrl, `${path}: structured source`);
    assert.equal(creativeWork?.url, `${canonical}${path}`);
    const share = await request(`${path}/opengraph-image`);
    assert.match(share.headers.get("content-type"), /^image\/png/);
    const bytes = new Uint8Array(await share.arrayBuffer());
    assert.deepEqual([...bytes.slice(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], `${path}: PNG share preview`);
    const png = new DataView(bytes.buffer);
    assert.equal(png.getUint32(16), 1200);
    assert.equal(png.getUint32(20), 630);
  }

  for (const slug of removed) {
    const path = `/${locale}/work/${slug}`;
    const response = await request(path, 404);
    const html = await response.text();
    assert.match(html, /name="robots" content="noindex"/, `${path}: removed page is not indexed`);
    await request(`${path}/opengraph-image`, 404);
  }
}

const sitemap = await (await request("/sitemap.xml")).text();
clean(sitemap, "/sitemap.xml");
assert.equal([...sitemap.matchAll(/<loc>/g)].length, 14, "3 home + 9 case study + local service + agent URLs");
for (const locale of locales) for (const slug of slugs) {
  assert.ok(sitemap.includes(`<loc>${canonical}/${locale}/work/${slug}</loc>`));
}
for (const path of ["/llms.txt", "/agent", "/tr/izmit-web-tasarim"]) {
  clean(await (await request(path)).text(), path);
}
for (const path of ["/work/passport-globe.svg", "/work/neighborhood-area.svg"]) {
  assert.match((await request(path)).headers.get("content-type"), /image\/svg\+xml/);
}
await request("/en/work/not-a-project/opengraph-image", 404);
await request("/xx/work/passport-power/opengraph-image", 404);
console.log(`Portfolio HTTP checks passed (${checks} response/content checks plus metadata, links, JSON-LD, ordering and PNG assertions).`);
console.log("This does not replace browser-based mobile, RTL, keyboard or visual testing.");
