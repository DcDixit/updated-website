import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/marketing/reveal";
import type { HomepageTeamMember } from "@/data/homepage";
import { cn } from "@/lib/utils";

type TeamSectionProps = {
  team: readonly HomepageTeamMember[];
  className?: string;
};

export function TeamSection({ team, className }: TeamSectionProps) {
  return (
    <SectionShell id="team" size="default" className={cn(className)}>
      <Reveal>
        <Container>
          <SectionHeader
            eyebrow="The team"
            title="15+ people. One roof. No subcontracting."
            description="Every designer and engineer on your project is a permanent Northline team member. We don't use freelance marketplaces."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.initials} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--surface-border)] bg-[var(--color-primary)]/8 shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-primary)_8%,transparent)]">
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-xl font-semibold text-[var(--color-primary)]">{member.initials}</span>
                  )}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{member.name}</div>
                  <div className="type-caption">{member.role}</div>
                </div>
                {member.note ? (
                  <p className="max-w-[140px] text-xs italic leading-snug text-[color:var(--text-secondary)]">
                    &ldquo;{member.note}&rdquo;
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[color:var(--text-secondary)]">
            Remote-first · India delivery · UK &amp; US time-zone coverage ·{" "}
            <Link
              href="/about"
              className="font-semibold text-[var(--color-primary)] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
            >
              Meet the full team →
            </Link>
          </p>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
