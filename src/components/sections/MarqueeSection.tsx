'use client';

import React from 'react';
import { 
  Code2, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

interface MarqueeItem {
  id: number;
  text?: string;
  icon?: React.ElementType;
}

const MarqueeSection: React.FC = () => {
  // Define the marquee content
  const marqueeItems: MarqueeItem[] = [
    { id: 1, text: "Let's Build Together" },
    { id: 2, icon: Code2 },
    { id: 3, text: "Let's Build Together" },
    { id: 4, icon: Code2 },
    { id: 5, text: "Let's Build Together" },
    { id: 6, icon: Code2 },
    { id: 7, text: "Let's Build Together" },
  ];

  const frontMarqueeItems: MarqueeItem[] = [
    { id: 1, text: "Let's Build Together" },
    { id: 2, icon: Rocket },
    { id: 3, text: "Let's Build Together" },
    { id: 4, icon: Rocket },
    { id: 5, text: "Let's Build Together" },
    { id: 6, icon: Rocket },
    { id: 7, text: "Let's Build Together" },
  ];

  const pillItems = [
    { id: 1, text: "Start Project" },
    { id: 2, text: "Tech Consultation" },
    { id: 3, text: "Tech Audit" },
    { id: 4, text: "DevOps Setup" },
    { id: 5, text: "Book a Call" },
  ];

  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(250,204,21,0.08),transparent_60%)]"></div>

      {/* Back ribbon (outlined text) */}
      <section
        className="group pointer-events-auto absolute -rotate-3 md:-rotate-2 left-1/2 -translate-x-1/2 top-[20%] md:top-[18%] w-[130vw] sm:w-[120vw] lg:w-[110vw] z-0">
        <div
          className="relative overflow-hidden rounded-xl border border-yellow-500/20 bg-gray-900/40 backdrop-blur-sm"
          style={{ 
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
          }}>
          <div
            className="flex w-[200%] items-center gap-12 pr-12 will-change-transform animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused] reduce-motion">
            {/* group A */}
            <div className="flex shrink-0 items-center gap-12 py-3 md:py-4">
              {marqueeItems.map((item) => (
                <React.Fragment key={`a-${item.id}`}>
                  {item.text ? (
                    <span 
                      className="text-transparent tracking-tight text-2xl md:text-3xl lg:text-4xl font-semibold"
                      style={{ 
                        WebkitTextStroke: "1px rgba(250,204,21,0.7)"
                      }}
                    >
                      {item.text}
                    </span>
                  ) : item.icon ? (
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400/70" />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            {/* group B (clone for seamless loop) */}
            <div className="flex shrink-0 items-center gap-12 py-3 md:py-4" aria-hidden="true">
              {marqueeItems.map((item) => (
                <React.Fragment key={`b-${item.id}`}>
                  {item.text ? (
                    <span 
                      className="text-transparent tracking-tight text-2xl md:text-3xl lg:text-4xl font-semibold"
                      style={{ 
                        WebkitTextStroke: "1px rgba(250,204,21,0.7)"
                      }}
                    >
                      {item.text}
                    </span>
                  ) : item.icon ? (
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400/70" />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Front ribbon (filled text) */}
      <section
        className="group pointer-events-auto absolute rotate-3 md:rotate-2 left-1/2 -translate-x-1/2 top-[35%] md:top-[32%] w-[135vw] sm:w-[125vw] lg:w-[115vw] z-10">
        <div
          className="relative overflow-hidden rounded-xl border border-yellow-500/30 bg-gray-900/70 shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
          <div
            className="flex w-[200%] items-center gap-12 pr-12 will-change-transform animate-[marquee_15s_linear_infinite] group-hover:[animation-play-state:paused] reduce-motion"
            style={{ 
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
            }}>
            {/* group A */}
            <div className="flex shrink-0 items-center gap-12 py-4 md:py-5">
              {frontMarqueeItems.map((item) => (
                <React.Fragment key={`a-${item.id}`}>
                  {item.text ? (
                    <span className="tracking-tight text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-400">
                      {item.text}
                    </span>
                  ) : item.icon ? (
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            {/* group B (clone) */}
            <div className="flex shrink-0 items-center gap-12 py-4 md:py-5" aria-hidden="true">
              {frontMarqueeItems.map((item) => (
                <React.Fragment key={`b-${item.id}`}>
                  {item.text ? (
                    <span className="tracking-tight text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-400">
                      {item.text}
                    </span>
                  ) : item.icon ? (
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default MarqueeSection;