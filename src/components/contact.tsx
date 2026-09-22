"use client";

import { useState, type FormEvent } from "react";
import { links, site } from "@/data/site";
import { Check, Github, Linkedin, Mail, Send, Trophy } from "./icons";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";

type Status = { state: "idle" | "sending" | "success" | "error"; message?: string };

const contacts = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "GitHub", value: "Bassem-star", href: links.github, Icon: Github },
  { label: "LinkedIn", value: "Connect with me", href: links.linkedin, Icon: Linkedin },
  { label: "Codeforces", value: "Hero_777", href: links.codeforces, Icon: Trophy },
];

const field =
  "w-full rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40 aria-[invalid=true]:border-rose-400";

export function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "success", message: "Thanks! Your message is on its way. I'll reply soon." });
    } catch (err) {
      setStatus({
        state: "error",
        message: `${err instanceof Error ? err.message : "Something went wrong."} You can also email me at ${site.email}.`,
      });
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Open to freelance projects, internships and collaborations. Send a message and I'll get back to you."
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <ul className="grid gap-3">
            {contacts.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-ink">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">{label}</span>
                    <span className="font-medium text-white">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate={false}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                <input id="name" name="name" type="text" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" placeholder="you@example.com" className={field} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Tell me about your project…" className={field} />
            </div>

            {/* Honeypot: hidden from humans, bots fill it in */}
            <div className="hidden" aria-hidden>
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={status.state === "sending"}>
                {status.state === "sending" ? "Sending…" : <>Send message <Send className="h-4 w-4" /></>}
              </Button>
              <p
                role="status"
                aria-live="polite"
                className={
                  status.state === "error"
                    ? "text-sm text-rose-300"
                    : "inline-flex items-center gap-2 text-sm text-emerald-300"
                }
              >
                {status.state === "success" && <Check className="h-4 w-4" />}
                {status.message}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
