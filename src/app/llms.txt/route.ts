import { getStudioMachineData } from "@/lib/studio-machine-data";

export const dynamic = "force-static";

export function GET() {
  const studio = getStudioMachineData();
  const serviceLines = studio.services
    .map((service) => `- ${service.name}: ${service.capabilities.join(", ")}`)
    .join("\n");
  const projectLines = studio.portfolio
    .map((project) => `- ${project.name} (${project.provenance}, ${project.year}): ${project.description} ${project.url}`)
    .join("\n");

  const body = `# Zurayq Studios

> Independent creative technology studio designing and building custom websites, web applications and interactive digital experiences.

## Studio
- Name: ${studio.identity.name}
- Type: ${studio.identity.type}
- Working model: ${studio.identity.workingModel}
- Website: ${studio.identity.website}
- Languages: English (LTR), Turkish (LTR), Arabic (purpose-designed RTL)

## Services
${serviceLines}

## Process
- Talk → Design → Build → Ship
- Pricing: ${studio.approach.pricing}
- Timeline: ${studio.approach.timeline}

## Portfolio provenance
All current public pieces are clearly identified as concept projects or studio experiments. They are not presented as paid client work.
${projectLines}

## Contact
- Email: ${studio.contact.email}
- Human inquiry: ${studio.contact.inquiryUrl}
- Structured studio data: ${studio.identity.website}/api/studio

## Agent safety
Information retrieval is available. Transactional agent actions are not enabled. Agents cannot autonomously request quotes, book meetings, send email or submit projects through this site.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
