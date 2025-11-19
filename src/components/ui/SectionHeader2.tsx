"use client";

import React, { useRef } from 'react';
import TestimonialsBadge from './BadgeShadow';
import { TimelineContent } from './timeline-animation';
import type { Variants } from "framer-motion"; // Import the Variants type

interface SectionHeaderProps {
  badgeText?: string;
  title: string | React.ReactNode;
  description: string;
  className?: string;
  children?: React.ReactNode;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: Variants; // Use the proper Variants type
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText = "Section",
  title,
  description,
  className = "",
  children,
  animationNum = 0,
  timelineRef = null,
  customVariants
}) => {
  // Default animation variants if none provided
  const defaultVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.4,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;
  
  // Create a default ref if none provided
  const defaultRef = useRef<HTMLElement>(null);
  const refToUse = timelineRef || defaultRef;

  return (
    <TimelineContent
      as="article"
      animationNum={animationNum}
      timelineRef={refToUse}
      customVariants={variants}
      className={`max-w-screen-md mx-auto text-center space-y-2 pb-4 ${className}`}
    >
      <div className="flex justify-center">
        <TestimonialsBadge sectionName={badgeText} />
      </div>
      <h1 className="sm:text-4xl text-2xl font-medium">
        {title}
      </h1>
      <p className="mx-auto sm:text-base text-sm text-gray-300 px-10 lg:px-40">
        {description}
      </p>
      {children}
    </TimelineContent>
  );
};

export default SectionHeader;