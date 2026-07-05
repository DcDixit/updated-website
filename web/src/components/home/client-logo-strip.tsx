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
      <p className="type-badge-label mb-5 text-center tracking-widest text-[color:var(--text-secondary)]">
        Technologies &amp; platforms we work with
      </p>
      <TechLogoGrid items={homepageTechBrands} marquee />
    </section>
  );
}
