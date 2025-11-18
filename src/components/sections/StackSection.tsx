"use client";

import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";
import {
  CalendarCheck2,
  Check,
  Database,
  Globe,
  Plus,
  Sparkles,
  Target,
} from "lucide-react";
import { useRef } from "react";
import { ProgressiveBlur } from "../ui/progressive-blur";
import { AnimatedBeam, Circle } from "../ui/animated-beam";
import Marquee from "../ui/marquee1";
import AnimatedSVGChart from "../ui/animate-svg-chart";


interface Platform {
  id: string;
  name: string;
  status: "listed" | "in-progress";
  icon: React.ReactNode;
}

const platforms: Platform[] = [
  {
    id: "product-hunt",
    name: "Product Hunt",
    status: "listed",
    icon: <Target className="w-5 h-5 text-orange-500" />,
  },
  {
    id: "angel-list",
    name: "AngelList",
    status: "listed",
    icon: <Sparkles className="w-5 h-5 text-accent-primary" />,
  },
  {
    id: "crunchbase",
    name: "CrunchBase",
    status: "in-progress",
    icon: <Database className="w-5 h-5 text-blue-600" />,
  },
];

const StatusBadge: React.FC<{ status: "listed" | "in-progress" }> = ({
  status,
}) => {
  const baseClasses =
    "px-3 py-1 rounded-full text-sm font-medium transition-all duration-200";

  if (status === "listed") {
    return (
      <span
        className={`${baseClasses} bg-green-100 text-green-700 border border-green-200`}
      >
        <Check className="w-3 h-3 inline mr-1" />
        Listed
      </span>
    );
  }

  return (
    <span
      className={`${baseClasses} bg-accent-primary/20 text-accent-primary border border-accent-primary/30`}
    >
      In Progress
    </span>
  );
};

const PlatformItem: React.FC<{ platform: Platform }> = ({ platform }) => {
  return (
    <div className="group w-[95%] mx-auto bg-bg-card backdrop-blur-sm rounded-2xl p-2 border border-border-primary shadow-sm hover:shadow-md hover:bg-bg-card/90 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 bg-bg-tertiary rounded-xl flex items-center justify-center group-hover:bg-bg-secondary transition-colors duration-200">
            {platform.icon}
          </div>
          <span className="font-medium text-text-primary group-hover:text-text-primary transition-colors duration-200">
            {platform.name}
          </span>
        </div>
        <StatusBadge status={platform.status} />
      </div>
    </div>
  );
};

const Feature3 = () => {
  // Fix the ref types to match what AnimatedBeam expects
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Type refs properly for AnimatedBeam
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="max-w-7xl mx-auto p-4" ref={timelineRef}>
      <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
        <TimelineContent
          as="h1"
          animationNum={1}
          timelineRef={timelineRef}
          className="md:text-5xl sm:text-4xl text-3xl font-medium text-text-primary"
        >
          Seamlessly Integrated, <br />
          Powerful Features
        </TimelineContent>
      </article>
      <div className="sm:grid sm:grid-cols-12 sm:space-y-0 space-y-4 gap-4">
       
        <TimelineContent
          animationNum={3}
          timelineRef={timelineRef}
          className="lg:col-span-4 col-span-6 relative border-2 border-accent-primary/30 p-1 rounded-xl overflow-hidden bg-gradient-to-b from-bg-card pb-20 "
        >
          <div
            className="relative flex w-full items-center justify-center overflow-hidden rounded-lg py-8 px-4"
            ref={containerRef}
          >
            <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
              <div className="flex flex-row justify-between">
                <Circle className="p-0.5" ref={div1Ref}>
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
                    alt=""
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div2Ref} className="p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1740102074835-f82e160f4d33?q=80&w=200"
                    alt=""
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div3Ref} className="p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1596959584322-76585c75d265?q=80&w=200"
                    alt=""
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div4Ref} className="p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1714120103714-8e4cd7cf10b5?q=80&w=200"
                    alt=""
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>

              </div>
              <div className="flex flex-row justify-between w-[80%] mx-auto">
                <Circle ref={div5Ref} className="p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1738509559266-bdd2a813c8ad?q=80&w=200"
                    alt=""
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div6Ref} className="p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1580518337843-f959e992563b?q=80&w=200"
                    alt=""
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div7Ref} className="p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?q=80&w=200"
                    alt=""
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
              </div>
            </div>

            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div1Ref as React.RefObject<HTMLElement>}
              toRef={div2Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div2Ref as React.RefObject<HTMLElement>}
              toRef={div3Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div3Ref as React.RefObject<HTMLElement>}
              toRef={div4Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div1Ref as React.RefObject<HTMLElement>}
              toRef={div5Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div2Ref as React.RefObject<HTMLElement>}
              toRef={div6Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div3Ref as React.RefObject<HTMLElement>}
              toRef={div7Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={8}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div5Ref as React.RefObject<HTMLElement>}
              toRef={div6Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div6Ref as React.RefObject<HTMLElement>}
              toRef={div7Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={6}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div2Ref as React.RefObject<HTMLElement>}
              toRef={div5Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div3Ref as React.RefObject<HTMLElement>}
              toRef={div6Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />
            <AnimatedBeam
              duration={3}
              containerRef={containerRef as React.RefObject<HTMLElement>}
              fromRef={div4Ref as React.RefObject<HTMLElement>}
              toRef={div7Ref as React.RefObject<HTMLElement>}
              dotted
              dotSpacing={8}
              gradientStartColor="#ccff00"
              gradientStopColor="#a3d900"
            />

          </div>
          <article className="absolute z-10 right-0 bottom-0 left-0 w-full bg-gradient-to-t from-bg-card via-bg-card to-transparent p-3 pt-[100px]">
            <h3 className="px-1 pt-1 text-text-primary md:text-xl text-lg font-medium">
              Popular App Integrations
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
              Seamless connection between popular apps that you like
            </p>
          </article>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 bottom-0 h-32"
            direction="bottom"
            blurIntensity={0.5}
          />
        </TimelineContent>
        <TimelineContent
          animationNum={4}
          timelineRef={timelineRef}
          className="lg:col-span-4 col-span-6 relative border-2 border-accent-primary/30 p-2 rounded-xl overflow-hidden bg-gradient-to-b from-bg-card "
        >
          <div className="space-y-1 mb-8">
            {platforms.map((platform) => (
              <PlatformItem key={platform.id} platform={platform} />
            ))}
          </div>
          <article className="absolute z-10 right-0 bottom-0 left-0 w-full bg-gradient-to-t from-bg-card via-bg-card to-transparent p-3 pt-[100px]">
            <h3 className="px-1 pt-1 text-text-primary md:text-xl text-lg font-medium">
              We Handle the listings
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
              Seamless connection between popular apps that you like
            </p>
          </article>
        </TimelineContent>
        <TimelineContent
          animationNum={5}
          timelineRef={timelineRef}
          className="lg:col-span-4 col-span-6 relative border-2 border-accent-primary/30 p-2 rounded-xl flex flex-col justify-between overflow-hidden bg-gradient-to-b from-bg-card "
        >
          {/* <ArrowBigDown/> */}
          {/* <button className="w-16 h-16 rounded-lg text-white bg-blue-500 grid place-content-center">
          <ArrowLeft className="rotate-45 h-8 w-8" />
        </button> */}
          <div className="space-y-0.5 flex flex-col items-center pt-10 relative z-10">
            <TimelineContent
              animationNum={6}
              timelineRef={timelineRef}
              className="flex gap-0"
            >
              <button className=" px-4 h-10 rounded-lg hover:bg-accent-primary hover:shadow-lg hover:shadow-accent-primary/30 hover:text-text-accent text-accent-primary border border-accent-primary grid place-content-center">
                Innovative
              </button>
              <button className=" px-2 h-10 hover:bg-accent-primary hover:text-text-accent rounded-full text-accent-primary border border-accent-primary grid place-content-center">
                <Plus className="h-6 w-6" />
              </button>
            </TimelineContent>
            <TimelineContent
              animationNum={7}
              timelineRef={timelineRef}
              className="flex gap-0 pl-4"
            >
              <button className=" px-2 h-10 bg-accent-primary  text-text-accent rounded-full  border border-accent-primary grid place-content-center">
                <Plus className="h-6 w-6" />
              </button>
              <button className=" px-6 h-10 rounded-lg bg-accent-primary/20 text-accent-primary border border-accent-primary grid place-content-center">
                Revolutionary
              </button>
            </TimelineContent>

            <TimelineContent
              animationNum={8}
              timelineRef={timelineRef}
              className="flex gap-0 pr-8"
            >
              <button className=" px-6 h-10 rounded-lg hover:bg-accent-primary hover:shadow-lg hover:shadow-accent-primary/30 hover:text-text-accent  text-accent-primary border border-accent-primary grid place-content-center">
                Empowering
              </button>
              <button className=" px-2 h-10 hover:bg-accent-primary hover:shadow-lg hover:shadow-accent-primary/30 hover:text-text-accent rounded-full text-accent-primary border border-accent-primary grid place-content-center">
                <Plus className="h-6 w-6" />
              </button>
            </TimelineContent>
          </div>

          <article className="relative z-10">
            <h3 className="px-1 pt-1 text-text-primary xl:text-xl text-lg font-medium">
              Sign Up to get 30 days free trail
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
              Experience a 30-day free trial that lets you explore at the
              feature of our app without any commitment
            </p>
          </article>
          <SparklesComp
            density={100}
            speed={1.2}
            size={1.2}
            direction="top"
            opacitySpeed={2}
            color="#0f0f0f"
            className="absolute z-10 bottom-0 h-full w-full "
          />

          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 left-0 h-[35%] w-full"
            blurIntensity={3}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute -top-20 left-0 h-[40%] w-full"
            blurIntensity={0.5}
          />
        </TimelineContent>
        <TimelineContent
          animationNum={6}
          timelineRef={timelineRef}
          className="col-span-6 h-96 pt-10 overflow-hidden relative w-full border-2 border-accent-primary/30 bg-gradient-to-b from-bg-card rounded-lg"
        >
          <Marquee className="[--duration:20s] [--gap:3rem] pb-6">
            {[
              "bg-accent-primary shadow-lg  shadow-accent-primary/30",
              "bg-accent-secondary shadow-lg shadow-accent-secondary/30",
              "bg-accent-light shadow-lg shadow-accent-light/30",
              "bg-accent-hover shadow-lg shadow-accent-hover/30",
            ].map((color, index) => (
              <div
                className={cn(
                  "w-20 h-20 flex items-center justify-center rounded-xl",
                  color,
                )}
                key={index}
              />
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:20s] [--gap:3rem] pb-6">
            {[
              "bg-accent-primary shadow-lg  shadow-accent-primary/30",
              "bg-accent-secondary shadow-lg shadow-accent-secondary/30",
              "bg-accent-light shadow-lg shadow-accent-light/30",
              "bg-accent-hover shadow-lg shadow-accent-hover/30",
            ].map((color, index) => (
              <div
                className={cn(
                  "w-20 h-20 flex items-center justify-center rounded-xl",
                  color,
                )}
                key={index}
              />
            ))}
          </Marquee>
          <div
            className="absolute inset-0 -z-10  pointer-events-none"
            style={{
              backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
      radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
    `,
              backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
            }}
          />
          <article className="absolute z-10 right-0 bottom-0 left-0 w-full bg-gradient-to-t from-bg-card via-bg-card to-transparent md:p-6 p-2 pt-[100px]">
            <h3 className="px-1 pt-1 text-text-primary md:text-2xl text-xl font-medium">
              Popular App Integrations
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
              This component displays an interactive stack of cards with smooth
              hover animations, gradients, and blur effects.
            </p>
          </article>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[150px]"
            direction="left"
            blurIntensity={0.5}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[150px]"
            direction="right"
            blurIntensity={0.5}
          />
        </TimelineContent>
        <TimelineContent
          animationNum={7}
          timelineRef={timelineRef}
          className="md:col-span-6 col-span-12 relative rounded-xl overflow-hidden border-2 md:h-full h-96 border-accent-primary/30 bg-gradient-to-b from-bg-card"
        >
          <div className="relative h-full w-full overflow-hidden">
            <SparklesComp
              density={800}
              speed={1.2}
              size={1.2}
              direction="top"
              opacitySpeed={2}
              color="#ccff00"
              className="absolute inset-x-0 bottom-0 h-full w-full "
            />
          </div>
          <TimelineContent
            animationNum={8}
            timelineRef={timelineRef}
            className="flex gap-2 shrink-0 items-center bg-bg-card/50 backdrop-blur-md border border-border-primary justify-between p-2 top-6 rounded-xl absolute -left-48 rotate-6"
          >
            <p className="text-text-primary">Website Generation Never been easier</p>
            <button className="bg-accent-primary sm:w-fit w-72 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent">
              <Globe size={20} /> Generate Web Pages
            </button>
          </TimelineContent>

          {/* Top Right Rotated Card */}
          <TimelineContent
            animationNum={9}
            timelineRef={timelineRef}
            className="flex gap-4 shrink-0 items-center bg-bg-card/50 backdrop-blur-md border border-border-primary p-2 top-24 rounded-xl absolute -right-10 -rotate-6"
          >
            <button className="bg-accent-primary sm:w-fit w-72 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent">
              <CalendarCheck2 size={20} /> Schedule Meeting
            </button>
            <p className="text-text-primary">Generate meetings with AI</p>
          </TimelineContent>
          <TimelineContent
            animationNum={10}
            timelineRef={timelineRef}
            className="flex gap-4 shrink-0 items-center bg-bg-card/50 backdrop-blur-md border border-border-primary p-2 bottom-32 rounded-xl absolute -left-10 rotate-6"
          >
            <p className="text-text-primary">Let AI scrape leads for you</p>
            <button className="bg-accent-primary sm:w-fit w-52 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent">
              <Sparkles size={20} /> Scrape Leads
            </button>
          </TimelineContent>

          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 left-0 h-[35%] w-full"
            blurIntensity={0.5}
          />
          <article className="absolute z-10 right-0 bottom-0 left-0 w-full bg-gradient-to-t from-bg-card via-bg-card to-transparent p-3 pt-[100px]">
            <h3 className="px-1 pt-1 text-text-primary text-xl font-medium">
              Let AI Handle Everything
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted text-sm w-full">
              Seamless connection between popular apps that you like
            </p>
          </article>
        </TimelineContent>
      </div>
    </section>
  );
};

export default Feature3;
