const outcomes = [
  "FleetFlow dispatch handle time → down 32%",
  "PayrollPro activation rate → up 18%",
  "FinanceSync nightly sync → 99.3% reliability",
  "Meridian Shopify launch → paid for itself in Q1",
  "FlowLedger onboarding redesign → done in 6 weeks",
  "US trucking CRM → 400+ daily routes, zero downtime",
  "QuickBooks integration → zero manual reconciliation",
] as const;

export function OutcomeTicker() {
  const items = [...outcomes, ...outcomes];

  return (
    <div
      className="w-full overflow-hidden border-y border-primary-light bg-primary py-3"
      aria-label="Client outcomes"
    >
      <div className="animate-ticker flex w-max whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-3 px-8 text-sm font-medium text-white/80"
          >
            <span className="font-semibold text-accent">↑</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
