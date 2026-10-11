import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, '..');

const logoPath = path.join(root, 'public/assets/dennis-logo-white.png');
const outPath = path.join(root, 'public/og-image.png');

const W = 1200;
const H = 630;
const logoW = 440;

const logoBuf = await sharp(logoPath).resize({ width: logoW }).png().toBuffer();
const logoMeta = await sharp(logoBuf).metadata();
const logoH = logoMeta.height ?? 0;
const logoX = Math.round((W - logoW) / 2);
const logoY = 96;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="18%" cy="-10%" r="90%">
      <stop offset="0%" stop-color="#2b3a9e" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="#12131a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#12131a"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#ffffff" stroke-opacity="0.06"/>
  <line x1="${W / 2 - 40}" y1="${logoY + logoH + 40}" x2="${W / 2 + 40}" y2="${logoY + logoH + 40}" stroke="#2b3a9e" stroke-width="3" stroke-linecap="round"/>
  <text x="${W / 2}" y="378" text-anchor="middle" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="72" font-weight="bold" fill="#ffffff">Dennis García</text>
  <text x="${W / 2}" y="438" text-anchor="middle" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="30" fill="#aeb6cc" letter-spacing="1">DevOps &amp; Cloud Architect</text>
  <text x="${W / 2}" y="500" text-anchor="middle" font-family="DejaVu Sans, Helvetica, Arial, sans-serif" font-size="24" fill="#6f7790" letter-spacing="3">dennisgarcia.dev</text>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: logoBuf, left: logoX, top: logoY }])
  .png()
  .toFile(outPath);

console.log(`og-image.png → ${W}x${H} (logo ${logoW}x${logoH})`);
