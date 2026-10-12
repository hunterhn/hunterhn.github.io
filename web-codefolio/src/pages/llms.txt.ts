import type { APIRoute } from 'astro';
import {
  profile,
  categories,
  experience,
  complementaryExperience,
  volunteering,
  education,
  complementaryEducation,
  certifications,
  languages,
  hobbies,
  psychology,
  contact,
} from '../data/content';

const BASE = 'https://dennisgarcia.dev';

function section(title: string, items: string[]): string {
  return `## ${title}\n${items.map((i) => `- ${i}`).join('\n')}\n`;
}

export const GET: APIRoute = () => {
  const skills = categories
    .map((c) => `- **${c.title.en}:** ${c.chips.join(', ')}`)
    .join('\n');

  const exp = [...experience, ...complementaryExperience]
    .map((j) => `- **${j.role.en}** — ${j.company} (${j.period.en})`)
    .join('\n');

  const edu = [...education, ...complementaryEducation]
    .map((e) => `- **${e.title.en}** — ${e.institution} (${e.period})`)
    .join('\n');

  const certs = certifications
    .map((c) => `- ${c.name} — ${c.issuer}${c.year ? ` (${c.year})` : ''}`)
    .join('\n');

  const projects = categories
    .map(
      (c) =>
        `### ${c.title.en}\n${c.projects
          .map((p) => `- **${p.title.en}:** ${p.desc.en[0]}`)
          .join('\n')}`,
    )
    .join('\n');

  const volunteer = volunteering
    .map((v) => `- **${v.role.en}** — ${v.org} (${v.period.en})`)
    .join('\n');

  const hobbyList = hobbies.map((h) => `- **${h.title.en}:** ${h.desc.en}`).join('\n');

  const psych = psychology.projects
    .map((p) => `- **${p.title.en}:** ${p.desc.en}`)
    .join('\n');

  const markdown = `# ${profile.name}

> ${profile.about.en}

${profile.name} is a ${profile.role.en} based in ${profile.location.en}. He works with remote clients in the USA, Honduras and Colombia. This is his bilingual (Spanish/English) personal portfolio.

## Site
- English (default): ${BASE}/
- Spanish: ${BASE}/es/
- Sitemap: ${BASE}/sitemap-index.xml

## Contact
- GitHub: ${contact.github}
- LinkedIn: ${contact.linkedin}
- Wikimedia Commons: ${contact.commons}
- Website: ${contact.website}
- Contact form / email available on the site's contact section (protected against scraping).

## Skills & Tools
${skills}

${section('Experience', exp.split('\n'))}
${section('Education & Certifications', [...edu.split('\n'), ...certs.split('\n')])}
## Projects
${projects}

${section('Volunteering', volunteer.split('\n'))}
## Psychology (background)
${psych}

## Hobbies
${hobbyList}

## Languages
${languages.map((l) => `- ${l.name.en} — ${l.level.en}`).join('\n')}
`;

  return new Response(markdown.trim() + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
