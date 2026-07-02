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
        <p className={cn("eyebrow-amber mb-0", eyebrowClassName)}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("type-h2 font-heading text-balance text-text-primary-v2", titleClassName)}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "type-body font-body text-text-secondary-v2",
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
