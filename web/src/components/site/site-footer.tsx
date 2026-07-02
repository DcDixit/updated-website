import Link from "next/link";

import { CtaBand } from "@/components/marketing/cta-band";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import {
  brand,
  footerColumns,
  primaryCtas,
  socialLinks,
  siteContact,
} from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-card-border bg-surface-base">
      <CtaBand
        variant="prominent"
        eyebrow="Start a project"
        title="Have a product to build or improve?"
        description="Share your scope and timeline. We'll reply within one business day with a clear plan, honest pricing, and relevant examples."
        primaryLabel={primaryCtas.brief.label}
        primaryHref={primaryCtas.brief.href}
        secondaryLabel={primaryCtas.book.label}
        secondaryHref={primaryCtas.book.href}
        bordered={false}
      />

      <Container className="py-16">
        <div className="grid-layout-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="type-h3 font-heading font-semibold text-text-primary-v2">{brand.shortName}</p>
            <p className="type-body mt-4 max-w-md font-body text-text-secondary-v2">{brand.positioning}</p>
            <p className="type-caption mt-4">{siteContact.hqLabel}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="type-caption font-medium underline-offset-4 transition-opacity hover:opacity-80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              href={`mailto:${siteContact.email}`}
              className="type-caption mt-4 inline-flex font-semibold text-brand-cobalt underline underline-offset-4 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber dark:text-brand-amber dark:hover:opacity-90"
            >
              {siteContact.email}
            </Link>
            <p className="type-caption mt-6 text-text-muted-v2">
              Replies within 24 hours on business days ·{" "}
              <Link
                href="/contact#book"
                className="font-semibold text-brand-cobalt underline underline-offset-4 transition-colors hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber dark:text-brand-amber"
              >
                Book a call →
              </Link>
            </p>
          </div>

          <div className="col-span-12 grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="type-badge-label mb-4 text-[12px]">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="type-body inline-block font-body text-text-secondary-v2 transition-colors hover:text-text-primary-v2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-[var(--section-divider)]" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-caption">
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="type-caption flex flex-wrap gap-x-4 gap-y-2 text-text-muted-v2">
            <Link href="/privacy" className="transition-colors hover:text-text-primary-v2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-text-primary-v2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber">
              Terms
            </Link>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block size-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
              {siteContact.responseTime}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
