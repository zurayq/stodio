import { contactEmail, siteUrl } from "@/lib/config";
import { projects } from "@/lib/site-data";

export function getStudioMachineData() {
  return {
    schemaVersion: "1.0",
    updatedAt: "2026-08-30",
    identity: {
      name: "Zurayq Studios",
      type: "Independent creative technology studio",
      description:
        "Zurayq Studios designs and builds custom websites, web applications and interactive digital experiences.",
      website: siteUrl,
      workingModel: "Small, independent and direct; working internationally.",
    },
    services: [
      {
        id: "websites",
        name: "Websites",
        capabilities: [
          "Custom marketing websites",
          "Hospitality and restaurant websites",
          "Portfolio and campaign websites",
          "Responsive design",
          "CMS-ready content systems",
          "Accessibility",
          "Performance and SEO foundations",
        ],
      },
      {
        id: "web-applications",
        name: "Web applications",
        capabilities: ["Dashboards", "Admin panels", "Booking systems", "Customer portals", "Internal tools", "Custom workflows"],
      },
      {
        id: "creative-development",
        name: "Creative development",
        capabilities: ["Interactive storytelling", "Canvas", "Creative coding", "Advanced motion", "Experimental interfaces"],
      },
      {
        id: "3d-motion",
        name: "3D and motion",
        capabilities: ["WebGL", "Three.js", "Interactive models", "Spatial typography", "Motion systems"],
      },
    ],
    languages: [
      { code: "en", name: "English", direction: "ltr" },
      { code: "tr", name: "Turkish", direction: "ltr" },
      { code: "ar", name: "Arabic", direction: "rtl", note: "Purpose-designed RTL behavior; not a blind mirrored layout." },
    ],
    projectTypes: [
      "Website",
      "Web application",
      "Interactive experience",
      "3D or motion experience",
      "Existing website redesign",
      "Custom business system",
    ],
    approach: {
      stages: ["Talk", "Design", "Build", "Ship"],
      pricing: "Project-scoped. The inquiry form uses ranges and accepts 'not sure yet'.",
      timeline: "Discussed per project after goals, scope, content and constraints are understood.",
      availability: "Confirmed directly for each inquiry; no live availability claim is published.",
    },
    portfolio: projects.map((project) => ({
      id: project.slug,
      name: project.copy.en.title,
      provenance: project.kind === "concept" ? "concept project" : "studio experiment",
      year: project.year,
      description: project.copy.en.summary,
      disciplines: project.disciplines,
      url: `${siteUrl}/en/work/${project.slug}`,
    })),
    contact: {
      email: contactEmail,
      inquiryUrl: `${siteUrl}/en#contact`,
      formBehavior: "Creates a prefilled email in the visitor's email application; nothing is sent automatically.",
    },
    agentActions: {
      informationRetrieval: true,
      transactionalActionsEnabled: false,
      note: "No autonomous quote, booking, email or project-submission actions are enabled.",
    },
  };
}
