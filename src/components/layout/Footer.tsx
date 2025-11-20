/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import FadeInUp from "../animations/FadeInUp";
import Link from "next/link";
import { AnimatedButton } from "../custom/button";
import Image from "next/image";
import { getIconComponent } from "@/lib/utils";

const Footer: React.FC<{ settings: any, social: any[] }> = ({ settings, social }) => {
  
  // Transform social data to include icon components
  const socialLinks = social?.map((item) => ({
    icon: getIconComponent(item.iconClass),
    href: item.link,
    label: item.title,
    target: item.target,
    className: "hover:text-accent-primary",
  })) || [];

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
                <Image
                  src={settings?.algorize_logo}
                  alt="Logo"
                  width={30}
                  height={30}
                  className="h-auto w-7 object-contain"
                />
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
                    // target="_blank"
                    className="relative group"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>

                    <AnimatedButton>Book a 15-min call </AnimatedButton>
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
                    target={social.target}
                    rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
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
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
              whileHover={{
                transition: { duration: 30 },
              }}
              className="w-[200%] flex relative"
            >
              <motion.div
                transition={{ type: "tween", duration: 0.3 }}
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
                transition={{ type: "tween", duration: 0.3 }}
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
