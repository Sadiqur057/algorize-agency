import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const AnimatedSVGChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const originalBars = useMemo(() => [
    { x: 27, y: 18, height: 98 },
    { x: 0, y: 37, height: 98 },
    { x: 55, y: 70, height: 98 },
    { x: 83, y: 21, height: 98 },
    { x: 111, y: 70, height: 129 },
    { x: 139, y: 51, height: 98 },
    { x: 167, y: 21, height: 98 },
    { x: 195, y: 42, height: 98 },
    { x: 223, y: 57, height: 98 },
    { x: 251, y: 70, height: 98 },
    { x: 279, y: 21, height: 98 },
    { x: 307, y: 8, height: 98 },
    { x: 335, y: 0, height: 98 },
    { x: 363, y: 26, height: 98 },
    { x: 391, y: 49, height: 98 },
    { x: 419, y: 70, height: 98 },
    { x: 447, y: 98, height: 98 },
    { x: 475, y: 118, height: 98 },
    { x: 503, y: 49, height: 98 },
    { x: 533, y: 31, height: 98 },
  ], []);

  const [animatedBars, setAnimatedBars] = useState(
    originalBars.map((bar) => ({ ...bar, animatedHeight: 0, animatedY: 217 })),
  );

  const generateNewData = useCallback(() => {
    return originalBars.map((bar) => {
      const newHeight = Math.random() * 150 + 50; // Random height between 50-200
      const newY = 217 - newHeight; // Calculate Y position from bottom
      return {
        ...bar,
        animatedHeight: newHeight,
        animatedY: newY,
      };
    });
  }, [originalBars]);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setAnimatedBars(
          originalBars.map((bar) => ({
            ...bar,
            animatedHeight: bar.height,
            animatedY: bar.y,
          })),
        );
      }, 300);

      const interval = setInterval(() => {
        setAnimatedBars(generateNewData());
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isInView, generateNewData, originalBars]);

  return (
    <div ref={ref} className="w-full">
      <svg
        width="552"
        height="217"
        viewBox="0 0 552 217"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        {/* Grid lines */}
        <motion.path
          d="M0 216H552"
          stroke="#D5D5D5"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.path
          d="M0 155H552"
          stroke="#D5D5D5"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.path
          d="M0 98H552"
          stroke="#D5D5D5"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.path
          d="M0 42H552"
          stroke="#D5D5D5"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Animated bars */}
        {animatedBars.map((bar, index) => {
          const centerY = 108.5;
          const halfHeight = bar.animatedHeight / 2;

          return (
            <motion.rect
              key={index}
              x={bar.x}
              width="19"
              rx="9.5"
              fill="#ccff00"
              initial={{
                height: 0,
                y: centerY,
                opacity: 0,
              }}
              animate={{
                height: bar.animatedHeight,
                y: centerY - halfHeight,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                delay: isInView ? index * 0.05 : 0,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                fill: "#b8e600",
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />
          );
        })}

        {animatedBars.map((bar, index) => {
          const centerY = 108.5;
          const halfHeight = bar.animatedHeight / 2;

          return (
            <motion.rect
              key={`highlight-${index}`}
              x={bar.x}
              width="19"
              rx="9.5"
              fill="url(#barGradient)"
              initial={{ opacity: 0 }}
              animate={{
                height: bar.animatedHeight,
                y: centerY - halfHeight,
              }}
              whileHover={{ opacity: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              style={{ pointerEvents: "none" }}
            />
          );
        })}

        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e6ff80" />
            <stop offset="100%" stopColor="#ccff00" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mt-4 text-center">
        <motion.div
          className="inline-flex items-center space-x-2 text-sm text-text-muted"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-2 h-2 bg-accent-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-text-muted">Live Data Updates</span>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedSVGChart;
