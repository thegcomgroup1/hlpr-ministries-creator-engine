import { siteConfig } from "@/config/site";
import { ExternalLink } from "lucide-react";

export function Episodes() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">Recent episodes</h2>
          <a href="#listen" className="text-sm text-ember hover:underline">All episodes</a>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {siteConfig.episodes.map((e, i) => (
            <li key={i}>
              <a
                href={e.url}
                className="grid grid-cols-12 gap-4 py-6 group items-baseline hover:bg-secondary/40 -mx-4 px-4 transition-colors"
              >
                <span className="col-span-2 md:col-span-1 text-sm text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-8">
                  <p className="font-display text-xl text-foreground group-hover:text-ember transition-colors">
                    {e.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{e.blurb}</p>
                </div>
                <span className="hidden md:block md:col-span-2 text-sm text-muted-foreground">{e.date}</span>
                <span className="hidden md:flex md:col-span-1 justify-end text-muted-foreground group-hover:text-ember transition-colors">
                  <ExternalLink size={16} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}