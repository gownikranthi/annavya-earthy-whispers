import { createFileRoute } from "@tanstack/react-router";

import { ContactSection, PageHero, ProductShowcaseSection } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Organic & Bulk Millet Supplier India" },
      {
        name: "description",
        content:
          "Explore Foxtail Millet, Barnyard Millet, Browntop Millet, Little Millet, Kodo Millet, Ragi, Jowar, Bajra, and Proso Millet from Annavya Foods.",
      },
      { property: "og:title", content: "Products | Annavya Foods" },
      {
        property: "og:description",
        content: "Premium traditional Indian millet products for wholesale, distribution, and healthy modern households.",
      },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        title="A premium millet range made for health-loving families and bulk buyers."
        description="See our millet range — Foxtail, Barnyard, Kodo, Browntop, Little, Ragi, Jowar, Bajra and Proso — with premium quality and trusted sourcing."
      />
      <ProductShowcaseSection />
      <ContactSection />
    </SiteLayout>
  );
}
