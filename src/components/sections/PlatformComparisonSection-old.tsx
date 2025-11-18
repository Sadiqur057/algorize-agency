'use client';

import React from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Users, 
  Palette, 
  User, 
  Wrench, 
  Check, 
  X, 
  ArrowRight, 
  Play 
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const PlatformComparisonSection: React.FC = () => {
  return (
    <main className="relative ">
      {/* Decorative background glows with yellow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-accent-primary/15 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-primary/20 blur-3xl"></div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        {/* <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-primary/10 text-accent-primary px-3 py-1 text-xs font-medium ring-1 ring-accent-primary/20">
            <Sparkles className="h-3.5 w-3.5" />
            Why Choose Us
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Design Monks's Alternative? Think One More Time!
          </h1>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Compare popular options across the factors that matter most.
          </p>
        </div> */}

            <div className="w-full px-4 relative">
           {/* <div className="absolute h-full w-full top-20 [mask-image:radial-gradient(30%_80%,white,transparent)] before:absolute  before:inset-0 before:bg-[radial-gradient(circle_at_top_center,#FF6A00,transparent_40%)] before:opacity-50   "></div> */}
      {/* Header Section */}
        <SectionHeader
          eyebrow=" Why Choose Us"
          title={
            <>
           Why Choose 
              {/* <br /> */}
              {/* <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
                  Us
              </span> */}
            </>
          }
          subtitle={
            <>
              Get a premium website or custom business solution
              <br className="hidden md:block" />
              that meets your goals and drives measurable growth.
            </>
          }
          align="center"
          spacing="lg"
        />
      </div>

        {/* Column labels (md+) */}
        <div className="hidden md:block">
          <div className="mt-12 grid grid-cols-8 items-center text-xs uppercase tracking-wide text-gray-500">
            <div className="col-span-3">Platform</div>
            <div className="col-span-1 text-center">Speed</div>
            <div className="col-span-1 text-center">Flexibility</div>
            <div className="col-span-1 text-center">Quality</div>
            <div className="col-span-1 text-center">Scalability</div>
            <div className="col-span-1 text-center">Affordability</div>
          </div>

          {/* Highlighted row */}
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-accent-primary/20 via-accent-primary/10 to-transparent ring-1 ring-accent-primary/30 p-1 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
            <div className="grid grid-cols-8 items-center rounded-2xl bg-gray-900/80">
              <div className="col-span-3 flex items-start gap-4 p-5">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-accent-primary/20 ring-1 ring-accent-primary/30">
                  <MessageCircle className="h-5 w-5 text-accent-primary" />
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight text-white">Design Monks</div>
                  <p className="mt-1 text-sm text-gray-400">
                    Expert-driven and committed to higher quality, with efficient results and full support.
                  </p>
                </div>
              </div>

              {/* ticks */}
              <div className="col-span-1 p-5">
                <div className="grid place-items-center">
                  <Check className="h-5 w-5 text-accent-primary" />
                </div>
              </div>
              <div className="col-span-1 p-5">
                <div className="grid place-items-center">
                  <Check className="h-5 w-5 text-accent-primary" />
                </div>
              </div>
              <div className="col-span-1 p-5">
                <div className="grid place-items-center">
                  <Check className="h-5 w-5 text-accent-primary" />
                </div>
              </div>
              <div className="col-span-1 p-5">
                <div className="grid place-items-center">
                  <Check className="h-5 w-5 text-accent-primary" />
                </div>
              </div>
              <div className="col-span-1 p-5">
                <div className="grid place-items-center">
                  <Check className="h-5 w-5 text-accent-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Other rows */}
          <div className="mt-6 divide-y divide-gray-800/80 rounded-2xl ring-1 ring-gray-800/60 overflow-hidden">
            {/* In House Team */}
            <div className="grid grid-cols-8 items-center bg-gray-900/50">
              <div className="col-span-3 flex items-start gap-4 p-5">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gray-800 ring-1 ring-gray-700/60">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight text-white">In House Team</div>
                  <p className="mt-1 text-sm text-gray-400">
                    Consistent brand knowledge, but higher costs and limited bandwidth.
                  </p>
                </div>
              </div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
            </div>

            {/* Creative Agencies */}
            <div className="grid grid-cols-8 items-center bg-gray-900/30">
              <div className="col-span-3 flex items-start gap-4 p-5">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gray-800 ring-1 ring-gray-700/60">
                  <Palette className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight text-white">Creative Agencies</div>
                  <p className="mt-1 text-sm text-gray-400">
                    Strong process and craft; longer timelines and premium pricing.
                  </p>
                </div>
              </div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
            </div>

            {/* Freelancers */}
            <div className="grid grid-cols-8 items-center bg-gray-900/50">
              <div className="col-span-3 flex items-start gap-4 p-5">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gray-800 ring-1 ring-gray-700/60">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight text-white">Freelancers</div>
                  <p className="mt-1 text-sm text-gray-400">
                    Flexible and budget-friendly; variable consistency and availability.
                  </p>
                </div>
              </div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
            </div>

            {/* Self-Service Tools */}
            <div className="grid grid-cols-8 items-center bg-gray-900/30">
              <div className="col-span-3 flex items-start gap-4 p-5">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gray-800 ring-1 ring-gray-700/60">
                  <Wrench className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight text-white">Self-Service Tools</div>
                  <p className="mt-1 text-sm text-gray-400">
                    Fast and affordable, but lacks depth, strategy, and originality.
                  </p>
                </div>
              </div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><X className="h-5 w-5 text-red-400" /></div>
              <div className="col-span-1 p-5 grid place-items-center"><Check className="h-5 w-5 text-gray-400" /></div>
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="mt-10 space-y-6 md:hidden">
          {/* Card: Design Monks */}
          <div className="rounded-2xl bg-gradient-to-br from-accent-primary/20 via-accent-primary/10 to-transparent ring-1 ring-accent-primary/30 p-1 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
            <div className="rounded-2xl bg-gray-900/80 p-5">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-accent-primary/20 ring-1 ring-accent-primary/30">
                  <MessageCircle className="h-5 w-5 text-accent-primary" />
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-tight text-white">Design Monks</div>
                  <p className="mt-1 text-sm text-gray-400">
                    Expert-driven and committed to higher quality, with efficient results and full support.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 rounded-lg bg-gray-800/60 px-3 py-2">
                  <span className="text-xs text-gray-300">Speed</span>
                  <Check className="ml-auto h-4 w-4 text-accent-primary" />
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gray-800/60 px-3 py-2">
                  <span className="text-xs text-gray-300">Flexibility</span>
                  <Check className="ml-auto h-4 w-4 text-accent-primary" />
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gray-800/60 px-3 py-2">
                  <span className="text-xs text-gray-300">Quality</span>
                  <Check className="ml-auto h-4 w-4 text-accent-primary" />
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gray-800/60 px-3 py-2">
                  <span className="text-xs text-gray-300">Scalability</span>
                  <Check className="ml-auto h-4 w-4 text-accent-primary" />
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gray-800/60 px-3 py-2 col-span-2">
                  <span className="text-xs text-gray-300">Affordability</span>
                  <Check className="ml-auto h-4 w-4 text-accent-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Card: In House Team */}
          <div className="rounded-2xl ring-1 ring-gray-800/60 bg-gray-900/50 p-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gray-800 ring-1 ring-gray-700/60">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">In House Team</div>
                <p className="mt-1 text-sm text-gray-400">Consistent brand knowledge, but higher costs and limited bandwidth.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Speed</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Flexibility</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Quality</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Scalability</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2 col-span-2">
                <span className="text-xs text-gray-300">Affordability</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
            </div>
          </div>

          {/* Card: Creative Agencies */}
          <div className="rounded-2xl ring-1 ring-gray-800/60 bg-gray-900/50 p-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gray-800 ring-1 ring-gray-700/60">
                <Palette className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">Creative Agencies</div>
                <p className="mt-1 text-sm text-gray-400">Strong process and craft; longer timelines and premium pricing.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Speed</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Flexibility</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Quality</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Scalability</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2 col-span-2">
                <span className="text-xs text-gray-300">Affordability</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
            </div>
          </div>

          {/* Card: Freelancers */}
          <div className="rounded-2xl ring-1 ring-gray-800/60 bg-gray-900/50 p-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gray-800 ring-1 ring-gray-700/60">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">Freelancers</div>
                <p className="mt-1 text-sm text-gray-400">Flexible and budget-friendly; variable consistency and availability.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Speed</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Flexibility</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Quality</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Scalability</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2 col-span-2">
                <span className="text-xs text-gray-300">Affordability</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Card: Self-Service Tools */}
          <div className="rounded-2xl ring-1 ring-gray-800/60 bg-gray-900/50 p-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-gray-800 ring-1 ring-gray-700/60">
                <Wrench className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">Self-Service Tools</div>
                <p className="mt-1 text-sm text-gray-400">Fast and affordable, but lacks depth, strategy, and originality.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Speed</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Flexibility</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Quality</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2">
                <span className="text-xs text-gray-300">Scalability</span>
                <X className="ml-auto h-4 w-4 text-red-400" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-3 py-2 col-span-2">
                <span className="text-xs text-gray-300">Affordability</span>
                <Check className="ml-auto h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-accent-primary text-black px-5 py-3 text-sm font-semibold ring-1 ring-accent-primary/30 hover:bg-accent-primary/80 transition-colors shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <ArrowRight className="h-4 w-4" />
            Get Started
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gray-900/80 text-white px-5 py-3 text-sm font-medium ring-1 ring-gray-800 hover:bg-gray-800 transition-colors">
            <Play className="h-4 w-4" />
            See How It Works
          </a>
        </div>
      </section>
    </main>
  );
};

export default PlatformComparisonSection;