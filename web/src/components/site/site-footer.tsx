import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { brand, footerColumns, siteContact, socialLinks } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-bg-dark text-white/60">
      <div className="h-px w-full bg-accent/30" />
      <Container className="py-16">
        <div className="grid-layout-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-h3 font-bold text-white/90">{brand.shortName}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">{brand.positioning}</p>
            <p className="mt-4 text-xs text-white/40">{siteContact.hqLabel}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-sm text-white/60 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link
              href={`mailto:${siteContact.email}`}
              className="mt-4 inline-flex text-sm font-semibold text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {siteContact.email}
            </Link>
            <p className="mt-6 text-xs text-white/40">
              Replies within 24 hours on business days ·{" "}
              <Link
                href="/contact#book"
                className="text-accent transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Book a call →
              </Link>
            </p>
          </div>

          <div className="col-span-12 grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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

        <Separator className="my-10 bg-white/10" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/40">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
