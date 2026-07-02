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
    <footer className="border-t border-[var(--section-divider)]">
      <CtaBand
        eyebrow="Start a project"
        title="Have a product to build or improve?"
        description="Share your scope and timeline — we'll reply within one business day with a clear plan, honest pricing approach, and relevant examples."
        primaryLabel={primaryCtas.brief.label}
        primaryHref={primaryCtas.brief.href}
        secondaryLabel={primaryCtas.book.label}
        secondaryHref={primaryCtas.book.href}
        bordered={false}
      />

      <Container className="py-16">
        <div className="grid-layout-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="type-h3 text-foreground">{brand.shortName}</p>
            <p className="type-body mt-4 max-w-md text-[color:var(--text-secondary)]">{brand.positioning}</p>
            <p className="type-caption mt-4">{siteContact.hqLabel}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-caption font-medium underline-offset-4 transition-opacity hover:opacity-80 hover:underline"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              href={`mailto:${siteContact.email}`}
              className="type-caption mt-4 inline-flex font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline"
            >
              {siteContact.email}
            </Link>
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
                        className="type-body inline-block text-[color:var(--text-secondary)] transition-colors hover:text-foreground"
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
          <div className="type-caption flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
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
