import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  descriptionClassName,
  titleClassName,
  eyebrowClassName,
  titleId,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  titleId?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-none space-y-4 text-left",
        align === "center" && "mx-auto text-center [&_h2]:mx-auto [&_p]:mx-auto",
        className
      )}
    >
      {eyebrow ? (
        <p className={cn("type-eyebrow inline-flex items-center gap-2", eyebrowClassName)}>
          <span className="inline-block size-1.5 rounded-full bg-[rgb(var(--ink-600))]" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={titleId} className={cn("type-h2 text-balance text-foreground", titleClassName)}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "type-body text-[color:var(--text-secondary)]",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

