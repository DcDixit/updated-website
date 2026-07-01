import {
  IconSearch,
  IconPencil,
  IconCode,
  IconRocket,
  IconHeartHandshake,
} from "@tabler/icons-react";

import type { HomepageProcessStep } from "@/data/homepage";
import { cn } from "@/lib/utils";

const stepIcons = [IconSearch, IconPencil, IconCode, IconRocket, IconHeartHandshake];

type ProcessSectionProps = {
  steps: readonly HomepageProcessStep[];
  className?: string;
};

export function ProcessSection({ steps, className }: ProcessSectionProps) {
  return (
    <div className={className}>
      <div className="mb-12 max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">How we work</p>
        <h2 className="text-h2 text-balance font-bold text-text-primary">
          From brief to live product — you&apos;re in the room the whole time.
        </h2>
        <p className="text-body-lg text-text-secondary">
          No disappearing acts. Every phase has a clear output and a sign-off before we move.
        </p>
      </div>

      <ol className="relative grid gap-8 md:grid-cols-5 md:gap-0">
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
              color-mix(in oklab, var(--color-primary) 30%, transparent) 0,
              color-mix(in oklab, var(--color-primary) 30%, transparent) 6px,
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
              {!isLast ? (
                <span
                  className="absolute bottom-0 left-[1.375rem] top-[3.5rem] w-px md:hidden"
                  style={{
                    background: `repeating-linear-gradient(
                      to bottom,
                      color-mix(in oklab, var(--color-primary) 30%, transparent) 0,
                      color-mix(in oklab, var(--color-primary) 30%, transparent) 5px,
                      transparent 5px,
                      transparent 10px
                    )`,
                  }}
                  aria-hidden
                />
              ) : null}

              <div className="relative z-[1] flex flex-col items-center gap-0">
                <span
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-full",
                    "bg-primary text-white",
                    "shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-primary)_15%,transparent)]"
                  )}
                  aria-label={`Step ${index + 1}`}
                >
                  <Icon size={20} stroke={2} aria-hidden />
                </span>
              </div>

              <div className="mt-4 space-y-1.5 pl-14 md:pl-0">
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  {step.timeEstimate}
                </span>
                <div className="flex items-center gap-2 md:justify-center">
                  <span className="text-[10px] font-semibold tabular-nums text-primary opacity-80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-h3 font-bold text-text-primary">{step.title}</h3>
                </div>
                <p className="max-w-none text-sm text-text-secondary">{step.description}</p>
                <p className="mt-2 text-xs font-semibold text-accent">↳ Deliverable: {step.deliverable}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
