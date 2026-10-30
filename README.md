# Isaiah Adeleke — Portfolio

Astro + Tailwind CSS static site. Pages render to plain HTML at build time; the only client JavaScript is a few small inline scripts for interactive pieces (mobile menu, tabs, dialogs, custom cursor, gallery auto-scroll) and Astro's hover prefetch.

## Getting started

Requires Node 22.12+.

```bash
npm install
npm run dev
```

Open http://localhost:4321

- `npm run build` — build the static site to `dist/`
- `npm run preview` — serve the built site locally
- `npm run check` — type-check `.astro` and `.ts` files

## Structure

- `src/pages/` — routes (home, projects, projects/[slug], shots, about, content, content/[slug])
- `src/layouts/BaseLayout.astro` — HTML shell, fonts, meta tags, scroll-reveal script
- `src/components/` — shared UI as Astro components; interactive ones carry their own `<script>`
- `src/data/` — all content as structured data (projects.ts, articles.ts, shots.ts, testimonials.ts, content.ts, profile.ts)
- `src/styles/globals.css` — Tailwind entry, `@font-face` rules, and the motion classes (`.reveal`, `.hero-in`, page transitions)

## Motion

Animations are CSS-driven. Wrap content in `<Reveal>` (or add the `reveal` class) to fade it in on scroll; tune it per element with `--reveal-y`, `--reveal-x`, `--reveal-delay`, and `--reveal-duration`. Page-to-page transitions use the browser's native cross-document View Transitions. Everything respects `prefers-reduced-motion`.

See `docs/hosting.md` for deployment.
