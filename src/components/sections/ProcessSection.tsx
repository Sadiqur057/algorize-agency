'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

interface ProcessCardProps {
  stepNumber: string;
  title: string;
  description: string;
  stepColor: string;
  gradientFrom: string;
  pinImage: string;
  rotation: string;
  id: number;
  onHoverChange?: (hovered: boolean, id: number) => void;
  enterFrom?: 'left' | 'right' | 'bottom';
  delay?: number;
}

const buildCardVariants = (
  direction: 'left' | 'right' | 'bottom',
  reduced: boolean,
  delay = 0
) => {
  const commonShow = {
    opacity: 1,
    x: 0,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      delay,
    },
  };

  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { delay } },
    } as const;
  }

  const hiddenMap = {
    left: { opacity: 0, x: -40, y: 10, rotateX: 8, scale: 0.98 },
    right: { opacity: 0, x: 40, y: 10, rotateX: 8, scale: 0.98 },
    bottom: { opacity: 0, x: 0, y: 50, rotateX: 8, scale: 0.98 },
  } as const;

  return {
    hidden: hiddenMap[direction],
    show: commonShow,
  } as const;
};

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const DashedConnector: React.FC<{ gradientId: string; active?: boolean }> = ({
  gradientId,
  active = false,
}) => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 400 200"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
        {active ? (
          <>
            <stop offset="0%" stopColor="rgba(99,102,241,0.8)" />
            <stop offset="100%" stopColor="rgba(236,72,153,0.8)" />
          </>
        ) : (
          <>
            <stop offset="0%" stopColor="rgba(148,163,184,0.7)" />
            <stop offset="100%" stopColor="rgba(203,213,225,0.7)" />
          </>
        )}
      </linearGradient>
      <filter id="connectorShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
        <feOffset in="blur" dx="0" dy="2" result="offset" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.35" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <motion.path
      d="M10 150 C120 40, 280 40, 390 150"
      stroke={`url(#${gradientId})`}
      strokeWidth={active ? 3.5 : 3}
      strokeLinecap="round"
      strokeDasharray="6 12"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      animate={{ strokeDashoffset: [0, -120] }}
      transition={{
        pathLength: { duration: 1.1, ease: 'easeInOut' },
        opacity: { duration: 0.4 },
        strokeDashoffset: { duration: 6, ease: 'linear', repeat: Infinity },
      }}
      filter="url(#connectorShadow)"
    />
  </motion.svg>
);

const ProcessCard: React.FC<ProcessCardProps> = ({
  stepNumber,
  title,
  description,
  stepColor,
  gradientFrom,
  pinImage,
  rotation,
  id,
  onHoverChange,
  enterFrom = 'bottom',
  delay = 0,
}) => {
  const prefersReduced = useReducedMotion();
  return (
    <div className={`transform ${rotation}`}>
      <motion.div
        variants={buildCardVariants(enterFrom, Boolean(prefersReduced), delay)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        whileHover={{ y: -6, rotateZ: 0.25 }}
        whileTap={{ scale: 0.995 }}
        className={`relative bg-bg-card/95 backdrop-blur-sm rounded-[50px] p-6 shadow-xl border border-border-primary md:w-80 w-72 hover:shadow-2xl transition-all duration-500 overflow-hidden group will-change-transform my-8 md:my-12`}
        role="group"
        aria-label={`${stepNumber}: ${title}`}
        onMouseEnter={() => onHoverChange?.(true, id)}
        onMouseLeave={() => onHoverChange?.(false, id)}
      >
        {/* Glowing Blob Pin Effect */}
        <div className="absolute top-2 right-2 z-10">
          <div className="relative">
            {/* Outer Glow Ring */}
            {/* <div className={`absolute inset-0 w-20 h-20 rounded-full ${stepColor === 'text-accent-primary' ? 'bg-accent-primary' : stepColor === 'text-accent-secondary' ? 'bg-accent-secondary' : stepColor === 'text-accent-hover' ? 'bg-accent-hover' : stepColor === 'text-accent-light' ? 'bg-accent-light' : 'bg-accent-primary'} opacity-20 blur-lg scale-125 animate-pulse`}></div> */}

            {/* Main Blob with Dark Center */}
            <motion.div
              aria-hidden="true"
              className={`w-20 h-20 rounded-full bg-gradient-to-br from-bg-secondary to-bg-tertiary border-2 ${stepColor === 'text-accent-primary' ? 'border-accent-primary' : stepColor === 'text-accent-secondary' ? 'border-accent-secondary' : stepColor === 'text-accent-hover' ? 'border-accent-hover' : stepColor === 'text-accent-light' ? 'border-accent-light' : 'border-accent-primary'} shadow-lg`}
              animate={{
                boxShadow: [
                  '0 10px 25px rgba(0,0,0,0.15)',
                  '0 20px 40px rgba(0,0,0,0.25)',
                  '0 10px 25px rgba(0,0,0,0.15)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Inner Glow */}
            <div
              className={`absolute inset-2 rounded-full ${stepColor === 'text-accent-primary' ? 'bg-accent-primary' : stepColor === 'text-accent-secondary' ? 'bg-accent-secondary' : stepColor === 'text-accent-hover' ? 'bg-accent-hover' : stepColor === 'text-accent-light' ? 'bg-accent-light' : 'bg-accent-primary'} opacity-10`}
            ></div>

            {/* Step Number on Blob */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`font-bold text-xl ${stepColor === 'text-accent-primary' ? 'text-accent-primary' : stepColor === 'text-accent-secondary' ? 'text-accent-secondary' : stepColor === 'text-accent-hover' ? 'text-accent-hover' : stepColor === 'text-accent-light' ? 'text-accent-light' : 'text-accent-primary'}`}
              >
                {stepNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Card Hover Glow Effect */}
        <div
          className={`absolute inset-0 rounded-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${stepColor === 'text-accent-primary' ? 'bg-accent-primary' : stepColor === 'text-accent-secondary' ? 'bg-accent-secondary' : stepColor === 'text-accent-hover' ? 'bg-accent-hover' : stepColor === 'text-accent-light' ? 'bg-accent-light' : 'bg-accent-primary'} blur-xl`}
        ></div>

        <div className="h-16"></div>
        <div
          className={`relative ${gradientFrom} bg-gradient-to-t to-transparent rounded-3xl p-6 z-10`}
        >
          <div className="space-y-3">
            <h2 className="text-2xl text-text-primary font-bold mb-2 group-hover:text-accent-primary transition-colors duration-300">
              {title}
            </h2>
            <p className="text-text-secondary text-base leading-relaxed group-hover:text-text-primary transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WorkflowProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const handleHoverChange = (hovered: boolean, id: number) => {
    setActiveStep(hovered ? id : null);
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col rounded-t-[5rem] text-left justify-center items-center w-full mx-auto py-16 gap-20 md:gap-0 bg-bg-primary relative overflow-visible  not-prose"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl"
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-hover/20 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.2,
          }}
        />
      </div>

   
      <div className="w-full px-4 relative">
           {/* <div className="absolute h-full w-full top-20 [mask-image:radial-gradient(30%_80%,white,transparent)] before:absolute  before:inset-0 before:bg-[radial-gradient(circle_at_top_center,#FF6A00,transparent_40%)] before:opacity-50   "></div> */}
      {/* Header Section */}
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              Our Process
              <br />
              <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
                Step by Step
              </span>
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

      {/* Process Steps Container */}
      <motion.div
        variants={containerStagger}
        className="relative flex flex-col justify-center items-center w-full max-w-6xl mx-auto px-4 gap-40"
      >
        {/* Row 1: Design Concept (02) and Proposal (01) */}
        <motion.div
          variants={containerStagger}
          className="relative flex flex-col md:flex-row justify-center items-center w-full gap-24 md:gap-52"
        >
          {/* Design Concept - Left */}
          <div className="order-2 mt-20 md:top-40 md:order-1 relative z-20">
            <ProcessCard
              stepNumber="02"
              title="Design Concept"
              description="We craft a design your customers actually love—helping your brand stand out."
              stepColor="text-accent-primary"
              gradientFrom="from-accent-primary/20"
              pinImage="https://framerusercontent.com/images/qfrgnhbit9GLh4NOTnKVvU.png"
              rotation="-rotate-3 md:rotate-[10deg]"
              id={2}
              enterFrom="left"
              delay={0.05}
              onHoverChange={handleHoverChange}
            />
          </div>

          {/* Connector */}
          <motion.div
            aria-hidden="true"
            className="absolute z-10 w-96 h-48 transform md:top-40 md:-rotate-[20deg] rotate-[70deg]"
          >
            {/* <DashedConnector
              gradientId="grad1-dash"
              active={activeStep === 1 || activeStep === 2}
            /> */}

            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98, filter: 'blur(2px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                default: { duration: 0.8, ease: 'easeOut' },
              }}
              className="w-full h-full"
            >
              <motion.img
                src="https://www.racdox.com/connector.svg"
                alt="Connector"
                className="w-full h-full"
                animate={{
                  filter: [
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                    'drop-shadow(0 10px 26px rgba(236,72,153,0.25))',
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Proposal - Right */}
          <div className="order-1  md:order-2 relative z-20">
            <ProcessCard
              stepNumber="01"
              title="Proposal"
              description="Clear proposal with timeline, scope, and transparent pricing."
              stepColor="text-accent-secondary"
              gradientFrom="from-accent-secondary/20"
              pinImage="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
              rotation="rotate-3 md:-rotate-[10deg]"
              id={1}
              enterFrom="right"
              delay={0.1}
              onHoverChange={handleHoverChange}
            />
          </div>

          {/* Connector */}
          <motion.div
            aria-hidden="true"
            className="absolute z-10 w-96 h-48 transform -bottom-48 md:-bottom-64 md:rotate-[40deg] rotate-[70deg]"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98, filter: 'blur(2px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                default: { duration: 0.8, ease: 'easeOut' },
              }}
              className="w-full h-full"
            >
              <motion.img
                src="https://www.racdox.com/connector.svg"
                alt="Connector"
                className="w-full h-full"
                animate={{
                  filter: [
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                    'drop-shadow(0 10px 26px rgba(236,72,153,0.25))',
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Row 2: SAAS Model (04) and Technology (03) */}
        <motion.div
          variants={containerStagger}
          className="relative flex flex-col md:flex-row justify-center items-center w-full gap-24 md:gap-52"
        >
          {/* SAAS Model - Left */}
          <div className="order-2 mt-20 md:top-40 md:order-1 relative z-20">
            <ProcessCard
              stepNumber="04"
              title="SAAS Model"
              description="Subscription-based build. We pick a stack that maximizes ROI for your SaaS."
              stepColor="text-accent-hover"
              gradientFrom="from-accent-hover/20"
              pinImage="https://framerusercontent.com/images/qfrgnhbit9GLh4NOTnKVvU.png"
              rotation="rotate-3 md:rotate-6"
              id={4}
              enterFrom="left"
              delay={0.05}
              onHoverChange={handleHoverChange}
            />
          </div>

          {/* Connector */}
          <motion.div
            aria-hidden="true"
            className="absolute z-10 w-96 h-48 transform md:top-40 md:-rotate-[20deg] rotate-[70deg]"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98, filter: 'blur(2px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                default: { duration: 0.8, ease: 'easeOut' },
              }}
              className="w-full h-full"
            >
              <motion.img
                src="https://www.racdox.com/connector.svg"
                alt="Connector"
                className="w-full h-full"
                animate={{
                  filter: [
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                    'drop-shadow(0 10px 26px rgba(236,72,153,0.25))',
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Technology - Right */}
          <div className="order-1 md:order-2 mt-10 md:mt-0  relative z-20">
            <ProcessCard
              stepNumber="03"
              title="Technology"
              description="Select the best technology for speed, security, and scalability."
              stepColor="text-accent-light"
              gradientFrom="from-accent-light/20"
              pinImage="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
              rotation="-rotate-3 md:-rotate-6"
              id={3}
              enterFrom="right"
              delay={0.1}
              onHoverChange={handleHoverChange}
            />
          </div>
          {/* Connector */}
          <motion.div
            aria-hidden="true"
            className="absolute z-10 w-96 h-48 transform -bottom-48 md:-bottom-64 md:rotate-[40deg] rotate-[70deg]"
          >
            <img
              src="https://www.racdox.com/connector.svg"
              alt="Connector"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>

 {/* Row 2: SAAS Model (04) and Technology (03) */}
        <motion.div
          variants={containerStagger}
          className="relative flex flex-col md:flex-row justify-center items-center w-full gap-24 md:gap-52"
        >
          {/* SAAS Model - Left */}
          <div className="order-2 mt-20 md:top-40 md:order-1 relative z-20">
            <ProcessCard
              stepNumber="04"
              title="SAAS Model"
              description="Subscription-based build. We pick a stack that maximizes ROI for your SaaS."
              stepColor="text-accent-hover"
              gradientFrom="from-accent-hover/20"
              pinImage="https://framerusercontent.com/images/qfrgnhbit9GLh4NOTnKVvU.png"
              rotation="rotate-3 md:rotate-6"
              id={4}
              enterFrom="left"
              delay={0.05}
              onHoverChange={handleHoverChange}
            />
          </div>

          {/* Connector */}
          <motion.div
            aria-hidden="true"
            className="absolute z-10 w-96 h-48 transform md:top-40 md:-rotate-[20deg] rotate-[70deg]"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98, filter: 'blur(2px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                default: { duration: 0.8, ease: 'easeOut' },
              }}
              className="w-full h-full"
            >
              <motion.img
                src="https://www.racdox.com/connector.svg"
                alt="Connector"
                className="w-full h-full"
                animate={{
                  filter: [
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                    'drop-shadow(0 10px 26px rgba(236,72,153,0.25))',
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Technology - Right */}
          <div className="order-1 md:order-2 mt-10 md:mt-0  relative z-20">
            <ProcessCard
              stepNumber="03"
              title="Technology"
              description="Select the best technology for speed, security, and scalability."
              stepColor="text-accent-light"
              gradientFrom="from-accent-light/20"
              pinImage="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
              rotation="-rotate-3 md:-rotate-6"
              id={3}
              enterFrom="right"
              delay={0.1}
              onHoverChange={handleHoverChange}
            />
          </div>
          {/* Connector */}
          <motion.div
            aria-hidden="true"
            className="absolute z-10 w-96 h-48 transform -bottom-48 md:-bottom-64 md:rotate-[40deg] rotate-[70deg]"
          >
            <img
              src="https://www.racdox.com/connector.svg"
              alt="Connector"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
        
        {/* Row 3: Final Step - Development (05) and Partner Text */}
        <motion.div
          variants={containerStagger}
          className="relative flex flex-col md:flex-row justify-center items-center w-full gap-24 md:gap-52"
        >
          {/* Partner Text - Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 top-10 md:order-1 relative z-20"
          >
            <div className="rotate-6 md:-rotate-6 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl text-text-primary font-bold leading-tight">
                Your
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  {' '}
                  all‑in‑one
                </span>
                <br />
                Software Development Partner
              </h3>
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div
            aria-hidden="true"
            className="absolute z-10 w-96 h-60 transform mt-40 sm:mt-6 md:top-10 md:rotate-[0deg] rotate-[70deg]"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98, filter: 'blur(2px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                default: { duration: 0.8, ease: 'easeOut' },
              }}
              className="w-full h-full"
            >
              <motion.img
                src="https://www.racdox.com/connector.svg"
                alt="Connector"
                className="w-full h-full"
                animate={{
                  filter: [
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                    'drop-shadow(0 10px 26px rgba(236,72,153,0.25))',
                    'drop-shadow(0 8px 22px rgba(99,102,241,0.25))',
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Development - Right */}
          <div className="order-1 mt-0 md:mt-0 right-4 md:order-2 relative z-20">
            <ProcessCard
              stepNumber="05"
              title="Development"
              description="Senior full‑stack engineers build your product and stay available for every question."
              stepColor="text-accent-primary"
              gradientFrom="from-accent-primary/20"
              pinImage="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
              rotation="-rotate-2 md:-rotate-[10deg]"
              id={5}
              enterFrom="bottom"
              delay={0.08}
              onHoverChange={handleHoverChange}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WorkflowProcess;
