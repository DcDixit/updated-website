import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { InsightArticleBody } from "@/components/marketing/insight-article-body";
import { InsightCard } from "@/components/marketing/insight-card";
import { SectionHeader } from "@/components/marketing/section-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  getRelatedInsights,
  insightArticles,
  insightPosts,
  type InsightSlug,
} from "@/content/insights";
import { primaryCtas } from "@/content/site-content";
import { insightVisualBySlug } from "@/content/visuals";
import { articleJsonLd, buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug as InsightSlug;
  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const cover = insightVisualBySlug[slug];
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${slug}`,
    image: cover.src,
    type: "article",
    publishedTime: post.publishedISO,
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const slug = (await params).slug as InsightSlug;
  const post = insightPosts.find((p) => p.slug === slug);
  const article = insightArticles[slug];
  if (!post || !article) notFound();

  const cover = insightVisualBySlug[slug];
  const related = getRelatedInsights(slug, 2);
  const relatedLinks: Record<InsightSlug, Array<{ label: string; href: string }>> = {
    "ai-in-product-design-2026": [
      { label: "AI Productivity & Automation", href: "/services/ai-assisted-development" },
      { label: "SaaS Product Solutions", href: "/solutions/saas" },
    ],
    "saas-onboarding-patterns": [
      { label: "SaaS Product Solutions", href: "/solutions/saas" },
      { label: "SaaS Product Design Service", href: "/services/saas-platforms" },
    ],
    "saas-mvp-uk-guide": [
      { label: "SaaS Product Solutions", href: "/solutions/saas" },
      { label: "No-Code / Low-Code Solutions", href: "/services/no-code-low-code" },
    ],
    "no-code-vs-custom-mvp": [
      { label: "No-Code / Low-Code Solutions", href: "/services/no-code-low-code" },
      { label: "Web Design & Development", href: "/services/web-development" },
    ],
    "trucking-dispatch-crm-guide": [
      { label: "Trucking & Logistics Solutions", href: "/solutions/trucking-logistics" },
      { label: "CRM & Dashboard Design", href: "/services/crm-development" },
    ],
    "crm-dashboard-ux-patterns": [
      { label: "CRM & Dashboard Design", href: "/services/crm-development" },
      { label: "Automation Workflows", href: "/services/automation-systems" },
    ],
    "choosing-a-digital-agency": [
      { label: "All Solutions", href: "/solutions" },
      { label: "Selected Work", href: "/work" },
    ],
  };
  const jsonLd = articleJsonLd({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${slug}`,
    publishedISO: post.publishedISO,
    author: article.author,
    image: cover.src,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section tone="default" className="border-b border-[var(--section-divider)] !py-[var(--space-section-hero)]">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-6">
            <Link
              href="/insights"
              className="type-caption inline-flex w-fit font-medium text-[var(--color-accent)] hover:underline"
            >
              ← Back to insights
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="font-normal">
                {post.category}
              </Badge>
              <span className="type-caption">{post.published}</span>
              <span className="type-caption">·</span>
              <span className="type-caption">{post.read}</span>
            </div>
            <h1 className="type-hero text-balance">{post.title}</h1>
            <p className="type-body text-[color:var(--text-secondary)]">{post.excerpt}</p>
            <p className="type-caption">By {article.author}</p>
          </div>
        </Container>
      </Section>

      <Section tone="muted" dividerTop className="!py-0">
        <Container className="max-w-5xl">
          <div className="relative -mt-8 aspect-[21/9] overflow-hidden rounded-xl sm:-mt-12">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </Container>
      </Section>

      <Section tone="default" dividerTop>
        <Container className="max-w-3xl">
          <InsightArticleBody blocks={article.blocks} />
          <div className="mt-10 surface-card p-5 sm:p-6">
            <p className="type-badge-label">Related solutions</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {relatedLinks[slug].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="type-caption rounded-full border border-[var(--surface-border)] px-3 py-1.5 hover:border-[var(--color-accent)]/40 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-3 border-t border-[var(--section-divider)] pt-10">
            <Link
              href={primaryCtas.brief.href}
              className={cn(buttonVariants({ variant: "primary", size: "cta" }), "gap-2")}
            >
              {primaryCtas.brief.label}
              <IconArrowUpRight size={20} stroke={1.5} aria-hidden />
            </Link>
            <Link href="/insights" className={cn(buttonVariants({ variant: "secondary", size: "cta" }))}>
              More articles
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="muted" dividerTop>
        <Container>
          <SectionHeader eyebrow="Related" title="Continue reading" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((r) => {
              const visual = insightVisualBySlug[r.slug];
              return (
                <InsightCard
                  key={r.slug}
                  slug={r.slug}
                  title={r.title}
                  category={r.category}
                  published={r.published}
                  excerpt={r.excerpt}
                  read={r.read}
                  imageSrc={visual.src}
                  imageAlt={visual.alt}
                />
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
