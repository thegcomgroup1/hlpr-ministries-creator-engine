/**
 * HLPR — CREATOR / DIGITAL-MINISTRY TEMPLATE (site.ts)
 * Generic placeholder shell. Fill per-client after discovery.
 * See creator_site.template.ts for full documentation.
 */
import logoAsset from "@/assets/creator/logo.png.asset.json";
import hero from "@/assets/creator/hero.jpg.asset.json";
import portrait from "@/assets/creator/portrait.jpg.asset.json";
import content1 from "@/assets/creator/content1.jpg.asset.json";
import content2 from "@/assets/creator/content2.jpg.asset.json";
import content3 from "@/assets/creator/content3.jpg.asset.json";

export const siteConfig = {
  siteType: "creator" as const,

  announcement: {
    enabled: true,
    text: "New message every week — never miss one.",
    ctaLabel: "Subscribe",
    ctaUrl: "#subscribe",
  },

  creator: {
    name: "[Creator Name]",
    role: "[Speaker · Author · Founder]",
    brands: ["[Brand One]", "[Brand Two (optional)]"],
    tagline: "[One-line promise — e.g., 'Bold faith for fearless living']",
    signatureMessage: {
      theme: "[Their core theme — e.g., 'Be Fearless']",
      line: "[1–2 sentences expanding the theme in their voice.]",
    },
    anchorVerse: "[Verse text — Reference]",
    shortBio: "[2–3 sentence bio — who they are, who they serve.]",
    story: [
      "[Paragraph 1 — their journey / why this ministry exists, in their words.]",
      "[Paragraph 2 — the people they're called to and the change they bring.]",
    ],
    location: "",
  },

  brand: {
    logoText: "[Brand wordmark]",
    logoImageSrc: logoAsset.url,
    portraitSrc: portrait.url,
    heroMedia: {
      type: "image" as "image" | "video",
      imageSrc: hero.url,
      videoSrc: "",
    },
    pageHeroes: {
      home: hero.url,
      about: portrait.url,
      listen: content1.url,
      give: content2.url,
    },
  },

  hero: {
    eyebrow: "[Brand / ministry name]",
    headline: "[Hook in their voice — e.g., 'Stop living in fear. Start living free.']",
    sub: "[Sub-line — what the site/ministry delivers.]",
    primaryCta: { label: "Listen to the Latest", url: "#listen" },
    secondaryCta: { label: "Subscribe", url: "#subscribe" },
  },

  messagePillars: [
    { icon: "Flame" as const, title: "[Theme 1 — e.g., Fearless]", body: "[What this means and who it's for.]" },
    { icon: "Shield" as const, title: "[Theme 2 — e.g., Identity in Christ]", body: "[What this means and who it's for.]" },
    { icon: "Heart" as const, title: "[Theme 3 — e.g., Bold Love]", body: "[What this means and who it's for.]" },
  ],

  platforms: [
    { label: "Podcast",   handle: "[show name]",  url: "#",  icon: "Mic" as const },
    { label: "YouTube",   handle: "[@channel]",   url: "#",  icon: "Youtube" as const },
    { label: "Facebook",  handle: "[@page]",      url: "#",  icon: "Facebook" as const },
    { label: "Instagram", handle: "[@handle]",    url: "#",  icon: "Instagram" as const },
  ],

  featuredContent: {
    kind: "podcast" as "podcast" | "youtube",
    title: "[Latest episode/message title]",
    summary: "[1–2 sentence hook that makes a first-time visitor want to hit play.]",
    embedUrl: "",
    watchUrl: "#",
    ctaLabel: "Listen Now",
  },

  episodes: [
    { title: "[Episode/message title]", date: "[Date]", url: "#", blurb: "[One-line description.]" },
    { title: "[Episode/message title]", date: "[Date]", url: "#", blurb: "[One-line description.]" },
    { title: "[Episode/message title]", date: "[Date]", url: "#", blurb: "[One-line description.]" },
  ],

  contentGallery: [
    { src: content1.url, alt: "[Describe image one]" },
    { src: content2.url, alt: "[Describe image two]" },
    { src: content3.url, alt: "[Describe image three]" },
  ],

  emailCapture: {
    enabled: true,
    eyebrow: "Don't miss a message",
    heading: "[e.g., Get the weekly message in your inbox]",
    body: "[Why join — what they'll receive and how often.]",
    ctaLabel: "Count Me In",
    placeholder: "Your email",
    formAction: "",
  },

  speaking: {
    enabled: true,
    heading: "[e.g., Bring this message to your event]",
    body: "[1–2 sentences — what they speak on and who they serve.]",
    ctaLabel: "Invite to Speak",
    ctaUrl: "#contact",
  },

  give: {
    enabled: true,
    line: "[Why support matters — keeps the message going out.]",
    onlineUrl: "",
  },

  impact: [
    { quote: "[Real listener/follower comment.]", name: "[First name, location]" },
    { stat: "[e.g., 10k+ monthly listeners]", label: "[Context]" },
  ],

  contact: {
    email: "[public@email]",
    notificationEmail: "[where form alerts go]",
    socials: [
      { label: "Facebook", url: "#" },
      { label: "Instagram", url: "#" },
      { label: "YouTube", url: "#" },
      { label: "Podcast", url: "#" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;