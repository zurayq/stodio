"use client";

import { useState } from "react";
import { SiteCopy } from "@/lib/site-data";

type CapabilitiesProps = {
  data: SiteCopy["services"];
};

export function Capabilities({ data }: CapabilitiesProps) {
  const [active, setActive] = useState(0);
  const current = data.items[active];

  return (
    <div className="capabilities-layout">
      <div className="capabilities-list" role="tablist" aria-label={data.instruction}>
        {data.items.map((item, index) => (
          <button
            key={item.number}
            type="button"
            role="tab"
            id={`service-tab-${index}`}
            aria-selected={active === index}
            aria-controls="service-panel"
            onClick={() => setActive(index)}
            onPointerEnter={() => setActive(index)}
          >
            <small>{item.number}</small>
            <span>{item.title}</span>
            <i aria-hidden="true">{active === index ? "—" : "↘"}</i>
          </button>
        ))}
      </div>
      <div
        className={`capability-panel capability-panel--${active + 1}`}
        id="service-panel"
        role="tabpanel"
        aria-labelledby={`service-tab-${active}`}
        key={current.number}
      >
        <div className="capability-panel__visual" aria-hidden="true">
          <div className="capability-glyph">{current.number}</div>
          <div className="capability-orbit"><span /><span /><span /></div>
          <div className="capability-crosshair" />
          <small>CAPABILITY / {current.number}</small>
        </div>
        <div className="capability-panel__copy">
          <p className="capability-short">{current.short}</p>
          <p>{current.body}</p>
          <ul>
            {current.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
