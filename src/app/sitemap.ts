import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/config";
import { locales, projects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const homePages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((item) => [item, `${siteUrl}/${item}`])),
    },
  }));

  const projectPages = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteUrl}/${locale}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [item, `${siteUrl}/${item}/work/${project.slug}`]),
        ),
      },
    })),
  );

  const discoveryPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/tr/izmit-web-tasarim`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/agent`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...homePages, ...projectPages, ...discoveryPages];
}
