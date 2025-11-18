'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ClientFeedback from '@/components/sections/PricingSection';
import PricingSection6 from '@/components/sections/TestimonialsSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import PlatformComparisonSection from '@/components/sections/PlatformComparisonSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import FlexibleElementsSection from '@/components/sections/FlexibleElementsSection';
import AgencyProblemsSection from '@/components/sections/AgencyProblemsSection';
import TechStackSection from '@/components/sections/TechStackSection';
import Carv from '@/components/sections/Carv';
import Feature3 from '@/components/sections/StackSection';
import RotatingMarqueeSection from '@/components/sections/RotatingMarqueeSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <HeroSection />
      {/* <ProjectsSection /> */}
      {/* <FeaturesSection /> */}
      {/* <FlexibleElementsSection /> */}
      <RotatingMarqueeSection />
      <AgencyProblemsSection />
      <ProcessSection />
      <WhatWeDoSection />
      <PlatformComparisonSection />
      {/* <MarqueeSection /> */}
      <Carv />
      {/* <TechStackSection /> */}
      <Feature3 />
      <ClientFeedback />
      <PricingSection6 />
      <FAQSection />
    </main>
  );
}