"use client";
import React, { useRef, useState, memo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card1";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";

import NumberFlow from "@number-flow/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import TestimonialsBadge from "@/components/ui/BadgeShadow";
import SectionHeader from "../ui/SectionHeader";
import { homeData } from "./data";

interface Package {
  id: number;
  name: string;
  slug: string;
  price: string;
  isFeatured: boolean;
  description: string;
  features: string[];
  billingCycle: string;
}


const PricingSwitch = ({
  onSwitch,
  selected,
}: {
  onSwitch: (value: string) => void;
  selected: string;
}) => {
  const handleSwitch = (value: string) => {
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-[10000] mx-auto flex w-fit rounded-full bg-neutral-900 border border-border-primary p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-text-accent" : "text-text-secondary"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full shadow-lg shadow-accent-primary/30 bg-gradient-to-t from-accent-primary to-accent-hover"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-text-accent" : "text-text-secondary"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full shadow-lg shadow-accent-primary/30 bg-gradient-to-t from-accent-primary to-accent-hover"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          )}
          <span className="relative flex items-center gap-2">Yearly</span>
        </button>
      </div>
    </div>
  );
};

const PricingSection = ({
  monthlyPlans,
  yearlyPlans,
}: {
  monthlyPlans: Package[];
  yearlyPlans: Package[];
}) => {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) => {
    setIsYearly(Number.parseInt(value) === 1);
  };

  // Get the current plans based on the selected period
  const currentPlans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <div
      className=" min-h-screen  mx-auto relative bg-black overflow-x-hidden"
      ref={pricingRef}
      id="pricing"
    >
      {/* Clip-path shadow at the top */}
      {/* <div 
        className="absolute top-0 left-0 right-0 h-32 z-10"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          background: 'linear-gradient(to bottom, rgba(0,0,0,20) 0%, transparent 100%)',
        }}
      /> */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0  h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] "
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      <div className="w-full px-4 relative">
        {/* <div className="absolute h-full w-full top-20 [mask-image:radial-gradient(30%_80%,white,transparent)] before:absolute  before:inset-0 before:bg-[radial-gradient(circle_at_top_center,#FF6A00,transparent_40%)] before:opacity-50   "></div> */}
        {/* Header Section */}
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Our Pricing
              {/* <br /> */}
              {/* <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
                Step by Step
              </span> */}
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

        {/* Pricing Toggle */}
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="flex justify-center mb-8 relative z-50"
        >
          <PricingSwitch
            onSwitch={togglePricingPeriod}
            selected={isYearly ? "1" : "0"}
          />
        </TimelineContent>
      </div>
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, #ccff00 0%, transparent 70%)
      `,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="grid md:grid-cols-3 max-w-6xl gap-4 py-6 mx-auto ">
        {currentPlans.slice(0, 3).map((plan: Package, index: number) => (
          <TimelineContent
            key={`${plan.id}-${isYearly ? "yearly" : "monthly"}`}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative text-white border-neutral-800 transition-all duration-500 hover:scale-[1.02] hover:border-accent-primary/50 ${
                plan.isFeatured
                  ? "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#ccff00] z-20 hover:shadow-[0px_-13px_320px_0px_#ccff00]"
                  : "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 z-10 hover:shadow-[0px_-5px_50px_0px_rgba(204,255,0,0.1)]"
              }`}
            >
              <CardHeader className="text-left ">
                <div className="flex justify-between">
                  <h3 className="text-3xl mb-2">{plan.name}</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold ">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                      }}
                      value={parseFloat(plan.price)}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-gray-300 ml-1">
                    /{plan.billingCycle === "yearly" ? "year" : "month"}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                    plan.isFeatured
                      ? "bg-gradient-to-t from-accent-primary to-accent-hover shadow-lg shadow-accent-primary border border-accent-primary text-black hover:shadow-xl hover:shadow-accent-primary/50"
                      : "bg-gradient-to-t from-neutral-950 to-neutral-600 shadow-lg shadow-neutral-900 border border-neutral-800 text-white hover:border-accent-primary/30 hover:shadow-accent-primary/20"
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-base mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {plan.features.map(
                      (feature: string, featureIndex: number) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center"></span>
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
};

export default memo(PricingSection);
