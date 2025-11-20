'use client';

import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC<{faqs: FAQ[]}> = ({faqs}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());


  // Convert to the format expected by the component
  const faqItems = faqs.map((faq) => ({
    id: faq.id.toString(),
    question: faq.question,
    answer: faq.answer,
  }));

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
                  If you don&apos;t find your answer here,
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

export default memo(FAQSection);
