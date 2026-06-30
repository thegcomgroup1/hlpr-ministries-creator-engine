import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";

export function Footer() {
  const { contact, creator, brand } = siteConfig;
  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-display text-3xl">{brand.logoText}</p>
          <p className="mt-4 text-ink-foreground/70 max-w-sm">{creator.shortBio}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-foreground/60">Follow</p>
          <ul className="mt-4 space-y-2">
            {contact.socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} className="hover:text-ember transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-foreground/60">Get in touch</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-4 inline-flex items-center gap-2 hover:text-ember transition-colors"
          >
            <Mail size={16} /> {contact.email}
          </a>
          <a
            href="#subscribe"
            className="mt-6 inline-flex items-center rounded-full bg-ember text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            Join the email list
          </a>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-foreground/60">
          <p>
            © {new Date().getFullYear()} {creator.name}. All rights reserved.{" "}
            ·{" "}
            <a
              href="https://ministries.hlpr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ember transition-colors"
            >
              Powered by HLPR Ministries
            </a>
          </p>
          <p>{creator.brands.filter(Boolean).join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}