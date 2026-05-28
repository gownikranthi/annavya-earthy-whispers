import { createFileRoute } from "@tanstack/react-router";

import { BulkOrderSection, ContactSection, PageHero } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Annavya Foods | WhatsApp & Bulk Distributor Inquiries" },
      {
        name: "description",
        content:
          "Contact Annavya Foods for WhatsApp inquiries, direct phone calls, and bulk distributor millet supply across India.",
      },
      { property: "og:title", content: "Contact Annavya Foods" },
      {
        property: "og:description",
        content:
          "Reach Annavya Foods for premium millet product inquiries and distributor leads.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Inquiry-led support for millet buyers, distributors, and wellness-led brands."
        description="For product questions, bulk order discussions, and distributor interest, connect with Annavya Foods on WhatsApp, phone, Instagram, or Facebook."
      />
      <BulkOrderSection />
      <ContactSection />
    </SiteLayout>
  );
}
