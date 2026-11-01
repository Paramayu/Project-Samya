import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import TypographicLogo from './TypographicLogo';

interface HeroProps {
  onScrollToStory: () => void;
}

export default function Hero({ onScrollToStory }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-80px)] w-full flex flex-col justify-between items-center bg-gradient-to-b from-[#FAFAFA] to-white py-12 md:py-16 overflow-hidden"
    >
      {/* Absolute Decorative Geometric Highlights (Premium minimalist look) */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-red-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-orange-100/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col justify-center items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center"
        >
          {/* Custom high-fidelity typographic centerpiece graphic */}
          <div className="w-full max-w-5xl select-none" id="centerpiece-graphic-container">
            <TypographicLogo />
          </div>

        </motion.div>
      </div>

      {/* Scroll indicator pointing to 'Our Story' */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        onClick={onScrollToStory}
        className="flex flex-col items-center gap-1 group pb-6 cursor-pointer focus:outline-none"
        id="scroll-indicator"
      >
        <span className="text-xs font-mono tracking-widest text-gray-400 uppercase group-hover:text-red-500 transition-colors duration-300">
          Our Journey
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex items-center justify-center pt-1"
        >
          <ArrowDown className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-all duration-300 stroke-[2.5]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
