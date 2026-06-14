import type { Metadata } from 'next';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { ProductExperienceSection } from '../components/ProductExperienceSection';
import { TeamSection } from '../components/TeamSection';

export const metadata: Metadata = {
  title: 'Cocpit - Home',
  description: 'Welcome to Cocpit - the next-generation professional networking platform.',
};

export default function Home() {
  return (
    <main className="bg-white min-h-screen w-full relative z-10">
      <HeroSection />
      <FeaturesSection />
      <ProductExperienceSection />
      <TeamSection />
    </main>
  );
};
