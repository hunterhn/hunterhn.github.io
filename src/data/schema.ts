import { profile, contact } from "./content";
import type { Lang } from "../i18n/ui";

const SITE = "https://dennisgarcia.dev";
const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Panama City",
  addressRegion: "Panamá",
  addressCountry: "PA",
} as const;

export interface JsonLdInput {
  lang: Lang;
  canonical: string;
  isHome: boolean;
  pageTitle: string;
}

export function buildJsonLd({
  lang,
  canonical,
  isHome,
  pageTitle,
}: JsonLdInput): Record<string, unknown> {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    jobTitle: profile.role[lang],
    url: `${SITE}/`,
    image: `${SITE}/og-image.png`,
    address: ADDRESS,
    knowsLanguage: ["es", "en"],
    sameAs: [contact.github, contact.linkedin, contact.commons],
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE}/`,
    name: profile.name,
    inLanguage: ["en", "es"],
    publisher: { "@id": PERSON_ID },
  };

  const graph: object[] = [person, website];

  if (isHome) {
    graph.push({
      "@type": "ProfilePage",
      "@id": `${canonical}#profilepage`,
      url: canonical,
      inLanguage: lang,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    });
  } else {
    const label =
      pageTitle.replace(/\s*\|\s*Dennis.*$/i, "").trim() || pageTitle;
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "en" ? "Home" : "Inicio",
          item: lang === "en" ? `${SITE}/` : `${SITE}/es/`,
        },
        { "@type": "ListItem", position: 2, name: label, item: canonical },
      ],
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
