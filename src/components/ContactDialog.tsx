"use client";

import { FormEvent, MouseEvent, useRef } from "react";
import { SiteCopy } from "@/lib/site-data";
import { contactEmail } from "@/lib/config";

type ContactDialogProps = {
  data: SiteCopy["contact"];
};

export function ContactDialog({ data }: ContactDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) dialogRef.current?.close();
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const subject = `Project inquiry — ${name}`;
    const rows = [
      `${data.name}: ${name}`,
      `${data.email}: ${String(formData.get("email") ?? "")}`,
      `${data.company}: ${String(formData.get("company") ?? "—")}`,
      `${data.projectType}: ${String(formData.get("projectType") ?? "")}`,
      `${data.budget}: ${String(formData.get("budget") ?? "")}`,
      `${data.timeline}: ${String(formData.get("timeline") ?? "—")}`,
      "",
      `${data.message}:`,
      String(formData.get("message") ?? ""),
    ];
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows.join("\n"))}`;
  };

  return (
    <dialog className="project-dialog" id="project-dialog" ref={dialogRef} onClick={closeOnBackdrop}>
      <div className="project-dialog__shell">
        <div className="project-dialog__aside">
          <span className="eyebrow">Zurayq Studios / Inquiry</span>
          <h2>{data.formTitle}</h2>
          <p>{data.formIntro}</p>
          <div className="project-dialog__index" aria-hidden="true">Z/01</div>
        </div>
        <div className="project-dialog__form-wrap">
          <button type="button" className="dialog-close" onClick={() => dialogRef.current?.close()}>
            <span>{data.close}</span><i aria-hidden="true">×</i>
          </button>
          <form onSubmit={submit}>
            <div className="form-grid">
              <label>
                <span>{data.name} <small>{data.required}</small></span>
                <input name="name" autoComplete="name" placeholder={data.namePlaceholder} required />
              </label>
              <label>
                <span>{data.email} <small>{data.required}</small></span>
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              </label>
              <label className="form-span-two">
                <span>{data.company}</span>
                <input name="company" autoComplete="organization" placeholder={data.companyPlaceholder} />
              </label>
              <label>
                <span>{data.projectType} <small>{data.required}</small></span>
                <select name="projectType" required defaultValue="">
                  <option value="" disabled>—</option>
                  {data.projectOptions.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <span>{data.budget} <small>{data.required}</small></span>
                <select name="budget" required defaultValue="">
                  <option value="" disabled>—</option>
                  {data.budgetOptions.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="form-span-two">
                <span>{data.timeline}</span>
                <input name="timeline" placeholder={data.timelinePlaceholder} />
              </label>
              <label className="form-span-two">
                <span>{data.message} <small>{data.required}</small></span>
                <textarea name="message" rows={5} placeholder={data.messagePlaceholder} required />
              </label>
            </div>
            <div className="form-submit-row">
              <button className="button button--ink" type="submit">{data.send} <span aria-hidden="true">↗</span></button>
              <small>{data.mailNote}</small>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
