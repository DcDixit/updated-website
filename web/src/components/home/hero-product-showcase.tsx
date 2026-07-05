import { BrowserMockup } from "@/components/home/browser-mockup";
import { cn } from "@/lib/utils";

type HeroProductShowcaseProps = {
  className?: string;
};

/** Hero visual — product UI mockup with floating outcome metric. */
export function HeroProductShowcase({ className }: HeroProductShowcaseProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[580px]", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in oklab, var(--color-accent) 25%, transparent) 0%, transparent 70%)",
        }}
      />
      <BrowserMockup className="relative w-full min-w-0 max-w-none shadow-2xl" />
      <div
        className="metric-callout absolute -bottom-3 left-4 z-[2] sm:-left-3 sm:bottom-6"
        aria-label="Client outcome: 32 percent reduction in handle time"
      >
        <span className="type-caption font-semibold tabular-nums text-[var(--color-accent)]">−32%</span>
        <span className="type-caption text-[color:var(--text-secondary)]">handle time</span>
      </div>
    </div>
  );
}
