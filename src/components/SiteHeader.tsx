"use client";

import Link from "next/link";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Locale, SiteCopy } from "@/lib/site-data";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { OpenProjectButton } from "@/components/OpenProjectButton";

type SiteHeaderProps = {
  locale: Locale;
  copy: SiteCopy;
  languagePath?: string;
};

export function SiteHeader({ locale, copy, languagePath = "" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const root = `/${locale}`;

  const sectionHref = (id: string) => `${root}#${id}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      const first = menuRef.current?.querySelector<HTMLElement>("a, button");
      window.setTimeout(() => first?.focus(), 30);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    window.setTimeout(() => buttonRef.current?.focus(), 20);
  };

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>("a, button:not([disabled])") ?? [],
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const links = [
    [copy.nav.work, sectionHref("work")],
    [copy.nav.services, sectionHref("services")],
    [copy.nav.studio, sectionHref("studio")],
    [copy.nav.process, sectionHref("process")],
  ];

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__bar">
        <Link href={root} className="wordmark" aria-label="Zurayq Studios — home">
          <span className="wordmark__mark" aria-hidden="true">Z/</span>
          <span>Zurayq Studios</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="site-header__actions">
          <LanguageSwitcher locale={locale} path={languagePath} compact />
          <OpenProjectButton className="header-cta">{copy.common.startProject} <span aria-hidden="true">↗</span></OpenProjectButton>
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? copy.nav.closeMenu : copy.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
            ref={buttonRef}
          >
            <span /><span />
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className="mobile-menu"
        ref={menuRef}
        onKeyDown={trapFocus}
        hidden={!open}
      >
        <div className="mobile-menu__topline"><span>Zurayq / Menu</span><span>EN · TR · AR</span></div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link href={href} key={href} onClick={closeMenu}>
              <small>0{index + 1}</small><span>{label}</span><i aria-hidden="true">↘</i>
            </Link>
          ))}
          <a href="#contact" onClick={closeMenu}>
            <small>05</small><span>{copy.nav.contact}</span><i aria-hidden="true">↘</i>
          </a>
        </nav>
        <div className="mobile-menu__footer">
          <LanguageSwitcher locale={locale} path={languagePath} />
          <OpenProjectButton className="button button--paper" onClick={() => setOpen(false)}>
            {copy.common.startProject} <span aria-hidden="true">↗</span>
          </OpenProjectButton>
        </div>
      </div>
    </header>
  );
}
