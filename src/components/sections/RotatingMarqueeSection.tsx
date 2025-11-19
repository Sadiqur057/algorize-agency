"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Star,
} from "lucide-react";
import Image from "next/image";
import ProjectModal from "../ui/ProjectModal";


interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  previewImage: string;
  client: string;
  date: string;
  demoUrl?: string;
  link?: string;
  credentials?: Array<{
    type: string;
    email: string;
    password: string;
  }>;
  technologies: Array<{
    id: number;
    name: string;
    icon: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  images: string[];
}

const RotatingMarqueeSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  console.log('Projects in RotatingMarqueeSection:', projects);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <style jsx global>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .edge-fade {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
        .animate-scroll-left {
          animation: scroll-left 55s linear infinite;
          will-change: transform;
        }
        .animate-scroll-right {
          animation: scroll-right 62s linear infinite;
          will-change: transform;
        }
        .marquee-row {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>

      <main
        className="relative overflow-hidden min-h-screen antialiased text-zinc-300"
        style={{
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial",
        }}
      >
        {/* Backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full blur-3xl bg-linear-to-r from-fuchsia-600/10 via-sky-500/10 to-emerald-500/10"></div>

        <section className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            className="mb-10 md:mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
              variants={itemVariants}
            >
              Featured projects
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl text-sm md:text-base text-zinc-400/90"
              variants={itemVariants}
            >
              A selection of projects showcasing our expertise and creativity in web development.
            </motion.p>
          </motion.div>

          {/* Row 1 */}
          <div className="relative -rotate-2 md:-rotate-6 marquee-row">
            <div className="edge-fade overflow-hidden">
              <div className="flex w-max gap-6 animate-scroll-left">
                {/* Group A */}
                <div className="flex gap-6">
                  {projects.map((project) => (
                    <motion.article
                      key={project.id}
                      className="group relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-video rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        className="h-full w-full object-cover transition duration-500 ease-out"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Title and description on hover */}
                      <div className="absolute left-4 right-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <div
                          className="text-xs md:text-sm text-zinc-300 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: project.description }}
                        />
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-xs text-zinc-400">{project.client}</span>
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Group B (duplicate for seamless loop) */}
                <div className="flex gap-6" aria-hidden="true">
                  {projects.map((project) => (
                    <motion.article
                      key={`duplicate-${project.id}`}
                      className="group relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-video rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        className="h-full w-full object-cover transition duration-500 ease-out"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Title and description on hover */}
                      <div className="absolute left-4 right-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <div
                          className="text-xs md:text-sm text-zinc-300 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: project.description }}
                        />
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-xs text-zinc-400">{project.client}</span>
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative -rotate-2 md:-rotate-6 mt-10 marquee-row">
            <div className="edge-fade overflow-hidden">
              <div className="flex w-max gap-6 animate-scroll-right">
                {/* Group A */}
                <div className="flex gap-6">
                  {projects.map((project) => (
                    <motion.article
                      key={project.id}
                      className="group relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-video rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        className="h-full w-full object-cover transition duration-500 ease-out"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Title and description on hover */}
                      <div className="absolute left-4 right-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <div
                          className="text-xs md:text-sm text-zinc-300 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: project.description }}
                        />
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-xs text-zinc-400">{project.client}</span>
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Group B (duplicate for seamless loop) */}
                <div className="flex gap-6" aria-hidden="true">
                  {projects.map((project) => (
                    <motion.article
                      key={`duplicate-row2-${project.id}`}
                      className="group relative w-[300px] sm:w-[420px] md:w-[520px] lg:w-[640px] aspect-video rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        className="h-full w-full object-cover transition duration-500 ease-out"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Title and description on hover */}
                      <div className="absolute left-4 right-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <div
                          className="text-xs md:text-sm text-zinc-300 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: project.description }}
                        />
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-xs text-zinc-400">{project.client}</span>
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats (agency metrics) */}
          <div className="mt-14 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Years Experience */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-6">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                10+
              </div>
              <div className="mt-1 text-xs text-zinc-400">Years Experience</div>
            </div>

            {/* Projects Completed */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-6">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                250+
              </div>
              <div className="mt-1 text-xs text-zinc-400">Projects Completed</div>
            </div>

            {/* Happy Clients */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-6">
              <div className="flex items-center justify-center gap-2">
                <Users className="h-6 w-6 text-white/90" />
                <div className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                  120+
                </div>
              </div>
              <div className="mt-1 text-xs text-zinc-400">Happy Clients</div>
            </div>

            {/* Industry Awards */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-6">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-6 w-6 text-white/90" />
                <div className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                  15
                </div>
              </div>
              <div className="mt-1 text-xs text-zinc-400">Industry Awards</div>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      </main>
    </>
  );
};

export default RotatingMarqueeSection;
