import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudioPage } from "@/components/StudioPage";
import { contactEmail, siteUrl } from "@/lib/config";
import { copy, isLocale, localeConfig, locales } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const seoMeta = {
  en: {
    title: "Custom Web Design & Development | Zurayq Studios",
    description:
      "Zurayq Studios designs and develops custom websites, web apps and interactive digital experiences, with multilingual English, Turkish and Arabic support.",
  },
  tr: {
    title: "İzmit Web Tasarım & Özel Yazılım | Zurayq Studios",
    description:
      "İzmit ve Kocaeli merkezli Zurayq Studios; özel web tasarım, web uygulaması, özel yazılım ve Türkçe, İngilizce, Arapça çok dilli web siteleri geliştirir.",
  },
  ar: {
    title: "زريق ستوديو | تصميم وتطوير مواقع وتطبيقات ويب",
    description:
      "زريق ستوديو (Zurayq Studios) يصمم ويطور مواقع ويب مخصصة، تطبيقات ويب وتجارب رقمية تفاعلية باللغات العربية والتركية والإنجليزية.",
  },
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const meta = seoMeta[locale];
  return {
    title: { absolute: meta.title },
    description: meta.description,
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
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
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
        alternateName: ["Zurayq", "Zurayq Studio", "زريق", "زريق ستوديو"],
        url: siteUrl,
        email: contactEmail,
        description: seoMeta[locale].description,
        knowsLanguage: ["English", "Turkish", "Arabic"],
        knowsAbout: [
          "Web design",
          "Web development",
          "Web applications",
          "Custom software",
          "Interactive websites",
          "Creative development",
          "Three.js",
          "WebGL",
          "Multilingual websites",
          "Arabic RTL web design",
        ],
        areaServed: [
          { "@type": "City", name: "İzmit" },
          { "@type": "AdministrativeArea", name: "Kocaeli" },
          { "@type": "Country", name: "Türkiye" },
          "Worldwide",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Zurayq Studios",
        alternateName: ["Zurayq", "زريق"],
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
