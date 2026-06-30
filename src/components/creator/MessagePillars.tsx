import { siteConfig } from "@/config/site";
import { Icon } from "@/lib/icons";

export function MessagePillars() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">What I'm about</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-foreground">
            The themes I keep coming back to.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {siteConfig.messagePillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ember/10 text-ember">
                <Icon name={p.icon} size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}