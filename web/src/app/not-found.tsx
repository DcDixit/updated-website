import Link from "next/link";
import type { Metadata } from "next";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { primaryCtas } from "@/content/site-content";
import { buttonVariants } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Page not found",
  description: "The page you requested could not be found. Browse solutions, services, or contact Northline Digital.",
  path: "/404",
});

export default function NotFound() {
  return (
    <SectionShell size="default" className="min-h-[60vh]">
      <Container className="flex max-w-xl flex-col gap-6 py-12">
        <p className="type-badge-label">404</p>
        <h1 className="type-hero text-balance">This page doesn&apos;t exist.</h1>
        <p className="type-body text-[color:var(--text-secondary)]">
          The link may be outdated or the page may have moved. Try one of these instead:
        </p>
        <nav aria-label="Helpful links" className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}
            data-track="cta_click"
            data-track-location="404"
            data-track-label="Back to home"
          >
            Back to home
            <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
          </Link>
          <Link
            href="/solutions"
            className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}
            data-track="cta_click"
            data-track-location="404"
            data-track-label="Browse solutions"
          >
            Browse solutions
          </Link>
          <Link
            href={primaryCtas.brief.href}
            className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}
            data-track="cta_click"
            data-track-location="404"
            data-track-label={primaryCtas.brief.label}
          >
            {primaryCtas.brief.label}
          </Link>
        </nav>
      </Container>
    </SectionShell>
  );
}
