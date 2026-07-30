# paulblumenstein.de

Website von Paul Blumenstein — Immobilienfotografie, Exposé-Erstellung und digitale Vermarktung.

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4.

## Entwicklung

```bash
npm install
npm run dev
```

Seite öffnet unter [http://localhost:3000](http://localhost:3000).

## Struktur

- `src/app/(site)/` — öffentliche Seiten (Start, Referenzobjekte, Über mich, Kontakt, Impressum, Datenschutz)
- `src/components/ui/` — Design-System-Primitives (Button, Card, Field, Eyebrow)
- `src/components/layout/` — Seiten-Rahmen (Navigation, Footer, Container, Section)
- `src/components/sections/` — inhaltsbewusste Bausteine (Hero, Gallery, ReferenceObjectCard)
- `src/content/` — Referenzobjekte und Leistungen als typisierte Daten
- `src/config/site.ts` — Basis-Metadaten (Name, URL, Beschreibung)

## Build

```bash
npm run build
npm run lint
```

## Deployment

Vercel, direkt aus dem `main`-Branch.
