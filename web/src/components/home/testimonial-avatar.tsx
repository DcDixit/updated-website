import { cn } from "@/lib/utils";

/** Deterministic gradient avatar when client photos are unavailable. */
export function TestimonialAvatar({
  initials,
  name,
  className,
  size = "md",
}: {
  initials: string;
  name: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const seed = initials.charCodeAt(0) + (initials.charCodeAt(1) ?? 0);
  const hue = 228 + (seed % 36);

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border border-white/10 font-semibold text-white shadow-sm",
        size === "md" ? "size-11 text-sm" : "size-8 text-xs",
        className
      )}
      style={{
        background: `linear-gradient(145deg, oklch(0.52 0.14 ${hue}), oklch(0.42 0.12 ${hue + 18}))`,
      }}
      aria-label={name}
      role="img"
    >
      {initials}
    </div>
  );
}

