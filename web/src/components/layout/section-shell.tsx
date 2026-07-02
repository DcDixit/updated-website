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
  className,
  children,
  ...rest
}: {
  id?: string;
  size?: SectionShellSize;
  bordered?: boolean;
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
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
