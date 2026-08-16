import { Play, Radio } from "lucide-react";

import darshan from "@/assets/darshan.jpg";
import annadanam from "@/assets/annadanam.jpg";
import goshala from "@/assets/goshala.jpg";
import guesthouse from "@/assets/guesthouse.jpg";
import garden from "@/assets/garden.jpg";
import shop from "@/assets/shop.jpg";
import { darshanTimings, exploreCards } from "@/data/temple";
import { SectionDivider } from "@/components/site/Emblem";

const images = [darshan, annadanam, goshala, guesthouse, garden, shop];
const alts = [
  "Radha Krishna deities on a marble altar with garlands and lamps",
  "Volunteers serving free prasadam meals to seated devotees",
  "White indigenous cows and calves resting in a clean cow shelter",
  "Sandstone pilgrim guest house rooms with an arched verandah",
  "Temple garden with tulsi plants in terracotta pots and marigolds",
  "Temple gift and prasadam shop counter with brass items and books",
];

export function Explore() {
  return (
    <section id="explore" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Explore the Temple</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-foreground sm:text-4xl">
            Six spaces, one shelter for Marwar's devotees
          </h2>
          <div className="mt-5">
            <SectionDivider />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCards.map((card, i) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-warm transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={images[i]}
                  alt={alts[i]}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-secondary px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-primary uppercase">
                  {card.tag}
                </span>
                <h3 className="mt-3 font-display text-xl text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LiveDarshan() {
  return (
    <section id="darshan" className="border-b border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:py-20">
        <div>
          <p className="eyebrow inline-flex items-center gap-2 text-gold">
            <Radio className="h-3.5 w-3.5" aria-hidden /> Live Darshan
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Take darshan from wherever you are</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-80">
            Our temporary darshan hall streams every aarti. Once the sanctum is complete, the stream moves
            to the main altar of Sri Sri Radha Govardhannath.
          </p>

          <div className="mt-7 overflow-hidden rounded-lg border border-gold/25 bg-black/40">
            <div className="relative aspect-video">
              <img
                src={darshan}
                alt="Live stream preview of the temple altar during aarti"
                loading="lazy"
                width={1200}
                height={900}
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink/40">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lift">
                  <Play className="h-7 w-7 text-primary-foreground" aria-hidden />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-destructive px-3 py-1 text-xs font-semibold tracking-wide text-destructive-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" aria-hidden />
                  LIVE · Sandhya Aarti
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gold/20 px-4 py-3 text-xs opacity-80">
              <span>Govardhan Dham · Temporary Darshan Hall</span>
              <span className="tabular-nums">1,284 devotees watching</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gold/25 bg-white/5 p-6">
          <h3 className="font-display text-xl text-gold">Darshan & Aarti Timings</h3>
          <ul className="mt-4 divide-y divide-white/10">
            {darshanTimings.map((t) => (
              <li key={t.label} className="flex items-center justify-between gap-4 py-3 text-sm">
                <span className="opacity-85">{t.label}</span>
                <span className="font-semibold tabular-nums text-gold">{t.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed opacity-70">
            The altar is closed between darshan slots while the deities rest and are offered bhoga.
            Timings shift slightly on festival days.
          </p>
        </div>
      </div>
    </section>
  );
}
