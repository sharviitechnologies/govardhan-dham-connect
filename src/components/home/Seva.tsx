import { Gem, BadgeCheck } from "lucide-react";

import { sevaBookings, sponsorItems, trustBadges, trustBlocks } from "@/data/temple";
import { Emblem, SectionDivider } from "@/components/site/Emblem";
import sevaPuja from "@/assets/seva-puja.jpg";
import sevaPrasadam from "@/assets/seva-prasadam.jpg";
import sevaBirthday from "@/assets/seva-birthday.jpg";
import sevaAnniversary from "@/assets/seva-anniversary.jpg";
import sevaSankalp from "@/assets/seva-sankalp.jpg";
import sponsorStone from "@/assets/sponsor-stone.jpg";
import sponsorSqft from "@/assets/sponsor-sqft.jpg";
import sponsorPillar from "@/assets/sponsor-pillar.jpg";
import sponsorMarble from "@/assets/sponsor-marble.jpg";
import sponsorTree from "@/assets/sponsor-tree.jpg";

const sevaMedia = [
  { src: sevaPuja, alt: "Priest performing abhishek puja with brass vessels on a marble altar" },
  { src: sevaPrasadam, alt: "Plates of prasadam prepared for distribution at the temple" },
  { src: sevaBirthday, alt: "Family receiving garland and blessed sweets from a temple priest" },
  { src: sevaAnniversary, alt: "Couple offering a lamp before the temple altar" },
  { src: sevaSankalp, alt: "Folded hands holding sacred thread and tulsi before a temple lamp" },
];

const sponsorMedia = [
  { src: sponsorStone, alt: "Stack of hand-cut carved sandstone temple blocks" },
  { src: sponsorSqft, alt: "Newly laid sandstone temple flooring being measured" },
  { src: sponsorPillar, alt: "Ornately carved sandstone temple pillar" },
  { src: sponsorMarble, alt: "Carved white marble altar panels" },
  { src: sponsorTree, alt: "Young sapling planted in the temple garden" },
];


export function SevaBooking() {
  return (
    <section id="seva-booking" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Seva Booking</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-foreground sm:text-4xl">
            Book a rite in your family's name
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Distinct from a construction donation — these are personal offerings performed by our priests on a
            date you choose.
          </p>
          <div className="mt-5">
            <SectionDivider />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {sevaBookings.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-warm transition hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={sevaMedia[i]!.src}
                alt={sevaMedia[i]!.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <button
                  type="button"
                  className="mt-5 rounded-md border border-primary/35 px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export function SponsorStrip() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <Emblem className="pointer-events-none absolute -top-16 -right-16 h-80 w-80 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow inline-flex items-center gap-2 text-gold">
            <Gem className="h-3.5 w-3.5" aria-hidden /> Signature Programme
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Sponsor a Piece of the Temple</h2>
          <p className="mt-4 text-sm leading-relaxed opacity-90 sm:text-base">
            Put your family's name into the fabric of Govardhan Dham. Each sponsorship is recorded in the
            nirman ledger and acknowledged with a sankalp certificate.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sponsorItems.map((s, i) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-lg border border-gold/40 bg-white/10 backdrop-blur-sm transition hover:bg-white/15"
            >
              <img
                src={sponsorMedia[i]!.src}
                alt={sponsorMedia[i]!.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-display text-lg leading-snug">{s.title}</h3>
                <p className="mt-3 font-display text-2xl text-gold">{s.amount}</p>
                <p className="mt-1 text-xs opacity-80">{s.note}</p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-gold px-3 py-2.5 text-xs font-bold tracking-wide text-gold-foreground uppercase transition hover:brightness-105"
                >
                  Sponsor
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export function TrustGovernance() {
  return (
    <section id="trust" className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <p className="eyebrow">Trust & Governance</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-foreground sm:text-4xl">
            Built by a registered trust, answerable to its devotees
          </h2>
          <div className="mt-5">
            <SectionDivider />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {trustBlocks.map((b) => (
            <article key={b.title} className="rounded-lg border border-border bg-card p-6 shadow-warm">
              <h3 className="font-display text-xl text-foreground">{b.title}</h3>
              <span className="mt-3 block h-px w-14 bg-gold" aria-hidden />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {trustBadges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-card px-4 py-2 text-xs font-semibold text-foreground"
            >
              <BadgeCheck className="h-4 w-4 text-primary" aria-hidden />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
