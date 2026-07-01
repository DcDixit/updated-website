import Link from "next/link";
import { IconArrowUpRight, IconStarFilled } from "@tabler/icons-react";

import { reviewProfiles } from "@/content/site-content";
import { cn } from "@/lib/utils";

type ReviewProofBarProps = {
  className?: string;
  variant?: "default" | "compact";
};

export function ReviewProofBar({ className, variant = "default" }: ReviewProofBarProps) {
  const profiles = [reviewProfiles.google];

  return (
    <div className={cn("grid gap-4", variant === "compact" && "gap-3", className)}>
      {profiles.map((profile) => (
        <Link
          key={profile.label}
          href={profile.href}
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card group flex flex-col gap-3 p-5 transition-colors hover:border-[var(--color-accent)]/35 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="space-y-2">
            <p className="type-badge-label">{profile.label}</p>
            <p className={cn("font-semibold tracking-tight text-foreground", variant === "compact" ? "text-base" : "type-h3")}>
              {profile.headline}
            </p>
            <p className="type-caption">{profile.subtitle}</p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
            <div className="flex gap-0.5 text-[var(--color-accent)]" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStarFilled key={i} size={variant === "compact" ? 14 : 16} />
              ))}
            </div>
            <span className="type-caption flex items-center gap-1 group-hover:text-foreground">
              View reviews
              <IconArrowUpRight size={14} className="opacity-70" aria-hidden />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
