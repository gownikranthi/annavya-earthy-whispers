import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import {
  BlogPreviewSection,
  BulkOrderSection,
  ContactSection,
  FarmersSection,
  HealthSection,
  HeroSection,
  IntroBand,
  ProcessSection,
  ProductShowcaseSection,
} from "@/components/site-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Annavya Foods | Premium Millet Supplier India" },
      {
        name: "description",
        content:
          "Annavya Foods is a premium millet supplier in India offering direct farmer millets, bulk supply, organic trust, and healthy traditional grain products.",
      },
      { property: "og:title", content: "Annavya Foods | Premium Millet Supplier India" },
      {
        property: "og:description",
        content:
          "Premium traditional Indian millets with direct farmer sourcing, certified quality, and inquiry-first distribution support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <IntroBand />
      <ProcessSection />
      <ProductShowcaseSection compact />
      <HealthSection />
      <FarmersSection />
      <BulkOrderSection />
      <BlogPreviewSection />
      <ContactSection />
    </SiteLayout>
  );
}
