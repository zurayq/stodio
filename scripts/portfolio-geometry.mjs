// Reproduce lightweight artwork from inspected project assets.
// node scripts/portfolio-geometry.mjs <audit-directory>
// Emits JSON for review; does not write files or fetch data.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { runInNewContext } from "node:vm";

const root = process.argv[2];
if (!root) throw new Error("Pass the source-audit directory.");
const world = JSON.parse(readFileSync(join(root, "world.json"), "utf8"));
const region = JSON.parse(readFileSync(join(root, "neighborhood/static/data/service-area.geojson"), "utf8"));
const context = { window: {} };
for (const file of ["passports.js", "visa_data.js"]) {
  runInNewContext(readFileSync(join(root, "pasaporto/data", file), "utf8"), context, { timeout: 1000 });
}
const iso = Object.fromEntries(context.window.PASSPORTS.map(p => [Number(p.num), p.id]));
const colors = { vf: "#22d3a5", oa: "#38bdf8", ev: "#facc15", required: "#f87171", home: "#87874c", unknown: "#233752" };
const decoded = world.arcs.map(arc => {
  let x = 0, y = 0;
  return arc.map(point => {
    x += point[0]; y += point[1];
    return [x * world.transform.scale[0] + world.transform.translate[0], y * world.transform.scale[1] + world.transform.translate[1]];
  });
});
const stitch = refs => refs.flatMap((ref, i) => {
  const points = ref < 0 ? [...decoded[~ref]].reverse() : decoded[ref];
  return i ? points.slice(1) : points;
});
const rad = Math.PI / 180;
function sphere([lng, lat]) {
  const lambda = (lng - 30) * rad, phi = lat * rad, tilt = 22 * rad;
  return [
    Math.cos(phi) * Math.sin(lambda),
    Math.cos(tilt) * Math.sin(phi) - Math.sin(tilt) * Math.cos(phi) * Math.cos(lambda),
    Math.sin(tilt) * Math.sin(phi) + Math.cos(tilt) * Math.cos(phi) * Math.cos(lambda),
  ];
}
function globeRing(points) {
  const coords = points.map(sphere), clipped = [];
  for (let i = 0; i < coords.length; i++) {
    const a = coords[i], b = coords[(i + 1) % coords.length];
    if (a[2] >= 0) clipped.push(a);
    if ((a[2] >= 0) !== (b[2] >= 0)) {
      const t = a[2] / (a[2] - b[2]);
      const x = a[0] + t * (b[0] - a[0]), y = a[1] + t * (b[1] - a[1]);
      const length = Math.hypot(x, y);
      clipped.push([x / length, y / length, 0]);
    }
  }
  if (clipped.length < 3) return "";
  return clipped.map(([x,y], i) => (i ? "L" : "M") + (500 + x * 460).toFixed(1) + "," + (500 - y * 460).toFixed(1)).join("") + "Z";
}
const countries = world.objects.countries.geometries.map(geometry => {
  const polygons = geometry.type === "Polygon" ? [geometry.arcs] : geometry.arcs;
  const d = polygons.flatMap(p => p.map(ring => globeRing(stitch(ring)))).join("");
  const country = iso[Number(geometry.id)];
  const status = country === "TR" ? "home" : context.window.VISA_MATRIX.TR?.[country] || "unknown";
  return d ? '<path d="' + d + '" fill="' + colors[status] + '"/>' : "";
}).join("");
const globe = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="o"><stop stop-color="#102541"/><stop offset="1" stop-color="#070f1c"/></radialGradient><radialGradient id="shade" cx="35%" cy="28%" r="75%"><stop offset=".3" stop-color="#020813" stop-opacity="0"/><stop offset="1" stop-color="#020813" stop-opacity=".83"/></radialGradient></defs><circle cx="500" cy="500" r="462" fill="url(#o)" stroke="#294361" stroke-width="2"/><g stroke="#102439" stroke-width="1.1" fill-rule="evenodd">' + countries + '</g><circle cx="500" cy="500" r="460" fill="url(#shade)"/><ellipse cx="500" cy="500" rx="460" ry="170" fill="none" stroke="#bfd2e8" stroke-opacity=".12"/><ellipse cx="500" cy="500" rx="185" ry="460" fill="none" stroke="#bfd2e8" stroke-opacity=".12"/></svg>';
const project = ([lng,lat]) => [(lng - 27.7) * 280 + 30, (41.7 - lat) * 380 + 30];
const regionPaths = region.features.map(feature => {
  const polygons = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  const d = polygons.flatMap(p => p.map(ring => {
    let prev = null;
    const points = ring.map(project).filter((p,i) => {
      if (prev && Math.hypot(p[0]-prev[0], p[1]-prev[1]) < 1.4 && i !== ring.length-1) return false;
      prev = p; return true;
    });
    return points.map(([x,y],i) => (i ? "L" : "M") + x.toFixed(1) + "," + y.toFixed(1)).join("") + "Z";
  })).join("");
  return '<path d="' + d + '" fill="#d8dfca" stroke="#7d987c" stroke-width="1.4" fill-rule="evenodd"/>';
}).join("");
const neighborhood = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="#567783" stroke-opacity=".12"/></pattern></defs><path fill="#b7d0d1" d="M0 0h1000v600H0z"/><path fill="url(#grid)" d="M0 0h1000v600H0z"/>' + regionPaths + '</svg>';
console.log(JSON.stringify({ globe, neighborhood }));
