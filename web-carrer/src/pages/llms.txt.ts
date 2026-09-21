import type { APIRoute } from 'astro';
import { profile } from '../data/portfolio';
import { getCareerItems, getProjects } from '../data/portfolio-view';
import { getTechCategories } from '../data/tech';
import { SITE, getSocials } from '../data/site';

export const GET: APIRoute = async () => {
  const siteUrl = SITE.siteUrl.replace(/\/$/, '');
  const career = getCareerItems('en');
  const projects = getProjects('en');
  const tech = getTechCategories('en');
  const socials = getSocials('en');

  const techStr = tech
    .map((cat) => `- **${cat.title.en}:** ${cat.skills.map((s) => s.name).join(', ')}`)
    .join('\n');

  const careerStr = career
    .map((item) => `- **${item.role}** — ${item.company} (${item.period})${item.description ? `\n  * ${item.description}` : ''}`)
    .join('\n');

  const projectsStr = projects
    .map((p) => `- **${p.title}:** ${p.description}${p.link && p.link !== '#' ? ` (${p.link})` : ''}`)
    .join('\n');

  const socialsStr = socials
    .filter((s) => s.url && s.url !== '#')
    .map((s) => `- **${s.name}:** ${s.url}`)
    .join('\n');

  const markdown = `# ${SITE.name}

> ${profile.about.en}

## Overview
${profile.about.en}

## Technical Skills & Categories
${techStr}

## Experience, Education & Volunteering
${careerStr}

## Featured Projects
${projectsStr}

## Contact & Links
- **Website:** ${siteUrl}
${socialsStr}
`;

  return new Response(markdown.trim() + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
