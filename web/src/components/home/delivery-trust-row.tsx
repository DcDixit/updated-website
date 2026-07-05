import { IconCode, IconLock, IconShieldCheck, IconUsers } from "@tabler/icons-react";

import { deliveryTrustPrinciples } from "@/content/delivery-trust";
import { cn } from "@/lib/utils";

const principleIcons = [IconShieldCheck, IconCode, IconUsers, IconLock] as const;

type DeliveryTrustRowProps = {
  className?: string;
};

/** Compact operational trust row — sits under stats, before social proof. */
export function DeliveryTrustRow({ className }: DeliveryTrustRowProps) {
  return (
    <div
      className={cn(
        "mt-8 grid gap-4 border-t border-[var(--section-divider)] pt-8 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
      aria-label="How we protect your project and IP"
    >
      {deliveryTrustPrinciples.map((item, index) => {
        const Icon = principleIcons[index] ?? IconShieldCheck;
        return (
          <div key={item.title} className="flex gap-3">
            <div className="icon-container-sm mt-0.5 shrink-0" aria-hidden>
              <Icon size={16} stroke={1.75} />
            </div>
            <div className="min-w-0">
              <p className="type-body text-sm font-semibold text-foreground">{item.title}</p>
              <p className="type-caption mt-1 max-w-none text-[color:var(--text-secondary)]">{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
