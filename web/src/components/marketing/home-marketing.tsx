import { CtaBottom } from "@/sections/CtaBottom";
import { Hero } from "@/sections/Hero";
import { Integrations } from "@/sections/Integrations";
import { LogoMarquee } from "@/sections/LogoMarquee";
import { Services } from "@/sections/Services";
import { SolutionTabs } from "@/sections/SolutionTabs";
import { Testimonials } from "@/sections/Testimonials";
import { faqHome, brand } from "@/content/site-content";
import { homepageTestimonials } from "@/data/homepage";
import { faqJsonLd, reviewJsonLd, webPageJsonLd } from "@/lib/seo";

export function HomeMarketing() {
  const homeFaq = faqHome.slice(0, 6);
  const homeFaqSchema = faqJsonLd(homeFaq);
  const homePageSchema = webPageJsonLd({
    title: `${brand.shortName} · SaaS & Trucking Digital Product Agency`,
    description: brand.positioning,
    path: "/",
  });
  const reviewSchema = reviewJsonLd(
    homepageTestimonials.map((item) => ({
      author: item.name,
      reviewBody: item.quote,
      ratingValue: item.rating,
      itemReviewed: `${item.company} - ${item.project}`,
    }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      {reviewSchema.map((node, index) => (
        <script
          key={`review-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}

      <Hero />
      <LogoMarquee />
      <Services />
      <SolutionTabs />
      <Testimonials />
      <Integrations />
      <CtaBottom />
    </>
  );
}
