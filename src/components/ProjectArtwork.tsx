import Image from "next/image";
import type { Locale, Project } from "@/lib/site-data";
import { artworkCopy } from "@/lib/project-artwork-data";

type ProjectArtworkProps = { project: Project; locale: Locale; large?: boolean };

function PassportArtwork({ project, locale }: ProjectArtworkProps) {
  const text = artworkCopy[locale].passport;
  return (
    <>
      <Image className="passport-globe" src="/work/passport-globe.svg" width={1000} height={1000} alt="" />
      <div className="art-heading"><small>{project.copy[locale].title}</small><strong>{text.heading}</strong></div>
      <div className="passport-selection"><small>{text.selected}</small><strong>{text.country}</strong><span dir="ltr">TR / 792</span></div>
      <div className="passport-legend">{text.statuses.map((status, i) => <span key={status}><i className={`visa-dot visa-dot--${i}`} />{status}</span>)}</div>
      <span className="passport-hint">{text.hint}</span>
    </>
  );
}

function NeighborhoodArtwork({ project, locale }: ProjectArtworkProps) {
  const text = artworkCopy[locale].neighborhood;
  return (
    <>
      <Image className="neighborhood-map" src="/work/neighborhood-area.svg" width={1000} height={600} alt="" />
      <div className="art-heading"><small>{project.copy[locale].title}</small><strong>{text.heading}</strong></div>
      <div className="neighborhood-labels" dir="ltr"><span>İSTANBUL</span><span>KOCAELİ</span></div>
      <div className="neighborhood-markers" dir="ltr">
        {[["40%", "48%", 0], ["46%", "55%", 1], ["58%", "50%", 2], ["65%", "64%", 4]].map(([left, top, category], i) => (
          <span className={`neighborhood-pin ${i === 3 ? "neighborhood-pin--selected" : ""}`} style={{ left, top }} key={i}>
            <i>{String(Number(category) + 1).padStart(2, "0")}</i>
          </span>
        ))}
      </div>
      <div className="neighborhood-post"><small>{text.sampleLabel}</small><strong>{text.sampleTitle}</strong><span>{text.sampleDetail}</span></div>
      <div className="neighborhood-categories">{text.categories.map((category, i) => <span key={category}><i>{String(i+1).padStart(2, "0")}</i>{category}</span>)}</div>
      <span className="neighborhood-area">{text.area}</span>
      <span className="neighborhood-attribution" dir="ltr">geoBoundaries / © OpenStreetMap contributors</span>
    </>
  );
}

function MemoCoreArtwork({ project, locale }: ProjectArtworkProps) {
  const text = artworkCopy[locale].memocore;
  return (
    <>
      <div className="art-heading"><small>{project.copy[locale].title}</small><strong>{text.heading}</strong></div>
      <div className="memo-system">
        <div className="memo-input"><small>{text.input}</small><p>“{text.message}”</p></div>
        <ol className="memo-pipeline">{text.nodes.map((node, i) => <li key={node}><span>0{i+1}</span><b>{node}</b>{i < text.nodes.length-1 && <i aria-hidden="true">↓</i>}</li>)}</ol>
        <div className="memo-record">
          <small>{text.output}</small>
          <code dir="ltr"><span>intent: add_recurring_event</span><span>title: <bdi>{text.recordTitle}</bdi></span><span>recurrence_pattern:</span><span className="memo-value">every monday</span><span>time: 09:00</span><span>is_active: true</span></code>
          <span className="memo-state"><i />{text.state}</span>
        </div>
      </div>
      <p className="memo-note">{text.note}</p>
    </>
  );
}

export function ProjectArtwork({ project, locale, large = false }: ProjectArtworkProps) {
  const text = artworkCopy[locale][project.visual];
  return (
    <div className={`project-art project-art--${project.visual} ${large ? "project-art--large" : ""}`} role="img" aria-label={text.alt}>
      <div className="art-composition" aria-hidden="true">
        <span className="art-caption">{text.caption}</span>
        {project.visual === "passport" && <PassportArtwork project={project} locale={locale} />}
        {project.visual === "neighborhood" && <NeighborhoodArtwork project={project} locale={locale} />}
        {project.visual === "memocore" && <MemoCoreArtwork project={project} locale={locale} />}
      </div>
    </div>
  );
}
