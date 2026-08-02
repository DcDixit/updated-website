/**
 * Generates og-default.png, apple-touch-icon.png, and kriva-icon.png from brand assets.
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

const LOGO_PATH = path.join(BRAND, "kriva-logo.png");

async function loadLogo(maxWidth) {
  return sharp(LOGO_PATH).resize({ width: maxWidth, withoutEnlargement: true }).png().toBuffer();
}

async function loadLogoMark(size) {
  const meta = await sharp(LOGO_PATH).metadata();
  const cropWidth = Math.round(meta.width * 0.28);

  return sharp(LOGO_PATH)
    .extract({ left: 0, top: 0, width: cropWidth, height: meta.height })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

function ogBackgroundSvg() {
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
  <text x="80" y="400" fill="#F0F4FF" font-family="Google Sans, ui-sans-serif, system-ui, sans-serif" font-size="42" font-weight="600" letter-spacing="-0.02em">
    Product design &amp; engineering
  </text>
  <text x="80" y="455" fill="#A0A8C0" font-family="Google Sans, ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="400">
    SaaS platforms · Trucking software · Accounting integrations
  </text>
  <rect x="80" y="490" width="48" height="4" rx="2" fill="${BRAND_AMBER}"/>
</svg>`;
}

async function main() {
  const logo = await loadLogo(420);
  const logoMeta = await sharp(logo).metadata();
  const logoMark = await loadLogoMark(128);
  const iconMark = await loadLogoMark(180);

  const ogBuffer = await sharp(Buffer.from(ogBackgroundSvg()))
    .composite([{ input: logo, top: 180, left: 80 }])
    .png()
    .toBuffer();
  await writeFile(path.join(BRAND, "og-default.png"), ogBuffer);
  console.log(`✓ brand/og-default.png (${ogBuffer.length} bytes, logo ${logoMeta.width}x${logoMeta.height})`);

  const iconBuffer = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 5, g: 10, b: 26, alpha: 1 },
    },
  })
    .composite([{ input: iconMark, gravity: "centre" }])
    .png()
    .toBuffer();
  await writeFile(path.join(PUBLIC, "apple-touch-icon.png"), iconBuffer);
  console.log(`✓ apple-touch-icon.png (${iconBuffer.length} bytes)`);

  await writeFile(path.join(BRAND, "kriva-icon.png"), logoMark);
  console.log(`✓ brand/kriva-icon.png (${logoMark.length} bytes)`);

  const iconBase64 = logoMark.toString("base64");
  const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <rect width="32" height="32" rx="8" fill="#050A1A"/>
  <image href="data:image/png;base64,${iconBase64}" x="4" y="4" width="24" height="24" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  await writeFile(path.join(PUBLIC, "icon.svg"), iconSvg);
  console.log("✓ icon.svg");

  const logoBase64 = (await sharp(LOGO_PATH).png().toBuffer()).toString("base64");
  const logoMetaFull = await sharp(LOGO_PATH).metadata();
  const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${logoMetaFull.width} ${logoMetaFull.height}" fill="none" aria-hidden="true">
  <image href="data:image/png;base64,${logoBase64}" width="${logoMetaFull.width}" height="${logoMetaFull.height}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  await writeFile(path.join(BRAND, "logo.svg"), logoSvg);
  console.log("✓ brand/logo.svg");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
