"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, User, Tag, ExternalLink, CheckCircle, Share2 } from "lucide-react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../custom/button";
import Badge from "../ui/Badge";
import ContactCard from "./contact-card";

interface ProjectDetailsProps {
  projectData: {
    id: number;
    title: string;
    slug: string;
    description: string;
    previewImage: string;
    client?: string;
    date?: string;
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
  };
  modal?: boolean;
}

export default function ProjectDetails({
  projectData: initialData,
  modal = false,
}: ProjectDetailsProps) {
  const projectData = initialData;
  const [activeImage, setActiveImage] = useState(0);
  const isLoading = !initialData;
  // Generate share URL and title
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const shareUrl = `${baseUrl}/projects/${projectData?.slug}`;
  const shareTitle = `${projectData?.title || "Project"} - Portfolio | ${
    process.env.NEXT_PUBLIC_SITE_NAME
  }`;

  // const breadcrumbItems = [
  //   { label: "Home", href: "/" },
  //   { label: "Projects", href: "/projects" },
  //   { label: projectData?.title || "Project Details" },
  // ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary mx-auto mb-4"></div>
          <p className="text-light-3">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-light-3 text-lg">Project not found</p>
        </div>
      </div>
    );
  }

  const projectImages = projectData?.images || [];
  const displayImages = Array.isArray(projectImages)
    ? projectImages.map((img) =>
        typeof img === "string" ? { src: img, alt: projectData?.title } : img
      )
    : [];

  return (
    <>
      {/* Header */}
      {/* {!modal && (
        <Breadcrumb
          items={breadcrumbItems}
          title={projectData?.title || "Project Details"}
        />
      )} */}
      <div className="min-h-screen bg-icon dark:bg-background px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className={cn("-mt-9 lg:mt-0 lg:py-8", !modal && "container")}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                {/* Project Details Card */}
                <div className="bg-card custom-shadow rounded-2xl overflow-hidden">
                  <div className="">
                    <div>
                      <div className="inline-block bg-accent-primary w-full text-neutral-800 px-6 py-5 font-medium text-xl xl:text-2xl">
                        Project Details
                      </div>
                    </div>

                    <div className="space-y-6 p-6 border-x border-b border-neutral-700 rounded-b-2xl rounded-x-2xl">
                      {/* Project Name */}
                      <div className="flex items-start space-x-3">
                        <Tag className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-light font-medium mb-1">
                            Project Name:
                          </h3>
                          <p className="text-light-3">
                            {projectData?.title || "Project Details"}
                          </p>
                        </div>
                      </div>

                      {/* Client */}
                      {projectData?.client && (
                        <div className="flex items-start space-x-3">
                          <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-light font-medium mb-1">
                              Client:
                            </h3>
                            <p className="text-light-3">
                              {projectData?.client}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Categories */}
                      {projectData?.categories &&
                        projectData.categories.length > 0 && (
                          <div className="flex items-start space-x-3">
                            <Tag className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-light font-medium mb-1">
                                Categories:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {projectData.categories.map((cat) => (
                                  <Badge
                                    key={cat.id}
                                    variant="secondary"
                                    className="bg-accent-primary/30 text-primary border-primary/30"
                                  >
                                    {cat.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                      {/* Date */}
                      {projectData?.date && (
                        <div className="flex items-start space-x-3">
                          <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-light font-medium mb-1">
                              Date:
                            </h3>
                            <p className="text-light-3">
                              {new Date(projectData?.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Live Link */}
                      {projectData?.link && (
                        <div className="pt-4 flex flex-wrap justify-center w-full gap-4">
                          <Link
                            href={projectData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AnimatedButton width="150px">
                              <div className="flex items-center justify-center gap-2">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Live
                              </div>
                            </AnimatedButton>
                          </Link>
                          {projectData?.demoUrl && (
                            <Link
                              href={projectData.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <AnimatedButton variant="outline" width="170px">
                                <div className="flex items-center justify-center gap-2">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View Demo
                                </div>
                              </AnimatedButton>
                            </Link>
                          )}
                        </div>
                      )}

                      {/* Share */}
                      <div className="pt-4 border-t  border-neutral-700 flex justify-between flex-wrap items-center gap-3">
                        <h3 className="text-light font-medium flex items-center">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share:
                        </h3>
                        <div className="flex gap-2">
                          <FacebookShareButton
                            url={shareUrl}
                            title={shareTitle}
                            className="hover:opacity-80 transition-opacity duration-300"
                          >
                            <FacebookIcon size={32} round />
                          </FacebookShareButton>
                          <TwitterShareButton
                            url={shareUrl}
                            title={shareTitle}
                            className="hover:opacity-80 transition-opacity duration-300"
                          >
                            <TwitterIcon size={32} round />
                          </TwitterShareButton>
                          <LinkedinShareButton
                            url={shareUrl}
                            className="hover:opacity-80 transition-opacity duration-300"
                          >
                            <LinkedinIcon size={32} round />
                          </LinkedinShareButton>
                          <WhatsappShareButton
                            url={shareUrl}
                            title={shareTitle}
                            separator=" - "
                            className="hover:opacity-80 transition-opacity duration-300"
                          >
                            <WhatsappIcon size={32} round />
                          </WhatsappShareButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="lg:block hidden">
                  <ContactCard />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="space-y-8">
                {/* Project Images */}
                {displayImages.length > 0 && (
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden custom-shadow">
                      <Image
                        src={
                          displayImages[activeImage]?.src ||
                          projectData?.previewImage
                        }
                        alt={
                          displayImages[activeImage]?.alt || projectData?.title
                        }
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Thumbnail Navigation */}
                    {displayImages.length > 1 && (
                      <div className="flex space-x-4 overflow-x-auto pb-2">
                        {displayImages.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`relative aspect-video w-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0 ${
                              activeImage === index
                                ? "border-primary ring-2 ring-primary/30"
                                : "hover:border-primary/30"
                            }`}
                          >
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt || projectData?.title}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Project Overview */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-semibold text-light mb-4">
                      Project <span className="text-primary">Overview</span>
                    </h2>
                    <div
                      className="text-light-3 leading-relaxed text-lg prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: projectData?.description || "",
                      }}
                    />
                  </div>

                  {/* Features */}
                  {projectData?.features && projectData.features.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-semibold text-light mb-6">
                        Key Features
                      </h3>
                      <div className="grid gap-4 md:grid-cols-1">
                        {projectData.features.map((feature, index) => (
                          <div
                            key={index}
                            className="bg-card backdrop-blur-sm rounded-2xl custom-shadow"
                          >
                            <div className="p-6">
                              <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <h4 className="text-xl font-medium text-light mb-2">
                                    {feature.title}
                                  </h4>
                                  <p className="text-light-3 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technology Stack */}
                  {projectData?.technologies &&
                    projectData.technologies.length > 0 && (
                      <div className="space-y-8">
                        <div className="bg-card rounded-2xl custom-shadow backdrop-blur-sm">
                          <div className="p-8">
                            <h3 className="text-2xl font-semibold text-light mb-4">
                              Technology Stack
                            </h3>
                            <p className="text-light-3 leading-relaxed mb-6">
                              This project was built using modern technologies
                              to ensure optimal performance, security, and user
                              experience.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              {projectData.technologies.map((tech) => (
                                <div
                                  key={tech.id}
                                  className="flex flex-col items-center p-4 rounded-lg bg-neutral-800/60 hover:bg-neutral-800 transition-colors group"
                                >
                                  {tech.icon && (
                                    <div className="w-12 h-12 mb-2 relative">
                                      <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        fill
                                        className="object-contain"
                                      />
                                    </div>
                                  )}
                                  <span className="text-sm text-center text-light-3 group-hover:text-primary transition-colors">
                                    {tech.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Credentials */}
                  {projectData?.credentials &&
                    projectData.credentials.length > 0 && (
                      <div className="bg-card rounded-2xl custom-shadow backdrop-blur-sm">
                        <div className="p-8">
                          <h3 className="text-2xl font-semibold text-light mb-4">
                            Credentials
                          </h3>
                          <p className="text-light-3 leading-relaxed mb-6">
                            Use the following credentials to access the project.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projectData.credentials.map((cred, index) => (
                              <div
                                key={index}
                                className="flex flex-col p-4 lg:p-6 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                              >
                                <h4 className="text-lg font-medium text-light mb-2">
                                  {cred.type}
                                </h4>
                                <p className="text-light-3">
                                  Email: {cred.email}
                                </p>
                                <p className="text-light-3">
                                  Password: {cred.password}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                {/* Contact Card */}
                {/* <div className="lg:hidden mb-12">
                  <ContactCard />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
