'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, LayoutGrid, Mountain, Box, Smartphone, ArrowUpRight, Layers, ArrowRight, Grid2x2, PanelsTopLeft,Sparkles } from 'lucide-react';
import Image from 'next/image';

const RotatingMarqueeSection: React.FC = () => {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .edge-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .animate-scroll-left {
          animation: scroll-left 55s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 62s linear infinite;
        }
      `}</style>

      <main className="relative overflow-hidden min-h-screen antialiased text-zinc-300" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial' }}>
        {/* Backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full blur-3xl bg-gradient-to-r from-fuchsia-600/10 via-sky-500/10 to-emerald-500/10"></div>

        <section className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            className="mb-10 md:mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
              variants={itemVariants}
            >
              flexible elements
            </motion.h2>
            <motion.p 
              className="mt-4 max-w-2xl text-sm md:text-base text-zinc-400/90"
              variants={itemVariants}
            >
              Smooth, continuous galleries with perspective and contrast. Fully responsive and looped.
            </motion.p>
          </motion.div>

          {/* Row 1 */}
          <div className="relative -rotate-2 md:-rotate-6">
            <div className="edge-fade overflow-hidden">
              <div className="flex w-max gap-6 animate-scroll-left">
                {/* Group A */}
                <div className="flex gap-6">
                  {/* Card 1 */}
                  <motion.article 
                    className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                    // whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop" 
                      alt="Minimal 3D geometry" 
                      fill
                      className="h-full w-full object-cover transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.9)_100%)]"></div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <ImageIcon className="h-4 w-4 opacity-80" />
                        <span className="font-medium">Concept Grid</span>
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                        View <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>

                  {/* Card 2 */}
                  <motion.article 
                    className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                    // whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1517244879728-4823fc06b511?q=80&w=1600&auto=format&fit=crop" 
                      alt="Creative workspace" 
                      fill
                      className="h-full w-full object-cover transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <LayoutGrid className="h-4 w-4 opacity-80" />
                        <span className="font-medium">Studio Screen</span>
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                        View <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>

                  {/* Card 3 */}
                  <motion.article 
                    className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                    // whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" 
                      alt="Mountain dusk" 
                      fill
                      className="h-full w-full object-cover transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <Mountain className="h-4 w-4 opacity-80" />
                        <span className="font-medium">Dusk Range</span>
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                        View <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>

                  {/* Card 4 */}
                  <motion.article 
                    className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                    // whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop" 
                      alt="Abstract render" 
                      fill
                      className="h-full w-full object-cover transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <Box className="h-4 w-4 opacity-80" />
                        <span className="font-medium">Volumetric</span>
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                        View <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>
                </div>

                {/* Group B (duplicate for seamless loop) */}
                <div className="flex gap-6" aria-hidden="true">
                  <article className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <Image 
                      src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop" 
                      alt="" 
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.9)_100%)]"></div>
                  </article>
                  <article className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <Image 
                      src="https://images.unsplash.com/photo-1517244879728-4823fc06b511?q=80&w=1600&auto=format&fit=crop" 
                      alt="" 
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </article>
                  <article className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <Image 
                      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" 
                      alt="" 
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </article>
                  <article className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <Image 
                      src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop" 
                      alt="" 
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative -rotate-2 md:-rotate-6 mt-10">
            <div className="edge-fade overflow-hidden">
              <div className="flex w-max gap-6 animate-scroll-right">
                {/* Group A */}
                <div className="flex gap-6">
                  {/* Card 1 */}
                  <motion.article 
                    className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                    // whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop" 
                      alt="Minimal 3D geometry" 
                      fill
                      className="h-full w-full object-cover transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.9)_100%)]"></div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <ImageIcon className="h-4 w-4 opacity-80" />
                        <span className="font-medium">Concept Grid</span>
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                        View <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>

                  {/* Card 2 */}
                  <motion.article 
                    className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                    // whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1517244879728-4823fc06b511?q=80&w=1600&auto=format&fit=crop" 
                      alt="Creative workspace" 
                      fill
                      className="h-full w-full object-cover transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <LayoutGrid className="h-4 w-4 opacity-80" />
                        <span className="font-medium">Studio Screen</span>
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                        View <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>

                  {/* Card 3 */}
                  <motion.article 
                    className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                    // whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" 
                      alt="Mountain dusk" 
                      fill
                      className="h-full w-full object-cover transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <Mountain className="h-4 w-4 opacity-80" />
                        <span className="font-medium">Dusk Range</span>
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                        View <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>

                  {/* Card 4 */}
                  <motion.article 
                    className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                    // whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop" 
                      alt="Abstract render" 
                      fill
                      className="h-full w-full object-cover transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-200">
                        <Box className="h-4 w-4 opacity-80" />
                        <span className="font-medium">Volumetric</span>
                      </div>
                      <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/15 transition">
                        View <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.article>
                </div>

                {/* Group B (duplicate for seamless loop) */}
                <div className="flex gap-6" aria-hidden="true">
                  <article className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <Image 
                      src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop" 
                      alt="" 
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.9)_100%)]"></div>
                  </article>
                  <article className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <Image 
                      src="https://images.unsplash.com/photo-1517244879728-4823fc06b511?q=80&w=1600&auto=format&fit=crop" 
                      alt="" 
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </article>
                  <article className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <Image 
                      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" 
                      alt="" 
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </article>
                  <article className="relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                    <Image 
                      src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop" 
                      alt="" 
                      fill
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </article>
                </div>
              </div>
            </div>
          </div>

            {/* Bottom stats */}
        <div className="mt-14 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {/* Elements */}
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-6">
        <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          40+
        </div>
        <div className="mt-1 text-xs text-zinc-400">Elements</div>
      </div>

      {/* Inner Pages */}
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-6">
        <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          8+
        </div>
        <div className="mt-1 text-xs text-zinc-400">Inner Pages</div>
      </div>

      {/* Motion */}
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-6">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-white/90" />
          <div className="text-xl md:text-2xl font-semibold tracking-tight text-white">
            Motion
          </div>
        </div>
        <div className="mt-1 text-xs text-zinc-400">Seamless loop</div>
      </div>

      {/* Layout */}
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-6">
        <div className="flex items-center justify-center gap-2">
          <PanelsTopLeft className="h-6 w-6 text-white/90" />
          <div className="text-xl md:text-2xl font-semibold tracking-tight text-white">
            Layout
          </div>
        </div>
        <div className="mt-1 text-xs text-zinc-400">Angled rows</div>
      </div>
    </div>
        </section>
      </main>
    </>
  );
};

export default RotatingMarqueeSection;