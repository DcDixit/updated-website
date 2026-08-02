import Link from "next/link";
import { IconArrowUpRight, IconStarFilled } from "@tabler/icons-react";

import { reviewProfiles } from "@/content/site-content";
import { cn } from "@/lib/utils";

type ReviewProofBarProps = {
  className?: string;
  variant?: "default" | "compact" | "inline";
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
          className={cn(
            "surface-card group transition-colors hover:border-[var(--color-accent)]/35",
            variant === "inline"
              ? "flex items-center justify-between gap-4 rounded-[var(--card-radius)] border border-[var(--surface-border)] bg-[var(--surface-muted)]/50 px-5 py-4"
              : "flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          )}
        >
          <div className={cn("space-y-1", variant === "inline" && "min-w-0")}>
            <p className="type-badge-label">{profile.label} reviews</p>
            <p
              className={cn(
                "font-semibold tracking-tight text-foreground",
                variant === "compact" || variant === "inline" ? "text-base" : "type-h3"
              )}
            >
              {profile.headline}
            </p>
            {variant !== "inline" ? <p className="type-caption">{profile.subtitle}</p> : null}
          </div>
          <div
            className={cn(
              "flex shrink-0 items-center gap-3",
              variant === "inline" ? "" : "flex-col items-start sm:items-end"
            )}
          >
            <div className="flex gap-0.5 text-[var(--color-accent)]" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStarFilled key={i} size={variant === "inline" || variant === "compact" ? 14 : 16} />
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

