import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";

import { leadershipTeam } from "@/content/site-content";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

type TeamSectionProps = {
  className?: string;
  showHeader?: boolean;
};

export function TeamSection({ className, showHeader = true }: TeamSectionProps) {
  return (
    <div className={className}>
      {showHeader ? (
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="type-badge-label">Team</p>
          <h2 className="type-h2 text-foreground">Meet the people behind the work.</h2>
          <p className="type-body text-[color:var(--text-secondary)]">
            A cross-functional leadership team - design, engineering, and delivery - working together on every engagement.
          </p>
        </div>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {leadershipTeam.map((member) => (
          <article key={member.name} className="surface-card flex h-full flex-col p-6">
            <div
              className="flex size-16 items-center justify-center overflow-hidden rounded-[var(--image-radius)] border border-[var(--surface-border)] bg-[linear-gradient(145deg,#14181c,#1e242b)] text-lg font-semibold tracking-wide text-[var(--color-accent)]"
              role="img"
              aria-label={`Portrait placeholder for ${member.name}`}
            >
              {initials(member.name)}
            </div>
            <div className="mt-5 flex-1 space-y-3">
              <div>
                <h3 className="type-h3 text-foreground">{member.name}</h3>
                <p className="type-caption mt-1 font-medium text-[var(--color-accent)]">{member.role}</p>
              </div>
              <p className="type-body max-w-none text-sm text-[color:var(--text-secondary)]">{member.bio}</p>
              <ul className="flex flex-wrap gap-1.5" aria-label={`${member.name} focus areas`}>
                {member.focus.map((tag) => (
                  <li
                    key={tag}
                    className="type-caption rounded-md border border-[var(--surface-border)] px-2 py-1 text-[10px] uppercase tracking-wide"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "type-caption mt-5 inline-flex items-center gap-2 font-medium text-[color:var(--text-secondary)]",
                "transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
              )}
            >
              <IconBrandLinkedin size={16} stroke={1.5} aria-hidden />
              LinkedIn - Northline Digital
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
