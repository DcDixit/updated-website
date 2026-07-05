import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import type { HomepageTeamMember } from "@/data/homepage";
import { cn } from "@/lib/utils";

type TeamSectionProps = {
  team: readonly HomepageTeamMember[];
  className?: string;
  /** Homepage uses a compact preview; about page can use full layout later. */
  variant?: "preview" | "full";
};

export function TeamSection({ team, className, variant = "preview" }: TeamSectionProps) {
  const displayTeam = variant === "preview" ? team.slice(0, 4) : team;

  return (
    <SectionShell id="team" size="default" className={cn("bg-[var(--surface-muted)]", className)}>
      <Reveal>
        <Container>
          <SectionHeader
            eyebrow="The team"
            title="Senior practitioners on every engagement."
            description="15+ designers and engineers in-house — the team you meet in the first call is the team that builds your product."
            align="center"
            className="mx-auto max-w-2xl"
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {displayTeam.map((member) => (
              <article
                key={member.initials}
                className="surface-card flex flex-col items-center gap-3 p-4 text-center sm:p-5"
              >
                <div className="flex size-16 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--surface-border)] bg-[color-mix(in_oklab,var(--color-accent)_8%,transparent)]">
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.photo} alt={member.name} className="size-full object-cover" />
                  ) : (
                    <span className="text-lg font-semibold text-[var(--color-accent)]">{member.initials}</span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="type-caption mt-0.5">{member.role}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[color:var(--text-secondary)]">
            Remote-first · UK &amp; US time-zone coverage ·{" "}
            <Link
              href="/about"
              className="inline-flex items-center gap-1 font-semibold text-[var(--color-accent)] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
            >
              Meet the full team
              <IconArrowUpRight size={14} stroke={1.5} aria-hidden />
            </Link>
          </p>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
