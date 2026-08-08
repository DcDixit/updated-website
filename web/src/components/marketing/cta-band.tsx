import Link from "next/link";
import { IconArrowUpRight, IconShieldCheck, IconClock, IconSparkles } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { primaryCtas } from "@/content/site-content";
import { cn } from "@/lib/utils";

const trustPills = [
  { icon: IconClock, label: "Replies in 24 hours" },
  { icon: IconShieldCheck, label: "NDA on request" },
  { icon: IconSparkles, label: "No commitment required" },
];

type CtaBandProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: "left" | "center";
  className?: string;
  bordered?: boolean;
  trackingLocation?: string;
  showTrustPills?: boolean;
};

export function CtaBand({
  title,
  description,
  eyebrow,
  primaryLabel = primaryCtas.book.label,
  primaryHref = primaryCtas.book.href,
  secondaryLabel = primaryCtas.brief.label,
  secondaryHref = primaryCtas.brief.href,
  align = "left",
  className,
  bordered = false,
  trackingLocation = "cta-band",
  showTrustPills = true,
}: CtaBandProps) {
  const centered = align === "center";

  return (
    <SectionShell size="default" bordered={bordered} className={cn("bg-[var(--surface-muted)]", className)}>
      <Container>
        <div
          className={cn(
            "cta-band-premium relative overflow-hidden rounded-[var(--card-radius)] p-6 sm:p-8 lg:p-10",
            centered ? "flex flex-col items-center text-center" : "flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full opacity-[0.06] blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
          />

          <div className={cn("relative space-y-3", centered && "max-w-2xl")}>
            {eyebrow ? (
              <p className="highlight-badge">
                <span aria-hidden className="status-dot" />
                {eyebrow}
              </p>
            ) : null}
            <h2 className="type-h2 text-foreground text-balance">{title}</h2>
            {description ? (
              <p className={cn("type-body text-[color:var(--text-secondary)]", centered && "mx-auto")}>
                {description}
              </p>
            ) : null}
            {showTrustPills ? (
              <div className={cn("flex flex-wrap gap-4 pt-1", centered && "justify-center")}>
                {trustPills.map(({ icon: TrustIcon, label }) => (
                  <span key={label} className="trust-badge">
                    <TrustIcon size={13} stroke={1.75} aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className={cn("relative flex w-full flex-col gap-3 sm:w-auto sm:items-start", centered && "items-center")}>
            <Link
              href={primaryHref}
              className={cn(buttonVariants({ variant: "primary", size: "cta" }), "btn-accent-glow gap-2 min-h-11")}
              data-track="cta_click"
              data-track-location={trackingLocation}
              data-track-label={primaryLabel}
            >
              {primaryLabel}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            {secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="type-body inline-flex min-h-11 items-center font-semibold text-[color:var(--text-secondary)] underline-offset-4 transition-colors hover:text-foreground hover:underline"
                data-track="cta_click_secondary"
                data-track-location={trackingLocation}
                data-track-label={secondaryLabel}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

