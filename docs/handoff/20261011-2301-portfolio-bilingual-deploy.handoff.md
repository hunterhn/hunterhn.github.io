# Handoff — Portafolio bilingüe (web-codefolio) publicado en dennisgarcia.dev

- **Date**: 2026-10-11 23:01 EST
- **Branch**: `master`
- **HEAD**: `4869023 — fix(ux): force dark canvas before CSS loads to avoid navigation flash`
- **Session ID**: no nativo; surrogate `20261011-2301@4869023`
- **Working tree**: limpio (0 archivos sin commitear)

---

## 1. Qué es esto

Portafolio personal de **Dennis García** (DevOps & Cloud Architect, Panamá), **bilingüe ES/EN**, construido con **Astro** y **publicado en GitHub Pages** con dominio **https://dennisgarcia.dev** (proxy de Cloudflare delante). El repo `hunterhn.github.io` es el *sitio de usuario*, así que sirve la **raíz** del dominio.

El repo contiene **dos proyectos Astro**:
- **`web-codefolio/`** → **el sitio publicado** (theme *codefolio* de `danielunited/codefolio`, Astro 5). Es el foco real.
- **`web-carrer/`** → segunda versión de prueba (template *career-portfolio* de `nbakh16`, Astro 6 + Tailwind 4). **No se publica**; es solo experimento.

Principio guía: **fuente de datos única** (`src/data/content.ts`) dirigida en dos idiomas, con el build publicando solo `web-codefolio/dist` vía GitHub Actions. No hay spec/plan en disco; este archivo es el contexto.

Datos personales de origen (privados, fuera del repo público): `profile/*.md` (ignorado por git).

---

## 2. Dónde vive el código

### web-codefolio (sitio publicado)

| Pieza | Archivo | Nota |
|---|---|---|
| **Contenido bilingüe (todo)** | `web-codefolio/src/data/content.ts` | profile, navItems, categories(4), experience(12), complementaryExperience(3), volunteering(3), education, complementaryEducation, certifications, languages, hobbies, psychology, contact. Tipos `L = {es,en}`, `Lang`. |
| Textos UI ES/EN | `web-codefolio/src/i18n/ui.ts` | `t(lang, key)`, `UIKey`. Añadir claves en **ambos** bloques (es/en) o falla el tipo. |
| Helpers i18n | `web-codefolio/src/i18n/utils.ts` | `localizePath`, `switchLangPath`, `normalizePath` (con **trailing slash**). |
| Head/SEO | `web-codefolio/src/components/Header.astro` | canonical **autorreferencial**, hreflang es/en/x-default, OG, Twitter, favicons, manifest, inline dark bg, detección de idioma, ofuscación de email. |
| Layout | `web-codefolio/src/layouts/PageLayout.astro` | Recibe `title` + `description`, monta Header + Sidebar. |
| Home | `web-codefolio/src/components/HomePage.astro` | Hero con logo, tarjetas de sección, contacto. |
| Páginas | `CategoryPage / ExperiencePage / EducationPage / HobbiesPage / PsychologyPage .astro` | Todas en `src/components/`. |
| Sidebar/nav | `web-codefolio/src/components/Sidebar.astro` | Logo blanco + nav + switch de idioma. |
| Proyecto (card) | `web-codefolio/src/components/Project.astro` | Lista de bullets + chips tech. |
| Rutas | `src/pages/index.astro` (ES), `src/pages/en/index.astro` (EN), `src/pages/[page].astro` (ES), `src/pages/en/[page].astro` (EN) | `getStaticPaths` = claves de categorías + `experience|education|hobbies|psychology`. |
| Endpoints | `src/pages/llms.txt.ts`, `src/pages/robots.txt.ts` | `llms.txt` para agentes IA; robots con Sitemap. |
| Config | `web-codefolio/astro.config.mjs` | `site: https://dennisgarcia.dev`, `trailingSlash: 'always'`, integración `@astrojs/sitemap` (filtra robots/llms). |
| Generador OG | `web-codefolio/scripts/generate-og.mjs` | `sharp` → `public/og-image.png` (1200×630). |
| Assets | `web-codefolio/public/` | `CNAME` (dennisgarcia.dev), `favicon.ico`, `favicon-16/32/48/512.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `site.webmanifest`, `og-image.png`, `assets/dennis-logo-white.png`, `assets/dennis-logo.png` (navy), `assets/lobo.png`. |
| CSS | `web-codefolio/src/styles/styles.css` | Theme oscuro codefolio + extensiones (`.brand*`, `.home-logo`, `.timeline*`, `.edu-*`, `.hobby-*`, fondo `html` y `::view-transition`). |

### Deploy / infra (raíz del repo)

| Pieza | Archivo | Nota |
|---|---|---|
| CI/CD | `.github/workflows/deploy.yml` | `on: push [master]` + `workflow_dispatch`. Build en `web-codefolio`, sube `web-codefolio/dist`. |
| Ignore raíz | `.gitignore` | Ignora `profile/`, `exported/`, `.DS_Store`. |
| Logos fuente | `logo/` | Commitearlos: logos navy/blanco, lobo, favicons (origen). |
| Export estático | `exported/web-codefolio/` | Copia estática antigua (ignorada). No es la vía de deploy. |
| web-carrer (prueba) | `web-carrer/` | Astro 6 + Tailwind 4, no publicado. |

---

## 3. Rutas / entrypoints

- **Sitio (ES por defecto)**: `/`, `/software-development/`, `/devops/`, `/security-data/`, `/ai-automation/`, `/experience/`, `/education/`, `/hobbies/`, `/psychology/`
- **Sitio (EN)**: mismas bajo `/en/…/`
- **Infra**: `/sitemap-index.xml` (→ `sitemap-0.xml`), `/robots.txt`, `/llms.txt`, `/og-image.png`, `/site.webmanifest`, `/CNAME`
- **Deploy**: push a `master` → workflow `Deploy web-codefolio to GitHub Pages`.

---

## 4. Cómo correr / probar

```bash
# web-codefolio (sitio real)
cd web-codefolio
npm install
npm run dev            # dev server (puerto 4321 si está libre)
npm run build          # genera dist/ (18 páginas + sitemap + robots + llms)
npm run preview        # sirve dist/ para verificación

# Regenerar la imagen OpenGraph (si cambias el logo)
node scripts/generate-og.mjs

# Deploy (desde la raíz del repo)
git add web-codefolio && git commit -m "..." && git push origin master
gh run list --workflow deploy.yml --limit 3     # ver estado
```

**Herramientas de verificación usadas** (no hay test suite; es sitio estático):
- `curl -sI https://dennisgarcia.dev/…` para códigos y headers.
- Playwright (browser `chrome` del sistema) para i18n y captura de frames (detección de flash blanco). Skill: `webapp-testing`.
- `gh api repos/hunterhn/hunterhn.github.io/pages` para inspeccionar/configurar Pages.

**Puertos**: dev servers pueden estar corriendo — web-codefolio en `4321`, web-carrer en `4322`. Previews de prueba en `4330/4340/4360`.

---

## 5. Estado de pruebas

- **Build**: verde. `npm run build` → **18 páginas** + `llms.txt` + `robots.txt` + `sitemap-index.xml`.
- **Deploy**: verde. Últimos 3 workflows de `master`, todos `success`.
- **En vivo**: `/`, `/en/`, `/devops/`, `/experience/`, `/psychology/`, `/robots.txt`, `/sitemap-index.xml`, `/llms.txt`, `/og-image.png`, favicons → **200**.
- **i18n**: detección por `navigator.language` + `localStorage`; toggle ES/EN; verificado (EN→`/en/`, ES→`/`).
- **Flash blanco en navegación**: verificado con grabación CDP (87 + 110 frames, todos oscuros YAVG ~34). Sin flash.
- **SEO**: canonical autorreferencial + hreflang es/en/x-default en cada página; descripciones únicas.

---

## 6. Pendientes / próximos pasos

1. **Search Console**: enviar `https://dennisgarcia.dev/sitemap-index.xml`, usar **"Validar corrección"** sobre el aviso *"Alternate page with proper canonical tag"* (era por canonical apuntando a ES; ya corregido) y pedir indexación de las URLs clave.
2. **Preview del OpenGraph**: comprobar en https://opengraph.xyz o Facebook Debugger / LinkedIn Post Inspector (puede requerir forzar re-scrape).
3. **`https_enforced` en GitHub Pages**: hoy en `false`. Con Cloudflare delante no es crítico, pero si se quiere `Full (strict)` habría que dejar que GitHub emita el certificado (temporalmente DNS-only) y luego activarlo.
4. **web-carrer**: decidir destino (mantener, ignorar en `.gitignore`, o borrar). No se publica. Verifica que no rompa nada (tiene su propio `package.json`/`node_modules`).
5. **Logo duplicado**: hoy aparece en el **sidebar** (todas las páginas) **y** en el **hero** del home. Si resulta repetido, quitar uno (editar `HomePage.astro` o `Sidebar.astro`).
6. **Versión navy del logo** (`/assets/dennis-logo.png`) sin uso en el sitio (el tema es oscuro → se usa el blanco). Usarla solo si se agrega un contexto claro.
7. **Revisión factual del contenido por Dennis** (fechas, roles, métricas biográficas) antes de considerarlo definitivo.
8. **Cloudflare** (si reaparece algún 404/526): `SSL/TLS = Full`, `Always Use HTTPS = On`, y **Purge Everything** cuando se cambie caché.

---

## 7. Gotchas aprendidos

- **404 del apex en Cloudflare**: era **caché** del borde, no GitHub. GitHub devolvía 200/301; Cloudflare servía un 404 viejo (`x-github-request-id` repetido, `age` subiendo). Solución: **Purge Everything**.
- **526 de Cloudflare**: era **SSL/TLS = "Full (strict)"** y GitHub aún servía cert `*.github.io`. Con **"Full"** (no strict) resuelve; los visitantes usan el cert de Cloudflare.
- **GitHub Pages custom domain**: al hacer `PUT /pages` con `cname=dennisgarcia.dev` quedó primero como `www.dennisgarcia.dev`; luego se fijó el **apex**. Ahora `www` → 301 → apex.
- **`astro-icon` rompe el build** si el nombre del icono no existe (`Unable to locate "devicon:circleci"`). Validar contra `node_modules/@iconify-json/*/icons.json`. Se reemplazó por `mdi:sync`.
- **View Transitions (flash blanco)**: el `<html>` del theme no tenía fondo → blanco por defecto durante el crossfade. Fix en 2 capas: (a) CSS global `html{background-color:#161616;color-scheme:dark}` + `::view-transition-old/new(root){background-color:#161616}`; (b) **inline** `<style>html{background:#161616}</style>` + `<meta name="color-scheme" content="dark">` en `Header.astro` (evita el flash antes de cargar CSS y en navegadores sin VT). Si un usuario aún lo ve, es **caché local** (hard refresh).
- **Canonical bilingüe**: el patrón correcto es **autorreferencial** (cada página apunta a sí misma) + hreflang cruzado. El error original era canonical siempre a ES (marcaba todas las EN como alternas → aviso de GSC).
- **Trailing slash**: se puso `trailingSlash: 'always'` y `localizePath` añade `/`. Si no, canonical/hreflang y enlaces internos quedaban inconsistentes.
- **HTML con `text-transform: capitalize`** del theme convertía "Desarrollo de software" en "Desarrollo De Software"; se cambió a `none`.
- **Background grid del theme** usaba URL relativa (`url('./grid-top-right.svg')`) que no resolvía; se cambió a `/assets/grid-top-right.svg`.
- **Ofuscación de email** (anti-spam): el correo **no** está en el HTML. Se guarda en base64 en `data-email` y un handler de clic arma `mailto:`. En `web-codefolio`: `src/data/site.ts` no; allí está en `HomePage.astro`/`ExperiencePage.astro` (constante `Z2FyY2lh…=`). En `web-carrer`: `src/data/site.ts`. **No** poner el email en `llms.txt` en claro.
- **`llms.txt`**: se genera dinámicamente; importar **todos** los símbolos usados (faltó `volunteering` y rompió el build).
- **Permisos del shell**: evitar rutas `../` fuera de la carpeta del proyecto; ejecutar desde la raíz del repo (`hunterhn.github.io/`).
- **Rama**: el default del remoto es **`master`**; existe una rama local `main` obsoleta. El workflow dispara en `master`.
- **web-carrer (Astro 6)** usa **Tailwind 4** y otro modelo de datos; no confundir con codefolio (Astro 5, CSS propio).

---

## 8. Commits relevantes

```
4869023 fix(ux): force dark canvas before CSS loads to avoid navigation flash
09a5e26 fix(ux): prevent white flash during Astro view transitions
4d5d69f feat(brand): logo on home hero; add source logo and favicon assets
037707b feat(brand): logo in sidebar, favicons, web manifest and Open Graph image
5388c23 feat(seo): sitemap, robots, llms.txt and per-page SEO
9165775 chore
1eb6fdc ci: update ci
0c2c494 init repo
```

Todo commiteado y **pusheado** a `origin/master`. Árbol de trabajo limpio. Sitio en vivo en **https://dennisgarcia.dev**.

> Este documento **no** está commiteado todavía (queda a decisión del usuario). Vive en `docs/handoff/`.
