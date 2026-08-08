import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { BentoCard } from "@/components/ui/bento-card";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { clientPersonas } from "@/content/audience";
import { homepageSolutionSections, primaryCtas } from "@/content/site-content";
import { marketingSectionImages, solutionVisuals } from "@/content/visuals";
import type { SolutionSlug } from "@/content/solutions";
import { cn } from "@/lib/utils";

type SolutionItem = (typeof homepageSolutionSections)[number];

/** Grid spans per solution slug — asymmetric bento layout. */
const solutionLayout: Record<
  string,
  {
    gridClass: string;
    featured?: boolean;
    visualAside?: boolean;
    maxTags?: number;
    /** Wide / featured tiles keep imagery; equal bottom-row tiles stay text-led. */
    showVisual?: boolean;
  }
> = {
  saas: {
    gridClass: "col-span-12",
    featured: true,
    visualAside: true,
    maxTags: 4,
    showVisual: true,
  },
  "trucking-logistics": {
    gridClass: "col-span-12 lg:col-span-8",
    maxTags: 3,
    showVisual: true,
  },
  "accounting-integrations": {
    gridClass: "col-span-12 lg:col-span-4",
    maxTags: 3,
    showVisual: true,
  },
  "car-transportation": {
    gridClass: "col-span-12 sm:col-span-6 lg:col-span-4",
    maxTags: 2,
  },
  "crm-automation": {
    gridClass: "col-span-12 sm:col-span-6 lg:col-span-4",
    maxTags: 2,
  },
  "ai-productivity": {
    gridClass: "col-span-12 lg:col-span-4",
    maxTags: 2,
  },
};

function solutionVisual(slug: string) {
  if (slug in solutionVisuals) {
    return solutionVisuals[slug as SolutionSlug];
  }
  if (slug === "crm-automation") {
    return marketingSectionImages.servicesOverview;
  }
  if (slug === "ai-productivity") {
    return marketingSectionImages.trustPartnership;
  }
  return marketingSectionImages.saasSpotlight;
}

function SolutionBentoTile({ solution }: { solution: SolutionItem }) {
  const layout = solutionLayout[solution.slug] ?? { gridClass: "col-span-12" };
  const visual = solutionVisual(solution.slug);
  const showVisual = Boolean(layout.showVisual);

  return (
    <li className={cn(showVisual ? "min-h-[16rem]" : "min-h-0", layout.gridClass)}>
      <BentoCard
        title={solution.title}
        description={solution.summary}
        href={solution.href}
        cta={solution.cta}
        icon={solution.icon}
        eyebrow={solution.market}
        tags={solution.services.slice(0, layout.maxTags ?? 3)}
        visual={showVisual ? visual : undefined}
        featured={layout.featured}
        visualAside={layout.visualAside}
        trackingLabel={solution.title}
      />
    </li>
  );
}

export function HomeSolutionsSection() {
  return (
    <>
      <SectionHeader
        eyebrow="Solutions"
        title="SaaS products. Trucking platforms. Accounting integrations."
        description="Every solution we offer comes from work we've actually done - not service categories we invented to fill a menu."
      />

      <ul className="bento-grid stagger-grid stagger-grid-visible mt-10 grid grid-cols-12">
        {homepageSolutionSections.map((solution) => (
          <SolutionBentoTile key={solution.slug} solution={solution} />
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/solutions"
          className={cn(
            buttonVariants({ variant: "link", size: "default" }),
            "inline-flex items-center gap-2 text-base font-semibold"
          )}
        >
          View all solutions
          <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
        </Link>
        <Link
          href={primaryCtas.book.href}
          className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full sm:w-auto")}
        >
          {primaryCtas.book.label}
        </Link>
      </div>

      <div className="mt-12 border-t border-[var(--surface-border)] pt-10">
        <p className="type-badge-label mb-5">Who we work with</p>
        <ul className="bento-grid grid gap-5 md:grid-cols-3">
          {clientPersonas.map((persona) => (
            <li key={persona.title}>
              <BentoCard
                title={persona.title}
                description={persona.description}
                href={persona.href}
                cta={persona.cta}
                icon={persona.icon}
                trackingLabel={persona.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
