import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import { SolutionSpotlightCard } from "@/components/home/solution-spotlight-card";
import { marketingSectionImages } from "@/content/visuals";

type SpotlightContent = {
  headline: string;
  summary: string;
  services: readonly string[];
  href: string;
  cta: string;
};

type HomeIndustrySpotlightsProps = {
  saas: SpotlightContent;
  trucking: SpotlightContent;
};

/** Dual industry focus - SaaS and trucking in one compact, scannable section. */
export function HomeIndustrySpotlights({ saas, trucking }: HomeIndustrySpotlightsProps) {
  return (
    <SectionShell id="focus" size="compact">
      <Reveal>
        <Container className="max-w-6xl space-y-8">
          <SectionHeader
            className="max-w-2xl space-y-3"
            titleClassName="type-h2"
            descriptionClassName="text-sm"
            eyebrow="Industry focus"
            title="Different markets. Different delivery needs."
            description="SaaS teams and trucking operators have very different workflows, timelines, and success metrics. Here's how we approach each."
          />
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <SolutionSpotlightCard
              id="saas"
              eyebrow="SaaS · UK & US"
              title={saas.headline}
              description={saas.summary}
              services={saas.services}
              href={saas.href}
              ctaLabel={saas.cta}
              visual={marketingSectionImages.saasSpotlight}
            />
            <SolutionSpotlightCard
              id="trucking"
              eyebrow="Trucking · United States"
              title={trucking.headline}
              description={trucking.summary}
              services={trucking.services}
              href={trucking.href}
              ctaLabel={trucking.cta}
              visual={marketingSectionImages.truckingSpotlight}
            />
          </div>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
