import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, Landmark } from "lucide-react";

import { footerLinks, temple } from "@/data/temple";
import { Emblem } from "./Emblem";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Emblem className="h-12 w-12" alt="Govardhan Dham emblem" />
            <span>
              <span className="block font-display text-sm tracking-[0.08em]">HARE KRISHNA MARWAR MANDIR</span>
              <span className="block text-[0.65rem] tracking-[0.26em] text-gold">GOVARDHAN DHAM</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-75">
            A temple, goshala, Annadanam kitchen and pilgrim guest house rising in Jodhpur — built entirely from
            the offerings of Marwar's devotees, opening March 2027.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={temple.phoneHref} className="flex items-center gap-2 opacity-85 hover:text-gold">
              <Phone className="h-4 w-4 text-gold" aria-hidden /> {temple.phone}
            </a>
            <a href={`mailto:${temple.email}`} className="flex items-center gap-2 opacity-85 hover:text-gold">
              <Mail className="h-4 w-4 text-gold" aria-hidden /> {temple.email}
            </a>
            <a href={temple.whatsapp} className="flex items-center gap-2 opacity-85 hover:text-gold">
              <MessageCircle className="h-4 w-4 text-gold" aria-hidden /> WhatsApp the temple office
            </a>
          </div>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="font-display text-sm tracking-[0.16em] text-gold uppercase">{group.heading}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="opacity-75 transition hover:text-gold hover:opacity-100">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex flex-wrap items-start gap-x-8 gap-y-3 text-xs opacity-75">
            <span className="inline-flex items-center gap-2">
              <Landmark className="h-4 w-4 text-gold" aria-hidden />
              Bank: Hare Krishna Marwar Trust · A/c 5021 4478 9910 · IFSC HDFC0001472 · Jodhpur Pal Road
            </span>
            <a href="#" className="text-gold hover:underline">
              Download 80G certificate
            </a>
          </div>
          <p className="mt-4 text-xs opacity-55">
            © 2026 Hare Krishna Marwar Trust, Jodhpur. Design preview — figures and registration details shown are
            placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={temple.whatsapp}
      aria-label="Chat with the temple office on WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:brightness-110"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
