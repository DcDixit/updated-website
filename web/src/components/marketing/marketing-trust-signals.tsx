import Link from "next/link";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconShieldCheck,
} from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import {
  certificationBadges,
  clientLogos,
  primaryCtas,
  stats,
} from "@/content/site-content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MarketingTrustSignalsProps = {
  className?: string;
  withStats?: boolean;
  withLogos?: boolean;
  withCertifications?: boolean;
  withCta?: boolean;
  /** @deprecated Ratings removed - kept for call-site compatibility */
  withRatings?: boolean;
  /** @deprecated Testimonials removed - kept for call-site compatibility */
  withTestimonials?: boolean;
};

export function MarketingTrustSignals({
  className,
  withStats = true,
  withLogos = true,
  withCertifications = true,
  withCta = true,
}: MarketingTrustSignalsProps) {
  const miniStats = stats.slice(0, 3);

  return (
    <div className={cn("space-y-10", className)}>
      {withStats ? (
        <div className="grid gap-4 sm:grid-cols-3">
          {miniStats.map((s) => (
            <div key={s.label} className="surface-card stat-card-accent p-6 text-center sm:text-left">
              <p className="type-stat text-brand-cobalt dark:text-brand-amber">{s.value}</p>
              <p className="type-stat-label mt-2">{s.label}</p>
              <p className="type-caption mt-1">{s.caption}</p>
            </div>
          ))}
        </div>
      ) : null}

      {withLogos ? (
        <div className="surface-card px-5 py-6 sm:px-8">
          <p className="type-badge-label mb-4 text-center sm:text-left">Industries we focus on</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-start">
            {clientLogos.map((client) => (
              <div key={client.name} className="flex flex-col items-center gap-1.5 text-center">
                <Image
                  src={client.logoSrc}
                  alt=""
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain dark:brightness-110"
                  aria-hidden
                />
                <span className="text-xs font-semibold text-foreground">{client.name}</span>
                <span className="text-[11px] text-text-secondary-v2">{client.industry}</span>
              </div>
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

      {withCta ? (
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:justify-start">
          <Link href={primaryCtas.book.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "btn-accent-glow gap-2 min-h-11")}>
            {primaryCtas.book.label}
            <IconArrowUpRight size={16} className="opacity-80" aria-hidden stroke={1.5} />
          </Link>
          <Link href={primaryCtas.brief.href} className="type-body font-semibold text-[color:var(--text-secondary)] underline-offset-4 hover:underline">
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
        "relative overflow-hidden scroll-mt-[var(--header-offset)] border-y border-surface-card-border bg-surface-alt py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <Container className="relative z-10 max-w-6xl">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="eyebrow-amber">How we work</p>
          <h2 className="type-h2 font-heading text-balance text-text-primary-v2">Clear ownership. Measurable delivery.</h2>
          <p className="type-body font-body text-text-secondary-v2">
            In-house design and engineering, NDA-first collaboration, and weekly demos - without fabricated review scores.
          </p>
        </div>
        {children}
      </Container>
    </section>
  );
}

