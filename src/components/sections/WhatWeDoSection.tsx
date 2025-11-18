'use client';

import React from 'react';
import { Monitor, Users, BadgeCheck, Clock, CheckCircle, ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

const WhatWeDoSection: React.FC = () => {
  return (
    <main>
      {/* Header */}
      {/* <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 via-black to-black pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:pt-20 sm:pb-12 relative">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 text-black px-4 py-2 text-sm font-semibold shadow-[0_0_30px_rgba(250,204,21,0.4)]">
              What We Do
            </span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white text-center">
            Simple Subscriptions Maximum ROI
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Web design or design team retainer; get exactly what you need, when you need it.
          </p>
        </div>
      </section> */}

          <div className="w-full px-4 relative">
           {/* <div className="absolute h-full w-full top-20 [mask-image:radial-gradient(30%_80%,white,transparent)] before:absolute  before:inset-0 before:bg-[radial-gradient(circle_at_top_center,#FF6A00,transparent_40%)] before:opacity-50   "></div> */}
      {/* Header Section */}
        <SectionHeader
          eyebrow="  What We Do"
          title={
            <>
                      

               What We Do
              {/* <br />
              <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
                Step by Step
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

      {/* Bento Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {/* Card 1: Website Build & Management (Large) */}
          <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-gray-800 backdrop-blur-sm lg:col-span-7 md:col-span-6">
            <div className="absolute -top-20 -right-24 w-72 h-72 rounded-full bg-yellow-600/20 blur-3xl"></div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-400/20 ring-1 ring-yellow-400/30">
                  <Monitor className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-sm text-yellow-400/90">Service</span>
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Website Build & Management
              </h2>
              <p className="mt-3 text-gray-400">
                Your website, done for you. One monthly payment. No code needed.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span className="text-gray-300">No upfront development charge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span className="text-gray-300">No-code build & launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span className="text-gray-300">Ongoing updates and maintenance</span>
                </li>
              </ul>

              <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gray-800 hover:bg-gray-700 active:bg-gray-600 transition-colors px-4 py-3 text-white font-medium ring-1 ring-gray-700">
                  View plans
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>

          {/* Card 2: Hero Quote as Card (Visual) */}
          <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-gray-800 backdrop-blur-sm lg:col-span-5 md:col-span-6">
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" 
                alt="" 
                fill
                className="object-cover opacity-15 mix-blend-luminosity pointer-events-none"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-gray-900/80 to-black/90"></div>
            <div className="relative p-6 sm:p-8">
              <p className="text-sm text-yellow-400/90">Overview</p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Simple Subscriptions Maximum ROI
              </h3>
              <p className="mt-3 text-gray-400">
                Web design or design team retainer; get exactly what you need, when you need it.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-3 py-1 text-yellow-400 ring-1 ring-yellow-400/30 text-sm">
                  <BadgeCheck className="w-4 h-4" />
                  Flexible
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-3 py-1 text-yellow-400 ring-1 ring-yellow-400/30 text-sm">
                  <Clock className="w-4 h-4" />
                  On-demand
                </span>
              </div>
            </div>
          </article>

          {/* Card 3: On-Demand Design Team (Medium) */}
          <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-gray-800 backdrop-blur-sm lg:col-span-5 md:col-span-6">
            <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-yellow-600/20 blur-3xl"></div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-400/20 ring-1 ring-yellow-400/30">
                  <Users className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-sm text-yellow-400/90">Service</span>
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                On-Demand Design Team
              </h2>
              <p className="mt-3 text-gray-400">
                Access a team of expert designers. Flexible, scalable, and hassle-free.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span className="text-gray-300">Monthly retainer, no lock-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span className="text-gray-300">Vetted and expert designers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span className="text-gray-300">Pause anytime</span>
                </li>
              </ul>

              <div className="mt-8">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gray-800 hover:bg-gray-700 active:bg-gray-600 transition-colors px-4 py-3 text-white font-medium ring-1 ring-gray-700">
                  Team details
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>

          {/* Card 4: Feature Snapshot (Two-column checks) */}
          <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-gray-800 backdrop-blur-sm lg:col-span-7 md:col-span-6">
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1520975954732-35dd22f47525?q=80&w=1200&auto=format&fit=crop" 
                alt="" 
                fill
                className="object-cover opacity-10 mix-blend-luminosity pointer-events-none"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-gray-900/80 to-yellow-900/20"></div>
            <div className="relative p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-yellow-400/90">Website Build & Management</p>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <span className="text-gray-300">No upfront development charge</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <span className="text-gray-300">No-code build & launch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <span className="text-gray-300">Ongoing updates and maintenance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-yellow-400/90">On-Demand Design Team</p>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <span className="text-gray-300">Monthly retainer, no lock-in</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <span className="text-gray-300">Vetted and expert designers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <span className="text-gray-300">Pause anytime</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gray-800 hover:bg-gray-700 active:bg-gray-600 transition-colors px-4 py-3 text-white font-medium ring-1 ring-gray-700">
                  View plans
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl bg-gray-800 hover:bg-gray-700 active:bg-gray-600 transition-colors px-4 py-3 text-white font-medium ring-1 ring-gray-700">
                  Team details
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDoSection;