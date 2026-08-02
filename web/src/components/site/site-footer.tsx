import Link from "next/link";
import {
  IconArrowUpRight,
  IconBrandDribbble,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { FooterCtaBand } from "@/components/site/footer-cta-band";
import { SiteLogo } from "@/components/site/site-logo";
import {
  brand,
  footerColumns,
  primaryCtas,
  socialLinks,
  siteContact,
} from "@/content/site-content";
import { cn } from "@/lib/utils";

const socialIconMap = {
  LinkedIn: IconBrandLinkedin,
  Instagram: IconBrandInstagram,
  X: IconBrandX,
  Dribbble: IconBrandDribbble,
} as const;

const taglineLines = brand.tagline.split(". ").map((line) => line.replace(/\.$/, ""));

function FooterNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="link-accent-underline inline-block text-[0.9375rem] leading-snug text-[color:var(--text-secondary)] transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--section-divider)]">
      <FooterCtaBand />

      <div className="relative overflow-hidden bg-[var(--surface-muted)]">
        <p className="footer-watermark" aria-hidden>
          {brand.shortName}
        </p>

        <Container className="relative py-16 lg:py-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-lg">
              <SiteLogo />
              <h2 className="mt-8 text-pretty text-[clamp(1.5rem,3vw,2.125rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground">
                {taglineLines.map((line, index) => (
                  <span key={line} className="block">
                    {index === 1 ? (
                      <span className="text-[var(--color-accent)]">{line}.</span>
                    ) : (
                      <>{line}.</>
                    )}
                  </span>
                ))}
              </h2>
              <p className="type-body-wide mt-5 max-w-md text-[color:var(--text-secondary)]">
                {brand.mission}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-5 lg:items-end lg:text-right">
              <div>
                <p className="type-badge-label">Get in touch</p>
                <Link
                  href={`mailto:${siteContact.email}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-[var(--color-accent)]"
                >
                  {siteContact.email}
                  <IconArrowUpRight size={18} stroke={1.5} className="opacity-60" aria-hidden />
                </Link>
              </div>
              <Link
                href={`tel:${siteContact.telHref}`}
                className="type-caption font-medium text-[color:var(--text-secondary)] transition-colors hover:text-foreground"
              >
                {siteContact.displayPhone}
              </Link>
              <p className="type-caption max-w-xs text-[color:var(--text-secondary)]">
                {siteContact.hqLabel}
              </p>
              <Link
                href={primaryCtas.book.href}
                className="link-accent-underline type-caption inline-flex items-center gap-1 font-semibold text-[var(--color-accent)]"
              >
                {primaryCtas.book.label}
                <IconArrowUpRight size={14} stroke={1.75} aria-hidden />
              </Link>
            </div>
          </div>

          <nav className="mt-14 lg:mt-16" aria-label="Footer navigation">
            <div className="grid gap-y-10 sm:grid-cols-3 sm:gap-y-0">
              {footerColumns.map((col, index) => (
                <div
                  key={col.heading}
                  className={cn(
                    "sm:px-8",
                    index === 0 && "sm:pl-0",
                    index === footerColumns.length - 1 && "sm:pr-0",
                    index > 0 && "sm:border-l sm:border-[var(--section-divider)]"
                  )}
                >
                  <p className="type-badge-label mb-5 inline-flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
                    {col.heading}
                  </p>
                  <ul className="space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <FooterNavLink href={l.href} label={l.label} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <div className="mt-12 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
            <p className="type-caption order-3 lg:order-1">
              © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
            </p>

            <div className="type-caption order-1 flex flex-wrap items-center gap-x-4 gap-y-2 lg:order-2">
              <Link href="/privacy" className="link-accent-underline transition-colors hover:text-foreground">
                Privacy
              </Link>
              <span className="text-[color:var(--section-divider)]" aria-hidden>
                ·
              </span>
              <Link href="/terms" className="link-accent-underline transition-colors hover:text-foreground">
                Terms
              </Link>
              <span className="text-[color:var(--section-divider)]" aria-hidden>
                ·
              </span>
              <span>{siteContact.responseTime}</span>
            </div>

            <ul className="order-2 flex items-center gap-5 lg:order-3" aria-label="Social links">
              {socialLinks.map((s) => {
                const SocialIcon = socialIconMap[s.label as keyof typeof socialIconMap];
                return (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-[color:var(--text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      {SocialIcon ? <SocialIcon size={18} stroke={1.5} aria-hidden /> : s.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

