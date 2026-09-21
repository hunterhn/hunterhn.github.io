export type Lang = "es" | "en";

export type L = { es: string; en: string };
export type LList = { es: string[]; en: string[] };

export interface Project {
  title: L;
  desc: LList;
  tech: string[];
  link?: string;
}

export interface Category {
  key: string;
  icon: string;
  order: number;
  title: L;
  summary: L;
  intro: L;
  chips: string[];
  projects: Project[];
}

export interface Hobby {
  title: L;
  desc: L;
}

export interface NavItem {
  key: string;
  icon: string;
  label: L;
}

export interface Job {
  role: L;
  company: string;
  period: L;
  location?: L;
  bullets?: LList;
  tech?: string[];
  link?: string;
}

export interface Volunteering {
  role: L;
  org: string;
  period: L;
  location?: L;
  bullets?: LList;
}

export interface Education {
  title: L;
  institution: string;
  location?: L;
  period: string;
  detail?: L;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export const profile = {
  name: "Dennis García",
  role: { es: "Arquitecto DevOps y Cloud", en: "DevOps & Cloud Architect" },
  location: { es: "Panamá, Panamá", en: "Panama City, Panama" },
  about: {
    es: "19 años en desarrollo, administración de sistemas, bases de datos, redes, seguridad, automatización, agentic AI y cloud/DevOps, con formación en psicología aplicada al comportamiento humano.",
    en: "19 years in development, systems administration, databases, networking, security, automation, agentic AI and cloud/DevOps, with a background in psychology applied to human behavior.",
  },
};

export const navItems: NavItem[] = [
  { key: "home", icon: "home.svg", label: { es: "Inicio", en: "Home" } },
  {
    key: "devops",
    icon: "dns.svg",
    label: { es: "DevOps y Cloud", en: "DevOps & Cloud" },
  },
  {
    key: "software-development",
    icon: "code.svg",
    label: { es: "Desarrollo de software", en: "Software development" },
  },
  {
    key: "security-data",
    icon: "database.svg",
    label: { es: "Seguridad y datos", en: "Security & data" },
  },
  {
    key: "ai-automation",
    icon: "favorite.svg",
    label: { es: "IA y automatización", en: "AI & automation" },
  },
  {
    key: "experience",
    icon: "browser.svg",
    label: { es: "Experiencia", en: "Experience" },
  },
  {
    key: "education",
    icon: "book.svg",
    label: { es: "Formación", en: "Education" },
  },
  {
    key: "hobbies",
    icon: "spark.svg",
    label: { es: "Aficiones", en: "Hobbies" },
  },
  {
    key: "psychology",
    icon: "mind.svg",
    label: { es: "Psicología", en: "Psychology" },
  },
];

export const categories: Category[] = [
  {
    key: "software-development",
    icon: "code.svg",
    order: 2,
    title: { es: "Desarrollo de software", en: "Software Development" },
    summary: {
      es: "Aplicaciones web y APIs en PHP, Laravel, WordPress, Node.js y TypeScript, con foco en plataformas mantenibles.",
      en: "Web applications and APIs in PHP, Laravel, WordPress, Node.js and TypeScript, focused on maintainable platforms.",
    },
    intro: {
      es: "Diseño y desarrollo de aplicaciones web, APIs e integraciones. Trabajo desde el modelo de dominio y la arquitectura hasta el despliegue y la operación, priorizando soluciones mantenibles y de costo razonable.",
      en: "Design and development of web applications, APIs and integrations. I work from domain modeling and architecture through to deployment and operations, prioritizing maintainable and cost-effective solutions.",
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
            "Producto en definición: dominio, API y arquitectura cloud para apoyar el trabajo clínico y administrativo.",
            "Modelo de datos para pacientes, casos, sesiones, notas clínicas, consentimientos y documentos.",
            "Búsqueda semántica de expedientes y notas clínicas con PostgreSQL y pgvector.",
            "Arquitectura contenerizada con servicios de interfaz, API y workers sobre PostgreSQL.",
            "Evaluación de stack: TypeScript, Next.js, tRPC, TanStack Query, Zod y Tailwind CSS.",
          ],
          en: [
            "Product under definition: domain, API and cloud architecture to support clinical and administrative work.",
            "Data model for patients, cases, sessions, clinical notes, consents and documents.",
            "Semantic search of records and clinical notes with PostgreSQL and pgvector.",
            "Containerized architecture with interface, API and worker services on PostgreSQL.",
            "Stack evaluation: TypeScript, Next.js, tRPC, TanStack Query, Zod and Tailwind CSS.",
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
            "Arquitectura, despliegue y diagnóstico de aplicaciones PHP sobre Google Cloud Run.",
            "Configuración y ajuste de Nginx, Apache y PHP-FPM en contenedores, incluyendo versiones heredadas de PHP.",
            "Resolución de problemas de autenticación y encabezados entre Cloud Run, IAP y Cloudflare.",
            "Optimización de tareas programadas de Laravel y procesos de larga duración.",
          ],
          en: [
            "Architecture, deployment and troubleshooting of PHP applications on Google Cloud Run.",
            "Configuration and tuning of Nginx, Apache and PHP-FPM in containers, including legacy PHP versions.",
            "Resolution of authentication and header issues between Cloud Run, IAP and Cloudflare.",
            "Optimization of Laravel scheduled tasks and long-running processes.",
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
            "Integración de aplicaciones Node.js con buckets de imágenes en Google Cloud Storage.",
            "Diagnóstico de permisos, secretos y variables de entorno para servicios Cloud Run y Vertex AI.",
          ],
          en: [
            "Integration of Node.js applications with image buckets on Google Cloud Storage.",
            "Diagnosis of permissions, secrets and environment variables for Cloud Run and Vertex AI services.",
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
            "Implementación de la plataforma Moodle para pruebas diagnósticas, formativas y de fin de grado en centros educativos públicos (proyecto MIDEH, Honduras).",
            "Diseño de una distribución offline para centros educativos sin conexión a Internet.",
          ],
          en: [
            "Implementation of the Moodle platform for diagnostic, formative and end-of-grade tests in public schools (MIDEH project, Honduras).",
            "Design of an offline distribution for schools without Internet access.",
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
            "Análisis y diseño de procesos para carga de datos, cobranzas e interfaces con el sistema central AS400.",
            "Desarrollo de servidores basados en sockets, WebServices y automatización de procesos.",
            "Interfaces de conexión con Asterisk, IVR y dispositivos de lectura de tarjetas de crédito.",
          ],
          en: [
            "Analysis and design of processes for data loading, collections and interfaces with the AS400 core system.",
            "Development of socket-based servers, WebServices and process automation.",
            "Integration interfaces with Asterisk, IVR and credit card reading devices.",
          ],
        },
        tech: [".NET", "C#", "MSSQL", "MySQL", "Ruby", "PHP", "Apache", "Asterisk"],
      },
    ],
  },
  {
    key: "devops",
    icon: "dns.svg",
    order: 1,
    title: { es: "DevOps y Cloud", en: "DevOps & Cloud" },
    summary: {
      es: "Infraestructura como código, contenedores y CI/CD en Google Cloud y AWS, con foco en operación y confiabilidad.",
      en: "Infrastructure as code, containers and CI/CD on Google Cloud and AWS, focused on operations and reliability.",
    },
    intro: {
      es: "Construyo y opero infraestructura reproducible en Google Cloud y AWS. Automatizo despliegues, contenedores y entornos, y me enfoco en la observabilidad y el diagnóstico de incidentes complejos.",
      en: "I build and operate reproducible infrastructure on Google Cloud and AWS. I automate deployments, containers and environments, with a focus on observability and diagnosing complex incidents.",
    },
    chips: [
      "Terraform",
      "GCP",
      "AWS",
      "Kubernetes",
      "Helm",
      "Docker",
      "CircleCI",
      "Nginx",
      "Cloudflare",
      "Linux",
    ],
    projects: [
      {
        title: {
          es: "Infraestructura como código con Terraform",
          en: "Infrastructure as code with Terraform",
        },
        desc: {
          es: [
            "Diseño y mantenimiento de infraestructura en GCP y AWS con Terraform y Terraform Cloud.",
            "Definición de infraestructura reproducible y gestión de entornos.",
          ],
          en: [
            "Design and maintenance of GCP and AWS infrastructure with Terraform and Terraform Cloud.",
            "Definition of reproducible infrastructure and environment management.",
          ],
        },
        tech: ["Terraform", "Terraform Cloud", "GCP", "AWS", "Linux"],
      },
      {
        title: {
          es: "Kubernetes, Helm y Amazon EKS",
          en: "Kubernetes, Helm & Amazon EKS",
        },
        desc: {
          es: [
            "Despliegue y operación de cargas en Kubernetes y Amazon EKS.",
            "Gestión de releases con Helm y empaquetado de servicios en contenedores Docker.",
          ],
          en: [
            "Deployment and operation of workloads on Kubernetes and Amazon EKS.",
            "Release management with Helm and packaging of services in Docker containers.",
          ],
        },
        tech: ["Kubernetes", "Helm", "Amazon EKS", "Docker", "Amazon EC2"],
      },
      {
        title: { es: "CI/CD con CircleCI", en: "CI/CD with CircleCI" },
        desc: {
          es: [
            "Implementación y ajuste de pipelines de CircleCI.",
            "Compatibilidad de herramientas de calidad con versiones heredadas de PHP.",
            "Automatización de despliegues sobre contenedores.",
          ],
          en: [
            "Implementation and tuning of CircleCI pipelines.",
            "Quality tool compatibility with legacy PHP versions.",
            "Deployment automation on containers.",
          ],
        },
        tech: ["CircleCI", "Docker", "PHP-CS-Fixer", "Git", "GitHub"],
      },
      {
        title: { es: "Observabilidad y operación", en: "Observability & operations" },
        desc: {
          es: [
            "Supervisión de conexiones y métricas de bases de datos Cloud SQL / MySQL.",
            "Recolección y análisis de registros para el diagnóstico de incidentes.",
            "Inventario y diagramación de recursos con Cloud Asset Inventory.",
          ],
          en: [
            "Monitoring of connections and metrics for Cloud SQL / MySQL databases.",
            "Log collection and analysis for incident diagnosis.",
            "Resource inventory and diagramming with Cloud Asset Inventory.",
          ],
        },
        tech: ["Cloud SQL", "MySQL", "Cloud Logging", "Cloud Asset Inventory"],
      },
      {
        title: {
          es: "FinOps: costos de GCP con BigQuery",
          en: "FinOps: GCP costs with BigQuery",
        },
        desc: {
          es: [
            "Diseño de paneles de costos de GCP a partir de datos de facturación en BigQuery.",
            "Análisis de consumo orientado al control y la optimización de costos.",
          ],
          en: [
            "Design of GCP cost dashboards from billing data in BigQuery.",
            "Consumption analysis aimed at cost control and optimization.",
          ],
        },
        tech: ["BigQuery", "Looker", "GCP"],
      },
      {
        title: {
          es: "Redes y alta disponibilidad",
          en: "Networking & high availability",
        },
        desc: {
          es: [
            "Segmentación y reorganización de red con reducción de latencia del 35%.",
            "Redundancia WAN con antenas AirFiber y conmutación automática por OpenVPN entre sedes.",
            "Administración de firewalls pfSense y servicios de infraestructura local.",
          ],
          en: [
            "Network segmentation and reorganization with a 35% latency reduction.",
            "WAN redundancy with AirFiber antennas and automatic OpenVPN failover between sites.",
            "pfSense firewall administration and local infrastructure services.",
          ],
        },
        tech: ["pfSense", "OpenVPN", "AirFiber", "Networking", "Linux"],
      },
    ],
  },
  {
    key: "security-data",
    icon: "database.svg",
    order: 3,
    title: { es: "Seguridad y datos", en: "Security & Data" },
    summary: {
      es: "Auditoría de riesgo tecnológico, seguridad de la información, operaciones de seguridad y administración de datos.",
      en: "Technology risk auditing, information security, security operations and data administration.",
    },
    intro: {
      es: "Experiencia en auditoría de riesgo y seguridad de la información en el sector financiero. También en integración de operaciones de seguridad, administración de bases de datos relacionales y pipelines de datos.",
      en: "Experience in technology risk and information security auditing in the financial sector, security operations integration and administration of relational databases and data pipelines.",
    },
    chips: [
      "Information Security",
      "Pentest",
      "Riesgo",
      "Chronicle",
      "BigQuery",
      "Datastream",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
    projects: [
      {
        title: {
          es: "Auditoría de riesgo tecnológico",
          en: "Technology risk auditing",
        },
        desc: {
          es: [
            "Auditoría de cumplimiento y seguridad de la información para instituciones financieras (CNBS Honduras).",
            "Revisión de calidad de datos, sistemas de información e informes de seguridad informática.",
            "Pruebas de penetración, verificación de vulnerabilidades y reportes de hallazgos.",
          ],
          en: [
            "Compliance and information security auditing for financial institutions (CNBS Honduras).",
            "Review of data quality, information systems and IT security reports.",
            "Penetration testing, vulnerability verification and findings reports.",
          ],
        },
        tech: ["Information Security", "Pentesting", "Compliance", "Risk"],
      },
      {
        title: {
          es: "Integración con Google Security Operations / Chronicle",
          en: "Google Security Operations / Chronicle integration",
        },
        desc: {
          es: [
            "Configuración de agentes y recolección de registros para Google Security Operations / Chronicle.",
            "Ingesta de registros desde Google Workspace, Cloudflare y dispositivos o servicios de red.",
          ],
          en: [
            "Agent configuration and log collection for Google Security Operations / Chronicle.",
            "Log ingestion from Google Workspace, Cloudflare and network devices or services.",
          ],
        },
        tech: ["Google SecOps", "Chronicle", "Cloud Logging", "Cloudflare"],
      },
      {
        title: {
          es: "Bases de datos y recuperación",
          en: "Databases & recovery",
        },
        desc: {
          es: [
            "Administración de bases de datos MSSQL y MySQL en entornos bancarios.",
            "Recuperación de tablas MySQL a partir de archivos .frm e .ibd tras fallas de energía (guía pública en GitHub).",
          ],
          en: [
            "Administration of MSSQL and MySQL databases in banking environments.",
            "Recovery of MySQL tables from .frm and .ibd files after power failures (public guide on GitHub).",
          ],
        },
        tech: ["MySQL", "MSSQL", "PostgreSQL", "Redis"],
        link: "https://github.com/hunterhn/recuperar-datos-desde-archivos-frm-ibd-de-mysql",
      },
      {
        title: { es: "Pipelines de datos y analítica", en: "Data pipelines & analytics" },
        desc: {
          es: [
            "Integración de Datastream en escenarios de ingesta de datos hacia BigQuery.",
            "Modelado y consulta sobre PostgreSQL, MySQL y Redis.",
          ],
          en: [
            "Datastream integration in data ingestion scenarios into BigQuery.",
            "Modeling and querying over PostgreSQL, MySQL and Redis.",
          ],
        },
        tech: ["BigQuery", "Datastream", "PostgreSQL", "MySQL", "Redis"],
      },
      {
        title: {
          es: "Seguridad de red y perímetro",
          en: "Network & perimeter security",
        },
        desc: {
          es: [
            "Diseño de esquemas de seguridad entre capas, túneles, VPN, NAT y políticas de firewall.",
            "Administración de ASA y conexiones con terceros.",
          ],
          en: [
            "Design of layered security schemes, tunnels, VPN, NAT and firewall policies.",
            "Administration of ASA and third-party connections.",
          ],
        },
        tech: ["Cisco ASA", "VPN", "NAT", "pfSense", "Linux"],
      },
    ],
  },
  {
    key: "ai-automation",
    icon: "favorite.svg",
    order: 4,
    title: { es: "IA y automatización", en: "AI & Automation" },
    summary: {
      es: "Asistentes con agentes delegados, automatización de flujos y procesamiento asíncrono.",
      en: "Assistants with delegated agents, workflow automation and asynchronous processing.",
    },
    intro: {
      es: "Experimento con asistentes de IA, agentes delegados y arquitecturas multi-modelo para automatizar investigación, búsqueda y flujos de trabajo técnicos. También diseño procesamiento asíncrono y experiencias interactivas.",
      en: "I experiment with AI assistants, delegated agents and multi-model architectures to automate research, search and technical workflows. I also design asynchronous processing and interactive experiences.",
    },
    chips: [
      "AI Agents",
      "LLM",
      "Ollama",
      "llama.cpp",
      "Vertex AI",
      "Veo",
      "SearXNG",
      "Firecrawl",
      "BullMQ",
      "Cloud Tasks",
      "Redis",
      "p5.js",
    ],
    projects: [
      {
        title: {
          es: "Hermes: asistente con agentes delegados",
          en: "Hermes: assistant with delegated agents",
        },
        desc: {
          es: [
            "Configuración de un asistente personal con agentes delegados para un briefing diario: IA, cloud y seguridad, psicología y noticias regionales.",
            "Búsqueda y extracción de información con SearXNG y Firecrawl.",
            "Arquitectura multi-modelo: un modelo principal y modelos de menor costo para tareas delegadas.",
            "Perfiles de comportamiento y archivos de contexto (SOUL.md).",
          ],
          en: [
            "Configuration of a personal assistant with delegated agents for a daily briefing: AI, cloud and security, psychology and regional news.",
            "Information search and extraction with SearXNG and Firecrawl.",
            "Multi-model architecture: a main model plus lower-cost models for delegated tasks.",
            "Behavior profiles and context files (SOUL.md).",
          ],
        },
        tech: ["AI Agents", "LLM", "SearXNG", "Firecrawl", "Automation"],
      },
      {
        title: {
          es: "Laboratorio de IA local",
          en: "Local AI lab",
        },
        desc: {
          es: [
            "Mini PC con Ubuntu en doble arranque. Inferencia local con Ollama y llama.cpp compilado desde fuente con soporte Vulkan.",
            "Ajuste de aceleración GPU (ROCm/Vulkan) y configuración de inferencia en CPU para mayor estabilidad.",
            "Hermes Agent con OpenRouter como proveedor y el agente de código Pi para tareas agentic.",
            "Entorno de desarrollo: zsh, Ghostty, mise para Node.js y uv para Python.",
          ],
          en: [
            "Mini PC with Ubuntu in dual boot. Local inference with Ollama and llama.cpp compiled from source with Vulkan support.",
            "GPU acceleration tuning (ROCm/Vulkan) and CPU-only inference configuration for stability.",
            "Hermes Agent with OpenRouter as provider and the Pi coding agent for agentic tasks.",
            "Development environment: zsh, Ghostty, mise for Node.js and uv for Python.",
          ],
        },
        tech: [
          "Ollama",
          "llama.cpp",
          "Vulkan",
          "Hermes Agent",
          "OpenRouter",
          "Ubuntu",
        ],
      },
      {
        title: {
          es: "Desarrollo asistido por agentes",
          en: "Agent-assisted development",
        },
        desc: {
          es: [
            "Diseño de instrucciones para que un modelo principal dirija agentes trabajadores en el scaffolding de proyectos.",
            "Uso de documentación Markdown como memoria operativa y continuidad entre sesiones y modelos.",
            "Archivos de instrucciones para agentes (AGENTS.md) y documentación de arquitectura.",
          ],
          en: [
            "Design of instructions so a main model directs worker agents in project scaffolding.",
            "Use of Markdown documentation as operational memory and continuity across sessions and models.",
            "Agent instruction files (AGENTS.md) and architecture documentation.",
          ],
        },
        tech: ["AI Agents", "Prompt Engineering", "Markdown", "Node.js"],
      },
      {
        title: { es: "Procesamiento asíncrono", en: "Asynchronous processing" },
        desc: {
          es: [
            "Evaluación de BullMQ y Google Cloud Tasks para trabajo asíncrono.",
            "Diseño de workers y colas para procesos de larga duración.",
          ],
          en: [
            "Evaluation of BullMQ and Google Cloud Tasks for asynchronous work.",
            "Design of workers and queues for long-running processes.",
          ],
        },
        tech: ["BullMQ", "Google Cloud Tasks", "Redis", "Node.js"],
      },
      {
        title: {
          es: "Generación de video con IA",
          en: "AI video generation",
        },
        desc: {
          es: [
            "Producción de spots publicitarios y narrativa visual con Vertex AI Veo y Google Flow.",
            "Optimización de prompts y gestión de costos y créditos de generación.",
          ],
          en: [
            "Production of advertising spots and visual narrative with Vertex AI Veo and Google Flow.",
            "Prompt optimization and management of generation costs and credits.",
          ],
        },
        tech: ["Vertex AI", "Veo", "Google Flow", "Prompt Engineering"],
      },
      {
        title: {
          es: "Experiencias interactivas con p5.js",
          en: "Interactive experiences with p5.js",
        },
        desc: {
          es: [
            "Desarrollo de experiencias audiovisuales interactivas con p5.js.",
            "Navegación por escenas con personajes, imágenes y sonido.",
          ],
          en: [
            "Development of interactive audiovisual experiences with p5.js.",
            "Scene-based navigation with characters, images and sound.",
          ],
        },
        tech: ["p5.js", "JavaScript", "Creative Coding"],
      },
    ],
  },
];

export const experience: Job[] = [
  {
    role: { es: "DevOps Engineer", en: "DevOps Engineer" },
    company: "BairesDev",
    period: { es: "abr 2022 – Presente", en: "Apr 2022 – Present" },
    location: { es: "Remoto", en: "Remote" },
    bullets: {
      es: [
        "Arquitectura y operación de infraestructura cloud en GCP y AWS.",
        "Infraestructura como código con Terraform, contenedores y pipelines de CI/CD.",
        "Seguridad, observabilidad y diagnóstico de incidentes en producción.",
      ],
      en: [
        "Architecture and operation of cloud infrastructure on GCP and AWS.",
        "Infrastructure as code with Terraform, containers and CI/CD pipelines.",
        "Security, observability and production incident diagnosis.",
      ],
    },
    tech: ["GCP", "AWS", "Terraform", "Kubernetes", "Docker", "CI/CD"],
  },
  {
    role: {
      es: "DevOps & Business Intelligence Architect",
      en: "DevOps & Business Intelligence Architect",
    },
    company: "ASAP - Tu App de Mensajería",
    period: { es: "dic 2020 – feb 2022", en: "Dec 2020 – Feb 2022" },
    location: { es: "Panamá, Panamá", en: "Panama City, Panama" },
    bullets: {
      es: [
        "Arquitectura DevOps e inteligencia de negocio para una plataforma de mensajería.",
      ],
      en: [
        "DevOps and business intelligence architecture for a messaging platform.",
      ],
    },
    tech: ["DevOps", "Business Intelligence", "Databases"],
  },
  {
    role: { es: "IT Manager", en: "IT Manager" },
    company: "Yoytec Computer S.A.",
    period: { es: "abr 2016 – dic 2020", en: "Apr 2016 – Dec 2020" },
    location: { es: "Panamá", en: "Panama" },
    bullets: {
      es: [
        "Requerimientos de nuevo software como Product Owner y gestión de proyectos de desarrollo.",
        "Implantación y administración de sistemas: VMware vSphere, control de acceso RFID Biostar2, CCTV IP, PBX Elastix, correo iRedMail y firewalls pfSense.",
        "Segmentación y reorganización de red con reducción de latencia del 35%.",
        "Redundancia WAN con antenas AirFiber y conmutación automática por OpenVPN entre sedes.",
        "Liderazgo del desarrollo de 3 módulos satélite para el sistema legado.",
        "Transferencia de conocimiento al equipo y a los usuarios de los productos.",
      ],
      en: [
        "New software requirements as Product Owner and project management of development initiatives.",
        "Implementation and administration of systems: VMware vSphere, Biostar2 RFID access control, IP CCTV, Elastix PBX, iRedMail and pfSense firewalls.",
        "Network segmentation and reorganization with a 35% latency reduction.",
        "WAN redundancy with AirFiber antennas and automatic OpenVPN failover between sites.",
        "Led the development of 3 satellite modules for the legacy system.",
        "Knowledge transfer to the team and product users.",
      ],
    },
    tech: ["VMware vSphere", "pfSense", "OpenVPN", "Elastix", "RFID", "CCTV"],
  },
  {
    role: { es: "Consultor IT", en: "IT Consultant" },
    company: "HAZSK",
    period: { es: "ene 2016 – mar 2018", en: "Jan 2016 – Mar 2018" },
    location: { es: "Panamá", en: "Panama" },
  },
  {
    role: {
      es: "Auditor de Riesgo Tecnológico",
      en: "Technology Risk Auditor",
    },
    company: "CNBS Honduras",
    period: { es: "abr 2012 – ene 2016", en: "Apr 2012 – Jan 2016" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Auditoría de cumplimiento y seguridad de la información en instituciones financieras.",
        "Pruebas de hacking ético, verificación de vulnerabilidades y reportes de hallazgos.",
        "Detección de patrones, relaciones y causas de irregularidades en datos bancarios.",
        "Verificación de los procesos de seguridad de la información y de las transacciones.",
        "Aplicación de la normativa del sistema financiero (prevención de lavado de dinero y regulaciones bancarias).",
        "Procesamiento de datos de sistemas heterogéneos (SQL Server, Oracle, Informix, MySQL, AS400) con .NET, procedimientos almacenados y Java para las estadísticas económicas.",
      ],
      en: [
        "Compliance and information security auditing at financial institutions.",
        "Ethical hacking tests, vulnerability verification and findings reports.",
        "Detection of patterns, relations and causes of irregularities in banking data.",
        "Verification of information and transaction security processes.",
        "Application of financial system regulations (money laundering prevention and banking regulations).",
        "Data processing across heterogeneous systems (SQL Server, Oracle, Informix, MySQL, AS400) with .NET, stored procedures and Java for economic statistics.",
      ],
    },
    tech: [
      "Information Security",
      "Ethical Hacking",
      "SQL Server",
      "Oracle",
      "Informix",
      "MySQL",
      "AS400",
      ".NET",
      "Java",
      "AML",
    ],
  },
  {
    role: {
      es: "Capacitador de Tecnologías en Desarrollo Web",
      en: "Web Development Technologies Trainer",
    },
    company: "Medcom Panama",
    period: { es: "may 2014", en: "May 2014" },
    location: { es: "Panamá", en: "Panama" },
    bullets: {
      es: [
        "Capacitación al equipo de desarrollo en HTML5, CSS3, Bootstrap, JavaScript, jQuery y PHP.",
        "Proyecto final: interfaz interactiva con notificaciones y formularios en tiempo real sobre base de datos.",
      ],
      en: [
        "Trained the development team in HTML5, CSS3, Bootstrap, JavaScript, jQuery and PHP.",
        "Final project: interactive interface with real-time notifications and forms over a database.",
      ],
    },
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "PHP"],
  },
  {
    role: {
      es: "Administrador de Servidores e Infraestructura",
      en: "Servers & Infrastructure Administrator",
    },
    company: "Banco de Occidente S.A.",
    period: { es: "ene 2011 – abr 2012", en: "Jan 2011 – Apr 2012" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Análisis y diseño holístico de sistemas de seguridad y del perímetro de seguridad para la DMZ.",
        "Administración de redes externas: ASA, tunneling, VPN, políticas de seguridad y NAT.",
        "Administración de servidores Linux (Red Hat, CentOS) con automatización de procesos y conexiones autónomas por SSH.",
        "Administración de Windows Server 2003/2008, MSSQL/MySQL y virtualización con VMware ESXi.",
        "Creación e implementación de una 'mini nube' con SAN y múltiples servidores conectados por VMware.",
        "Nueva banca en línea: análisis y diseño, y granja de servidores IIS en nube virtual Windows 2008 con NAT inverso.",
        "Sistema IVR conectado a Asterisk para transacciones automáticas de clientes.",
        "Implementación de NAS/SFTP, sitio interno con Joomla y monitoreo de transacciones.",
      ],
      en: [
        "Holistic analysis and design of security systems and the DMZ security perimeter.",
        "External network administration: ASA, tunneling, VPN, security policies and NAT.",
        "Linux server administration (Red Hat, CentOS) with process automation and autonomous SSH connections.",
        "Windows Server 2003/2008, MSSQL/MySQL administration and VMware ESXi virtualization.",
        "Created and implemented a 'mini cloud' with a SAN and multiple servers connected via VMware.",
        "New online banking: analysis and design, plus an IIS server farm on a Windows 2008 virtual cloud with reverse NAT.",
        "IVR system connected to Asterisk for automatic client transactions.",
        "NAS/SFTP implementation, internal Joomla site and transaction monitoring.",
      ],
    },
    tech: [
      "Cisco ASA",
      "VPN",
      "NAT",
      "Linux",
      "Red Hat",
      "CentOS",
      "Windows Server",
      "MSSQL",
      "MySQL",
      "VMware ESXi",
      "SAN",
      "Asterisk",
      "Joomla",
      "IIS",
    ],
  },
  {
    role: {
      es: "Analista Desarrollador de Sistemas — Líder de Equipo",
      en: "System Analyst Developer — Team Leader",
    },
    company: "Banco de Occidente S.A.",
    period: { es: "ene 2010 – ene 2011", en: "Jan 2010 – Jan 2011" },
    bullets: {
      es: [
        "Lideré y organicé el equipo de desarrollo. Asigné tareas y analicé nuevos sistemas.",
        "Definición del estándar para el desarrollo de nuevos sistemas en la institución.",
        "Análisis y diseño de la nueva banca en línea y de los nuevos kioscos de información.",
        "Creación del nuevo framework para automatizar la transaccionalidad sobre WebServices seguros, base de la banca en línea y de los sistemas posteriores.",
        "Creación de un nuevo sistema de cobranzas que incrementó las ganancias del banco.",
      ],
      en: [
        "Led and organized the development team. Assigned tasks and analyzed new systems.",
        "Set the standard for the development of new software systems at the institution.",
        "Analysis and design of the new online banking system and the new information kiosks.",
        "Created the new framework to automate transactionality over secure WebServices, the base for online banking and later systems.",
        "Created a new collections system that increased the bank's profit.",
      ],
    },
    tech: ["WebServices", ".NET", "Software Architecture"],
  },
  {
    role: {
      es: "Consultor de Implementación Moodle",
      en: "Moodle Implementation Consultant",
    },
    company: "MIDEH",
    period: { es: "dic 2009 – jul 2010", en: "Dec 2009 – Jul 2010" },
    bullets: {
      es: [
        "Implementación de la plataforma Moodle para pruebas en línea en escuelas públicas de Honduras.",
        "Edición y ajuste de Moodle para primaria y secundaria.",
        "Implementación en modalidad en línea y offline.",
        "Capacitación a empleados de MIDEH en el uso de la plataforma.",
      ],
      en: [
        "Implemented the Moodle platform for online tests in Honduran public schools.",
        "Edited and adjusted Moodle for elementary and junior high.",
        "Implemented both online and offline modes.",
        "Trained MIDEH employees on the platform.",
      ],
    },
    tech: ["Moodle", "PHP", "MySQL", "Linux"],
  },
  {
    role: {
      es: "Analista Desarrollador de Sistemas",
      en: "System Analyst Developer",
    },
    company: "Banco de Occidente Honduras",
    period: { es: "feb 2008 – ene 2010", en: "Feb 2008 – Jan 2010" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Análisis de nuevos sistemas y diseño de interfaces de comunicación entre sistemas (RPG, .NET, Java) por archivos, sockets IP y RPC.",
        "Automatización del intercambio de datos con empresas externas mediante importación de archivos planos.",
        "Tareas automatizadas con .NET y PHP enlazando el core bancario en AS400.",
        "Programación completa de un IVR con Ruby y PHP (DTMF, archivos planos y WebServices entre entornos).",
        "Diseño e implementación de la comunicación .NET–AS400/DB2 y del sistema de comunicación con terceros basado en sockets y WebServices.",
        "Cliente/servidor de sockets con hilos para la administración de rutas de transacciones y lectura con buffer de archivos AS400.",
      ],
      en: [
        "New system analysis and design of communication interfaces between systems (RPG, .NET, Java) via files, IP sockets and RPC.",
        "Automated data exchange with external companies through flat-file import processing.",
        "Automated tasks with .NET and PHP linking the AS400 banking core.",
        "Programmed an entire IVR with Ruby and PHP (DTMF, flat files and WebServices across environments).",
        "Designed and implemented .NET–AS400/DB2 communication and the third-party communication system based on sockets and WebServices.",
        "Socket client/server with thread management for transaction path administration and buffered reading of AS400 data files.",
      ],
    },
    tech: [
      ".NET",
      "RPG",
      "Java",
      "PHP",
      "Ruby",
      "MSSQL",
      "AS400",
      "DB2",
      "WebServices",
      "Sockets",
    ],
  },
  {
    role: {
      es: "Consultor / Desarrollador",
      en: "Consultant / Developer",
    },
    company: "Independiente",
    period: { es: "ago 2004 – feb 2008", en: "Aug 2004 – Feb 2008" },
    bullets: {
      es: [
        "Desarrollo independiente de sistemas, instalación de redes y configuración de routers y antenas satelitales.",
        "Diseño de sitios de intranet y sitios web públicos (honduracing.com, viveenlaunah.com, ktrachos.net).",
      ],
      en: [
        "Independent software development, network installation and configuration of routers and satellite antennas.",
        "Design of intranet sites and public websites (honduracing.com, viveenlaunah.com, ktrachos.net).",
      ],
    },
  },
  {
    role: {
      es: "Transformación y Carga de Datos",
      en: "Data Transformation & Loader",
    },
    company: "TransUnion Honduras",
    period: { es: "feb 2006 – may 2006", en: "Feb 2006 – May 2006" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Recolección de información de distintas empresas.",
        "Creación de scripts automáticos para organizar y procesar la información.",
        "Conversión de datos a la estructura del buró de crédito.",
      ],
      en: [
        "Gathered information from different companies.",
        "Created automatic scripts to organize and process the information.",
        "Converted data to the credit bureau structure.",
      ],
    },
    tech: ["Data Processing", "Scripting"],
  },
];

export const complementaryExperience: Job[] = [
  {
    role: {
      es: "Robótica — Bastón para personas ciegas",
      en: "Robotics — Cane for blind people",
    },
    company: "Hackathones 2015 y 2016",
    period: { es: "2015 – 2016", en: "2015 – 2016" },
    bullets: {
      es: [
        "Desarrollo en equipo de un bastón para personas ciegas con componentes electrónicos y Arduino.",
        "Premios en hackatones en 2015 y 2016.",
        "Cobertura en una noticia de CNN en Español.",
      ],
      en: [
        "Team development of a cane for blind people with electronic components and Arduino.",
        "Hackathon awards in 2015 and 2016.",
        "Featured in a CNN en Español news segment.",
      ],
    },
    tech: ["Arduino", "Electronics", "Robotics"],
    link: "https://www.youtube.com/watch?v=ZtwNTsY1xDs",
  },
  {
    role: {
      es: "Estrategia de Marketing y Publicidad",
      en: "Marketing Strategy & Advertising",
    },
    company: "Outsourcing Publicidad",
    period: { es: "abr 2011 – abr 2012", en: "Apr 2011 – Apr 2012" },
    bullets: {
      es: [
        "Estrategia de mercado y plan de acción para publicidad masiva.",
        "Diagramación final para impresión en CMYK (revista Coca-Cola).",
        "Fotografía para portadas de la 'Guía de Bienvenida del Cuerpo Diplomático AIPH'.",
      ],
      en: [
        "Market strategy and action plan for mass advertising.",
        "Final layouts for print in CMYK (Coca-Cola magazine).",
        "Photography for the covers of the 'Welcome Guide of the Diplomatic Corps AIPH'.",
      ],
    },
    tech: ["Marketing", "Graphic Design", "Photography", "CMYK"],
  },
  {
    role: {
      es: "Diseño gráfico y editorial",
      en: "Graphic & editorial design",
    },
    company: "Independiente",
    period: { es: "2011 – 2012", en: "2011 – 2012" },
    bullets: {
      es: [
        "Diagramación editorial, diseño de portadas y preparación de archivos para impresión.",
        "Diseño de sitios web internos y públicos.",
        "Edición de video y material gráfico para campañas.",
      ],
      en: [
        "Editorial layout, cover design and print file preparation.",
        "Design of internal and public websites.",
        "Video editing and graphic material for campaigns.",
      ],
    },
    tech: ["Editorial Design", "Web Design", "Video"],
  },
];

export const volunteering: Volunteering[] = [
  {
    role: { es: "Voluntario", en: "Volunteer" },
    org: "Fundación Los Trilleros",
    period: { es: "2019 – Presente", en: "2019 – Present" },
    location: { es: "Panamá", en: "Panama" },
  },
  {
    role: {
      es: "Director de Tecnología Nacional",
      en: "National Technology Director",
    },
    org: "Junior Chamber International (JCI)",
    period: { es: "ene 2012 – ene 2013", en: "Jan 2012 – Jan 2013" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Mantenimiento administrativo del sitio de JCI Honduras.",
        "Activación de usuarios de presidentes de organizaciones locales y soporte a usuarios asignados.",
        "Mantenimiento de puestos e información en el sitio web.",
      ],
      en: [
        "Administrative maintenance of the JCI Honduras website.",
        "Activation of local organization presidents' accounts and support for assigned users.",
        "Maintenance of positions and information on the website.",
      ],
    },
  },
  {
    role: {
      es: "Voluntario de Comunicaciones",
      en: "Communications Volunteer",
    },
    org: "Un Techo para mi País",
    period: { es: "may 2011 – mar 2012", en: "May 2011 – Mar 2012" },
    location: { es: "Honduras", en: "Honduras" },
    bullets: {
      es: [
        "Diagramas de ideación y planes de ejecución para campañas.",
        "Apoyo en la edición de videos y material creativo.",
      ],
      en: [
        "Brainstorming diagrams and execution plans for campaigns.",
        "Support in video editing and creative material.",
      ],
    },
  },
];

export const education: Education[] = [
  {
    title: {
      es: "Licenciatura en Psicología",
      en: "B.A. in Psychology",
    },
    institution: "Universidad Interamericana de Panamá (UIP)",
    period: "2022 – 2026",
  },
  {
    title: {
      es: "Master of Technology (MTech), Seguridad de Sistemas de Información",
      en: "Master of Technology (MTech), Computer & Information Systems Security",
    },
    institution: "Universidad Interamericana de Panamá",
    period: "2019 – 2020",
  },
  {
    title: {
      es: "Maestría en Dirección Estratégica Gerencial",
      en: "Master in Strategic Management",
    },
    institution: "Universidad Europea Miguel de Cervantes",
    period: "2013 – 2014",
  },
  {
    title: {
      es: "Ingeniería en Ciencias de la Computación",
      en: "B.Sc. in Computer Science",
    },
    institution: "Universidad Católica de Honduras",
    period: "2003 – 2009",
    detail: {
      es: "Énfasis en comunicaciones (routers, redes y seguridad) y desarrollo.",
      en: "Emphasis on communications (routers, networks and security) and development.",
    },
  },
];

export const complementaryEducation: Education[] = [
  {
    title: {
      es: "Habilidades Negociadoras y Multilateralidad",
      en: "Negotiation & Multilateral Skills",
    },
    institution: "ESSEC Business School",
    location: { es: "Sede de Francia", en: "France campus" },
    period: "2014",
    detail: {
      es: "Diploma obtenido con las Felicitaciones Especiales del Jurado.",
      en: "Diploma awarded with the Jury's Special Congratulations.",
    },
  },
  {
    title: {
      es: "Diplomado de Formación Docente para la Educación Superior",
      en: "Diploma in Higher Education Teaching",
    },
    institution: "Universidad Pedagógica Nacional Francisco Morazán",
    period: "2010 – 2011",
  },
  {
    title: {
      es: "Diplomado en Gestión de la Calidad Total (ISO 9000)",
      en: "Diploma in Total Quality Management (ISO 9000)",
    },
    institution: "Universidad Católica de Honduras",
    period: "2003 – 2009",
  },
];

export const certifications: Certification[] = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2017" },
  { name: "Cisco CCNA", issuer: "Cisco", year: "2002" },
  { name: "Real Time Web with Node.js", issuer: "Code School" },
  { name: "JAVA (NIIT)", issuer: "Universidad Nacional Autónoma de Honduras" },
  { name: "MS Technology Associate", issuer: "Microsoft" },
  { name: "Telecommunications Basics", issuer: "IEEE" },
  { name: "Cisco Security Fundamentals", issuer: "ACM" },
];

export interface Language {
  name: L;
  level: L;
}

export const languages: Language[] = [
  {
    name: { es: "Español", en: "Spanish" },
    level: { es: "Nativo", en: "Native" },
  },
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "Bilingüe", en: "Bilingual" },
  },
  {
    name: { es: "Portugués", en: "Portuguese" },
    level: { es: "Avanzado", en: "Advanced" },
  },
];

export const hobbies: Hobby[] = [
  {
    title: {
      es: "Experimentos creativos de tecnología",
      en: "Creative Tech Experiments",
    },
    desc: {
      es: "Programación creativa, experiencias interactivas, diseño de personajes y narrativa visual.",
      en: "Creative coding, interactive experiences, character design and visual storytelling.",
    },
  },
  {
    title: { es: "Fotografía y video", en: "Photography & video" },
    desc: {
      es: "Documentar lugares, personas y proyectos con cámaras Sony Mirrorless y Canon DSLR, action cams, cámaras 360 (x3/x4) y tomas aéreas con drones DJI. Más de 30 fotografías propias donadas a Wikimedia Commons, con imágenes de paisaje y aéreas de Honduras, Panamá, Perú y Paraguay (usuario Garcia.dennis).",
      en: "Documenting places, people and projects with Sony Mirrorless and Canon DSLR cameras, action cams, 360 cameras (x3/x4) and DJI drone shots. 30+ own photographs donated to Wikimedia Commons, with landscape and aerial images of Honduras, Panama, Peru and Paraguay (user Garcia.dennis).",
    },
  },
  {
    title: { es: "Naturaleza y símbolos", en: "Nature & symbols" },
    desc: {
      es: "El lobo como símbolo personal: su independencia y su comportamiento en manada. Interés por los huskies y la naturaleza.",
      en: "The wolf as a personal symbol: its independence and pack behavior. Interest in huskies and nature.",
    },
  },
  {
    title: { es: "Senderismo", en: "Hiking" },
    desc: {
      es: "Rutas de montaña y naturaleza. Conquistas: Volcán Barú (Panamá), Glaciar Ventanani (Bolivia), 7 lagunas (Perú) y templos de Krabi (Tailandia).",
      en: "Mountain and nature trails. Achievements: Volcán Barú (Panama), Ventanani Glacier (Bolivia), the 7 Lagoons (Peru) and the temples of Krabi (Thailand).",
    },
  },
  {
    title: {
      es: "Ilustración y diseño vectorial",
      en: "Illustration & vector design",
    },
    desc: {
      es: "Diseño de identidad de marca, manuales y representación vectorial técnica (SVG/EPS) con Inkscape.",
      en: "Brand identity, brand manuals and technical vector illustration (SVG/EPS) with Inkscape.",
    },
  },
  {
    title: { es: "Viajes y exploración", en: "Travel & exploration" },
    desc: {
      es: "Explorar culturas, investigar destinos y armar itinerarios detallados. La fotografía y el video forman parte del viaje.",
      en: "Exploring cultures, researching destinations and building detailed itineraries. Photography and video are part of the journey.",
    },
  },
  {
    title: {
      es: "Perfumería — The Perfume Geeks",
      en: "Perfumery — The Perfume Geeks",
    },
    desc: {
      es: "Marca de perfumería: identidad visual, dark luxury, concepto olfativo y evaluación de plataformas e-commerce (WooCommerce, Shopify, Odoo).",
      en: "Perfumery brand: visual identity, dark luxury, scent concepts and evaluation of e-commerce platforms (WooCommerce, Shopify, Odoo).",
    },
  },
];

export interface PsychItem {
  title: L;
  desc: L;
}

export const psychology = {
  intro: {
    es: "Licenciado en Psicología (B.A.) por la Universidad Interamericana de Panamá (UIP), con énfasis clínico, educativo y organizacional. Aplico esta base al ámbito tecnológico y a la interacción entre tecnología, IA y comportamiento humano.",
    en: "B.A. in Psychology from Universidad Interamericana de Panamá (UIP), with a clinical, educational and organizational emphasis. I apply this foundation to technology and to the intersection of tech, AI and human behavior.",
  } as L,
  areas: [
    { es: "Psicología clínica", en: "Clinical psychology" },
    { es: "Evaluación psicológica", en: "Psychological assessment" },
    { es: "Pruebas proyectivas", en: "Projective tests" },
    { es: "Terapia cognitivo-conductual", en: "Cognitive-behavioral therapy" },
    { es: "ACT y DBT", en: "ACT and DBT" },
    { es: "Psicopatología", en: "Psychopathology" },
    { es: "Psicología organizacional", en: "Organizational psychology" },
    { es: "Psicología educativa", en: "Educational psychology" },
    { es: "Psicología comunitaria", en: "Community psychology" },
    { es: "Psicología experimental", en: "Experimental psychology" },
    { es: "Neuropsicoinmunología", en: "Neuropsychoimmunology" },
    { es: "Psicología basada en evidencia", en: "Evidence-based psychology" },
    { es: "Intervención en crisis", en: "Crisis intervention" },
  ] as L[],
  assessment: [
    { es: "YSQ", en: "YSQ" },
    { es: "Inventarios de Beck", en: "Beck Inventories" },
    { es: "Coopersmith", en: "Coopersmith" },
    { es: "ATQ-30", en: "ATQ-30" },
    { es: "Sacks / SSCT", en: "Sacks / SSCT" },
    { es: "Machover", en: "Machover" },
    { es: "Persona Bajo la Lluvia", en: "Person Under the Rain" },
    { es: "HTP", en: "HTP" },
    { es: "TAT", en: "TAT" },
    { es: "Bender–Koppitz", en: "Bender–Koppitz" },
    { es: "AMAS-C", en: "AMAS-C" },
    { es: "Big Five", en: "Big Five" },
    { es: "MIPS", en: "MIPS" },
    {
      es: "Cuestionarios de ideación suicida",
      en: "Suicidal ideation questionnaires",
    },
    { es: "Cuestionarios de duelo", en: "Grief questionnaires" },
  ] as L[],
  approaches: [
    {
      name: {
        es: "Terapia Cognitivo-Conductual (TCC)",
        en: "Cognitive-Behavioral Therapy (CBT)",
      },
      strength: {
        es: "Basada en evidencia, estructurada y orientada a objetivos. Eficaz para ansiedad, depresión y problemas de conducta, con resultados medibles.",
        en: "Evidence-based, structured and goal-oriented. Effective for anxiety, depression and behavioral problems, with measurable outcomes.",
      },
    },
    {
      name: {
        es: "Terapia de Aceptación y Compromiso (ACT)",
        en: "Acceptance and Commitment Therapy (ACT)",
      },
      strength: {
        es: "Desarrolla flexibilidad psicológica y acciones alineadas con valores. Útil para el manejo del sufrimiento y de problemáticas crónicas.",
        en: "Develops psychological flexibility and values-aligned action. Useful for coping with suffering and chronic issues.",
      },
    },
  ] as { name: L; strength: L }[],
  frameworks: [
    "Schein",
    "Kotter",
    "Quinn & Cameron",
    "Vygotsky",
    "Piaget",
    "Feuerstein",
    "Deci & Ryan",
    "Taxonomía de Bloom",
    "ACT",
    "DBT",
  ],
  research: [
    {
      title: {
        es: "Metodología visual-espacial y rendimiento académico",
        en: "Visual-spatial methodology and academic performance",
      },
      desc: {
        es: "UIP, segundo cuatrimestre 2024. Taller visual-espacial con realidad aumentada sobre lóbulos cerebrales en 25 estudiantes de ciencias de la salud. Pretest 3.32 → postest 4.16 (t = -3.56, p = 0.0016). 12 participantes reportaron que la RA ayudó a vincular el libro con partes del cuerpo.",
        en: "UIP, second term 2024. Visual-spatial workshop with augmented reality on brain lobes with 25 health sciences students. Pretest 3.32 → posttest 4.16 (t = -3.56, p = 0.0016). 12 participants reported that AR helped link the book with body parts.",
      },
    },
    {
      title: {
        es: "Propuesta SENACYT: chatbot con IA para adolescentes",
        en: "SENACYT proposal: AI chatbot for adolescents",
      },
      desc: {
        es: "Propuesta de investigación para un chatbot basado en IA dirigido a adolescentes.",
        en: "Research proposal for an AI-based chatbot aimed at adolescents.",
      },
    },
  ] as PsychItem[],
  projects: [
    {
      title: {
        es: "Práctica profesional — Fundación Tu Carrera",
        en: "Field practice — Fundación Tu Carrera",
      },
      desc: {
        es: "Liderazgo de un equipo de práctica universitaria en una organización panameña de orientación vocacional.",
        en: "Led a university practice team at a Panamanian vocational guidance organization.",
      },
    },
    {
      title: {
        es: "Programa BRÚJULA — Scouts de Panamá",
        en: "BRÚJULA Program — Scouts de Panamá",
      },
      desc: {
        es: "Propuesta formal de intervención para el bienestar de voluntarios dentro del programa.",
        en: "Formal intervention proposal for the well-being of volunteers within the program.",
      },
    },
    {
      title: {
        es: "Plan de Intervención Educativa (PEI)",
        en: "Educational Intervention Plan (PEI)",
      },
      desc: {
        es: "Diseño de un plan de intervención educativo estructurado con la Taxonomía de Bloom.",
        en: "Design of an educational intervention plan structured with Bloom's Taxonomy.",
      },
    },
    {
      title: {
        es: "Psicología corporativa y bienestar laboral",
        en: "Corporate psychology & workplace well-being",
      },
      desc: {
        es: "Presentación sobre bienestar laboral con actividad en vivo. Análisis de liderazgo y cultura organizacional desde RRHH.",
        en: "Presentation on workplace well-being with a live activity. Analysis of leadership and organizational culture from an HR perspective.",
      },
    },
    {
      title: { es: "Match Seguro", en: "Match Seguro" },
      desc: {
        es: "Campaña de salud comunitaria en Panamá (prevención del VIH): guion y concepto visual.",
        en: "Community health campaign in Panama (HIV prevention): script and visual concept.",
      },
    },
  ] as PsychItem[],
};

export const contact = {
  email: "garcia.dennis@gmail.com",
  github: "https://github.com/hunterhn",
  linkedin: "https://www.linkedin.com/in/dennisgarcia",
  commons: "https://commons.wikimedia.org/wiki/User:Garcia.dennis",
  website: "https://dennisgarcia.dev",
};
