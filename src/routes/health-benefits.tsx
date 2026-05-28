import { createFileRoute } from "@tanstack/react-router";

import { ContactSection, HealthSection, PageHero } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/health-benefits")({
  head: () => ({
    meta: [
      { title: "Health Benefits of Millets | Healthy Millet Products India" },
      {
        name: "description",
        content:
          "Discover the health benefits of millets and why Annavya Foods offers premium healthy millet products for modern Indian families and distributors.",
      },
      { property: "og:title", content: "Health Benefits of Millets | Annavya Foods" },
      {
        property: "og:description",
        content:
          "Understand why traditional Indian millets remain relevant for healthy modern living.",
      },
    ],
    links: [{ rel: "canonical", href: "/health-benefits" }],
  }),
  component: HealthBenefitsPage,
});

function HealthBenefitsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Health Benefits"
        title="Traditional grains that fit today's healthy life."
        description="Millets are loved for their good nutrition, easy use and balanced daily diet. Annavya Foods gives them to you with premium quality, cultural depth and trusted sourcing."
      />
      <HealthSection />
      <ContactSection />
    </SiteLayout>
  );
}
