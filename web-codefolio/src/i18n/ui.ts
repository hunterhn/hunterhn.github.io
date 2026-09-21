export type Lang = "es" | "en";

export const defaultLang: Lang = "es";
export const languages: Lang[] = ["es", "en"];

export const ui = {
  es: {
    "meta.title": "Dennis García — Arquitecto DevOps y Cloud",
    "meta.description":
      "Portafolio técnico de Dennis García: desarrollo de software, DevOps y cloud, seguridad y datos, e IA y automatización.",
    "role": "Arquitecto DevOps y Cloud",
    "contact": "Contacto",
    "back": "Volver",
    "techLabel": "Tecnologías y herramientas",
    "langName": "English",
    "langSwitchLabel": "Ver en inglés",
    "home.title1": "Hola, soy Dennis.",
    "home.title2": "Diseño, construyo y opero sistemas cloud.",
    "home.lead":
      "Arquitecto DevOps y de Cloud con 19 años de experiencia en desarrollo, administración de sistemas, bases de datos, redes, seguridad, automatización y agentic AI. Construyo plataformas y las opero en producción. Aplico también la psicología para comprender el comportamiento humano detrás de la tecnología.",
    "home.areas": "Áreas",
    "section.experience": "Experiencia",
    "section.education": "Formación",
    "section.complementary": "Formación complementaria",
    "section.certifications": "Certificaciones",
    "section.languages": "Idiomas",
    "section.hobbies": "Aficiones",
    "section.psychology": "Psicología",
    "section.psychAreas": "Áreas de estudio",
    "section.psychAssessment": "Evaluación y técnicas",
    "section.psychApproaches": "Corrientes y enfoques",
    "section.psychResearch": "Investigación",
    "section.psychProjects": "Proyectos académicos",
    "section.psychFrameworks": "Marcos teóricos",
    "section.complementaryExperience": "Experiencia complementaria",
    "section.volunteering": "Voluntariado",
    "section.contact": "Contacto",
    "hobbies.intro":
      "Fuera del trabajo técnico: exploración, creatividad y aprendizaje continuo.",
    "present": "Presente",
  },
  en: {
    "meta.title": "Dennis García — DevOps & Cloud Architect",
    "meta.description":
      "Technical portfolio of Dennis García: software development, DevOps and cloud, security and data, and AI and automation.",
    "role": "DevOps & Cloud Architect",
    "contact": "Contact",
    "back": "Back",
    "techLabel": "Technologies & tools",
    "langName": "Español",
    "langSwitchLabel": "View in Spanish",
    "home.title1": "Hi, I'm Dennis.",
    "home.title2": "I design, build and operate cloud systems.",
    "home.lead":
      "DevOps and Cloud Architect with 19 years of experience in development, systems administration, databases, networking, security, automation and agentic AI. I build platforms and operate them in production. I also apply psychology to understand the human behavior behind technology.",
    "home.areas": "Areas",
    "section.experience": "Experience",
    "section.education": "Education",
    "section.complementary": "Complementary education",
    "section.certifications": "Certifications",
    "section.languages": "Languages",
    "section.hobbies": "Hobbies",
    "section.psychology": "Psychology",
    "section.psychAreas": "Areas of study",
    "section.psychAssessment": "Assessment & techniques",
    "section.psychApproaches": "Approaches & strengths",
    "section.psychResearch": "Research",
    "section.psychProjects": "Academic projects",
    "section.psychFrameworks": "Theoretical frameworks",
    "section.complementaryExperience": "Complementary experience",
    "section.volunteering": "Volunteering",
    "section.contact": "Contact",
    "hobbies.intro":
      "Outside technical work: exploration, creativity and continuous learning.",
    "present": "Present",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key];
}
