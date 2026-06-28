import Link from "next/link";

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

/** Primary + secondary CTA pair — matches hero styling. */
export function HeroCtaGroup({
  className,
  trackingLocation = "home-cta",
  primaryLabel = "Start a project →",
  primaryHref = primaryCtas.brief.href,
  secondaryLabel = primaryCtas.book.label,
  secondaryHref = primaryCtas.book.href,
}: HeroCtaGroupProps) {
  return (
    <div className={cn("flex max-w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center", className)}>
      <Link
        href={primaryHref}
        className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}
        data-track="cta_click"
        data-track-location={trackingLocation}
        data-track-label={primaryLabel}
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "gap-2")}
        data-track="cta_click_secondary"
        data-track-location={trackingLocation}
        data-track-label={secondaryLabel}
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
