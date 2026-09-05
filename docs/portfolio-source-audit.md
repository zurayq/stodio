# Selected Work source audit

Reviewed 2026-09-05. Public repositories are the implementation evidence, not the supplied feature descriptions or README claims alone. All three entries are **independent projects**. Displayed years refer to repository creation year (2026), not an asserted commercial launch date.

## Passport Power

Source: [zurayq/pasaporto](https://github.com/zurayq/pasaporto/tree/b6cd13b0778a8836a426d09f40b76ebf289e88e1).

- Inspected `index.html`, CSS, `js/`, `data/passports.js` and `data/visa_data.js`; no package manifest or README was present in this snapshot.
- Vanilla HTML/CSS/JavaScript UI: passport search/selection, sorting, totals, four access categories, hover and destination details.
- `js/globe.js` uses Three.js, OrbitControls, TopoJSON-derived canvas textures, raycasting and point-in-polygon selection. Earcut is included by HTML but not used by the inspected globe implementation, so no Earcut implementation claim is made.
- The matrix identifies the [passport-index-dataset](https://github.com/ilyankou/passport-index-dataset) as its upstream source. This is a repository data snapshot, not current visa advice.
- Served the source locally and confirmed HTTP 200. No interactive globe QA or authentic browser capture was possible in this session.

Artwork: a static orthographic globe built from the same [world-atlas countries-110m geometry](https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json), repository ISO mappings and Türkiye passport matrix. Art direction uses the real access colors and selection/legend model; it is explicitly an interface study, not a screenshot. The SVG contains no live Three.js runtime. World-atlas distributes Natural Earth geography; upstream: [world-atlas](https://github.com/topojson/world-atlas).

## Your Friendly Neighborhood

Source: [zurayq/Your-Friendly-Neighborhood](https://github.com/zurayq/Your-Friendly-Neighborhood/tree/c4033575734bc66e68e2d72dd1d91b148a8e32ea).

- Inspected README, requirements, entrypoint, configuration, models, migrations, templates and frontend/static assets.
- Geographic scope is **İstanbul and Kocaeli**, not just one neighborhood or city.
- `templates/index.html` uses MapLibre GL and deck.gl with 2D/3D modes and six categories: Meetups, Events, Help, Community, Activities, Opportunities.
- Flask/SQLAlchemy/PostgreSQL backend, Shapely boundary checks, GeoJSON service area, visibility periods, support/report logic, text moderation, request limits, management-code closing/deletion.
- Database configuration includes Supabase-compatible PostgreSQL connection handling; no adoption or infrastructure-performance claims are made.
- A full isolated PostgreSQL runtime was not configured, so posting, reporting and persistence were verified in source, not end-to-end against a live database. No personal posts or private data were used.

Artwork: simplified outlines from `static/data/service-area.geojson`, neutral demo markers and an explicitly illustrative neighborhood walk. These are service-area shapes, not a fabricated street map. Geometry properties credit **geoBoundaries gbOpen TUR ADM1 (OpenStreetMap-derived)**, source release `9469f09`, retrieved `2026-07-29`. The SVG simplifies vertices and projects the two region outlines. Visible attribution is included in the composition and linked on its case study. Upstream attribution: [geoBoundaries](https://www.geoboundaries.org/) / [© OpenStreetMap contributors](https://www.openstreetmap.org/copyright).

## MemoCore

Source: [zurayq/memocore](https://github.com/zurayq/memocore/tree/fb81407316fd35835a4fd7b7da31d34602f640df).

- Inspected README, requirements, `agent.py`, entrypoint, webhook routing, dispatch table, schemas, models, database setup, event/task/recurring-event services, WhatsApp reply service and scheduler.
- FastAPI, Pydantic structured intent, async SQLAlchemy, UUID records, SQLite and PostgreSQL support.
- **Current `agent.py` uses Groq with `llama-3.3-70b-versatile`**, despite the README's DeepSeek/OpenRouter description. Public copy follows the current code.
- WhatsApp Cloud API verification/incoming message parsing and reply code exist, with configured-sender checking. Live message delivery was not verified.
- APScheduler checks upcoming events. Reminder handling logs/prints; recurring patterns are stored but not expanded into scheduled occurrences. No recurring-delivery reliability claim is made.
- External AI, WhatsApp credentials and a production database were not used or requested.

Artwork: a labeled system architecture / interaction model showing message → intent parser → dispatch → event service → database. The output is a stored recurring-event example. It does not depict an existing frontend, successful live parsing or reminder delivery.

## Deployment evidence

The following URLs came from public GitHub repository metadata and returned HTTP 200 with matching project page titles on 2026-09-05:

- [Passport Power](https://pasaporto.vercel.app)
- [Your Friendly Neighborhood](https://your-friendly-neighborhood-iota.vercel.app/)

This verifies reachable project pages, not all underlying APIs or interactions. MemoCore has no verified public deployment, so its `liveUrl` is `null` and no live-project action is rendered.

## Website migration and validation

Removed `sahra-house`, `relay`, `form-index`, `type-space` from the shared public project model and all consumers. Removed pages and share-image routes return 404; no unrelated redirects are used. New order is Passport Power → Your Friendly Neighborhood → MemoCore → Passport Power, in each locale.

`src/lib/site-data.ts` owns localized project narratives, disciplines, SEO titles, provenance, source URLs and nullable live URLs. `src/lib/project-artwork-data.ts` owns translated composition labels. Homepage, case studies, sitemap, API and llms.txt consume these data rather than separate portfolio lists. API implementation notes include the same limitations as the case-study build sections.

`scripts/portfolio-geometry.mjs` reproduces SVG strings from reviewed source snapshots and world geometry; it performs no network or filesystem writes. Only use trusted, reviewed repository data with its JavaScript data reader. Generated SVG assets are committed so normal builds need no source clones or remote asset requests.

Run `npm run build`, then `npm run start -- --port 3002`, and `node scripts/check-portfolio.mjs http://127.0.0.1:3002` for the HTTP migration regression suite. It checks all nine case studies, metadata, hreflang, structured data, navigation, share images, old-route removal and machine endpoints. TypeScript and ESLint are separate checks.

Responsive CSS provides tighter globe cropping, reduced marker density and a stacked narrow-screen MemoCore diagram. The available in-app browser list was empty, so browser viewport, keyboard and visual interaction QA remain unverified. The two source-derived SVGs were rendered and visually inspected as standalone assets. Arabic page narratives/metadata are localized with RTL; social image raster text retains the site's existing English fallback for Arabic to avoid runtime font downloads.

No clients, testimonials, awards, performance gains, users, revenue, adoption, production delivery guarantees or current visa guidance were invented.
