"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ClientFeedback from "@/components/sections/ClientFeedbackSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import FlexibleElementsSection from "@/components/sections/FlexibleElementsSection";
import AgencyProblemsSection from "@/components/sections/AgencyProblemsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import Carv from "@/components/sections/Carv";
import Feature3 from "@/components/sections/StackSection";
import RotatingMarqueeSection from "@/components/sections/RotatingMarqueeSection";
import PricingSection from "@/components/sections/PricingSection";
import PlatformComparisonSection from "@/components/sections/PlatformComparisonSection";
import PlatformComparisonSectionOld from "@/components/sections/PlatformComparisonSection-old";

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
      {/* <PlatformComparisonSectionOld /> */}
      {/* <MarqueeSection /> */}
      <Carv />
      {/* <TechStackSection /> */}
      <Feature3 />
      <ClientFeedback />
      <PricingSection />
      <FAQSection />
    </main>
  );
}
