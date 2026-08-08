import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import {
  clientLogosWorkedWith,
  type ClientLogo,
  type ClientLogoFit,
} from "@/content/clients";
import { cn } from "@/lib/utils";

type HomeClientsSectionProps = {
  className?: string;
  /** Override logos at the call site without editing this component. */
  logos?: readonly ClientLogo[];
};

const logoFitClasses: Record<ClientLogoFit, string> = {
  wide: "max-h-9 max-w-[10rem] sm:max-h-10 sm:max-w-[11rem]",
  default: "max-h-9 max-w-[9rem] sm:max-h-10 sm:max-w-[10rem]",
  tall: "max-h-11 max-w-[7.5rem] sm:max-h-12 sm:max-w-[8.25rem]",
};

function ClientLogoTile({ client }: { client: ClientLogo }) {
  const fit = client.logoFit ?? "default";
  const scale = client.logoScale ?? 1;

  return (
    <li className="list-none">
      <div
        className={cn(
          "group/logo client-logo-tile flex h-[4.5rem] items-center justify-center px-4",
          "rounded-[0.75rem] border border-black/[0.08] bg-white",
          "transition-[border-color,opacity,filter] duration-160",
          "opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:border-[color-mix(in_oklab,var(--color-accent)_28%,transparent)]"
        )}
      >
        <Image
          src={client.logoSrc}
          alt={`${client.name} logo`}
          width={176}
          height={64}
          loading="lazy"
          style={{ width: "auto", height: "auto" }}
          className={cn(
            "h-auto w-auto object-contain",
            logoFitClasses[fit],
            scale === 1.05 && "scale-[1.05]",
            scale === 1.1 && "scale-[1.1]"
          )}
        />
      </div>
    </li>
  );
}

/** Static responsive client logo grid — 3 / 4 / 5 columns. */
export function HomeClientsSection({
  className,
  logos = clientLogosWorkedWith,
}: HomeClientsSectionProps) {
  return (
    <SectionShell
      id="clients"
      size="default"
      className={cn("bg-[var(--surface-muted)]", className)}
      aria-labelledby="clients-heading"
    >
      <Reveal>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Trusted by"
              title={<>Logistics operators and product teams we&apos;ve shipped with.</>}
              description="Trucking, moving, and auto-transport first — plus product and brand teams across fintech, retail, and services."
              align="center"
              titleId="clients-heading"
            />
          </div>

          <ul
            className="mt-10 grid list-none grid-cols-3 gap-4 md:grid-cols-4 md:gap-6 lg:mt-12 lg:grid-cols-5 lg:gap-6"
            aria-label="Client logos"
          >
            {logos.map((client) => (
              <ClientLogoTile key={client.name} client={client} />
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--section-divider)] pt-6 text-center sm:mt-10 sm:flex-row sm:text-left">
            <p className="type-caption max-w-xl text-[color:var(--text-secondary)]">
              Some engagements remain under NDA.
            </p>
            <Link
              href="/work"
              className="type-caption inline-flex shrink-0 items-center gap-1.5 font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-85"
            >
              Explore case studies
              <IconArrowUpRight size={14} stroke={1.75} aria-hidden />
            </Link>
          </div>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
