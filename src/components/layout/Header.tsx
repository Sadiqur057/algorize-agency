"use client";
import { useMediaQuery } from "@/hook/use-media-query";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { AnimatedButton } from "../custom/button";
import Link from "next/link";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Lunch",
      link: "#lunch",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },

    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Faq",
      link: "#faq",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useMediaQuery("(max-width: 1024px)");


  return (
    <div className="relative w-full">
      <Navbar
        className={`fixed top-0 left-0 py-2 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-20"
        }`}
      >
        {/* Conditional rendering to prevent double navigation on mobile */}
        {isMobile ? (
          // Mobile Navigation Only
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <Link href="/30-min" target="_blank" className="relative group">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-accent-primary to-accent-hover rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>

                  {/* <Button
                  size="lg"
                  className="relative bg-accent-primary hover:bg-accent-hover text-text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-accent-primary/50"
                >
                  <span className="relative z-10">Book a 15-min call</span>
                </Button> */}
                  <AnimatedButton >Book a 15-min call</AnimatedButton>
                </Link>
              </div>
            </MobileNavMenu>
          </MobileNav>
        ) : (
          // Desktop Navigation Only
          <NavBody className="inset-shadow-[0_2px_rgb(0_0_0/0.10)] max-w-4xl h-11 items-center gap-1 hidden lg:flex rounded-xl bg-card-bg px-1 font-semibold text-xs 2xl:text-base dark:inset-shadow-[0_1px_rgb(255_255_255/0.15)]">
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              {/* <NavbarButton variant="dark">Book a call</NavbarButton> */}
              <AnimatedButton width="140px" height="36px">
                Book a call
              </AnimatedButton>
            </div>
          </NavBody>
        )}
      </Navbar>
    </div>
  );
}
