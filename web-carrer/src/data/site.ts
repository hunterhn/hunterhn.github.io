import type { Lang } from "../i18n/ui";
import { contact } from "./portfolio";

export const SITE = {
  name: "Dennis García",
  siteUrl: "https://dennisgarcia.dev",
  photoUrl: "avatar.svg",
};

// Email protection: the full address never appears in the static HTML.
// It is stored as base64 and assembled only when the user clicks.
const EMAIL_B64 = "Z2FyY2lhLmRlbm5pc0BnbWFpbC5jb20=";
const EMAIL_OBF = "garcia.dennis [at] gmail [dot] com";

export interface Social {
  name: string;
  url: string;
  icon: string;
  label: string;
  showInContact: boolean;
  emailB64?: string;
  obfuscated?: string;
}

const labels: Record<string, { es: string; en: string }> = {
  GitHub: { es: "Ver perfil", en: "View profile" },
  LinkedIn: { es: "Conectar", en: "Connect" },
  Email: { es: "Enviar correo", en: "Send email" },
  "Wikimedia Commons": { es: "Ver fotografías", en: "View photographs" },
  Website: { es: "Visitar sitio", en: "Visit site" },
};

export function getSocials(lang: Lang): Social[] {
  const raw: Social[] = [
    { name: "GitHub", url: contact.github, icon: "mdi:github", label: "", showInContact: true },
    { name: "LinkedIn", url: contact.linkedin, icon: "mdi:linkedin", label: "", showInContact: true },
    {
      name: "Email",
      url: "#",
      icon: "mdi:email",
      label: "",
      showInContact: true,
      emailB64: EMAIL_B64,
      obfuscated: EMAIL_OBF,
    },
    {
      name: "Wikimedia Commons",
      url: contact.commons,
      icon: "mdi:wikipedia",
      label: "",
      showInContact: true,
    },
    { name: "Website", url: contact.website, icon: "mdi:web", label: "", showInContact: true },
  ];
  return raw.map((s) => ({ ...s, label: labels[s.name]?.[lang] ?? "Open" }));
}
