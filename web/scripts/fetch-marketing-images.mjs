/**
 * Downloads verified Unsplash photos into public/images/.
 * Uses full CDN URLs — Pexels numeric IDs are unreliable (IDs remap to unrelated photos).
 *
 * License: Unsplash (free) — https://unsplash.com/license
 * Refresh: npm run images:fetch
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images");

/** Verified assets — each URL was checked against its intended theme. */
const U = {
  semiTruck:
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&h=1080&q=80",
  warehouse:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&h=1080&q=80",
  saasLaptop:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=80",
  saasAnalytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&h=1080&q=80",
  teamMeeting:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&h=1080&q=80",
  teamCoding:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1080&q=80",
  teamWorkshop:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&h=1080&q=80",
  laptopCollab:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&h=1080&q=80",
  financeDocs:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&h=1080&q=80",
  aiVisual:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&h=1080&q=80",
  healthcareMobile:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&h=1080&q=80",
  passengerCar:
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&h=1080&q=80",
  shopStorefront:
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1920&h=1080&q=80",
};

/** @type {{ file: string; url: string; theme: string }[]} */
const MANIFEST = [
  // Page heroes
  { file: "heroes/hero-home.jpg", url: U.saasLaptop, theme: "SaaS analytics dashboard" },
  { file: "heroes/hero-about.jpg", url: U.teamWorkshop, theme: "Product team collaboration" },
  { file: "heroes/hero-services.jpg", url: U.saasLaptop, theme: "UI/UX design workspace" },
  { file: "heroes/hero-contact.jpg", url: U.teamMeeting, theme: "Client discovery meeting" },
  { file: "heroes/hero-work.jpg", url: U.saasAnalytics, theme: "Digital product portfolio" },
  { file: "heroes/hero-process.jpg", url: U.teamCoding, theme: "Product planning and delivery" },
  { file: "heroes/hero-technologies.jpg", url: U.teamCoding, theme: "Development environment" },
  { file: "heroes/hero-industries.jpg", url: U.semiTruck, theme: "Trucking and logistics operations" },
  { file: "heroes/hero-insights.jpg", url: U.teamMeeting, theme: "Editorial strategy workspace" },
  { file: "heroes/hero-faq.jpg", url: U.teamWorkshop, theme: "Consultation session" },
  { file: "heroes/hero-careers.jpg", url: U.teamWorkshop, theme: "Team celebrating launch" },
  { file: "heroes/hero-solutions.jpg", url: U.saasAnalytics, theme: "Product strategy dashboard" },
  { file: "heroes/hero-privacy.jpg", url: U.financeDocs, theme: "Data protection and compliance" },
  { file: "heroes/hero-terms.jpg", url: U.financeDocs, theme: "Business terms documentation" },

  // Marketing sections
  { file: "sections/section-saas.jpg", url: U.saasAnalytics, theme: "SaaS analytics dashboard" },
  { file: "sections/section-trucking.jpg", url: U.semiTruck, theme: "Semi-truck on US highway" },
  { file: "sections/section-trust.jpg", url: U.teamMeeting, theme: "Client partnership meeting" },
  { file: "sections/section-team.jpg", url: U.teamCoding, theme: "Cross-functional product team" },
  { file: "sections/section-culture.jpg", url: U.teamWorkshop, theme: "Team workshop collaboration" },
  { file: "sections/section-services.jpg", url: U.teamCoding, theme: "Design and development deliverables" },

  // Solution pages
  { file: "solutions/solution-trucking.jpg", url: U.semiTruck, theme: "Fleet of semi-trucks on highway" },
  { file: "solutions/solution-accounting.jpg", url: U.financeDocs, theme: "Accounting and finance review" },
  { file: "solutions/solution-car-transport.jpg", url: U.passengerCar, theme: "Passenger vehicle transport" },

  // Industries
  { file: "industries/industry-saas.jpg", url: U.saasLaptop, theme: "SaaS product interface" },
  { file: "industries/industry-trucking.jpg", url: U.semiTruck, theme: "Trucking fleet operations" },
  { file: "industries/industry-accounting.jpg", url: U.financeDocs, theme: "Finance reconciliation workspace" },
  { file: "industries/industry-car-transport.jpg", url: U.passengerCar, theme: "Vehicle transport logistics" },
  { file: "industries/industry-crm.jpg", url: U.saasAnalytics, theme: "CRM sales pipeline dashboard" },

  // Case studies
  { file: "cases/case-fleetflow.jpg", url: U.semiTruck, theme: "US trucking dispatch operations" },
  { file: "cases/case-payrollpro.jpg", url: U.saasLaptop, theme: "B2B SaaS onboarding dashboard" },
  { file: "cases/case-financesync.jpg", url: U.financeDocs, theme: "QuickBooks Xero reconciliation" },
  { file: "cases/case-healthtrack.jpg", url: U.healthcareMobile, theme: "Healthcare mobile app context" },
  { file: "cases/case-brandlift.jpg", url: U.shopStorefront, theme: "E-commerce storefront redesign" },
  { file: "cases/case-crmpulse.jpg", url: U.saasAnalytics, theme: "Sales CRM pipeline dashboard" },
  { file: "cases/case-aisupport.jpg", url: U.aiVisual, theme: "AI support automation workflow" },
  { file: "cases/case-marketplace.jpg", url: U.shopStorefront, theme: "Marketplace MVP platform" },

  // Insights
  { file: "insights/insight-ai-design.jpg", url: U.aiVisual, theme: "AI in product design" },
  { file: "insights/insight-onboarding.jpg", url: U.saasAnalytics, theme: "SaaS onboarding patterns" },
  { file: "insights/insight-mvp-uk.jpg", url: U.saasLaptop, theme: "UK SaaS MVP startup" },
  { file: "insights/insight-nocode.jpg", url: U.laptopCollab, theme: "No-code MVP development" },
  { file: "insights/insight-trucking-crm.jpg", url: U.warehouse, theme: "US trucking dispatch CRM logistics" },
  { file: "insights/insight-crm-ux.jpg", url: U.saasAnalytics, theme: "CRM dashboard UX patterns" },
  { file: "insights/insight-agency.jpg", url: U.teamMeeting, theme: "Choosing a digital agency" },

  // Tech / service visuals
  { file: "tech/tech-design.jpg", url: U.saasLaptop, theme: "UI/UX design tools" },
  { file: "tech/tech-branding.jpg", url: U.teamMeeting, theme: "Brand identity and graphic design" },
  { file: "tech/tech-frontend.jpg", url: U.teamCoding, theme: "Frontend web development" },
  { file: "tech/tech-mobile.jpg", url: U.healthcareMobile, theme: "Mobile app interface design" },
  { file: "tech/tech-backend.jpg", url: U.saasAnalytics, theme: "Backend systems architecture" },
  { file: "tech/tech-integrations.jpg", url: U.saasAnalytics, theme: "API integrations and connectivity" },
  { file: "tech/tech-ai.jpg", url: U.aiVisual, theme: "AI-assisted development" },
  { file: "tech/tech-nocode.jpg", url: U.laptopCollab, theme: "No-code low-code platforms" },
];

async function download(entry) {
  const dest = path.join(OUT_DIR, entry.file);
  await mkdir(path.dirname(dest), { recursive: true });

  const res = await fetch(entry.url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buffer);
  return buffer.length;
}

async function main() {
  console.log(`Fetching ${MANIFEST.length} verified images…\n`);

  let ok = 0;
  let failed = 0;

  for (const entry of MANIFEST) {
    try {
      const bytes = await download(entry);
      ok += 1;
      console.log(`✓ ${entry.file} (${entry.theme}, ${bytes} bytes)`);
    } catch (err) {
      failed += 1;
      console.error(`✗ ${entry.file}: ${err.message}`);
    }
  }

  console.log(`\nDone: ${ok} saved, ${failed} failed.`);
  if (failed) process.exit(1);
}

main();
