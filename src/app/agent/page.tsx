import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/config";
import { getStudioMachineData } from "@/lib/studio-machine-data";

export const metadata: Metadata = {
  title: "Agent & AI Access | Zurayq Studios",
  description:
    "Machine-readable information about Zurayq Studios services, capabilities, languages, portfolio and supported agent access.",
  alternates: { canonical: `${siteUrl}/agent` },
  robots: { index: true, follow: true },
};

export default function AgentPage() {
  const studio = getStudioMachineData();

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px", fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
      <p>Zurayq Studios / Machine Access</p>
      <h1>AI and agent-readable studio information</h1>
      <p>
        This page documents the public information Zurayq Studios intentionally exposes for search engines,
        AI systems and software agents. The human website remains the primary experience.
      </p>

      <h2>Identity</h2>
      <p>{studio.identity.description}</p>
      <p><strong>Aliases:</strong> {studio.identity.aliases.join(", ")}</p>
      <p><strong>Location:</strong> İzmit, Kocaeli, Türkiye. Working internationally.</p>

      <h2>Services</h2>
      <ul>
        {studio.services.map((service) => (
          <li key={service.id}>
            <strong>{service.name}:</strong> {service.capabilities.join(", ")}
          </li>
        ))}
      </ul>

      <h2>Languages</h2>
      <p>English, Turkish and Arabic, including purpose-designed RTL behavior for Arabic interfaces.</p>

      <h2>Machine-readable endpoints</h2>
      <ul>
        <li><Link href="/llms.txt">/llms.txt</Link> — concise studio summary for LLM-oriented retrieval.</li>
        <li><Link href="/api/studio">/api/studio</Link> — structured public JSON describing identity, services and capabilities.</li>
        <li><Link href="/sitemap.xml">/sitemap.xml</Link> — indexable public URL inventory.</li>
        <li><Link href="/robots.txt">/robots.txt</Link> — crawler access rules.</li>
      </ul>

      <h2>Agent permissions</h2>
      <p>
        Public information retrieval is supported. Transactional agent actions are not currently enabled. Agents cannot
        autonomously request quotes, book meetings, submit projects or send email through this website.
      </p>

      <h2>Contact</h2>
      <p>
        Human inquiries should use the website contact flow. Structured systems may use the public endpoints above to
        understand the studio before directing a person to contact Zurayq Studios.
      </p>

      <p><Link href="/en">Return to Zurayq Studios</Link></p>
    </main>
  );
}
