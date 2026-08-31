import Link from "next/link";
import { Locale, localeConfig, locales } from "@/lib/site-data";

type LanguageSwitcherProps = {
  locale: Locale;
  path?: string;
  compact?: boolean;
};

export function LanguageSwitcher({ locale, path = "", compact = false }: LanguageSwitcherProps) {
  return (
    <nav className={`language-switcher ${compact ? "language-switcher--compact" : ""}`} aria-label="Language">
      {locales.map((item) => (
        <Link
          href={`/${item}${path}`}
          key={item}
          hrefLang={item}
          lang={item}
          aria-current={item === locale ? "page" : undefined}
          data-analytics-event="language_switch"
          data-analytics-language={item}
        >
          {compact ? localeConfig[item].shortLabel : localeConfig[item].label}
        </Link>
      ))}
    </nav>
  );
}
