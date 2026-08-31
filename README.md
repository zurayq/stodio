# Zurayq Studios

A custom, multilingual creative-technology studio website built with Next.js, React and TypeScript. The visual system uses editorial layouts, code-drawn project art and a pointer-responsive canvas rather than stock imagery or a template theme.

Canonical production URL: `https://studio.zurayq.lol`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root redirects to `/en`.

Production checks:

```bash
npm run lint
npm run build
```

## Content and configuration

- Studio copy, translations and project records: `src/lib/site-data.ts`
- Public URL and contact email defaults: `src/lib/config.ts`
- Environment variable examples: `.env.example`
- Shared visual system: `src/app/globals.css`

The current portfolio entries are intentionally and visibly marked as **concept projects** or **studio experiments**. They do not claim clients, results, awards or performance metrics.

English, Turkish and Arabic are served at `/en`, `/tr` and `/ar`. Arabic uses a real RTL document direction and tailored logical-property layout behavior.

## Machine-readable layer

- `/api/studio` — versioned, read-only structured studio data
- `/llms.txt` — concise agent-readable capabilities and contact information
- `/agent` — semantic human-readable guide for AI/browser agents
- `/sitemap.xml` — localized home and project URLs
- `/robots.txt` — crawl instructions

The Turkish local service page is available at `/tr/izmit-web-tasarim`. It is intentionally a single useful local page rather than a generated set of near-duplicate city pages.

Meaningful links and buttons include passive `data-analytics-*` attributes for future privacy-conscious measurement. No analytics or third-party tracking script is loaded by default.

Transactional agent actions are explicitly disabled. The project form creates a prefilled email in the visitor's own email application; it does not silently submit or store data.
