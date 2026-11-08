import type { Volunteering } from "./types";

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
        "Mantuve el sitio de JCI Honduras a nivel administrativo.",
        "Activé las cuentas de los presidentes de las organizaciones locales y di soporte a los usuarios asignados.",
        "Mantuve al día los puestos y la información en el sitio web.",
      ],
      en: [
        "I handled the administrative maintenance of the JCI Honduras website.",
        "I activated the accounts of local organization presidents and supported the assigned users.",
        "I kept positions and information up to date on the website.",
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
        "Armé diagramas de ideación y planes de ejecución para campañas.",
        "Apoyé en la edición de videos y en el material creativo.",
      ],
      en: [
        "I put together brainstorming diagrams and execution plans for campaigns.",
        "I helped with video editing and creative material.",
      ],
    },
  },
];

