import { Check, Hammer, Clock, ShieldCheck, ArrowRight } from "lucide-react";

import { fundUtilisation, fundedPercent, milestones, sevaCategories, paymentMethods, donorTiers } from "@/data/temple";
import { useInView } from "@/hooks/use-in-view";
import { SectionDivider } from "@/components/site/Emblem";
import { cn } from "@/lib/utils";

export function ConstructionPortal() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="construction" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Temple Construction Portal</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-foreground sm:text-4xl">
            Every rupee accounted for, in the open
          </h2>
          <div className="mt-5">
            <SectionDivider />
          </div>
        </div>

        <div ref={ref} className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-lg border border-border bg-card p-6 shadow-warm sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Raised so far</p>
                <p className="mt-1 font-display text-4xl text-foreground">₹7,46,00,000</p>
              </div>
              <div className="text-right">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Goal</p>
                <p className="mt-1 font-display text-2xl text-muted-foreground">₹12,50,00,000</p>
              </div>
            </div>

            <div className="mt-6 h-3.5 w-full overflow-hidden rounded-full bg-sand">
              <div
                className="h-full rounded-full bg-gold transition-[width] duration-[1600ms] ease-out"
                style={{ width: inView ? `${fundedPercent}%` : "0%" }}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">{fundedPercent}% funded</span> · ₹5.04 Cr still needed to
              finish the sanctum and guest wing before March 2027.
            </p>

            <h3 className="mt-8 font-display text-lg text-foreground">Fund utilisation</h3>
            <ul className="mt-4 space-y-4">
              {fundUtilisation.map((f) => (
                <li key={f.label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{f.label}</span>
                    <span className="font-semibold text-foreground tabular-nums">{f.percent}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary/80 transition-[width] duration-[1400ms] ease-out"
                      style={{ width: inView ? `${f.percent}%` : "0%" }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-7 flex items-start gap-2 rounded-md bg-secondary p-4 text-xs leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              Accounts are audited annually and a utilisation statement is published every month. Figures shown
              here are placeholder values for design review.
            </p>
          </div>

          <ol className="relative space-y-6 border-l border-border pl-8">
            {milestones.map((m) => (
              <li key={m.title} className="relative">
                <span
                  className={cn(
                    "absolute -left-[2.55rem] flex h-7 w-7 items-center justify-center rounded-full border",
                    m.status === "done" && "border-primary bg-primary text-primary-foreground",
                    m.status === "active" && "border-gold bg-gold text-gold-foreground",
                    m.status === "upcoming" && "border-border bg-card text-muted-foreground",
                  )}
                  aria-hidden
                >
                  {m.status === "done" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : m.status === "active" ? (
                    <Hammer className="h-3.5 w-3.5" />
                  ) : (
                    <Clock className="h-3.5 w-3.5" />
                  )}
                </span>
                <div className="rounded-lg border border-border bg-card p-5 shadow-warm">
                  <p className="text-[0.7rem] tracking-[0.16em] text-primary uppercase">{m.date}</p>
                  <h3 className="mt-1.5 font-display text-xl text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function DonatePlatform() {
  return (
    <section id="donate" className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Seva & Donate</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-foreground sm:text-4xl">
            Choose the seva your family wishes to offer
          </h2>
          <div className="mt-5">
            <SectionDivider />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sevaCategories.map((s, i) => (
            <article key={s.title} className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-warm">
              <img
                src={categoryMedia[i]!.src}
                alt={categoryMedia[i]!.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <p className="mt-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">Starting from</p>
                <p className="font-display text-2xl text-primary">{s.from}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-semibold text-gold-foreground transition hover:brightness-105"
                >
                  Contribute
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </article>
          ))}

        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-lg border border-border bg-card px-6 py-5">
          <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">Accepted methods</span>
          {paymentMethods.map((p) => (
            <span
              key={p}
              className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-center">
            <p className="eyebrow">Donor Recognition</p>
            <h3 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
              A lasting place in the temple's story
            </h3>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {donorTiers.map((t) => (
              <article
                key={t.tier}
                className={cn(
                  "rounded-lg border p-6 shadow-warm",
                  t.featured ? "border-gold bg-ink text-ink-foreground shadow-lift" : "border-border bg-card",
                )}
              >
                {t.featured && (
                  <span className="inline-block rounded-full bg-gold px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.16em] text-gold-foreground uppercase">
                    Most chosen
                  </span>
                )}
                <h4 className={cn("mt-3 font-display text-2xl", t.featured ? "text-gold" : "text-foreground")}>
                  {t.tier}
                </h4>
                <p className={cn("mt-1 text-sm", t.featured ? "opacity-80" : "text-muted-foreground")}>{t.amount}</p>
                <ul className="mt-5 space-y-3 text-sm">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <Check className={cn("mt-0.5 h-4 w-4 shrink-0", t.featured ? "text-gold" : "text-primary")} aria-hidden />
                      <span className={t.featured ? "opacity-90" : "text-muted-foreground"}>{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={cn(
                    "mt-6 w-full rounded-md px-4 py-3 text-sm font-semibold transition",
                    t.featured
                      ? "bg-gold text-gold-foreground hover:brightness-105"
                      : "border border-primary/35 text-primary hover:bg-secondary",
                  )}
                >
                  Join {t.tier}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
