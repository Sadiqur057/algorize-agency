import React, { useEffect, useRef, memo } from 'react';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.4,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.3 });
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  const directionVariants = {
    up: { y: shouldReduceMotion ? 0 : 30 },
    down: { y: shouldReduceMotion ? 0 : -30 },
    left: { x: shouldReduceMotion ? 0 : 30 },
    right: { x: shouldReduceMotion ? 0 : -30 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0.01 : duration,
            delay: shouldReduceMotion ? 0 : delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default memo(ScrollReveal);
