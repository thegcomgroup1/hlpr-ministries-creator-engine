import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type LatestVideo = {
  id: string;
  title: string;
  description: string;
  published: string;
  url: string;
  embedUrl: string;
  thumbnail: string;
} | null;

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

export const getLatestYouTubeVideo = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ channelId: z.string() }).parse(d))
  .handler(async ({ data }): Promise<LatestVideo> => {
    if (!/^UC[\w-]{22}$/.test(data.channelId)) return null;
    try {
      const res = await fetch(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${data.channelId}`,
        { cf: { cacheTtl: 300 } } as RequestInit,
      );
      if (!res.ok) return null;
      const xml = await res.text();
      const entry = xml.match(/<entry>([\s\S]*?)<\/entry>/)?.[1];
      if (!entry) return null;
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      if (!id) return null;
      const title = decode(entry.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
      const description = decode(entry.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ?? "");
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
      return {
        id,
        title,
        description: description.split("\n")[0].slice(0, 220),
        published,
        url: `https://www.youtube.com/watch?v=${id}`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${id}?rel=0`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      };
    } catch {
      return null;
    }
  });
