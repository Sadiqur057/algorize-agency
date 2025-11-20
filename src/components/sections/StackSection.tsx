"use client";

import React, { memo, useState, useRef } from "react";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";
import {
  CalendarCheck2,
  Check,
  Globe,
  Plus,
  Sparkles,
} from "lucide-react";
import { ProgressiveBlur } from "../ui/progressive-blur";
import { AnimatedBeam, Circle } from "../ui/animated-beam";
import Marquee from "../ui/marquee1";
import defaultUserImg from "../../../public/assets/user.jpg"
import { homeData } from "./data";
import Image from "next/image";

interface Technology {
  id: number;
  name: string;
  icon: string;
  description: string;
  type: string;
  experience: string;
  projects: number;
}

interface Review {
  id: number;
  name: string;
  designation: string;
  rating: string;
  review: string;
  img: string | null;
}

interface Project {
  id: number;
  title: string;
  slug: string;
  client: string;
  previewImage: string;
  date: string;
}


const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group w-[95%] mx-auto bg-bg-card backdrop-blur-sm rounded-2xl p-2 border border-border-primary shadow-sm hover:shadow-md hover:bg-bg-card/90 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="shrink-0 w-10 h-10 bg-bg-tertiary rounded-xl overflow-hidden flex items-center justify-center group-hover:bg-bg-secondary transition-colors duration-200">
            <Image
              src={project.previewImage}
              alt={project.title}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-text-primary text-sm group-hover:text-text-primary transition-colors duration-200">
              {project.title}
            </span>
            <span className="text-xs text-text-muted">{project.client}</span>
          </div>
        </div>
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
          <Check className="w-3 h-3 inline mr-1" />
          Completed
        </span>
      </div>
    </div>
  );
};

const Feature3: React.FC<{technologies: any[], reviews: any[], projects: any[]}> = ({technologies, reviews, projects}) => {
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
          Built with Modern <br />
          Technology & Expertise
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
                <Circle className="p-[1px] bg-bg-secondary" ref={div1Ref}>
                  <Image
                    src={reviews[0]?.img || defaultUserImg}
                    alt={reviews[0]?.name || "Reviewer 1"}
                    width={40}
                    height={40}
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div2Ref} className="p-[1px] bg-bg-secondary">
                  <Image
                    src={reviews[1]?.img || defaultUserImg}
                    alt={reviews[1]?.name || "Reviewer 2"}
                    width={40}
                    height={40}
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div3Ref} className="p-[1px] bg-bg-secondary">
                  <Image
                    src={reviews[2]?.img || defaultUserImg}
                    alt={reviews[2]?.name || "Reviewer 3"}
                    width={40}
                    height={40}
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div4Ref} className="p-[1px] bg-bg-secondary">
                  <Image
                    src={reviews[3]?.img || defaultUserImg}
                    alt={reviews[3]?.name || "Reviewer 4"}
                    width={40}
                    height={40}
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>

              </div>
              <div className="flex flex-row justify-between w-[80%] mx-auto">
                <Circle ref={div5Ref} className="p-[1px] bg-bg-secondary">
                  <Image
                    src={reviews[4]?.img || defaultUserImg}
                    alt={reviews[4]?.name || "Reviewer 5"}
                    width={40}
                    height={40}
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div6Ref} className="p-[1px] bg-bg-secondary">
                  <Image
                    src={reviews[5]?.img || defaultUserImg}
                    alt={reviews[5]?.name || "Reviewer 6"}
                    width={40}
                    height={40}
                    className="shrink-0 w-full h-full object-cover rounded-full"
                  />
                </Circle>
                <Circle ref={div7Ref} className="p-[1px] bg-bg-secondary">
                  <Image
                    src={reviews[6]?.img || defaultUserImg}
                    alt={reviews[6]?.name || "Reviewer 7"}
                    width={40}
                    height={40}
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
              Client Satisfaction
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
              Trusted by leading businesses who love working with us and achieving exceptional results
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
            {projects.slice(0, 3).map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
          <article className="absolute z-10 right-0 bottom-0 left-0 w-full bg-gradient-to-t from-bg-card via-bg-card to-transparent p-3 pt-[100px]">
            <h3 className="px-1 pt-1 text-text-primary md:text-xl text-lg font-medium">
              Recent Projects
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
              Showcasing our latest work and successful client partnerships
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
              Free Consultation & Strategy Session
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
              Book a complimentary 30-minute consultation to discuss your project needs and get expert recommendations
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
            {technologies.slice(0, 5).map((tech) => (
              <div
                className={cn(
                  "w-20 h-20 flex items-center justify-center rounded-xl bg-bg-secondary border border-border-primary p-2 hover:border-accent-primary transition-all duration-300",
                )}
                key={tech.id}
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:20s] [--gap:3rem] pb-6">
            {technologies.slice(5, 10).map((tech) => (
              <div
                className={cn(
                  "w-20 h-20 flex items-center justify-center rounded-xl bg-bg-secondary border border-border-primary p-2 hover:border-accent-primary transition-all duration-300",
                )}
                key={tech.id}
                title={tech.name}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
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
              Cutting-Edge Technologies
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted md:text-sm text-xs w-full">
              We leverage the latest frameworks, libraries, and tools to deliver high-performance, scalable solutions for your business.
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
            <p className="text-text-primary">Custom Web Development</p>
            <button className="bg-accent-primary sm:w-fit w-72 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent">
              <Globe size={20} /> Build Your Website
            </button>
          </TimelineContent>

          {/* Top Right Rotated Card */}
          <TimelineContent
            animationNum={9}
            timelineRef={timelineRef}
            className="flex gap-4 shrink-0 items-center bg-bg-card/50 backdrop-blur-md border border-border-primary p-2 top-24 rounded-xl absolute -right-10 -rotate-6"
          >
            <button className="bg-accent-primary sm:w-fit w-72 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent">
              <CalendarCheck2 size={20} /> Book Consultation
            </button>
            <p className="text-text-primary">Schedule your free strategy call</p>
          </TimelineContent>
          <TimelineContent
            animationNum={10}
            timelineRef={timelineRef}
            className="flex gap-4 shrink-0 items-center bg-bg-card/50 backdrop-blur-md border border-border-primary p-2 bottom-32 rounded-xl absolute -left-10 rotate-6"
          >
            <p className="text-text-primary">Professional UI/UX Design</p>
            <button className="bg-accent-primary sm:w-fit w-52 hover:scale-120 flex gap-2 items-center py-3 px-4 shadow-accent-primary/30 shadow-lg rounded-lg sm:text-xl text-text-accent">
              <Sparkles size={20} /> Start Design
            </button>
          </TimelineContent>

          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 left-0 h-[35%] w-full"
            blurIntensity={0.5}
          />
          <article className="absolute z-10 right-0 bottom-0 left-0 w-full bg-gradient-to-t from-bg-card via-bg-card to-transparent p-3 pt-[100px]">
            <h3 className="px-1 pt-1 text-text-primary text-xl font-medium">
              Full-Service Digital Agency
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-text-muted text-sm w-full">
              From design to development, we provide end-to-end solutions for your digital needs
            </p>
          </article>
        </TimelineContent>
      </div>
    </section>
  );
};

export default memo(Feature3);
