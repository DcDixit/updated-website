import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { InsightCard } from "@/components/marketing/insight-card";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { brand, primaryCtas } from "@/content/site-content";
import { insightPosts } from "@/content/insights";
import { insightVisualBySlug, pageHeroVisuals } from "@/content/visuals";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Insights",
  description: `Articles on product design, AI workflows, SaaS onboarding, and digital strategy from ${brand.shortName}.`,
  path: "/insights",
  image: pageHeroVisuals.insights.src,
});

export default function InsightsPage() {
  const insightsListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Northline insights",
    hasPart: insightPosts.map((post) => ({
      "@type": "Article",
      headline: post.title,
      datePublished: post.publishedISO,
      url: absoluteUrl(`/insights/${post.slug}`),
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsListSchema) }} />
      <PageHero
        eyebrow="Insights"
        title="Ideas for builders and product teams."
        description="Practical articles on UI/UX, AI-assisted delivery, SaaS growth, and choosing the right approach for your product."
        visual={pageHeroVisuals.insights}
        priority
      />

      <Section tone="muted" dividerTop>
        <Container>
          <SectionHeader eyebrow="Latest" title="Recent articles" />
          <div className="stagger-grid stagger-grid-visible mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insightPosts.map((post) => {
              const cover = insightVisualBySlug[post.slug];
              return (
                <InsightCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  category={post.category}
                  published={post.published}
                  excerpt={post.excerpt}
                  read={post.read}
                  imageSrc={cover.src}
                  imageAlt={cover.alt}
                />
              );
            })}
          </div>
          <div className="surface-card mt-12 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-xl space-y-2">
              <h2 className="type-h3">Want these in your inbox?</h2>
              <p className="type-body text-sm text-[color:var(--text-secondary)]">
                Mention it in your project brief and we&apos;ll add you to our quarterly insights digest.
              </p>
            </div>
            <Link href={primaryCtas.brief.href} className={cn(buttonVariants({ variant: "primary", size: "cta" }))}>
              Get in touch
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
