import type { L, PsychItem } from "./types";

export const psychology = {
  intro: {
    es: "Soy licenciado en Psicología (B.A.) por la Universidad Interamericana de Panamá (UIP), con énfasis clínico, educativo y organizacional. Aplico esa base a la tecnología y a cómo se cruzan la IA y el comportamiento humano.",
    en: "I hold a B.A. in Psychology from Universidad Interamericana de Panamá (UIP), with a clinical, educational and organizational emphasis. I apply that foundation to technology and to how AI and human behavior intersect.",
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
        es: "Es la que más uso cuando busco resultados medibles. Trabaja con objetivos claros y tareas entre sesiones, y tiene buena evidencia detrás para ansiedad, depresión y problemas de conducta.",
        en: "It's the one I reach for most when I want measurable results. It works with clear goals and between-session tasks, and the evidence backs it for anxiety, depression and behavioral problems.",
      },
    },
    {
      name: {
        es: "Terapia de Aceptación y Compromiso (ACT)",
        en: "Acceptance and Commitment Therapy (ACT)",
      },
      strength: {
        es: "Trabaja la flexibilidad psicológica y las acciones alineadas con los propios valores. La uso cuando el sufrimiento es parte del día a día o cuando el problema se vuelve crónico.",
        en: "It works on psychological flexibility and actions aligned with one's own values. I use it when suffering is part of daily life or when the problem turns chronic.",
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
        es: "Para mi investigación en la UIP (segundo cuatrimestre de 2024) armé un taller visual-espacial con realidad aumentada sobre lóbulos cerebrales. Lo probé con 25 estudiantes de ciencias de la salud: el pretest quedó en 3.32, el postest subió a 4.16 (t = -3.56, p = 0.0016). 12 participantes reportaron que la RA los ayudó a vincular el libro con partes del cuerpo.",
        en: "For my research at UIP (second term 2024) I put together a visual-spatial workshop with augmented reality on brain lobes. I ran it with 25 health sciences students: pretest was 3.32, posttest rose to 4.16 (t = -3.56, p = 0.0016). 12 participants reported that AR helped them link the book with body parts.",
      },
    },
    {
      title: {
        es: "Propuesta SENACYT: chatbot con IA para adolescentes",
        en: "SENACYT proposal: AI chatbot for adolescents",
      },
      desc: {
        es: "Escribí la propuesta para un chatbot con IA dirigido a adolescentes. Quedó en fase de propuesta, pero es el tipo de cruce entre psicología y tecnología que me interesa.",
        en: "I wrote the proposal for an AI chatbot aimed at adolescents. It stayed at the proposal stage, but it's the kind of crossover between psychology and technology that interests me.",
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
        es: "Lideré un equipo de práctica universitaria en una organización panameña de orientación vocacional.",
        en: "I led a university practice team at a Panamanian vocational guidance organization.",
      },
    },
    {
      title: {
        es: "Programa BRÚJULA — Scouts de Panamá",
        en: "BRÚJULA Program — Scouts de Panamá",
      },
      desc: {
        es: "Armé una propuesta formal de intervención para cuidar el bienestar de los voluntarios del programa.",
        en: "I put together a formal intervention proposal to look after the well-being of the program's volunteers.",
      },
    },
    {
      title: {
        es: "Plan de Intervención Educativa (PEI)",
        en: "Educational Intervention Plan (PEI)",
      },
      desc: {
        es: "Diseñé un plan de intervención educativo y lo estructuré con la Taxonomía de Bloom.",
        en: "I designed an educational intervention plan and structured it with Bloom's Taxonomy.",
      },
    },
    {
      title: {
        es: "Psicología corporativa y bienestar laboral",
        en: "Corporate psychology & workplace well-being",
      },
      desc: {
        es: "Di una presentación sobre bienestar laboral con una actividad en vivo. También armé un análisis de liderazgo y cultura organizacional desde RRHH.",
        en: "I gave a presentation on workplace well-being with a live activity. I also worked through an analysis of leadership and organizational culture from an HR angle.",
      },
    },
    {
      title: { es: "Match Seguro", en: "Match Seguro" },
      desc: {
        es: "Para una campaña de salud comunitaria en Panamá sobre prevención del VIH, escribí el guion y armé el concepto visual.",
        en: "For a community health campaign in Panama on HIV prevention, I wrote the script and built the visual concept.",
      },
    },
  ] as PsychItem[],
};

