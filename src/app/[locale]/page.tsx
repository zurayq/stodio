import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudioPage } from "@/components/StudioPage";
import { copy, isLocale, locales } from "@/lib/site-data";
import {
  absoluteUrl,
  createLocalizedMetadata,
  localizedUrl,
  organizationNode,
  serializeJsonLd,
  webPageNode,
  websiteNode,
} from "@/lib/seo";

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
  return createLocalizedMetadata({
    locale,
    title: content.meta.title,
    description: content.meta.description,
  });
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = copy[locale];
  const pageUrl = localizedUrl(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(content.meta.description),
      websiteNode(),
      webPageNode({
        url: pageUrl,
        name: content.meta.title,
        description: content.meta.description,
        locale,
      }),
      {
        "@type": "ItemList",
        name: "Zurayq Studios services",
        itemListElement: content.services.items.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.body,
            url: `${pageUrl}#services`,
            provider: { "@id": absoluteUrl("/#studio") },
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
