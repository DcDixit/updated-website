import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import type { HomepageTeamMember } from "@/data/homepage";
import { cn } from "@/lib/utils";

type TeamSectionProps = {
  team: readonly HomepageTeamMember[];
  className?: string;
};

export function TeamSection({ team, className }: TeamSectionProps) {
  return (
    <SectionShell id="team" size="default" className={cn("bg-bg", className)}>
      <Reveal>
        <Container className="max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">The team</p>
            <h2 className="text-h2 font-bold text-text-primary">15+ people. One roof. No subcontracting.</h2>
            <p className="mx-auto mt-3 max-w-xl text-body text-text-secondary">
              Every designer and engineer on your project is a permanent Northline team member. We don&apos;t
              use freelance marketplaces.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.initials} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-primary/10">
                  {member.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-xl font-bold text-primary">{member.initials}</span>
                  )}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">{member.name}</div>
                  <div className="text-xs text-text-muted">{member.role}</div>
                </div>
                {member.note ? (
                  <p className="max-w-[140px] text-xs italic leading-snug text-text-secondary">
                    &ldquo;{member.note}&rdquo;
                  </p>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-text-muted">
            Remote-first · India delivery · UK &amp; US time-zone coverage ·{" "}
            <Link
              href="/about"
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Meet the full team →
            </Link>
          </p>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
