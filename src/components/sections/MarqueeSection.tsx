'use client';

import React from 'react';
import Image from 'next/image';

interface Sponsor {
  id: number;
  title: string;
  slug: string | null;
  image: string;
}

interface MarqueeSectionProps {
  sponsors: Sponsor[];
}

const MarqueeSection: React.FC<MarqueeSectionProps> = ({ sponsors }:MarqueeSectionProps) => {
  // If no sponsors, don't render the section
  if (!sponsors || sponsors.length === 0) {
    return null;
  }

  return (
    <section className="relative py-12 sm:py-16 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm text-text-muted">
            Trusted by innovative companies worldwide
          </p>
        </div>

        {/* Sponsors Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center">
            <div
              className="flex items-center gap-8 sm:gap-12 md:gap-16 animate-marquee-slow"
              style={{
                animation: 'marquee 40s linear infinite',
              }}
            >
              {/* First set of sponsors */}
              {sponsors.map((sponsor) => (
                <div
                  key={`first-${sponsor.id}`}
                  className="flex-shrink-0 h-12 sm:h-16 w-24 sm:w-32 md:w-40 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsors.map((sponsor) => (
                <div
                  key={`second-${sponsor.id}`}
                  className="flex-shrink-0 h-12 sm:h-16 w-24 sm:w-32 md:w-40 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  aria-hidden="true"
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion { 
            animation: none !important; 
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeSection;