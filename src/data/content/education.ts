import type { Certification, Education, Language } from "./types";

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
      es: "Me formé con énfasis en comunicaciones (routers, redes y seguridad) y en desarrollo.",
      en: "I focused on communications (routers, networks and security) and on development.",
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
      es: "Terminé el diploma con felicitaciones especiales del jurado.",
      en: "I completed the diploma with special congratulations from the jury.",
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

