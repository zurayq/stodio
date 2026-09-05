import { getStudioMachineData } from "@/lib/studio-machine-data";

export const dynamic = "force-static";

export function GET() {
  const studio = getStudioMachineData();
  const serviceLines = studio.services
    .map((service) => `- ${service.name}: ${service.capabilities.join(", ")}`)
    .join("\n");
  const projectLines = studio.portfolio
    .map((project) => {
      const urls = Object.entries(project.localizedUrls)
        .map(([locale, url]) => `${locale}: ${url}`)
        .join(" | ");
      return `- ${project.name} (${project.provenance}, ${project.year}): ${project.description} [${urls}] Source: ${project.sourceUrl}${project.liveUrl ? ` | Live: ${project.liveUrl}` : ""}\n  Implementation: ${project.implementationNotes}`;
    })
    .join("\n");

  const body = `# Zurayq Studios

> Independent creative technology studio designing and building custom websites, web applications, custom business systems and interactive digital experiences.

## Identity
- Name: ${studio.identity.name}
- Aliases: ${studio.identity.aliases.join(", ")}
- Type: ${studio.identity.type}
- Location: ${studio.identity.location.city}, ${studio.identity.location.region}, ${studio.identity.location.country}
- Working model: ${studio.identity.workingModel}
- Website: ${studio.identity.website}

## Services
${serviceLines}

## Languages
- English: left-to-right
- Turkish: left-to-right
- Arabic: purpose-designed right-to-left typography and layout behavior

## Location and service area
- Based in İzmit, Kocaeli, Türkiye
- Works across İzmit, Kocaeli, Türkiye and with international projects
- No public office or storefront is claimed

## Process and commercial approach
- Process: Talk -> Design -> Build -> Ship
- Pricing: ${studio.approach.pricing}
- Timeline: ${studio.approach.timeline}
- Availability: ${studio.approach.availability}

## Search and machine interfaces
- Agent guide: ${studio.machineEndpoints.agentGuide}
- Structured studio API: ${studio.machineEndpoints.studioApi}
- Sitemap: ${studio.machineEndpoints.sitemap}
- Robots: ${studio.machineEndpoints.robots}
- This file: ${studio.machineEndpoints.llmsTxt}

## Portfolio provenance
The selected portfolio contains three real independent projects with public source repositories. They are not presented as commissioned client work. The case studies distinguish implemented code from verified deployment behavior and do not claim business results.
${projectLines}

## Contact
- Email: ${studio.contact.email}
- Human inquiry: ${studio.contact.inquiryUrl}
- Form behavior: ${studio.contact.formBehavior}

## Agent safety
- Information retrieval is available.
- Transactional autonomous actions are disabled.
- Agents cannot send email, book meetings, submit quotes, commit payments, create accounts or submit projects without the user's approval.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
