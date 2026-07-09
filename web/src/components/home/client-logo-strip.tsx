import { TechLogoGrid } from "@/components/marketing/tech-logo-grid";
import { homepageTechBrands } from "@/lib/tech-brands";
import { cn } from "@/lib/utils";

type HomeClientLogoStripProps = {
  className?: string;
};

export function HomeClientLogoStrip({ className }: HomeClientLogoStripProps) {
  return (
    <section
      className={cn("border-y border-[var(--surface-border)] bg-background py-7", className)}
      aria-label="Technologies and platforms we work with"
    >
      <p
        style={{
          fontSize: 13,
          color: "var(--text-secondary)",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Used by teams at
      </p>
      <TechLogoGrid items={homepageTechBrands} marquee />
    </section>
  );
}
