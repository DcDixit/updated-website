"use client";

const OUTCOMES = [
  "SaaS onboarding redesign → shipped in weeks, not quarters",
  "Dispatch console → fewer screens, faster exception handling",
  "QuickBooks / Xero sync → nightly reconciliation operators trust",
  "Design system + handoff → maintainable after launch",
] as const;

export function OutcomeTicker() {
  const doubled = [...OUTCOMES, ...OUTCOMES];

  return (
    <div className="overflow-hidden border-y border-[var(--surface-border)] bg-[var(--surface-muted)] py-3" aria-hidden>
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-10 whitespace-nowrap px-4">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="type-caption text-[color:var(--text-secondary)]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

