'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer from '@/components/animations/StaggerContainer';
import SectionHeader from '@/components/ui/SectionHeader';

const FeaturesSection: React.FC = () => {
  const [isGrowthOn, setIsGrowthOn] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Count-up animation for percentage
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Start count-up animation
      count.set(200);

      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, count]);

  return (
    <section id="features" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* Header Section */}
        <div className="w-full px-4">
          <SectionHeader
            eyebrow="Features"
            title={
              <>
                Designs That
                <br />
                <span className="bg-gradient-to-r from-text-primary via-accent-primary/80 to-text-primary bg-clip-text text-transparent">
                  Drive Results
                </span>
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

        {/* Interactive Cards */}
        <div ref={sectionRef} className="relative">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-accent-primary/10 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute top-32 right-16 w-16 h-16 bg-accent-hover/10 rounded-full blur-xl"
              animate={{
                y: [0, 15, 0],
                x: [0, -8, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/3 w-12 h-12 bg-accent-secondary/10 rounded-full blur-xl"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 4,
              }}
            />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
            {/* Funding Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60, rotateX: -15 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="h-[320px] hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-bg-card border-border-primary hover:border-accent-primary/70 rounded-3xl overflow-hidden relative">
                <div className="p-6 relative z-10">
                  {/* Card Visual Element */}
                  <div className="mb-6 flex justify-center">
                    <motion.div className="bg-accent-primary/10 rounded-2xl p-6 w-full max-w-xs group-hover:bg-accent-primary/15 transition-colors duration-300">
                      <motion.div
                        className="bg-bg-primary/80 rounded-xl p-3 shadow-lg"
                        animate={{
                          boxShadow: isGrowthOn
                            ? [
                                '0 4px 20px rgba(204, 255, 0, 0.2)',
                                '0 8px 30px rgba(204, 255, 0, 0.4)',
                                '0 4px 20px rgba(204, 255, 0, 0.2)',
                              ]
                            : [
                                '0 4px 20px rgba(0, 0, 0, 0.1)',
                                '0 4px 20px rgba(0, 0, 0, 0.1)',
                                '0 4px 20px rgba(0, 0, 0, 0.1)',
                              ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <motion.span
                            className="text-xs text-text-muted font-medium"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Turn on
                          </motion.span>
                          <motion.span
                            className={`text-xs font-semibold transition-colors duration-300 ${
                              isGrowthOn
                                ? 'text-accent-primary'
                                : 'text-text-disabled'
                            }`}
                            animate={{
                              // scale: isGrowthOn ? [1, 1.1, 1] : 1,
                              color: isGrowthOn
                                ? ['#ccff00', '#b8e600', '#ccff00']
                                : '#888888',
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            Growth
                          </motion.span>
                        </div>
                        <div className="flex items-center justify-center">
                          <motion.button
                            onClick={() => setIsGrowthOn(!isGrowthOn)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setIsGrowthOn(!isGrowthOn);
                              }
                            }}
                            role="switch"
                            aria-checked={isGrowthOn}
                            aria-label="Toggle growth"
                            tabIndex={0}
                            className="focus:outline-none"
                            // whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              className={`w-14 h-7 rounded-full shadow-inner relative cursor-pointer ${
                                isGrowthOn
                                  ? 'bg-accent-primary'
                                  : 'bg-border-primary'
                              }`}
                              animate={{
                                boxShadow: isGrowthOn
                                  ? 'inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(204, 255, 0, 0.5)'
                                  : 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                              }}
                              transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 24,
                              }}
                            >
                              <motion.div
                                className="pointer-events-none absolute top-1 left-1 w-5 h-5 bg-text-primary rounded-full shadow-lg"
                                animate={{
                                  x: isGrowthOn ? 28 : 0,
                                  boxShadow: isGrowthOn
                                    ? '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(204, 255, 0, 0.6)'
                                    : '0 2px 8px rgba(0, 0, 0, 0.3)',
                                }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 500,
                                  damping: 30,
                                }}
                              />
                            </motion.div>
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3 className="text-lg font-bold text-text-primary mb-3 text-center">
                    Get a Huge Funding
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-text-secondary text-xs text-center leading-relaxed"
                    initial={{ opacity: 0.8 }}
                  >
                    We have helped tens of startups all over the world to get
                    $70m+ in funding in total.
                  </motion.p>
                </div>
              </Card>
            </motion.div>

            {/* Conversions Card - Prominent */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              whileHover={{
                y: -12,
                rotateY: -2,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="h-[320px] hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-accent-primary border-accent-hover text-[#0a0a0a] hover:bg-accent-hover rounded-3xl overflow-hidden relative">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute top-4 right-4 w-32 h-32 bg-text-accent/20 rounded-full blur-2xl"
                    animate={{
                      // scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-24 h-24 bg-text-accent/20 rounded-full blur-xl"
                    animate={{
                      // scale: [1, 1.1, 1],
                      opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-16 h-16 bg-text-accent/10 rounded-full blur-lg transform -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      rotate: [0, 360],
                      // scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>

                <div className="p-6 text-center relative z-10">
                  {/* Large Percentage Display */}
                  <div className="mb-6">
                    <motion.div
                      className="text-6xl md:text-7xl font-bold mb-3 drop-shadow-sm"
                      initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                      animate={
                        isInView
                          ? {
                              scale: 1,
                              opacity: 1,
                              rotateY: 0,
                            }
                          : {}
                      }
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      whileHover={{
                        // scale: 1.05,
                        textShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      <motion.span
                        animate={
                          isInView
                            ? {
                                textShadow: [
                                  '0 0 0px rgba(0, 0, 0, 0)',
                                  '0 0 10px rgba(0, 0, 0, 0.3)',
                                  '0 0 0px rgba(0, 0, 0, 0)',
                                ],
                              }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                      >
                        {rounded}
                      </motion.span>
                      %
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-full px-4 py-2 inline-block shadow-lg backdrop-blur-sm border border-black/10"
                      animate={
                        isInView
                          ? {
                              //  scale: [1, 1.1, 1],
                              boxShadow: [
                                '0 4px 15px rgba(0, 0, 0, 0.2)',
                                '0 8px 25px rgba(0, 0, 0, 0.4)',
                                '0 4px 15px rgba(0, 0, 0, 0.2)',
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
                      // whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="text-sm font-bold text-[#0a0a0a]"
                        animate={{
                          opacity: [1, 0.8, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Conversions
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold mb-3 text-[#0a0a0a]"
                    // animate={{
                    //   y: [0, -2, 0],
                    // }}
                    // transition={{
                    //   duration: 3,
                    //   repeat: Infinity,
                    //   ease: 'easeInOut',
                    // }}
                  >
                    Increase Conversions
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-[#0a0a0a]/90 text-xs leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    // whileHover={{ opacity: 1 }}
                    animate={{
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Websites so stunning that it will increase your conversion
                    rate by 120%, decrease the bounce rate.
                  </motion.p>
                </div>
              </Card>
            </motion.div>

            {/* Market Card - Stats */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60, rotateX: 15 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              whileHover={{
                // scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="h-[320px] hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-bg-card border-border-primary hover:border-accent-primary/70 rounded-3xl overflow-hidden relative">
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 via-transparent to-accent-hover/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(204, 255, 0, 0.03) 0%, transparent 50%, rgba(184, 230, 0, 0.03) 100%)',
                      'linear-gradient(225deg, rgba(184, 230, 0, 0.03) 0%, transparent 50%, rgba(204, 255, 0, 0.03) 100%)',
                      'linear-gradient(135deg, rgba(204, 255, 0, 0.03) 0%, transparent 50%, rgba(184, 230, 0, 0.03) 100%)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <div className="p-6 relative z-10">
                  {/* Card Visual Element */}
                  <div className="mb-6 flex justify-center">
                    <motion.div className="bg-accent-primary/10 rounded-2xl p-5 w-full max-w-xs group-hover:bg-accent-primary/15 transition-colors duration-300">
                      <motion.div
                        className="text-center mb-3"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <span className="text-xs text-text-muted font-medium">
                          Stats will speak for itself
                        </span>
                      </motion.div>

                      {/* Progress Bars Container */}
                      <div className="space-y-3">
                        {/* User Retention Bar */}
                        <motion.div
                          className="bg-bg-primary/80 rounded-xl p-3"
                          animate={{
                            boxShadow: [
                              '0 2px 10px rgba(0, 0, 0, 0.1)',
                              '0 4px 20px rgba(204, 255, 0, 0.1)',
                              '0 2px 10px rgba(0, 0, 0, 0.1)',
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 0.5,
                          }}
                        >
                          <div className="flex justify-between text-xs mb-2">
                            <motion.span
                              className="text-text-primary font-medium"
                              animate={{ opacity: [0.8, 1, 0.8] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              User Retention
                            </motion.span>
                            <motion.span
                              className="text-accent-primary font-semibold"
                              animate={{
                                // scale: [1, 1.1, 1],
                                color: ['#ccff00', '#b8e600', '#ccff00'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 1,
                              }}
                            >
                              +80%
                            </motion.span>
                          </div>
                          <div className="w-full bg-border-secondary rounded-full h-3 overflow-hidden">
                            <motion.div
                              className="bg-gradient-to-r from-accent-primary to-accent-hover h-3 rounded-full shadow-lg relative"
                              initial={{ width: 0 }}
                              animate={
                                isInView
                                  ? {
                                      width: '80%',
                                      boxShadow: [
                                        '0 0 5px rgba(204, 255, 0, 0.3)',
                                        '0 0 15px rgba(204, 255, 0, 0.6)',
                                        '0 0 5px rgba(204, 255, 0, 0.3)',
                                      ],
                                    }
                                  : { width: 0 }
                              }
                              transition={{
                                width: {
                                  duration: 1.5,
                                  ease: 'easeOut',
                                  delay: 0.8,
                                },
                                boxShadow: {
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 2,
                                },
                              }}
                              whileHover={{
                                boxShadow: '0 0 20px rgba(204, 255, 0, 0.8)',
                              }}
                            >
                              <motion.div
                                className="absolute right-0 top-0 w-1 h-3 bg-accent-hover rounded-r-full"
                                animate={isInView ? { opacity: [0, 1, 0] } : {}}
                                transition={{
                                  duration: 1,
                                  delay: 3,
                                  repeat: Infinity,
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Leads Bar */}
                        <motion.div
                          className="bg-bg-primary/80 rounded-xl p-3"
                          animate={{
                            boxShadow: [
                              '0 2px 10px rgba(0, 0, 0, 0.1)',
                              '0 4px 20px rgba(204, 255, 0, 0.1)',
                              '0 2px 10px rgba(0, 0, 0, 0.1)',
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 1.5,
                          }}
                        >
                          <div className="flex justify-between text-xs mb-2">
                            <motion.span
                              className="text-text-primary font-medium"
                              animate={{ opacity: [0.8, 1, 0.8] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.5,
                              }}
                            >
                              Leads
                            </motion.span>
                            <motion.span
                              className="text-accent-primary font-semibold"
                              animate={{
                                // scale: [1, 1.1, 1],
                                color: ['#ccff00', '#b8e600', '#ccff00'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 1.5,
                              }}
                            >
                              +150%
                            </motion.span>
                          </div>
                          <div className="w-full bg-border-secondary rounded-full h-3 overflow-hidden">
                            <motion.div
                              className="bg-gradient-to-r from-accent-primary to-accent-hover h-3 rounded-full shadow-lg relative"
                              initial={{ width: 0 }}
                              animate={
                                isInView
                                  ? {
                                      width: '90%',
                                      boxShadow: [
                                        '0 0 5px rgba(204, 255, 0, 0.3)',
                                        '0 0 15px rgba(204, 255, 0, 0.6)',
                                        '0 0 5px rgba(204, 255, 0, 0.3)',
                                      ],
                                    }
                                  : { width: 0 }
                              }
                              transition={{
                                width: {
                                  duration: 1.5,
                                  ease: 'easeOut',
                                  delay: 1.2,
                                },
                                boxShadow: {
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 3,
                                },
                              }}
                              whileHover={{
                                boxShadow: '0 0 20px rgba(204, 255, 0, 0.8)',
                              }}
                            >
                              <motion.div
                                className="absolute right-0 top-0 w-1 h-3 bg-accent-hover rounded-r-full"
                                animate={isInView ? { opacity: [0, 1, 0] } : {}}
                                transition={{
                                  duration: 1,
                                  delay: 4,
                                  repeat: Infinity,
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-lg font-bold text-text-primary mb-3 text-center"
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    Stay Ahead of the Market
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-text-secondary text-xs text-center leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    //    whileHover={{ opacity: 1 }}
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Every page on the web is 1:1 similar to each other, but it's
                    your chance to get something unique.
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
