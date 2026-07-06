# Isaiah Adeleke — Portfolio

Next.js 14 (App Router) + Tailwind CSS + Framer Motion portfolio site.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — pages (home, projects, projects/[slug], shots, about, content)
- `components/` — shared UI (Navbar, Footer, cards, cursor, animations)
- `data/` — all real content as structured data (projects.ts, shots.ts, testimonials.ts, content.ts)

## Notes

- All images are warm-grey placeholder boxes with descriptive labels — drop real photos/screenshots into `public/` and swap in `next/image` where marked.
- Fonts (Instrument Serif + Inter) load from Google Fonts via `next/font/google` — requires an internet connection on first build.
- Custom cursor is desktop-only and respects `prefers-reduced-motion`.
