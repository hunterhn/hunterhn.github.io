import type { Category } from "../types";

export const securityData: Category = {
    key: "security-data",
    icon: "database.svg",
    order: 3,
    title: { es: "Seguridad y datos", en: "Security & Data" },
    summary: {
      es: "Audito riesgo tecnológico y seguridad de la información. También llevo operaciones de seguridad y la administración de datos.",
      en: "I audit technology risk and information security. I also handle security operations and data administration.",
    },
    intro: {
      es: "Vengo de auditar riesgo y seguridad de la información en el sector financiero. También integro operaciones de seguridad, administro bases de datos relacionales y armo pipelines de datos.",
      en: "My background is in technology risk and information security auditing in the financial sector. I also integrate security operations, run relational databases and build data pipelines.",
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
            "Audité cumplimiento y seguridad de la información en instituciones financieras (CNBS Honduras).",
            "Revisé calidad de datos, sistemas de información e informes de seguridad informática.",
            "Hice pruebas de penetración, verifiqué vulnerabilidades y redacté reportes de hallazgos.",
          ],
          en: [
            "I audited compliance and information security at financial institutions (CNBS Honduras).",
            "I reviewed data quality, information systems and IT security reports.",
            "I ran penetration tests, verified vulnerabilities and wrote findings reports.",
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
            "Configuré agentes y recolección de registros para Google Security Operations / Chronicle.",
            "Ingerí registros desde Google Workspace, Cloudflare y dispositivos o servicios de red.",
          ],
          en: [
            "I configured agents and log collection for Google Security Operations / Chronicle.",
            "I ingested logs from Google Workspace, Cloudflare and network devices or services.",
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
            "Administro bases de datos MSSQL y MySQL en entornos bancarios.",
            "Recuperé tablas MySQL a partir de archivos .frm e .ibd tras fallas de energía (guía pública en GitHub).",
          ],
          en: [
            "I administer MSSQL and MySQL databases in banking environments.",
            "I recovered MySQL tables from .frm and .ibd files after power failures (public guide on GitHub).",
          ],
        },
        tech: ["MySQL", "MSSQL", "PostgreSQL", "Redis"],
        link: "https://github.com/hunterhn/recuperar-datos-desde-archivos-frm-ibd-de-mysql",
      },
      {
        title: { es: "Pipelines de datos y analítica", en: "Data pipelines & analytics" },
        desc: {
          es: [
            "Integré Datastream en escenarios de ingesta de datos hacia BigQuery.",
            "Modelo y consulto datos sobre PostgreSQL, MySQL y Redis.",
          ],
          en: [
            "I integrated Datastream in data ingestion scenarios into BigQuery.",
            "I model and query data on PostgreSQL, MySQL and Redis.",
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
            "Diseñé esquemas de seguridad entre capas, con túneles, VPN, NAT y políticas de firewall.",
            "Administro ASA y conexiones con terceros.",
          ],
          en: [
            "I designed layered security schemes with tunnels, VPN, NAT and firewall policies.",
            "I administer ASA and third-party connections.",
          ],
        },
        tech: ["Cisco ASA", "VPN", "NAT", "pfSense", "Linux"],
      },
    ],
};
