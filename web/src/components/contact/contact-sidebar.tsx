"use client";

import Link from "next/link";

import {
  IconExternalLink,
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconPhone,
  IconVideo,
} from "@tabler/icons-react";

import { siteContact } from "@/content/site-content";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function ContactSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Contact options">
      {/* Response time badge */}
      <div className="flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/8 px-4 py-2 w-fit">
        <span className="size-2 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden />
        <span className="type-caption text-[11px] font-medium text-[color:var(--text-secondary)]">
          {siteContact.responseTime}
        </span>
      </div>
      <div className="surface-card space-y-8 p-6 sm:p-7">
        <div id="book" className="scroll-mt-[var(--header-offset)] space-y-3">
          <p className="type-badge-label">Book a call</p>
          <p className="type-body text-sm text-[color:var(--text-secondary)]">
            Prefer a live conversation? Schedule a free 30-minute discovery call to discuss your project.
          </p>
          {siteContact.schedulingUrl ? (
            <a
              href={siteContact.schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "cta" }), "mt-2 inline-flex w-full gap-2")}
              data-track="schedule_call_click"
              data-track-location="contact-sidebar"
              data-track-label="Schedule a call"
            >
              <IconVideo size={18} stroke={1.5} aria-hidden />
              Schedule a call
              <IconExternalLink size={14} className="ml-auto opacity-70" aria-hidden />
            </a>
          ) : (
            <Link
              href={`mailto:${siteContact.email}?subject=${encodeURIComponent("Discovery call request")}`}
              className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "mt-2 inline-flex w-full gap-2")}
              data-track="schedule_call_click"
              data-track-location="contact-sidebar"
              data-track-label="Request a call via email"
            >
              <IconMail size={18} stroke={1.5} aria-hidden />
              Request a call via email
            </Link>
          )}
        </div>

        <Separator className="bg-[var(--surface-border)]" />

        <div className="space-y-4">
          <p className="type-badge-label">Direct contact</p>
          <Link
            href={`mailto:${siteContact.email}`}
            className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring-color)]"
          >
            <IconMail size={18} className="shrink-0 text-[var(--color-accent)]" aria-hidden />
            {siteContact.email}
          </Link>
          <Link
            href={`tel:${siteContact.telHref}`}
            className="flex items-center gap-3 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring-color)]"
            data-track="cta_click"
            data-track-location="contact-sidebar"
            data-track-label="Phone call"
          >
            <IconPhone size={18} className="shrink-0 text-[var(--color-accent)]" aria-hidden />
            {siteContact.displayPhone}
          </Link>
          <Link
            href={siteContact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring-color)]"
            data-track="whatsapp_click"
            data-track-location="contact-sidebar"
            data-track-label="WhatsApp us"
          >
            <IconMessageCircle size={18} className="shrink-0" aria-hidden />
            WhatsApp us
            <IconExternalLink size={14} className="opacity-70" aria-hidden />
          </Link>
        </div>

        <Separator className="bg-[var(--surface-border)]" />

        <div className="space-y-3">
          <p className="type-badge-label">Office</p>
          <p className="type-body text-sm text-[color:var(--text-secondary)]">{siteContact.hqLabel}</p>
          <Link
            href={siteContact.mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-3 rounded-lg border border-[var(--surface-border)] p-4 transition-colors hover:border-[var(--color-accent)]/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring-color)]"
          >
            <IconMapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden />
            <span className="type-caption group-hover:text-foreground">
              {siteContact.addressLine}
              <span className="mt-2 block font-semibold text-[var(--color-accent)]">View on Google Maps →</span>
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
