import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeatureStrip } from "@/components/landing/FeatureStrip";
import { SystemPreview } from "@/components/landing/SystemPreview";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <SystemPreview />
    </main>
  );
}
