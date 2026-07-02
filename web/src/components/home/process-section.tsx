import {
  IconSearch,
  IconPencil,
  IconCode,
  IconRocket,
  IconHeartHandshake,
} from "@tabler/icons-react";

import type { HomepageProcessStep } from "@/data/homepage";
import { cn } from "@/lib/utils";

const stepIcons = [
  IconSearch,
  IconPencil,
  IconCode,
  IconRocket,
  IconHeartHandshake,
];

type ProcessSectionProps = {
  steps: readonly HomepageProcessStep[];
  className?: string;
};

export function ProcessSection({ steps, className }: ProcessSectionProps) {
  return (
    <div className={className}>
      <div className="mb-12 max-w-2xl space-y-3">
        <p className="type-badge-label text-[11px] uppercase tracking-widest text-[color:var(--text-secondary)]">
          How we work
        </p>
        <h2 className="type-h2 text-foreground text-balance">
          From first brief to live product — a clear process.
        </h2>
        <p className="type-body text-[color:var(--text-secondary)]">
          No black-box sprints. You see the work at every stage, own all deliverables, and stay in control throughout.
        </p>
      </div>

      <ol className="relative grid gap-8 md:grid-cols-5 md:gap-0">
        {/* Desktop connector line */}
        <div
          className="pointer-events-none absolute hidden md:block"
          aria-hidden
          style={{
            top: "1.625rem",
            left: "calc(10% + 1.375rem)",
            right: "calc(10% + 1.375rem)",
            height: "2px",
            background: `repeating-linear-gradient(
              to right,
              color-mix(in oklab, var(--color-accent) 30%, transparent) 0,
              color-mix(in oklab, var(--color-accent) 30%, transparent) 6px,
              transparent 6px,
              transparent 12px
            )`,
          }}
        />

        {steps.map((step, index) => {
          const Icon = stepIcons[index] ?? IconSearch;
          const isLast = index === steps.length - 1;

          return (
            <li key={step.title} className="relative flex flex-col items-start md:items-center md:px-4 md:text-center">
              {/* Mobile connector line */}
              {!isLast ? (
                <span
                  className="absolute left-[1.375rem] top-[3.5rem] bottom-0 w-px md:hidden"
                  style={{
                    background: `repeating-linear-gradient(
                      to bottom,
                      color-mix(in oklab, var(--color-accent) 30%, transparent) 0,
                      color-mix(in oklab, var(--color-accent) 30%, transparent) 5px,
                      transparent 5px,
                      transparent 10px
                    )`,
                  }}
                  aria-hidden
                />
              ) : null}

              {/* Step number + icon */}
              <div className="relative z-[1] flex flex-col items-center gap-0 md:items-center">
                <span
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-full",
                    "bg-[var(--color-accent)] text-[#0D0D0D]",
                    "shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-accent)_15%,transparent)]"
                  )}
                  aria-label={`Step ${index + 1}`}
                >
                  <Icon size={20} stroke={2} aria-hidden />
                </span>
              </div>

              <div className="mt-4 space-y-1.5 pl-14 md:pl-0">
                <div className="flex items-center gap-2 md:justify-center">
                  <span className="type-caption text-[10px] tabular-nums font-semibold text-[var(--color-accent)] opacity-80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-h3 text-foreground">{step.title}</h3>
                </div>
                <p className="type-body max-w-none text-sm text-[color:var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
