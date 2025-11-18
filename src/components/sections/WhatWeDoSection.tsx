"use client";

import React from "react";
import {
  Monitor,
  Users,
  BadgeCheck,
  Clock,
  CheckCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { AnimatedButton } from "../custom/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WhatWeDoSection: React.FC<{services: any[]}> = ({services}) => {

  // Icons mapping for different services
  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    "ui-ux-design": Users,
    "web-development": Monitor,
    seo: BadgeCheck,
    "digital-marketing": Sparkles,
  };

  // Helper function to strip HTML tags
  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, "").trim();
  };

  return (
    <main>
      <div className="w-full px-4 relative">
        <SectionHeader
          eyebrow="What We Do"
          title={<>What We Do</>}
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
          {/* Card 1: First Service (Large) */}
          {services[0] && (
            <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-gray-800 backdrop-blur-sm lg:col-span-7 md:col-span-6">
              <div className="absolute -top-20 -right-24 w-72 h-72 rounded-full bg-accent-primary/20 blur-3xl"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/20 ring-1 ring-accent-primary/30">
                    {React.createElement(iconMap[services[0].slug] || Monitor, {
                      className: "w-5 h-5 text-accent-primary",
                    })}
                  </div>
                  <span className="text-sm text-accent-primary/90">
                    Service
                  </span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {services[0].title}
                </h2>
                <p className="mt-3 text-gray-400">
                  {stripHtml(services[0].description)}
                </p>

                <ul className="mt-6 space-y-3">
                  {services[0].features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href={`/30-min`}>
                    <AnimatedButton>Learn more</AnimatedButton>
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Card 2: Second Service with Image (Visual) */}
          {services[1] && (
            <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-gray-800 backdrop-blur-sm lg:col-span-5 md:col-span-6">
              <div className="absolute inset-0">
                <Image
                  src={services[1].img}
                  alt={services[1].title}
                  fill
                  className="object-cover opacity-15 mix-blend-luminosity pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-accent-primary/30 via-gray-900/80 to-black/90"></div>
              <div className="relative p-6 sm:p-8">
                <p className="text-sm text-accent-primary/90">Service</p>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {services[1].title}
                </h3>
                <p className="mt-3 text-gray-400">
                  {stripHtml(services[1].description)}
                </p>
                <div className="mt-8 flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-primary/20 px-3 py-1 text-accent-primary ring-1 ring-accent-primary/30 text-sm">
                    <BadgeCheck className="w-4 h-4" />
                    Professional
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-primary/20 px-3 py-1 text-accent-primary ring-1 ring-accent-primary/30 text-sm">
                    <Clock className="w-4 h-4" />
                    Fast Delivery
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Card 3: Third Service (Medium) */}
          {services[2] && (
            <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-gray-800 backdrop-blur-sm lg:col-span-5 md:col-span-6">
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-accent-primary/20 blur-3xl"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/20 ring-1 ring-accent-primary/30">
                    {React.createElement(
                      iconMap[services[2].slug] || BadgeCheck,
                      { className: "w-5 h-5 text-accent-primary" }
                    )}
                  </div>
                  <span className="text-sm text-accent-primary/90">
                    Service
                  </span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {services[2].title}
                </h2>
                <p className="mt-3 text-gray-400">
                  {stripHtml(services[2].description)}
                </p>

                <ul className="mt-6 space-y-3">
                  {services[2].features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href={`/30-min`}>
                    <AnimatedButton variant="outline">Contact us</AnimatedButton>
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Card 4: Fourth Service with split features (Two-column) */}
          {services[3] && (
            <article className="relative overflow-hidden rounded-2xl bg-gray-900/80 ring-1 ring-gray-800 backdrop-blur-sm lg:col-span-7 md:col-span-6">
              <div className="absolute inset-0">
                <Image
                  src={services[3].img}
                  alt={services[3].title}
                  fill
                  className="object-cover opacity-10 mix-blend-luminosity pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-tr from-black/90 via-gray-900/80 to-accent-primary/20"></div>
              <div className="relative p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-primary/20 ring-1 ring-accent-primary/30">
                    {React.createElement(
                      iconMap[services[3].slug] || Sparkles,
                      { className: "w-5 h-5 text-accent-primary" }
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    {services[3].title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6">
                  {stripHtml(services[3].description)}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-accent-primary/90 mb-3">
                      Key Features
                    </p>
                    <ul className="space-y-3">
                      {services[3].features
                        .slice(0, 2)
                        .map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-accent-primary/90 mb-3">
                      Benefits
                    </p>
                    <ul className="space-y-3">
                      {services[3].features.slice(2).map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {services[3].features.length < 3 && (
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5" />
                          <span className="text-gray-300">
                            Professional results
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/30-min`}>
                    <AnimatedButton>Get Started</AnimatedButton>
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    </main>
  );
};

export default WhatWeDoSection;
