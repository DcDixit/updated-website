/**
 * Runs axe-core accessibility audit against key pages.
 * Requires production server: npm run build && npm run start
 * Usage: node scripts/axe-audit.mjs [baseUrl]
 */
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = process.argv[2] ?? "http://localhost:3000";
const outDir = path.join(__dirname, "..", ".lighthouse");

const PAGES = ["/", "/contact", "/work", "/services", "/about"];

async function auditTheme(url, theme) {
  const { chromium } = await import("playwright");
  const { default: AxeBuilder } = await import("@axe-core/playwright");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.addInitScript((t) => {
    localStorage.setItem("kriva-theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
    document.documentElement.style.colorScheme = t;
  }, theme);

  await page.emulateMedia({ colorScheme: theme === "dark" ? "dark" : "light" });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate((t) => {
    document.documentElement.classList.toggle("dark", t === "dark");
    document.documentElement.style.colorScheme = t;
  }, theme);
  const results = await new AxeBuilder({ page }).analyze();
  await context.close();
  await browser.close();
  return results;
}

async function main() {
  await mkdir(outDir, { recursive: true });

  let totalViolations = 0;
  const summary = [];

  for (const route of PAGES) {
    const url = `${baseUrl}${route}`;
    for (const theme of ["light", "dark"]) {
      try {
        const results = await auditTheme(url, theme);
        const violations = results.violations ?? [];
        totalViolations += violations.length;

        const slug = route === "/" ? "homepage" : route.slice(1);
        const outFile = path.join(outDir, `axe-${slug}-${theme}.json`);
        await writeFile(outFile, JSON.stringify(results, null, 2));

        summary.push({
          route,
          theme,
          violations: violations.length,
          serious: violations.filter((v) => v.impact === "serious" || v.impact === "critical").length,
        });

        console.log(
          `${violations.length === 0 ? "✓" : "✗"} ${route} (${theme}): ${violations.length} violations`
        );
        for (const v of violations) {
          console.log(`    [${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} nodes)`);
        }
      } catch (err) {
        console.error(`✗ ${url} (${theme}): ${err.message}`);
        totalViolations += 1;
      }
    }
  }

  await writeFile(path.join(outDir, "axe-summary.json"), JSON.stringify(summary, null, 2));
  console.log(`\nTotal violations: ${totalViolations}`);
  if (totalViolations > 0) process.exit(1);
}

main();
