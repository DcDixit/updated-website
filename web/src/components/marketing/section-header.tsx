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
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
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
        <p className={cn("type-badge-label inline-flex items-center gap-2 text-[12px]", eyebrowClassName)}>
          <span className="inline-block size-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("type-h2 text-foreground", titleClassName)}>{title}</h2>
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
