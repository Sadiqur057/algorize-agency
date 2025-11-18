'use client';

import React from 'react';
import { 
  MoveHorizontal, 
  Image as ImageIcon, 
  AlertTriangle, 
  TriangleAlert, 
  Grid2x2, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import Image from 'next/image';

const FlexibleElementsSection: React.FC = () => {
  return (
    <>
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]"
        ></div>
        <div
          className="absolute -bottom-40 inset-x-0 h-80 bg-gradient-to-t from-amber-500/10 via-amber-500/0 to-transparent blur-2xl"
        ></div>
      </div>

      <section
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            Flexible elements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl">
            A curated set of adaptable blocks for portfolios, services, and case
            studies—built to snap into your layout.
          </p>
        </div>

        {/* Tilted Canvas */}
        <div className="relative">
          {/* Mobile hint */}
          <div
            className="md:hidden mb-3 flex items-center gap-2 text-xs text-neutral-400"
          >
            <MoveHorizontal className="h-4 w-4" />
            Swipe to explore
          </div>

          <div className="relative pb-6 overflow-hidden">
            <div className="w-full">
              {/* The slanted stage with perfect marquee */}
              <div
                className="relative origin-top-left rotate-[-5deg] sm:rotate-[-6deg] md:rotate-[-8deg]"
              >
                <div className="flex whitespace-nowrap gap-4 animate-[marquee_20s_linear_infinite]">
                  {/* Card Group A - Clone for seamless loop */}
                  <div className="flex gap-4">
                    {/* Card A: Why choose us / accordion preview */}
                    <article
                      className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 bg-neutral-900/70 backdrop-blur rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
                    >
                      <div className="relative p-6 md:p-7 lg:p-8 h-full flex flex-col">
                        <div className="relative flex-grow">
                          <div
                            className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-950"
                          >
                            <Image
                              src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
                              alt=""
                              fill
                              className="h-full w-full object-cover rotate-[12deg] scale-110"
                            />
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Card B: Selected Works with phone mock */}
                    <article
                      className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 bg-neutral-900/70 backdrop-blur rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
                    >
                      <div className="p-6 md:p-7 lg:p-8 h-full flex flex-col">
                        <div className="relative flex-grow">
                          <div
                            className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-950"
                          >
                            <Image
                              src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop"
                              alt=""
                              fill
                              className="h-full w-full object-cover rotate-[12deg] scale-110"
                            />
                          </div>
                          <div
                            className="mt-3 relative w-full overflow-hidden rounded-full border border-white/10 bg-white/5 h-2"
                          >
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  {/* Card Group B - Clone for seamless loop */}
                  <div className="flex gap-4" aria-hidden="true">
                    {/* Card A: Why choose us / accordion preview */}
                    <article
                      className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 bg-neutral-900/70 backdrop-blur rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
                    >
                      <div className="relative p-6 md:p-7 lg:p-8 h-full flex flex-col">
                        <div className="relative flex-grow">
                          <div
                            className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-950"
                          >
                            <Image
                              src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
                              alt=""
                              fill
                              className="h-full w-full object-cover rotate-[12deg] scale-110"
                            />
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Card B: Selected Works with phone mock */}
                    <article
                      className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 bg-neutral-900/70 backdrop-blur rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
                    >
                      <div className="p-6 md:p-7 lg:p-8 h-full flex flex-col">
                        <div className="relative flex-grow">
                          <div
                            className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-950"
                          >
                            <Image
                              src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop"
                              alt=""
                              fill
                              className="h-full w-full object-cover rotate-[12deg] scale-110"
                            />
                          </div>
                          <div
                            className="mt-3 relative w-full overflow-hidden rounded-full border border-white/10 bg-white/5 h-2"
                          >
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
            >
              <Grid2x2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <div
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
              >
                40+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400">Elements</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
            >
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div>
              <div
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
              >
                8+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400">Inner Pages</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-end">
            <button
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Explore Components
              <ArrowRight className="h-4 w-4" />
            </button>
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
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        /* Clip path for modern containment */
        .clip-path-container {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);
        }
        
        /* Pause animation on hover for better UX */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default FlexibleElementsSection;