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
        title="A premium millet portfolio crafted for health-led families and bulk buyers."
        description="Discover our curated millet range, from Foxtail and Barnyard to Kodo, Browntop, Ragi, Jowar, Bajra, and Proso, presented with premium quality and authentic sourcing."
      />
      <ProductShowcaseSection />
      <ContactSection />
    </SiteLayout>
  );
}
