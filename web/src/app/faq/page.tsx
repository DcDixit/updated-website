import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { MarketingImage } from "@/components/marketing/marketing-image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { brand, faqHome, faqPageExtra, primaryCtas } from "@/content/site-content";
import { pageHeroVisuals, marketingSectionImages } from "@/content/visuals";
import { buildPageMetadata, faqJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description: `Common questions about working with ${brand.shortName} - services, timelines, pricing, and process.`,
  path: "/faq",
  image: pageHeroVisuals.faq.src,
});

const merged = [...faqHome, ...faqPageExtra];
const faqSchema = faqJsonLd(merged);

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="FAQ"
        title="Straight answers to common questions."
        description="Everything you need to know about our services, process, pricing, and how we work with your team."
        visual={pageHeroVisuals.faq}
        priority
        actions={
          <Link href={primaryCtas.brief.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}>
            {primaryCtas.brief.label}
            <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
          </Link>
        }
      />

      <Section tone="muted" dividerTop className="!pb-[var(--space-section-hero)]">
        <Container className="max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <Accordion className="surface-card px-6" defaultValue={["q-0"]}>
              {merged.map((item, idx) => (
                <AccordionItem key={item.q} value={`q-${idx}`} className="border-[var(--surface-border)]">
                  <AccordionTrigger className="type-body py-5 text-left font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="type-body pb-5 text-[color:var(--text-secondary)]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <MarketingImage
              src={marketingSectionImages.trustPartnership.src}
              alt={marketingSectionImages.trustPartnership.alt}
              sizes="320px"
              className="hidden lg:block lg:sticky lg:top-28"
              aspectClassName="aspect-[3/4]"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
