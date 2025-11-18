'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import SocialProofBadge from '@/components/ui/SocialProofBadge';
import FadeInUp from '@/components/animations/FadeInUp';
import Marquee from '@/components/ui/Marquee';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedButton } from '../custom/button';

const HeroSection: React.FC = () => {
  // Logo paths
  const companyLogos = [
    '/assets/logo1.svg',
    '/assets/logo2.svg',
    '/assets/logo3.svg',
    '/assets/logo4.svg',
    '/assets/logo5.svg',
  ];
  const testimonialAvatars = [
    {
      id: 1,
      src: 'https://framerusercontent.com/images/UaeMNaCCtVrxQXhyIzZB7ihAs.png',
      alt: 'Founder 1',
    },
    {
      id: 2,
      src: 'https://framerusercontent.com/images/E3taK89otlzdIR6McZAxomrQPyo.png',
      alt: 'Founder 2',
    },
    {
      id: 3,
      src: 'https://framerusercontent.com/images/f83c9nwlZghmsOqr5KiPD7NpS1I.png',
      alt: 'Founder 3',
    },
  ];
  return (
    <section className="relative min-h-screen flex items-center mt-16 sm:mt-20 justify-center bg-bg-primary overflow-hidden px-4 sm:px-6 lg:px-8 bg-accent-primary">
      {/* Left and Right Shadows */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent z-10 pointer-events-none"></div>



      {/* Enhanced Background Elements with Modern Glowing Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Glowing Orbs - Scaled for mobile */}
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-96 h-48 sm:h-96 bg-accent-primary/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob">
          <div className="absolute inset-2 sm:inset-4 bg-accent-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute inset-4 sm:inset-8 bg-accent-primary/30 rounded-full blur-xl"></div>
        </div>

        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-accent-hover/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000">
          <div className="absolute inset-2 sm:inset-4 bg-accent-hover/20 rounded-full blur-2xl"></div>
          <div className="absolute inset-4 sm:inset-8 bg-accent-hover/30 rounded-full blur-xl"></div>
        </div>

        <div className="absolute top-20 sm:top-40 left-20 sm:left-40 w-40 sm:w-80 h-40 sm:h-80 bg-accent-light/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000">
          <div className="absolute inset-2 sm:inset-4 bg-accent-light/20 rounded-full blur-2xl"></div>
        </div>

        {/* Additional Floating Glowing Elements - Hidden on small screens */}
        <div className="hidden sm:block absolute top-1/4 right-1/4 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent-primary/8 rounded-full blur-xl opacity-60 animate-bounce"></div>
        <div className="hidden sm:block absolute top-3/4 right-1/3 w-20 h-20 bg-accent-hover/12 rounded-full blur-lg opacity-40 animate-ping"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(204, 255, 0, 0.3) 1px, transparent 0)`,
              backgroundSize: '30px 30px sm:50px 50px',
            }}
          ></div>
        </div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-bg-primary/20 to-bg-primary/60"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto py-12 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Badge with Glow */}
          <FadeInUp delay={0.1}>
            <SocialProofBadge
              text="60+ startups & founders chose Algorize Tech"
              className="mb-6 sm:mb-8"
              avatars={[
                {
                  src: 'https://framerusercontent.com/images/UaeMNaCCtVrxQXhyIzZB7ihAs.png',
                  alt: 'Founder 1',
                },
                {
                  src: 'https://framerusercontent.com/images/E3taK89otlzdIR6McZAxomrQPyo.png',
                  alt: 'Founder 2',
                },
                {
                  src: 'https://framerusercontent.com/images/f83c9nwlZghmsOqr5KiPD7NpS1I.png',
                  alt: 'Founder 3',
                },
              ]}
            />
          </FadeInUp>
          {/* Testimonial Section */}
          {/* <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SocialProofBadge
              text="60+ startups & founders chose Algorize Tech"
              avatars={testimonialAvatars.map((a) => ({
                src: a.src,
                alt: a.alt,
              }))}
            />
          </motion.div> */}
          {/* Main Heading with Glow - Improved mobile sizing */}
          <FadeInUp delay={0.2}>
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight relative px-2 sm:px-0">
              <span className="relative z-10">
                Premium Websites for
                <br />
                <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
                  SaaS & Startups
                </span>
              </span>
              {/* Text glow effect */}
              <div className="absolute inset-0 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-accent-primary/20 blur-2xl -z-10">
                Premium Websites for
                <br />
                SaaS & Startups
              </div>
            </h1>
          </FadeInUp>

          {/* Subtitle - Better mobile spacing */}
          <FadeInUp delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Every business needs a website, and it&#39;s
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              never been easier to get one.
            </p>
          </FadeInUp>

          {/* Enhanced CTA Button with Glow - Mobile optimized */}
          <FadeInUp delay={0.4}>
            <div className="flex flex-col items-center mb-4">
              <Link href="/30-min" target="_blank" className="relative group">
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-linear-to-r from-accent-primary to-accent-hover rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>

                {/* <Button
                  size="lg"
                  className="relative bg-accent-primary hover:bg-accent-hover text-text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-accent-primary/50"
                >
                  <span className="relative z-10">Book a 15-min call</span>
                </Button> */}
                <AnimatedButton>
                  Book a 15-min call
                </AnimatedButton>
              </Link>
            </div>
          </FadeInUp>

          {/* Company Logos Marquee - Mobile spacing */}
          <FadeInUp delay={0.5}>
            <div className="mt-12 sm:mt-16">
              <p className="text-xs sm:text-sm text-text-muted mb-6 sm:mb-8 text-center px-4 sm:px-0">
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
          </FadeInUp>
        </div>
      </div>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
