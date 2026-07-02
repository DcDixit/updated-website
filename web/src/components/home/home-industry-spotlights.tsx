import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/marketing/reveal";
import { SolutionSpotlightCard } from "@/components/home/solution-spotlight-card";
import { marketingSectionImages } from "@/content/visuals";

const saasIndustryContent = {
  eyebrow: "SaaS · UK & US",
  title: "SaaS product design agency for UK startups and scaling teams.",
  description:
    "We work with founders who've validated their idea but need a product experience that converts at the demo and retains at month three. That means onboarding that doesn't leak, dashboards built for real workflows, and UX that makes investors feel confident. From pre-seed MVPs to post-Series A redesigns, we've shipped products that changed retention curves and unlocked funding rounds.",
  services: [
    "SaaS UI/UX & onboarding",
    "Dashboard design",
    "MVP build (10-week sprints)",
    "AI-powered workflows",
    "Design system setup",
    "Post-launch retainer",
  ] as const,
  href: "/solutions/saas",
  cta: "Explore SaaS solutions",
};

const truckingIndustryContent = {
  eyebrow: "Trucking · United States",
  title: "Digital products for US trucking companies, brokers, and fleet operators.",
  description:
    "Carriers, freight brokers, and dispatch companies run on speed. Every minute a load isn't moving is money out the door. We build software that reflects how your operations actually work, not how a product manager imagined they work. Dispatch consoles that surface exceptions in one click. Fleet dashboards with no training curve. Driver apps your team will actually open.",
  services: [
    "Dispatch CRM",
    "Fleet dashboards",
    "Driver mobile apps",
    "Trucking websites",
    "Logistics SaaS",
    "Carrier onboarding flows",
  ] as const,
  href: "/solutions/trucking-logistics",
  cta: "Explore trucking solutions",
};

/** Dual industry focus - SaaS and trucking in one compact, scannable section. */
export function HomeIndustrySpotlights() {
  return (
    <SectionShell id="focus" size="compact">
      <Reveal>
        <Container className="space-y-8">
          <SectionHeader
            eyebrow="Industry focus"
            title="Different markets. Different delivery needs."
            description="SaaS teams and trucking operators have very different workflows, timelines, and success metrics. Here's how we approach each."
          />
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <SolutionSpotlightCard
              id="saas"
              eyebrow={saasIndustryContent.eyebrow}
              title={saasIndustryContent.title}
              description={saasIndustryContent.description}
              services={saasIndustryContent.services}
              href={saasIndustryContent.href}
              ctaLabel={saasIndustryContent.cta}
              visual={marketingSectionImages.saasSpotlight}
            />
            <SolutionSpotlightCard
              id="trucking"
              eyebrow={truckingIndustryContent.eyebrow}
              title={truckingIndustryContent.title}
              description={truckingIndustryContent.description}
              services={truckingIndustryContent.services}
              href={truckingIndustryContent.href}
              ctaLabel={truckingIndustryContent.cta}
              visual={marketingSectionImages.truckingSpotlight}
            />
          </div>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
