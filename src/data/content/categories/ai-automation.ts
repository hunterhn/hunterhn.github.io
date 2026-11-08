import type { Category } from "../types";

export const aiAutomation: Category = {
    key: "ai-automation",
    icon: "favorite.svg",
    order: 4,
    title: { es: "IA y automatización", en: "AI & Automation" },
    summary: {
      es: "Armo asistentes con agentes delegados, automatizo flujos y diseño procesamiento asíncrono.",
      en: "I build assistants with delegated agents, automate workflows and design asynchronous processing.",
    },
    intro: {
      es: "Pruebo asistentes de IA, agentes delegados y arquitecturas multi-modelo para automatizar investigación, búsqueda y flujos de trabajo técnicos. También diseño procesamiento asíncrono y experiencias interactivas.",
      en: "I try out AI assistants, delegated agents and multi-model architectures to automate research, search and technical workflows. I also design asynchronous processing and interactive experiences.",
    },
    chips: [
      "AI Agents",
      "LLM",
      "Ollama",
      "llama.cpp",
      "Vertex AI",
      "Veo",
      "SearXNG",
      "Firecrawl",
      "BullMQ",
      "Cloud Tasks",
      "Redis",
      "p5.js",
    ],
    projects: [
      {
        title: {
          es: "Hermes: asistente con agentes delegados",
          en: "Hermes: assistant with delegated agents",
        },
        desc: {
          es: [
            "Configuré un asistente personal con agentes delegados para un briefing diario: IA, cloud y seguridad, psicología y noticias regionales.",
            "Busco y extraigo información con SearXNG y Firecrawl.",
            "Armé una arquitectura multi-modelo: un modelo principal y modelos de menor costo para las tareas delegadas.",
            "Definí perfiles de comportamiento y archivos de contexto (SOUL.md).",
          ],
          en: [
            "I configured a personal assistant with delegated agents for a daily briefing: AI, cloud and security, psychology and regional news.",
            "I search and extract information with SearXNG and Firecrawl.",
            "I set up a multi-model architecture: a main model plus lower-cost models for delegated tasks.",
            "I defined behavior profiles and context files (SOUL.md).",
          ],
        },
        tech: ["AI Agents", "LLM", "SearXNG", "Firecrawl", "Automation"],
      },
      {
        title: {
          es: "Laboratorio de IA local",
          en: "Local AI lab",
        },
        desc: {
          es: [
            "Monté un mini PC con Ubuntu en doble arranque. Hago inferencia local con Ollama y llama.cpp compilado desde fuente con soporte Vulkan.",
            "Ajusté la aceleración GPU (ROCm/Vulkan) y configuré la inferencia en CPU cuando necesito más estabilidad.",
            "Uso Hermes Agent con OpenRouter como proveedor y el agente de código Pi para tareas agentic.",
            "Mi entorno de desarrollo: zsh, Ghostty, mise para Node.js y uv para Python.",
          ],
          en: [
            "I set up a mini PC with Ubuntu in dual boot. I run local inference with Ollama and llama.cpp compiled from source with Vulkan support.",
            "I tuned GPU acceleration (ROCm/Vulkan) and configured CPU-only inference when I need more stability.",
            "I use Hermes Agent with OpenRouter as provider and the Pi coding agent for agentic tasks.",
            "My development environment: zsh, Ghostty, mise for Node.js and uv for Python.",
          ],
        },
        tech: [
          "Ollama",
          "llama.cpp",
          "Vulkan",
          "Hermes Agent",
          "OpenRouter",
          "Ubuntu",
        ],
      },
      {
        title: {
          es: "Desarrollo asistido por agentes",
          en: "Agent-assisted development",
        },
        desc: {
          es: [
            "Diseño las instrucciones para que un modelo principal dirija agentes trabajadores en el scaffolding de proyectos.",
            "Uso documentación Markdown como memoria operativa y para mantener continuidad entre sesiones y modelos.",
            "Escribo archivos de instrucciones para agentes (AGENTS.md) y documentación de arquitectura.",
          ],
          en: [
            "I design the instructions so a main model directs worker agents in project scaffolding.",
            "I use Markdown documentation as operational memory and to keep continuity across sessions and models.",
            "I write agent instruction files (AGENTS.md) and architecture documentation.",
          ],
        },
        tech: ["AI Agents", "Prompt Engineering", "Markdown", "Node.js"],
      },
      {
        title: { es: "Procesamiento asíncrono", en: "Asynchronous processing" },
        desc: {
          es: [
            "Evalué BullMQ y Google Cloud Tasks para trabajo asíncrono.",
            "Diseñé workers y colas para procesos de larga duración.",
          ],
          en: [
            "I evaluated BullMQ and Google Cloud Tasks for asynchronous work.",
            "I designed workers and queues for long-running processes.",
          ],
        },
        tech: ["BullMQ", "Google Cloud Tasks", "Redis", "Node.js"],
      },
      {
        title: {
          es: "Generación de video con IA",
          en: "AI video generation",
        },
        desc: {
          es: [
            "Produje spots publicitarios y narrativa visual con Vertex AI Veo y Google Flow.",
            "Optimicé prompts y gestioné costos y créditos de generación.",
          ],
          en: [
            "I produced advertising spots and visual narrative with Vertex AI Veo and Google Flow.",
            "I optimized prompts and managed generation costs and credits.",
          ],
        },
        tech: ["Vertex AI", "Veo", "Google Flow", "Prompt Engineering"],
      },
      {
        title: {
          es: "Experiencias interactivas con p5.js",
          en: "Interactive experiences with p5.js",
        },
        desc: {
          es: [
            "Desarrollé experiencias audiovisuales interactivas con p5.js.",
            "Armé navegación por escenas con personajes, imágenes y sonido.",
          ],
          en: [
            "I built interactive audiovisual experiences with p5.js.",
            "I set up scene-based navigation with characters, images and sound.",
          ],
        },
        tech: ["p5.js", "JavaScript", "Creative Coding"],
      },
    ],
};
