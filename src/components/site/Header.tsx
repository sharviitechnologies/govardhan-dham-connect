import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  X,
  ChevronDown,
  MapPin,
} from "lucide-react";

import { temple } from "@/data/temple";
import { Emblem } from "./Emblem";
import { cn } from "@/lib/utils";

type MegaItem = { label: string; desc: string };

const megaMenus: Record<string, { intro: string; items: MegaItem[] }> = {
  "Explore Temple": {
    intro: "Every part of Govardhan Dham, from the sanctum to the goshala.",
    items: [
      { label: "Deity Darshan", desc: "Altars, timings and the marble sanctum" },
      { label: "Annadanam Kitchen", desc: "Free sattvic meals, every day" },
      { label: "Goshala", desc: "Rescued Marwari and Tharparkar cows" },
      { label: "Guest House", desc: "42 rooms for visiting pilgrims" },
      { label: "Temple Garden", desc: "Tulsi courtyards and parikrama path" },
      { label: "Gift & Prasadam Shop", desc: "Beads, books and blessed sweets" },
    ],
  },
  Construction: {
    intro: "Follow the build, rupee by rupee and stone by stone.",
    items: [
      { label: "Progress Portal", desc: "Live funding and spend breakdown" },
      { label: "Milestone Timeline", desc: "Foundation to grand opening" },
      { label: "Site Photo Log", desc: "Monthly photographs from the site" },
      { label: "Fund Utilisation", desc: "Where each contribution goes" },
      { label: "Architecture Plans", desc: "Elevations and stone detailing" },
      { label: "Grand Opening 2027", desc: "Pratishtha Mahotsav schedule" },
    ],
  },
  "Seva & Donate": {
    intro: "Choose a seva that matches your family's intention.",
    items: [
      { label: "Mandir Nirman", desc: "Stone, marble and carving work" },
      { label: "Annadanam", desc: "Sponsor a day of prasadam" },
      { label: "Gau Seva", desc: "Fodder and medicine for the cows" },
      { label: "Sponsor a Stone", desc: "Your name in the temple fabric" },
      { label: "Puja & Sankalp", desc: "Book a rite in your name" },
      { label: "Donor Recognition", desc: "Seva Sathi to Founding Circle" },
    ],
  },
};

const navItems = [
  { label: "About" },
  { label: "Explore Temple" },
  { label: "Construction" },
  { label: "Seva & Donate" },
  { label: "Activities" },
  { label: "Events" },
  { label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={temple.phoneHref} className="inline-flex items-center gap-1.5 hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden />
              {temple.phone}
            </a>
            <a href={`mailto:${temple.email}`} className="inline-flex items-center gap-1.5 hover:text-gold">
              <Mail className="h-3.5 w-3.5 text-gold" aria-hidden />
              {temple.email}
            </a>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
              {temple.city}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden opacity-70 md:inline">Darshan open 4:45 AM – 8:45 PM</span>
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="opacity-80 transition hover:text-gold hover:opacity-100">
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-warm",
        )}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex items-center gap-3">
            <Emblem className="h-11 w-11 shrink-0" alt="Govardhan Dham emblem" />
            <span className="leading-tight">
              <span className="block font-display text-[0.95rem] font-semibold tracking-[0.06em] text-foreground sm:text-base">
                HARE KRISHNA MARWAR MANDIR
              </span>
              <span className="block text-[0.65rem] tracking-[0.28em] text-primary">GOVARDHAN DHAM · JODHPUR</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {navItems.map((item) => {
              const mega = megaMenus[item.label];
              return (
                <div key={item.label} onMouseEnter={() => setOpen(mega ? item.label : null)}>
                  <a
                    href="#"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary",
                      open === item.label && "bg-secondary text-primary",
                    )}
                  >
                    {item.label}
                    {mega && <ChevronDown className="h-3.5 w-3.5" aria-hidden />}
                  </a>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#donate"
              className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110 sm:inline-flex"
            >
              Donate Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="rounded-md border border-border p-2.5 text-foreground xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Mega menu panel */}
        {open && megaMenus[open] && (
          <div
            className="hidden border-t border-border bg-popover shadow-lift xl:block"
            onMouseEnter={() => setOpen(open)}
          >
            <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[260px_1fr]">
              <div className="paper rounded-lg border border-border p-5">
                <Emblem className="h-9 w-9" />
                <h3 className="mt-3 font-display text-lg text-foreground">{open}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{megaMenus[open].intro}</p>
              </div>
              <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {megaMenus[open].items.map((sub) => (
                  <li key={sub.label}>
                    <a href="#" className="block rounded-md p-3 transition-colors hover:bg-secondary">
                      <span className="block text-sm font-semibold text-foreground">{sub.label}</span>
                      <span className="block text-xs text-muted-foreground">{sub.desc}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-background p-5 shadow-lift">
            <div className="flex items-center justify-between">
              <Emblem className="h-9 w-9" />
              <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <nav className="mt-6 flex-1" aria-label="Mobile">
              <ul className="divide-y divide-border">
                {navItems.map((item) => {
                  const mega = megaMenus[item.label];
                  const isOpen = mobileGroup === item.label;
                  return (
                    <li key={item.label} className="py-1">
                      {mega ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setMobileGroup(isOpen ? null : item.label)}
                            className="flex w-full items-center justify-between py-3 text-left font-display text-base text-foreground"
                            aria-expanded={isOpen}
                          >
                            {item.label}
                            <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} aria-hidden />
                          </button>
                          {isOpen && (
                            <ul className="pb-3 pl-3">
                              {mega.items.map((sub) => (
                                <li key={sub.label}>
                                  <a href="#" className="block py-2 text-sm text-muted-foreground">
                                    {sub.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <a href="#" className="block py-3 font-display text-base text-foreground">
                          {item.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <a
              href="#donate"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
