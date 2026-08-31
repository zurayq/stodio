import { ImageResponse } from "next/og";

export const alt = "İzmit web tasarım ve web geliştirme — Zurayq Studios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        background: "#d9ff4a",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "72%", justifyContent: "space-between" }}>
        <div style={{ display: "flex", fontSize: 20, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Zurayq Studios / İzmit · Kocaeli
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 600, lineHeight: 0.9, letterSpacing: "-0.055em" }}>
          <span>Özel web tasarım</span>
          <span>ve web geliştirme.</span>
        </div>
        <div style={{ display: "flex", fontSize: 18 }}>
          Web siteleri / Web uygulamaları / Özel sistemler / Çok dilli deneyimler
        </div>
      </div>
      <div style={{ position: "absolute", right: 54, top: 54, bottom: 54, width: 260, display: "flex", background: "#11110f" }}>
        <div style={{ position: "absolute", right: 30, top: 28, display: "flex", color: "#d9ff4a", fontSize: 14 }}>41.0° N / 29.9° E</div>
        <div style={{ position: "absolute", left: 28, bottom: 30, display: "flex", color: "#f1efe8", fontSize: 132, fontWeight: 700, lineHeight: 0.8 }}>Z/</div>
      </div>
    </div>,
    size,
  );
}
