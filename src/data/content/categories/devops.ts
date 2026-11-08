import type { Category } from "../types";

export const devops: Category = {
    key: "devops",
    icon: "dns.svg",
    order: 1,
    title: { es: "DevOps y Cloud", en: "DevOps & Cloud" },
    summary: {
      es: "Escribo infraestructura como código, trabajo con contenedores y armo pipelines de CI/CD en Google Cloud y AWS. Mi foco está en que la operación sea confiable.",
      en: "I write infrastructure as code, work with containers and build CI/CD pipelines on Google Cloud and AWS. My focus is keeping operations reliable.",
    },
    intro: {
      es: "Construyo infraestructura reproducible en Google Cloud y AWS y la opero en producción. Los despliegues, contenedores y entornos quedan automatizados. Buena parte de mi atención se va en la observabilidad y en los incidentes que no se explican solos.",
      en: "I build reproducible infrastructure on Google Cloud and AWS and then live with it in production. I automate deployments, containers and environments; most of my attention goes to observability and to the incidents that don't explain themselves.",
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
            "Diseño y mantengo infraestructura en GCP y AWS con Terraform y Terraform Cloud.",
            "Defino infraestructura reproducible y gestiono los entornos.",
          ],
          en: [
            "I design and maintain GCP and AWS infrastructure with Terraform and Terraform Cloud.",
            "I define reproducible infrastructure and manage environments.",
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
            "Despliego y opero cargas en Kubernetes y Amazon EKS.",
            "Gestiono releases con Helm y empaqueto servicios en contenedores Docker.",
          ],
          en: [
            "I deploy and operate workloads on Kubernetes and Amazon EKS.",
            "I manage releases with Helm and package services in Docker containers.",
          ],
        },
        tech: ["Kubernetes", "Helm", "Amazon EKS", "Docker", "Amazon EC2"],
      },
      {
        title: { es: "CI/CD con CircleCI", en: "CI/CD with CircleCI" },
        desc: {
          es: [
            "Implementé y ajusté pipelines de CircleCI.",
            "Hice compatibles las herramientas de calidad con versiones heredadas de PHP.",
            "Automaticé los despliegues sobre contenedores.",
          ],
          en: [
            "I implemented and tuned CircleCI pipelines.",
            "I made quality tools compatible with legacy PHP versions.",
            "I automated deployments on containers.",
          ],
        },
        tech: ["CircleCI", "Docker", "PHP-CS-Fixer", "Git", "GitHub"],
      },
      {
        title: { es: "Observabilidad y operación", en: "Observability & operations" },
        desc: {
          es: [
            "Superviso conexiones y métricas de bases de datos Cloud SQL / MySQL.",
            "Recojo y analizo registros para diagnosticar incidentes.",
            "Llevo el inventario de recursos y los diagramo con Cloud Asset Inventory.",
          ],
          en: [
            "I monitor connections and metrics for Cloud SQL / MySQL databases.",
            "I collect and analyze logs to diagnose incidents.",
            "I keep an inventory of resources and diagram them with Cloud Asset Inventory.",
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
            "Diseñé paneles de costos de GCP a partir de datos de facturación en BigQuery.",
            "Analizo el consumo para controlar y optimizar costos.",
          ],
          en: [
            "I designed GCP cost dashboards from billing data in BigQuery.",
            "I analyze consumption to control and optimize costs.",
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
            "Segmenté y reorganicé la red, con una reducción de latencia del 35%.",
            "Monté redundancia WAN con antenas AirFiber y conmutación automática por OpenVPN entre sedes.",
            "Administro firewalls pfSense y servicios de infraestructura local.",
          ],
          en: [
            "I segmented and reorganized the network, with a 35% latency reduction.",
            "I set up WAN redundancy with AirFiber antennas and automatic OpenVPN failover between sites.",
            "I administer pfSense firewalls and local infrastructure services.",
          ],
        },
        tech: ["pfSense", "OpenVPN", "AirFiber", "Networking", "Linux"],
      },
    ],
};
