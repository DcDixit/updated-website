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
  glow?: "dual" | "cobalt" | "amber";
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[var(--header-offset)] bg-background",
        sizeClasses[size],
        bordered && "border-b border-[var(--section-divider)]",
        glow === "dual" && "relative overflow-hidden",
        className
      )}
      {...rest}
    >
      {glow === "dual" ? <div className="glow-dual pointer-events-none absolute inset-0" aria-hidden /> : null}
      {children}
    </section>
  );
}

