# Auditoría de enlaces

Generado desde el sitio construido (`dist/`) el 2026-11-08. El objetivo es revisar que cada enlace externo apunte al perfil o página correctos.

## Enlaces externos a validar

| ✓ | Enlace | Texto visible | Dónde aparece | Contexto |
|---|---|---|---|---|
| [ ] | https://github.com/hunterhn | GitHub | Contacto en `/`, `/es/`, `/experience/`, `/es/experience/`; JSON-LD en todas las páginas; `llms.txt` | Perfil de GitHub |
| [ ] | https://www.linkedin.com/in/dennisgarciahn/ | LinkedIn | Contacto en `/`, `/es/`, `/experience/`, `/es/experience/`; JSON-LD en todas las páginas; `llms.txt` | Perfil de LinkedIn |
| [ ] | https://commons.wikimedia.org/wiki/User:Garcia.dennis | Wikimedia Commons | Contacto en `/`, `/es/`, `/experience/`, `/es/experience/`; JSON-LD en todas las páginas; `llms.txt` | Perfil de Wikimedia Commons |
| [ ] | https://github.com/hunterhn/recuperar-datos-desde-archivos-frm-ibd-de-mysql | github.com/hunterhn/recuperar-datos-desde-archivos-frm-ibd-de-mysql | `/security-data/`, `/es/security-data/` | Repositorio del proyecto de recuperación de datos |
| [ ] | https://www.youtube.com/watch?v=ZtwNTsY1xDs | youtube.com/watch?v=ZtwNTsY1xDs | `/experience/`, `/es/experience/` | Video del proyecto de robótica |

Estos son todos los enlaces externos del sitio. Los tres primeros son los perfiles de contacto; los dos últimos son enlaces de proyectos.

## Correo

- No hay ningún enlace `mailto:` en el HTML.
- El enlace del correo usa `href="#"` y `data-email` (base64); la dirección se arma al hacer clic.
- Aparece en el inicio y en experiencia, en ambos idiomas.

## Enlaces internos

Destinos internos únicos encontrados en el HTML:

- `/`
- `/devops/`
- `/software-development/`
- `/security-data/`
- `/ai-automation/`
- `/experience/`
- `/education/`
- `/hobbies/`
- `/psychology/`
- `/es/`
- `/es/devops/`
- `/es/software-development/`
- `/es/security-data/`
- `/es/ai-automation/`
- `/es/experience/`
- `/es/education/`
- `/es/hobbies/`
- `/es/psychology/`
- `/#contact` y `/es/#contact` — anclas a la sección de contacto
- `/#` y `/es/#` — enlaces del correo, manejados por JavaScript
- `https://dennisgarcia.dev` — enlace al sitio desde la sección de contacto
- `https://dennisgarcia.dev/` — enlace al inicio desde la página 404

## Enlaces técnicos

No son navegación ni perfiles; son assets y metadatos:

- `/_astro/*.css` y `/_astro/*.js` — assets generados por Astro
- `/assets/*.svg`, `/assets/dennis-logo-white.png` — iconos y logo
- `/favicon.ico`, `/favicon-16x16.png`, `/favicon-32x32.png`, `/favicon-48x48.png`, `/favicon-512x512.png`, `/apple-touch-icon.png`, `/android-chrome-192x192.png`
- `/site.webmanifest`, `/og-image.png`
- `https://fonts.googleapis.com/`, `https://fonts.gstatic.com/` — preconnect de fuentes
- canonical, hreflang y `og:url` apuntan a páginas de `https://dennisgarcia.dev`

## JSON-LD `sameAs`

- https://github.com/hunterhn
- https://www.linkedin.com/in/dennisgarciahn/
- https://commons.wikimedia.org/wiki/User:Garcia.dennis

## Sitemap

`/sitemap-index.xml` lista 18 URLs: las 9 páginas en inglés y las 9 en español. La lista completa está en `dist/sitemap-0.xml`.
