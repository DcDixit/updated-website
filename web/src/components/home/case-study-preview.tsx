import type { ReactElement } from "react";

import type { HomepageCaseStudySlug } from "@/data/homepage";
import { cn } from "@/lib/utils";

function FleetFlowPreview() {
  const dots = [
    [20, 25], [45, 40], [70, 30], [95, 55], [120, 35], [145, 60], [170, 45], [195, 70],
    [30, 65], [55, 80], [80, 55], [105, 90], [130, 75], [155, 95], [180, 85],
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#1A1A1A] p-4">
      <svg viewBox="0 0 220 148" className="h-full w-full" aria-hidden>
        <defs>
          <pattern id="fleet-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="220" height="148" fill="url(#fleet-grid)" />
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="var(--color-accent)" opacity={0.5 + (i % 3) * 0.15} />
        ))}
      </svg>
      <span className="absolute bottom-3 right-3 rounded-md border border-[var(--color-accent)]/40 bg-[#0D0D0D]/90 px-2 py-1 text-[10px] font-medium text-[var(--color-accent)]">
        400+ daily routes
      </span>
    </div>
  );
}

function PayrollProPreview() {
  const headers = ["Role", "View", "Edit", "Admin"];
  const rows = [
    [true, true, false, false],
    [true, false, false, false],
    [true, true, true, false],
  ];

  return (
    <div className="flex h-full w-full flex-col rounded-lg bg-[#1A1A1A] p-4">
      <div className="grid grid-cols-4 gap-2 border-b border-white/10 pb-2">
        {headers.map((h) => (
          <span key={h} className="text-[9px] font-medium text-[color:var(--text-secondary)]">
            {h}
          </span>
        ))}
      </div>
      {rows.map((row, ri) => (
        <div key={ri} className="grid grid-cols-4 gap-2 border-b border-white/5 py-2 last:border-0">
          <span className="text-[9px] text-foreground">Team {ri + 1}</span>
          {row.map((checked, ci) => (
            <span key={ci} className="flex justify-center">
              {checked ? (
                <svg viewBox="0 0 12 12" className="size-3 text-[var(--color-accent)]" aria-hidden>
                  <path
                    d="M2 6 L5 9 L10 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span className="size-3 rounded-sm border border-white/15" aria-hidden />
              )}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function FinanceSyncPreview() {
  const items = ["QuickBooks · Invoices", "Xero · Payroll", "Stripe · Payouts", "Bank · Reconciliation", "CRM · Contacts"];

  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 rounded-lg bg-[#1A1A1A] p-4">
      {items.map((label) => (
        <div key={label} className="flex items-center gap-2 rounded-md border border-white/10 bg-[#141414] px-2.5 py-2">
          <svg viewBox="0 0 12 12" className="size-3 shrink-0 text-[var(--color-accent)]" aria-hidden>
            <path
              d="M2 6 L5 9 L10 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-[color:var(--text-secondary)]">{label}</span>
          <span className="ml-auto text-[9px] text-[var(--color-accent)]">Synced</span>
        </div>
      ))}
    </div>
  );
}

const previews: Record<HomepageCaseStudySlug, () => ReactElement> = {
  "fleetflow-dispatch": FleetFlowPreview,
  "payroll-pro-saas": PayrollProPreview,
  "finance-sync-hub": FinanceSyncPreview,
};

export function CaseStudyPreview({
  slug,
  className,
}: {
  slug: HomepageCaseStudySlug;
  className?: string;
}) {
  const Preview = previews[slug];
  return (
    <div className={cn("h-[180px] overflow-hidden rounded-lg", className)}>
      <Preview />
    </div>
  );
}
