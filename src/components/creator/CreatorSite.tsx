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
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <SignatureMessage />
        <MessagePillars />
        <Platforms />
        <FeaturedContent />
        <Episodes />
        <ContentGallery />
        <EmailCapture />
        <Speaking />
        <Give />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}