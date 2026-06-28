#!/usr/bin/env node
/**
 * Run Lighthouse against local or production URLs.
 * Usage: node scripts/lighthouse.mjs [url] [output-name]
 */
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, ".lighthouse");

const url = process.argv[2] ?? "http://localhost:3000";
const name = process.argv[3] ?? "report";
const outPath = join(outDir, `${name}.json`);

mkdirSync(outDir, { recursive: true });

const cmd = [
  "npx",
  "lighthouse",
  url,
  "--quiet",
  "--chrome-flags=--headless --no-sandbox --disable-gpu",
  "--only-categories=performance,accessibility,best-practices,seo",
  `--output=json`,
  `--output-path=${outPath}`,
].join(" ");

console.log(`Running Lighthouse on ${url}…`);
execSync(cmd, { stdio: "inherit", cwd: root });

const report = JSON.parse(readFileSync(outPath, "utf8"));
const scores = Object.fromEntries(
  Object.entries(report.categories ?? {}).map(([key, cat]) => [key, Math.round((cat.score ?? 0) * 100)])
);

console.log("\nLighthouse scores:");
for (const [category, score] of Object.entries(scores)) {
  console.log(`  ${category}: ${score}`);
}
console.log(`\nFull report: ${outPath}`);

const failed = Object.entries(scores).filter(([cat, score]) => {
  if (cat === "performance") return score < 85;
  if (cat === "accessibility") return score < 90;
  return score < 85;
});

if (failed.length) {
  console.warn("\nSome scores are below target thresholds (Perf ≥85, A11y ≥90).");
  process.exitCode = 1;
}
