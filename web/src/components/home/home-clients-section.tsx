import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import {
  clientIndustryHighlights,
  clientLogosWorkedWith,
  type ClientLogo,
  type ClientLogoFit,
} from "@/content/clients";
import { cn } from "@/lib/utils";

type HomeClientsSectionProps = {
  className?: string;
};

const logoFitClasses: Record<ClientLogoFit, string> = {
  wide: "max-h-9 max-w-[10rem] sm:max-h-10 sm:max-w-[11rem]",
  default: "max-h-9 max-w-[9rem] sm:max-h-10 sm:max-w-[10rem]",
  tall: "max-h-11 max-w-[7.5rem] sm:max-h-12 sm:max-w-[8.25rem]",
};

function splitRows(logos: readonly ClientLogo[]) {
  const mid = Math.ceil(logos.length / 2);
  return [logos.slice(0, mid), logos.slice(mid)] as const;
}

function ClientLogoTile({
  client,
  className,
  decorative = false,
}: {
  client: ClientLogo;
  className?: string;
  /** Duplicate marquee copy — hide from AT */
  decorative?: boolean;
}) {
  const fit = client.logoFit ?? "default";
  const scale = client.logoScale ?? 1;

  return (
    <li
      className={cn("shrink-0 list-none", className)}
      aria-hidden={decorative || undefined}
      aria-label={
        decorative
          ? undefined
          : `${client.name}${client.industry ? `, ${client.industry}` : ""}`
      }
    >
      <div
        className={cn(
          "group/logo client-logo-tile flex h-[4.5rem] w-[12rem] items-center justify-center px-4 sm:h-[4.75rem] sm:w-[13rem]",
          // Always light — client marks are prepared for light UI (dark ink / brand color)
          "rounded-2xl border border-black/[0.08] bg-white",
          "transition-[border-color,box-shadow,transform] duration-300 motion-reduce:transform-none",
          "hover:border-[color-mix(in_oklab,var(--color-accent)_28%,transparent)]",
          "hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
        )}
      >
        <Image
          src={client.logoSrc}
          alt=""
          width={176}
          height={64}
          style={{ width: "auto", height: "auto" }}
          className={cn(
            "h-auto w-auto object-contain opacity-[0.92]",
            "transition-[opacity,transform,filter] duration-300",
            "grayscale-[0.2] group-hover/logo:scale-[1.04] group-hover/logo:opacity-100 group-hover/logo:grayscale-0",
            "motion-reduce:transform-none motion-reduce:transition-none",
            logoFitClasses[fit],
            scale === 1.05 && "scale-[1.05] group-hover/logo:scale-[1.08]",
            scale === 1.1 && "scale-[1.1] group-hover/logo:scale-[1.14]",
            scale === 1.15 && "scale-[1.15] group-hover/logo:scale-[1.18]"
          )}
        />
      </div>
    </li>
  );
}

function ClientsMarqueeRow({
  logos,
  reverse = false,
  duration = "42s",
}: {
  logos: readonly ClientLogo[];
  reverse?: boolean;
  duration?: string;
}) {
  const loop = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <ul
        className={cn(
          "clients-logo-marquee flex w-max list-none items-center gap-3 sm:gap-3.5",
          reverse && "clients-logo-marquee-reverse"
        )}
        style={{ animationDuration: duration }}
      >
        {loop.map((client, index) => (
          <ClientLogoTile
            key={`${client.name}-${index}`}
            client={client}
            decorative={index >= logos.length}
          />
        ))}
      </ul>
    </div>
  );
}

function ClientsLogoShowcase() {
  const [rowA, rowB] = splitRows(clientLogosWorkedWith);

  return (
    <div className="clients-logo-showcase relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-[var(--surface-muted)] to-transparent sm:w-20 md:w-28"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-[var(--surface-muted)] to-transparent sm:w-20 md:w-28"
      />

      <div className="clients-logo-marquee-stack hidden space-y-3 sm:block" aria-label="Client logos">
        <ClientsMarqueeRow logos={rowA} duration="48s" />
        <ClientsMarqueeRow logos={rowB} reverse duration="54s" />
      </div>

      <ul
        className="clients-logo-static mx-auto flex max-w-3xl list-none flex-wrap justify-center gap-2.5 sm:hidden"
        aria-label="Client logos"
      >
        {clientLogosWorkedWith.map((client) => (
          <ClientLogoTile
            key={client.name}
            client={client}
            className="[&_.client-logo-tile]:h-[4.25rem] [&_.client-logo-tile]:w-[10.5rem]"
          />
        ))}
      </ul>
    </div>
  );
}

/** Client trust section — header, industry line, and logo showcase. */
export function HomeClientsSection({ className }: HomeClientsSectionProps) {
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
              title={<>Clients we&apos;ve worked with.</>}
              description="Product design and engineering for teams across logistics, commerce, fintech, and services."
              align="center"
              titleId="clients-heading"
              descriptionClassName="max-w-xl"
            />

            <p className="type-caption mt-5 text-[color:var(--text-secondary)]">
              {clientIndustryHighlights.map((label, index) => (
                <span key={label} className="inline-flex items-center">
                  {index > 0 ? (
                    <span className="mx-2 text-[var(--surface-border)]" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  {label}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <ClientsLogoShowcase />
          </div>

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
