import Image from "next/image";

import { clientProductLogos } from "@/content/visuals";
import { cn } from "@/lib/utils";

function LogoItem({ name, src, alt }: (typeof clientProductLogos)[number]) {
  return (
    <div
      className={cn(
        "inline-flex h-12 min-w-[140px] shrink-0 items-center justify-center px-6",
        "opacity-75 transition-all duration-200",
        "hover:opacity-100"
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={40}
        className="h-8 w-auto max-w-[120px] object-contain dark:brightness-110"
        unoptimized
      />
      <span className="sr-only">{name}</span>
    </div>
  );
}

export function LogoMarquee() {
  const track = [...clientProductLogos, ...clientProductLogos];

  return (
    <section className="relative overflow-hidden border-y border-surface-card-border bg-surface-alt py-10">
      <div className="glow-amber pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative z-10">
        <p className="mb-6 text-center font-body text-[11px] font-bold tracking-[1.2px] text-text-muted-v2 uppercase">
          Products we&apos;ve designed &amp; shipped
        </p>

        <div className="marquee-fade overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-8 px-4">
            {track.map((logo, index) => (
              <LogoItem key={`${logo.name}-${index}`} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
