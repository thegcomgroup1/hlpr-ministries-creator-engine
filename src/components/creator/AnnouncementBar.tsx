import { siteConfig } from "@/config/site";

export function AnnouncementBar() {
  const a = siteConfig.announcement;
  if (!a.enabled) return null;
  return (
    <div className="bg-ink text-ink-foreground text-sm">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-center gap-3 text-center">
        <span className="opacity-90">{a.text}</span>
        <a href={a.ctaUrl} className="font-medium underline-offset-4 hover:underline text-ember">
          {a.ctaLabel} →
        </a>
      </div>
    </div>
  );
}