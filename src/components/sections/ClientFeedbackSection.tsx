// // // 'use client';

// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import Button from '@/components/ui/Button';
// // // import ScrollReveal from '@/components/animations/ScrollReveal';
// // // import StaggerContainer from '@/components/animations/StaggerContainer';
// // // import SectionHeader from '@/components/ui/SectionHeader';
// // // import Link from 'next/link';

// // // const PricingSection: React.FC = () => {
// // //   const services = [
// // //     {
// // //       id: 'landing',
// // //       name: 'Landing Creation',
// // //       price: '$12000+',
// // //       description:
// // //         "Every business needs a landing, and it's never been easier to get one...",
// // //       features: [
// // //         '2 design concepts',
// // //         'Full copywriting',
// // //         'Unlimited 3D models',
// // //         'Framer development',
// // //         '2 rounds of revisions',
// // //         '1 month of free support',
// // //       ],
// // //       spotsAvailable: '2 spots available',
// // //       isClientChoice: true,
// // //     },
// // //     {
// // //       id: 'product',
// // //       name: 'Product Design',
// // //       price: '$20000+',
// // //       description:
// // //         "Every business needs a website, and it's never been easier to get one.",
// // //       features: [
// // //         'User flow design concepts',
// // //         'UI / UX design system',
// // //         'Optimized for mobile',
// // //         'Figma files',
// // //         'Unlimited free updates',
// // //       ],
// // //       spotsAvailable: '3 spots available',
// // //       isClientChoice: false,
// // //     },
// // //     {
// // //       id: 'videos',
// // //       name: 'Launch Videos',
// // //       price: '$10000+',
// // //       description:
// // //         "Every business needs a website, and it's never been easier to get one.",
// // //       features: [
// // //         '2 design concepts',
// // //         'Full copywriting',
// // //         'Unlimited 3D models',
// // //         'Framer development',
// // //         '2 rounds of revisions',
// // //         '1 month of free support',
// // //       ],
// // //       spotsAvailable: '5 spots available',
// // //       isClientChoice: false,
// // //     },
// // //   ];

// // //   const [isMobile, setIsMobile] = React.useState(false);
// // //   React.useEffect(() => {
// // //     const check = () => setIsMobile(window.innerWidth < 768);
// // //     check();
// // //     window.addEventListener('resize', check);
// // //     return () => window.removeEventListener('resize', check);
// // //   }, []);

// // //   return (
// // //     <>
// // //       <section
// // //         className="py-12 bg-transparent relative overflow-hidden"
// // //         id="pricing"
// // //       >
// // //         {/* Animated Background Elements */}
// // //         <div className="absolute inset-0 overflow-hidden">
// // //           <motion.div
// // //             className="absolute top-20 left-10 w-32 h-32 bg-accent-primary/10 rounded-full blur-2xl"
// // //             animate={{
// // //               x: [0, 50, 0],
// // //               y: [0, -30, 0],
// // //               scale: [1, 1.2, 1],
// // //             }}
// // //             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // //           />
// // //           <motion.div
// // //             className="absolute bottom-20 right-10 w-24 h-24 bg-accent-hover/10 rounded-full blur-xl"
// // //             animate={{
// // //               x: [0, -40, 0],
// // //               y: [0, 20, 0],
// // //               scale: [1, 0.8, 1],
// // //             }}
// // //             transition={{
// // //               duration: 6,
// // //               repeat: Infinity,
// // //               ease: 'easeInOut',
// // //               delay: 2,
// // //             }}
// // //           />
// // //         </div>

// // //         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           {/* Section Header */}
// // //           <div className="text-center mb-10">
// // //             {/* Header Section */}
// // //             <div className="w-full px-4">
// // //               <SectionHeader
// // //                 eyebrow="Pricing"
// // //                 title={
// // //                   <>
// // //                     Simple, Transparent
// // //                     <br />
// // //                     <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
// // //                       Pricing for Startups
// // //                     </span>
// // //                   </>
// // //                 }
// // //                 subtitle={
// // //                   <>
// // //                     Get a premium website or custom business solution
// // //                     <br className="hidden md:block" />
// // //                     that meets your goals and drives measurable growth.
// // //                   </>
// // //                 }
// // //                 align="center"
// // //                 spacing="lg"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Sticky Header Section */}
// // //       <div className="sticky top-0 z-50  ">
// // //         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
         
// // //             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// // //               <Link href="/30-min" target="_blank" className="relative group">
// // //                 {/* Button glow effect */}
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>
// // //                 <Button
// // //                   size="lg"
// // //                   className="group relative bg-accent-primary hover:bg-accent-hover text-text-accent px-5 sm:px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border border-accent-primary/50"
// // //                 >
// // //                   <motion.div
// // //                     className={
// // //                       'bg-white rounded-xl flex items-center justify-center mr-3 shadow-lg transition-all duration-300 group-hover:shadow-xl w-10 h-10'
// // //                     }
// // //                     whileHover={{
// // //                       boxShadow: '0 10px 25px -5px rgba(204, 255, 0, 0.4)',
// // //                     }}
// // //                   >
// // //                     <motion.span
// // //                       className={
// // //                         'text-text-accent font-bold transition-all text-base duration-300'
// // //                       }
// // //                       transition={{ duration: 0.3 }}
// // //                     >
// // //                       AT
// // //                     </motion.span>
// // //                   </motion.div>
// // //                   <span className="relative z-10 inline-flex items-center">
// // //                     <div className="translate-x-1 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
// // //                       <div className="w-2 md:w-1 group-hover:w-[110px] md:group-hover:w-[70px] transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
// // //                         <span className="inline-flex items-center gap-2 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap">
// // //                           <span className="text-text-accent/90 translate-x-1 group-hover:translate-x-0 group-hover:rotate-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100">
// // //                             +
// // //                           </span>
// // //                           <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-bg-primary/90 border border-border-primary/60 text-[10px] font-semibold tracking-wider text-text-secondary translate-x-1 group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 shadow-[0_0_0_0_rgba(204,255,0,0)] group-hover:shadow-[0_0_18px_3px_rgba(204,255,0,0.25)]">
// // //                             YOU
// // //                             <span
// // //                               aria-hidden
// // //                               className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
// // //                             >
// // //                               <span className="absolute inset-y-0 left-[-120%] w-[80%] bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 group-hover:left-[140%] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
// // //                             </span>
// // //                           </span>
// // //                         </span>
// // //                       </div>
// // //                     </div>

// // //                     <span className="text-base font-semibold tracking-wide">
// // //                       Book a 15-min call
// // //                     </span>
// // //                   </span>
// // //                 </Button>
// // //               </Link>
// // //               <p className="text-text-secondary text-sm text-center">
// // //                 Starting from just{' '}
// // //                 <span className="underline text-accent-primary font-semibold">
// // //                   $5000
// // //                 </span>{' '}
// // //                 |{' '}
// // //                 <span className="underline text-accent-primary font-semibold">
// // //                   Monthly
// // //                 </span>
// // //               </p>
// // //             </div>
         
// // //         </div>
// // //       </div>

// // //       {/* Pricing Cards Section */}
// // //       <div className="relative flex flex-col mb-20 gap-10 md:gap-20 pt-10">
// // //         {services.map((service, index) => {
// // //           return (
// // //             <div
// // //               key={service.id}
// // //               className={isMobile ? '' : 'sticky'}
// // //               style={
// // //                 isMobile
// // //                   ? undefined
// // //                   : {
// // //                       top: `calc(170px + ${index * 80}px)`,
// // //                     }
// // //               }
// // //             >
// // //               <div
// // //                 className={`flex items-center justify-center ${isMobile ? 'mb-8' : ''}`}
// // //               >
// // //                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
// // //                   <motion.div
// // //                     variants={{
// // //                       hidden: { opacity: 0, y: 60 },
// // //                       visible: { opacity: 1, y: 0 },
// // //                     }}
// // //                     initial="hidden"
// // //                     whileInView="visible"
// // //                     viewport={{ once: true, margin: '-40px' }}
// // //                     transition={{ duration: 0.6, ease: 'easeOut' }}
// // //                     className={`bg-bg-card/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-border-primary hover:border-accent-primary/50 transition-all duration-500 group`}
// // //                     whileHover={{
// // //                       y: -5,
// // //                       boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
// // //                     }}
// // //                     style={{
// // //                       background: `linear-gradient(135deg, 
// // //                         rgba(31, 31, 31, 0.95) 0%, 
// // //                         rgba(42, 42, 42, 0.95) 50%, 
// // //                         rgba(31, 31, 31, 0.95) 100%)`,
// // //                       transform: `scale(${1 - index * 0.02})`,
// // //                     }}
// // //                   >
// // //                     <div className="p-8 relative z-10">
// // //                       <div className="flex flex-col lg:flex-row">
// // //                         {/* Left Side - Service Info */}
// // //                         <div className="lg:flex-1 lg:pr-8">
// // //                           {/* Service Name */}
// // //                           <motion.h3
// // //                             className="text-2xl font-bold text-text-primary mb-6 group-hover:text-accent-primary transition-colors duration-300"
// // //                           >
// // //                             {service.name}
// // //                           </motion.h3>

// // //                           {/* Price */}
// // //                           <div className="mb-6">
// // //                             <motion.span
// // //                               className="text-5xl font-bold bg-gradient-to-r from-text-primary to-accent-primary bg-clip-text text-transparent"
// // //                               animate={{
// // //                                 backgroundPosition: [
// // //                                   '0% 50%',
// // //                                   '100% 50%',
// // //                                   '0% 50%',
// // //                                 ],
// // //                               }}
// // //                               transition={{ duration: 3, repeat: Infinity }}
// // //                               style={{
// // //                                 backgroundSize: '200% 200%',
// // //                               }}
// // //                             >
// // //                               {service.price}
// // //                             </motion.span>
// // //                           </div>

// // //                           {/* Description */}
// // //                           <motion.p
// // //                             className="text-text-secondary text-base mb-8 leading-relaxed group-hover:text-text-primary transition-colors duration-300"
// // //                             initial={{ opacity: 0.8 }}
// // //                             whileHover={{ opacity: 1 }}
// // //                           >
// // //                             {service.description}
// // //                           </motion.p>

// // //                           {/* CTA Button */}
// // //                           <motion.div
// // //                             whileTap={{ scale: 0.95 }}
// // //                           >
// // //                             <Button
// // //                               variant="primary"
// // //                               size="lg"
// // //                               className="mb-6 bg-accent-primary hover:bg-accent-hover text-text-accent px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
// // //                             >
// // //                               <span className="relative z-10">
// // //                                 Book a 15-min call
// // //                               </span>
// // //                               <motion.div
// // //                                 className="absolute inset-0 bg-gradient-to-r from-accent-hover to-accent-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
// // //                                 animate={{
// // //                                   x: ['-100%', '100%'],
// // //                                 }}
// // //                                 transition={{
// // //                                   duration: 2,
// // //                                   repeat: Infinity,
// // //                                   ease: 'easeInOut',
// // //                                 }}
// // //                               />
// // //                             </Button>
// // //                           </motion.div>

// // //                           {/* Spots Available */}
// // //                           <motion.div
// // //                             className="flex items-center text-sm text-text-muted"
// // //                             animate={{
// // //                               opacity: [0.7, 1, 0.7],
// // //                             }}
// // //                             transition={{ duration: 2, repeat: Infinity }}
// // //                           >
// // //                             <motion.div
// // //                               className="w-2 h-2 bg-accent-primary rounded-full mr-3"
// // //                               animate={{
// // //                                 opacity: [1, 0.7, 1],
// // //                               }}
// // //                               transition={{ duration: 1.5, repeat: Infinity }}
// // //                             />
// // //                             <span>{service.spotsAvailable}</span>
// // //                           </motion.div>
// // //                         </div>

// // //                         {/* Middle Border */}
// // //                         <div className="hidden lg:block w-px bg-border-primary mx-8"></div>

// // //                         {/* Right Side - Features */}
// // //                         <div className="lg:flex-1 lg:pl-8 mt-8 lg:mt-0">
// // //                           <div className="space-y-4">
// // //                             {service.features.map((feature, featureIndex) => (
// // //                               <motion.div
// // //                                 key={feature}
// // //                                 className="flex items-center group/feature"
// // //                                 initial={{ opacity: 0, x: 20 }}
// // //                                 animate={{ opacity: 1, x: 0 }}
// // //                                 transition={{ delay: featureIndex * 0.1 }}
// // //                                 whileHover={{ x: 5 }}
// // //                               >
// // //                                 <motion.div
// // //                                   className="w-6 h-6 bg-accent-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/feature:bg-accent-primary/30 transition-colors duration-300"
// // //                                 >
// // //                                   <motion.div
// // //                                     className="w-3 h-3 bg-accent-primary rounded-full"
// // //                                     animate={{
// // //                                       boxShadow: [
// // //                                         '0 0 0px rgba(204, 255, 0, 0.3)',
// // //                                         '0 0 8px rgba(204, 255, 0, 0.6)',
// // //                                         '0 0 0px rgba(204, 255, 0, 0.3)',
// // //                                       ],
// // //                                     }}
// // //                                     transition={{
// // //                                       duration: 2,
// // //                                       repeat: Infinity,
// // //                                       delay: featureIndex * 0.3,
// // //                                     }}
// // //                                   />
// // //                                 </motion.div>
// // //                                 <span className="text-text-secondary text-base group-hover/feature:text-text-primary transition-colors duration-300">
// // //                                   {feature}
// // //                                 </span>
// // //                               </motion.div>
// // //                             ))}
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </motion.div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default PricingSection;


// // 'use client';

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import Button from '@/components/ui/Button';
// // import ScrollReveal from '@/components/animations/ScrollReveal';
// // import StaggerContainer from '@/components/animations/StaggerContainer';
// // import SectionHeader from '@/components/ui/SectionHeader';
// // import Link from 'next/link';

// // const PricingSection: React.FC = () => {
// //   const services = [
// //     {
// //       id: 'landing',
// //       name: 'Landing Creation',
// //       price: '$12000+',
// //       description:
// //         "Every business needs a landing, and it's never been easier to get one...",
// //       features: [
// //         '2 design concepts',
// //         'Full copywriting',
// //         'Unlimited 3D models',
// //         'Framer development',
// //         '2 rounds of revisions',
// //         '1 month of free support',
// //       ],
// //       spotsAvailable: '2 spots available',
// //       isClientChoice: true,
// //     },
// //     {
// //       id: 'product',
// //       name: 'Product Design',
// //       price: '$20000+',
// //       description:
// //         "Every business needs a website, and it's never been easier to get one.",
// //       features: [
// //         'User flow design concepts',
// //         'UI / UX design system',
// //         'Optimized for mobile',
// //         'Figma files',
// //         'Unlimited free updates',
// //       ],
// //       spotsAvailable: '3 spots available',
// //       isClientChoice: false,
// //     },
// //     {
// //       id: 'videos',
// //       name: 'Launch Videos',
// //       price: '$10000+',
// //       description:
// //         "Every business needs a website, and it's never been easier to get one.",
// //       features: [
// //         '2 design concepts',
// //         'Full copywriting',
// //         'Unlimited 3D models',
// //         'Framer development',
// //         '2 rounds of revisions',
// //         '1 month of free support',
// //       ],
// //       spotsAvailable: '5 spots available',
// //       isClientChoice: false,
// //     },
// //   ];

// //   const [isMobile, setIsMobile] = React.useState(false);

// //   React.useEffect(() => {
// //     const check = () => setIsMobile(window.innerWidth < 768);
// //     check();
// //     window.addEventListener('resize', check);
// //     return () => window.removeEventListener('resize', check);
// //   }, []);

// //   return (
// //     <>
// //       <section
// //         className="py-12 bg-transparent relative overflow-hidden"
// //         id="pricing"
// //       >
// //         {/* Animated Background Elements */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           <motion.div
// //             className="absolute top-20 left-10 w-32 h-32 bg-accent-primary/10 rounded-full blur-2xl"
// //             animate={{
// //               x: [0, 50, 0],
// //               y: [0, -30, 0],
// //               scale: [1, 1.2, 1],
// //             }}
// //             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// //           />
// //           <motion.div
// //             className="absolute bottom-20 right-10 w-24 h-24 bg-accent-hover/10 rounded-full blur-xl"
// //             animate={{
// //               x: [0, -40, 0],
// //               y: [0, 20, 0],
// //               scale: [1, 0.8, 1],
// //             }}
// //             transition={{
// //               duration: 6,
// //               repeat: Infinity,
// //               ease: 'easeInOut',
// //               delay: 2,
// //             }}
// //           />
// //         </div>

// //         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //           {/* Section Header */}
// //           <div className="text-center mb-10">
// //             {/* Header Section */}
// //             <div className="w-full px-4">
// //               <SectionHeader
// //                 eyebrow="Pricing"
// //                 title={
// //                   <>
// //                     Simple, Transparent
// //                     <br />
// //                     <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
// //                       Pricing for Startups
// //                     </span>
// //                   </>
// //                 }
// //                 subtitle={
// //                   <>
// //                     Get a premium website or custom business solution
// //                     <br className="hidden md:block" />
// //                     that meets your goals and drives measurable growth.
// //                   </>
// //                 }
// //                 align="center"
// //                 spacing="lg"
// //               />
// //             </div>
// //             <ScrollReveal delay={0.1}>
// //               <div className="flex items-center justify-center mb-4 mt-6">
// //                 <Link href="/30-min" target="_blank" className="relative group">
// //                   {/* Button glow effect */}
// //                   <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>
// //                   <Button
// //                     size="lg"
// //                     className="group relative bg-accent-primary hover:bg-accent-hover text-text-accent px-5 sm:px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border border-accent-primary/50"
// //                   >
// //                     <motion.div
// //                       className="bg-white rounded-xl flex items-center justify-center mr-3 shadow-lg transition-all duration-300 group-hover:shadow-xl w-10 h-10"
// //                       whileHover={{
// //                         boxShadow: '0 10px 25px -5px rgba(204, 255, 0, 0.4)',
// //                       }}
// //                     >
// //                       <motion.span
// //                         className="text-text-accent font-bold transition-all text-base duration-300"
// //                         transition={{ duration: 0.3 }}
// //                       >
// //                         AT
// //                       </motion.span>
// //                     </motion.div>
// //                     <span className="relative z-10 inline-flex items-center">
// //                       <div className="translate-x-1 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
// //                         <div className="w-2 md:w-1 group-hover:w-[110px] md:group-hover:w-[70px] transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
// //                           <span className="inline-flex items-center gap-2 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap">
// //                             <span className="text-text-accent/90 translate-x-1 group-hover:translate-x-0 group-hover:rotate-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100">
// //                               +
// //                             </span>
// //                             <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-bg-primary/90 border border-border-primary/60 text-[10px] font-semibold tracking-wider text-text-secondary translate-x-1 group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 shadow-[0_0_0_0_rgba(204,255,0,0)] group-hover:shadow-[0_0_18px_3px_rgba(204,255,0,0.25)]">
// //                               YOU
// //                               <span
// //                                 aria-hidden
// //                                 className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
// //                               >
// //                                 <span className="absolute inset-y-0 left-[-120%] w-[80%] bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 group-hover:left-[140%] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
// //                               </span>
// //                             </span>
// //                           </span>
// //                         </div>
// //                       </div>

// //                       <span className="text-base font-semibold tracking-wide">
// //                         Book a 15-min call
// //                       </span>
// //                     </span>
// //                   </Button>
// //                 </Link>
// //               </div>
// //               <p className="text-text-secondary text-sm max-w-md mx-auto">
// //                 Starting from just{' '}
// //                 <span className="underline text-accent-primary font-semibold">
// //                   $5000
// //                 </span>{' '}
// //                 |{' '}
// //                 <span className="underline text-accent-primary font-semibold">
// //                   Monthly
// //                 </span>
// //               </p>
// //             </ScrollReveal>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Sticky Header Section - Always visible when scrolling through cards */}
// //       <div className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border-primary/30 shadow-md">
// //         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
// //           <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
// //             <Link href="/30-min" target="_blank" className="relative group">
// //               {/* Button glow effect */}
// //               <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
// //               <Button
// //                 size="md"
// //                 className="group relative bg-accent-primary hover:bg-accent-hover text-text-accent px-4 py-2 rounded-full text-sm font-semibold shadow transition-all duration-200 border border-accent-primary/40"
// //               >
// //                 <span className="relative z-10 flex items-center">
// //                   <span className="bg-white text-text-accent text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
// //                     AT
// //                   </span>
// //                   <span className="whitespace-nowrap">Book a 15-min call</span>
// //                 </span>
// //               </Button>
// //             </Link>
// //             <p className="text-text-secondary text-xs sm:text-sm text-center">
// //               Starting from just{' '}
// //               <span className="underline text-accent-primary font-semibold">
// //                 $5000
// //               </span>{' '}
// //               |{' '}
// //               <span className="underline text-accent-primary font-semibold">
// //                 Monthly
// //               </span>
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Pricing Cards Section */}
// //       <div className="relative flex flex-col py-10 gap-10 md:gap-20">
// //         {services.map((service, index) => {
// //           return (
// //             <div
// //               key={service.id}
// //               className={isMobile ? '' : 'sticky'}
// //               style={
// //                 isMobile
// //                   ? undefined
// //                   : {
// //                       top: `calc(80px + ${index * 80}px)`,
// //                     }
// //               }
// //             >
// //               <div
// //                 className={`flex items-center justify-center ${isMobile ? 'mb-8' : ''}`}
// //               >
// //                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
// //                   <motion.div
// //                     variants={{
// //                       hidden: { opacity: 0, y: 60 },
// //                       visible: { opacity: 1, y: 0 },
// //                     }}
// //                     initial="hidden"
// //                     whileInView="visible"
// //                     viewport={{ once: true, margin: '-40px' }}
// //                     transition={{ duration: 0.6, ease: 'easeOut' }}
// //                     className={`bg-bg-card/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-border-primary hover:border-accent-primary/50 transition-all duration-500 group`}
// //                     whileHover={{
// //                       y: -5,
// //                       boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
// //                     }}
// //                     style={{
// //                       background: `linear-gradient(135deg, 
// //                         rgba(31, 31, 31, 0.95) 0%, 
// //                         rgba(42, 42, 42, 0.95) 50%, 
// //                         rgba(31, 31, 31, 0.95) 100%)`,
// //                       transform: `scale(${1 - index * 0.02})`,
// //                     }}
// //                   >
// //                     <div className="p-8 relative z-10">
// //                       <div className="flex flex-col lg:flex-row">
// //                         {/* Left Side - Service Info */}
// //                         <div className="lg:flex-1 lg:pr-8">
// //                           {/* Service Name */}
// //                           <motion.h3
// //                             className="text-2xl font-bold text-text-primary mb-6 group-hover:text-accent-primary transition-colors duration-300"
// //                           >
// //                             {service.name}
// //                           </motion.h3>

// //                           {/* Price */}
// //                           <div className="mb-6">
// //                             <motion.span
// //                               className="text-5xl font-bold bg-gradient-to-r from-text-primary to-accent-primary bg-clip-text text-transparent"
// //                               animate={{
// //                                 backgroundPosition: [
// //                                   '0% 50%',
// //                                   '100% 50%',
// //                                   '0% 50%',
// //                                 ],
// //                               }}
// //                               transition={{ duration: 3, repeat: Infinity }}
// //                               style={{
// //                                 backgroundSize: '200% 200%',
// //                               }}
// //                             >
// //                               {service.price}
// //                             </motion.span>
// //                           </div>

// //                           {/* Description */}
// //                           <motion.p
// //                             className="text-text-secondary text-base mb-8 leading-relaxed group-hover:text-text-primary transition-colors duration-300"
// //                             initial={{ opacity: 0.8 }}
// //                             whileHover={{ opacity: 1 }}
// //                           >
// //                             {service.description}
// //                           </motion.p>

// //                           {/* CTA Button */}
// //                           <motion.div
// //                             whileTap={{ scale: 0.95 }}
// //                           >
// //                             <Button
// //                               variant="primary"
// //                               size="lg"
// //                               className="mb-6 bg-accent-primary hover:bg-accent-hover text-text-accent px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
// //                             >
// //                               <span className="relative z-10">
// //                                 Book a 15-min call
// //                               </span>
// //                               <motion.div
// //                                 className="absolute inset-0 bg-gradient-to-r from-accent-hover to-accent-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
// //                                 animate={{
// //                                   x: ['-100%', '100%'],
// //                                 }}
// //                                 transition={{
// //                                   duration: 2,
// //                                   repeat: Infinity,
// //                                   ease: 'easeInOut',
// //                                 }}
// //                               />
// //                             </Button>
// //                           </motion.div>

// //                           {/* Spots Available */}
// //                           <motion.div
// //                             className="flex items-center text-sm text-text-muted"
// //                             animate={{
// //                               opacity: [0.7, 1, 0.7],
// //                             }}
// //                             transition={{ duration: 2, repeat: Infinity }}
// //                           >
// //                             <motion.div
// //                               className="w-2 h-2 bg-accent-primary rounded-full mr-3"
// //                               animate={{
// //                                 opacity: [1, 0.7, 1],
// //                               }}
// //                               transition={{ duration: 1.5, repeat: Infinity }}
// //                             />
// //                             <span>{service.spotsAvailable}</span>
// //                           </motion.div>
// //                         </div>

// //                         {/* Middle Border */}
// //                         <div className="hidden lg:block w-px bg-border-primary mx-8"></div>

// //                         {/* Right Side - Features */}
// //                         <div className="lg:flex-1 lg:pl-8 mt-8 lg:mt-0">
// //                           <div className="space-y-4">
// //                             {service.features.map((feature, featureIndex) => (
// //                               <motion.div
// //                                 key={feature}
// //                                 className="flex items-center group/feature"
// //                                 initial={{ opacity: 0, x: 20 }}
// //                                 animate={{ opacity: 1, x: 0 }}
// //                                 transition={{ delay: featureIndex * 0.1 }}
// //                                 whileHover={{ x: 5 }}
// //                               >
// //                                 <motion.div
// //                                   className="w-6 h-6 bg-accent-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/feature:bg-accent-primary/30 transition-colors duration-300"
// //                                 >
// //                                   <motion.div
// //                                     className="w-3 h-3 bg-accent-primary rounded-full"
// //                                     animate={{
// //                                       boxShadow: [
// //                                         '0 0 0px rgba(204, 255, 0, 0.3)',
// //                                         '0 0 8px rgba(204, 255, 0, 0.6)',
// //                                         '0 0 0px rgba(204, 255, 0, 0.3)',
// //                                       ],
// //                                     }}
// //                                     transition={{
// //                                       duration: 2,
// //                                       repeat: Infinity,
// //                                       delay: featureIndex * 0.3,
// //                                     }}
// //                                   />
// //                                 </motion.div>
// //                                 <span className="text-text-secondary text-base group-hover/feature:text-text-primary transition-colors duration-300">
// //                                   {feature}
// //                                 </span>
// //                               </motion.div>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </>
// //   );
// // };

// // export default PricingSection;


// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Button from '@/components/ui/Button';
// import ScrollReveal from '@/components/animations/ScrollReveal';
// import StaggerContainer from '@/components/animations/StaggerContainer';
// import SectionHeader from '@/components/ui/SectionHeader';
// import Link from 'next/link';

// const PricingSection: React.FC = () => {
//   const services = [
//     {
//       id: 'landing',
//       name: 'Landing Creation',
//       price: '$12000+',
//       description:
//         "Every business needs a landing, and it's never been easier to get one...",
//       features: [
//         '2 design concepts',
//         'Full copywriting',
//         'Unlimited 3D models',
//         'Framer development',
//         '2 rounds of revisions',
//         '1 month of free support',
//       ],
//       spotsAvailable: '2 spots available',
//       isClientChoice: true,
//     },
//     {
//       id: 'product',
//       name: 'Product Design',
//       price: '$20000+',
//       description:
//         "Every business needs a website, and it's never been easier to get one.",
//       features: [
//         'User flow design concepts',
//         'UI / UX design system',
//         'Optimized for mobile',
//         'Figma files',
//         'Unlimited free updates',
//       ],
//       spotsAvailable: '3 spots available',
//       isClientChoice: false,
//     },
//     {
//       id: 'videos',
//       name: 'Launch Videos',
//       price: '$10000+',
//       description:
//         "Every business needs a website, and it's never been easier to get one.",
//       features: [
//         '2 design concepts',
//         'Full copywriting',
//         'Unlimited 3D models',
//         'Framer development',
//         '2 rounds of revisions',
//         '1 month of free support',
//       ],
//       spotsAvailable: '5 spots available',
//       isClientChoice: false,
//     },
//   ];

//   const [isMobile, setIsMobile] = React.useState(false);
//   const [isSticky, setIsSticky] = React.useState(false);

//   React.useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener('resize', check);
//     return () => window.removeEventListener('resize', check);
//   }, []);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       const ctaButton = document.getElementById('cta-button-original');
//       if (ctaButton) {
//         const rect = ctaButton.getBoundingClientRect();
//         // Show sticky when original button scrolls past top
//         setIsSticky(rect.bottom < 0);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <section
//         className="py-12 bg-transparent relative overflow-hidden"
//         id="pricing"
//       >
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             className="absolute top-20 left-10 w-32 h-32 bg-accent-primary/10 rounded-full blur-2xl"
//             animate={{
//               x: [0, 50, 0],
//               y: [0, -30, 0],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <motion.div
//             className="absolute bottom-20 right-10 w-24 h-24 bg-accent-hover/10 rounded-full blur-xl"
//             animate={{
//               x: [0, -40, 0],
//               y: [0, 20, 0],
//               scale: [1, 0.8, 1],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: 2,
//             }}
//           />
//         </div>

//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header - Always Visible */}
//           <div className="text-center mb-10">
//             {/* Header Section */}
//             <div className="w-full px-4">
//               <SectionHeader
//                 eyebrow="Pricing"
//                 title={
//                   <>
//                     Simple, Transparent
//                     <br />
//                     <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
//                       Pricing for Startups
//                     </span>
//                   </>
//                 }
//                 subtitle={
//                   <>
//                     Get a premium website or custom business solution
//                     <br className="hidden md:block" />
//                     that meets your goals and drives measurable growth.
//                   </>
//                 }
//                 align="center"
//                 spacing="lg"
//               />
//             </div>

//             {/* Original CTA Button */}
//             <ScrollReveal delay={0.1}>
//               <div className="flex items-center justify-center mb-4 mt-6" id="cta-button-original">
//                 <Link href="/30-min" target="_blank" className="relative group">
//                   {/* Button glow effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-hover rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>
//                   <Button
//                     size="lg"
//                     className="group relative bg-accent-primary hover:bg-accent-hover text-text-accent px-5 sm:px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border border-accent-primary/50"
//                   >
//                     <motion.div
//                       className="bg-white rounded-xl flex items-center justify-center mr-3 shadow-lg transition-all duration-300 group-hover:shadow-xl w-10 h-10"
//                       whileHover={{
//                         boxShadow: '0 10px 25px -5px rgba(204, 255, 0, 0.4)',
//                       }}
//                     >
//                       <motion.span
//                         className="text-text-accent font-bold transition-all text-base duration-300"
//                         transition={{ duration: 0.3 }}
//                       >
//                         AT
//                       </motion.span>
//                     </motion.div>
//                     <span className="relative z-10 inline-flex items-center">
//                       <div className="translate-x-1 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
//                         <div className="w-2 md:w-1 group-hover:w-[110px] md:group-hover:w-[70px] transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
//                           <span className="inline-flex items-center gap-2 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap">
//                             <span className="text-text-accent/90 translate-x-1 group-hover:translate-x-0 group-hover:rotate-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] delay-100">
//                               +
//                             </span>
//                             <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-bg-primary/90 border border-border-primary/60 text-[10px] font-semibold tracking-wider text-text-secondary translate-x-1 group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 shadow-[0_0_0_0_rgba(204,255,0,0)] group-hover:shadow-[0_0_18px_3px_rgba(204,255,0,0.25)]">
//                               YOU
//                               <span
//                                 aria-hidden
//                                 className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
//                               >
//                                 <span className="absolute inset-y-0 left-[-120%] w-[80%] bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 group-hover:left-[140%] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
//                               </span>
//                             </span>
//                           </span>
//                         </div>
//                       </div>

//                       <span className="text-base font-semibold tracking-wide">
//                         Book a 15-min call
//                       </span>
//                     </span>
//                   </Button>
//                 </Link>
//               </div>
//               <p className="text-text-secondary text-sm max-w-md mx-auto">
//                 Starting from just{' '}
//                 <span className="underline text-accent-primary font-semibold">
//                   $5000
//                 </span>{' '}
//                 |{' '}
//                 <span className="underline text-accent-primary font-semibold">
//                   Monthly
//                 </span>
//               </p>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

     

//       {/* Sticky Cards Section - Cards stick in middle */}
//       <div className="relative flex flex-col mb-20 gap-10 md:gap-20">
//         {services.map((service, index) => {
//           return (
//             <div
//               key={service.id}
//               className={isMobile ? '' : 'sticky'}
//               style={
//                 isMobile
//                   ? undefined
//                   : {
//                       top: `calc(50% - 300px + ${index * 40}px)`,
//                     }
//               }
//             >
//               <div
//                 className={`flex items-center justify-center ${isMobile ? 'mb-8' : ''}`}
//               >
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//                   <motion.div
//                     variants={{
//                       hidden: { opacity: 0, y: 60 },
//                       visible: { opacity: 1, y: 0 },
//                     }}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: '-40px' }}
//                     transition={{ duration: 0.6, ease: 'easeOut' }}
//                     className={`bg-bg-card/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-border-primary hover:border-accent-primary/50 transition-all duration-500 group`}
//                     whileHover={{
//                       y: -5,
//                       boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
//                     }}
//                     style={{
//                       background: `linear-gradient(135deg, 
//                         rgba(31, 31, 31, 0.95) 0%, 
//                         rgba(42, 42, 42, 0.95) 50%, 
//                         rgba(31, 31, 31, 0.95) 100%)`,
//                       transform: `scale(${1 - index * 0.02})`,
//                     }}
//                   >
//                     <div className="p-8 relative z-10">
//                       <div className="flex flex-col lg:flex-row">
//                         {/* Left Side - Service Info */}
//                         <div className="lg:flex-1 lg:pr-8">
//                           {/* Service Name */}
//                           <motion.h3
//                             className="text-2xl font-bold text-text-primary mb-6 group-hover:text-accent-primary transition-colors duration-300"
//                           >
//                             {service.name}
//                           </motion.h3>

//                           {/* Price */}
//                           <div className="mb-6">
//                             <motion.span
//                               className="text-5xl font-bold bg-gradient-to-r from-text-primary to-accent-primary bg-clip-text text-transparent"
//                               animate={{
//                                 backgroundPosition: [
//                                   '0% 50%',
//                                   '100% 50%',
//                                   '0% 50%',
//                                 ],
//                               }}
//                               transition={{ duration: 3, repeat: Infinity }}
//                               style={{
//                                 backgroundSize: '200% 200%',
//                               }}
//                             >
//                               {service.price}
//                             </motion.span>
//                           </div>

//                           {/* Description */}
//                           <motion.p
//                             className="text-text-secondary text-base mb-8 leading-relaxed group-hover:text-text-primary transition-colors duration-300"
//                             initial={{ opacity: 0.8 }}
//                             whileHover={{ opacity: 1 }}
//                           >
//                             {service.description}
//                           </motion.p>

//                           {/* CTA Button */}
//                           <motion.div
//                             whileTap={{ scale: 0.95 }}
//                           >
//                             <Button
//                               variant="primary"
//                               size="lg"
//                               className="mb-6 bg-accent-primary hover:bg-accent-hover text-text-accent px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
//                             >
//                               <span className="relative z-10">
//                                 Book a 15-min call
//                               </span>
//                               <motion.div
//                                 className="absolute inset-0 bg-gradient-to-r from-accent-hover to-accent-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
//                                 animate={{
//                                   x: ['-100%', '100%'],
//                                 }}
//                                 transition={{
//                                   duration: 2,
//                                   repeat: Infinity,
//                                   ease: 'easeInOut',
//                                 }}
//                               />
//                             </Button>
//                           </motion.div>

//                           {/* Spots Available */}
//                           <motion.div
//                             className="flex items-center text-sm text-text-muted"
//                             animate={{
//                               opacity: [0.7, 1, 0.7],
//                             }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           >
//                             <motion.div
//                               className="w-2 h-2 bg-accent-primary rounded-full mr-3"
//                               animate={{
//                                 opacity: [1, 0.7, 1],
//                               }}
//                               transition={{ duration: 1.5, repeat: Infinity }}
//                             />
//                             <span>{service.spotsAvailable}</span>
//                           </motion.div>
//                         </div>

//                         {/* Middle Border */}
//                         <div className="hidden lg:block w-px bg-border-primary mx-8"></div>

//                         {/* Right Side - Features */}
//                         <div className="lg:flex-1 lg:pl-8 mt-8 lg:mt-0">
//                           <div className="space-y-4">
//                             {service.features.map((feature, featureIndex) => (
//                               <motion.div
//                                 key={feature}
//                                 className="flex items-center group/feature"
//                                 initial={{ opacity: 0, x: 20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: featureIndex * 0.1 }}
//                                 whileHover={{ x: 5 }}
//                               >
//                                 <motion.div
//                                   className="w-6 h-6 bg-accent-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/feature:bg-accent-primary/30 transition-colors duration-300"
//                                 >
//                                   <motion.div
//                                     className="w-3 h-3 bg-accent-primary rounded-full"
//                                     animate={{
//                                       boxShadow: [
//                                         '0 0 0px rgba(204, 255, 0, 0.3)',
//                                         '0 0 8px rgba(204, 255, 0, 0.6)',
//                                         '0 0 0px rgba(204, 255, 0, 0.3)',
//                                       ],
//                                     }}
//                                     transition={{
//                                       duration: 2,
//                                       repeat: Infinity,
//                                       delay: featureIndex * 0.3,
//                                     }}
//                                   />
//                                 </motion.div>
//                                 <span className="text-text-secondary text-base group-hover/feature:text-text-primary transition-colors duration-300">
//                                   {feature}
//                                 </span>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default PricingSection;


"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import Earth from "@/components/ui/globe";
import Marquee from "@/components/ui/marquee1";
import AnimatedDots from "@/components/ui/animate-dots";
import SectionHeader from "@/components/ui/SectionHeader";
import { useRef, useState } from "react";

interface Review {
  id: number;
  name: string;
  designation: string;
  rating: string;
  review: string;
  img: string | null;
}

// Get reviews from data

function ClientFeedback({reviews}: {reviews: Review[]}) {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // State for toggle functionality
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');

  // Calculate duration based on number of reviews to maintain consistent speed
  // Assuming each review card is ~450px width, we want consistent pixels per second
  const baseSpeed = 30; // pixels per second
  const cardWidth = 450; // approximate width of each card including gap
  const duration = (reviews.length * cardWidth) / baseSpeed;

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

  return (
    <>
      <section className="relative h-full min-h-screen py-14 bg-black text-white" id="testimonials" ref={testimonialsRef}>
        <div className="absolute bottom-0 left-0 z-[2] right-0 top-0 [mask-image:radial-gradient(ellipse_40%_50%_at_50%_0%,#000_60%,transparent_110%)]"></div>

        <SectionHeader 
          eyebrow="Testimonials"
          title={
            <>
              Don't just listen to us, <br />
              <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
               people already have
              </span>
            </>
          }
          subtitle="Let's hear how our clients feel about our service"
          align="center"
          spacing="lg"
        />

        <div className="absolute top-72 flex justify-center w-full">
          <div className="absolute h-fit w-fit">
            <AnimatedDots />
          </div>
          <Earth className="max-w-[500px] z-[0]" />
        </div>
        
        <div className="relative z-[2] sm:pt-10 pt-24">
          <>
            {/* Removed fixed height container to prevent cropping */}
            <div className="overflow-hidden pb-2">
              <Marquee
                // pauseOnHover
                className={`[--duration:${duration}s]`}
                pauseOnReducedMotion={false} // Removed performance optimization
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-neutral-950 border border-gray-900 sm:w-[28rem] w-[20rem] sm:p-6 p-4 rounded-xl transition-all duration-300 testimonial-card hover:border-accent-primary flex flex-col h-full"
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                      perspective: "1000px"
                    }}
                  >
                    <div className="flex justify-between mb-3 items-center">
                      <div className="flex items-center gap-1">
                        {[...Array(Math.floor(parseFloat(review.rating)))].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                        ))}
                        {parseFloat(review.rating) % 1 !== 0 && (
                          <Star className="w-4 h-4 fill-accent-primary/50 text-accent-primary" />
                        )}
                        <span className="text-xs text-accent-primary ml-1">{review.rating}</span>
                      </div>
                    </div>
                    <p className="sm:text-base text-sm mb-4 text-white font-medium leading-relaxed flex gap-2 py-2 testimonial-content flex-grow">
                      <Quote className="fill-accent-primary sm:w-5 sm:h-5 w-4 h-4 shrink-0 rotate-180 mt-1" />
                      <span>{review.review}</span>
                    </p>
                    <div className="flex items-center mt-auto">
                      {review.img && (
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent-primary">
                          <Image
                            src={review.img}
                            alt={review.name}
                            width={48}
                            height={48}
                            className="object-cover"
                            quality={80}
                            sizes="48px"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-white text-base">
                          {review.name}
                        </p>
                        <p className="text-sm text-accent-primary">
                          {review.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
            
            {/* Removed fixed height container to prevent cropping */}
            <div className="overflow-hidden">
              <Marquee
                // pauseOnHover
                reverse
                className={`[--duration:${duration}s]`}
                pauseOnReducedMotion={false} // Removed performance optimization
              >
                {reviews.map((review) => (
                  <div
                    key={`reverse-${review.id}`}
                    className="bg-neutral-950 border border-gray-900 sm:w-[28rem] w-[20rem] sm:p-6 p-4 rounded-xl transition-all duration-300 testimonial-card hover:border-accent-primary flex flex-col h-full"
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                      perspective: "1000px"
                    }}
                  >
                    <div className="flex justify-between mb-3 items-center">
                      <div className="flex items-center gap-1">
                        {[...Array(Math.floor(parseFloat(review.rating)))].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                        ))}
                        {parseFloat(review.rating) % 1 !== 0 && (
                          <Star className="w-4 h-4 fill-accent-primary/50 text-accent-primary" />
                        )}
                        <span className="text-xs text-accent-primary ml-1">{review.rating}</span>
                      </div>
                    </div>
                    <p className="sm:text-base text-sm mb-4 text-white font-medium leading-relaxed flex gap-2 py-2 testimonial-content flex-grow">
                      <Quote className="fill-accent-primary sm:w-5 sm:h-5 w-4 h-4 shrink-0 rotate-180 mt-1" />
                      <span>{review.review}</span>
                    </p>
                    <div className="flex items-center mt-auto">
                      {review.img && (
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent-primary">
                          <Image
                            src={review.img}
                            alt={review.name}
                            width={48}
                            height={48}
                            className="object-cover"
                            quality={80}
                            sizes="48px"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-white text-base">
                          {review.name}
                        </p>
                        <p className="text-sm text-accent-primary">
                          {review.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default ClientFeedback;
