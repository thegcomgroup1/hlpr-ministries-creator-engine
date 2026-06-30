import { siteConfig } from "@/config/site";
import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { SignatureMessage } from "./SignatureMessage";
import { MessagePillars } from "./MessagePillars";
import { Platforms } from "./Platforms";
import { FeaturedContent } from "./FeaturedContent";
import { Episodes } from "./Episodes";
import { ContentGallery } from "./ContentGallery";
import { EmailCapture } from "./EmailCapture";
import { Speaking } from "./Speaking";
import { Give } from "./Give";
import { Impact } from "./Impact";
import { Footer } from "./Footer";

export function CreatorSite() {
  const hasPillars = siteConfig.messagePillars.length > 0;
  const hasPlatforms = siteConfig.platforms.length > 0;
  const hasEpisodes = siteConfig.episodes.length > 0;
  const hasGallery = siteConfig.contentGallery.length > 0;
  const hasImpact = siteConfig.impact.length > 0;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <SignatureMessage />
        {hasPillars && <MessagePillars />}
        {hasPlatforms && <Platforms />}
        <FeaturedContent />
        {hasEpisodes && <Episodes />}
        {hasGallery && <ContentGallery />}
        {siteConfig.emailCapture.enabled && <EmailCapture />}
        {siteConfig.speaking.enabled && <Speaking />}
        {siteConfig.give.enabled && <Give />}
        {hasImpact && <Impact />}
      </main>
      <Footer />
    </div>
  );
}
