import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** V2 trust pill for hero and page intros. */
export const heroEyebrowClassName =
  "inline-flex items-center rounded-full border border-[var(--hero-badge-border)] bg-[var(--hero-badge-bg)] px-4 py-1.5 font-body text-xs font-medium text-text-secondary-v2";

export function HeroEyebrow({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <p id={id} className={cn(heroEyebrowClassName, className)}>
      <span className="mr-1.5 text-brand-amber" aria-hidden>
        ✦
      </span>
      {children}
    </p>
  );
}
