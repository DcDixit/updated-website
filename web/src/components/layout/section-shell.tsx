import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type SectionShellSize = "hero" | "default" | "compact";

const sizeClasses: Record<SectionShellSize, string> = {
  hero: "py-[var(--space-section-hero)]",
  default: "py-[var(--space-section-y)]",
  compact: "py-[var(--space-section-compact)]",
};

/** Unified marketing section wrapper - use on homepage and inner pages. */
export function SectionShell({
  id,
  size = "default",
  bordered = true,
  glow,
  className,
  children,
  ...rest
}: {
  id?: string;
  size?: SectionShellSize;
  bordered?: boolean;
  glow?: "cobalt" | "amber" | "dual" | "none";
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">) {
  const glowClass =
    glow === "cobalt" ? "glow-cobalt" : glow === "amber" ? "glow-amber" : glow === "dual" ? "glow-dual" : null;

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden scroll-mt-[var(--header-offset)] bg-surface-base",
        sizeClasses[size],
        bordered && "border-b border-surface-card-border",
        className
      )}
      {...rest}
    >
      {glowClass ? <div className={glowClass} aria-hidden="true" /> : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
