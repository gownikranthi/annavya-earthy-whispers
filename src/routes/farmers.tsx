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
        title="Direct farmer millet sourcing that keeps authenticity visible."
        description="The brand story begins in the field. By placing farmers at the center, Annavya Foods communicates honesty, rural value, and a more meaningful premium grain promise."
      />
      <FarmersSection />
      <ContactSection />
    </SiteLayout>
  );
}
