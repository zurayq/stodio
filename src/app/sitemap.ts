import type { MetadataRoute } from "next";
import { siteContentUpdatedAt } from "@/lib/config";
import { locales, projects } from "@/lib/site-data";
import { absoluteUrl, localizedAlternates, localizedUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = locales.map((locale) => ({
    url: localizedUrl(locale),
    lastModified: siteContentUpdatedAt,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages: localizedAlternates() },
  }));
  const projectPages = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: localizedUrl(locale, `/work/${project.slug}`),
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: localizedAlternates(`/work/${project.slug}`) },
    })),
  );
  const standalonePages: MetadataRoute.Sitemap = [
    {
      url: localizedUrl("tr", "/izmit-web-tasarim"),
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/agent"),
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
  return [...homePages, ...projectPages, ...standalonePages];
}
