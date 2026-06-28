import type { HomepageClient } from "@/data/homepage";
import { cn } from "@/lib/utils";

type HomeClientLogoStripProps = {
  clients: readonly HomepageClient[];
  className?: string;
};

function TechPill({ client }: { client: HomepageClient }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] px-4 py-2.5 shadow-sm">
      <span
        className="flex size-7 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[10px] font-bold text-[var(--color-accent-strong)]"
        aria-hidden
      >
        {client.name.slice(0, 2).toUpperCase()}
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-foreground">{client.name}</span>
    </div>
  );
}

export function HomeClientLogoStrip({ clients, className }: HomeClientLogoStripProps) {
  const doubled = [...clients, ...clients];

  return (
    <section
      className={cn("border-y border-[var(--surface-border)] bg-[var(--color-accent-soft)]/40 py-8", className)}
      aria-label="Technologies and platforms we build with"
    >
      <p className="type-badge-label mb-6 text-center text-[11px] uppercase tracking-widest text-[var(--color-accent-strong)]">
        Stack we build with
      </p>
      {/* Static grid on larger screens */}
      <div className="hidden flex-wrap justify-center gap-3 px-4 md:flex lg:gap-4">
        {clients.slice(0, 12).map((client) => (
          <TechPill key={client.name} client={client} />
        ))}
      </div>
      {/* Marquee on mobile */}
      <div className="relative overflow-hidden md:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-[var(--color-accent-soft)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-[var(--color-accent-soft)] to-transparent" />
        <div className="home-client-marquee flex w-max gap-3 px-4">
          {doubled.map((client, i) => (
            <TechPill key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
