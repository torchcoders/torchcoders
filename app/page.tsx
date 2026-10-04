import { HeroSection } from "@/components/sections/hero";
import { NewsSection } from "@/components/sections/news";
import { PartnersSection } from "@/components/sections/partners";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <PartnersSection />
      <NewsSection />
    </main>
  );
}
