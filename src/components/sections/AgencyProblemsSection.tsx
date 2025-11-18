'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { AnimatedButton } from '../custom/button';

const AgencyProblemsSection: React.FC = () => {
  return (
    <main>
      <section className="relative">
        {/* Decorative left rail */}
        {/* <div className="absolute left-0 top-24 hidden lg:block h-[1px] w-32 bg-lime-400"></div> */}

        {/* Decorative stacked squares top-right */}
        <div className="absolute right-6 md:right-10 top-8 flex gap-2">
          <div className="h-6 w-6 bg-neutral-900 rounded-sm"></div>
          <div className="h-6 w-6 bg-lime-400 rounded-sm -mt-2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Heading */}
          <div className="pt-16 md:pt-24 lg:pt-32 flex justify-between items-center flex-wrap gap-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
              Digital agency problems
              <br className="hidden sm:block" />
              and their best solutions
            </h1>
            <AnimatedButton>
              Consult with us
            </AnimatedButton>
          </div>

          {/* Content grid */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left large image */}
            <div className="lg:col-span-6">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&sat=-100"
                  alt="Team collaborating in a studio"
                  width={1800}
                  height={1125}
                  className="w-full aspect-[16/10] object-cover rounded-2xl shadow-sm ring-1 ring-neutral-200/60 filter grayscale"
                />
              </div>
            </div>

            {/* Right copy + small image with circular badge */}
            <div className="lg:col-span-6">
              <p className="text-neutral-200 leading-relaxed max-w-xl">
                Crafting compelling digital experiences that captivate audiences and
                drive meaningful connections. Our digital agency combines innovation,
                strategy, and expertise to fuel your online success. On the other hand we
                denounce righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment.
              </p>

              <div className="relative mt-8 md:mt-10">
                {/* Right smaller image */}
                <div className="flex justify-start md:justify-end">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&sat=-100"
                    alt="Product review on a device in an office"
                    width={1400}
                    height={788}
                    className="w-full md:w-[520px] aspect-[16/9] object-cover rounded-xl shadow-sm ring-1 ring-neutral-200/60 filter grayscale"
                  />
                </div>

                {/* Circular badge with arrow and circular text */}
                <div className="absolute -left-2 sm:-left-6 lg:-left-[20rem] -bottom-10 md:-bottom-28 z-10">
                  <div className="relative size-40 md:size-44">
                    {/* Outer subtle ring */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-neutral-300/70 bg-white/60 backdrop-blur-sm"></div>

                    {/* Circular text using SVG */}
                    <svg viewBox="0 0 200 200" className="absolute inset-0">
                      <defs>
                        <path id="textcircle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
                      </defs>
                      <text fill="rgb(38,38,38)" className="[font-size:11px] md:[font-size:12px] tracking-[0.12em]" style={{ fontWeight: 500, letterSpacing: '0.12em' }}>
                        <textPath startOffset="0" href="#textcircle" textLength="502">
                          LEADING DIGITAL AGENCY • SINCE 2005 • LEADING DIGITAL AGENCY • SINCE 2005 •
                        </textPath>
                      </text>
                    </svg>

                    {/* Center action button */}
                    <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-14 md:size-16 rounded-full bg-lime-400 shadow-sm ring-1 ring-neutral-200 flex items-center justify-center hover:scale-[1.03] transition-transform">
                      <ArrowUpRight className="size-5 md:size-6 text-neutral-900" />
                      <span className="sr-only">Explore solutions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle bottom divider to echo layout rhythm */}
          <div className="mt-20 md:mt-24 "></div>
        </div>
      </section>
    </main>
  );
};

export default AgencyProblemsSection;