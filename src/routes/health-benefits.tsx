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
        title="Traditional grains with strong relevance for modern healthy lifestyles."
        description="Millets are valued for their wholesome nutrition, versatility, and role in balanced daily diets. Annavya Foods presents them with premium quality, cultural depth, and trustworthy sourcing."
      />
      <HealthSection />
      <ContactSection />
    </SiteLayout>
  );
}
