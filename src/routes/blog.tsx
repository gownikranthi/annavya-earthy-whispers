import { createFileRoute } from "@tanstack/react-router";

import { BlogPreviewSection, ContactSection, PageHero } from "@/components/site-sections";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Traditional Indian Millets, Health & Sourcing" },
      {
        name: "description",
        content:
          "Read Annavya Foods articles on traditional Indian millets, direct farmer sourcing, healthy millet products, and premium grain quality.",
      },
      { property: "og:title", content: "Blog | Annavya Foods" },
      {
        property: "og:description",
        content: "Insights on millet health, sourcing trust, and premium traditional grain storytelling.",
      },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Stories and insights on millets, wellness and Indian farming heritage."
        description="This content layer builds organic search visibility and helps visitors understand the nutrition, culture and sourcing depth of the Annavya Foods brand."
      />
      <BlogPreviewSection />
      <ContactSection />
    </SiteLayout>
  );
}
