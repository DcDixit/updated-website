import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Badge / kicker - pill style with subtle border. Sentence case allowed. */
export const heroEyebrowClassName =
  "hero-eyebrow-badge type-badge-label inline-block rounded-full border border-[var(--surface-border)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] text-[color:var(--text-secondary)]";

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
      {children}
    </p>
  );
}
