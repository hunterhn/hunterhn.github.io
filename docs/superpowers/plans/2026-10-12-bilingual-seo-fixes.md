# Bilingual SEO Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Flip the site default to English (`/`) with Spanish at `/es/`, remove the JS language redirect that de-indexes Spanish pages, add JSON-LD structured data, emit hreflang + lastmod in the sitemap, ship a branded noindex 404, and add a Panama/USA/Honduras/Colombia geographic hook to the copy.

**Architecture:** All changes live in `web-codefolio/` (the deployed Astro site). The i18n layer (`src/i18n/`) is flipped once and every other file consumes it, so routing, canonical, hreflang, sitemap, and internal links stay consistent. Structured data is a data module (`src/data/schema.ts`) rendered by a small component (`src/components/JsonLd.astro`) mounted in `Header.astro`. No new runtime dependencies.

**Tech Stack:** Astro 5.18.2, `@astrojs/sitemap` 3.7.4, GitHub Pages (static), Cloudflare in front.

**Spec:** This plan is its own design doc. Brainstorming decisions: default flip `EN at /`, `ES at /es/`; auto-redirect removed except for an explicit stored preference; JSON-LD via data module + component (a static `.json` file cannot vary per page/language); geographic reach in meta descriptions is **USA, Honduras, Colombia** with Panama in the title; 404 built from `src/pages/404.astro`; `/en/* → /*` 301 handled by a Cloudflare Single Redirect.

## Global Constraints

- Default language is `en`. English is served at `/`, Spanish at `/es/`. `trailingSlash: 'always'` stays.
- Copy rule (humanizalo): **no em dashes** in any new title, description, or 404 text. Use `|` as a title separator. Sentence case in body copy. No AI tells ("not X, it's Y", filler, "here's the thing").
- Never put `contact.email` in JSON-LD, HTML, or `llms.txt`. It stays obfuscated.
- JSON-LD must be valid: only use properties that exist on their `@type`. No `areaServed` on `Person` (invalid) — geographic reach lives in meta + `llms.txt` copy only.
- Every internal link goes through `localizePath` / `switchLangPath`; no hardcoded `/en` or `/es` string literals.
- Build command: `npm run build` from `web-codefolio/`. There is no test suite; verification is build output + `grep` + `curl`.
- Run all commands from the repo root `/home/hunterhn/Projects/hunterhn.github.io` unless a step says otherwise. Do not use `cd ../` outside the project.

---

### Task 1: Flip the i18n core default to English

**Files:**
- Modify: `web-codefolio/src/i18n/ui.ts` (line 3)
- Modify: `web-codefolio/src/i18n/utils.ts` (whole file)

**Interfaces:**
- Consumes: nothing.
- Produces: `defaultLang: "en"`, `LANGUAGES` behavior via `localizePath(path, lang)` (EN→`/path/`, ES→`/es/path/`), `switchLangPath(path, lang)`, `getLangFromUrl(url): Lang` (returns `"es"` only when the first segment is `es`).

- [ ] **Step 1: Change the default language**

In `web-codefolio/src/i18n/ui.ts` change:

```ts
export const defaultLang: Lang = "es";
```

to:

```ts
export const defaultLang: Lang = "en";
```

- [ ] **Step 2: Rewrite the i18n path helpers to be language-agnostic**

Replace the entire contents of `web-codefolio/src/i18n/utils.ts` with:

```ts
import { defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "es" ? "es" : "en";
}

export function normalizePath(path: string): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `/${clean}` : "/";
}

function withTrailingSlash(path: string): string {
  return path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
}

export function localizePath(path: string, lang: Lang): string {
  const normalized = normalizePath(path);
  if (lang === defaultLang) return withTrailingSlash(normalized);
  const prefixed =
    normalized === "/" ? `/${lang}` : `/${lang}${normalized}`;
  return withTrailingSlash(prefixed);
}

export function switchLangPath(path: string, lang: Lang): string {
  const stripped = path.replace(/^\/(es|en)(?=\/|$)/, "") || "/";
  return localizePath(stripped, lang);
}
```

- [ ] **Step 3: Verify the helper behavior with a scratch check**

Run:

```bash
cd web-codefolio && npx astro check 2>/dev/null || npx tsc --noEmit -p tsconfig.json 2>/dev/null; echo "exit=$?"
```

Expected: no TypeScript errors mentioning `localizePath`/`switchLangPath`/`getLangFromUrl`. (Astro check may be unavailable; the fallback is fine.)

- [ ] **Step 4: Commit**

```bash
git add web-codefolio/src/i18n/ui.ts web-codefolio/src/i18n/utils.ts
git commit -m "feat(i18n): default to English, localize ES under /es/"
```

---

### Task 2: Move the routing tree (EN to root, ES to /es/)

**Files:**
- Modify: `web-codefolio/src/pages/index.astro`
- Create: `web-codefolio/src/pages/es/index.astro`
- Modify: `web-codefolio/src/pages/[page].astro`
- Create: `web-codefolio/src/pages/es/[page].astro`
- Delete: `web-codefolio/src/pages/en/index.astro`
- Delete: `web-codefolio/src/pages/en/[page].astro`

**Interfaces:**
- Consumes: `localizePath` from Task 1; `HomePage`, `CategoryPage`, `ExperiencePage`, `EducationPage`, `HobbiesPage`, `PsychologyPage` (unchanged component signatures, all take `lang`).
- Produces: English HTML at `/` and `/<page>/`; Spanish HTML at `/es/` and `/es/<page>/`.

- [ ] **Step 1: Serve English at the root home**

Replace the contents of `web-codefolio/src/pages/index.astro` with:

```astro
---
import HomePage from "../components/HomePage.astro";
---

<HomePage lang="en" />
```

- [ ] **Step 2: Create the Spanish home under /es/**

Create `web-codefolio/src/pages/es/index.astro`:

```astro
---
import HomePage from "../../components/HomePage.astro";
---

<HomePage lang="es" />
```

- [ ] **Step 3: Serve English category/section pages at the root**

Replace the contents of `web-codefolio/src/pages/[page].astro` with:

```astro
---
import CategoryPage from "../components/CategoryPage.astro";
import ExperiencePage from "../components/ExperiencePage.astro";
import EducationPage from "../components/EducationPage.astro";
import HobbiesPage from "../components/HobbiesPage.astro";
import PsychologyPage from "../components/PsychologyPage.astro";
import { categories } from "../data/content";

export function getStaticPaths() {
  const pages = [
    ...categories.map((category) => category.key),
    "experience",
    "education",
    "hobbies",
    "psychology",
  ];
  return pages.map((page) => ({ params: { page } }));
}

const { page } = Astro.params;
const isCategory = categories.some((category) => category.key === page);
---

{page === "experience" && <ExperiencePage lang="en" />}
{page === "education" && <EducationPage lang="en" />}
{page === "hobbies" && <HobbiesPage lang="en" />}
{page === "psychology" && <PsychologyPage lang="en" />}
{isCategory && <CategoryPage lang="en" page={page!} />}
```

- [ ] **Step 4: Create the Spanish category/section pages under /es/**

Create `web-codefolio/src/pages/es/[page].astro`:

```astro
---
import CategoryPage from "../../components/CategoryPage.astro";
import ExperiencePage from "../../components/ExperiencePage.astro";
import EducationPage from "../../components/EducationPage.astro";
import HobbiesPage from "../../components/HobbiesPage.astro";
import PsychologyPage from "../../components/PsychologyPage.astro";
import { categories } from "../../data/content";

export function getStaticPaths() {
  const pages = [
    ...categories.map((category) => category.key),
    "experience",
    "education",
    "hobbies",
    "psychology",
  ];
  return pages.map((page) => ({ params: { page } }));
}

const { page } = Astro.params;
const isCategory = categories.some((category) => category.key === page);
---

{page === "experience" && <ExperiencePage lang="es" />}
{page === "education" && <EducationPage lang="es" />}
{page === "hobbies" && <HobbiesPage lang="es" />}
{page === "psychology" && <PsychologyPage lang="es" />}
{isCategory && <CategoryPage lang="es" page={page!} />}
```

- [ ] **Step 5: Delete the old /en/ page tree**

```bash
git rm web-codefolio/src/pages/en/index.astro web-codefolio/src/pages/en/[page].astro
```

- [ ] **Step 6: Build and verify the URL tree**

Run:

```bash
cd web-codefolio && npm run build
```

Expected: build succeeds. Then verify:

```bash
ls web-codefolio/dist/index.html web-codefolio/dist/es/index.html web-codefolio/dist/devops/index.html web-codefolio/dist/es/devops/index.html
test ! -e web-codefolio/dist/en && echo "no /en/ output (good)"
```

Expected: all four files exist; the `test ! -e` prints `no /en/ output (good)`.

- [ ] **Step 7: Commit**

```bash
git add web-codefolio/src/pages
git commit -m "feat(routing): EN at root, ES under /es/"
```

---

### Task 3: Fix canonical, hreflang, x-default, and the redirect in Header

**Files:**
- Modify: `web-codefolio/src/components/Header.astro` (lines 15-20, 41-45, 86-110)

**Interfaces:**
- Consumes: `localizePath` from Task 1.
- Produces: self-referential canonical per page; reciprocal `hreflang` `es`/`en` with `x-default` → EN URL; a redirect script that fires only when `localStorage.lang` is set.

- [ ] **Step 1: Strip /es instead of /en and point x-default at English**

In `web-codefolio/src/components/Header.astro`, change:

```ts
const stripped = Astro.url.pathname.replace(/^\/en(?=\/|$)/, "") || "/";
```

to:

```ts
const stripped = Astro.url.pathname.replace(/^\/es(?=\/|$)/, "") || "/";
```

Then change:

```astro
  <link rel="alternate" hreflang="x-default" href={esUrl} />
```

to:

```astro
  <link rel="alternate" hreflang="x-default" href={enUrl} />
```

(Leave `esUrl`/`enUrl`/`canonical` lines as-is; they are built from `localizePath`, which Task 1 already flipped.)

- [ ] **Step 2: Replace the language redirect script**

In `web-codefolio/src/components/Header.astro`, replace the entire first inline `<script>` block (the one that starts with `(function () {` and reads `navigator.language`, currently lines ~86-110) with this script. It only redirects on an explicit stored choice, so crawlers and first-time visitors always get the language of the URL they requested:

```html
  <script is:inline>
    (function () {
      try {
        var path = window.location.pathname;
        var isEs = path === "/es" || path.indexOf("/es/") === 0;
        var stored = localStorage.getItem("lang");
        if (stored !== "en" && stored !== "es") return;
        var target = null;
        if (stored === "es" && !isEs) {
          target = "/es" + (path === "/" ? "/" : path);
        } else if (stored === "en" && isEs) {
          target = path.replace(/^\/es/, "") || "/";
        }
        if (target && target !== path) {
          window.location.replace(target);
        }
      } catch (e) {}
    })();
  </script>
```

- [ ] **Step 3: Build and verify head tags**

Run:

```bash
cd web-codefolio && npm run build
grep -o '<link rel="canonical"[^>]*>\|<link rel="alternate"[^>]*>' dist/index.html
echo "--- ES ---"
grep -o '<link rel="canonical"[^>]*>\|<link rel="alternate"[^>]*>' dist/es/devops/index.html
```

Expected for EN home: canonical `https://dennisgarcia.dev/`; hreflang `es` → `/es/`, `en` → `/`, `x-default` → `/`.
Expected for ES devops: canonical `https://dennisgarcia.dev/es/devops/`; hreflang `es` → `/es/devops/`, `en` → `/devops/`, `x-default` → `/devops/`.

- [ ] **Step 4: Verify no navigator redirect remains**

```bash
grep -c "navigator.language" web-codefolio/dist/index.html
```

Expected: `0`.

- [ ] **Step 5: Commit**

```bash
git add web-codefolio/src/components/Header.astro
git commit -m "fix(seo): x-default to English; redirect only on stored preference"
```

---

### Task 4: Add JSON-LD structured data

**Files:**
- Create: `web-codefolio/src/data/schema.ts`
- Create: `web-codefolio/src/components/JsonLd.astro`
- Modify: `web-codefolio/src/components/Header.astro` (imports + render)

**Interfaces:**
- Consumes: `profile`, `contact` from `src/data/content.ts`; `Lang` from `src/i18n/ui.ts`.
- Produces: `buildJsonLd({ lang, canonical, isHome, pageTitle })` returning a `@graph` object; `<JsonLd data={...} />` component.

- [ ] **Step 1: Create the schema builder**

Create `web-codefolio/src/data/schema.ts`:

```ts
import { profile, contact } from "./content";
import type { Lang } from "../i18n/ui";

const SITE = "https://dennisgarcia.dev";
const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Panama City",
  addressRegion: "Panamá",
  addressCountry: "PA",
} as const;

export interface JsonLdInput {
  lang: Lang;
  canonical: string;
  isHome: boolean;
  pageTitle: string;
}

export function buildJsonLd({
  lang,
  canonical,
  isHome,
  pageTitle,
}: JsonLdInput): Record<string, unknown> {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    jobTitle: profile.role[lang],
    url: `${SITE}/`,
    image: `${SITE}/og-image.png`,
    address: ADDRESS,
    knowsLanguage: ["es", "en"],
    sameAs: [contact.github, contact.linkedin, contact.commons],
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE}/`,
    name: profile.name,
    inLanguage: lang,
    publisher: { "@id": PERSON_ID },
  };

  const graph: object[] = [person, website];

  if (isHome) {
    graph.push({
      "@type": "ProfilePage",
      "@id": `${canonical}#profilepage`,
      url: canonical,
      inLanguage: lang,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    });
  } else {
    const label =
      pageTitle.replace(/\s*\|\s*Dennis.*$/i, "").trim() || pageTitle;
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "en" ? "Home" : "Inicio",
          item: lang === "en" ? `${SITE}/` : `${SITE}/es/`,
        },
        { "@type": "ListItem", position: 2, name: label, item: canonical },
      ],
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
```

- [ ] **Step 2: Create the JsonLd component**

Create `web-codefolio/src/components/JsonLd.astro`:

```astro
---
interface Props {
  data: Record<string, unknown>;
}
const { data } = Astro.props;
---

<script type="application/ld+json" set:html={JSON.stringify(data)} />
```

- [ ] **Step 3: Mount it in Header**

In `web-codefolio/src/components/Header.astro`, add to the frontmatter imports (after the `localizePath` import):

```ts
import JsonLd from "./JsonLd.astro";
import { buildJsonLd } from "../data/schema";
```

Then after the `ogLocale` line (`const ogLocale = ...;`) add:

```ts
const jsonLd = buildJsonLd({
  lang,
  canonical,
  isHome: stripped === "/",
  pageTitle: title,
});
```

Then inside `<head>`, right after the `<link rel="alternate" hreflang="x-default" ... />` block, add:

```astro
  <JsonLd data={jsonLd} />
```

- [ ] **Step 4: Build and verify JSON-LD is present and valid JSON**

```bash
cd web-codefolio && npm run build
node -e "const fs=require('fs');const h=fs.readFileSync('dist/index.html','utf8');const m=h.match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/);if(!m){console.error('NO JSON-LD');process.exit(1)};const j=JSON.parse(m[1]);console.log('types:',j['@graph'].map(x=>x['@type']).join(', '))"
```

Expected: `types: Person, WebSite, ProfilePage`.

Then check a subpage:

```bash
node -e "const fs=require('fs');const h=fs.readFileSync('dist/es/devops/index.html','utf8');const m=h.match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/);const j=JSON.parse(m[1]);console.log('types:',j['@graph'].map(x=>x['@type']).join(', '))"
```

Expected: `types: Person, WebSite, BreadcrumbList`.

- [ ] **Step 5: Commit**

```bash
git add web-codefolio/src/data/schema.ts web-codefolio/src/components/JsonLd.astro web-codefolio/src/components/Header.astro
git commit -m "feat(seo): add Person, WebSite, ProfilePage and BreadcrumbList JSON-LD"
```

---

### Task 5: Emit hreflang alternates and lastmod in the sitemap

**Files:**
- Modify: `web-codefolio/astro.config.mjs`

**Interfaces:**
- Consumes: the built page tree from Tasks 1-2.
- Produces: `dist/sitemap-0.xml` with `<lastmod>` and `<xhtml:link>` alternates; `dist/sitemap-index.xml`.

- [ ] **Step 1: Configure the sitemap integration**

Replace the contents of `web-codefolio/astro.config.mjs` with:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';

let lastmod = new Date();
try {
  lastmod = new Date(execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim());
} catch {
  lastmod = new Date();
}

// https://astro.build/config
export default defineConfig({
  site: 'https://dennisgarcia.dev',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/robots.txt') && !page.endsWith('/llms.txt'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
      lastmod,
    }),
  ],
});
```

- [ ] **Step 2: Build and verify alternates + lastmod**

```bash
cd web-codefolio && npm run build
grep -o '<lastmod>[^<]*</lastmod>' dist/sitemap-0.xml | head -1
grep -c 'hreflang' dist/sitemap-0.xml
grep -o 'x-default' dist/sitemap-0.xml | head -1
```

Expected: a `<lastmod>` value equal to the last commit date; `hreflang` count greater than 0; `x-default` present.

- [ ] **Step 3: Verify the URL set matches the flipped tree**

```bash
grep -o '<loc>[^<]*</loc>' dist/sitemap-0.xml | grep -E '/(en|es)/' | head
```

Expected: `/es/` URLs listed; **no** `/en/` URLs.

- [ ] **Step 4: Commit**

```bash
git add web-codefolio/astro.config.mjs
git commit -m "feat(seo): sitemap i18n alternates and lastmod"
```

---

### Task 6: Ship a branded noindex 404

**Files:**
- Create: `web-codefolio/src/pages/404.astro`

**Interfaces:**
- Consumes: nothing (standalone page).
- Produces: `dist/404.html`, which GitHub Pages serves for unknown paths.

- [ ] **Step 1: Create the 404 page**

Create `web-codefolio/src/pages/404.astro`:

```astro
---
const SITE = "https://dennisgarcia.dev";
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <meta name="color-scheme" content="dark" />
    <title>Page not found | Dennis García</title>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <style is:inline>
      html, body {
        margin: 0;
        min-height: 100%;
        background: #161616;
        color: #f2f2f2;
        font-family: system-ui, -apple-system, "IBM Plex Sans", sans-serif;
      }
      .wrap {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 24px;
        gap: 8px;
      }
      h1 { font-size: 3rem; margin: 0; }
      p { color: #b8b8b8; max-width: 34ch; line-height: 1.5; }
      a.home {
        margin-top: 16px;
        color: #161616;
        background: #f2f2f2;
        padding: 12px 22px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
      }
      .es { color: #8a8a8a; font-size: 0.9rem; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <h1>404</h1>
      <p>
        That page doesn't exist, or it moved. Head back home and pick a path
        from there.
      </p>
      <p class="es" lang="es">
        Esa página no existe o se movió. Vuelve al inicio y sigue desde ahí.
      </p>
      <a class="home" href={SITE + "/"}>Go home / Ir al inicio</a>
    </div>
  </body>
</html>
```

- [ ] **Step 2: Build and verify the 404 output**

```bash
cd web-codefolio && npm run build
test -f dist/404.html && echo "404.html built"
grep -o '<meta name="robots"[^>]*>' dist/404.html
```

Expected: `404.html built`; `robots` meta contains `noindex`.

- [ ] **Step 3: Commit**

```bash
git add web-codefolio/src/pages/404.astro
git commit -m "feat(seo): branded noindex 404 page"
```

---

### Task 7: Add the geographic hook to titles, descriptions, and llms.txt

**Files:**
- Modify: `web-codefolio/src/i18n/ui.ts` (`meta.title`, `meta.description` for both languages)
- Modify: `web-codefolio/src/pages/llms.txt.ts` (Site section + profile line)

**Interfaces:**
- Consumes: nothing new.
- Produces: localized home titles with Panama and descriptions naming the USA, Honduras, and Colombia; updated `llms.txt`.

- [ ] **Step 1: Update the Spanish meta copy**

In `web-codefolio/src/i18n/ui.ts`, change the `es` block:

```ts
    "meta.title": "Dennis García, Arquitecto DevOps y Cloud",
    "meta.description":
      "Portafolio de Dennis García: desarrollo de software, cloud y DevOps, seguridad y datos, e IA y automatización.",
```

to:

```ts
    "meta.title": "Dennis García | Arquitecto DevOps y Cloud en Panamá",
    "meta.description":
      "Arquitecto DevOps y cloud radicado en Panamá. Construyo y opero sistemas cloud, CI/CD e infraestructura como código para clientes remotos en EE. UU., Honduras y Colombia.",
```

- [ ] **Step 2: Update the English meta copy**

In the `en` block, change:

```ts
    "meta.title": "Dennis García, DevOps & Cloud Architect",
    "meta.description":
      "Dennis García's portfolio: software development, cloud and DevOps, security and data, and AI and automation.",
```

to:

```ts
    "meta.title": "Dennis García | DevOps & Cloud Architect in Panama",
    "meta.description":
      "DevOps and cloud architect based in Panama. I build and run cloud systems, CI/CD pipelines and infrastructure as code for remote clients in the USA, Honduras and Colombia.",
```

- [ ] **Step 3: Update llms.txt site links and location**

In `web-codefolio/src/pages/llms.txt.ts`, change:

```ts
${profile.name} is a ${profile.role.en} based in ${profile.location.en}. This is his bilingual (Spanish/English) personal portfolio.
```

to:

```ts
${profile.name} is a ${profile.role.en} based in ${profile.location.en}. He works with remote clients in the USA, Honduras and Colombia. This is his bilingual (Spanish/English) personal portfolio.
```

And change the Site section:

```ts
## Site
- Spanish (default): ${BASE}/
- English: ${BASE}/en/
- Sitemap: ${BASE}/sitemap-index.xml
```

to:

```ts
## Site
- English (default): ${BASE}/
- Spanish: ${BASE}/es/
- Sitemap: ${BASE}/sitemap-index.xml
```

- [ ] **Step 4: Build and verify the copy**

```bash
cd web-codefolio && npm run build
grep -o '<title>[^<]*</title>' dist/index.html dist/es/index.html
grep -o '<meta name="description"[^>]*>' dist/index.html dist/es/index.html
grep -E 'Honduras|Colombia' dist/llms.txt
```

Expected: EN home title contains `Panama`; ES home title contains `Panamá`; descriptions contain `USA`/`EE. UU.`, `Honduras`, `Colombia`; `llms.txt` matches Honduras and Colombia. No em dash in any of the new strings.

- [ ] **Step 5: Commit**

```bash
git add web-codefolio/src/i18n/ui.ts web-codefolio/src/pages/llms.txt.ts
git commit -m "feat(seo): Panama title hook, USA/Honduras/Colombia reach"
```

---

### Task 8: Redirect old /en/* URLs to /* (Cloudflare)

**Files:** none in the repo (infrastructure change).

**Interfaces:**
- Consumes: the deployed flipped site.
- Produces: 301 responses for `/en/*` and `/en` pointing at the stripped path.

- [ ] **Step 1: Add a Cloudflare Single Redirect rule**

In the Cloudflare dashboard for `dennisgarcia.dev`: Rules → Redirect Rules → Create rule → Single Redirect.

- When incoming requests match:
  - Field `Hostname` equals `dennisgarcia.dev`
  - Field `URI Path` starts with `/en/`
- Then: Dynamic redirect
  - Expression: `concat("https://dennisgarcia.dev", regex_replace(http.request.uri.path, "^/en", ""))`
  - Status code: `301`
  - Preserve query string: on

Add a second rule for the bare `/en` path → `https://dennisgarcia.dev/`.

If the Cloudflare API token is available, apply via API instead:

```bash
# Replace ZONE_ID and TOKEN; list/create redirect ruleset entry for phase http_request_dynamic_redirect
curl -s -X GET "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rulesets/phases/http_request_dynamic_redirect/entrypoint" \
  -H "Authorization: Bearer $TOKEN" | head -c 400
```

- [ ] **Step 2: Verify the redirect**

```bash
curl -sI https://dennisgarcia.dev/en/devops/ | grep -iE "^(HTTP|location)"
curl -sI https://dennisgarcia.dev/en | grep -iE "^(HTTP|location)"
```

Expected: both return `301` and `location: https://dennisgarcia.dev/devops/` / `https://dennisgarcia.dev/`.

- [ ] **Step 3: No commit** (infrastructure). Record the rule in the handoff doc if one is updated.

---

### Task 9: Final verification sweep

**Files:** none (verification only).

- [ ] **Step 1: Clean build**

```bash
cd web-codefolio && npm run build
```

Expected: success; `/es/` tree present; no `/en/` output.

- [ ] **Step 2: Assert no stale /en references in source or output**

```bash
grep -rn '"/en\|/en/\|isEn' web-codefolio/src/ || echo "no /en references in src"
grep -rl '<link rel="alternate" hreflang="en" href="https://dennisgarcia.dev/en/' web-codefolio/dist/ || echo "no /en hreflang in dist"
```

Expected: both print the `no ...` fallback.

- [ ] **Step 3: Assert deferral/SEO invariants**

```bash
grep -o '<link rel="canonical"[^>]*>' web-codefolio/dist/index.html web-codefolio/dist/es/index.html
grep -o '<link rel="alternate"[^>]*>' web-codefolio/dist/es/index.html
test -f web-codefolio/dist/404.html && echo "404 ok"
```

Expected: EN canonical `https://dennisgarcia.dev/`; ES canonical `https://dennisgarcia.dev/es/`; ES alternates include `hreflang="en"` → `https://dennisgarcia.dev/` and `x-default` → `https://dennisgarcia.dev/`; `404 ok`.

- [ ] **Step 4: Live smoke test after deploy**

```bash
for u in https://dennisgarcia.dev/ https://dennisgarcia.dev/es/ https://dennisgarcia.dev/devops/ https://dennisgarcia.dev/es/devops/ https://dennisgarcia.dev/sitemap-index.xml https://dennisgarcia.dev/llms.txt; do
  echo -n "$u -> "; curl -s -o /dev/null -w "%{http_code}\n" -L "$u"
done
curl -s https://dennisgarcia.dev/ | grep -o '"@type":"Person"'
curl -s -o /dev/null -w "404 page -> %{http_code}\n" https://dennisgarcia.dev/does-not-exist/
```

Expected: all key URLs `200`; `"@type":"Person"` present in home HTML; 404 path returns `404` (GitHub Pages serves `404.html`).

- [ ] **Step 5: Validate structured data**

Open https://search.google.com/test/rich-results and test `https://dennisgarcia.dev/` and `https://dennisgarcia.dev/en/../es/devops/` (use `https://dennisgarcia.dev/es/devops/`). Expected: no errors; `Person` and `BreadcrumbList`/`ProfilePage` detected.

- [ ] **Step 6: Search Console follow-up (manual)**

In Search Console: submit `https://dennisgarcia.dev/sitemap-index.xml`, request indexing for `/`, `/es/`, and the four category pages in both languages, and watch the "Alternate page with proper canonical tag" and coverage reports for the ES migration.

---

## Self-Review

**Spec coverage:**
- Item 1 (redirect + default flip): Tasks 1, 2, 3. Covered.
- Item 2 (structured data): Task 4. Covered (data module + component, not a static JSON file, because JSON-LD must vary per page and language).
- Item 3 (sitemap hreflang + lastmod): Task 5. Covered.
- Item 5 (branded noindex 404): Task 6. Covered.
- Item 10 (Panama title, USA/Honduras/Colombia reach): Task 7. Covered, with the approved twist.
- Migration 301 for `/en/*`: Task 8. Covered (Cloudflare, manual).

**Placeholder scan:** No TBD/TODO; every code step contains full content.

**Type consistency:** `localizePath`/`switchLangPath`/`getLangFromUrl` signatures unchanged from Task 1 and consumed verbatim in Tasks 2-3. `buildJsonLd` input keys (`lang`, `canonical`, `isHome`, `pageTitle`) match the call site in Task 4 Step 3. `JsonLd` prop is `data` in both definition and usage.

**Known risk:** Existing Spanish rankings sit on root URLs (`/devops/` etc.) that now serve English. hreflang + the new `/es/` tree mitigate this, but expect a transient ES impressions dip during re-crawl.
