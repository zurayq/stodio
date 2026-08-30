import { ImageResponse } from "next/og";
import { copy, isLocale } from "@/lib/site-data";

export const alt = "Zurayq Studios — independent creative technology studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  // ImageResponse cannot reliably shape Arabic without embedding a dedicated font.
  // Keep the Arabic page metadata localized while using a dependency-free Latin share card.
  const content = locale === "ar" ? copy.en : copy[locale];
  const localeLabel = locale === "ar" ? "AR / RTL EXPERIENCE" : locale.toUpperCase();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        padding: "54px",
        color: "#11110f",
        background: "#f1efe8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "68%", justifyContent: "space-between" }}>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Zurayq Studios / Creative technology / {localeLabel}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 600, lineHeight: 0.9, letterSpacing: "-0.06em" }}>
          <span>{content.hero.lineOne}</span>
          <span>{content.hero.lineTwo}</span>
          <span style={{ color: "#ff5733" }}>{content.hero.lineThree}</span>
        </div>
        <div style={{ display: "flex", fontSize: 18 }}>Web / Applications / Interaction / Motion</div>
      </div>
      <div style={{ position: "absolute", right: 54, top: 54, bottom: 54, width: 320, display: "flex", background: "#11110f" }}>
        <div style={{ position: "absolute", left: 38, right: 38, top: 90, height: 18, display: "flex", background: "#ff5733" }} />
        <div style={{ position: "absolute", left: 38, right: 38, bottom: 90, height: 18, display: "flex", background: "#ff5733" }} />
        <div style={{ position: "absolute", left: 145, top: 98, width: 18, height: 346, display: "flex", background: "#ff5733", transform: "rotate(38deg)" }} />
        <div style={{ position: "absolute", left: 20, top: 20, display: "flex", color: "#f1efe8", fontSize: 14 }}>Z / LIVE SYSTEM</div>
      </div>
    </div>,
    size,
  );
}
