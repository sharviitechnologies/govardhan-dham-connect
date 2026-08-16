import { MapPin, Mail, Phone, Send, ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqs, temple } from "@/data/temple";
import { Emblem, SectionDivider } from "@/components/site/Emblem";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">Frequently asked</h2>
          <div className="mt-5">
            <SectionDivider />
          </div>
        </div>
        <div className="mt-8 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base text-foreground sm:text-lg">{f.q}</span>
                  <ChevronDown
                    className={cn("h-4 w-4 shrink-0 text-primary transition-transform", isOpen && "rotate-180")}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-300">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">Write to the temple office</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            For seva bookings, guest house enquiries or large contributions, our office replies within one
            working day.
          </p>
          <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Name</span>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-1.5 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Message</span>
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="mt-1.5 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              <Send className="h-4 w-4" aria-hidden />
              Send Enquiry
            </button>
          </form>
        </div>

        <div className="space-y-5">
          <div className="paper relative flex h-72 items-center justify-center overflow-hidden rounded-lg border border-border">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
              aria-hidden
            />
            <div className="relative flex flex-col items-center text-center">
              <Emblem className="h-10 w-10" />
              <MapPin className="mt-2 h-6 w-6 text-primary" aria-hidden />
              <p className="mt-2 font-display text-lg text-foreground">Govardhan Dham, Pal Road</p>
              <p className="text-xs text-muted-foreground">Map preview · placeholder</p>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-warm">
            <h3 className="font-display text-lg text-foreground">Temple Address</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{temple.address}</p>
            <div className="mt-4 space-y-2 text-sm">
              <a href={temple.phoneHref} className="flex items-center gap-2 text-primary hover:underline">
                <Phone className="h-4 w-4" aria-hidden /> {temple.phone}
              </a>
              <a href={`mailto:${temple.email}`} className="flex items-center gap-2 text-primary hover:underline">
                <Mail className="h-4 w-4" aria-hidden /> {temple.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="border-b border-border bg-gold-soft/50">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Monthly construction update, straight to your inbox
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Photographs from the site, festival dates and the utilisation statement. No more than one email a month.
          </p>
        </div>
        <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            className="w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"
          />
          <button
            type="submit"
            className="shrink-0 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
