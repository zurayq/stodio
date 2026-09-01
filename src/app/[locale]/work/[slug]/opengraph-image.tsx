import { ImageResponse } from "next/og";
import { isLocale, projects } from "@/lib/site-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  sahra: { background: "#d76a48", foreground: "#27150e", accent: "#f6c861" },
  relay: { background: "#4d5bec", foreground: "#f4f2ea", accent: "#a9ff57" },
  form: { background: "#c7d5b1", foreground: "#122017", accent: "#ff5733" },
  type: { background: "#11110f", foreground: "#f1efe8", accent: "#ff5733" },
};

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: value, slug } = await params;
  const locale = isLocale(value) ? value : "en";
  const project = projects.find((item) => item.slug === slug) ?? projects[0];
  // The Arabic page copy stays fully localized; the social card uses the Latin
  // project name so ImageResponse never reaches for a runtime-hosted font.
  const projectCopy = project.copy[locale === "ar" ? "en" : locale];
  const theme = colors[project.visual];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "54px",
        color: theme.foreground,
        background: theme.background,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        <span>Zurayq Studios / Selected work</span>
        <span>{project.kind === "concept" ? "Concept project" : "Studio experiment"} / {project.year}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", width: 90, height: 12, marginBottom: 28, background: theme.accent }} />
        <div style={{ display: "flex", fontSize: 132, fontWeight: 600, lineHeight: 0.78, letterSpacing: "-0.075em" }}>{projectCopy.title}</div>
        <div style={{ display: "flex", maxWidth: 760, marginTop: 34, fontSize: 28, lineHeight: 1.2 }}>{projectCopy.descriptor}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17 }}>
        <span>{project.disciplines[locale === "ar" ? "en" : locale].join(" / ")}</span>
        <span style={{ color: theme.accent }}>Z/</span>
      </div>
    </div>,
    size,
  );
}
