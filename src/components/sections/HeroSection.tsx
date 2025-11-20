"use client";

import React, { memo, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Lazy load heavy components
const SocialProofBadge = dynamic(() => import("@/components/ui/SocialProofBadge"), {
  loading: () => <div className="h-10 w-48 bg-bg-secondary/50 rounded-full animate-pulse" />
});
const Marquee = dynamic(() => import("@/components/ui/Marquee"), {
  loading: () => <div className="h-12 w-full bg-bg-secondary/30 rounded-lg animate-pulse" />
});
const AnimatedButton = dynamic(() => import("../custom/button").then(mod => ({ default: mod.AnimatedButton })), {
  loading: () => <div className="h-12 w-40 bg-accent-primary/50 rounded-full animate-pulse" />
});

interface Sponsor {
  id: number;
  title: string;
  slug: string | null;
  image: string;
}

interface HeroSectionProps {
  sponsors?: Sponsor[];
}

// Memoized avatar data to prevent recreation on every render
const AVATAR_DATA = [
  {
    src: "https://framerusercontent.com/images/UaeMNaCCtVrxQXhyIzZB7ihAs.png",
    alt: "Founder 1",
  },
  {
    src: "https://framerusercontent.com/images/E3taK89otlzdIR6McZAxomrQPyo.png",
    alt: "Founder 2",
  },
  {
    src: "https://framerusercontent.com/images/f83c9nwlZghmsOqr5KiPD7NpS1I.png",
    alt: "Founder 3",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ sponsors = [] }) => {
  // Convert sponsors to logo paths for Marquee component
  const companyLogos = useMemo(() => sponsors.map((sponsor) => sponsor.image), [sponsors]);

  return (
    <section className="relative min-h-screen flex items-center mt-16 justify-center bg-bg-primary overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Simplified shadows */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      {/* Optimized Background - reduced effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Single optimized glow orb */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-primary/8 rounded-full blur-3xl opacity-40 animate-blob-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-hover/8 rounded-full blur-3xl opacity-40 animate-blob-slow animation-delay-4s" />
        
        {/* Simplified grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(204, 255, 0, 0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto py-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Social Proof Badge - with CSS animation */}
          <div className="animate-fade-in-up animation-delay-100">
            <SocialProofBadge
              text="60+ startups & founders chose Algorize Tech"
              className="mb-6 sm:mb-8"
              avatars={AVATAR_DATA}
            />
          </div>

          {/* Main Heading - with CSS animation */}
          <div className="animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              <span className="relative z-10">
                Premium Websites for
                <br />
              </span>
              <span className="bg-linear-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent leading-tight block -mt-2">
                SaaS & Startups
              </span>
            </h1>
          </div>

          {/* Subtitle - with CSS animation */}
          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Every business needs a website, and it&#39;s never been easier to get one.
            </p>
          </div>

          {/* CTA Button - with CSS animation */}
          <div className="animate-fade-in-up animation-delay-400">
            <Link href="/30-min" className="inline-block">
              <AnimatedButton>Book a 15-min call</AnimatedButton>
            </Link>
          </div>

          {/* Company Logos - with CSS animation */}
          {sponsors.length > 0 && (
            <div className="animate-fade-in-up animation-delay-500 mt-12">
              <p className="text-xs sm:text-sm text-text-muted mb-6 sm:mb-8 px-4 sm:px-0">
                Trusted by innovative companies worldwide
              </p>
              <Marquee
                logos={companyLogos}
                speed={25}
                direction="left"
                pauseOnHover={true}
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>

      {/* Optimized CSS animations */}
      <style jsx>{`
        @keyframes blob-slow {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(20px, -20px, 0) scale(1.03);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob-slow {
          animation: blob-slow 12s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-4s { animation-delay: 4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-blob-slow {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default memo(HeroSection);
