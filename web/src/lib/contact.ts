export type ContactFormPayload = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  market: string;
  category: string;
  budget: string;
  timeline: string;
  message: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(body: unknown): {
  ok: true;
  data: ContactFormPayload;
} | {
  ok: false;
  error: string;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const b = body as Record<string, unknown>;

  if (typeof b.website === "string" && b.website.trim()) {
    return { ok: false, error: "Submission rejected." };
  }

  const name = String(b.name ?? "").trim();
  const company = String(b.company ?? "").trim();
  const email = String(b.email ?? "").trim();
  const projectType = String(b.projectType ?? "").trim();
  const market = String(b.market ?? "").trim();
  const category = String(b.category ?? "").trim();
  const budget = String(b.budget ?? "").trim();
  const timeline = String(b.timeline ?? "").trim();
  const message = String(b.message ?? "").trim();

  if (!name || name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!email || !EMAIL_RE.test(email)) return { ok: false, error: "Please enter a valid email." };
  if (!projectType) return { ok: false, error: "Please select a project type." };
  if (!market) return { ok: false, error: "Please select your primary market." };
  if (!timeline) return { ok: false, error: "Please select a timeline." };
  if (!message || message.length < 20) return { ok: false, error: "Please add a few more details about your project." };

  return {
    ok: true,
    data: { name, company, email, projectType, market, category, budget, timeline, message },
  };
}

export function formatContactEmail(data: ContactFormPayload): { subject: string; text: string } {
  const topic = data.category || data.projectType;
  const subject = `[Project inquiry] ${topic} - ${data.name}${data.company ? ` (${data.company})` : ""}`;
  const text = [
    `Name: ${data.name}`,
    `Company: ${data.company || " - "}`,
    `Email: ${data.email}`,
    `Project type: ${data.projectType}`,
    `Market: ${data.market}`,
    `Service interest: ${data.category || "Not specified"}`,
    `Budget: ${data.budget || "Not specified"}`,
    `Timeline: ${data.timeline}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  return { subject, text };
}
