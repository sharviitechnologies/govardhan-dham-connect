# Marwar Mandir Build

Govardhan Dham Marwar

Build a premium, warm, trustworthy homepage for "Hare Krishna Marwar Mandir — Govardhan Dham," a temple in Jodhpur currently under construction, raising funds from devotees for the build.

IMPORTANT: This is a visual design mockup only. Do not connect any database, backend, or payment gateway (no Supabase, no Stripe/Razorpay integration). All donation buttons, forms, progress bars and "live" data should be static UI with realistic placeholder values — nothing needs to actually process or persist data.

BRAND IDENTITY

Primary color: warm terracotta / burnt-orange (#C15B3C), used for accents, buttons, icons and the logo mark.

Secondary: warm off-white / cream background (#FBF8F4), deep charcoal-brown text (#2B211C) instead of pure black.

Accent: a muted gold (#D9A441) for highlights, progress bars and donation CTAs.

Logo: a circular emblem containing a temple silhouette with a kalash/tilak shape at the center, terracotta line-art on white or cream, paired with a clean serif-style wordmark "HARE KRISHNA MARWAR MANDIR." Use a similar circular emblem treatment as a recurring motif (section dividers, icon badges, subtle background watermark). Avoid generic AI-template defaults: no dark-mode neon, no default SaaS gradient hero, no abstract blob illustrations.

Typography: elegant serif for headings (Cambria, Lora or Playfair-style), clean sans-serif for body text.

SITE PURPOSE

A fundraising and community-engagement platform for a temple under construction, targeting a 2027 grand opening. Primary goal: convert visitors into donors and build a lasting devotee community. Tone: devotional, warm, transparent, trustworthy, not corporate.

STRUCTURE — build these sections in order:

1. Utility bar above the header: click-to-call phone number, click-to-email, small social icons.

2. Sticky header: logo mark + wordmark on the left, mega-menu navigation (About, Explore Temple, Construction, Seva & Donate, Activities, Events, Contact) with dropdown panels under "Explore Temple," "Construction," and "Seva & Donate," plus a prominent "Donate Now" button on the right.

3. Hero section: headline about the temple rising through devotee support, supporting subtext, two CTAs ("Donate Now" and "Watch Live Darshan"), and a live construction snapshot card showing % funded, amount raised vs goal, and countdown to March 2027. Include a subtle scrolling ticker below the hero showing recent donor activity (name, amount, category, time ago).

4. "Today at the Temple" strip: today's Aarti timings, today's activity, days to next festival, rotating daily devotional quote.

5. "Explore the Temple" grid: 6 cards — Deity Darshan, Annadanam Kitchen, Goshala, Guest House, Temple Garden, Gift & Prasadam Shop.

6. Live Darshan section: an embedded video player placeholder (styled like a live YouTube stream) with darshan timings listed beside it.

7. Temple Construction Portal: progress card (amount raised, goal, progress bar, fund utilisation breakdown by category), milestone timeline (Foundation Complete → Sanctum In Progress → Guest Wing Upcoming → Grand Opening), supporting copy on transparency.

8. Donation platform: seva category grid (Mandir Nirman, Annadanam, Gau Seva, Festival Seva) with descriptions and starting amounts, supported payment methods row (UPI, Cards, Net Banking, QR, International, Recurring), and a 3-tier donor recognition section (Seva Sathi, Nirman Patron, Founding Circle) with benefits listed per tier.

9. Seva Booking section, distinct from donations: cards for Puja Booking, Prasadam Booking, Birthday Seva, Anniversary Seva, and Sankalp, each with a "Book Now" button and short description.

10. "Sponsor a Piece of the Temple" campaign strip: Sponsor a Stone, Sponsor a Square Foot, Sponsor a Pillar, Sponsor Marble, Sponsor a Tree, each with a suggested amount, styled distinctly to stand out as a signature program.

11. Trust & Governance section: short blocks on Temple History, Trust Registration info, Leadership/Trustees, with a trust badge row (80G registered, NGO Darpan, etc. — placeholder badge styling).

12. Activities & Programs: tabbed section (Education & Youth, Food Distribution, Cow Protection, Cultural Programs, Community Service) with cards under the active tab.

13. Festival calendar strip: 4 upcoming festival cards with date and name.

14. Volunteer CTA band: short pitch to join as a volunteer with a "Register as Volunteer" button, distinct visual treatment from the donation sections.

15. Impact stats row (devotees contributed, % funded, meals served monthly, cows at Goshala) alongside a devotee testimonial quote.

16. Photo/Video Gallery preview: a masonry or grid layout of 6-8 image placeholders with a "View Full Gallery" link.

17. Blog/Knowledge Centre preview: 3 article cards (construction update, festival explainer, seva story).

18. FAQ accordion: 5-6 common questions (how donations are used, tax benefits, visiting hours, how to volunteer, etc.).

19. Contact section: enquiry form (name, email, message) alongside an embedded map placeholder and physical address.

20. Newsletter signup band.

21. Full footer: temple description, quick links (Temple, Give, Connect, Legal categories), bank details / 80G link, social icons, WhatsApp contact.

Also include a floating WhatsApp contact button (bottom-right).

TONE & QUALITY BAR

Warm, devotional, transparent, trustworthy — a well-funded, well-run institution, not a generic charity template. Fully responsive for mobile. Use real interactive elements (working tabs, working FAQ accordion, hover states on menu, animated progress bar on scroll) where feasible, all with static placeholder data only.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://govardhan-dham-connect.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/93beeffb-4755-4839-aa14-59e75b771866).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
