"use client";

import { Cpu } from "lucide-react";

import { cn } from "@/lib/utils";

export function TechMarquee({
  labels,
  className,
  dual = false,
}: {
  labels: readonly string[];
  className?: string;
  dual?: boolean;
}) {
  const doubled = [...labels, ...labels];

  const lane = (reverse?: boolean) => (
    <div
      className={cn(
        "surface-card relative overflow-hidden [--marquee-gap:2.75rem]",
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-14 bg-gradient-to-r from-[var(--surface-muted)] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-14 bg-gradient-to-l from-[var(--surface-muted)] to-transparent sm:w-20" />
      <div
        className={cn(
          "flex gap-[var(--marquee-gap)] py-3.5 pl-[var(--marquee-gap)] group-hover/marquee:[animation-play-state:paused]",
          reverse ? "marketing-tech-marquee-reverse" : "marketing-tech-marquee"
        )}
      >
        {doubled.map((label, i) => (
          <span
            key={`${label}-${reverse ? "r" : "f"}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--surface-border)] bg-background px-4 py-1.5 text-xs font-medium tracking-tight text-[color:var(--text-secondary)] transition-colors hover:border-[var(--color-accent)]/35 hover:text-foreground"
          >
            <Cpu className="size-3.5 shrink-0 text-[var(--color-accent)] opacity-80" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={cn("group/marquee space-y-3", className)}>
      {lane(false)}
      {dual ? lane(true) : null}
    </div>
  );
}
