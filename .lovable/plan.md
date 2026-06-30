
# Creator / Digital-Ministry Template — Shell Build

Build a reusable, placeholder-filled creator site that mirrors `creator_site.template.ts` exactly. Generic enough to drop into any speaker/podcaster/creator-pastor lead, ready to be filled per-client after discovery.

## What we're building (single-page, scrolling)

Section order, top → bottom:

1. **Announcement bar** — "New message every week", anchor → `#subscribe`
2. **Header / nav** — brand wordmark + jump links (Listen, About, Subscribe, Contact)
3. **Hero** — image hero (free-mockup rule), speaker portrait, eyebrow + headline + sub, primary CTA "Listen to the Latest" → `#listen`, secondary "Subscribe" → `#subscribe`
4. **Signature message + anchor verse** — large-format theme line (the creator's through-line)
5. **Message pillars** — 3 cards w/ lucide icons (Flame / Shield / Heart)
6. **Platforms strip** — Podcast / YouTube / Facebook / Instagram tiles (the distribution engine)
7. **Featured content** (`#listen`) — latest episode card w/ Play CTA (embed slot left blank for paid build)
8. **Episodes list** — 3 recent items
9. **Content gallery** — 3-image grid
10. **Email capture** (`#subscribe`) — full-bleed section, given real estate (the conversion engine)
11. **Speaking / "Invite to Speak"** — persona + booking CTA → `#contact`
12. **Give / Support** — single low-friction CTA
13. **Impact** — quote + stat (social proof)
14. **Contact / Footer** (`#contact`) — socials-forward, email, no address block

## Architecture

- **Single config file** `src/config/site.ts` — paste the template verbatim with placeholder values intact. `siteType: "creator"` discriminator preserved. Exported `siteConfig` + `SiteConfig` type.
- **Asset pointers** under `src/assets/creator/` as `*.asset.json` (logo, hero, portrait, content1–3) so the template's imports resolve. Generate generic placeholder images via imagegen → upload via lovable-assets so pointer JSONs match the template's import paths.
- **Icon map** — central `src/lib/icons.ts` exporting a typed lookup for the lucide names the template needs: `Mic, Headphones, Youtube, Instagram, Facebook, Mail, Send, Calendar, Heart, Flame, Shield, Play, ExternalLink`.
- **Section components** in `src/components/creator/` — one per section above (`Hero`, `SignatureMessage`, `MessagePillars`, `Platforms`, `FeaturedContent`, `Episodes`, `ContentGallery`, `EmailCapture`, `Speaking`, `Give`, `Impact`, `Footer`, `AnnouncementBar`, `Header`). Each reads from `siteConfig` and renders nothing if its `enabled` flag is false (where applicable).
- **Home route** `src/routes/index.tsx` — replace the placeholder with `<CreatorSite />` composing the sections in order. Single scrolling page; section anchors (`#listen`, `#subscribe`, `#contact`) handle in-page nav.
- **Head metadata** — title/description/og pulled from `siteConfig.creator.name` + `tagline`; og:image = hero asset URL.

## Design direction

Speaker-forward, editorial, warm. Strong portrait hero, generous type for the signature message, restrained palette so platform tiles and the email capture stand out. Not corporate-SaaS, not church-bulletin. Dark accent for emotional gravity on the signature-message band; otherwise light.

Tokens go in `src/styles.css` (semantic HSL/oklch vars + Tailwind `@theme`). No hardcoded colors in components. Heading + body font pair set via `<link>` in `__root.tsx` head.

## Free vs paid levers (left intentionally in the shell)

- `brand.heroMedia.type: "image"` — paid build flips to `"video"` and wires `videoSrc`.
- `featuredContent.embedUrl: ""` — paid build wires the Spotify/YouTube embed.
- `emailCapture.formAction: ""` — paid build wires ESP.
- `give.onlineUrl`, `contact.notificationEmail`, all platform URLs — placeholders until the Wed call.

## Out of scope (don't build)

- No backend, no real email submission, no auth, no CMS.
- No service times / map / plan-a-visit / physical-ministries grid (explicitly removed by template).
- No multi-route site — this is one scrolling page with anchors per the creator playbook.

## Acceptance

- `src/routes/index.tsx` no longer shows the blank-app placeholder.
- Every section in the template renders with its placeholder copy visible.
- All lucide icons referenced by the template resolve.
- Hero, signature message, platforms, and email capture are the four visually dominant beats (in that order of weight).
- Config swap-only: filling Marilyn's real values into `site.ts` Wednesday produces her site with zero component edits.
