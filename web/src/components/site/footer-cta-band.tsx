"use client";

import { usePathname } from "next/navigation";

import { CtaBand } from "@/components/marketing/cta-band";
import { primaryCtas } from "@/content/site-content";

/** The homepage already ends with its own "Next step" CTA, so the footer band would duplicate it. */
export function FooterCtaBand() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <CtaBand
      eyebrow="Start a project"
      title="Have a product to build or improve?"
      description="Share your scope and timeline - we'll reply within one business day with a clear plan, honest pricing approach, and relevant examples."
      primaryLabel={primaryCtas.brief.label}
      primaryHref={primaryCtas.brief.href}
      secondaryLabel={primaryCtas.book.label}
      secondaryHref={primaryCtas.book.href}
      bordered={false}
    />
  );
}
