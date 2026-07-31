/**
 * Generates og-default.png and apple-touch-icon.png from Northline brand assets.
 * Run: npm run brand:images
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");
const BRAND = path.join(PUBLIC, "brand");

const BRAND_COBALT = "#1B2A6B";
const BRAND_NAVY = "#0B1B4D";
const BRAND_AMBER = "#F59E0B";
const ACCENT_INDIGO = "#4F46E5";

const LOGO_MARK = `<path d="M4 24V8h3.6l5.4 8.3V8h3.8v16h-3.5l-5.6-8.8V24H4z" fill="${ACCENT_INDIGO}"/>`;
const LOGO_WORD = `<text x="32" y="22" fill="#F0F4FF" font-family="Instrument Sans, ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="600" letter-spacing="-0.02em">Northline</text>`;

function ogSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND_NAVY}"/>
      <stop offset="55%" stop-color="${BRAND_COBALT}"/>
      <stop offset="100%" stop-color="#111D4A"/>
    </linearGradient>
    <radialGradient id="glow" cx="75%" cy="25%" r="50%">
      <stop offset="0%" stop-color="${BRAND_AMBER}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${BRAND_AMBER}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="15%" cy="80%" r="45%">
      <stop offset="0%" stop-color="${ACCENT_INDIGO}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${ACCENT_INDIGO}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <g opacity="0.06" stroke="#FFFFFF" stroke-width="1" fill="none">
    ${Array.from({ length: 26 }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="630"/>`).join("")}
    ${Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1200" y2="${i * 48}"/>`).join("")}
  </g>
  <g transform="translate(80, 200) scale(3.2)">
    ${LOGO_MARK}
    ${LOGO_WORD}
  </g>
  <text x="80" y="340" fill="#F0F4FF" font-family="Instrument Sans, ui-sans-serif, system-ui, sans-serif" font-size="42" font-weight="600" letter-spacing="-0.02em">
    Digital product agency
  </text>
  <text x="80" y="395" fill="#A0A8C0" font-family="Instrument Sans, ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="400">
    SaaS platforms · Trucking software · Accounting integrations
  </text>
  <rect x="80" y="430" width="48" height="4" rx="2" fill="${BRAND_AMBER}"/>
</svg>`;
}

function appleTouchSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND_COBALT}"/>
      <stop offset="100%" stop-color="${BRAND_NAVY}"/>
    </linearGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="url(#bg)"/>
  <g transform="translate(16, 74) scale(1.5)">
    ${LOGO_MARK}
    ${LOGO_WORD}
  </g>
</svg>`;
}

async function main() {
  const ogBuffer = await sharp(Buffer.from(ogSvg())).png().toBuffer();
  await writeFile(path.join(BRAND, "og-default.png"), ogBuffer);
  console.log(`✓ brand/og-default.png (${ogBuffer.length} bytes)`);

  const iconBuffer = await sharp(Buffer.from(appleTouchSvg())).png().toBuffer();
  await writeFile(path.join(PUBLIC, "apple-touch-icon.png"), iconBuffer);
  console.log(`✓ apple-touch-icon.png (${iconBuffer.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
