export type Lang = "es" | "en";

export const defaultLang: Lang = "es";
export const languages: Lang[] = ["es", "en"];

export const ui = {
  es: {
    "meta.title": "Dennis García, Arquitecto DevOps y Cloud",
    "meta.description":
      "Portafolio de Dennis García: desarrollo de software, cloud y DevOps, seguridad y datos, e IA y automatización.",
    "meta.experience":
      "Experiencia de Dennis García: roles técnicos, formación, certificaciones y voluntariado.",
    "meta.education":
      "Soy Dennis García y estudié ingeniería, seguridad de la información, gestión y docencia.",
    "meta.hobbies":
      "Soy Dennis García. Fuera del trabajo me gusta la fotografía, el senderismo, la tecnología creativa, la naturaleza y viajar.",
    "meta.psychology":
      "Soy Dennis García y también me formé en psicología: áreas de estudio, evaluación, investigación y proyectos académicos.",
    "role": "Arquitecto DevOps y Cloud",
    "contact": "Contacto",
    "back": "Volver",
    "techLabel": "Tecnologías y herramientas",
    "langName": "English",
    "langSwitchLabel": "Ver en inglés",
    "home.title1": "Hola, soy Dennis.",
    "home.title2": "Diseño y construyo sistemas cloud, y los opero en producción.",
    "home.lead":
      "Llevo 19 años construyendo y operando sistemas: desarrollo, servidores, bases de datos, redes, seguridad y automatización. Hoy paso la mayor parte del tiempo con cloud, DevOps y agentes de IA. También estudié psicología y la uso para entender qué pasa del lado humano de la tecnología.",
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
      "Fuera del trabajo técnico me gusta explorar, crear cosas y seguir aprendiendo.",
    "present": "Presente",
  },
  en: {
    "meta.title": "Dennis García, DevOps & Cloud Architect",
    "meta.description":
      "Dennis García's portfolio: software development, cloud and DevOps, security and data, and AI and automation.",
    "meta.experience":
      "Dennis García's experience: technical roles, education, certifications and volunteering.",
    "meta.education":
      "I'm Dennis García and I studied engineering, information security, management and teaching.",
    "meta.hobbies":
      "I'm Dennis García. Outside work I like photography, hiking, creative tech, nature and travel.",
    "meta.psychology":
      "I'm Dennis García and I also studied psychology: study areas, assessment, research and academic projects.",
    "role": "DevOps & Cloud Architect",
    "contact": "Contact",
    "back": "Back",
    "techLabel": "Technologies & tools",
    "langName": "Español",
    "langSwitchLabel": "View in Spanish",
    "home.title1": "Hi, I'm Dennis.",
    "home.title2": "I design and build cloud systems, and I run them in production.",
    "home.lead":
      "I've been building and running systems for 19 years: development, servers, databases, networking, security and automation. These days I spend most of my time with cloud, DevOps and AI agents. I also studied psychology, and I use it to understand what happens on the human side of technology.",
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
      "Outside technical work I like to explore, build things and keep learning.",
    "present": "Present",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key];
}
