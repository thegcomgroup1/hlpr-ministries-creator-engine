import { siteConfig } from "@/config/site";
import { Heart } from "lucide-react";

export function Give() {
  const g = siteConfig.give;
  if (!g.enabled) return null;
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20 text-center">
        <Heart size={28} className="mx-auto text-ember" strokeWidth={1.75} />
        <p className="mt-5 font-display text-2xl md:text-3xl text-foreground max-w-2xl mx-auto leading-snug">
          {g.line}
        </p>
        <a
          href={g.onlineUrl || "#contact"}
          className="mt-8 inline-flex items-center rounded-full bg-ink text-ink-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          Partner with the mission
        </a>
      </div>
    </section>
  );
}