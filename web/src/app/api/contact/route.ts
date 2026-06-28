import { NextResponse } from "next/server";

import { siteContact } from "@/content/brand";
import { formatContactEmail, validateContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateContactPayload(body);

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { subject, text } = formatContactEmail(result.data);

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? siteContact.email;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!resendKey) {
      if (process.env.NODE_ENV === "production") {
        console.error("CONTACT: RESEND_API_KEY missing in production.");
        return NextResponse.json(
          {
            error: `Unable to send right now. Please email us at ${siteContact.email}.`,
          },
          { status: 503 }
        );
      }
      console.info("Contact inquiry (dev):", subject, result.data.email);
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: result.data.email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Unable to send message right now. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
