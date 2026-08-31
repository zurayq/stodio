import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/config";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zurayq Studios — Custom web design and development",
    template: "%s — Zurayq Studios",
  },
  description:
    "Independent creative technology studio in İzmit, Kocaeli, building custom websites, web applications and interactive digital experiences.",
  applicationName: "Zurayq Studios",
  authors: [{ name: "Zurayq Studios" }],
  creator: "Zurayq Studios",
  category: "Creative technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: "/icon.svg" },
};

export const studioViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1efe8" },
    { media: "(prefers-color-scheme: dark)", color: "#11110f" },
  ],
};
