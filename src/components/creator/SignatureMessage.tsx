import { siteConfig } from "@/config/site";

export function SignatureMessage() {
  const { signatureMessage, anchorVerse } = siteConfig.creator;
  return (
    <section id="about" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-5xl px-4 py-24 md:py-32 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-ember">
          The Message
        </p>
        <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight">
          {signatureMessage.theme}
        </h2>
        <p className="mt-8 text-lg md:text-xl text-ink-foreground/80 max-w-2xl mx-auto">
          {signatureMessage.line}
        </p>
        {anchorVerse && (
          <blockquote className="mt-12 font-display italic text-base md:text-lg text-ink-foreground/70 max-w-2xl mx-auto border-t border-ink-foreground/15 pt-8">
            "{anchorVerse}"
          </blockquote>
        )}
      </div>
    </section>
  );
}