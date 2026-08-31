import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactDialog } from "@/components/ContactDialog";
import { OpenProjectButton } from "@/components/OpenProjectButton";
import { ProjectArtwork } from "@/components/ProjectArtwork";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { contactEmail } from "@/lib/config";
import { copy, isLocale, localeConfig, locales, projects } from "@/lib/site-data";
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

type CasePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const projectCopy = project.copy[locale];
  return createLocalizedMetadata({
    locale,
    title: `${projectCopy.title} — ${project.kind === "concept" ? copy[locale].common.concept : copy[locale].common.experiment}`,
    description: projectCopy.summary,
    path: `/work/${slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: CasePageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  if (projectIndex < 0) notFound();
  const project = projects[projectIndex];
  const content = copy[locale];
  const projectCopy = project.copy[locale];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const nextCopy = nextProject.copy[locale];
  const kind = project.kind === "concept" ? content.common.concept : content.common.experiment;
  const projectUrl = localizedUrl(locale, `/work/${slug}`);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(content.meta.description),
      websiteNode(),
      webPageNode({
        url: projectUrl,
        name: projectCopy.title,
        description: projectCopy.summary,
        locale,
      }),
      breadcrumbNode([
        { name: "Zurayq Studios", url: localizedUrl(locale) },
        { name: projectCopy.title, url: projectUrl },
      ]),
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}#creativework`,
        name: projectCopy.title,
        description: projectCopy.summary,
        dateCreated: project.year,
        creator: { "@id": absoluteUrl("/#studio") },
        mainEntityOfPage: { "@id": `${projectUrl}#webpage` },
        url: projectUrl,
        inLanguage: locale,
        genre: kind,
      },
    ],
  };

  return (
    <div className="site-shell case-shell" lang={locale} dir={localeConfig[locale].direction}>
      <a className="skip-link" href="#case-content">{content.nav.skip}</a>
      <SiteHeader locale={locale} copy={content} languagePath={`/work/${slug}`} />
      <main className="case-study" id="case-content">
        <header className="case-hero section-pad">
          <div className="page-grid">
            <Link className="case-back" href={`/${locale}/#work`}>← {content.common.backToWork}</Link>
            <div className="case-hero__title">
              <span className="project-kind">{kind}</span>
              <h1>{projectCopy.title}</h1>
              <p>{projectCopy.descriptor}</p>
            </div>
            <p className="case-hero__summary">{projectCopy.summary}</p>
            <dl className="case-facts">
              <div><dt>{content.common.year}</dt><dd>{project.year}</dd></div>
              <div><dt>{content.common.disciplines}</dt><dd>{project.disciplines.join(" / ")}</dd></div>
            </dl>
          </div>
        </header>

        <div className="case-artwork page-edge">
          <ProjectArtwork visual={project.visual} title={projectCopy.title} large />
        </div>

        <div className="case-notice page-grid">
          <span aria-hidden="true">HONESTY NOTE /</span>
          <p>{content.caseStudy.note}</p>
        </div>

        <section className="case-narrative section-pad">
          <div className="page-grid">
            {[
              ["01", content.caseStudy.context, projectCopy.context],
              ["02", content.caseStudy.idea, projectCopy.idea],
              ["03", content.caseStudy.system, projectCopy.system],
              ["04", content.caseStudy.build, projectCopy.build],
            ].map(([number, title, body], index) => (
              <Reveal className="case-block" delay={index * 60} key={number}>
                <small>{number}</small>
                <h2>{title}</h2>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {locale === "tr" && (
          <aside className="case-service-note" aria-label="İlgili hizmet">
            <span>İLGİLİ HİZMET /</span>
            <p>
              Benzer bir projeyi nasıl ele aldığımızı görmek için{" "}
              <Link href="/tr/izmit-web-tasarim">İzmit web tasarım ve web geliştirme hizmetlerini</Link>{" "}
              inceleyin.
            </p>
          </aside>
        )}

        <section className="next-project">
          <Link href={`/${locale}/work/${nextProject.slug}`}>
            <span>{content.caseStudy.nextProject} / 0{(projectIndex + 1) % projects.length + 1}</span>
            <strong>{nextCopy.title}</strong>
            <i aria-hidden="true">↗</i>
          </Link>
        </section>

        <section className="case-contact" id="contact">
          <p>{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <OpenProjectButton className="button button--paper">{content.common.startProject} ↗</OpenProjectButton>
        </section>
      </main>
      <footer className="case-footer">
        <span>Zurayq Studios / {new Date().getFullYear()}</span>
        <a href={`mailto:${contactEmail}`} data-analytics-event="email_cta_click">{contactEmail}</a>
        <Link href={`/${locale}`}>Z/</Link>
      </footer>
      <ContactDialog data={content.contact} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </div>
  );
}
