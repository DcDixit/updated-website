import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { InsightCard } from "@/components/marketing/insight-card";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { insightPostsPreview } from "@/content/site-content";
import { insightVisualBySlug } from "@/content/visuals";
import { cn } from "@/lib/utils";

export function HomeInsightsPreview() {
  const posts = insightPostsPreview.slice(0, 2);

  return (
    <SectionShell id="insights" size="default" className="bg-[var(--surface-muted)]">
      <Reveal>
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              className="sm:max-w-lg"
              eyebrow="Insights"
              title="Product thinking from our team"
              description="Practical guides on SaaS onboarding, AI workflows, and trucking software — no fluff."
            />
            <Link href="/insights" className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "w-full sm:w-auto")}>
              View all insights
            </Link>
          </div>
          <div className="stagger-grid stagger-grid-visible mt-10 grid gap-6 md:grid-cols-2">
            {posts.map((post) => {
              const visual = insightVisualBySlug[post.slug];
              return (
                <InsightCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  category={post.category}
                  published={post.published}
                  excerpt={post.excerpt}
                  read={post.read}
                  imageSrc={visual.src}
                  imageAlt={visual.alt}
                />
              );
            })}
          </div>
          <Link
            href="/insights"
            className="link-subtle type-body mt-8 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]"
          >
            Read more on the blog
            <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
          </Link>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
