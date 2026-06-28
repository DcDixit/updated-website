import Link from "next/link";
import {
  IconArrowUpRight,
  IconPencil,
  IconBrush,
  IconDeviceMobile,
  IconLayout,
  IconCode,
  IconDatabase,
  IconChartBar,
  IconPlugConnected,
  IconSparkles,
  IconBlocks,
  IconAutomation,
} from "@tabler/icons-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const slugIconMap: Record<string, React.ComponentType<{ size?: number; stroke?: number; className?: string; "aria-hidden"?: boolean }>> = {
  "ui-ux-design": IconPencil,
  "product-design": IconLayout,
  "branding": IconBrush,
  "mobile-applications": IconDeviceMobile,
  "web-development": IconCode,
  "saas-platforms": IconDatabase,
  "crm-development": IconChartBar,
  "api-integrations": IconPlugConnected,
  "ai-assisted-development": IconSparkles,
  "no-code-low-code": IconBlocks,
  "automation-systems": IconAutomation,
};

type ServiceCardProps = {
  title: string;
  summary: string;
  href: string;
  slug?: string;
  className?: string;
};

export function ServiceCard({ title, summary, href, slug, className }: ServiceCardProps) {
  const Icon = (slug && slugIconMap[slug]) ? slugIconMap[slug]! : IconArrowUpRight;

  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <Card className="card-hover-rise relative h-full overflow-hidden transition-colors hover:border-[var(--color-accent)]/40">
        {/* Accent top bar animates in on hover */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-300 ease-out group-hover:scale-x-100"
        />

        {/* Icon container */}
        <div className="mb-5 icon-container-md">
          <Icon size={20} stroke={1.5} aria-hidden />
        </div>

        <h3 className="type-h3 transition-colors group-hover:text-[var(--color-accent)]">{title}</h3>
        <p className="type-body mt-3 text-[color:var(--text-secondary)]">{summary}</p>

        <span className="type-body mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
          Learn more
          <IconArrowUpRight
            size={18}
            stroke={1.5}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </Card>
    </Link>
  );
}
