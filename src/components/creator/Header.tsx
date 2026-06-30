import { siteConfig } from "@/config/site";

const links = [
  { label: "Listen", href: "#listen" },
  { label: "About", href: "#about" },
  { label: "Speaking", href: "#speaking" },
  { label: "Subscribe", href: "#subscribe" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-foreground">
          {siteConfig.brand.logoText}
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#subscribe"
          className="inline-flex items-center rounded-full bg-ink text-ink-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}