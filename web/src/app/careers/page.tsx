import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { MarketingImage } from "@/components/marketing/marketing-image";
import { SectionHeader } from "@/components/marketing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { brand, careersOpenRoles, siteContact } from "@/content/site-content";
import { pageHeroVisuals, marketingSectionImages } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const applyMailto = (subject: string) =>
  `mailto:${siteContact.email}?subject=${encodeURIComponent(subject)}`;

export const metadata: Metadata = buildPageMetadata({
  title: "Careers",
  description: `Join ${brand.shortName} — open roles for designers, developers, and automation specialists. Remote-friendly team based in India with global clients.`,
  path: "/careers",
  image: pageHeroVisuals.careers.src,
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join a focused product team."
        description="We're looking for designers, engineers, and automation specialists who care about craft, honest communication, and shipping work that measurably helps clients. Roles listed below are current as of mid-2026."
        visual={pageHeroVisuals.careers}
        priority
      />

      <Section tone="muted" dividerTop>
        <Container className="grid max-w-6xl gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="space-y-6">
            <SectionHeader eyebrow="Open roles" title="Current openings" />
            <p className="type-caption mb-4 max-w-2xl text-[color:var(--text-secondary)]">
              Don&apos;t see your role? Email{" "}
              <a href={`mailto:${siteContact.email}`} className="font-medium text-[var(--color-accent)] underline-offset-4 hover:underline">
                {siteContact.email}
              </a>{" "}
              with your portfolio — we review every application.
            </p>
            <div className="divide-y divide-[var(--surface-border)] overflow-hidden rounded-[var(--card-radius)] border border-[var(--surface-border)] bg-card">
              {careersOpenRoles.map((job) => (
                <article
                  key={job.title}
                  className="flex flex-col gap-4 p-6 transition-colors hover:bg-[var(--surface-muted)] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h2 className="type-h3">{job.title}</h2>
                    <p className="type-caption mt-2">
                      {job.location} · {job.type}
                    </p>
                  </div>
                  <Link
                    href={applyMailto(job.applySubject)}
                    className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "gap-2 shrink-0")}
                  >
                    Apply
                    <IconArrowUpRight size={18} stroke={1.5} aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
          <MarketingImage
            src={marketingSectionImages.cultureWorkshop.src}
            alt={marketingSectionImages.cultureWorkshop.alt}
            sizes="360px"
            className="lg:sticky lg:top-28"
            aspectClassName="aspect-[4/5]"
          />
        </Container>
      </Section>
    </>
  );
}
