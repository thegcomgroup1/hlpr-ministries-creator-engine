import { useState } from "react";
import { getRouteApi } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { Play, Youtube } from "lucide-react";

const route = getRouteApi("/");

export function FeaturedContent() {
  const f = siteConfig.featuredContent;
  const { latestVideo: v } = route.useLoaderData();
  const [playing, setPlaying] = useState(false);

  const isVideo = !!v;
  const title = v?.title ?? f.title;
  const summary = v?.description || f.summary;
  const watchUrl = v?.url ?? f.watchUrl;
  const embedUrl = v ? `${v.embedUrl}&autoplay=1` : f.embedUrl;
  const cover = v?.thumbnail ?? siteConfig.brand.pageHeroes.listen;
  const showEmbed = v ? playing : !!f.embedUrl;

  return (
    <section id="listen" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Latest</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-tight text-foreground">
          The newest message.
        </h2>
        <div className="mt-10 grid md:grid-cols-12 gap-0 items-stretch rounded-3xl overflow-hidden border border-border bg-card">
          <div className="md:col-span-7 relative aspect-video">
            {showEmbed ? (
              <iframe
                src={embedUrl}
                title={title}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => (v ? setPlaying(true) : undefined)}
                className="group absolute inset-0 h-full w-full"
                aria-label={`Play ${title}`}
              >
                <img src={cover} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                {v && (
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/20 group-hover:bg-ink/30 transition">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ember text-primary-foreground shadow-xl">
                      <Play size={26} fill="currentColor" />
                    </span>
                  </span>
                )}
              </button>
            )}
          </div>
          <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {isVideo || f.kind === "youtube" ? "Latest video" : "Podcast episode"}
            </p>
            <h3 className="mt-3 font-display text-2xl md:text-3xl text-foreground leading-tight">{title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {v && !playing && (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-ember text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
                >
                  <Play size={16} fill="currentColor" /> Watch Here
                </button>
              )}
              <a
                href={watchUrl}
                target={v ? "_blank" : undefined}
                rel="noreferrer"
                className={
                  v
                    ? "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition"
                    : "inline-flex items-center gap-2 rounded-full bg-ember text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
                }
              >
                {v ? <><Youtube size={16} /> Watch on YouTube</> : <><Play size={16} fill="currentColor" /> {f.ctaLabel}</>}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
