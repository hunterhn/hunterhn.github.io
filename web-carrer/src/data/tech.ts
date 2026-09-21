import type { Lang } from "../i18n/ui";
import type { L } from "./portfolio";

export interface TechSkill {
  name: string;
  level: number;
  icon: string;
}

export interface TechCategory {
  title: L;
  skills: TechSkill[];
}

const categories: TechCategory[] = [
  {
    title: { es: "Cloud y DevOps", en: "Cloud & DevOps" },
    skills: [
      { name: "Terraform", level: 3, icon: "devicon:terraform" },
      { name: "Google Cloud", level: 3, icon: "devicon:googlecloud" },
      { name: "AWS", level: 2, icon: "devicon:amazonwebservices-wordmark" },
      { name: "Kubernetes", level: 2, icon: "devicon:kubernetes" },
      { name: "Helm", level: 2, icon: "devicon:helm" },
      { name: "Docker", level: 3, icon: "skill-icons:docker" },
      { name: "CircleCI", level: 2, icon: "mdi:sync" },
      { name: "Nginx", level: 3, icon: "devicon:nginx" },
      { name: "Cloudflare", level: 2, icon: "devicon:cloudflare" },
      { name: "Linux", level: 3, icon: "devicon:linux" },
    ],
  },
  {
    title: { es: "Desarrollo de software", en: "Software Development" },
    skills: [
      { name: "PHP", level: 3, icon: "devicon:php" },
      { name: "Laravel", level: 3, icon: "devicon:laravel" },
      { name: "WordPress", level: 2, icon: "devicon:wordpress" },
      { name: "Node.js", level: 3, icon: "skill-icons:nodejs-dark" },
      { name: "TypeScript", level: 3, icon: "skill-icons:typescript" },
      { name: "Next.js", level: 2, icon: "skill-icons:nextjs-dark" },
      { name: "tRPC", level: 2, icon: "mdi:api" },
      { name: "TanStack Query", level: 2, icon: "mdi:chart-timeline-variant" },
      { name: "Zod", level: 2, icon: "mdi:check-decagram" },
      { name: "PostgreSQL", level: 3, icon: "devicon:postgresql" },
    ],
  },
  {
    title: { es: "Seguridad y datos", en: "Security & Data" },
    skills: [
      { name: "Information Security", level: 3, icon: "mdi:shield-lock" },
      { name: "Ethical Hacking", level: 3, icon: "mdi:incognito" },
      { name: "SQL Server", level: 3, icon: "devicon:microsoftsqlserver" },
      { name: "Oracle", level: 2, icon: "devicon:oracle" },
      { name: "Informix", level: 2, icon: "mdi:database" },
      { name: "MySQL", level: 3, icon: "devicon:mysql" },
      { name: "AS400", level: 2, icon: "mdi:server" },
      { name: ".NET", level: 2, icon: "devicon:dot-net" },
      { name: "Java", level: 2, icon: "devicon:java" },
      { name: "BigQuery", level: 2, icon: "mdi:google-cloud" },
    ],
  },
  {
    title: { es: "IA y automatización", en: "AI & Automation" },
    skills: [
      { name: "AI Agents", level: 3, icon: "mdi:robot" },
      { name: "LLM", level: 2, icon: "mdi:brain" },
      { name: "Ollama", level: 2, icon: "mdi:robot-outline" },
      { name: "Vertex AI", level: 2, icon: "mdi:google-cloud" },
      { name: "Veo", level: 1, icon: "mdi:video" },
      { name: "SearXNG", level: 2, icon: "mdi:magnify" },
      { name: "Firecrawl", level: 2, icon: "mdi:fire" },
      { name: "BullMQ", level: 2, icon: "mdi:queue" },
      { name: "Redis", level: 2, icon: "devicon:redis" },
      { name: "p5.js", level: 2, icon: "mdi:palette" },
    ],
  },
];

export function getTechCategories(_lang: Lang): TechCategory[] {
  return categories;
}
