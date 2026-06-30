import { siteConfig } from "@/config/site";

export function EmailCapture() {
  const e = siteConfig.emailCapture;
  if (!e.enabled) return null;
  return (
    <section id="subscribe" className="bg-ember text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-24 md:py-32 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] opacity-80">{e.eyebrow}</p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
          {e.heading}
        </h2>
        <p className="mt-5 text-lg opacity-90 max-w-xl mx-auto">{e.body}</p>
        <form
          action={e.formAction || undefined}
          method="post"
          onSubmit={(ev) => { if (!e.formAction) ev.preventDefault(); }}
          className="mt-10 mx-auto flex max-w-xl flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            required
            name="email"
            placeholder={e.placeholder}
            className="flex-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 placeholder:text-primary-foreground/70 px-5 py-3 text-base text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
          />
          <button
            type="submit"
            className="rounded-full bg-ink text-ink-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            {e.ctaLabel}
          </button>
        </form>
        <p className="mt-4 text-xs opacity-70">No spam. Unsubscribe any time.</p>
      </div>
    </section>
  );
}