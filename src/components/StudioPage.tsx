import Link from "next/link";
import { Capabilities } from "@/components/Capabilities";
import { ContactDialog } from "@/components/ContactDialog";
import { OpenProjectButton } from "@/components/OpenProjectButton";
import { ProjectArtwork } from "@/components/ProjectArtwork";
import { ResponsiveZ } from "@/components/ResponsiveZ";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { contactEmail } from "@/lib/config";
import { copy, Locale, localeConfig, locales, projects } from "@/lib/site-data";

type StudioPageProps = {
  locale: Locale;
};

export function StudioPage({ locale }: StudioPageProps) {
  const content = copy[locale];
  const direction = localeConfig[locale].direction;

  return (
    <div className="site-shell" lang={locale} dir={direction}>
      <a className="skip-link" href="#main-content">{content.nav.skip}</a>
      <SiteHeader locale={locale} copy={content} />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy page-grid">
            <p className="eyebrow hero__eyebrow">{content.hero.eyebrow}</p>
            <h1 id="hero-title">
              <span>{content.hero.lineOne}</span>
              <span className="hero__line-two">{content.hero.lineTwo}</span>
              <span className="hero__line-three">{content.hero.lineThree}</span>
            </h1>
            <div className="hero__support">
              <p>{content.hero.body}</p>
              <div className="hero__actions">
                <OpenProjectButton className="button button--ink">
                  {content.common.startProject} <span aria-hidden="true">↗</span>
                </OpenProjectButton>
                <a className="text-link" href="#work">
                  {content.common.selectedWork} <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <ResponsiveZ
              label={content.hero.fieldLabel}
              hint={content.hero.fieldHint}
              signal={content.hero.signal}
            />
          </div>
          <div className="hero__scroll" aria-hidden="true"><span>SCROLL</span><i /></div>
        </section>

        <section className="thesis section-pad" id="studio" aria-labelledby="thesis-title">
          <div className="section-number" aria-hidden="true">/01</div>
          <div className="page-grid">
            <Reveal className="thesis__heading">
              <p className="eyebrow">{content.thesis.eyebrow}</p>
              <h2 id="thesis-title">{content.thesis.title}</h2>
            </Reveal>
            <Reveal className="thesis__body" delay={80}>
              <p>{content.thesis.body}</p>
              {locale === "tr" && (
                <Link className="local-service-link" href="/tr/izmit-web-tasarim">
                  İzmit web tasarım ve web geliştirme hizmetleri <span aria-hidden="true">↗</span>
                </Link>
              )}
            </Reveal>
            <div className="thesis__notes">
              {content.thesis.notes.map((note, index) => (
                <Reveal className="thesis-note" delay={index * 70} key={note.index}>
                  <small>{note.index}</small>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work" aria-labelledby="work-title">
          <div className="section-number" aria-hidden="true">/02</div>
          <div className="page-grid work__intro">
            <Reveal>
              <p className="eyebrow">{content.work.eyebrow}</p>
              <h2 id="work-title">{content.work.title}</h2>
            </Reveal>
            <Reveal className="work__intro-copy" delay={100}>
              <p>{content.work.body}</p>
              <small>{content.work.honesty}</small>
            </Reveal>
          </div>
          <div className="work-list">
            {projects.map((project, index) => {
              const projectCopy = project.copy[locale];
              const kind = content.common.provenance[project.kind];
              return (
                <Reveal className={`work-item work-item--${index + 1}`} key={project.slug}>
                  <Link
                    href={`/${locale}/work/${project.slug}`}
                    aria-label={`${content.common.exploreProject}: ${projectCopy.title}`}
                    data-analytics-event="case_study_view"
                    data-analytics-project={project.slug}
                  >
                    <div className="work-item__media">
                      <ProjectArtwork project={project} locale={locale} />
                      <span className="work-item__index">0{index + 1}</span>
                      <span className="work-item__view">{content.common.exploreProject} ↗</span>
                    </div>
                    <div className="work-item__meta">
                      <div>
                        <span className="project-kind">{kind}</span>
                        <h3>{projectCopy.title}</h3>
                      </div>
                      <p>{projectCopy.summary}</p>
                      <div className="project-disciplines">
                        {project.disciplines[locale].map((item) => <span key={item}>{item}</span>)}
                        <i>{project.year}</i>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="services section-pad" id="services" aria-labelledby="services-title">
          <div className="section-number" aria-hidden="true">/03</div>
          <div className="page-grid services__heading">
            <Reveal>
              <p className="eyebrow eyebrow--light">{content.services.eyebrow}</p>
              <h2 id="services-title">{content.services.title}</h2>
            </Reveal>
            <p className="services__instruction">{content.services.instruction} ↘</p>
          </div>
          <Capabilities data={content.services} />
        </section>

        <section className="language-section section-pad" aria-labelledby="language-title">
          <div className="section-number" aria-hidden="true">/04</div>
          <div className="page-grid">
            <Reveal className="language-section__copy">
              <p className="eyebrow">{content.language.eyebrow}</p>
              <h2 id="language-title">{content.language.title}</h2>
              <p>{content.language.body}</p>
            </Reveal>
            <div className="language-stage" aria-label="Choose language">
              {locales.map((item, index) => (
                <Reveal delay={index * 80} key={item}>
                  <Link
                    href={`/${item}#language-title`}
                    lang={item}
                    hrefLang={item}
                    aria-current={item === locale ? "page" : undefined}
                  >
                    <small>0{index + 1}</small>
                    <span>{item === "en" ? "English" : item === "tr" ? "Türkçe" : "العربية"}</span>
                    <i aria-hidden="true">↗</i>
                  </Link>
                </Reveal>
              ))}
            </div>
            <p className="language-section__note">{content.language.note}</p>
          </div>
        </section>

        <section className="why section-pad" aria-labelledby="why-title">
          <div className="section-number" aria-hidden="true">/05</div>
          <div className="page-grid">
            <Reveal className="why__heading">
              <p className="eyebrow">{content.why.eyebrow}</p>
              <h2 id="why-title">{content.why.title}</h2>
              <p className="why__lead">{content.why.lead}</p>
            </Reveal>
            <Reveal className="why__body" delay={100}>
              <p>{content.why.body}</p>
              <div className="why__signature" aria-hidden="true">Z/</div>
            </Reveal>
            <div className="principles">
              {content.why.principles.map((principle, index) => (
                <Reveal className="principle" delay={index * 60} key={principle.title}>
                  <small>0{index + 1}</small>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                  <i aria-hidden="true">↘</i>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-pad" id="process" aria-labelledby="process-title">
          <div className="section-number" aria-hidden="true">/06</div>
          <div className="page-grid process__heading">
            <Reveal>
              <p className="eyebrow">{content.process.eyebrow}</p>
              <h2 id="process-title">{content.process.title}</h2>
            </Reveal>
          </div>
          <div className="process-strip">
            {content.process.items.map((item, index) => (
              <Reveal className="process-step" delay={index * 70} key={item.number}>
                <small>{item.number}</small>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span aria-hidden="true">{index < content.process.items.length - 1 ? "↘" : "●"}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="contact__noise" aria-hidden="true" />
          <div className="page-grid">
            <Reveal className="contact__main">
              <p className="eyebrow eyebrow--light">{content.contact.eyebrow}</p>
              <h2 id="contact-title">{content.contact.title}</h2>
              <p>{content.contact.body}</p>
            </Reveal>
            <Reveal className="contact__actions" delay={100}>
              <OpenProjectButton className="contact-disc" aria-label={`${content.common.startProject} — Zurayq Studios`}>
                <span>{content.common.startProject}</span><i aria-hidden="true">↗</i>
              </OpenProjectButton>
              <p>{content.contact.reassurance}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top page-grid">
          <div>
            <div className="wordmark wordmark--footer"><span className="wordmark__mark">Z/</span><span>Zurayq Studios</span></div>
            <p>{content.footer.descriptor}</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${contactEmail}`} data-analytics-event="email_cta_click">{contactEmail}</a>
            <a href="#work">{content.nav.work}</a>
            <a href="#services">{content.nav.services}</a>
            <a href="#studio">{content.nav.studio}</a>
            {locale === "tr" && <Link href="/tr/izmit-web-tasarim">İzmit web tasarım</Link>}
            <Link href="/agent">Agent interface</Link>
          </div>
          <div className="footer-meta">
            <span>{content.footer.availability}</span>
            <span>{content.footer.localTime}</span>
            <span>{content.footer.languageNote}</span>
          </div>
        </div>
        <div className="site-footer__word" aria-hidden="true">ZURAYQ</div>
        <div className="site-footer__base"><span>© {new Date().getFullYear()} Zurayq Studios</span><a href="#main-content">↑ TOP</a></div>
      </footer>
      <ContactDialog data={content.contact} />
    </div>
  );
}
