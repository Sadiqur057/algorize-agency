'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialProofBadge from '@/components/ui/SocialProofBadge';
import Booking from '@/components/sections/booking';

const BookingPage: React.FC = () => {
  useEffect(() => {
    // Create script element for Cal.com
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;

    // Define type for Cal.com global object
    interface CalConfig {
      origin: string;
    }

    interface Cal {
      (method: 'init', config: CalConfig): void;
    }

    script.onload = () => {
      // Initialize Cal.com after script loads
      if (
        typeof window !== 'undefined' &&
        (window as unknown as { Cal?: Cal }).Cal
      ) {
        (window as unknown as { Cal?: Cal }).Cal!('init', {
          origin: 'https://app.cal.com',
        });
      }
    };
    document.head.appendChild(script);

    // Add Cal.com styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://app.cal.com/embed/embed.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

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
    <div className="min-h-screen bg-bg-primary mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-primary/10 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-hover/10 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-accent-light/10 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="relative pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonial Section */}
          <motion.div
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
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 relative">
              <span className="relative z-10">
                Book a{' '}
                <span className="bg-linear-to-r from-accent-primary via-accent-hover to-accent-primary bg-clip-text text-transparent">
                  15-min call
                </span>
              </span>
              {/* Text glow effect */}
              <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-bold text-accent-primary/20 blur-2xl -z-10">
                Book a 15-min call
              </div>
            </h1>

            {/* Subtitle */}
            {/* <div className="text-lg text-text-secondary mb-2">
              Please select the time that fits you or just
            </div>
            <div className="text-lg text-text-secondary">
              text me in{' '}
              <a
                href="https://t.me/your-telegram"
                className="text-accent-primary hover:text-accent-hover underline transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>{' '}
              /{' '}
              <a
                href="https://wa.me/your-whatsapp"
                className="text-accent-primary hover:text-accent-hover underline transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div> */}
          </motion.div>

          {/* Spots  */}
          {/* <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 bg-bg-secondary/60 backdrop-blur-sm rounded-full px-4 py-2 border border-border-primary">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></div>
              <span className="text-text-muted text-sm font-medium">
                2 spots available
              </span>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Cal.com Booking Widget */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Booking/>

        {/* Cal.com Branding */}
        {/* <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Powered by{' '}
            <a 
              href="https://cal.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              Cal.com
            </a>
          </p>
        </div> */}
      </motion.div>

      {/* Additional Information */}
      {/* <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Skale Solutions Intro
              </h3>
              <div className="text-gray-600 text-sm space-y-1"> 
                <p>Here's what we'll be doing for ~15 mins</p>
                <p>• Share formal intro's</p>
                <p>• Share our work & process</p>
                <p>• Learn about your project & business goals</p>
              </div>
              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>15m</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                  <span>Cal Video</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Asia/Dhaka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div> */}

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
    </div>
  );
};

export default BookingPage;
