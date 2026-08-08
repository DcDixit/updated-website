import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { primaryCtas } from "@/content/site-content";
import { cn } from "@/lib/utils";

type HeroCtaGroupProps = {
  className?: string;
  trackingLocation?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/** One filled primary (book) + text-style secondary (brief). */
export function HeroCtaGroup({
  className,
  trackingLocation = "home-cta",
  primaryLabel = primaryCtas.book.label,
  primaryHref = primaryCtas.book.href,
  secondaryLabel = primaryCtas.brief.label,
  secondaryHref = primaryCtas.brief.href,
}: HeroCtaGroupProps) {
  return (
    <div className={cn("flex max-w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center", className)}>
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
      <Link
        href={secondaryHref}
        className="type-body inline-flex min-h-11 items-center px-1 font-semibold text-[color:var(--text-secondary)] underline-offset-4 transition-colors hover:text-foreground hover:underline"
        data-track="cta_click_secondary"
        data-track-location={trackingLocation}
        data-track-label={secondaryLabel}
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
