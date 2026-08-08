import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[75rem] px-[var(--space-gutter)]",
        className
      )}
    >
      {children}
    </div>
  );
}
