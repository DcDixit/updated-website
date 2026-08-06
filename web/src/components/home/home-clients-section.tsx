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
};

const logoFitClasses: Record<ClientLogoFit, string> = {
  wide: "max-h-[2.125rem] max-w-[86%] sm:max-h-9",
  default: "max-h-[2rem] max-w-[80%] sm:max-h-[2.125rem]",
  tall: "max-h-[2.375rem] max-w-[68%] sm:max-h-10",
};

function ClientLogoCell({ client, index }: { client: ClientLogo; index: number }) {
  const fit = client.logoFit ?? "default";
  const scale = client.logoScale ?? 1;

  return (
    <li
      className="client-logo-cell clients-grid-item bg-[var(--card)]"
      style={{ animationDelay: `${Math.min(index, 12) * 35}ms` }}
      aria-label={`${client.name}${client.industry ? `, ${client.industry}` : ""}`}
    >
      <div
        className={cn(
          "group/cell relative flex h-full min-h-[4.5rem] items-center justify-center px-4 py-3 sm:min-h-[5rem] sm:px-5",
          "transition-[background-color] duration-300",
          "hover:bg-[color-mix(in_oklab,var(--color-accent)_4%,var(--card))]"
        )}
      >
        <Image
          src={client.logoSrc}
          alt=""
          width={160}
          height={52}
          className={cn(
            "h-auto w-auto object-contain opacity-[0.82]",
            "grayscale-[0.35] transition-[filter,opacity,transform] duration-300",
            "group-hover/cell:scale-[1.03] group-hover/cell:opacity-100 group-hover/cell:grayscale-0",
            "motion-reduce:transform-none motion-reduce:transition-none",
            logoFitClasses[fit],
            scale === 0.95 && "scale-[0.95] group-hover/cell:scale-[0.98]",
            scale === 1.05 && "scale-[1.05] group-hover/cell:scale-[1.08]",
            scale === 1.15 && "scale-[1.15] group-hover/cell:scale-[1.18]"
          )}
        />
      </div>
    </li>
  );
}

function ClientsLogoGrid() {
  return (
    <div className="clients-logo-wall clients-grid-enter overflow-hidden rounded-[var(--bento-radius)] border border-[var(--surface-border)] bg-[var(--section-divider)] shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_28px_rgba(0,0,0,0.04)]">
      <ul
        className="clients-logo-grid list-none gap-px"
        aria-label="Client logos"
      >
        {clientLogosWorkedWith.map((client, index) => (
          <ClientLogoCell key={client.name} client={client} index={index} />
        ))}
      </ul>
    </div>
  );
}

/** Client trust section - header, stats, and uniform logo grid. */
export function HomeClientsSection({ className }: HomeClientsSectionProps) {
  return (
    <SectionShell
      id="clients"
      size="default"
      className={cn("bg-[var(--surface-muted)]/45", className)}
      aria-labelledby="clients-heading"
    >
      <Reveal>
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="Trusted by"
              title={
                <>
                  Clients we&apos;ve worked with.
                </>
              }
              description="Logos from companies we've designed and built products for - across logistics, transportation, commerce, and professional services."
              align="center"
              titleId="clients-heading"
              className="[&_h2]:mx-auto [&_p]:mx-auto"
              descriptionClassName="max-w-2xl"
            />
          </div>

          <div className="mt-10 sm:mt-12">
            <ClientsLogoGrid />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 border-t border-[var(--section-divider)] pt-6 text-center sm:mt-10 sm:flex-row sm:justify-between sm:pt-8 sm:text-left">
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

