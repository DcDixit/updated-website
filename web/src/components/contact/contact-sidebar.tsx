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

import { mailtoHref, siteContact, whatsappHref } from "@/content/brand";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/**
 * `/contact#book` — when scheduler is null, show action-first contact
 * (email + WhatsApp) so the fit call can be scheduled after outreach.
 * No dead "Schedule a call" button.
 */
export function ContactSidebar() {
  const scheduler = siteContact.scheduler;

  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Contact options">
      <div className="flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/8 px-4 py-2 w-fit">
        <span className="size-2 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden />
        <span className="type-caption text-[11px] font-medium text-[color:var(--text-secondary)]">
          {siteContact.responseTime}
        </span>
      </div>
      <div className="surface-card space-y-8 p-6 sm:p-7">
        <div id="book" className="scroll-mt-[var(--header-offset)] space-y-4">
          <p className="type-badge-label">Book a 20-minute fit call</p>
          {scheduler ? (
            <>
              <p className="type-body text-sm text-[color:var(--text-secondary)]">
                Prefer a live conversation? Open the calendar and pick a time that works for you.
              </p>
              <a
                href={scheduler}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "primary", size: "cta" }), "inline-flex w-full gap-2")}
                data-track="schedule_call_click"
                data-track-location="contact-sidebar"
                data-track-label="Schedule a call"
              >
                <IconVideo size={18} stroke={1.5} aria-hidden />
                Schedule a call
                <IconExternalLink size={14} className="ml-auto opacity-70" aria-hidden />
              </a>
            </>
          ) : (
            <>
              <p className="type-body text-sm text-[color:var(--text-secondary)]">
                There is no self-serve calendar yet. Email or WhatsApp us and we will schedule the
                20-minute fit call with you. {siteContact.responseTime}
              </p>
              <div className="flex flex-col gap-2.5">
                <Link
                  href={mailtoHref(siteContact.email, "Book a 20-minute fit call")}
                  className={cn(buttonVariants({ variant: "primary", size: "cta" }), "inline-flex w-full gap-2")}
                  data-track="cta_click"
                  data-track-location="contact-sidebar-book"
                  data-track-label="Email to book"
                >
                  <IconMail size={18} stroke={1.5} aria-hidden />
                  Email to book a call
                </Link>
                <Link
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "secondary", size: "cta" }), "inline-flex w-full gap-2")}
                  data-track="whatsapp_click"
                  data-track-location="contact-sidebar-book"
                  data-track-label="WhatsApp to book"
                >
                  <IconMessageCircle size={18} stroke={1.5} aria-hidden />
                  WhatsApp us
                  <IconExternalLink size={14} className="ml-auto opacity-70" aria-hidden />
                </Link>
                <Link
                  href={siteContact.phoneIn.href}
                  className="type-body inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-[color:var(--text-secondary)] underline-offset-4 hover:text-foreground hover:underline"
                  data-track="cta_click"
                  data-track-location="contact-sidebar-book"
                  data-track-label="Phone India"
                >
                  <IconPhone size={16} stroke={1.5} aria-hidden />
                  {siteContact.phoneIn.display}
                </Link>
              </div>
            </>
          )}
        </div>

        <Separator className="bg-[var(--surface-border)]" />

        <div className="space-y-4">
          <p className="type-badge-label">Direct contact</p>
          <Link
            href={mailtoHref()}
            className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
          >
            <IconMail size={18} className="shrink-0 text-[var(--color-accent)]" aria-hidden />
            {siteContact.email}
          </Link>
          {siteContact.phoneUs ? (
            <Link
              href={siteContact.phoneUs.href}
              className="flex items-center gap-3 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
            >
              <IconPhone size={18} className="shrink-0 text-[var(--color-accent)]" aria-hidden />
              {siteContact.phoneUs.display}
            </Link>
          ) : null}
          <Link
            href={siteContact.phoneIn.href}
            className="flex items-center gap-3 text-sm text-[color:var(--text-secondary)] transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
            data-track="cta_click"
            data-track-location="contact-sidebar"
            data-track-label="Phone call"
          >
            <IconPhone size={18} className="shrink-0 text-[var(--color-accent)]" aria-hidden />
            {siteContact.phoneIn.display}
          </Link>
          <Link
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-brand-cobalt transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-amber/35 dark:text-brand-amber"
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
            className="group flex gap-3 rounded-lg border border-[var(--surface-border)] p-4 transition-colors hover:border-[var(--color-accent)]/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35"
          >
            <IconMapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden />
            <span className="type-caption group-hover:text-foreground">
              {siteContact.addressLine}
              <span className="mt-2 block font-semibold text-brand-cobalt dark:text-brand-amber">View on Google Maps →</span>
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
