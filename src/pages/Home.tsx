import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { ProductExperienceSection } from '../components/ProductExperienceSection';
import { TeamSection } from '../components/TeamSection';

export const Home = () => {
  return (
    <main className="bg-white min-h-screen w-full relative z-10">
      <HeroSection />
      <FeaturesSection />
      <ProductExperienceSection />
      <TeamSection />
    </main>
  );
};
