import { createFileRoute } from "@tanstack/react-router";
import { CreatorSite } from "@/components/creator/CreatorSite";
import { siteConfig } from "@/config/site";
import { getLatestYouTubeVideo } from "@/lib/youtube.functions";

export const Route = createFileRoute("/")({
  loader: async () => {
    const channelId = siteConfig.featuredContent.youtubeChannelId;
    const latestVideo = channelId
      ? await getLatestYouTubeVideo({ data: { channelId } })
      : null;
    return { latestVideo };
  },
  staleTime: 5 * 60_000,
  head: () => ({
    meta: [
      { title: `${siteConfig.creator.name} — ${siteConfig.creator.tagline}` },
      { name: "description", content: siteConfig.creator.shortBio },
      { property: "og:title", content: `${siteConfig.creator.name} — ${siteConfig.creator.tagline}` },
      { property: "og:description", content: siteConfig.creator.shortBio },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: siteConfig.brand.heroMedia.imageSrc },
      { name: "twitter:image", content: siteConfig.brand.heroMedia.imageSrc },
    ],
  }),
  component: Index,
});

function Index() {
  return <CreatorSite />;
}
