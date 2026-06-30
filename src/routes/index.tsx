import { createFileRoute } from "@tanstack/react-router";
import { CreatorSite } from "@/components/creator/CreatorSite";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.creator.name} — ${siteConfig.creator.tagline}` },
      { name: "description", content: siteConfig.creator.shortBio },
      { property: "og:title", content: `${siteConfig.creator.name} — ${siteConfig.creator.tagline}` },
      { property: "og:description", content: siteConfig.creator.shortBio },
      { property: "og:image", content: siteConfig.brand.heroMedia.imageSrc },
      { name: "twitter:image", content: siteConfig.brand.heroMedia.imageSrc },
    ],
  }),
  component: Index,
});

function Index() {
  return <CreatorSite />;
}
