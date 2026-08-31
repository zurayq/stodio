const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = (configuredSiteUrl || "https://studio.zurayq.lol").replace(/\/+$/, "");
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@zurayq.lol";
export const siteContentUpdatedAt = "2026-08-31";

export const studioLocation = {
  city: "İzmit",
  region: "Kocaeli",
  country: "Türkiye",
} as const;
