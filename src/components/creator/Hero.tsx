import { siteConfig } from "@/config/site";

export function Hero() {
  const { hero, brand, creator } = siteConfig;
  const media = brand.heroMedia;
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 lg:col-span-7">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-ember">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-foreground">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            {hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.url}
              className="inline-flex items-center rounded-full bg-ink text-ink-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.url}
              className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{creator.name}</span>
            <span className="mx-2">·</span>
            {creator.role}
          </p>
        </div>
        <div className="md:col-span-6 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-2xl">
            {media.type === "video" && media.videoSrc ? (
              <video
                src={media.videoSrc}
                poster={media.imageSrc}
                autoPlay muted loop playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={media.imageSrc}
                alt={`${creator.name} portrait`}
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}