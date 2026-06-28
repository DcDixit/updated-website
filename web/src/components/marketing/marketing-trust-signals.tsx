import Link from "next/link";
import {
  IconArrowUpRight,
  IconExternalLink,
  IconQuote,
  IconShieldCheck,
  IconStarFilled,
} from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import {
  certificationBadges,
  clientLogos,
  primaryCtas,
  reviewSignals,
  stats,
  testimonials,
} from "@/content/site-content";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function StarFive({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-0.5 text-[var(--color-accent)]", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStarFilled key={i} size={14} className="sm:size-4" />
      ))}
    </div>
  );
}

type MarketingTrustSignalsProps = {
  className?: string;
  withTestimonials?: boolean;
  withStats?: boolean;
  withLogos?: boolean;
  withRatings?: boolean;
  withCertifications?: boolean;
  withCta?: boolean;
};

export function MarketingTrustSignals({
  className,
  withTestimonials = true,
  withStats = true,
  withLogos = true,
  withRatings = true,
  withCertifications = true,
  withCta = true,
}: MarketingTrustSignalsProps) {
  const miniStats = stats.slice(0, 3);
  const miniQuotes = testimonials.slice(0, 2);

  return (
    <div className={cn("space-y-10", className)}>
      {withRatings ? (
        <div className="grid gap-4 sm:grid-cols-1">
          {reviewSignals.map((r) => (
            <Link
              key={r.source}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card group block p-6 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-[0_4px_16px_color-mix(in_oklab,var(--color-accent)_6%,transparent)] sm:p-7"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="space-y-2">
                  <p className="type-badge-label">{r.source}</p>
                  <p className="type-h3 text-foreground">{r.headline}</p>
                  <p className="type-caption">{r.subtitle}</p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                  <StarFive />
                  <span className="type-caption flex items-center gap-1 text-[10px] text-[color:var(--text-secondary)]">
                    View reviews
                    <IconExternalLink size={10} className="opacity-70" aria-hidden stroke={1.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : null}

      {withStats ? (
        <div className="grid gap-4 sm:grid-cols-3">
          {miniStats.map((s) => (
            <div key={s.label} className="surface-card stat-card-accent p-6 text-center sm:text-left">
              <p className="type-stat text-[var(--color-accent)]">{s.value}</p>
              <p className="type-stat-label mt-2">{s.label}</p>
              <p className="type-caption mt-1">{s.caption}</p>
            </div>
          ))}
        </div>
      ) : null}

      {withLogos ? (
        <div className="surface-card px-5 py-6 sm:px-8">
          <p className="type-badge-label mb-4 text-center sm:text-left">Industries &amp; verticals we deliver for</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {clientLogos.map((client) => (
              <Badge key={client.name} variant="secondary" className="gap-1.5 px-3 py-1 font-normal">
                <span className="size-1.5 shrink-0 rounded-full bg-[var(--color-accent)] opacity-70" aria-hidden />
                {client.name}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}

      {withCertifications ? (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          {certificationBadges.map((c) => (
            <span
              key={c}
              className="surface-card inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium text-[color:var(--text-secondary)]"
            >
              <IconShieldCheck size={14} className="shrink-0 text-[var(--color-accent)]" aria-hidden stroke={1.5} />
              {c}
            </span>
          ))}
        </div>
      ) : null}

      {withTestimonials ? (
        <>
          <Separator className="bg-[var(--section-divider)]" />
          <div className="grid gap-5 lg:grid-cols-2">
            {miniQuotes.map((t, i) => (
              <div key={`${t.name}-${i}`} className="testimonial-card relative p-6 sm:p-7">
                <IconQuote
                  size={32}
                  stroke={1.5}
                  className="absolute right-5 top-5 rotate-180 text-[var(--color-accent)]/30"
                  aria-hidden
                />
                <StarFive className="mb-4" />
                <blockquote className="type-body text-foreground">
                  <span className="quote-open" />
                  {t.quote}
                </blockquote>
                <footer className="type-caption mt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-foreground">{t.name}</span>
                    {" · "}
                    {t.role}
                    {" · "}
                    {t.company}
                  </cite>
                </footer>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {withCta ? (
        <div className="flex flex-wrap justify-center gap-3 pt-2 sm:justify-start">
          <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "btn-accent-glow gap-2")}>
            {primaryCtas.book.label}
            <IconArrowUpRight size={16} className="opacity-80" aria-hidden stroke={1.5} />
          </Link>
          <Link href={primaryCtas.brief.href} className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
            {primaryCtas.brief.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function MarketingTrustSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "scroll-mt-[var(--header-offset)] border-y border-[var(--section-divider)] bg-[var(--surface-muted)] py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <Container className="max-w-6xl">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="highlight-badge">
            <span className="accent-live-dot" aria-hidden />
            Proof
          </p>
          <h2 className="type-h2 text-balance text-foreground">Verified ratings. Real outcomes.</h2>
          <p className="type-body text-[color:var(--text-secondary)]">
            Google ratings, delivery metrics, and client feedback from recent engagements.
          </p>
        </div>
        {children}
      </Container>
    </section>
  );
}
