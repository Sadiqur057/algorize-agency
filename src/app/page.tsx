/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
import HeroSection from "@/components/sections/HeroSection";
// import FeaturesSection from "@/components/sections/FeaturesSection";
import ProcessSection from "@/components/sections/ProcessSection";
// import TestimonialsSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
// import ProjectsSection from "@/components/sections/ProjectsSection";
import ClientFeedback from "@/components/sections/ClientFeedbackSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
// import FlexibleElementsSection from "@/components/sections/FlexibleElementsSection";
import AgencyProblemsSection from "@/components/sections/AgencyProblemsSection";
// import TechStackSection from "@/components/sections/TechStackSection";
import Carv from "@/components/sections/Carv";
import Feature3 from "@/components/sections/StackSection";
import RotatingMarqueeSection from "@/components/sections/RotatingMarqueeSection";
import PricingSection from "@/components/sections/PricingSection";
import PlatformComparisonSection from "@/components/sections/PlatformComparisonSection";
// import PlatformComparisonSectionOld from "@/components/sections/PlatformComparisonSection-old";
import { homeData as fallbackData } from "@/components/sections/data";

// API URL from environment variable
const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

interface HomePageData {
  success: boolean;
  message: string;
  data: {
    services: any[];
    technologies: any[];
    projects: any[];
    processList: any[];
    blogs: any[];
    faqs: any[];
    packages: {
      trial: any[];
      monthly: any[];
      yearly: any[];
    };
    sponsors: any[];
    reviews: any[];
  };
}

// Fetch home page data with 1 hour cache
async function getHomePageData(): Promise<HomePageData> {
  try {
    const response = await fetch(`${API_URL}/public/home-page-data`, {
      next: { revalidate: 3600 }, // Cache for 1 hour (3600 seconds)
    });

    if (!response.ok) {
      console.error('Failed to fetch home page data:', response.statusText);
      return fallbackData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    // Return fallback data in case of error
    return fallbackData;
  }
}

export default async function Home() {
  // Fetch data on the server without blocking rendering
  const homeData = await getHomePageData();
  const data = homeData.data;

  return (
    <main className="min-h-screen bg-bg-primary">
      <HeroSection sponsors={data?.sponsors || []} />
      {/* <ProjectsSection /> */}
      {/* <FeaturesSection /> */}
      {/* <FlexibleElementsSection /> */}
      <RotatingMarqueeSection projects={data?.projects || []} />
      <AgencyProblemsSection />
      <ProcessSection processList={data?.processList || []} />
      <WhatWeDoSection services={data?.services || []} />
      <PlatformComparisonSection />
      {/* <PlatformComparisonSectionOld /> */}
      <Carv />
      {/* <TechStackSection /> */}
      <Feature3
        projects={data?.projects || []}
        reviews={data?.reviews || []}
        technologies={data?.technologies || []}
      />
      <ClientFeedback reviews={data?.reviews || []} />
      <PricingSection
        monthlyPlans={data?.packages?.monthly || []}
        yearlyPlans={data?.packages?.yearly || []}
      />
      <FAQSection faqs={data?.faqs} />
    </main>
  );
}
