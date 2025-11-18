'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Server,
  Zap,
  Lock,
  Cpu,
  Palette,
  Shield,
  Rocket
} from 'lucide-react';

const TechStackSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const techStack = [
    {
      id: "frontend",
      category: "Frontend",
      icon: Code2,
      technologies: [
        { name: "React", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Palette }
      ],
      description: "Modern interfaces with cutting-edge frameworks",
      gridArea: "span 2 / span 2"
    },
    {
      id: "backend",
      category: "Backend",
      icon: Server,
      technologies: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Server }
      ],
      description: "Scalable server-side solutions",
      gridArea: "span 1 / span 2"
    },
    {
      id: "database",
      category: "Database",
      icon: Database,
      technologies: [
        { name: "MongoDB", icon: Database },
        { name: "PostgreSQL", icon: Database }
      ],
      description: "Robust data management systems",
      gridArea: "span 1 / span 2"
    },
    {
      id: "devops",
      category: "DevOps",
      icon: Cloud,
      technologies: [
        { name: "Docker", icon: Cloud },
        { name: "AWS", icon: Cloud },
        { name: "CI/CD", icon: Zap }
      ],
      description: "Streamlined deployment & infrastructure",
      gridArea: "span 2 / span 2"
    },
    {
      id: "mobile",
      category: "Mobile",
      icon: Smartphone,
      technologies: [
        { name: "React Native", icon: Smartphone },
        { name: "Flutter", icon: Smartphone }
      ],
      description: "Cross-platform mobile applications",
      gridArea: "span 1 / span 2"
    },
    {
      id: "security",
      category: "Security",
      icon: Shield,
      technologies: [
        { name: "OAuth", icon: Lock },
        { name: "JWT", icon: Shield }
      ],
      description: "Enterprise-grade security protocols",
      gridArea: "span 1 / span 2"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        animate={floatingAnimation}
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-yellow-500/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 text-yellow-400 px-4 py-2 text-sm font-medium mb-4 ring-1 ring-yellow-400/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Zap className="w-4 h-4" />
            Our Technology Stack
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Modern Tools for
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent"> Exceptional Results</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and high-performance applications that drive your business forward.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {techStack.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative col-span-4 rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm overflow-hidden group ${
                  hoveredCard === item.id ? 'ring-2 ring-yellow-400/50 shadow-[0_0_30px_rgba(250,204,21,0.15)]' : ''
                }`}
                style={{ gridArea: item.gridArea }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative p-5 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-yellow-400/10 ring-1 ring-yellow-400/20">
                        <IconComponent className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.category}</h3>
                    </div>
                    <motion.div 
                      className="text-yellow-400/30"
                      animate={{ 
                        rotate: hoveredCard === item.id ? 360 : 0,
                        scale: hoveredCard === item.id ? 1.1 : 1
                      }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <Cpu className="w-4 h-4" />
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-2 mb-4">{item.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => {
                        const TechIcon = tech.icon;
                        return (
                          <motion.div
                            key={tech.name}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(250, 204, 21, 0.15)",
                              borderColor: "rgba(250, 204, 21, 0.3)"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <TechIcon className="w-3.5 h-3.5 text-yellow-400/80" />
                            <span className="text-xs text-gray-300 font-medium">{tech.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Animated border effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: hoveredCard === item.id 
                      ? ["0 0 0 0 rgba(250,204,21,0)", "0 0 0 2px rgba(250,204,21,0.3)", "0 0 0 0 rgba(250,204,21,0)"]
                      : "0 0 0 0 rgba(250,204,21,0)"
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredCard === item.id ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

     

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Ready to leverage our technology stack for your next project?
          </p>
          <motion.button 
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.3)]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(250,204,21,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Code2 className="w-5 h-5" />
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;