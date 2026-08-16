import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer, WhatsAppButton } from "@/components/site/Footer";
import { Hero, TodayStrip } from "@/components/home/Hero";
import { Explore, LiveDarshan } from "@/components/home/Explore";
import { ConstructionPortal, DonatePlatform } from "@/components/home/Construction";
import { SevaBooking, SponsorStrip, TrustGovernance } from "@/components/home/Seva";
import {
  Activities,
  BlogPreview,
  Festivals,
  Gallery,
  ImpactRow,
  VolunteerBand,
} from "@/components/home/Community";
import { Contact, Faq, Newsletter } from "@/components/home/Connect";

const title = "Govardhan Dham Jodhpur | Hare Krishna Marwar Mandir";
const description =
  "Help build Govardhan Dham, Jodhpur — a carved sandstone temple, Annadanam kitchen, goshala and pilgrim guest house opening March 2027. Donate, sponsor a stone or book a seva.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TodayStrip />
        <Explore />
        <LiveDarshan />
        <ConstructionPortal />
        <DonatePlatform />
        <SevaBooking />
        <SponsorStrip />
        <TrustGovernance />
        <Activities />
        <Festivals />
        <VolunteerBand />
        <ImpactRow />
        <Gallery />
        <BlogPreview />
        <Faq />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
