import { useEffect, useMemo, useState } from "react";
import { HeartHandshake, PlayCircle, Sunrise, CalendarDays, Quote } from "lucide-react";

import heroImg from "@/assets/hero-construction.jpg";
import { donorTicker, fundedPercent, temple, todayStrip } from "@/data/temple";
import { Emblem } from "@/components/site/Emblem";

function useCountdown(target: string) {
  const targetTime = useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now === null) return null;
  const diff = Math.max(0, targetTime - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Hero() {
  const countdown = useCountdown(temple.openingDate);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="paper absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-14 pb-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20 lg:pb-14">
        <div>
          <p className="eyebrow">Under construction · Grand opening March 2027</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
            A temple is rising in Marwar —
            <span className="text-primary"> stone by stone, devotee by devotee.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Govardhan Dham will be Jodhpur's home for Sri Sri Radha Govardhannath — a carved sandstone
            sanctum, an Annadanam kitchen serving thousands, a goshala and a guest house for pilgrims.
            It is being built entirely from the offerings of families like yours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              <HeartHandshake className="h-4 w-4" aria-hidden />
              Donate Now
            </a>
            <a
              href="#darshan"
              className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-secondary"
            >
              <PlayCircle className="h-4 w-4" aria-hidden />
              Watch Live Darshan
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              ["18,400+", "Devotee donors"],
              ["3.2 acres", "Temple site"],
              ["54,000", "Meals / month"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl text-foreground">{value}</dt>
                <dd className="text-xs tracking-wide text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="arch-frame border border-border shadow-lift">
            <img
              src={heroImg}
              alt="Artisans raising a carved sandstone pillar at the Govardhan Dham construction site in Jodhpur"
              width={1600}
              height={1200}
              className="h-[380px] w-full object-cover sm:h-[460px]"
            />
          </div>

          <div className="relative -mt-16 ml-auto w-full max-w-md rounded-lg border border-border bg-card p-5 shadow-lift sm:-mt-20 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Construction snapshot</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                LIVE
              </span>
            </div>
            <p className="mt-3 font-display text-3xl text-foreground">
              {fundedPercent}% <span className="text-lg text-muted-foreground">funded</span>
            </p>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-sand">
              <div className="h-full rounded-full bg-gold" style={{ width: `${fundedPercent}%` }} />
            </div>
            <p className="mt-2.5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">₹7.46 Cr</span> raised of ₹12.50 Cr goal
            </p>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Countdown to 14 March 2027</p>
              <div className="mt-2 grid grid-cols-4 gap-2 text-center">
                {[
                  ["Days", countdown?.days],
                  ["Hrs", countdown?.hours],
                  ["Min", countdown?.minutes],
                  ["Sec", countdown?.seconds],
                ].map(([label, value]) => (
                  <div key={label as string} className="rounded-md bg-secondary px-1 py-2">
                    <span className="block font-display text-lg text-foreground tabular-nums">
                      {value === undefined ? "–" : String(value).padStart(2, "0")}
                    </span>
                    <span className="text-[0.6rem] tracking-wide text-muted-foreground uppercase">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donor ticker */}
      <div className="relative border-t border-border bg-ink py-3 text-ink-foreground">
        <div className="flex overflow-hidden">
          <div className="ticker-track flex shrink-0 gap-10 whitespace-nowrap pr-10">
            {[...donorTicker, ...donorTicker].map((d, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm">
                <Emblem className="h-4 w-4 opacity-70 invert" />
                <span className="font-semibold">{d.name}</span>
                <span className="text-gold">{d.amount}</span>
                <span className="opacity-70">{d.category}</span>
                <span className="opacity-50">· {d.time}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TodayStrip() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setQuoteIndex((i) => (i + 1) % todayStrip.quotes.length),
      6000,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-b border-border bg-secondary/70">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="eyebrow inline-flex items-center gap-1.5">
            <Sunrise className="h-3.5 w-3.5" aria-hidden /> Today's Aarti
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {todayStrip.artis.map((a) => (
              <li key={a.label} className="flex justify-between gap-4 border-b border-border/70 pb-1.5">
                <span className="text-muted-foreground">{a.label}</span>
                <span className="font-semibold text-foreground tabular-nums">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Today at the Temple</p>
          <p className="mt-3 font-display text-lg leading-snug text-foreground">{todayStrip.activity}</p>
          <p className="mt-2 text-sm text-muted-foreground">All are welcome. No registration needed.</p>
        </div>
        <div>
          <p className="eyebrow inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden /> Next Festival
          </p>
          <p className="mt-3 font-display text-3xl text-foreground">
            {todayStrip.nextFestival.days} <span className="text-base text-muted-foreground">days</span>
          </p>
          <p className="text-sm text-muted-foreground">to {todayStrip.nextFestival.name}</p>
        </div>
        <div className="rounded-lg border border-gold/40 bg-gold-soft/50 p-4">
          <Quote className="h-4 w-4 text-primary" aria-hidden />
          <p key={quoteIndex} className="mt-2 font-display text-base leading-relaxed text-foreground animate-in fade-in duration-700">
            {todayStrip.quotes[quoteIndex]}
          </p>
        </div>
      </div>
    </section>
  );
}
