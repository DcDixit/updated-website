import type { HomepageClient } from "@/data/homepage";
import { cn } from "@/lib/utils";

type HomeClientLogoStripProps = {
  clients: readonly HomepageClient[];
  className?: string;
};

function TechLabel({ client }: { client: HomepageClient }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface-muted)] px-4 py-2">
      <span className="size-1.5 rounded-full bg-[var(--color-accent)] opacity-80" aria-hidden />
      <span className="type-caption whitespace-nowrap text-[12px] font-medium text-[color:var(--text-secondary)]">
        {client.name}
      </span>
    </div>
  );
}

export function HomeClientLogoStrip({ clients, className }: HomeClientLogoStripProps) {
  const doubled = [...clients, ...clients];

  return (
    <section
      className={cn("border-y border-[var(--surface-border)] bg-background py-7", className)}
      aria-label="Technologies and platforms we work with"
    >
      <p className="type-badge-label mb-5 text-center text-[11px] uppercase tracking-widest text-[color:var(--text-secondary)]">
        Technologies &amp; platforms we work with
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />
        <div className="home-client-marquee flex w-max gap-3 px-4">
          {doubled.map((client, i) => (
            <TechLabel key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
