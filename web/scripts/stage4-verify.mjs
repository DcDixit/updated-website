/**
 * Stage 4 Category B verification — Playwright.
 * Run against a production server: BASE=http://localhost:3002 node scripts/stage4-verify.mjs
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.BASE || "http://localhost:3002";
const out = [];
const log = (line) => {
  out.push(line);
  console.log(line);
};

async function shellSignature(page) {
  return page.evaluate(() => {
    const nav = document.querySelector('nav[aria-label="Primary"]');
    const labels = nav
      ? Array.from(nav.querySelectorAll("a,button"))
          .map((el) => el.textContent?.trim())
          .filter(Boolean)
      : [];
    const footer = document.querySelector('nav[aria-label="Footer navigation"]');
    const footerCols = footer
      ? Array.from(footer.querySelectorAll(".type-badge-label, p.type-badge-label"))
          .map((el) => el.textContent?.replace(/\s+/g, " ").trim())
          .filter(Boolean)
      : [];
    const book = Array.from(document.querySelectorAll("a")).some((a) =>
      (a.textContent || "").includes("Book a 20-minute fit call")
    );
    const northline = /northline/i.test(document.documentElement.innerHTML);
    const hasDesktopNav = !!document.querySelector('nav[aria-label="Primary"]');
    const hasBurger = !!document.querySelector('button[aria-label="Open menu"]');
    const desktopEl = document.querySelector('nav[aria-label="Primary"]');
    const burgerEl = document.querySelector('button[aria-label="Open menu"]');
    const isShown = (el) => {
      if (!el) return false;
      if (typeof el.checkVisibility === "function") {
        return el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true });
      }
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };
    const desktopVisible = hasDesktopNav && isShown(desktopEl);
    const burgerVisible = hasBurger && isShown(burgerEl);
    const overflowX = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
    return {
      labels: labels.slice(0, 12),
      footerCols,
      book,
      northline,
      desktopVisible,
      burgerVisible,
      overflowX,
      title: document.title,
    };
  });
}

async function checkLogos(page) {
  return page.evaluate(async () => {
    const imgs = Array.from(
      document.querySelectorAll('ul[aria-label="Client logos"] img, #clients img')
    );
    const results = [];
    for (const img of imgs) {
      const ok = img.complete && img.naturalWidth > 0;
      results.push({
        alt: img.getAttribute("alt") || "",
        src: img.currentSrc || img.src,
        ok,
      });
    }
    return results;
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results = { pass: [], fail: [], notes: [] };

  try {
    // --- Redirects disabled: source pages must 200 ---
    const sources = [
      "/services/ui-ux-design",
      "/services/ux-research",
      "/services/wireframing-prototyping",
      "/services/web-application-design",
      "/services/logo-design",
      "/services/no-code-low-code",
      "/services/ai-assisted-development",
    ];
    for (const s of sources) {
      const res = await fetch(BASE + s, { redirect: "manual" });
      const status = res.status;
      const loc = res.headers.get("location");
      if (status === 200 && !loc) results.pass.push(`redirect-disabled ${s} -> 200`);
      else results.fail.push(`redirect-disabled ${s} status=${status} loc=${loc}`);
    }

    // --- Shell parity ---
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const consoleErrors = [];
    page.on("pageerror", (e) => consoleErrors.push(String(e)));
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    const routes = ["/", "/contact", "/work/fleetflow-dispatch"];
    const shells = {};
    for (const route of routes) {
      await page.goto(BASE + route, { waitUntil: "networkidle" });
      shells[route] = await shellSignature(page);
    }
    const baseLabels = JSON.stringify(shells["/"].labels.filter((l) =>
      ["Trucking", "SaaS", "Services", "Work", "About"].includes(l)
    ));
    for (const route of routes) {
      const labels = JSON.stringify(
        shells[route].labels.filter((l) =>
          ["Trucking", "SaaS", "Services", "Work", "About"].includes(l)
        )
      );
      if (labels === baseLabels && shells[route].book && !shells[route].northline) {
        results.pass.push(`shell-parity ${route}`);
      } else {
        results.fail.push(`shell-parity ${route} labels=${labels} book=${shells[route].book}`);
      }
    }

    // Logos on homepage
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    const logos = await checkLogos(page);
    const emptyAlt = logos.filter((l) => !l.alt || !l.alt.includes("logo"));
    const broken = logos.filter((l) => !l.ok);
    if (logos.length >= 13 && emptyAlt.length === 0 && broken.length === 0) {
      results.pass.push(`logos ${logos.length} loaded with alts`);
    } else {
      results.fail.push(
        `logos count=${logos.length} emptyAlt=${emptyAlt.length} broken=${broken.length}`
      );
    }

    // Contact null scheduler fallback
    await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
    const contactOk = await page.evaluate(() => {
      const html = document.body.innerHTML;
      const hasScheduleDead =
        /Schedule a call/i.test(html) && !/Email to book a call/i.test(html);
      const hasFallback = /Email to book a call/i.test(html) && /WhatsApp us/i.test(html);
      const hasPlaceholder = /coming soon/i.test(html) || /href="#"/i.test(html);
      return { hasScheduleDead, hasFallback, hasPlaceholder };
    });
    if (contactOk.hasFallback && !contactOk.hasScheduleDead && !contactOk.hasPlaceholder) {
      results.pass.push("contact#book fallback");
    } else results.fail.push(`contact fallback ${JSON.stringify(contactOk)}`);

    // Desktop dropdown interactions
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    const truckingBtn = page.locator('nav[aria-label="Primary"] button', {
      hasText: "Trucking",
    });
    await truckingBtn.focus();
    await page.waitForTimeout(200);
    let open = await page.locator('nav[aria-label="Primary"] [role="menu"]').first().isVisible();
    if (open) results.pass.push("desktop-dropdown opens on focus");
    else {
      await truckingBtn.hover();
      await page.waitForTimeout(200);
      open = await page.locator('nav[aria-label="Primary"] [role="menu"]').first().isVisible();
      if (open) results.pass.push("desktop-dropdown opens on hover");
      else results.fail.push("desktop-dropdown did not open");
    }
    await page.keyboard.press("Escape");
    await page.waitForTimeout(100);
    const closed = !(await page.locator('nav[aria-label="Primary"] [role="menu"]').first().isVisible());
    if (closed) results.pass.push("desktop-dropdown closes on Escape");
    else results.fail.push("desktop-dropdown Escape close failed");

    // Reduced motion
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    const motion = await page.evaluate(() => {
      const html = getComputedStyle(document.documentElement).scrollBehavior;
      return { scrollBehavior: html };
    });
    if (motion.scrollBehavior === "auto") results.pass.push("reduced-motion scroll-behavior auto");
    else results.notes.push(`reduced-motion scrollBehavior=${motion.scrollBehavior}`);

    // Console / hydration after routes
    if (consoleErrors.length === 0) results.pass.push("zero console/page errors on sampled routes");
    else results.fail.push(`console errors: ${consoleErrors.slice(0, 5).join(" | ")}`);

    await ctx.close();

    // Responsive breakpoints
    const widths = [375, 390, 768, 1024, 1280, 1440];
    for (const width of widths) {
      const c = await browser.newContext({ viewport: { width, height: 900 } });
      const p = await c.newPage();
      await p.goto(BASE + "/", { waitUntil: "networkidle" });
      const sig = await shellSignature(p);

      // Logo grid columns via computed style of first row
      const cols = await p.evaluate(() => {
        const ul = document.querySelector('ul[aria-label="Client logos"]');
        if (!ul) return null;
        const style = getComputedStyle(ul);
        return style.gridTemplateColumns.split(" ").filter(Boolean).length;
      });

      const bothNavs = sig.desktopVisible && sig.burgerVisible;
      const line = {
        width,
        desktopVisible: sig.desktopVisible,
        burgerVisible: sig.burgerVisible,
        bothNavs,
        overflowX: sig.overflowX,
        logoCols: cols,
      };

      if (bothNavs) results.fail.push(`responsive ${width}: both navs visible`);
      else results.pass.push(`responsive ${width}: nav exclusive desktop=${sig.desktopVisible} burger=${sig.burgerVisible}`);

      if (sig.overflowX) results.fail.push(`responsive ${width}: horizontal overflow`);
      else results.pass.push(`responsive ${width}: no horizontal overflow`);

      if (cols != null) {
        const expected =
          width < 768 ? 3 : width < 1024 ? 4 : 5;
        // Tailwind md=768 lg=1024
        if (cols === expected) results.pass.push(`responsive ${width}: logo cols=${cols}`);
        else results.notes.push(`responsive ${width}: logo cols=${cols} expected~${expected}`);
      }

      // Mobile menu interaction below 1024
      if (width < 1024 && sig.burgerVisible) {
        await p.click('button[aria-label="Open menu"]');
        await p.waitForTimeout(150);
        const panelOpen = await p.locator("#mobile-nav-panel").isVisible();
        if (!panelOpen) results.fail.push(`responsive ${width}: mobile panel did not open`);
        else {
          results.pass.push(`responsive ${width}: mobile panel opens`);
          // Escape close
          await p.keyboard.press("Escape");
          await p.waitForTimeout(150);
          const closedEsc = !(await p.locator("#mobile-nav-panel").isVisible());
          if (closedEsc) results.pass.push(`responsive ${width}: Escape closes menu`);
          else results.fail.push(`responsive ${width}: Escape close failed`);

          // Reopen and X close
          await p.click('button[aria-label="Open menu"]');
          await p.waitForTimeout(100);
          await p.click('button[aria-label="Close menu"]');
          await p.waitForTimeout(150);
          const closedX = !(await p.locator("#mobile-nav-panel").isVisible());
          if (closedX) results.pass.push(`responsive ${width}: X closes menu`);
          else results.fail.push(`responsive ${width}: X close failed`);

          // Reopen and backdrop close — click left edge (panel covers right side)
          await p.click('button[aria-label="Open menu"]');
          await p.waitForTimeout(100);
          await p.locator('button[aria-label="Close menu backdrop"]').click({
            position: { x: 8, y: 200 },
            force: true,
          });
          await p.waitForTimeout(150);
          const closedBd = !(await p.locator("#mobile-nav-panel").isVisible());
          if (closedBd) results.pass.push(`responsive ${width}: backdrop closes menu`);
          else results.fail.push(`responsive ${width}: backdrop close failed`);

          // Body scroll restore
          const overflow = await p.evaluate(() => document.body.style.overflow);
          if (!overflow || overflow === "visible" || overflow === "") {
            results.pass.push(`responsive ${width}: body scroll restored`);
          } else results.fail.push(`responsive ${width}: body overflow=${overflow}`);
        }
      }

      results.notes.push(`responsive-detail ${JSON.stringify(line)}`);
      await c.close();
    }
  } finally {
    await browser.close();
  }

  log("\n=== STAGE 4 CATEGORY B SUMMARY ===");
  log(`PASS (${results.pass.length}):`);
  for (const p of results.pass) log(`  PASS ${p}`);
  log(`FAIL (${results.fail.length}):`);
  for (const f of results.fail) log(`  FAIL ${f}`);
  log(`NOTES (${results.notes.length}):`);
  for (const n of results.notes) log(`  NOTE ${n}`);

  const reportPath = path.join(process.cwd(), "scripts", "stage4-verify-report.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  log(`Wrote ${reportPath}`);
  if (results.fail.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
