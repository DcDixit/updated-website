import { CtaBand } from "@/components/marketing/cta-band";

type LeadCaptureCtaProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
};

/** Standard bottom conversion block - use on secondary pages after main content. */
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
