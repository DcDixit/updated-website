import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import { leadershipTeam } from "@/content/site-content";
import { cn } from "@/lib/utils";

type TeamSectionProps = {
  className?: string;
  variant?: "preview" | "full";
};

export function TeamSection({ className, variant = "preview" }: TeamSectionProps) {
  const practices = variant === "preview" ? leadershipTeam.slice(0, 4) : leadershipTeam;

  return (
    <SectionShell id="team" size="default" className={cn("bg-[var(--surface-muted)]", className)}>
      <Reveal>
        <Container>
          <SectionHeader
            eyebrow="The team"
            title="Practices that stay on the engagement."
            description="Design, engineering, delivery, and automation — the people in the first call stay accountable through launch."
            align="center"
            className="mx-auto max-w-2xl"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((practice) => (
              <article key={practice.name} className="surface-card flex flex-col gap-3 p-5 sm:p-6">
                <p className="text-sm font-semibold text-foreground">{practice.name}</p>
                <p className="type-caption font-medium text-[var(--color-accent)]">{practice.role}</p>
                <p className="type-body max-w-none text-sm text-[color:var(--text-secondary)]">
                  {practice.bio}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[color:var(--text-secondary)]">
            Remote-first · UK &amp; US time-zone coverage ·{" "}
            <Link
              href="/about"
              className="inline-flex items-center gap-1 font-semibold text-[var(--color-accent)] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
            >
              About Northline
              <IconArrowUpRight size={14} stroke={1.5} aria-hidden />
            </Link>
          </p>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
