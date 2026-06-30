import { siteConfig } from "@/config/site";
import { Play } from "lucide-react";

export function FeaturedContent() {
  const f = siteConfig.featuredContent;
  const cover = siteConfig.brand.pageHeroes.listen;
  return (
    <section id="listen" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Latest</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-tight text-foreground">
          The newest message.
        </h2>
        <div className="mt-10 grid md:grid-cols-12 gap-0 items-stretch rounded-3xl overflow-hidden border border-border bg-card">
          <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto">
            {f.embedUrl ? (
              <iframe
                src={f.embedUrl}
                title={f.title}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              />
            ) : (
              <img
                src={cover}
                alt={f.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </div>
          <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {f.kind === "podcast" ? "Podcast episode" : "Video message"}
            </p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl text-foreground leading-tight">
              {f.title}
            </h3>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{f.summary}</p>
            <a
              href={f.watchUrl}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ember text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              <Play size={16} fill="currentColor" /> {f.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}