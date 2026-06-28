import { cn } from "@/lib/utils";

/** Alternating section surfaces - prefer `default`, `muted`, or `contrast`. */
export type SectionTone =
  | "default"
  | "muted"
  | "contrast"
  /** @deprecated Use `muted` */
  | "soft"
  /** @deprecated Use `contrast` */
  | "panel"
  /** @deprecated Use `muted` */
  | "band"
  /** @deprecated Use `contrast` */
  | "depth"
  /** @deprecated Use `contrast` */
  | "glow";

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background",
  muted: "border-y border-[var(--section-divider)] bg-[var(--surface-muted)]",
  contrast: "border-y border-[var(--section-divider)] bg-card/60",
  soft: "border-y border-[var(--section-divider)] bg-[var(--surface-muted)]",
  panel: "border-y border-[var(--section-divider)] bg-card/60",
  band: "border-y border-[var(--section-divider)] bg-[var(--surface-muted)]",
  depth: "border-y border-[var(--section-divider)] bg-card/60",
  glow: "border-y border-[var(--section-divider)] bg-[var(--surface-muted)]",
};

export function Section({
  id,
  tone = "default",
  className,
  children,
  dividerTop,
  dividerBottom,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
  dividerTop?: boolean;
  dividerBottom?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[var(--space-section-y)] scroll-mt-[var(--header-offset)]",
        toneClasses[tone],
        dividerTop &&
          "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-[var(--section-divider)]",
        dividerBottom &&
          "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-px after:bg-[var(--section-divider)]",
        className
      )}
    >
      {children}
    </section>
  );
}
