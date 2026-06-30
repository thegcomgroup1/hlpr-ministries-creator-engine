import { siteConfig } from "@/config/site";

type ImpactItem = { quote?: string; name?: string; stat?: string; label?: string };

export function Impact() {
  const items = siteConfig.impact as readonly ImpactItem[];
  if (!items.length) return null;
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) =>
            item.quote ? (
              <figure key={i} className="rounded-2xl border border-border bg-card p-8">
                <blockquote className="font-display text-2xl text-foreground leading-snug">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">— {item.name}</figcaption>
              </figure>
            ) : (
              <div key={i} className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-center">
                <p className="font-display text-5xl md:text-6xl text-ember tracking-tight">{item.stat}</p>
                <p className="mt-3 text-muted-foreground">{item.label}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}