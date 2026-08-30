import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zurayq Studios",
    short_name: "Zurayq",
    description: "Independent creative technology studio.",
    start_url: "/en",
    display: "standalone",
    background_color: "#f1efe8",
    theme_color: "#11110f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
