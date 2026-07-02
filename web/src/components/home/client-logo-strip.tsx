import Image from "next/image";

import type { HomepageClient } from "@/data/homepage";
import { cn } from "@/lib/utils";

type HomeClientLogoStripProps = {
  clients: readonly HomepageClient[];
  className?: string;
};

function ClientLogo({ client }: { client: HomepageClient }) {
  if (client.logoUrl) {
    return (
      <div className="flex shrink-0 items-center justify-center rounded-xl border border-surface-card-border bg-surface-card px-5 py-2.5">
        <Image
          src={client.logoUrl}
          alt={`${client.name} logo`}
          width={120}
          height={36}
          className="h-7 w-auto max-w-[120px] object-contain dark:brightness-110"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="flex shrink-0 items-center gap-2 rounded-full border border-surface-card-border bg-surface-alt px-4 py-2">
      <span className="size-1.5 rounded-full bg-brand-amber opacity-80" aria-hidden />
      <span className="whitespace-nowrap font-body text-[12px] font-medium text-text-secondary-v2">
        {client.name}
      </span>
    </div>
  );
}

export function HomeClientLogoStrip({ clients, className }: HomeClientLogoStripProps) {
  const doubled = [...clients, ...clients];

  return (
    <section
      className={cn("relative overflow-hidden border-y border-surface-card-border bg-surface-alt py-8", className)}
      aria-label="Client products we've built"
    >
      <div className="glow-amber pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <p className="relative z-10 mb-5 text-center font-body text-[11px] font-bold tracking-[1.2px] text-text-muted-v2 uppercase">
        Client products we&apos;ve shipped
      </p>
      <div className="marquee-fade relative z-10 overflow-hidden">
        <div className="marquee-track flex w-max gap-4 px-4">
          {doubled.map((client, i) => (
            <ClientLogo key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
