import { createFileRoute } from "@tanstack/react-router";

import { ContactSection, FarmersSection, PageHero } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/farmers")({
  head: () => ({
    meta: [
      { title: "Farmers | Direct Farmer Millet Sourcing by Annavya Foods" },
      {
        name: "description",
        content:
          "Explore how Annavya Foods builds trust through direct farmer millet sourcing, authentic agricultural storytelling, and premium millet supply.",
      },
      { property: "og:title", content: "Farmers | Annavya Foods" },
      {
        property: "og:description",
        content:
          "A closer look at the farmer-first sourcing story behind Annavya Foods premium millets.",
      },
    ],
    links: [{ rel: "canonical", href: "/farmers" }],
  }),
  component: FarmersPage,
});

function FarmersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Farmers"
        title="Direct farmer millet sourcing that keeps things real."
        description="The brand story starts in the field. By keeping farmers at the centre, Annavya Foods shows honesty, rural value and a deeper premium grain promise."
      />
      <FarmersSection />
      <ContactSection />
    </SiteLayout>
  );
}
