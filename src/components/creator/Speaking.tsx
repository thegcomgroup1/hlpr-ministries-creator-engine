import { siteConfig } from "@/config/site";
import { Calendar } from "lucide-react";

export function Speaking() {
  const s = siteConfig.speaking;
  if (!s.enabled) return null;
  return (
    <section id="speaking" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ember/10 text-ember">
              <Calendar size={24} strokeWidth={1.75} />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Speaking</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-foreground">
              {s.heading}
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">{s.body}</p>
          </div>
          <div className="md:col-span-3 md:text-right">
            <a
              href={s.ctaUrl}
              className="inline-flex items-center rounded-full bg-ink text-ink-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              {s.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}