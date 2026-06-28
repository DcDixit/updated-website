import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Accent pill for hero and page intros — high visibility on light theme. */
export const heroEyebrowClassName =
  "hero-eyebrow-badge highlight-badge type-badge-label inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold normal-case tracking-normal";

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
      <span className="accent-live-dot" aria-hidden />
      {children}
    </p>
  );
}
