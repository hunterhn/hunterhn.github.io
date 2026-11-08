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

export interface Language {
  name: L;
  level: L;
}

export interface PsychItem {
  title: L;
  desc: L;
}
