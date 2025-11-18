'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqItems = [
    {
      id: '1',
      question: 'How long does it take to complete a project?',
      answer:
        'Project timelines vary depending on complexity and scope. Typically, a landing page takes 2-3 weeks, while a full website can take 4-8 weeks. We provide detailed timelines during our initial consultation.',
    },
    {
      id: '2',
      question: 'What is included in the design process?',
      answer:
        'Our design process includes research, wireframing, UI/UX design, prototyping, development, testing, and deployment. We also provide ongoing support and maintenance options.',
    },
    {
      id: '3',
      question: 'Do you offer post-launch support?',
      answer:
        'Yes, we offer comprehensive post-launch support including bug fixes, content updates, performance monitoring, and technical maintenance. Support packages are available monthly or annually.',
    },
    {
      id: '4',
      question: 'Can I customize the package?',
      answer:
        'Absolutely! All our packages are fully customizable to meet your specific needs. We can adjust features, timelines, and deliverables based on your requirements and budget.',
    },
    {
      id: '5',
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including credit cards, bank transfers, PayPal, and cryptocurrency. Payment schedules can be arranged with milestones for larger projects.',
    },
  ];

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Title and Description */}
          <div className="lg:sticky lg:top-8">
            <SectionHeader
              eyebrow="FAQ"
              align="left"
              spacing="md"
              title={
                <>
                  Frequently <span className="text-text-muted">asked</span>
                  <br />
                  questions
                </>
              }
              subtitle={
                <>
                  If you don't find your answer here,
                  <br />
                  feel free to{' '}
                  <span className="text-accent-primary font-medium cursor-pointer hover:text-accent-hover transition-colors">
                    reach out!
                  </span>
                </>
              }
            />
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <ScrollReveal key={faq.id} delay={0.1 * index}>
                <motion.div
                  className="border-b border-border-primary pb-6"
                  initial={false}
                >
                  <button
                    className="w-full text-left flex items-center justify-between group"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <h3 className="text-lg font-semibold text-text-primary pr-8 group-hover:text-text-secondary transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.has(faq.id) ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-accent-primary" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.has(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="pt-4">
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
