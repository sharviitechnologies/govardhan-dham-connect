# Govardhan Dham — Temple Homepage (Visual Mockup)

A single, premium homepage for "Hare Krishna Marwar Mandir — Govardhan Dham," Jodhpur. Fully static: no database, no payments, no backend. Every donation button, form, counter and "live" figure is placeholder UI.

## Brand foundation

- Terracotta `#C15B3C` for accents, buttons, icons, logo mark.
- Cream `#FBF8F4` background, charcoal-brown `#2B211C` text (no pure black, no dark mode).
- Muted gold `#D9A441` for progress bars, highlights, donation CTAs.
- Headings: Lora (serif). Body: a clean sans (Work Sans). Loaded via a font link in the root route.
- Circular emblem logo (temple silhouette + kalash/tilak, terracotta line art on cream) generated as an image asset, reused as section divider, icon badge, and faint background watermark.
- Deliberately avoiding generic template look: no gradient SaaS hero, no neon, no abstract blobs. Warm paper-like surfaces, thin gold rules, arch-shaped image frames echoing temple architecture.

## Sections, in order

1. Utility bar — click-to-call, click-to-email, social icons.
2. Sticky header — emblem + wordmark, nav (About, Explore Temple, Construction, Seva & Donate, Activities, Events, Contact) with hover mega-menu panels under Explore Temple / Construction / Seva & Donate, plus Donate Now button. Mobile: slide-in drawer with collapsible groups.
3. Hero — headline on the temple rising through devotee support, subtext, "Donate Now" + "Watch Live Darshan", and a construction snapshot card (% funded, raised vs goal, countdown to March 2027). Marquee ticker below with recent donor activity.
4. Today at the Temple strip — aarti timings, today's activity, days to next festival, rotating daily quote.
5. Explore the Temple — 6 arch-framed cards (Deity Darshan, Annadanam Kitchen, Goshala, Guest House, Temple Garden, Gift & Prasadam Shop).
6. Live Darshan — styled live-stream player placeholder with darshan timings beside it.
7. Construction Portal — progress card with animated-on-scroll bar, fund utilisation breakdown, milestone timeline (Foundation → Sanctum → Guest Wing → Grand Opening), transparency copy.
8. Donation platform — 4 seva categories with starting amounts, payment-method row (UPI, Cards, Net Banking, QR, International, Recurring), 3 donor tiers with benefits.
9. Seva Booking — Puja, Prasadam, Birthday, Anniversary, Sankalp cards with Book Now.
10. Sponsor a Piece of the Temple — Stone, Square Foot, Pillar, Marble, Tree with suggested amounts; signature dark-terracotta treatment.
11. Trust & Governance — history, trust registration, trustees, placeholder trust badges (80G, NGO Darpan).
12. Activities & Programs — working tabs across 5 programs with cards.
13. Festival calendar — 4 upcoming festival cards.
14. Volunteer CTA band — gold-leaning band, Register as Volunteer.
15. Impact stats row + devotee testimonial.
16. Gallery preview — 6-8 image tiles in a mixed-size grid, View Full Gallery link.
17. Blog preview — 3 article cards.
18. FAQ — working accordion, 6 questions.
19. Contact — enquiry form (non-submitting) + map placeholder + address.
20. Newsletter band.
21. Footer — description, quick links (Temple, Give, Connect, Legal), bank details / 80G line, socials, WhatsApp.

Plus a floating WhatsApp button, bottom-right.

## Interactions

Hover mega-menus, mobile drawer, tabbed activities, FAQ accordion, scroll-triggered progress/count animations, donor ticker marquee, rotating quote. All data hardcoded.

## Technical notes

- Tokens (terracotta, cream, charcoal, gold, arch radii, warm shadows) go into `src/styles.css` as oklch semantic variables; components use token classes only.
- Homepage replaces `src/routes/index.tsx`, composed from section components under `src/components/home/`, with shared data in a `src/data/temple.ts` placeholder module.
- shadcn Tabs/Accordion/Button/Card reused, restyled to the brand rather than defaults.
- Emblem plus a small set of temple/goshala/kitchen/garden images generated into `src/assets/`.
- Route-level `head()` with temple-specific title, description, OG/Twitter tags; single H1; semantic sections; alt text everywhere.
