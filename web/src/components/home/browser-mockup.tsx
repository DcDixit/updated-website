import { cn } from "@/lib/utils";

const navItems = ["Overview", "Dispatch", "Fleet", "Reports", "Settings", "Support"];

const kpis = [
  { label: "Active routes", value: "412" },
  { label: "On-time rate", value: "94%" },
  { label: "Open tickets", value: "18" },
];

export function BrowserMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto w-full min-w-[480px] max-w-[580px] overflow-hidden rounded-xl border border-[var(--surface-border)] bg-[#141414] shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#1a1a1a] px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 rounded-md bg-[#0d0d0d] px-3 py-1.5">
          <p className="truncate text-center text-[11px] text-[color:var(--text-secondary)]">
            app.northline.io/dashboard
          </p>
        </div>
      </div>

      <div className="flex min-h-[320px] lg:min-h-[380px]">
        <aside className="hidden w-[140px] shrink-0 border-r border-white/10 bg-[#111] p-3 sm:block">
          <ul className="space-y-2">
            {navItems.map((item, i) => (
              <li
                key={item}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px]",
                  i === 0 ? "bg-[var(--color-accent)]/15 text-[var(--color-accent)]" : "text-[color:var(--text-secondary)]"
                )}
              >
                <span className="size-3 shrink-0 rounded-sm bg-current opacity-40" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col p-4">
          <div className="grid grid-cols-3 gap-2">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-white/10 bg-[#1a1a1a] p-2.5">
                <p className="text-[9px] text-[color:var(--text-secondary)]">{kpi.label}</p>
                <p className="home-kpi-pulse mt-1 text-lg font-semibold tabular-nums text-[var(--color-accent)]">
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex min-h-0 flex-1 gap-3">
            <div className="flex min-w-0 flex-1 flex-col rounded-lg border border-white/10 bg-[#1a1a1a] p-3">
              <p className="text-[10px] font-medium text-[color:var(--text-secondary)]">Route performance</p>
              <svg viewBox="0 0 240 80" className="mt-2 h-full min-h-[72px] w-full" aria-hidden>
                <polyline
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0,60 30,52 60,48 90,40 120,35 150,28 180,22 210,18 240,12"
                />
                <polyline
                  fill="none"
                  stroke="rgba(168,255,62,0.25)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0,70 30,65 60,58 90,55 120,50 150,45 180,38 210,32 240,28"
                />
              </svg>
            </div>

            <div className="hidden w-[100px] shrink-0 flex-col rounded-lg border border-white/10 bg-[#1a1a1a] p-2.5 sm:flex">
              <p className="mb-2 text-[9px] font-medium text-[color:var(--text-secondary)]">Recent syncs</p>
              <ul className="space-y-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]/60" aria-hidden />
                    <span className="h-1.5 flex-1 rounded bg-white/10" aria-hidden />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
