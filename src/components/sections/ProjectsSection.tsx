// 'use client';

// import React, { useMemo, useState } from 'react';
// import Image from 'next/image';
// import { projects as projectsData } from '@/data';
// import Modal from '@/components/ui/Modal';
// import ScrollReveal from '@/components/animations/ScrollReveal';
// import StaggerContainer from '@/components/animations/StaggerContainer';
// import { Project } from '@/types';

// const ProjectsSection: React.FC = () => {
//   const projects: Project[] = useMemo(() => projectsData, []);
//   const [activeProject, setActiveProject] = useState<Project | null>(null);

//   return (
//     <section id="projects" className="relative bg-bg-primary py-24 sm:py-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <ScrollReveal>
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
//               Recent Projects
//             </h2>
//             <p className="mt-4 text-text-secondary">
//               A curated selection of work crafted for ambitious teams.
//             </p>
//           </div>
//         </ScrollReveal>

//         <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {projects.map((project) => (
//             <ScrollReveal key={project.id} className="group">
//               <button
//                 onClick={() => setActiveProject(project)}
//                 className="w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-primary/30 rounded-3xl"
//               >
//                 <div className="relative overflow-hidden rounded-3xl border border-border-primary/60 bg-gradient-to-b from-bg-secondary/60 to-bg-secondary/20 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.45)] transition-transform duration-300 will-change-transform group-hover:-translate-y-0.5">
//                   {/* Card preview area */}
//                   <div className="relative aspect-[4/3]">
//                     <div className="absolute inset-0">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]"
//                         sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
//                         priority={false}
//                       />
//                     </div>
//                     {/* Hover overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/85 via-bg-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between">
//                       <div>
//                         <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary text-text-accent shadow-md transition-transform duration-300 group-hover:scale-105">
//                           See project
//                           <span className="ml-2">↗</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Meta */}
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-text-primary">
//                       {project.title}
//                     </h3>
//                     {project.subtitle && (
//                       <p className="text-sm text-text-secondary mt-1">
//                         {project.subtitle}
//                       </p>
//                     )}
//                     {project.tags && (
//                       <div className="mt-4 flex flex-wrap gap-2">
//                         {project.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="px-2 py-1 rounded-md bg-bg-primary/70 border border-border-primary text-xs text-text-muted"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </button>
//             </ScrollReveal>
//           ))}
//         </StaggerContainer>
//       </div>

//       <Modal
//         isOpen={!!activeProject}
//         onClose={() => setActiveProject(null)}
//         title={activeProject?.title}
//         size="xl"
//         className="bg-bg-secondary border border-border-primary text-text-primary"
//       >
//         {activeProject && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div className="relative rounded-xl overflow-hidden border border-border-primary bg-bg-primary">
//               <div className="relative aspect-[4/3]">
//                 <Image
//                   src={activeProject.image}
//                   alt={activeProject.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div>
//               {activeProject.subtitle && (
//                 <p className="text-text-secondary mb-2">
//                   {activeProject.subtitle}
//                 </p>
//               )}
//               <p className="text-text-primary/90 leading-relaxed">
//                 {activeProject.description}
//               </p>
//               {activeProject.tags && (
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {activeProject.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-2 py-1 rounded-md bg-bg-primary border border-border-primary text-xs text-text-muted"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}
//               {activeProject.url && (
//                 <a
//                   href={activeProject.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex mt-6 items-center px-4 py-2 rounded-full bg-accent-primary text-text-accent hover:bg-accent-hover transition-colors"
//                 >
//                   Visit project ↗
//                 </a>
//               )}
//             </div>
//           </div>
//         )}
//       </Modal>
//     </section>
//   );
// };

// export default ProjectsSection;

'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { projects as projectsData } from '@/data';
import Modal from '@/components/ui/Modal';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { Project } from '@/types';
import SectionHeader from '../ui/SectionHeader';

const ProjectsSection: React.FC = () => {
  const projects: Project[] = useMemo(() => projectsData, []);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <>
      {/* Add custom animations styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.9) rotateX(10deg);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-10px) scale(1.02) rotateX(-2deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(var(--accent-primary-rgb), 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(var(--accent-primary-rgb), 0.6);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .card-enter {
          transform: translateY(100px) scale(0.8) rotateX(30deg);
          opacity: 0;
          filter: blur(10px);
        }

        .card-enter-active {
          transform: translateY(0) scale(1) rotateX(0deg);
          opacity: 1;
          filter: blur(0px);
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1);
        }

        /* Magnetic effect */
        .magnetic-hover {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1);
        }

        .magnetic-hover:hover {
          transform: translateZ(0) scale(1.05);
        }

        /* Respect user motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-float,
          .animate-glow {
            animation: none !important;
          }
        }
      `}</style>

      <section
        id="projects"
        className="relative bg-gradient-to-b from-bg-primary to-bg-secondary py-24 sm:py-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium mb-4">
                Featured Work
              </div>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-text-primary to-text-primary/80 bg-clip-text text-transparent">
                Recent Projects
              </h2>
              <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                A curated selection of innovative solutions crafted for
                forward-thinking teams and ambitious projects.
              </p>
            </div>
          </ScrollReveal> */}
          {/* Header Section */}
          <div className="w-full px-4">
            <SectionHeader
              eyebrow="Featured Work"
              title={
                <>
                  Recent {''}
                  <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
                    Projects
                  </span>
                </>
              }
              subtitle={
                <>
                  A curated selection of innovative solutions crafted for
                  <br className="hidden md:block" />
                  forward-thinking teams and ambitious projects. that meets your
                </>
              }
              align="center"
              spacing="lg"
            />
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                delay={index * 0.15}
                className="animate-fade-in-up"
              >
                <div
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'both',
                  }}
                  className="group cursor-pointer transform-gpu outline-none"
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setActiveProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveProject(project);
                    }
                  }}
                >
                  <div className="relative h-[350px] rounded-3xl overflow-hidden bg-gradient-to-br from-bg-secondary/80 to-bg-secondary/40 border border-border-primary/60 backdrop-blur-sm shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out group-hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] group-hover:-translate-y-2 group-hover:[transform:rotate(0.5deg)] group-hover:border-accent-primary/50 focus-visible:ring-4 focus-visible:ring-accent-primary/30">
                    {/* Project Image */}
                    <div className="relative h-[250px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-all duration-500 ease-out ${
                          hoveredProject === project.id
                            ? 'scale-[1.12] brightness-110 [transform:rotate(1deg)]'
                            : 'scale-[1.05]'
                        }`}
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        priority={index < 3}
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-bg-primary/20 to-transparent transition-opacity duration-300 ${
                          hoveredProject === project.id
                            ? 'opacity-90'
                            : 'opacity-50'
                        }`}
                      />

                      {/* Hover Action Button */}
                      <div
                        className={`absolute top-4 right-4 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                          hoveredProject === project.id
                            ? 'opacity-100 translate-y-0 scale-110 rotate-12'
                            : 'opacity-0 translate-y-4 scale-90 -rotate-12'
                        }`}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-primary text-text-accent backdrop-blur-md shadow-lg">
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div
                      className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-accent-primary/30 to-transparent rounded-full blur-xl transition-all duration-700 ${
                        hoveredProject === project.id
                          ? 'opacity-100 scale-150 rotate-90'
                          : 'opacity-0 scale-50'
                      }`}
                    />
                    <div
                      className={`absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-tr from-accent-primary/20 to-transparent rounded-full blur-lg transition-all duration-500 ${
                        hoveredProject === project.id
                          ? 'opacity-100 scale-125 -rotate-45'
                          : 'opacity-0 scale-75'
                      }`}
                    />

                    {/* Animated Border Glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/20 via-transparent to-accent-primary/20 transition-opacity duration-500 ${
                        hoveredProject === project.id
                          ? 'opacity-100 animate-pulse'
                          : 'opacity-0'
                      }`}
                      style={{
                        background:
                          hoveredProject === project.id
                            ? 'linear-gradient(45deg, rgba(var(--accent-primary-rgb), 0.2), transparent, rgba(var(--accent-primary-rgb), 0.2))'
                            : 'transparent',
                      }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </StaggerContainer>
        </div>

        {/* Enhanced Modal */}
        <Modal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          title=""
          size="xl"
          className="bg-gradient-to-br from-bg-secondary to-bg-primary border border-border-primary/50 backdrop-blur-xl"
        >
          {activeProject && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-bg-primary/80 backdrop-blur-md border border-border-primary/50 text-text-secondary hover:text-text-primary hover:bg-bg-primary transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                {/* Project Image */}
                <div className="relative">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border-primary/30 bg-gradient-to-br from-bg-primary/50 to-bg-secondary/30">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project Stats or Additional Info */}
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="text-center p-3 rounded-lg bg-bg-primary/50 border border-border-primary/30">
                      <div className="text-lg font-bold text-accent-primary">
                        2024
                      </div>
                      <div className="text-xs text-text-secondary">Year</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-bg-primary/50 border border-border-primary/30">
                      <div className="text-lg font-bold text-accent-primary">
                        Web
                      </div>
                      <div className="text-xs text-text-secondary">
                        Platform
                      </div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-bg-primary/50 border border-border-primary/30">
                      <div className="text-lg font-bold text-accent-primary">
                        Live
                      </div>
                      <div className="text-xs text-text-secondary">Status</div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium mb-4">
                      Featured Project
                    </div>
                    <h2 className="text-3xl font-bold text-text-primary mb-2">
                      {activeProject.title}
                    </h2>
                    {activeProject.subtitle && (
                      <p className="text-lg text-text-secondary mb-4">
                        {activeProject.subtitle}
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      About This Project
                    </h3>
                    <p className="text-text-primary/90 leading-relaxed">
                      {activeProject.description ||
                        'This is a detailed description of the project showcasing the innovative solutions and technologies used to bring this vision to life.'}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  {activeProject.tags && (
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-2 rounded-lg bg-bg-primary/60 border border-border-primary/30 text-sm text-text-muted hover:bg-accent-primary/10 hover:border-accent-primary/30 hover:text-accent-primary transition-all duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {activeProject.url && (
                      <a
                        href={activeProject.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent-primary text-text-accent hover:bg-accent-hover hover:text-text-accent transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <span>Visit Live Site</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border-primary text-text-primary hover:bg-bg-primary/50 hover:border-accent-primary/30 transition-all duration-300 font-medium">
                      <span>View Case Study</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </section>
    </>
  );
};

export default ProjectsSection;
