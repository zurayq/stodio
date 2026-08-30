import { Project } from "@/lib/site-data";

type ProjectArtworkProps = {
  visual: Project["visual"];
  title: string;
  large?: boolean;
};

export function ProjectArtwork({ visual, title, large = false }: ProjectArtworkProps) {
  return (
    <div className={`project-art project-art--${visual} ${large ? "project-art--large" : ""}`} aria-label={`${title} visual study`} role="img">
      {visual === "sahra" && (
        <>
          <div className="sahra-sun" />
          <div className="sahra-arch sahra-arch--one" />
          <div className="sahra-arch sahra-arch--two" />
          <div className="sahra-type">
            <small>COAST / 36° N</small>
            <strong>SAHRA</strong>
            <span>سَاحِل / بَيْت</span>
          </div>
          <div className="sahra-ticket">
            <span>STAY 03</span>
            <b>Room for quiet.</b>
            <i>Explore ↓</i>
          </div>
        </>
      )}
      {visual === "relay" && (
        <>
          <div className="relay-rail">
            <b>R/</b>
            <span>QUEUE</span>
            <span>WORK</span>
            <span>PEOPLE</span>
            <i>08:42</i>
          </div>
          <div className="relay-main">
            <div className="relay-head"><span>Today / 07</span><b>Relay</b></div>
            {[
              ["Approve launch copy", "READY"],
              ["Review motion pass", "IN REVIEW"],
              ["Confirm handover", "WAITING"],
            ].map(([task, status], index) => (
              <div className="relay-row" key={task}>
                <span className={`relay-dot relay-dot--${index + 1}`} />
                <b>{task}</b>
                <small>{status}</small>
                <i>0{index + 1}</i>
              </div>
            ))}
            <div className="relay-progress"><span /><b>5 of 7 moving</b></div>
          </div>
        </>
      )}
      {visual === "form" && (
        <>
          <div className="form-grid" />
          <div className="form-number">27</div>
          <div className="form-index-word">FORM<br />INDEX</div>
          <div className="form-plan">
            <span>PROJECT 027</span>
            <div className="plan-room plan-room--a" />
            <div className="plan-room plan-room--b" />
            <div className="plan-room plan-room--c" />
          </div>
          <div className="form-meta">PLACE / MATERIAL / SCALE / IDEA</div>
        </>
      )}
      {visual === "type" && (
        <>
          <div className="type-axis type-axis--x" />
          <div className="type-axis type-axis--y" />
          <div className="type-space-word type-space-word--one">TYPE</div>
          <div className="type-space-word type-space-word--two">SPACE</div>
          <div className="type-space-word type-space-word--three">01</div>
          <div className="type-coordinates">X 47.2 / Y 19.6 / Z 08.4</div>
          <div className="type-caption">A SPATIAL TYPE STUDY</div>
        </>
      )}
    </div>
  );
}
