import { ReactNode } from "react";
import { baseMetadata, studioViewport } from "@/lib/metadata";
import { isLocale, localeConfig, locales } from "@/lib/site-data";
import "../globals.css";

export const metadata = baseMetadata;
export const viewport = studioViewport;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";

  return (
    <html lang={locale} dir={localeConfig[locale].direction}>
      <body>{children}</body>
    </html>
  );
}
