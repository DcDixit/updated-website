import { IconCode, IconLock, IconShieldLock, IconUsers } from "@tabler/icons-react";

import { deliveryTrustPrinciples } from "@/content/delivery-trust";
import { cn } from "@/lib/utils";

const principleIcons = [IconShieldLock, IconCode, IconUsers, IconLock] as const;

type DeliveryTrustRowProps = {
  className?: string;
};

/** Operational trust band - sits under stats & reviews, before social proof. */
export function DeliveryTrustRow({ className }: DeliveryTrustRowProps) {
  return (
    <section className={cn("mt-10", className)} aria-labelledby="delivery-trust-heading">
      <header className="mb-5 max-w-xl">
        <p className="type-badge-label">Delivery assurances</p>
        <h3
          id="delivery-trust-heading"
          className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl"
        >
          How we work with you.
        </h3>
      </header>

      <ul className="bento-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {deliveryTrustPrinciples.map((item, index) => {
          const Icon = principleIcons[index] ?? IconShieldLock;
          return (
            <li key={item.title}>
              <article className="bento-card relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
                <div className="bento-card-glow" aria-hidden />
                <div className="relative z-[1]">
                  <Icon size={24} stroke={1.5} className="text-[var(--color-accent)]" aria-hidden />
                  <p className="mt-4 text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground">
                    {item.title}
                  </p>
                  <p className="type-caption mt-2 leading-relaxed">{item.body}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
