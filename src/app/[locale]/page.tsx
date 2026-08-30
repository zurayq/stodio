import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudioPage } from "@/components/StudioPage";
import { siteUrl } from "@/lib/config";
import { copy, isLocale, localeConfig, locales } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = copy[locale];
  return {
    title: { absolute: content.meta.title },
    description: content.meta.description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        tr: `${siteUrl}/tr`,
        ar: `${siteUrl}/ar`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${locale}`,
      siteName: "Zurayq Studios",
      locale: localeConfig[locale].ogLocale,
      title: content.meta.title,
      description: content.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
  };
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#studio`,
        name: "Zurayq Studios",
        url: siteUrl,
        description: copy[locale].meta.description,
        knowsLanguage: ["English", "Turkish", "Arabic"],
        areaServed: "Worldwide",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Zurayq Studios",
        url: `${siteUrl}/${locale}`,
        inLanguage: locale,
        publisher: { "@id": `${siteUrl}/#studio` },
      },
      {
        "@type": "ItemList",
        name: "Zurayq Studios services",
        itemListElement: copy[locale].services.items.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.body,
            provider: { "@id": `${siteUrl}/#studio` },
          },
        })),
      },
    ],
  };

  return (
    <>
      <StudioPage locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
