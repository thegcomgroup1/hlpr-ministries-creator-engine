import { siteConfig } from "@/config/site";

export function ContentGallery() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {siteConfig.contentGallery.map((g, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-secondary ${
                i === 0 ? "col-span-2 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-[16/10]" : "aspect-square"
              }`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}