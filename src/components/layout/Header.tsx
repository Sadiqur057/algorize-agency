// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
// import { Menu, X, User } from 'lucide-react';
// import Button from '@/components/ui/Button';
// import { navigationItems } from '@/data';
// import { cn } from '@/lib';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const headerRef = useRef<HTMLElement>(null);
//   const tickingRef = useRef(false);
//   const mobileMenuRef = useRef<HTMLDivElement>(null);
//   const mobileToggleRef = useRef<HTMLButtonElement>(null);
//   const prefersReducedMotion = useReducedMotion();
//   const router = useRouter();
//   const pathname = usePathname();
//   // Close mobile menu on ESC, click-outside, and lock body scroll when open
//   useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     const onClickOutside = (e: MouseEvent) => {
//       const target = e.target as Node | null;
//       if (!target) return;
//       if (
//         isMobileMenuOpen &&
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(target) &&
//         mobileToggleRef.current &&
//         !mobileToggleRef.current.contains(target)
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     window.addEventListener('keydown', onKeyDown);
//     window.addEventListener('mousedown', onClickOutside);
//     return () => {
//       window.removeEventListener('keydown', onKeyDown);
//       window.removeEventListener('mousedown', onClickOutside);
//       document.body.style.overflow = '';
//     };
//   }, [isMobileMenuOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (tickingRef.current) return;
//       tickingRef.current = true;

//       requestAnimationFrame(() => {
//         const currentScrollY = window.scrollY;

//         // Smoother scrolled state with small hysteresis
//         const scrolledThreshold = 24;
//         const unscrolledThreshold = 16;
//         const shouldBeScrolled = isScrolled
//           ? currentScrollY > unscrolledThreshold
//           : currentScrollY > scrolledThreshold;
//         if (shouldBeScrolled !== isScrolled) {
//           setIsScrolled(shouldBeScrolled);
//         }

//         // Visibility with velocity + hysteresis to avoid flicker
//         const delta = currentScrollY - lastScrollY;
//         const velocity = Math.max(-40, Math.min(40, delta));
//         const hideVelocity = 3; // downwards speed to hide
//         const showVelocity = -2; // upwards speed to show

//         if (currentScrollY < 20) {
//           setIsVisible(true);
//         } else if (velocity > hideVelocity && currentScrollY > 80) {
//           setIsVisible(false);
//         } else if (velocity < showVelocity) {
//           setIsVisible(true);
//         }

//         setLastScrollY(currentScrollY);
//         tickingRef.current = false;
//       });
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY, isScrolled]);

//   const scrollToSection = (href: string) => {
//     if (pathname !== '/') {
//       router.push(`/${href}`);
//       setIsMobileMenuOpen(false);
//       return;
//     }
//     const element = document.querySelector(href) as HTMLElement | null;
//     if (element) {
//       const headerEl = headerRef.current;
//       const headerHeight = headerEl ? headerEl.offsetHeight : 0;
//       const extraMargin = 12; // breathing space below header
//       const targetTop =
//         element.getBoundingClientRect().top +
//         window.scrollY -
//         (headerHeight + extraMargin);
//       window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });

//       // Optional: move focus after scroll for accessibility
//       setTimeout(() => {
//         element.setAttribute('tabindex', '-1');
//         element.focus({ preventScroll: true });
//       }, 350);
//     }
//     setIsMobileMenuOpen(false);
//   };

//   const headerVariants = {
//     hidden: {
//       y: -120,
//       opacity: 0,
//       scale: 0.95,
//       rotateX: -15,
//       filter: 'blur(10px)',
//       transition: {
//         duration: 0.4,
//         ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
//         opacity: { duration: 0.2 },
//         filter: { duration: 0.3 },
//       },
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       rotateX: 0,
//       filter: 'blur(0px)',
//       transition: {
//         duration: 0.6,
//         ease: [0.34, 1.56, 0.64, 1], // easeOutBack - bouncy effect
//         opacity: { duration: 0.3, delay: 0.1 },
//         filter: { duration: 0.4, delay: 0.1 },
//         scale: { duration: 0.5, delay: 0.1 },
//         rotateX: { duration: 0.5, delay: 0.15 },
//       },
//     },
//   };

//   const logoVariants = {
//     idle: { scale: 1, rotateZ: 0 },
//     hover: {
//       scale: 1.05,
//       rotateZ: 5,
//       transition: {
//         duration: 0.3,
//         ease: [0.4, 0.0, 0.2, 1],
//       },
//     },
//   };

//   const mobileMenuVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.95,
//       y: -20,
//       transition: {
//         duration: 0.2,
//         ease: [0.4, 0.0, 0.2, 1],
//       },
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//         ease: [0.4, 0.0, 0.2, 1],
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const menuItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//         ease: [0.4, 0.0, 0.2, 1],
//       },
//     },
//   };

//   return (
//     <>
//       {/* Skip to content link for keyboard users */}
//       {/* <a
//         href="#main-content"
//         className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent-primary focus:text-black focus:px-3 focus:py-2 focus:rounded-lg"
//       >
//         Skip to main content
//       </a> */}

//       <motion.header
//         ref={headerRef}
//         className="fixed top-0 left-0 right-0 z-40 will-change-transform will-change-opacity"
//         role="banner"
//         variants={headerVariants}
//         initial="hidden"
//         animate={isVisible ? 'visible' : 'hidden'}
//         style={{
//           transformOrigin: 'top center',
//           perspective: '1000px',
//         }}
//       >
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className={cn(
//               'flex items-center justify-between transition-all duration-500 ease-out relative',
//               isScrolled
//                 ? 'bg-bg-secondary/90 backdrop-blur-lg shadow-2xl  rounded-2xl px-6 py-3 my-4 mx-auto max-w-5xl'
//                 : 'py-6 bg-transparent'
//             )}
//             layout
//             animate={{
//               borderRadius: isScrolled ? 16 : 0,
//               boxShadow: isScrolled
//                 ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(68, 68, 68, 0.3)'
//                 : 'none',
//               y: isVisible ? 0 : -10,
//               scale: isVisible ? 1 : 0.98,
//             }}
//             transition={{
//               duration: 0.45,
//               ease: [0.4, 0.0, 0.2, 1],
//               y: { type: 'spring', stiffness: 400, damping: 30, mass: 0.6 },
//               scale: { type: 'spring', stiffness: 300, damping: 26, mass: 0.7 },
//             }}
//             style={{
//               transformOrigin: 'center top',
//             }}
//           >
//             {/* Enhanced Logo */}
//             <Link href="/">
//               <motion.div
//                 className="flex items-center cursor-pointer group"
//                 variants={logoVariants}
//                 // initial="idle"
//                 // whileHover="hover"
//                 onClick={() => scrollToSection('#home')}
//                 animate={{
//                   x: isVisible ? 0 : -20,
//                   opacity: isVisible ? 1 : 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: isVisible ? 0.2 : 0,
//                   ease: [0.34, 1.56, 0.64, 1],
//                 }}
//               >
//                 <motion.div
//                   className={cn(
//                     'bg-gradient-to-br from-accent-primary to-accent-hover rounded-xl flex items-center justify-center mr-3 shadow-lg transition-all duration-300 group-hover:shadow-xl',
//                     isScrolled ? 'w-8 h-8' : 'w-10 h-10'
//                   )}
//                   whileHover={{
//                     boxShadow: '0 10px 25px -5px rgba(204, 255, 0, 0.4)',
//                   }}
//                 >
//                   <motion.span
//                     className={cn(
//                       'text-text-accent font-bold transition-all duration-300',
//                       isScrolled ? 'text-sm' : 'text-lg'
//                     )}
//                     transition={{ duration: 0.3 }}
//                   >
//                     AT
//                   </motion.span>
//                 </motion.div>
//                 <motion.span
//                   className={cn(
//                     'font-bold text-text-primary transition-all duration-300',
//                     isScrolled ? 'text-xl' : 'text-2xl'
//                   )}
//                   animate={{
//                     fontSize: isScrolled ? '1.25rem' : '1.5rem',
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   Algorize Tech
//                 </motion.span>
//               </motion.div>
//             </Link>

//             {/* Enhanced Desktop Navigation with Staggered Entrance */}
//             <nav
//               role="navigation"
//               aria-label="Primary"
//               className={cn(
//                 'hidden md:flex items-center transition-all duration-300',
//                 isScrolled ? 'space-x-6' : 'space-x-8'
//               )}
//             >
//               {navigationItems.map((item) => (
//                 <motion.button
//                   key={item.label}
//                   onClick={() => scrollToSection(item.href)}
//                   aria-label={`Go to ${item.label}`}
//                   className={cn(
//                     'font-medium transition-all duration-300 hover:text-accent-primary relative group px-3 py-2 rounded-lg',
//                     isScrolled
//                       ? 'text-text-secondary text-sm'
//                       : 'text-text-muted'
//                   )}
//                   whileHover={{
//                     scale: 1.05,
//                     y: -2,
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: -20, rotateX: -15 }}
//                   animate={{
//                     opacity: isVisible ? 1 : 0,
//                     y: isVisible ? 0 : -20,
//                     rotateX: isVisible ? 0 : -15,
//                   }}
//                   transition={{
//                     duration: prefersReducedMotion ? 0 : 0.5,
//                     ease: [0.34, 1.56, 0.64, 1],
//                   }}
//                   style={{ transformOrigin: 'center top' }}
//                 >
//                   {item.label}
//                   <motion.span
//                     className="absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full"
//                     initial={{ width: 0, x: '-50%' }}
//                     whileHover={{
//                       width: prefersReducedMotion ? 0 : '80%',
//                       x: '-50%',
//                     }}
//                     transition={{
//                       duration: prefersReducedMotion ? 0 : 0.3,
//                       ease: [0.4, 0.0, 0.2, 1],
//                     }}
//                   />
//                   {/* Hover background */}
//                   <motion.div
//                     className="absolute inset-0 bg-accent-primary/10 rounded-lg -z-10"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileHover={{
//                       opacity: prefersReducedMotion ? 0 : 1,
//                       scale: 1,
//                     }}
//                     transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
//                   />
//                 </motion.button>
//               ))}
//             </nav>

//             {/* Enhanced Desktop CTA with Slide Animation */}
//             <div className="hidden md:flex items-center space-x-3">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, x: 20, rotateY: 15 }}
//                 animate={{
//                   opacity: isVisible ? 1 : 0,
//                   x: isVisible ? 0 : 20,
//                   rotateY: isVisible ? 0 : 15,
//                 }}
//                 transition={{
//                   delay: isVisible ? 0.6 : 0,
//                   duration: 0.5,
//                   ease: [0.34, 1.56, 0.64, 1],
//                 }}
//                 style={{ transformOrigin: 'center right' }}
//               >
//                 <Button
//                   variant="neon"
//                   size={isScrolled ? 'sm' : 'sm'}
//                   className={cn(
//                     'transition-all duration-300 relative overflow-hidden group',
//                     isScrolled ? 'text-black text-sm px-4 py-2' : 'text-black'
//                   )}
//                 >
//                   <motion.div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <User
//                     className={cn(
//                       'mr-2 relative z-10',
//                       isScrolled ? 'w-4 h-4' : 'w-4 h-4'
//                     )}
//                   />
//                   <span className="relative z-10">Got an idea?</span>
//                 </Button>
//               </motion.div>
//             </div>

//             {/* Enhanced Mobile Menu Button with Magnetic Effect */}
//             <motion.button
//               className={cn(
//                 'md:hidden p-3 rounded-xl transition-all duration-300 relative overflow-hidden',
//                 isScrolled
//                   ? 'hover:bg-accent-primary/10 text-text-secondary border border-transparent hover:border-accent-primary/30'
//                   : 'hover:bg-bg-secondary/20 text-text-muted backdrop-blur-sm'
//               )}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-expanded={isMobileMenuOpen}
//               aria-controls="mobile-menu"
//               aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//               ref={mobileToggleRef}
//               whileTap={{ scale: 0.9 }}
//               whileHover={{ scale: 1.05 }}
//               animate={{
//                 opacity: isVisible ? 1 : 0,
//                 x: isVisible ? 0 : 20,
//                 rotateZ: isVisible ? 0 : 15,
//               }}
//               transition={{
//                 duration: prefersReducedMotion ? 0 : 0.4,
//                 delay: isVisible ? 0.4 : 0,
//                 ease: [0.34, 1.56, 0.64, 1],
//               }}
//             >
//               <AnimatePresence mode="wait">
//                 {isMobileMenuOpen ? (
//                   <motion.div
//                     key="close"
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                     transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
//                   >
//                     <X className="w-5 h-5" />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="menu"
//                     initial={{ rotate: 90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: -90, opacity: 0 }}
//                     transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
//                   >
//                     <Menu className="w-5 h-5" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </motion.div>

//           {/* Enhanced Mobile Menu */}
//           <AnimatePresence>
//             {isMobileMenuOpen && (
//               <motion.div
//                 className="md:hidden overflow-hidden"
//                 variants={mobileMenuVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//               >
//                 <motion.div
//                   className={cn(
//                     'mt-2 mx-4 rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden',
//                     isScrolled
//                       ? 'bg-bg-secondary/95 border-white/20'
//                       : 'bg-bg-secondary/95 border-accent-primary/30'
//                   )}
//                   layoutId="mobile-menu"
//                   id="mobile-menu"
//                   role="dialog"
//                   aria-modal="true"
//                   aria-label="Mobile menu"
//                   ref={mobileMenuRef}
//                 >
//                   <nav className="p-6" role="navigation" aria-label="Mobile">
//                     <div className="space-y-1">
//                       {navigationItems.map((item, index) => (
//                         <motion.button
//                           key={item.label}
//                           onClick={() => scrollToSection(item.href)}
//                           aria-label={`Go to ${item.label}`}
//                           className="text-left text-text-secondary hover:bg-accent-primary/10 font-medium transition-all duration-300 px-4 py-3 rounded-xl hover:text-primary-50 w-full relative overflow-hidden group"
//                           variants={menuItemVariants}
//                           whileHover={{ x: prefersReducedMotion ? 0 : 8 }}
//                           whileTap={{ scale: 0.98 }}
//                         >
//                           <motion.div
//                             className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded-r-full"
//                             initial={{ scaleY: 0 }}
//                             whileHover={{
//                               scaleY: prefersReducedMotion ? 0 : 1,
//                             }}
//                             transition={{
//                               duration: prefersReducedMotion ? 0 : 0.3,
//                             }}
//                           />
//                           <span className="relative z-10">{item.label}</span>
//                         </motion.button>
//                       ))}
//                     </div>
//                     <motion.div
//                       className="pt-6 mt-6 border-t border-secondary-100"
//                       variants={menuItemVariants}
//                     >
//                       <Button
//                         variant="neon"
//                         size="sm"
//                         className="justify-start w-full text-black"
//                       >
//                         <User className="w-4 h-4 mr-3" />
//                         Got an idea?
//                       </Button>
//                     </motion.div>
//                   </nav>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.header>
//     </>
//   );
// };

// export default Header;


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
import { useState, useEffect } from "react";


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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
      
  //     // Hide navbar when scrolling down, show when scrolling up
  //     if (currentScrollY > lastScrollY && currentScrollY > 100) {
  //       setIsVisible(false);
  //     } else if (currentScrollY < lastScrollY) {
  //       setIsVisible(true);
  //     }
      
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [lastScrollY]);

  return (
    <div className="relative w-full">
      <Navbar 
        className={`fixed top-0 left-0 py-2 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-20'
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
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="dark"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        ) : (
          // Desktop Navigation Only
          <NavBody className="inset-shadow-[0_2px_rgb(0_0_0/0.10)] max-w-4xl flex h-11 items-center gap-1 hidden lg:flex rounded-xl bg-card-bg px-1 font-semibold text-xs 2xl:text-base dark:inset-shadow-[0_1px_rgb(255_255_255/0.15)]">
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="dark">Book a call</NavbarButton>
            </div>
          </NavBody>
        )}
      </Navbar>
    </div>
  );
}