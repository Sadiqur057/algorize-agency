'use client';
import { motion } from 'framer-motion';
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from 'lucide-react';
import FadeInUp from '../animations/FadeInUp';
import Button from '../ui/Button';
import Link from 'next/link';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      className: 'hover:text-blue-400',
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      className: 'hover:text-blue-600',
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
      className: 'hover:text-pink-500',
    },
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      className: 'hover:text-gray-400',
    },
    {
      icon: MessageCircle,
      href: '#',
      label: 'WhatsApp',
      className: 'hover:text-green-500',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <footer className="bg-bg-secondary py-40 relative overflow-hidden rounded-3xl max-w-7xl mx-auto border border-border-primary">
        <div className="px-8 -top-28 sm:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Left Section - Brand */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo and Brand */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-text-accent font-bold text-xl">AT</span>
                </div>
                <span className="text-2xl font-bold text-text-primary">
                  Algorize Tech
                </span>
              </div>

              {/* Tagline */}
              <div className="mb-8 max-w-md">
                <p className="text-text-secondary text-base leading-relaxed mb-2">
                  Scale your business with ease.
                </p>
                <p className="text-text-secondary text-base leading-relaxed mb-2">
                  Over 60+ startups trusted us
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  and increased their revenue!
                </p>
              </div>

              {/* CTA Button */}
              <FadeInUp delay={0.4}>
                <div className="inline-flex items-start">
                  <Link
                    href="/30-min"
                    target="_blank"
                    className="relative group"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>

                    <Button
                      size="lg"
                      className="relative bg-accent-primary hover:bg-accent-hover text-text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-accent-primary/50"
                    >
                      <span className="relative z-10">Book a 15-min call</span>
                    </Button>
                  </Link>
                </div>
              </FadeInUp>
            </motion.div>

            {/* Right Section - Social Media */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-text-primary font-semibold text-lg mb-6">
                Social Media
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 bg-bg-tertiary rounded-full flex items-center justify-center text-text-muted transition-all duration-200 shadow-sm hover:shadow-md border border-border-primary hover:border-accent-primary ${social.className}`}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Text Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -bottom-[80%] md:-bottom-80 w-full overflow-hidden">
          {/* Left fade-out gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-secondary to-transparent z-10" />

          {/* Right fade-out gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-secondary to-transparent z-10" />

          {/* Footer Logo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden cursor-pointer group"
          >
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: '-50%' }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: 'linear',
              }}
              whileHover={{
                transition: { duration: 30 },
              }}
              className="w-[200%] flex relative"
            >
              <motion.div
                transition={{ type: 'tween', duration: 0.3 }}
                className="w-full relative transform-gpu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
              >
                <div className="whitespace-nowrap text-border-primary font-bold text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none select-none">
                  ALGORIZE TECH • ALGORIZE TECH • ALGORIZE TECH • ALGORIZE TECH
                  • ALGORIZE TECH • ALGORIZE TECH •
                </div>
              </motion.div>
              <motion.div
                transition={{ type: 'tween', duration: 0.3 }}
                className="w-full relative transform-gpu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
              >
                <div className="whitespace-nowrap text-border-primary font-bold text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none select-none">
                  ALGORIZE TECH • ALGORIZE TECH • ALGORIZE TECH • ALGORIZE TECH
                  • ALGORIZE TECH • ALGORIZE TECH •
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
