import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactDialog } from "@/components/ContactDialog";
import { OpenProjectButton } from "@/components/OpenProjectButton";
import { SiteHeader } from "@/components/SiteHeader";
import { contactEmail, studioLocation } from "@/lib/config";
import { copy, projects } from "@/lib/site-data";
import {
  absoluteUrl,
  breadcrumbNode,
  createLocalizedMetadata,
  localizedUrl,
  organizationNode,
  serializeJsonLd,
  webPageNode,
  websiteNode,
} from "@/lib/seo";

const title = "İzmit Web Tasarım & Web Geliştirme | Zurayq Studios";
const description =
  "İzmit ve Kocaeli merkezli Zurayq Studios; özel web siteleri, web uygulamaları, çok dilli ve Arapça RTL deneyimleri tasarlar ve geliştirir.";

type LocalPageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "tr" }];
}

export async function generateMetadata({ params }: LocalPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "tr") return { robots: { index: false, follow: false } };
  return createLocalizedMetadata({
    locale: "tr",
    title,
    description,
    path: "/izmit-web-tasarim",
    languageAlternates: false,
  });
}

const serviceAreas = [
  {
    number: "01",
    title: "Özel web siteleri",
    body: "Marka, konaklama, restoran, portföy ve kampanya sitelerini hazır bir temayı doldurarak değil; içeriğe, kullanıcıya ve iş hedefine göre tasarlıyoruz.",
    items: ["İçerik mimarisi", "Duyarlı arayüz", "CMS hazırlığı", "Erişilebilirlik"],
  },
  {
    number: "02",
    title: "Web uygulamaları",
    body: "Rezervasyon akışları, müşteri portalları, yönetim panelleri ve şirket içi araçlar gibi yalnızca anlatmayan, gerçekten çalışan ürünler geliştiriyoruz.",
    items: ["Ürün tasarımı", "Kullanıcı akışları", "Yönetim araçları", "Özel entegrasyonlar"],
  },
  {
    number: "03",
    title: "Özel sistemler",
    body: "Hazır yazılımların iş akışına uymadığı durumlarda, süreci sadeleştiren ve gerektiği kadar kapsamlı özel iş sistemleri tasarlıyoruz.",
    items: ["İş analizi", "Rol ve yetkiler", "Veri akışları", "Sürdürülebilir mimari"],
  },
  {
    number: "04",
    title: "Çok dilli ve Arapça RTL",
    body: "Türkçe, İngilizce ve Arapçayı aynı yapıya sonradan sıkıştırmak yerine, içerik modeli ve arayüz davranışını dillerle birlikte kuruyoruz.",
    items: ["Yerelleştirilmiş URL'ler", "Hreflang", "RTL yerleşim", "Arapça tipografi"],
  },
];

const process = [
  ["01", "Konuş", "İşin ne olduğunu, kimin kullanacağını, içerikleri, gerekli işlevleri, zamanlamayı ve sınırları netleştiriyoruz."],
  ["02", "Tasarla", "Bilgi mimarisi, görsel yön, tipografi, kullanıcı deneyimi ve hareket dili birlikte şekilleniyor."],
  ["03", "Geliştir", "Onaylanan yönü gerçek ürüne çeviriyor; responsive davranışı, erişilebilirliği ve performansı cihazlar üzerinde test ediyoruz."],
  ["04", "Yayınla", "Teknik SEO kontrolleri, son optimizasyonlar ve yayın sürecinden sonra ihtiyaç varsa destek devam ediyor."],
];

const faqs = [
  {
    question: "Bir web sitesi projesi ne kadar sürer?",
    answer: "Süre; sayfa sayısından çok içerik hazırlığına, işlevlere, dil sayısına ve karar sürecine bağlıdır. İlk görüşmeden sonra kapsamı ve gerçekçi zamanlamayı birlikte netleştiririz.",
  },
  {
    question: "Hazır tema kullanıyor musunuz?",
    answer: "Projeyi hazır bir tema demosuna uydurmuyoruz. Yapı, görsel sistem ve etkileşimler markanın içeriği ve ihtiyaçları etrafında tasarlanır. Uygun olduğunda güvenilir altyapı ve bileşenlerden yararlanmak ise gereksiz yere her şeyi sıfırdan yazmamak demektir.",
  },
  {
    question: "Arapça ve RTL destekliyor musunuz?",
    answer: "Evet. Arapça sayfaları yalnızca sağa yaslamıyoruz; yönlü kontrolleri, okuma sırasını, karma Arapça/Latin metinleri, tipografiyi ve form davranışını RTL için ayrıca ele alıyoruz.",
  },
  {
    question: "Yalnızca İzmit ve Kocaeli'deki işletmelerle mi çalışıyorsunuz?",
    answer: "Hayır. Stüdyo İzmit, Kocaeli merkezli; ancak Türkiye'nin farklı şehirleri ve uluslararası projelerle uzaktan çalışabiliyor.",
  },
];

export default async function IzmitWebTasarimPage({ params }: LocalPageProps) {
  const { locale } = await params;
  if (locale !== "tr") notFound();

  const content = copy.tr;
  const pageUrl = localizedUrl("tr", "/izmit-web-tasarim");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(description),
      websiteNode(),
      webPageNode({ url: pageUrl, name: title, description, locale: "tr" }),
      breadcrumbNode([
        { name: "Zurayq Studios", url: localizedUrl("tr") },
        { name: "İzmit Web Tasarım", url: pageUrl },
      ]),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "İzmit'te özel web tasarım ve web geliştirme",
        description,
        serviceType: [
          "Özel web tasarım",
          "Web geliştirme",
          "Web uygulaması geliştirme",
          "Özel yazılım",
          "Çok dilli web sitesi",
          "Arapça RTL web geliştirme",
        ],
        provider: { "@id": absoluteUrl("/#studio") },
        areaServed: [
          { "@type": "City", name: studioLocation.city },
          { "@type": "AdministrativeArea", name: studioLocation.region },
          { "@type": "Country", name: studioLocation.country },
        ],
        url: pageUrl,
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
    ],
  };

  return (
    <div className="site-shell local-service-shell" lang="tr" dir="ltr">
      <a className="skip-link" href="#local-service-content">{content.nav.skip}</a>
      <SiteHeader locale="tr" copy={content} />

      <main id="local-service-content" className="local-service-page">
        <header className="local-service-hero section-pad">
          <div className="page-grid">
            <nav className="local-breadcrumb" aria-label="Sayfa yolu">
              <Link href="/tr">Zurayq Studios</Link><span aria-hidden="true">/</span><span>İzmit Web Tasarım</span>
            </nav>
            <p className="eyebrow local-service-hero__eyebrow">İzmit / Kocaeli / Türkiye</p>
            <h1>İzmit’te özel web tasarım ve web geliştirme</h1>
            <div className="local-service-hero__intro">
              <p>
                Zurayq Studios, İzmit ve Kocaeli merkezli bağımsız bir yaratıcı teknoloji stüdyosu. İşletmeler,
                markalar ve kurucular için birbirine benzemeyen web siteleri, web uygulamaları ve özel dijital
                sistemler tasarlayıp geliştiriyoruz.
              </p>
              <p>
                Tasarım ve geliştirmeyi ayrı teslimatlar gibi değil, aynı ürün kararının iki parçası olarak ele
                alıyoruz. Böylece görsel fikir, yayına çıktığında teknik niteliğini kaybetmiyor.
              </p>
              <div className="local-service-hero__actions">
                <OpenProjectButton className="button button--ink" aria-label="Zurayq Studios ile proje başlat">
                  Bir proje başlat <span aria-hidden="true">↗</span>
                </OpenProjectButton>
                <a className="text-link" href={`mailto:${contactEmail}`} data-analytics-event="email_cta_click">
                  E-posta gönder <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <aside className="local-fact" aria-label="Çalışma modeli">
              <span>YEREL / ULUSLARARASI</span>
              <strong>İzmit’ten, ihtiyaç olan yere.</strong>
              <p>Fiziksel ofis veya mağaza iddiası olmadan; doğrudan, uzaktan ve şeffaf çalışma.</p>
            </aside>
          </div>
        </header>

        <section className="local-service-areas section-pad" aria-labelledby="local-services-title">
          <div className="section-number" aria-hidden="true">/01</div>
          <div className="page-grid local-section-heading">
            <p className="eyebrow">Ne inşa ediyoruz</p>
            <h2 id="local-services-title">Web sitesi gerektiğinde site. Sistem gerektiğinde sistem.</h2>
            <p>Projenin adını en başta doğru koymak zorunda değilsiniz. Önce çözülmesi gereken işi anlarız.</p>
          </div>
          <div className="local-service-grid">
            {serviceAreas.map((service) => (
              <article key={service.number}>
                <small>{service.number}</small>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="local-quality section-pad" aria-labelledby="local-quality-title">
          <div className="section-number" aria-hidden="true">/02</div>
          <div className="page-grid">
            <div className="local-quality__heading">
              <p className="eyebrow eyebrow--light">Görünen ve görünmeyen kalite</p>
              <h2 id="local-quality-title">İlk ekran kadar, altındaki sistem de önemli.</h2>
            </div>
            <div className="local-quality__columns">
              <article>
                <h3>Performans ve erişilebilirlik</h3>
                <p>
                  Hızlı açılan sayfalar, akışkan responsive davranış, klavye kullanımı, okunabilir kontrast ve
                  azaltılmış hareket desteği tasarım sisteminin parçasıdır; yayından önce eklenen bir kontrol listesi değildir.
                </p>
              </article>
              <article>
                <h3>Teknik SEO temelleri</h3>
                <p>
                  Anlamlı HTML, doğru başlık hiyerarşisi, sayfa bazlı metadata, canonical URL, sitemap, robots,
                  yapılandırılmış veri ve ölçülebilir içerik mimarisi geliştirme sırasında kurulur.
                </p>
              </article>
              <article>
                <h3>Çok dilli arama mimarisi</h3>
                <p>
                  Türkçe, İngilizce ve Arapça sayfalar kendi URL’leri, dil sinyalleri ve doğal içerikleriyle çalışır.
                  Hreflang ilişkileri yalnızca gerçekten eşdeğer sayfalar arasında kurulur.
                </p>
              </article>
              <article>
                <h3>Modern ama ölçülü teknoloji</h3>
                <p>
                  React, Next.js, TypeScript, Canvas, Three.js veya WebGL birer amaç değil araçtır. Projeye katkı
                  sağlamayan ağır teknolojiyi yalnızca etkileyici göründüğü için yüklemiyoruz.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="local-process section-pad" aria-labelledby="local-process-title">
          <div className="section-number" aria-hidden="true">/03</div>
          <div className="page-grid local-section-heading">
            <p className="eyebrow">Süreç</p>
            <h2 id="local-process-title">Dört bölüm. Gerektiği kadar konuşma.</h2>
          </div>
          <ol>
            {process.map(([number, stepTitle, body]) => (
              <li key={number}>
                <small>{number}</small>
                <h3>{stepTitle}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="local-project-types section-pad" aria-labelledby="local-project-types-title">
          <div className="section-number" aria-hidden="true">/04</div>
          <div className="page-grid">
            <div className="local-project-types__intro">
              <p className="eyebrow">Proje türleri</p>
              <h2 id="local-project-types-title">Tek sayfadan özel iş sistemine.</h2>
              <p>
                Kurumsal siteler, restoran ve otel siteleri, portföyler, kampanya sayfaları, rezervasyon akışları,
                müşteri portalları, iç yönetim araçları ve özel web uygulamaları üzerinde çalışıyoruz.
              </p>
            </div>
            <div className="local-tech-list" aria-label="Kullanılan teknolojiler ve disiplinler">
              {[
                "Next.js", "React", "TypeScript", "Responsive design", "CMS", "WebGL", "Three.js",
                "Technical SEO", "Accessibility", "Multilingual UX", "Arabic RTL", "Structured data",
              ].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="local-studio section-pad" aria-labelledby="local-studio-title">
          <div className="section-number" aria-hidden="true">/05</div>
          <div className="page-grid">
            <div>
              <p className="eyebrow">Neden küçük bir stüdyo</p>
              <h2 id="local-studio-title">İşi anlatanlarla işi yapanlar aynı insanlar.</h2>
            </div>
            <div className="local-studio__copy">
              <p>
                Küçük kalmak, daha az katman ve daha doğrudan karar demek. Projeyi tanıyan kişi yalnızca toplantıda
                değil, tasarım ve geliştirme sırasında da işin içinde kalıyor.
              </p>
              <p>
                Bu yapı her proje için doğru olmayabilir. Ancak özel bir görsel dil, işlevsel bir sistem ve yakın
                iletişim arayan ekipler için güçlü bir çalışma biçimidir.
              </p>
              <Link href="/tr#studio">Zurayq Studios’un çalışma yaklaşımı ↗</Link>
            </div>
          </div>
        </section>

        <section className="local-related-work section-pad" aria-labelledby="local-work-title">
          <div className="section-number" aria-hidden="true">/06</div>
          <div className="page-grid local-section-heading">
            <p className="eyebrow">İlgili çalışmalar</p>
            <h2 id="local-work-title">Yaklaşımı gösteren stüdyo projeleri.</h2>
            <p>Bu çalışmalar ücretli müşteri işi değildir; konsept proje veya stüdyo deneyi olarak açıkça etiketlenir.</p>
          </div>
          <div className="local-work-links">
            {projects.slice(0, 3).map((project, index) => (
              <Link href={`/tr/work/${project.slug}`} key={project.slug}>
                <small>0{index + 1}</small>
                <strong>{project.copy.tr.title}</strong>
                <span>{project.copy.tr.descriptor}</span>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </section>

        <section className="local-faq section-pad" aria-labelledby="local-faq-title">
          <div className="section-number" aria-hidden="true">/07</div>
          <div className="page-grid">
            <div className="local-faq__heading">
              <p className="eyebrow">Sık sorulanlar</p>
              <h2 id="local-faq-title">Başlamadan önce bilinmesi faydalı olanlar.</h2>
            </div>
            <div className="local-faq__items">
              {faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary><span>0{index + 1}</span><strong>{faq.question}</strong><i aria-hidden="true">+</i></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="case-contact local-contact" id="contact" aria-labelledby="local-contact-title">
          <p>İZMİT / KOCAELİ / ULUSLARARASI</p>
          <h2 id="local-contact-title">Aklınızdaki projeyi konuşalım.</h2>
          <OpenProjectButton className="button button--paper" aria-label="Zurayq Studios ile proje başlat">
            Bir proje başlat <span aria-hidden="true">↗</span>
          </OpenProjectButton>
        </section>
      </main>

      <footer className="case-footer local-footer">
        <span>Zurayq Studios / İzmit, Kocaeli</span>
        <a href={`mailto:${contactEmail}`} data-analytics-event="email_cta_click">{contactEmail}</a>
        <Link href="/tr">Z/</Link>
      </footer>
      <ContactDialog data={content.contact} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }} />
    </div>
  );
}
