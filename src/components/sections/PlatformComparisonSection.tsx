"use client";

import React from "react";
import {
  MessageCircle,
  Users,
  Palette,
  User,
  ArrowRight,
  Play,
  Zap,
  Target,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  CheckCircle,
  Circle,
  CircleX,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";
import { AnimatedButton } from "../custom/button";

// Feature comparison data structure
interface FeatureComparison {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  algorize: {
    text: string;
    impact: "positive" | "negative";
  };
  agencies: {
    text: string;
    impact: "positive" | "negative";
  };
  designer: {
    text: string;
    impact: "positive" | "negative";
  };
  freelancers: {
    text: string;
    impact: "positive" | "negative";
  };
  tools: {
    text: string;
    impact: "positive" | "negative";
  };
}

const comparisonData: { features: FeatureComparison[] } = {
  features: [
    {
      name: "Speed",
      icon: Zap,
      algorize: {
        text: "Quick turnaround",
        impact: "positive",
      },
      agencies: {
        text: "Slow, multi-step",
        impact: "negative",
      },
      designer: {
        text: "Uncertain",
        impact: "positive",
      },
      freelancers: {
        text: "Unpredictable timing",
        impact: "negative",
      },
      tools: {
        text: "Fast setup",
        impact: "positive",
      },
    },
    {
      name: "Flexibility",
      icon: Target,
      algorize: {
        text: "Adapts to any need",
        impact: "positive",
      },
      agencies: {
        text: "Fixed packages",
        impact: "negative",
      },
      designer: {
        text: "Narrow scope",
        impact: "negative",
      },
      freelancers: {
        text: "Flexible but uneven",
        impact: "positive",
      },
      tools: {
        text: "Limited customization",
        impact: "negative",
      },
    },
    {
      name: "Quality",
      icon: CheckCircle2,
      algorize: {
        text: "Consistently high",
        impact: "positive",
      },
      agencies: {
        text: "Good but process-heavy",
        impact: "positive",
      },
      designer: {
        text: "Good, skill dependent",
        impact: "positive",
      },
      freelancers: {
        text: "Uncertain",
        impact: "negative",
      },
      tools: {
        text: "Template-based",
        impact: "negative",
      },
    },
    {
      name: "Scalability",
      icon: TrendingUp,
      algorize: {
        text: "Scale up anytime",
        impact: "positive",
      },
      agencies: {
        text: "Hard to expand fast",
        impact: "negative",
      },
      designer: {
        text: "Limited capacity",
        impact: "negative",
      },
      freelancers: {
        text: "Hard to scale",
        impact: "negative",
      },
      tools: {
        text: "Very limited",
        impact: "negative",
      },
    },
    {
      name: "Cost Effectiveness",
      icon: DollarSign,
      algorize: {
        text: "High value for spend",
        impact: "positive",
      },
      agencies: {
        text: "High cost, lower value",
        impact: "negative",
      },
      designer: {
        text: "Fixed salary & overhead",
        impact: "negative",
      },
      freelancers: {
        text: "Budget friendly but risky",
        impact: "positive",
      },
      tools: {
        text: "Low cost, low value",
        impact: "negative",
      },
    },
  ],
};

// Platform configuration
interface Platform {
  id: "algorize" | "agencies" | "designer" | "freelancers" | "tools";
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  isHighlighted: boolean;
}

const platforms: Platform[] = [
  {
    id: "algorize",
    name: "Algorize",
    icon: MessageCircle,
    description:
      "Expert-driven and committed to higher quality, with efficient results and full support.",
    isHighlighted: true,
  },
  {
    id: "agencies",
    name: "Typical Agencies",
    icon: Palette,
    description:
      "Strong process and craft; longer timelines and premium pricing.",
    isHighlighted: false,
  },
  {
    id: "designer",
    name: "Full-time Designer",
    icon: Users,
    description:
      "Consistent brand knowledge, but higher costs and limited bandwidth.",
    isHighlighted: false,
  },
  {
    id: "freelancers",
    name: "Freelancers",
    icon: User,
    description:
      "Flexible and budget-friendly; variable consistency and availability.",
    isHighlighted: false,
  },
];

const PlatformComparisonSection: React.FC = () => {
  return (
    <main className="relative ">
      {/* Decorative background glows with yellow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-accent-primary/15 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-primary/20 blur-3xl"></div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        {/* <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-primary/10 text-accent-primary px-3 py-1 text-xs font-medium ring-1 ring-accent-primary/20">
            <Sparkles className="h-3.5 w-3.5" />
            Why Choose Us
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Design Monks's Alternative? Think One More Time!
          </h1>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Compare popular options across the factors that matter most.
          </p>
        </div> */}

        <div className="w-full px-4 relative">
          {/* <div className="absolute h-full w-full top-20 [mask-image:radial-gradient(30%_80%,white,transparent)] before:absolute  before:inset-0 before:bg-[radial-gradient(circle_at_top_center,#FF6A00,transparent_40%)] before:opacity-50   "></div> */}
          {/* Header Section */}
          <SectionHeader
            eyebrow=" Why Choose Us"
            title={
              <>
                Why Choose
                {/* <br /> */}
                {/* <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
                  Us
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

        {/* Column labels (md+) */}
        <div className="hidden md:block">
          <div
            className="mt-12 grid"
            style={{
              gridTemplateColumns: `minmax(200px, 1fr) repeat(${platforms.length}, minmax(180px, 1fr))`,
            }}
          >
            <div className="text-xs uppercase tracking-wide text-gray-500 p-4">
              Feature
            </div>
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="text-xs uppercase tracking-wide text-gray-500 p-4 text-center"
              >
                {platform.name}
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {comparisonData.features.map((feature, featureIndex) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={feature.name}
                className={`grid ${featureIndex === 0 ? "mt-4" : ""}`}
                style={{
                  gridTemplateColumns: `minmax(200px, 1fr) repeat(${platforms.length}, minmax(180px, 1fr))`,
                }}
              >
                {/* Feature name column */}
                <div
                  className={`flex items-center gap-3 p-4 bg-gray-900/50 ${
                    featureIndex === 0 ? "rounded-tl-2xl" : ""
                  } ${
                    featureIndex === comparisonData.features.length - 1
                      ? "rounded-bl-2xl"
                      : ""
                  } border-b border-r border-gray-800/80`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <FeatureIcon className="h-5 w-5 text-accent-primary" />
                  </div>
                  <span className="font-semibold text-white text-sm">
                    {feature.name}
                  </span>
                </div>

                {/* Platform columns */}
                {platforms.map((platform, platformIndex) => {
                  const featureData = feature[platform.id];
                  const isPositive = featureData.impact === "positive";
                  const isNegative = featureData.impact === "negative";
                  const ImpactIcon = isPositive ? CheckCircle : CircleX;

                  return (
                    <div
                      key={platform.id}
                      className={`
                        p-4 flex items-center justify-center
                        ${
                          platform.isHighlighted
                            ? "bg-linear-to-br from-accent-primary/20 via-accent-primary/10 to-transparent"
                            : "bg-gray-900/30"
                        }
                        ${
                          featureIndex === 0 &&
                          platformIndex === platforms.length - 1
                            ? "rounded-tr-2xl"
                            : ""
                        }
                        ${
                          featureIndex === comparisonData.features.length - 1 &&
                          platformIndex === platforms.length - 1
                            ? "rounded-br-2xl"
                            : ""
                        }
                        ${
                          featureIndex === 0 && platform.isHighlighted
                            ? "border-t-2 border-accent-primary/30"
                            : "border-t border-gray-800/80"
                        }
                        ${
                          featureIndex === comparisonData.features.length - 1 &&
                          platform.isHighlighted
                            ? "border-b-2 border-accent-primary/30"
                            : "border-b border-gray-800/80"
                        }
                        ${
                          platformIndex === 0 && platform.isHighlighted
                            ? "border-l-2 border-accent-primary/30"
                            : platformIndex === 0
                            ? "border-l border-gray-800/80"
                            : ""
                        }
                        ${
                          platformIndex === platforms.length - 1 &&
                          platform.isHighlighted
                            ? "border-r-2 border-accent-primary/30"
                            : platformIndex === platforms.length - 1
                            ? "border-r border-gray-800/80"
                            : "border-r border-gray-800/80"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <ImpactIcon
                          className={`h-4 w-4 shrink-0 ${
                            isPositive
                              ? platform.isHighlighted
                                ? "text-accent-primary"
                                : "text-green-400"
                              : isNegative
                              ? "text-red-400/60"
                              : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-xs text-center ${
                            platform.isHighlighted
                              ? "text-white font-medium"
                              : isPositive
                              ? "text-gray-300"
                              : "text-gray-400"
                          }`}
                        >
                          {featureData.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Mobile cards */}
        <div className="mt-10 space-y-6 md:hidden">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <div
                key={platform.id}
                className={`
                  rounded-2xl p-5
                  ${
                    platform.isHighlighted
                      ? "bg-linear-to-br from-accent-primary/20 via-accent-primary/10 to-transparent ring-2 ring-accent-primary/30 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                      : "bg-gray-900/50 ring-1 ring-gray-800/60"
                  }
                `}
              >
                {/* Platform header */}
                <div className="flex items-start gap-4 pb-4 border-b border-gray-800/80">
                  <div
                    className={`h-11 w-11 shrink-0 grid place-items-center rounded-xl ${
                      platform.isHighlighted
                        ? "bg-accent-primary/20 ring-1 ring-accent-primary/30"
                        : "bg-gray-800 ring-1 ring-gray-700/60"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        platform.isHighlighted
                          ? "text-accent-primary"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-base font-semibold tracking-tight ${
                        platform.isHighlighted ? "text-white" : "text-white"
                      }`}
                    >
                      {platform.name}
                    </div>
                    <p className="mt-1 text-xs text-gray-400">
                      {platform.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-4 space-y-3">
                  {comparisonData.features.map((feature) => {
                    const featureData = feature[platform.id];
                    const FeatureIcon = feature.icon;
                    const isPositive = featureData.impact === "positive";
                    const isNegative = featureData.impact === "negative";
                    const ImpactIcon = isPositive ? CheckCircle : Circle;

                    return (
                      <div
                        key={feature.name}
                        className={`
                          flex items-start gap-3 p-3 rounded-lg
                          ${
                            platform.isHighlighted
                              ? "bg-gray-800/60"
                              : "bg-gray-800/40"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <FeatureIcon className="h-4 w-4 text-gray-500 shrink-0" />
                          <span className="text-xs font-medium text-gray-300 shrink-0">
                            {feature.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <ImpactIcon
                            className={`h-3.5 w-3.5 ${
                              isPositive
                                ? platform.isHighlighted
                                  ? "text-accent-primary"
                                  : "text-green-400"
                                : isNegative
                                ? "text-red-400/60"
                                : "text-gray-500"
                            }`}
                          />
                          <span
                            className={`text-xs ${
                              platform.isHighlighted
                                ? "text-white"
                                : isPositive
                                ? "text-gray-300"
                                : "text-gray-400"
                            }`}
                          >
                            {featureData.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={`/30-min`}>
            <AnimatedButton>Get Started</AnimatedButton>
          </Link>
          {/* <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900/80 text-white px-5 py-3 text-sm font-medium ring-1 ring-gray-800 hover:bg-gray-800 transition-colors"
          >
            <Play className="h-4 w-4" />
            See How It Works
          </a> */}
        </div>
      </section>
    </main>
  );
};

export default PlatformComparisonSection;
