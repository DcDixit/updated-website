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
  muted: "border-y border-[var(--surface-border)] bg-[var(--surface-muted)]",
  contrast: "border-y border-[var(--surface-border)] bg-[var(--v2-surface-contrast)]",
  soft: "border-y border-[var(--surface-border)] bg-[var(--surface-muted)]",
  panel: "border-y border-[var(--surface-border)] bg-[var(--v2-surface-contrast)]",
  band: "border-y border-[var(--surface-border)] bg-[var(--surface-muted)]",
  depth: "border-y border-[var(--surface-border)] bg-[var(--v2-surface-contrast)]",
  glow: "border-y border-[var(--surface-border)] bg-[var(--surface-muted)]",
};

export function Section({
  id,
  tone = "default",
  glow,
  className,
  children,
  dividerTop,
  dividerBottom,
}: {
  id?: string;
  tone?: SectionTone;
  glow?: "cobalt" | "amber" | "dual";
  className?: string;
  children: React.ReactNode;
  dividerTop?: boolean;
  dividerBottom?: boolean;
}) {
  const glowClass =
    glow === "cobalt" ? "glow-cobalt" : glow === "amber" ? "glow-amber" : glow === "dual" ? "glow-dual" : null;

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden section",
        toneClasses[tone],
        dividerTop &&
          "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-[var(--surface-border)]",
        dividerBottom &&
          "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-px after:bg-[var(--surface-border)]",
        className
      )}
    >
      {glowClass ? <div className={glowClass} aria-hidden="true" /> : null}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

