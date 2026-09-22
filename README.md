# LJ Solutions — website

Built with [Astro](https://astro.build) + Tailwind CSS v4.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`        | Start local dev server at `localhost:4321`   |
| `npm run build`      | Build the production site to `./dist/`       |
| `npm run preview`    | Preview the production build locally         |
| `npx astro check`    | Type-check all `.astro`/`.ts` files          |

## Languages

Spanish is the default language and lives at the root (`/`, `/projects`, `/projects/[slug]`).
English lives under `/en` (`/en/`, `/en/projects`, `/en/projects/[slug]`), configured via Astro's
built-in i18n routing in [astro.config.mjs](astro.config.mjs). A language switcher in the navbar
jumps to the equivalent page in the other language.

- **All translated text** lives in [src/i18n/ui.ts](src/i18n/ui.ts), one `es` object and one `en`
  object with the same shape. Edit copy there, not in the components.
- **Routing/URL helpers** (locale-prefixing, stripping, `Astro.currentLocale` narrowing) live in
  [src/i18n/config.ts](src/i18n/config.ts).
- Any component that renders text calls `Astro.currentLocale` + `useTranslations()` itself — there's
  no need to pass a `lang` prop down through the tree.
- Adding a third language: add it to `LOCALES` in `src/i18n/config.ts`, to `locales` in
  `astro.config.mjs`, add its object to `ui.ts`, and add a `src/pages/<code>/` folder mirroring
  `src/pages/en/`.

## Before launch — TODOs

These live as plain constants in [src/data/site.ts](src/data/site.ts):

- `WHATSAPP_NUMBER` — international format, digits (a leading "+" is fine).
- `CONTACT_EMAIL` — currently set to a placeholder-looking inbox; confirm it's the real one before launch.
- `getSocialLinks()` — currently placeholder Instagram/TikTok handles.
- `FORM_ENDPOINT` — currently empty. The contact form works without it (it falls back to opening a
  pre-filled email draft), but once you have a real form backend (Formspree, Getform, a custom API
  route, etc.), set this and the form will POST JSON to it instead.

## Adding content

Product/project/process text lives in [src/i18n/ui.ts](src/i18n/ui.ts) (both languages); the
structural data (slugs, numbers, which mockup to show, hrefs) lives alongside in `src/data/`.

- **New product** (shown in "Solutions"): add a key to `src/data/products.ts` plus its `es`/`en` text
  under `ui.products.<key>`.
- **New project** (shown in "Selected projects", gets its own page at `/projects/[slug]` and
  `/en/projects/[slug]`): add a slug to `src/data/projects.ts` plus its `es`/`en` text under
  `ui.projectsData.<slug>`. Pages are generated automatically by
  `src/pages/projects/[slug].astro` and `src/pages/en/projects/[slug].astro`.
- **Process steps** ("How we work"): `ui.howWeWork.steps` for both languages in `ui.ts`.

## Structure

```
src/
  i18n/
    config.ts                 Locale list, default locale, path-localizing helpers
    ui.ts                     All translated strings (es + en), one dictionary
  layouts/BaseLayout.astro    SEO meta, hreflang alternates, fonts, global shell
  components/
    pages/                    Full-page compositions (Home, ProjectsIndex, ProjectDetail),
                               reused by both the /  and /en page files
    LanguageSwitcher.astro
    mockups/                  Bespoke UI mockups used as product visuals (no stock imagery)
    (one file per homepage section, plus shared UI: Button, Navbar, Footer, Logo)
  data/                       Structural content (slugs, numbers, mockup choice) — text itself is in i18n/ui.ts
  pages/
    index.astro, en/index.astro
    projects/index.astro, en/projects/index.astro
    projects/[slug].astro, en/projects/[slug].astro
  styles/global.css           Tailwind import + design tokens (colors, fonts)
```
