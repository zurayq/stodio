import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactDialog } from "@/components/ContactDialog";
import { OpenProjectButton } from "@/components/OpenProjectButton";
import { SiteHeader } from "@/components/SiteHeader";
import { contactEmail, siteUrl } from "@/lib/config";
import { copy } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "tr" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "tr") return { robots: { index: false, follow: false } };

  const title = "İzmit Web Tasarım ve Web Yazılım | Zurayq Studios";
  const description =
    "İzmit ve Kocaeli için özel web tasarım, web sitesi geliştirme, web uygulaması ve özel yazılım hizmetleri. Hazır tema yerine markaya ve ihtiyaca özel tasarım ve geliştirme.";

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${siteUrl}/tr/izmit-web-tasarim` },
    openGraph: {
      type: "website",
      url: `${siteUrl}/tr/izmit-web-tasarim`,
      siteName: "Zurayq Studios",
      locale: "tr_TR",
      title,
      description,
    },
  };
}

export default async function IzmitWebTasarimPage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "tr") notFound();

  const content = copy.tr;
  const url = `${siteUrl}/tr/izmit-web-tasarim`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "İzmit Web Tasarım ve Web Yazılım",
        serviceType: ["Web tasarım", "Web sitesi geliştirme", "Web uygulaması", "Özel yazılım"],
        description:
          "İzmit ve Kocaeli'deki işletmeler için özel web tasarım, web geliştirme, web uygulaması ve çok dilli dijital ürün geliştirme hizmetleri.",
        provider: {
          "@type": "Organization",
          "@id": `${siteUrl}/#studio`,
          name: "Zurayq Studios",
          alternateName: ["Zurayq", "زريق", "زريق ستوديو"],
          url: siteUrl,
          email: contactEmail,
        },
        areaServed: [
          { "@type": "City", name: "İzmit" },
          { "@type": "AdministrativeArea", name: "Kocaeli" },
        ],
        availableLanguage: ["Turkish", "English", "Arabic"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Zurayq Studios",
            item: `${siteUrl}/tr`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "İzmit Web Tasarım",
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <div className="site-shell" lang="tr" dir="ltr">
      <a className="skip-link" href="#main-content">İçeriğe geç</a>
      <SiteHeader locale="tr" copy={content} />
      <main id="main-content">
        <section className="case-hero section-pad" aria-labelledby="local-seo-title">
          <div className="page-grid">
            <Link className="case-back" href="/tr">← Zurayq Studios</Link>
            <div className="case-hero__title">
              <span className="project-kind">İzmit / Kocaeli</span>
              <h1 id="local-seo-title">İzmit web tasarım ve özel web yazılım</h1>
              <p>Hazır tema değil. İşletmeye ve ihtiyaca göre tasarlanmış, gerçekten özel web deneyimleri.</p>
            </div>
            <p className="case-hero__summary">
              Zurayq Studios; İzmit ve Kocaeli'deki işletmeler, markalar ve girişimler için web siteleri,
              web uygulamaları ve özel dijital sistemler tasarlar ve geliştirir. Tasarım ve kod aynı süreçte
              ilerler; performans, mobil uyumluluk, SEO, erişilebilirlik ve bakım kolaylığı sonradan eklenen
              detaylar değil, işin temelidir.
            </p>
          </div>
        </section>

        <section className="case-narrative section-pad" aria-labelledby="services-title">
          <div className="page-grid">
            <article className="case-block">
              <small>01</small>
              <h2 id="services-title">İzmit'te hangi web hizmetlerini veriyoruz?</h2>
              <p>
                Kurumsal web sitesi, restoran ve otel sitesi, portföy sitesi, landing page, web uygulaması,
                yönetim paneli, rezervasyon veya başvuru sistemi ve işletmeye özel web tabanlı araçlar geliştiriyoruz.
                Projenin ihtiyacına göre Next.js, React, TypeScript, CMS entegrasyonları, animasyon ve Three.js gibi
                teknolojiler kullanabiliyoruz.
              </p>
            </article>

            <article className="case-block">
              <small>02</small>
              <h2>Neden hazır tema yerine özel web tasarım?</h2>
              <p>
                Çünkü her işletmenin içeriği, müşterisi ve hedefi aynı değil. Tasarımı hazır bir şablona sıkıştırmak
                yerine bilgi mimarisini, görsel dili ve kullanıcı akışını projeye göre oluşturuyoruz. Böylece site sadece
                farklı görünmekle kalmıyor; marka, içerik ve gerçek kullanıcı ihtiyaçlarıyla daha iyi eşleşiyor.
              </p>
            </article>

            <article className="case-block">
              <small>03</small>
              <h2>Türkçe, İngilizce ve Arapça web siteleri</h2>
              <p>
                Çok dilli projelerde yalnızca metin çevirisi yapmıyoruz. İngilizce, Türkçe ve Arapça içerik yapısını,
                tipografiyi ve yön kullanımını birlikte düşünüyoruz. Arapça projelerde RTL düzeni tasarım sisteminin
                başından itibaren ele alıyoruz.
              </p>
            </article>

            <article className="case-block">
              <small>04</small>
              <h2>İzmit web tasarım projesi nasıl başlar?</h2>
              <p>
                Önce ne yapılacağını, kimin kullanacağını ve sitenin hangi işi çözmesi gerektiğini konuşuyoruz. Sonra
                yapı ve tasarım yönü belirleniyor, gerçek ürün geliştiriliyor, mobil ve masaüstünde test ediliyor ve
                yayına alınıyor. Projenin kapsamına göre alan adı, hosting, CMS ve yayın sürecinde de yardımcı olabiliyoruz.
              </p>
            </article>
          </div>
        </section>

        <section className="case-contact" id="contact">
          <p>İzmit / Kocaeli</p>
          <h2>Bir web sitesi veya web uygulaması mı düşünüyorsun?</h2>
          <OpenProjectButton className="button button--paper">Projeyi anlat ↗</OpenProjectButton>
        </section>
      </main>

      <footer className="case-footer">
        <span>Zurayq Studios / {new Date().getFullYear()}</span>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        <Link href="/tr">Z/</Link>
      </footer>

      <ContactDialog data={content.contact} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}
