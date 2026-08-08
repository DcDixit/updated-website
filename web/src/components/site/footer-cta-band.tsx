"use client";

import { usePathname } from "next/navigation";

import { CtaBand } from "@/components/marketing/cta-band";
import { primaryCtas } from "@/content/site-content";

/**
 * Sitewide CTA band. Skipped on `/` (homepage has its own closer) and `/contact`
 * (a contact page does not need a "Have a product to build?" block).
 * Pages that render LeadCaptureCta should not also rely on this — see opt-out
 * via pathname prefixes below to avoid back-to-back duplicate bands.
 */
const LEAD_CAPTURE_PREFIXES = [
  "/work",
  "/about",
  "/services",
  "/solutions",
  "/technologies",
  "/process",
  "/industries",
  "/insights",
  "/faq",
  "/careers",
];

export function FooterCtaBand() {
  const pathname = usePathname() ?? "/";

  if (pathname === "/" || pathname === "/contact") return null;
  if (LEAD_CAPTURE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return null;
  }

  return (
    <CtaBand
      eyebrow="Start a project"
      title="Have a product to build or improve?"
      description="Share your scope and timeline — we'll reply within one business day with a clear plan, honest pricing approach, and relevant examples."
      primaryLabel={primaryCtas.book.label}
      primaryHref={primaryCtas.book.href}
      secondaryLabel={primaryCtas.brief.label}
      secondaryHref={primaryCtas.brief.href}
      bordered={false}
    />
  );
}
