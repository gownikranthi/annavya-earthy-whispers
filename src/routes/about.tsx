import { createFileRoute } from "@tanstack/react-router";

import { ContactSection, FarmersSection, IntroBand, PageHero, ProcessSection } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Annavya Foods | Premium Traditional Millet Brand India" },
      {
        name: "description",
        content:
          "Learn about Annavya Foods, a premium traditional Indian millet brand focused on direct farmer sourcing, premium quality, trust, and healthy living.",
      },
      { property: "og:title", content: "About Annavya Foods" },
      {
        property: "og:description",
        content:
          "A premium Indian millet brand rooted in farmer relationships, authenticity, and certified quality.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="An Indian millet brand shaped by heritage, sourcing discipline, and premium trust."
        description="Annavya Foods exists to present traditional Indian millets with elegance, authenticity, and a strong farm-to-family narrative for modern healthy living and distribution partnerships."
      />
      <IntroBand />
      <ProcessSection />
      <FarmersSection />
      <ContactSection />
    </SiteLayout>
  );
}
