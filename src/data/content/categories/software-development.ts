import type { Category } from "../types";

export const softwareDevelopment: Category = {
    key: "software-development",
    icon: "code.svg",
    order: 2,
    title: { es: "Desarrollo de software", en: "Software Development" },
    summary: {
      es: "Construyo aplicaciones web y APIs en PHP, Laravel, WordPress, Node.js y TypeScript. Me importa que la plataforma siga siendo mantenible.",
      en: "I build web applications and APIs in PHP, Laravel, WordPress, Node.js and TypeScript. What matters to me is that the platform stays maintainable.",
    },
    intro: {
      es: "Diseño y desarrollo aplicaciones web, APIs e integraciones. Trabajo desde el modelo de dominio y la arquitectura hasta el despliegue y la operación. Prefiero soluciones que se mantengan sin encarecerse.",
      en: "I design and build web applications, APIs and integrations. I work from domain modeling and architecture through to deployment and operations. I prefer solutions that stay cheap to maintain.",
    },
    chips: [
      "PHP",
      "Laravel",
      "WordPress",
      "Node.js",
      "TypeScript",
      "Next.js",
      "tRPC",
      "TanStack Query",
      "Zod",
      "PostgreSQL",
    ],
    projects: [
      {
        title: {
          es: "Plataforma para profesionales de la psicología",
          en: "Platform for psychology professionals",
        },
        desc: {
          es: [
            "El producto todavía está en definición: estoy armando el dominio, la API y la arquitectura cloud para sostener el trabajo clínico y administrativo.",
            "Diseñé el modelo de datos para pacientes, casos, sesiones, notas clínicas, consentimientos y documentos.",
            "Armé una búsqueda semántica de expedientes y notas clínicas con PostgreSQL y pgvector.",
            "Monté una arquitectura contenerizada con servicios de interfaz, API y workers sobre PostgreSQL.",
            "Estoy evaluando el stack: TypeScript, Next.js, tRPC, TanStack Query, Zod y Tailwind CSS.",
          ],
          en: [
            "The product is still being defined: I'm working out the domain, the API and the cloud architecture to support clinical and administrative work.",
            "I designed the data model for patients, cases, sessions, clinical notes, consents and documents.",
            "I built semantic search of records and clinical notes with PostgreSQL and pgvector.",
            "I set up a containerized architecture with interface, API and worker services on PostgreSQL.",
            "I'm evaluating the stack: TypeScript, Next.js, tRPC, TanStack Query, Zod and Tailwind CSS.",
          ],
        },
        tech: [
          "TypeScript",
          "Next.js",
          "tRPC",
          "TanStack Query",
          "Zod",
          "Tailwind CSS",
          "PostgreSQL",
          "pgvector",
          "Docker",
          "GCP",
        ],
      },
      {
        title: {
          es: "Aplicaciones Laravel y WordPress en Cloud Run",
          en: "Laravel & WordPress apps on Cloud Run",
        },
        desc: {
          es: [
            "Diseñé, desplegué y diagnostiqué aplicaciones PHP sobre Google Cloud Run.",
            "Configuré y ajusté Nginx, Apache y PHP-FPM en contenedores, incluidas versiones heredadas de PHP.",
            "Resolví problemas de autenticación y encabezados entre Cloud Run, IAP y Cloudflare.",
            "Optimicé tareas programadas de Laravel y procesos de larga duración.",
          ],
          en: [
            "I designed, deployed and troubleshot PHP applications on Google Cloud Run.",
            "I configured and tuned Nginx, Apache and PHP-FPM in containers, including legacy PHP versions.",
            "I fixed authentication and header issues between Cloud Run, IAP and Cloudflare.",
            "I optimized Laravel scheduled tasks and long-running processes.",
          ],
        },
        tech: [
          "PHP",
          "Laravel",
          "WordPress",
          "Cloud Run",
          "Nginx",
          "Apache",
          "PHP-FPM",
          "Docker",
          "CircleCI",
        ],
      },
      {
        title: {
          es: "Integración Node.js con Google Cloud Storage",
          en: "Node.js integration with Google Cloud Storage",
        },
        desc: {
          es: [
            "Integré aplicaciones Node.js con buckets de imágenes en Google Cloud Storage.",
            "Diagnostiqué permisos, secretos y variables de entorno para servicios Cloud Run y Vertex AI.",
          ],
          en: [
            "I integrated Node.js applications with image buckets on Google Cloud Storage.",
            "I diagnosed permissions, secrets and environment variables for Cloud Run and Vertex AI services.",
          ],
        },
        tech: ["Node.js", "TypeScript", "Cloud Storage", "Cloud Run", "Vertex AI"],
      },
      {
        title: {
          es: "Plataforma Moodle para evaluación nacional",
          en: "Moodle platform for national assessment",
        },
        desc: {
          es: [
            "Implementé la plataforma Moodle para pruebas diagnósticas, formativas y de fin de grado en centros educativos públicos (proyecto MIDEH, Honduras).",
            "Diseñé una distribución offline para centros educativos sin conexión a Internet.",
          ],
          en: [
            "I implemented the Moodle platform for diagnostic, formative and end-of-grade tests in public schools (MIDEH project, Honduras).",
            "I designed an offline distribution for schools without Internet access.",
          ],
        },
        tech: ["Moodle", "PHP", "MySQL", "Linux"],
      },
      {
        title: {
          es: "Sistemas bancarios e integraciones",
          en: "Banking systems & integrations",
        },
        desc: {
          es: [
            "Analicé y diseñé procesos para carga de datos, cobranzas e interfaces con el sistema central AS400.",
            "Desarrollé servidores basados en sockets y WebServices, además de automatizar procesos.",
            "Conecté interfaces con Asterisk, IVR y dispositivos de lectura de tarjetas de crédito.",
          ],
          en: [
            "I analyzed and designed processes for data loading, collections and interfaces with the AS400 core system.",
            "I built socket-based servers and WebServices, and automated processes.",
            "I connected interfaces with Asterisk, IVR and credit card reading devices.",
          ],
        },
        tech: [".NET", "C#", "MSSQL", "MySQL", "Ruby", "PHP", "Apache", "Asterisk"],
      },
    ],
};
