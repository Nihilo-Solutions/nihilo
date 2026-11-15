"use client";

import { track } from "@vercel/analytics";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/site/ui/button";
import { SITE_EMAIL } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "failed";

/**
 * Neither analytics call should ever be able to break the form. `lead_failed`
 * matters as much as the success event: without it, a bad HubSpot token looks
 * exactly like nobody filling the form in.
 */
function report(event: string, payload: Record<string, string>) {
  try {
    window.gtag?.("event", event, payload);
  } catch {
    /* ignore */
  }
  try {
    track(event, payload);
  } catch {
    /* custom events need a paid Vercel plan */
  }
}

/**
 * Posts to /api/leads, the existing HubSpot route. If that call fails the lead
 * would otherwise vanish, so the failure state hands over a mailto with the
 * same details already filled in.
 */
export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [fallback, setFallback] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const process = String(data.get("process") || "").trim();

    const [firstName, ...rest] = name.split(/\s+/);
    setState("sending");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName: rest.join(" "),
          email,
          company,
          message: process,
          source: "Contact form",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      report("generate_lead", { source_page: "/contact", form: "contact" });
      setState("sent");
    } catch {
      report("lead_failed", { source_page: "/contact", form: "contact" });
      const subject = encodeURIComponent(`Discovery call: ${company || name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nProcess to talk about:\n${process}`,
      );
      setFallback(`mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`);
      setState("failed");
    }
  }

  if (state === "sent") {
    return (
      <p className="mt-6 text-fg">
        Thanks. We have your details and will come back within one business day.
      </p>
    );
  }

  if (state === "failed") {
    return (
      <div className="mt-6">
        <p className="text-fg">Something went wrong on our end.</p>
        <p className="mt-2 text-muted">
          <a className="text-fg underline decoration-accent" href={fallback}>
            Send it to us directly
          </a>{" "}
          and we will pick it up from there.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
      <label className="grid gap-1 text-sm">
        <span className="text-muted">Name</span>
        <input
          required
          name="name"
          autoComplete="name"
          className="min-h-11 rounded-md border border-border bg-bg px-3 text-fg"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-muted">Company</span>
        <input
          name="company"
          autoComplete="organization"
          className="min-h-11 rounded-md border border-border bg-bg px-3 text-fg"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-muted">Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="min-h-11 rounded-md border border-border bg-bg px-3 text-fg"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-muted">The process to talk about</span>
        <textarea
          required
          name="process"
          rows={4}
          placeholder="e.g. weekly service report from our ticket system"
          className="rounded-md border border-border bg-bg px-3 py-2 text-fg placeholder:text-muted/60"
        />
      </label>
      <div className="mt-1 flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending" : "Send it over"}
        </Button>
        <a className="text-sm text-muted underline decoration-accent" href={`mailto:${SITE_EMAIL}`}>
          Or email us
        </a>
      </div>
    </form>
  );
}
