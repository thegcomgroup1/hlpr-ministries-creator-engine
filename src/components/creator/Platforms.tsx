import { siteConfig } from "@/config/site";
import { Icon } from "@/lib/icons";
import { ExternalLink } from "lucide-react";

export function Platforms() {
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Follow along</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-foreground">
              Wherever you listen, watch, or scroll.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.platforms.map((p) => (
            <a
              key={p.label}
              href={p.url}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-ember transition-colors"
            >
              <div className="flex items-center justify-between">
                <Icon name={p.icon} size={28} strokeWidth={1.75} className="text-ink" />
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-ember transition-colors" />
              </div>
              <div className="mt-8">
                <p className="font-display text-xl text-foreground">{p.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{p.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}