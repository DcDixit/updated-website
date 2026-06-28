import type { HomepageTeamMember } from "@/data/homepage";
import { cn } from "@/lib/utils";

type TeamSectionProps = {
  team: readonly HomepageTeamMember[];
  className?: string;
};

export function TeamSection({ team, className }: TeamSectionProps) {
  return (
    <div className={className}>
      <div className="mb-10 max-w-2xl space-y-3">
        <p className="type-badge-label text-[12px] uppercase tracking-widest text-[color:var(--text-secondary)]">
          Our team
        </p>
        <h2 className="type-h2 text-foreground text-balance">
          A focused in-house team, not a freelance network.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <article
            key={member.initials}
            className="content-card flex h-full min-w-[200px] flex-col p-6"
          >
            <div
              className="flex size-20 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-base font-semibold text-[var(--color-accent-strong)] dark:bg-[var(--color-accent)] dark:text-black"
              role="img"
              aria-label={`${member.name}, ${member.role}`}
            >
              {member.initials}
            </div>
            <div className="mt-5 flex-1 space-y-2">
              <h3 className="text-base font-medium text-foreground">{member.name}</h3>
              <p className="text-[13px] text-[color:var(--text-secondary)]">{member.role}</p>
              <p className="type-body max-w-none line-clamp-2 text-[color:var(--text-body)]">{member.specialty}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
