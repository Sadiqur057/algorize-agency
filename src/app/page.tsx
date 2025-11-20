/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HeroSection from "@/components/sections/HeroSection";
import { homeData as fallbackData } from "@/components/sections/data";

// Lazy load below-the-fold sections for better performance
const RotatingMarqueeSection = dynamic(() => import("@/components/sections/RotatingMarqueeSection"), { 
  loading: () => <div className="h-96 bg-bg-primary" />
});
const AgencyProblemsSection = dynamic(() => import("@/components/sections/AgencyProblemsSection"), { 
  loading: () => <div className="h-screen bg-bg-primary" />
});
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"), { 
  loading: () => <div className="h-screen bg-bg-primary" />
});
const WhatWeDoSection = dynamic(() => import("@/components/sections/WhatWeDoSection"), { 
  loading: () => <div className="h-screen bg-bg-primary" />
});
const PlatformComparisonSection = dynamic(() => import("@/components/sections/PlatformComparisonSection"), { 
  loading: () => <div className="h-screen bg-bg-primary" />
});
const Carv = dynamic(() => import("@/components/sections/Carv"), { 
  loading: () => <div className="h-64 bg-bg-primary" />
});
const Feature3 = dynamic(() => import("@/components/sections/StackSection"), { 
  loading: () => <div className="h-screen bg-bg-primary" />
});
const ClientFeedback = dynamic(() => import("@/components/sections/ClientFeedbackSection"), { 
  loading: () => <div className="h-screen bg-bg-primary" />
});
const PricingSection = dynamic(() => import("@/components/sections/PricingSection"), { 
  loading: () => <div className="h-screen bg-bg-primary" />
});
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { 
  loading: () => <div className="h-96 bg-bg-primary" />
});

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
      <Suspense fallback={<div className="h-96 bg-bg-primary" />}>
        <RotatingMarqueeSection projects={data?.projects || []} />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <AgencyProblemsSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <ProcessSection processList={data?.processList || []} />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <WhatWeDoSection services={data?.services || []} />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <PlatformComparisonSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-bg-primary" />}>
        <Carv />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <Feature3
          projects={data?.projects || []}
          reviews={data?.reviews || []}
          technologies={data?.technologies || []}
        />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <ClientFeedback reviews={data?.reviews || []} />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-bg-primary" />}>
        <PricingSection
          monthlyPlans={data?.packages?.monthly || []}
          yearlyPlans={data?.packages?.yearly || []}
        />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-bg-primary" />}>
        <FAQSection faqs={data?.faqs} />
      </Suspense>
    </main>
  );
}
