import type { Lang } from "../i18n/ui";
import {
  profile,
  categories,
  experience,
  complementaryExperience,
  volunteering,
  education,
  complementaryEducation,
} from "./portfolio";
import { SITE, getSocials, type Social } from "./site";

export interface CareerItem {
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  skills: string[];
  url?: string;
}

export interface ProjectCardData {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  platforms: string[];
  link: string;
  category: string;
}

function joinBullets(bullets: string[] | undefined): string {
  if (!bullets || bullets.length === 0) return "";
  return bullets.slice(0, 3).join(" ");
}

export function getCareerItems(lang: Lang): CareerItem[] {
  const items: CareerItem[] = [];

  for (const job of [...experience, ...complementaryExperience]) {
    items.push({
      period: job.period[lang],
      role: job.role[lang],
      company: job.company,
      type: "work",
      description: joinBullets(job.bullets?.[lang]),
      skills: job.tech ?? [],
      url: job.link,
    });
  }

  for (const ed of [...education, ...complementaryEducation]) {
    items.push({
      period: ed.period,
      role: ed.title[lang],
      company: ed.location ? `${ed.institution} · ${ed.location[lang]}` : ed.institution,
      type: "education",
      description: ed.detail?.[lang] ?? "",
      skills: [],
    });
  }

  for (const v of volunteering) {
    items.push({
      period: v.period[lang],
      role: v.role[lang],
      company: v.org,
      type: "volunteer",
      description: joinBullets(v.bullets?.[lang]),
      skills: [],
    });
  }

  return items;
}

export function getProjects(lang: Lang): ProjectCardData[] {
  const out: ProjectCardData[] = [];
  for (const cat of categories) {
    for (const project of cat.projects) {
      out.push({
        title: project.title[lang],
        description: project.desc[lang].slice(0, 2).join(" "),
        images: [],
        tech: project.tech,
        platforms: ["web"],
        link: project.link ?? "#",
        category: cat.title[lang],
      });
    }
  }
  return out;
}

export function getHome(lang: Lang): {
  name: string;
  jobTitle: string;
  location: string;
  availability: string;
  description: string;
  descriptionHtml: string;
  socials: Social[];
  photoUrl: string;
} {
  const description = profile.about[lang];
  const highlights =
    lang === "es"
      ? ["19 años", "agentic AI", "psicología"]
      : ["19 years", "agentic AI", "psychology"];
  let descriptionHtml = description;
  for (const word of highlights) {
    descriptionHtml = descriptionHtml.replace(
      word,
      `<span class="text-accent font-bold">${word}</span>`,
    );
  }

  return {
    name: profile.name,
    jobTitle: profile.role[lang],
    location: profile.location[lang],
    availability:
      lang === "es" ? "Disponible para oportunidades" : "Available for opportunities",
    description,
    descriptionHtml,
    socials: getSocials(lang),
    photoUrl: SITE.photoUrl,
  };
}
