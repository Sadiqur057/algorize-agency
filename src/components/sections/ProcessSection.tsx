/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";


interface ProcessCardProps {
  stepNumber: string;
  title: string;
  description: string;
  stepColor: string;
  gradientFrom: string;
  rotation: string;
  enterFrom?: "left" | "right" | "bottom";
  delay?: number;
}

const buildCardVariants = (
  direction: "left" | "right" | "bottom",
  reduced: boolean,
  delay = 0
): Variants => {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { delay } },
    } as Variants;
  }

  const hiddenMap: Record<"left" | "right" | "bottom", { opacity: number; x: number; y: number }> = {
    left: { opacity: 0, x: -60, y: 0 },
    right: { opacity: 0, x: 60, y: 0 },
    bottom: { opacity: 0, x: 0, y: 60 },
  };

  return {
    hidden: hiddenMap[direction],
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "linear",
        delay,
      },
    },
  } as Variants;
};

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const ProcessCard: React.FC<ProcessCardProps> = ({
  stepNumber,
  title,
  description,
  stepColor,
  gradientFrom,
  rotation,
  enterFrom = "bottom",
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
      >
        {/* Glowing Blob Pin Effect */}
        <div className="absolute top-2 right-2 z-10">
          <div className="relative">
            {/* Outer Glow Ring */}
            {/* <div className={`absolute inset-0 w-20 h-20 rounded-full ${stepColor === 'text-accent-primary' ? 'bg-accent-primary' : stepColor === 'text-accent-secondary' ? 'bg-accent-secondary' : stepColor === 'text-accent-hover' ? 'bg-accent-hover' : stepColor === 'text-accent-light' ? 'bg-accent-light' : 'bg-accent-primary'} opacity-20 blur-lg scale-125 animate-pulse`}></div> */}

            {/* Main Blob with Dark Center */}
            <div
              aria-hidden="true"
              className={`w-20 h-20 rounded-full bg-linear-to-br from-bg-secondary to-bg-tertiary border-2 ${
                stepColor === "text-accent-primary"
                  ? "border-accent-primary"
                  : stepColor === "text-accent-secondary"
                  ? "border-accent-secondary"
                  : stepColor === "text-accent-hover"
                  ? "border-accent-hover"
                  : stepColor === "text-accent-light"
                  ? "border-accent-light"
                  : "border-accent-primary"
              } shadow-lg`}
              style={{ boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
            />

            {/* Inner Glow */}
            <div
              className={`absolute inset-2 rounded-full ${
                stepColor === "text-accent-primary"
                  ? "bg-accent-primary"
                  : stepColor === "text-accent-secondary"
                  ? "bg-accent-secondary"
                  : stepColor === "text-accent-hover"
                  ? "bg-accent-hover"
                  : stepColor === "text-accent-light"
                  ? "bg-accent-light"
                  : "bg-accent-primary"
              } opacity-10`}
            ></div>

            {/* Step Number on Blob */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`font-bold text-xl ${
                  stepColor === "text-accent-primary"
                    ? "text-accent-primary"
                    : stepColor === "text-accent-secondary"
                    ? "text-accent-secondary"
                    : stepColor === "text-accent-hover"
                    ? "text-accent-hover"
                    : stepColor === "text-accent-light"
                    ? "text-accent-light"
                    : "text-accent-primary"
                }`}
              >
                {stepNumber}
              </span>
            </div>
          </div>
        </div>

        {/* Card Hover Glow Effect */}
        <div
          className={`absolute inset-0 rounded-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
            stepColor === "text-accent-primary"
              ? "bg-accent-primary"
              : stepColor === "text-accent-secondary"
              ? "bg-accent-secondary"
              : stepColor === "text-accent-hover"
              ? "bg-accent-hover"
              : stepColor === "text-accent-light"
              ? "bg-accent-light"
              : "bg-accent-primary"
          } blur-xl`}
        ></div>

        <div className="h-16"></div>
        <div
          className={`relative ${gradientFrom} bg-linear-to-t to-transparent rounded-3xl p-6 z-10`}
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

const Connector: React.FC = () => (
  <motion.div
    aria-hidden="true"
    className="absolute z-10 w-96 h-48 transform md:top-40 md:-rotate-20 rotate-70"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img
      src="https://www.racdox.com/connector.svg"
      alt="Connector"
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 8px 22px rgba(99,102,241,0.25))" }}
    />
  </motion.div>
);

const BottomConnector: React.FC = () => (
  <motion.div
    aria-hidden="true"
    className="absolute z-10 w-96 h-48 transform -bottom-48 md:-bottom-64 md:rotate-40 rotate-70"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img
      src="https://www.racdox.com/connector.svg"
      alt="Connector"
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 8px 22px rgba(99,102,241,0.25))" }}
    />
  </motion.div>
);

const ProcessSection: React.FC<{processList: any[]}> = ({processList}) => {

  // Configuration for card colors and rotations
  const cardStyles = [
    { stepColor: "text-accent-secondary", gradientFrom: "from-accent-secondary/20", rotation: "rotate-3 md:-rotate-[10deg]" },
    { stepColor: "text-accent-primary", gradientFrom: "from-accent-primary/20", rotation: "-rotate-3 md:rotate-[10deg]" },
    { stepColor: "text-accent-light", gradientFrom: "from-accent-light/20", rotation: "-rotate-3 md:-rotate-6" },
    { stepColor: "text-accent-hover", gradientFrom: "from-accent-hover/20", rotation: "rotate-3 md:rotate-6" },
  ];

  // Group cards into pairs (rows of 2)
  const cardPairs: Array<{ left: number; right: number } | { single: number }> = [];
  for (let i = 0; i < processList.length; i += 2) {
    if (i + 1 < processList.length) {
      cardPairs.push({ left: i + 1, right: i });
    } else {
      cardPairs.push({ single: i });
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col rounded-t-[5rem] text-left justify-center items-center w-full mx-auto py-16 gap-20 md:gap-0 bg-bg-primary relative overflow-visible  not-prose"
    >
      {/* Background Glowing Blobs - Static for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl opacity-75"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-hover/20 rounded-full blur-3xl opacity-50"
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
              <span className="bg-linear-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
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
        {/* Dynamically render card pairs */}
        {cardPairs.map((pair, rowIndex) => {
          const isLastRow = rowIndex === cardPairs.length - 1;

          if ('single' in pair) {
            // Single card with partner text
            const cardIndex = pair.single;
            const style = cardStyles[cardIndex % cardStyles.length];
            
            return (
              <motion.div
                key={`row-${rowIndex}`}
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
                      <span className="bg-linear-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                        {" "}
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
                  className="absolute z-10 w-96 h-60 transform mt-40 sm:mt-6 md:top-10 md:rotate-0 rotate-70"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <img
                    src="https://www.racdox.com/connector.svg"
                    alt="Connector"
                    className="w-full h-full"
                    style={{ filter: "drop-shadow(0 8px 22px rgba(99,102,241,0.25))" }}
                  />
                </motion.div>

                {/* Single Card - Right */}
                <div className="order-1 mt-0 md:mt-0 right-4 md:order-2 relative z-20">
                  <ProcessCard
                    stepNumber={String(cardIndex + 1).padStart(2, '0')}
                    title={processList[cardIndex].title}
                    description={processList[cardIndex].description}
                    stepColor={style.stepColor}
                    gradientFrom={style.gradientFrom}
                    rotation={style.rotation}
                    enterFrom="bottom"
                    delay={0.08}
                  />
                </div>
              </motion.div>
            );
          }

          // Pair of cards
          const leftIndex = pair.left;
          const rightIndex = pair.right;
          const leftStyle = cardStyles[leftIndex % cardStyles.length];
          const rightStyle = cardStyles[rightIndex % cardStyles.length];

          return (
            <motion.div
              key={`row-${rowIndex}`}
              variants={containerStagger}
              className="relative flex flex-col md:flex-row justify-center items-center w-full gap-24 md:gap-52"
            >
              {/* Left Card */}
              <div className="order-2 mt-20 md:top-40 md:order-1 relative z-20">
                <ProcessCard
                  stepNumber={String(leftIndex + 1).padStart(2, '0')}
                  title={processList[leftIndex].title}
                  description={processList[leftIndex].description}
                  stepColor={leftStyle.stepColor}
                  gradientFrom={leftStyle.gradientFrom}
                  rotation={leftStyle.rotation}
                  enterFrom="left"
                  delay={0.05}
                />
              </div>

              {/* Top Connector */}
              <Connector />

              {/* Right Card */}
              <div className="order-1 md:order-2 mt-10 md:mt-0 relative z-20">
                <ProcessCard
                  stepNumber={String(rightIndex + 1).padStart(2, '0')}
                  title={processList[rightIndex].title}
                  description={processList[rightIndex].description}
                  stepColor={rightStyle.stepColor}
                  gradientFrom={rightStyle.gradientFrom}
                  rotation={rightStyle.rotation}
                  enterFrom="right"
                  delay={0.1}
                />
              </div>

              {/* Bottom Connector (except for last row) */}
              {!isLastRow && <BottomConnector />}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default ProcessSection;
