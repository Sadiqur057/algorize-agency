'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  eyebrowVariant?: 'neutral' | 'accent' | 'tertiary';
  spacing?: 'sm' | 'md' | 'lg';
}

const spacingMap = {
  sm: 'mb-8',
  md: 'mb-12',
  lg: 'mb-16',
} as const;

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  eyebrowVariant = 'neutral',
  spacing = 'md',
}) => {
  const isCenter = align === 'center';
  const reduceMotion = useReducedMotion();

  const eyebrowClasses =
    eyebrowVariant === 'accent'
      ? 'bg-accent-primary/20 border border-accent-primary/30 text-accent-primary'
      : eyebrowVariant === 'tertiary'
        ? 'bg-bg-tertiary border border-border-primary text-text-muted'
        : 'bg-bg-secondary/80 backdrop-blur-sm border border-border-primary text-text-secondary';

  return (
    <div
      className={`${isCenter ? 'text-center' : 'text-left'} ${spacingMap[spacing]} ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          whileInView={
            reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={reduceMotion ? undefined : { scale: 1.01, y: -1 }}
          whileTap={reduceMotion ? undefined : { scale: 0.99 }}
          className={`relative group inline-flex items-center rounded-full px-4 py-2 mb-6 ${eyebrowClasses}`}
        >
          {/* Animated ring and shimmer */}
          {/* <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, rgba(204,255,0,0), rgba(204,255,0,0.35), rgba(204,255,0,0) 50%, rgba(204,255,0,0.35), rgba(204,255,0,0))',
              mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMask:
                'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1px',
            }}
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 10, repeat: Infinity, ease: 'linear' }
            }
          /> */}
          <span className="absolute -inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.15),transparent_70%)] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Shimmer sweep on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          >
            <span className="absolute inset-y-0 left-[-120%] w-[80%] bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:left-[140%] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </span>
          <span className="text-sm font-medium">{eyebrow}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`${isCenter ? '' : ''} text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className={`text-lg md:text-xl text-text-muted max-w-3xl ${isCenter ? 'mx-auto' : ''} mt-4 leading-relaxed`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;