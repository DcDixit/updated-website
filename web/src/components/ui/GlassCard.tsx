import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type GlassCardVariant = "default" | "featured" | "accent";

type GlassCardProps = {
  children: ReactNode;
  variant?: GlassCardVariant;
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

const variantStyles: Record<GlassCardVariant, string> = {
  default: cn(
    "bg-surface-card border-surface-card-border",
    "shadow-[var(--glass-card-shadow)]",
    "hover:bg-surface-card-hover hover:border-[color-mix(in_oklab,var(--color-accent)_20%,var(--v2-surface-card-border))]",
    "hover:shadow-[var(--glass-card-shadow-hover)]"
  ),
  featured: cn(
    "bg-surface-card border-[rgba(27,42,107,0.25)] dark:border-[rgba(27,42,107,0.45)]",
    "shadow-[0_4px_32px_rgba(27,42,107,0.10),var(--glass-card-shadow)] dark:shadow-[0_4px_32px_rgba(27,42,107,0.20),0_1px_4px_rgba(0,0,0,0.2)]",
    "hover:bg-surface-card-hover hover:border-[rgba(27,42,107,0.35)] dark:hover:border-[rgba(27,42,107,0.55)]",
    "hover:shadow-[0_12px_40px_rgba(27,42,107,0.15)] dark:hover:shadow-[0_12px_40px_rgba(27,42,107,0.30)]",
    "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2",
    "before:rounded-t-2xl before:bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(27,42,107,0.10)_0%,transparent_70%)] dark:before:bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(27,42,107,0.18)_0%,transparent_70%)]"
  ),
  accent: cn(
    "bg-surface-card border-[rgba(245,158,11,0.25)] dark:border-[rgba(245,158,11,0.35)]",
    "shadow-[0_4px_32px_rgba(245,158,11,0.08)] dark:shadow-[0_4px_32px_rgba(245,158,11,0.12)]",
    "hover:bg-surface-card-hover hover:border-[rgba(245,158,11,0.35)] dark:hover:border-[rgba(245,158,11,0.45)]",
    "hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)] dark:hover:shadow-[0_12px_40px_rgba(245,158,11,0.18)]"
  ),
};

export function GlassCardIcon({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
        "border border-[rgba(27,42,107,0.20)] bg-[rgba(27,42,107,0.08)]",
        "dark:border-[rgba(27,42,107,0.25)] dark:bg-[rgba(27,42,107,0.15)]",
        "text-brand-amber [&>svg]:h-5 [&>svg]:w-5"
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({
  children,
  variant = "default",
  className,
  href,
  onClick,
  icon,
}: GlassCardProps) {
  const classes = cn(
    "glass-card group relative overflow-hidden rounded-2xl border backdrop-blur-[12px]",
    "px-6 py-5 sm:px-8 sm:py-7",
    variantStyles[variant],
    (href || onClick) && "cursor-pointer",
    className
  );

  const content = (
    <>
      {icon ? <GlassCardIcon>{icon}</GlassCardIcon> : null}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={cn(classes, "text-left")} onClick={onClick}>
        {content}
      </button>
    );
  }

  return <div className={classes}>{content}</div>;
}
