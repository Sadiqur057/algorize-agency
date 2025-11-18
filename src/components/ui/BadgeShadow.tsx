"use client";

import { Wallet, Star, Users, Zap, Shield, ArrowRight, CheckCircle, Heart, MessageCircle, TrendingUp, Code } from 'lucide-react';

const TestimonialsBadge = ({ sectionName = "Testimonials" }: { sectionName?: string }) => {
  const getIcon = () => {
    const name = sectionName.toLowerCase();
    if (name.includes('price') || name.includes('pricing')) return <Wallet className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('testimonial') || name.includes('review')) return <Star className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('team') || name.includes('user')) return <Users className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('feature') || name.includes('fast')) return <Zap className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('security') || name.includes('protect')) return <Shield className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('success') || name.includes('complete')) return <CheckCircle className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('love') || name.includes('heart')) return <Heart className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('faq') || name.includes('question')) return <MessageCircle className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('growth') || name.includes('trend')) return <TrendingUp className="w-5 h-5" aria-hidden="true" />;
    if (name.includes('code') || name.includes('codebase')) return <Code className="w-5 h-5" aria-hidden="true" />;
    return <ArrowRight className="w-5 h-5" aria-hidden="true" />;
  };

  return (
     <>
      <a
        href="/"
        className="w-fit relative mx-auto flex gap-2 items-center justify-center font-medium border dark:[background:radial-gradient(125%_125%_at_0%_80%,#000_40%,#ccff00_100%)] [background:radial-gradient(125%_125%_at_0%_80%,#ffffff_40%,#ccff00_100%)] dark:border-[#1b1b1b] p-1.5 px-3 rounded-full overflow-hidden mb-2 z-50 shadow-lg"
      >
        <span className="relative flex gap-1.5 text-sm items-center justify-center text-foreground font-semibold">
          {getIcon()}
          {sectionName}
        </span>
      </a>
    </>
  );
};

export default TestimonialsBadge;