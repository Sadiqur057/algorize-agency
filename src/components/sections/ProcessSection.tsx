"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const processList = [
  {
    id: 4,
    title: "Discover & Define",
    description:
      "We begin by understanding your brand, business goals, and target audience. This phase helps define the challenges and objectives for the project.",
    slug: "discover-and-define",
    image:
      "https://res.cloudinary.com/dygyhxplr/image/upload/v1763199976/upload/discover.png",
  },
  {
    id: 5,
    title: "Strategize & Plan",
    description:
      "We develop a strategic roadmap tailored to your goals, including content planning, SEO audit, design wireframes, and tech stack decisions for development.",
    slug: "strategize-and-plan",
    image:
      "https://res.cloudinary.com/dygyhxplr/image/upload/v1763200059/upload/plan.png",
  },
  {
    id: 6,
    title: "Design Experience",
    description:
      "Our UI/UX designers craft best intuitive and visually compelling interfaces that will resonate with users and align with your brand identity.",
    slug: "design-experience",
    image:
      "https://res.cloudinary.com/dygyhxplr/image/upload/v1763200094/upload/design.png",
  },
  {
    id: 7,
    title: "Develop Solutions",
    description:
      "We bring designs to life with scalable, secure, and high-performance web development using modern frameworks and clean code practices.",
    slug: "develop-solutions",
    image:
      "https://res.cloudinary.com/dygyhxplr/image/upload/v1763205011/upload/develop.png",
  },
  {
    id: 8,
    title: "Optimize & Launch",
    description:
      "We fine-tune for SEO, page speed, and responsiveness before launching. Every detail is checked to ensure a smooth and impactful release.",
    slug: "optimize-and-launch",
    image:
      "https://res.cloudinary.com/dygyhxplr/image/upload/v1763205043/upload/project-complete.png",
  },
  {
    id: 9,
    title: "Promote & Grow",
    description:
      "Post-launch, we support your digital growth through targeted marketing campaigns, analytics, and conversion optimization strategies.",
    slug: "promote-and-grow",
    image:
      "https://res.cloudinary.com/dygyhxplr/image/upload/v1763205069/upload/support.png",
  },
  {
    id: 10,
    title: "Next step",
    description:
      "Post-launch, we support your digital growth through targeted marketing campaigns, analytics, and conversion optimization strategies.",
    slug: "promote-and-grow",
    image:
      "https://res.cloudinary.com/dygyhxplr/image/upload/v1763205069/upload/support.png",
  },
];

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
  enterFrom?: "left" | "right" | "bottom";
  delay?: number;
}

const buildCardVariants = (
  direction: "left" | "right" | "bottom",
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
      type: "spring",
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
        pathLength: { duration: 1.1, ease: "easeInOut" },
        opacity: { duration: 0.4 },
        strokeDashoffset: { duration: 6, ease: "linear", repeat: Infinity },
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
              className={`w-20 h-20 rounded-full bg-gradient-to-br from-bg-secondary to-bg-tertiary border-2 ${
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
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(0,0,0,0.15)",
                  "0 20px 40px rgba(0,0,0,0.25)",
                  "0 10px 25px rgba(0,0,0,0.15)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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

const Connector: React.FC = () => (
  <motion.div
    aria-hidden="true"
    className="absolute z-10 w-96 h-48 transform md:top-40 md:-rotate-[20deg] rotate-[70deg]"
  >
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      animate={{ y: [0, -3, 0] }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        default: { duration: 0.8, ease: "easeOut" },
      }}
      className="w-full h-full"
    >
      <motion.img
        src="https://www.racdox.com/connector.svg"
        alt="Connector"
        className="w-full h-full"
        animate={{
          filter: [
            "drop-shadow(0 8px 22px rgba(99,102,241,0.25))",
            "drop-shadow(0 10px 26px rgba(236,72,153,0.25))",
            "drop-shadow(0 8px 22px rgba(99,102,241,0.25))",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />
    </motion.div>
  </motion.div>
);

const BottomConnector: React.FC = () => (
  <motion.div
    aria-hidden="true"
    className="absolute z-10 w-96 h-48 transform -bottom-48 md:-bottom-64 md:rotate-[40deg] rotate-[70deg]"
  >
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      animate={{ y: [0, -3, 0] }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        default: { duration: 0.8, ease: "easeOut" },
      }}
      className="w-full h-full"
    >
      <motion.img
        src="https://www.racdox.com/connector.svg"
        alt="Connector"
        className="w-full h-full"
        animate={{
          filter: [
            "drop-shadow(0 8px 22px rgba(99,102,241,0.25))",
            "drop-shadow(0 10px 26px rgba(236,72,153,0.25))",
            "drop-shadow(0 8px 22px rgba(99,102,241,0.25))",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />
    </motion.div>
  </motion.div>
);

const WorkflowProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const handleHoverChange = (hovered: boolean, id: number) => {
    setActiveStep(hovered ? id : null);
  };

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
      {/* Background Glowing Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute top-20 left-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl"
          animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
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
            ease: "easeInOut",
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
                      <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
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
                  className="absolute z-10 w-96 h-60 transform mt-40 sm:mt-6 md:top-10 md:rotate-[0deg] rotate-[70deg]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                      default: { duration: 0.8, ease: "easeOut" },
                    }}
                    className="w-full h-full"
                  >
                    <motion.img
                      src="https://www.racdox.com/connector.svg"
                      alt="Connector"
                      className="w-full h-full"
                      animate={{
                        filter: [
                          "drop-shadow(0 8px 22px rgba(99,102,241,0.25))",
                          "drop-shadow(0 10px 26px rgba(236,72,153,0.25))",
                          "drop-shadow(0 8px 22px rgba(99,102,241,0.25))",
                        ],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Single Card - Right */}
                <div className="order-1 mt-0 md:mt-0 right-4 md:order-2 relative z-20">
                  <ProcessCard
                    stepNumber={String(cardIndex + 1).padStart(2, '0')}
                    title={processList[cardIndex].title}
                    description={processList[cardIndex].description}
                    stepColor={style.stepColor}
                    gradientFrom={style.gradientFrom}
                    pinImage="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
                    rotation={style.rotation}
                    id={processList[cardIndex].id}
                    enterFrom="bottom"
                    delay={0.08}
                    onHoverChange={handleHoverChange}
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
                  pinImage="https://framerusercontent.com/images/qfrgnhbit9GLh4NOTnKVvU.png"
                  rotation={leftStyle.rotation}
                  id={processList[leftIndex].id}
                  enterFrom="left"
                  delay={0.05}
                  onHoverChange={handleHoverChange}
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
                  pinImage="https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png"
                  rotation={rightStyle.rotation}
                  id={processList[rightIndex].id}
                  enterFrom="right"
                  delay={0.1}
                  onHoverChange={handleHoverChange}
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

export default WorkflowProcess;
