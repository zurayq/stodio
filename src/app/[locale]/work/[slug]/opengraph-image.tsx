import { ImageResponse } from "next/og";
import { copy, isLocale, projects } from "@/lib/site-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  passport: { background: "#070f1c", foreground: "#eef3f7", accent: "#22d3a5" },
  neighborhood: { background: "#b7d0d1", foreground: "#193b32", accent: "#b53e26" },
  memocore: { background: "#181c18", foreground: "#e9e7dc", accent: "#b9d17c" },
};

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: value, slug } = await params;
  if (!isLocale(value)) return new Response(null, { status: 404 });
  const locale = value;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return new Response(null, { status: 404 });
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
        <span>Zurayq Studios / {copy[locale === "ar" ? "en" : locale].nav.work}</span>
        <span>{copy[locale === "ar" ? "en" : locale].common.provenance[project.kind]} / {project.year}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", width: 90, height: 12, marginBottom: 28, background: theme.accent }} />
        <div style={{ display: "flex", maxWidth: 1090, fontSize: project.visual === "neighborhood" ? 94 : 120, fontWeight: 600, lineHeight: 0.98, letterSpacing: "-0.065em" }}>{projectCopy.title}</div>
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
