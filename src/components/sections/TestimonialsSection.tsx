'use client';
import { Card, CardContent, CardHeader } from "@/components/ui/card1";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";


import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import TestimonialsBadge from "@/components/ui/BadgeShadow";
import SectionHeader from "../ui/SectionHeader";
// import SectionHeader from "@/components/ui/SectionHeader1";
const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10  rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-yellow-600 border-blue-600 bg-gradient-to-t from-yellow-500 to-yellow-600"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full  rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          )}
          <span className="relative flex items-center gap-2">Yearly</span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection6() {
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

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className=" min-h-screen  mx-auto relative bg-black overflow-x-hidden"
      ref={pricingRef} id="pricing"
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
      {/* <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
            data-framer-name="Ellipse 2"
          ></div>
        </div>
      </TimelineContent> */}

      {/* <SectionHeader
        badgeText="Pricing"
        title={
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.1}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 35,
              delay: 0,
            }}
          >
            Plans that works best for your
          </VerticalCutReveal>
        }
        description="Trusted by millions, We help teams all around the world, Explore which option is right for you."
        className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-2 relative z-10"
        timelineRef={pricingRef}
        customVariants={revealVariants}
        animationNum={0}
      >
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </SectionHeader> */}

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

      <div className="grid md:grid-cols-3 max-w-5xl gap-4 py-6 mx-auto ">
        
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative text-white border-neutral-800 ${
                plan.popular
                  ? "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#ccff00] z-20"
                  : "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 z-10"
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
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-gray-300 ml-1">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl ${
                    plan.popular
                      ? "bg-gradient-to-t from-accent-primary to-accent-hover  shadow-lg shadow-accent-primary border border-accent-primary text-black"
                      : plan.buttonVariant === "outline"
                        ? "bg-gradient-to-t from-neutral-950 to-neutral-600  shadow-lg shadow-neutral-900 border border-neutral-800 text-white"
                        : ""
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-neutral-700">
                  <h4 className="font-medium text-base mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center"></span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}