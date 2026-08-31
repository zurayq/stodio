import type { Metadata } from "next";
import { siteUrl, studioLocation } from "@/lib/config";
import { Locale, localeConfig, locales } from "@/lib/site-data";

export const studioName = "Zurayq Studios";
export const studioAliases = ["Zurayq", "Zurayq Studio", "زريق", "زريق ستوديو"] as const;

export const studioCapabilities = [
  "Custom web design",
  "Web development",
  "Web applications",
  "Custom software",
  "Interactive websites",
  "Creative development",
  "Three.js",
  "WebGL",
  "Multilingual websites",
  "Arabic RTL web design",
  "Technical SEO",
  "AI discoverability",
  "Machine-readable web architecture",
  "Agent-readable interfaces",
] as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function localizedUrl(locale: Locale, path = "") {
  const normalizedPath = path && !path.startsWith("/") ? `/${path}` : path;
  return absoluteUrl(`/${locale}${normalizedPath}`);
}

export function localizedAlternates(path = "") {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, localizedUrl(locale, path)])),
    "x-default": localizedUrl("en", path),
  };
}

type LocalizedMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  languageAlternates?: boolean;
};

export function createLocalizedMetadata({
  locale,
  title,
  description,
  path = "",
  type = "website",
  languageAlternates = true,
}: LocalizedMetadataInput): Metadata {
  const url = localizedUrl(locale, path);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      ...(languageAlternates ? { languages: localizedAlternates(path) } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type,
      url,
      siteName: studioName,
      locale: localeConfig[locale].ogLocale,
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeConfig[item].ogLocale),
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({ title, description, path, type = "website" }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { type, url, siteName: studioName, title, description, locale: "en_US" },
    twitter: { card: "summary", title, description },
  };
}

export function organizationNode(description: string) {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#studio"),
    name: studioName,
    alternateName: [...studioAliases],
    url: siteUrl,
    description,
    location: {
      "@type": "Place",
      name: `${studioLocation.city}, ${studioLocation.region}, ${studioLocation.country}`,
    },
    areaServed: [
      { "@type": "City", name: studioLocation.city },
      { "@type": "AdministrativeArea", name: studioLocation.region },
      { "@type": "Country", name: studioLocation.country },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsLanguage: ["English", "Turkish", "Arabic"],
    knowsAbout: [...studioCapabilities],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: studioName,
    alternateName: ["Zurayq", "زريق"],
    url: siteUrl,
    inLanguage: [...locales],
    publisher: { "@id": absoluteUrl("/#studio") },
  };
}

type WebPageNodeInput = {
  url: string;
  name: string;
  description: string;
  locale: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
};

export function webPageNode({ url, name, description, locale, type = "WebPage" }: WebPageNodeInput) {
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#studio") },
  };
}

export function breadcrumbNode(items: Array<{ name: string; url: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
