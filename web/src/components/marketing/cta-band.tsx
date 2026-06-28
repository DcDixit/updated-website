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
  variant?: "default" | "prominent";
  className?: string;
  bordered?: boolean;
  trackingLocation?: string;
  showTrustPills?: boolean;
};

export function CtaBand({
  title,
  description,
  eyebrow,
  primaryLabel = primaryCtas.brief.label,
  primaryHref = primaryCtas.brief.href,
  secondaryLabel = primaryCtas.book.label,
  secondaryHref = primaryCtas.book.href,
  align = "left",
  variant = "default",
  className,
  bordered = false,
  trackingLocation = "cta-band",
  showTrustPills = true,
}: CtaBandProps) {
  const centered = align === "center";
  const prominent = variant === "prominent";

  return (
    <SectionShell
      size="default"
      bordered={bordered}
      className={cn(!prominent && "bg-[var(--surface-muted)]", className)}
    >
      <Container>
        <div
          className={cn(
            prominent ? "cta-band-emerald" : "cta-band-premium",
            "relative overflow-hidden rounded-[var(--card-radius)] p-6 sm:p-8 lg:p-10",
            centered ? "flex flex-col items-center text-center" : "flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
          )}
        >
          {/* Background glow */}
          {!prominent ? (
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full opacity-[0.06] blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
            />
          ) : null}

          <div className={cn("relative space-y-3", centered && "max-w-2xl")}>
            {eyebrow ? (
              <p className="highlight-badge">
                <span aria-hidden className="accent-live-dot" />
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

          <div className={cn("relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row", centered && "justify-center")}>
            <Link
              href={primaryHref}
              className={cn(
                buttonVariants({ variant: prominent ? "secondary" : "primary", size: "cta" }),
                !prominent && "btn-accent-glow",
                "gap-2",
                prominent && "border-white/30 bg-white text-[var(--color-accent-strong)] hover:bg-white/95"
              )}
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
                className={cn(
                  buttonVariants({ variant: "secondary", size: "cta" }),
                  "gap-2",
                  prominent && "border-white/40 bg-transparent text-white hover:bg-white/10"
                )}
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
