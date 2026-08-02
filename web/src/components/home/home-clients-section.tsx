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
  wide: "max-h-9 max-w-[88%] sm:max-h-10",
  default: "max-h-9 max-w-[82%] sm:max-h-10",
  tall: "max-h-10 max-w-[70%] sm:max-h-[2.6rem]",
};

function ClientLogoCard({ client }: { client: ClientLogo }) {
  const fit = client.logoFit ?? "default";
  const scale = client.logoScale ?? 1;

  return (
    <div
      className={cn(
        "group/card relative overflow-hidden rounded-[var(--card-radius)]",
        "border border-[var(--surface-border)] bg-[var(--card)]",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-[color-mix(in_oklab,var(--color-accent)_30%,var(--surface-border))]",
        "hover:shadow-[0_12px_32px_color-mix(in_oklab,var(--foreground)_5%,transparent)]"
      )}
      aria-label={`${client.name}${client.industry ? `, ${client.industry}` : ""}`}
    >
      <div
        className={cn(
          "flex aspect-[5/3] items-center justify-center px-3 py-2.5 sm:px-4 sm:py-3",
          "grayscale-[0.25] transition-[filter] duration-300 group-hover/card:grayscale-0"
        )}
      >
        <Image
          src={client.logoSrc}
          alt=""
          width={160}
          height={52}
          className={cn(
            "h-auto w-auto object-contain",
            logoFitClasses[fit],
            scale === 0.95 && "scale-[0.95]",
            scale === 1.05 && "scale-[1.05]",
            scale === 1.15 && "scale-[1.15]"
          )}
        />
      </div>
    </div>
  );
}

function ClientsLogoGrid() {
  return (
    <div
      className="clients-grid-enter grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
      aria-label="Client logos"
    >
      {clientLogosWorkedWith.map((client) => (
        <ClientLogoCard key={client.name} client={client} />
      ))}
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

