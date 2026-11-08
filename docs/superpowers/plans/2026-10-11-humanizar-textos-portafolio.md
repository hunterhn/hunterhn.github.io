# Humanización de textos del portafolio (web-codefolio) — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescribir todo el texto narrativo y SEO del sitio bilingüe `web-codefolio` con el skill `humanizalo`, en primera persona y voz profesional-humana, sin alterar ningún dato factual.

**Architecture:** El contenido bilingüe está centralizado en `web-codefolio/src/data/content.ts` y `web-codefolio/src/i18n/ui.ts` (más dos literales en `HomePage.astro`/`Header.astro`). Se trabaja bloque por bloque: un subagente fresco por tarea que invoca el skill `humanizalo`, reescribe ES y EN en paridad y corre el bucle de auditoría del skill. Las tareas que tocan archivos distintos corren en paralelo (Wave 1); las que tocan el mismo archivo corren en serie. Un subagente de verificación con sesión limpia compara el `git diff` contra la baseline y demuestra que solo cambió prosa, nunca datos factuales.

**Tech Stack:** Astro 5, TypeScript, i18n propio (tipos `L`, `LList`, `UIKey`), `npm run build` como verificación (no hay test suite).

**Spec:** Contexto en `docs/handoff/20261011-2301-portfolio-bilingual-deploy.handoff.md`. Decisiones de diseño aprobadas: (1) alcance = prosa narrativa + SEO, sin datos factuales; (2) persona = primera persona; (3) idiomas = ES y EN con paridad; (4) intensidad = profesional-humanizada.

## Global Constraints

Estas reglas aplican a TODAS las tareas.

- **Invoca el skill `humanizalo` en cada tarea que toque texto.** Sigue su proceso (escanear los 40 patrones → reescribir → inyectar voz → puntuar 6 dimensiones → bucle de auditoría hasta ≥42/60). El texto final, la tabla de puntaje y el resumen de cambios van en el **mensaje final del subagente**, nunca dentro de los archivos del sitio.
- **Nunca cambies datos factuales.** Se conservan literalmente: `role`, `company`, `period`, `location`, `institution`, `title` (de categoría, proyecto, educación, investigación), `name`, `issuer`, `year`, `tech[]`, `chips[]`, `frameworks[]`, `areas[]`, `assessment[]`, `profile.name`, `contact.*`, `link`, `emailB64` y toda métrica/cifra (`19 años`, `35%`, `t = -3.56`, `p = 0.0016`, `3.32`, `4.16`, `25`, `12`, `30 fotografías`, años, etc.).
- **Tipos y claves invariantes.** No renombres ninguna clave de `content.ts`/`ui.ts` ni cambies las formas `L`, `LList`, `Lang`, `UIKey`. Cambiar una clave o tipo rompe `astro check`/`build`.
- **ES y EN en paridad.** Cada bloque reescrito debe existir en ambos idiomas, decir lo mismo y usar la misma voz.
- **Formato (skill humanizalo):** sin rayas largas (—) en la prosa reescrita; comillas rectas; sentence case si tocas un heading. Las rayas largas dentro de títulos factuales (p. ej. `"Robótica — Bastón para personas ciegas"`) se conservan.
- **No toques** lógica, scripts inline, CSS, `astro.config.mjs`, `llms.txt.ts` (se genera solo a partir de `content.ts`), ni el texto de chips/etiquetas cortas.
- **Commits:** un commit por tarea en `master`. **No hagas `git push`.** El build debe estar verde antes de commitear.

**Baseline para verificación:** `3c9234f` (HEAD al escribir este plan). Si HEAD cambió al empezar, usa el SHA que devuelva `git rev-parse HEAD` y anótalo.

---

## Estrategia de despacho

- **Wave 1 (paralelo),** archivos distintos, sin solapamiento:
  - Task 1 → `src/i18n/ui.ts`
  - Task 2 → `src/components/HomePage.astro`, `src/components/Header.astro`
  - Task 3 → `src/data/content.ts`
- **Wave 2 (serie, mismo archivo `content.ts`):** Task 4 → Task 5, después de que Task 3 haya commiteado.
- **Wave 3:** Task 6 (verificación factual, subagente fresco de solo lectura) → Task 7 (QA final).

Cada subagente implementador arranca con contexto fresco, lee su bloque en el archivo actual, invoca `humanizalo` y reporta. No reescribe bloques fuera de su tarea.

---

### Task 1: `ui.ts` — prosa de home + SEO

**Files:**
- Modify: `web-codefolio/src/i18n/ui.ts`

**Interfaces:**
- Consumes: el objeto `ui` actual (claves `UIKey` en `es` y `en`).
- Produces: mismas claves, mismo tipo (`string`), solo cambia el valor de las claves listadas.

**Claves a reescribir (en `es` Y en `en`):**
`meta.title`, `meta.description`, `meta.experience`, `meta.education`, `meta.hobbies`, `meta.psychology`, `home.title2`, `home.lead`, `hobbies.intro`.

**Claves a NO tocar:** `home.title1`, `role`, `contact`, `back`, `techLabel`, `langName`, `langSwitchLabel`, `home.areas`, `section.*`, `present`.

**Guía de voz (ejemplos anclados):**
- `home.lead` ES actual: `"Arquitecto DevOps y de Cloud con 19 años de experiencia en desarrollo, administración de sistemas, bases de datos, redes, seguridad, automatización y agentic AI. Construyo plataformas y las opero en producción. Aplico también la psicología para comprender el comportamiento humano detrás de la tecnología."`
  → reescritura esperada (mantiene "19 años"): primera persona, frases de distinto largo, sin frases de póster: p. ej. `"Llevo 19 años construyendo y operando sistemas: desarrollo, servidores, bases de datos, redes, seguridad y automatización. Hoy trabajo sobre todo con cloud, DevOps y agentes de IA. Estudié psicología, y la uso para entender qué pasa del lado humano de la tecnología."`
- `meta.title` (ES/EN) usa raya larga; cámbiala por coma conservando nombre y rol (p. ej. `"Dennis García, Arquitecto DevOps y Cloud"`).

**Steps:**
- [ ] **Step 1: Build baseline**

Run: `cd web-codefolio && npm install && npm run build`
Expected: build verde, 18 páginas.

- [ ] **Step 2: Invocar `humanizalo` y reescribir el bloque `es`**

Invoca el skill `humanizalo`. Aplica su proceso a las claves listadas del bloque `es`. Genera el draft, corre el bucle de auditoría y guarda la versión final.

- [ ] **Step 3: Reescribir el bloque `en` con la misma voz**

Repite el proceso para el bloque `en`. Mantén paridad de significado con `es`.

- [ ] **Step 4: Verificar tipos y build**

Run: `cd web-codefolio && npm run build`
Expected: verde. Si falta una clave en `en` o se renombró, el tipo `UIKey`/build falla; corrígelo.

- [ ] **Step 5: Verificar formato (sin rayas largas en prosa nueva)**

Run: `cd web-codefolio && grep -n "—" src/i18n/ui.ts`
Expected: sin coincidencias (o solo en contextos factuales permitidos; aquí no debería quedar ninguna).

- [ ] **Step 6: Commit**

```bash
git add web-codefolio/src/i18n/ui.ts
git commit -m "content(i18n): humanize home + SEO copy (ES/EN)"
```

**Reporte final del subagente:** texto final de cada clave (ES/EN), tabla de puntaje 6 dimensiones ≥42/60, resumen de cambios.

---

### Task 2: `HomePage.astro` + `Header.astro` — resúmenes de tarjetas y `og:image:alt`

**Files:**
- Modify: `web-codefolio/src/components/HomePage.astro` (bloque `extraCards`, ~líneas 17-58: 4 `summary.es` y 4 `summary.en`)
- Modify: `web-codefolio/src/components/Header.astro` (línea 58: `og:image:alt`)

**Interfaces:**
- Consumes: los literales actuales.
- Produces: mismos campos `summary: { es, en }` (4 tarjetas) y el mismo `og:image:alt`.

**Guía de voz:**
- Reescribe SOLO los 4 `summary` (experience, education, hobbies, psychology). Mantén los `title` (`"Experiencia"`, `"Formación"`, …) y todos los `chips[]`.
- `og:image:alt` actual: `"Dennis García — DevOps & Cloud Architect"` → `"Dennis García, DevOps and Cloud Architect"` (quita la raya, conserva nombre y rol).

**Steps:**
- [ ] **Step 1: Invocar `humanizalo` y reescribir los 4 `summary` (ES/EN)** con paridad y voz de primera persona.
- [ ] **Step 2: Ajustar `og:image:alt`** como arriba.
- [ ] **Step 3: Build**

Run: `cd web-codefolio && npm run build`
Expected: verde, 18 páginas.

- [ ] **Step 4: Verificar formato**

Run: `cd web-codefolio && grep -n "—" src/components/Header.astro src/components/HomePage.astro`
Expected: sin coincidencias.

- [ ] **Step 5: Commit**

```bash
git add web-codefolio/src/components/HomePage.astro web-codefolio/src/components/Header.astro
git commit -m "content(home): humanize card summaries and og alt"
```

**Reporte final:** textos finales, tabla de puntaje, resumen.

---

### Task 3: `content.ts` — perfil + categorías

**Files:**
- Modify: `web-codefolio/src/data/content.ts`

**Interfaces:**
- Consumes: `profile`, `categories[]` actuales.
- Produces: `profile.about` (`L`) y, por categoría, `summary` (`L`), `intro` (`L`) y cada `projects[].desc` (`LList`) reescritos. `title`, `chips[]`, `projects[].title`, `tech[]` intactos.

**Bloques a reescribir (ES y EN):**
- `profile.about`
- `categories[].summary` (4 categorías: software-development, devops, security-data, ai-automation)
- `categories[].intro` (4)
- `categories[].projects[].desc` (22 proyectos; cada uno es `LList` con 2-5 bullets por idioma)

**Guía de voz (ejemplos anclados):**
- `profile.about` ES actual: `"19 años en desarrollo, administración de sistemas, bases de datos, redes, seguridad, automatización, agentic AI y cloud/DevOps, con formación en psicología aplicada al comportamiento humano."`
  → p. ej. `"Llevo 19 años en esto: desarrollo, servidores, bases de datos, redes, seguridad, automatización y, más recientemente, cloud, DevOps y agentes de IA. También me formé en psicología, muy centrada en el comportamiento humano."` (conserva "19 años" y "psicología").
- `devops.intro` EN actual: `"I build and operate reproducible infrastructure on Google Cloud and AWS. I automate deployments, containers and environments, with a focus on observability and diagnosing complex incidents."`
  → p. ej. `"I build reproducible infrastructure on Google Cloud and AWS and then live with it in production. Deployments, containers and environments are automated; most of my attention goes to observability and to the incidents that don't explain themselves."`
- Bullets de proyecto: pasan de frases nominales impersonales a primera persona natural, sin inventar hechos. Ej. EN: `"Design and maintenance of GCP and AWS infrastructure with Terraform and Terraform Cloud."` → `"I design and maintain GCP and AWS infrastructure with Terraform and Terraform Cloud."`

**No cambies** nombres propios dentro de descripciones (MIDEH, Honduras, CNBS, Coca-Cola, AS400, etc.) ni las siglas/tecnologías.

**Steps:**
- [ ] **Step 1: Invocar `humanizalo`** y reescribir `profile.about` + `categories[].summary` + `categories[].intro` (ES y EN).
- [ ] **Step 2: Reescribir los `desc` de los 22 proyectos** (ES y EN), uno por uno, con el mismo proceso. Mantén el número de bullets por proyecto en ES = EN.
- [ ] **Step 3: Build**

Run: `cd web-codefolio && npm run build`
Expected: verde, 18 páginas.

- [ ] **Step 4: Verificar conteos estructurales**

Run: `cd web-codefolio && grep -c "projects:" src/data/content.ts && grep -c "desc:" src/data/content.ts`
Expected: mismo número de `projects:` (4) y de `desc:` que antes de editar (vuelve a contar contra `git show 3c9234f:web-codefolio/src/data/content.ts`).

- [ ] **Step 5: Commit**

```bash
git add web-codefolio/src/data/content.ts
git commit -m "content(data): humanize profile + category intros and project bullets (ES/EN)"
```

**Reporte final:** tabla de puntaje por bloque (o agregada), resumen, y conteo de bullets ES/EN.

---

### Task 4: `content.ts` — bullets de trayectoria

> Ejecutar SOLO después de que Task 3 haya commiteado (mismo archivo).

**Files:**
- Modify: `web-codefolio/src/data/content.ts`

**Interfaces:**
- Consumes: `experience[]`, `complementaryExperience[]`, `volunteering[]`.
- Produces: `bullets` (`LList`) de cada item reescritos; `role`, `company`, `period`, `location`, `tech[]` intactos.

**Bloques a reescribir (ES y EN):**
`experience[].bullets` (12 items con bullets), `complementaryExperience[].bullets` (3), `volunteering[].bullets` (2).

**Guía de voz:**
- `"Architecture and operation of cloud infrastructure on GCP and AWS."` → `"I design and run cloud infrastructure on GCP and AWS."`
- Conserva cifras y nombres: `"35% latency reduction"`, `"3 satellite modules"`, `"Banco de Occidente"`, `"AS400"`, etc.
- Los `role` que son descriptivos (`"Robótica — Bastón para personas ciegas"`, `"Transformación y Carga de Datos"`) NO se tocan: son títulos.

**Steps:**
- [ ] **Step 1: Invocar `humanizalo`** y reescribir `experience[].bullets` (ES/EN).
- [ ] **Step 2:** Reescribir `complementaryExperience[].bullets` y `volunteering[].bullets` (ES/EN).
- [ ] **Step 3: Build**

Run: `cd web-codefolio && npm run build`
Expected: verde.

- [ ] **Step 4: Commit**

```bash
git add web-codefolio/src/data/content.ts
git commit -m "content(data): humanize experience and volunteering bullets (ES/EN)"
```

**Reporte final:** tabla de puntaje, resumen.

---

### Task 5: `content.ts` — formación, hobbies y psicología

> Ejecutar SOLO después de que Task 4 haya commiteado (mismo archivo).

**Files:**
- Modify: `web-codefolio/src/data/content.ts`

**Interfaces:**
- Consumes: `education[]`, `complementaryEducation[]`, `hobbies[]`, `psychology`.
- Produces: `education[].detail`/`complementaryEducation[].detail` (`L`), `hobbies[].desc` (`L`, 7), `psychology.intro` (`L`), `psychology.approaches[].strength` (`L`, 2), `psychology.research[].desc` (`L`, 2), `psychology.projects[].desc` (`L`, 5). Títulos, `areas[]`, `assessment[]`, `frameworks[]`, `name` de approach intactos.

**Guía de voz:**
- `psychology.intro` ES actual empieza `"Licenciado en Psicología (B.A.) por..."` → pásalo a primera persona conservando siglas: `"Soy licenciado en Psicología (B.A.) por la Universidad Interamericana de Panamá (UIP)..."`.
- `approaches[].strength` describe el enfoque (TCC, ACT): mantén el contenido técnico y hazlo sonar a alguien que lo conoce, sin marketing.
- `research[].desc` conserva TODAS las cifras (UIP, 2024, 25 estudiantes, 3.32, 4.16, t, p, 12 participantes).

**Steps:**
- [ ] **Step 1: Invocar `humanizalo`** y reescribir `education`/`complementaryEducation` details + `hobbies[].desc` (ES/EN).
- [ ] **Step 2:** Reescribir `psychology.intro`, `approaches[].strength`, `research[].desc`, `projects[].desc` (ES/EN).
- [ ] **Step 3: Build**

Run: `cd web-codefolio && npm run build`
Expected: verde.

- [ ] **Step 4: Commit**

```bash
git add web-codefolio/src/data/content.ts
git commit -m "content(data): humanize education details, hobbies and psychology copy (ES/EN)"
```

**Reporte final:** tabla de puntaje, resumen.

---

### Task 6: Verificación de integridad factual (subagente de sesión limpia, solo lectura)

**Files:**
- Read-only. No modifica archivos.

**Interfaces:**
- Consumes: baseline `3c9234f` y el `HEAD` actual.
- Produces: veredicto PASS/FAIL por categoría en el mensaje final.

**Steps:**
- [ ] **Step 1: Diff de archivos de contenido**

Run: `git diff 3c9234f..HEAD --stat -- web-codefolio/src/data/content.ts web-codefolio/src/i18n/ui.ts web-codefolio/src/components/HomePage.astro web-codefolio/src/components/Header.astro`
Expected: solo esos 4 archivos; sin cambios inesperados.

- [ ] **Step 2: Comparar tokens factuales baseline vs actual**

Run (ejemplos):
```bash
git show 3c9234f:web-codefolio/src/data/content.ts > /tmp/opencode/content.base.ts
git show HEAD:web-codefolio/src/data/content.ts > /tmp/opencode/content.head.ts
```
Extrae y compara: `company`, `role`, `period`, `location`, `institution`, `issuer`, `year`, `tech:`, `chips:`, `frameworks:`, `areas:`, `assessment:`, `link`, y todas las cifras/métricas. Deben ser idénticos. Lo mismo para `ui.ts` (claves) y `Header.astro` (URLs, favicons).

- [ ] **Step 3: Paridad de claves y ES/EN**

Confirma que el conjunto de claves de `ui.ts` no cambió y que en `content.ts` cada bloque reescrito sigue teniendo `es` y `en`.

- [ ] **Step 4: Build independiente**

Run: `cd web-codefolio && npm run build`
Expected: verde, 18 páginas.

- [ ] **Step 5: Reporte**

Entrega una tabla: categoría factual (`companies`, `periods`, `tech/chips`, `metrics`, `names/urls`, `keys`, `parity`, `build`) → PASS/FAIL con evidencia (nombres de archivo/línea o conteos). Si algo cambió indebidamente, FAIL con la lista exacta.

---

### Task 7: QA final y re-auditoría global

**Files:**
- Read-only.

**Steps:**
- [ ] **Step 1: Build + preview**

Run: `cd web-codefolio && npm run build && npm run preview`
Expected: verde; abre `/`, `/en/`, `/devops/`, `/psychology/`, `/experience/` y verifica que el texto nuevo se ve y que ES/EN alternan bien.

- [ ] **Step 2: Re-auditoría humanizalo global**

Invoca `humanizalo` sobre el corpus final completo (ES y EN) y corre sus "Quick checks". Marca cualquier tell restante (P01-P40) con archivo/línea.

- [ ] **Step 3: Barrido de formato**

Run: `cd web-codefolio && grep -rn "—" src/data/content.ts src/i18n/ui.ts src/components/HomePage.astro src/components/Header.astro`
Expected: solo rayas dentro de títulos factuales permitidos (`Robótica —`, `Sistemas — Líder`, `Perfumería —`, `práctica —`, `BRÚJULA —`, `System Analyst Developer —`). Ninguna en prosa nueva.

- [ ] **Step 4: Reporte final**

Resumen: tareas completadas, puntaje humanizalo agregado, veredicto de Task 6, y cualquier tell/pendiente restante.

---

## Self-Review (hecho al escribir este plan)

- **Cobertura:** prosa + SEO en `ui.ts` (Task 1), prosa en `HomePage.astro`/`Header.astro` (Task 2), perfil/categorías/proyectos (Task 3), trayectoria (Task 4), formación/hobbies/psicología (Task 5), verificación factual (Task 6), QA (Task 7). `llms.txt.ts` hereda los cambios de `content.ts` y no requiere edición directa.
- **Placeholders:** ninguno; cada tarea lista claves exactas, pasos con comandos y guía de voz con ejemplos.
- **Consistencia de tipos:** todas las tareas preservan `L`/`LList`/`Lang`/`UIKey` y los nombres de clave.
- **Datos factuales:** protegidos por la Global Constraint y verificados por Task 6 con subagente de sesión limpia.
