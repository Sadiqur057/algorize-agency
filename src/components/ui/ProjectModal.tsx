"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ProjectDetails from "../sections/project-details";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
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
  } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          /> */}

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 overflow-hidden h-screen w-full"
          >
            <div className="relative h-screen w-full bg-zinc-900 rounded-2xl ring-1 ring-white/10 shadow-2xl overflow-y-auto">
              {/* Close Button */}
              <div className="sticky top-0 bg-neutral-900 flex justify-between gap-2 p-8 lg:p-12 z-10">
                <h2 className="text-xl lg:text-2xl font-semibold">{project?.title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition backdrop-blur"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              {/* Content */}
              <div className="clear-both">
                <ProjectDetails projectData={project} modal={true} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
