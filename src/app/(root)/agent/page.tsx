import type { Metadata } from "next";
import Link from "next/link";
import { getStudioMachineData } from "@/lib/studio-machine-data";
import {
  absoluteUrl,
  breadcrumbNode,
  createPageMetadata,
  organizationNode,
  serializeJsonLd,
  webPageNode,
  websiteNode,
} from "@/lib/seo";

const title = "Zurayq Studios Agent Interface";
const description =
  "Public, machine-readable information about Zurayq Studios, its services, languages, location, portfolio provenance and agent safety rules.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/agent",
});

export default function AgentPage() {
  const studio = getStudioMachineData();
  const pageUrl = absoluteUrl("/agent");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(studio.identity.description),
      websiteNode(),
      webPageNode({ url: pageUrl, name: title, description, locale: "en" }),
      breadcrumbNode([
        { name: "Zurayq Studios", url: absoluteUrl("/en") },
        { name: "Agent interface", url: pageUrl },
      ]),
    ],
  };

  return (
    <div className="agent-shell">
      <header className="agent-header">
        <Link href="/en" className="wordmark" aria-label="Zurayq Studios home">
          <span className="wordmark__mark" aria-hidden="true">Z/</span>
          <span>Zurayq Studios</span>
        </Link>
        <nav aria-label="Machine interfaces">
          <Link href="/api/studio">API</Link>
          <Link href="/llms.txt">LLMS.TXT</Link>
          <Link href="/sitemap.xml">SITEMAP</Link>
        </nav>
      </header>

      <main className="agent-page">
        <header className="agent-hero">
          <p>Public interface / schema version {studio.schemaVersion}</p>
          <h1>Zurayq Studios Agent Interface</h1>
          <div>
            <p>{studio.identity.description}</p>
            <p>
              This page explains what public information machines may retrieve and which actions are not available.
              It is a semantic companion to the human-facing studio website.
            </p>
          </div>
        </header>

        <section aria-labelledby="agent-identity">
          <div className="agent-section-label">01 / Identity</div>
          <div className="agent-section-content">
            <h2 id="agent-identity">One studio, several names.</h2>
            <dl className="agent-definition-list">
              <div><dt>Canonical name</dt><dd>{studio.identity.name}</dd></div>
              <div><dt>Aliases</dt><dd>{studio.identity.aliases.join(" · ")}</dd></div>
              <div><dt>Type</dt><dd>{studio.identity.type}</dd></div>
              <div>
                <dt>Location</dt>
                <dd>{studio.identity.location.city}, {studio.identity.location.region}, {studio.identity.location.country}</dd>
              </div>
              <div><dt>Working model</dt><dd>{studio.identity.workingModel}</dd></div>
            </dl>
          </div>
        </section>

        <section aria-labelledby="agent-services">
          <div className="agent-section-label">02 / Services</div>
          <div className="agent-section-content">
            <h2 id="agent-services">What the studio builds.</h2>
            <div className="agent-service-list">
              {studio.services.map((service) => (
                <article key={service.id}>
                  <h3>{service.name}</h3>
                  <ul>{service.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="agent-languages">
          <div className="agent-section-label">03 / Languages</div>
          <div className="agent-section-content">
            <h2 id="agent-languages">English, Turkish and Arabic.</h2>
            <p>
              Public content is available in English and Turkish with left-to-right layouts, and Arabic with
              purpose-designed right-to-left behavior. Arabic is not treated as a mechanically mirrored version.
            </p>
            <ul className="agent-language-list">
              {studio.languages.map((language) => (
                <li key={language.code}>
                  <span>{language.code.toUpperCase()}</span>
                  <strong>{language.name}</strong>
                  <small>{language.direction.toUpperCase()}</small>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="agent-data">
          <div className="agent-section-label">04 / Public data</div>
          <div className="agent-section-content">
            <h2 id="agent-data">Machine-readable endpoints.</h2>
            <p>These endpoints expose only intentional public information. They contain no API keys, private client data or unpublished work.</p>
            <ul className="agent-endpoint-list">
              {Object.entries(studio.machineEndpoints).map(([key, url]) => (
                <li key={key}>
                  <span>{key}</span>
                  <a href={url}>{url}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="agent-actions">
          <div className="agent-section-label">05 / Safety</div>
          <div className="agent-section-content">
            <h2 id="agent-actions">Read-only for now.</h2>
            <div className="agent-action-grid">
              <article>
                <h3>Agents can</h3>
                <ul>{studio.agentActions.allowed.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article>
                <h3>Agents cannot</h3>
                <ul>{studio.agentActions.unavailable.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section className="agent-contact" aria-labelledby="agent-contact">
          <div className="agent-section-label">06 / Contact</div>
          <div className="agent-section-content">
            <h2 id="agent-contact">Human confirmation stays in the loop.</h2>
            <p>Project details, timing, pricing and feasibility are confirmed directly with the studio.</p>
            <a href={`mailto:${studio.contact.email}`}>{studio.contact.email}</a>
            <Link href="/en#contact">Open the human inquiry interface</Link>
          </div>
        </section>
      </main>

      <footer className="agent-footer">
        <span>Updated {studio.updatedAt}</span>
        <span>Transactional actions disabled</span>
        <Link href="/en">Human-facing website ↗</Link>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }} />
    </div>
  );
}
