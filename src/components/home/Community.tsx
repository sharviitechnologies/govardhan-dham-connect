import { useState } from "react";
import { CalendarDays, HandHeart, Images, ArrowUpRight, Quote } from "lucide-react";

import darshan from "@/assets/darshan.jpg";
import annadanam from "@/assets/annadanam.jpg";
import goshala from "@/assets/goshala.jpg";
import guesthouse from "@/assets/guesthouse.jpg";
import garden from "@/assets/garden.jpg";
import shop from "@/assets/shop.jpg";
import hero from "@/assets/hero-construction.jpg";
import { activityTabs, articles, festivals, impactStats, testimonial } from "@/data/temple";
import { SectionDivider } from "@/components/site/Emblem";
import { cn } from "@/lib/utils";

export function Activities() {
  const [active, setActive] = useState(activityTabs[0].id);
  const current = activityTabs.find((t) => t.id === active) ?? activityTabs[0];

  return (
    <section id="activities" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Activities & Programs</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-foreground sm:text-4xl">
            The temple is already serving Marwar
          </h2>
          <div className="mt-5">
            <SectionDivider />
          </div>
        </div>

        <div role="tablist" aria-label="Programs" className="mt-8 flex flex-wrap justify-center gap-2">
          {activityTabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "rounded-full border px-4 py-2.5 text-sm font-semibold transition",
                active === t.id
                  ? "border-primary bg-primary text-primary-foreground shadow-warm"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {current.cards.map((c) => (
            <article
              key={c.title}
              className="rounded-lg border border-border bg-card p-6 shadow-warm animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              <h3 className="font-display text-xl text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Festivals() {
  return (
    <section id="events" className="border-b border-border bg-gold-soft/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow inline-flex items-center gap-2">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden /> Festival Calendar
            </p>
            <h2 className="mt-2 font-display text-3xl text-foreground">Upcoming celebrations</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            Full calendar <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {festivals.map((f) => (
            <article key={f.name} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-warm">
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="font-display text-xl leading-none">{f.date.split(" ")[0]}</span>
                <span className="text-[0.65rem] tracking-widest uppercase">{f.date.split(" ")[1]}</span>
              </div>
              <div>
                <h3 className="font-display text-lg leading-snug text-foreground">{f.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VolunteerBand() {
  return (
    <section className="border-b border-border bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow inline-flex items-center gap-2 text-gold">
            <HandHeart className="h-3.5 w-3.5" aria-hidden /> Volunteer
          </p>
          <h2 className="mt-3 font-display text-3xl">Give your hands, not only your means</h2>
          <p className="mt-3 text-sm leading-relaxed opacity-80">
            The kitchen, the goshala, the Sunday school and every festival run on volunteers. Two hours a week
            is enough to make a difference — no prior experience needed.
          </p>
        </div>
        <button
          type="button"
          className="rounded-md border border-gold bg-transparent px-7 py-3.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-gold-foreground"
        >
          Register as Volunteer
        </button>
      </div>
    </section>
  );
}

export function ImpactRow() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">Impact So Far</p>
          <h2 className="mt-3 font-display text-3xl text-foreground">What devotee support has already built</h2>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {impactStats.map((s) => (
              <div key={s.label} className="border-l-2 border-gold pl-4">
                <dt className="font-display text-3xl text-foreground">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="paper rounded-lg border border-border p-7 shadow-warm">
          <Quote className="h-6 w-6 text-primary" aria-hidden />
          <blockquote className="mt-4 font-display text-lg leading-relaxed text-foreground">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-5 text-sm">
            <span className="font-semibold text-foreground">{testimonial.author}</span>
            <span className="block text-muted-foreground">{testimonial.role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: hero, alt: "Artisans raising a carved sandstone pillar at the temple site", span: "sm:col-span-2 sm:row-span-2" },
  { src: darshan, alt: "Deities on the altar during aarti", span: "" },
  { src: annadanam, alt: "Prasadam being served to devotees", span: "" },
  { src: goshala, alt: "Cows and calves in the goshala", span: "" },
  { src: garden, alt: "Tulsi plants in the temple garden", span: "" },
  { src: guesthouse, alt: "Pilgrim guest house verandah", span: "sm:col-span-2" },
  { src: shop, alt: "Prasadam and gift shop counter", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow inline-flex items-center gap-2">
              <Images className="h-3.5 w-3.5" aria-hidden /> Gallery
            </p>
            <h2 className="mt-2 font-display text-3xl text-foreground">Photographs from the site & seva</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            View Full Gallery <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="mt-8 grid auto-rows-[150px] grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryImages.map((g, i) => (
            <figure key={i} className={cn("overflow-hidden rounded-lg border border-border", g.span)}>
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section id="blog" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Knowledge Centre</p>
            <h2 className="mt-2 font-display text-3xl text-foreground">Updates & devotional reading</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            All articles <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="group rounded-lg border border-border bg-card p-6 shadow-warm transition hover:-translate-y-1 hover:shadow-lift">
              <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-primary uppercase">{a.kind}</span>
              <h3 className="mt-3 font-display text-xl leading-snug text-foreground group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-4 text-xs text-muted-foreground">{a.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
