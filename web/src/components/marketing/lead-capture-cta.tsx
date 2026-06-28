import { CtaBand } from "@/components/marketing/cta-band";

type LeadCaptureCtaProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
};

/** Optional page-specific CTA band — footer CtaBand handles sitewide conversion on inner pages. */
export function LeadCaptureCta({
  title,
  description,
  eyebrow = "Next step",
  className,
}: LeadCaptureCtaProps) {
  return (
    <CtaBand
      eyebrow={eyebrow}
      title={title}
      description={description}
      align="center"
      className={className}
    />
  );
}
