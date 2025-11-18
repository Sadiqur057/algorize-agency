'use client';

import React from 'react';
import Image from 'next/image';

interface MarqueeProps {
  logos: string[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  logos,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = ''
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Left shadow gradient */}
      <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-gradient-to-r from-bg-primary via-bg-primary/90 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right shadow gradient */}
      <div className="absolute right-0 top-0 w-16 md:w-24 h-full bg-gradient-to-l from-bg-primary via-bg-primary/90 to-transparent z-10 pointer-events-none"></div>
      
      <div className="marquee-container">
        <div 
          className={`marquee-content ${pauseOnHover ? 'hover:pause' : ''}`}
          style={{
            '--marquee-speed': `${speed}s`,
            '--marquee-direction': direction === 'right' ? 'reverse' : 'normal'
          } as React.CSSProperties}
        >
          {logos.map((logo, index) => (
            <div key={`logo-${index}`} className="marquee-item">
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-80 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-20 md:w-28 h-8 md:h-10 bg-bg-tertiary rounded flex items-center justify-center border border-border-primary"><span class="text-xs text-text-muted">Logo ${index + 1}</span></div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
        
        <div 
          className={`marquee-content ${pauseOnHover ? 'hover:pause' : ''}`}
          style={{
            '--marquee-speed': `${speed}s`,
            '--marquee-direction': direction === 'right' ? 'reverse' : 'normal'
          } as React.CSSProperties}
        >
          {logos.map((logo, index) => (
            <div key={`logo-duplicate-${index}`} className="marquee-item">
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-80 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-20 md:w-28 h-8 md:h-10 bg-bg-tertiary rounded flex items-center justify-center border border-border-primary"><span class="text-xs text-text-muted">Logo ${index + 1}</span></div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        .marquee-container {
          display: flex;
          width: max-content;
        }
        
        .marquee-content {
          display: flex;
          align-items: center;
          gap: 2rem;
          animation: marquee var(--marquee-speed) linear infinite;
          animation-direction: var(--marquee-direction);
          will-change: transform;
        }
        
        .marquee-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          max-width: 140px;
        }
        
        @media (min-width: 768px) {
          .marquee-content {
            gap: 3rem;
          }
          
          .marquee-item {
            min-width: 100px;
            max-width: 160px;
          }
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        
        /* Smooth animation performance */
        .marquee-content * {
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Marquee;