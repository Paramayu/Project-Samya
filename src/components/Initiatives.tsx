import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, AlertTriangle, Coins } from 'lucide-react';
import { INITIATIVES_DATA } from '../data';
import { ViewType } from '../types';

interface InitiativesProps {
  onSelectInitiative: (id: number) => void;
}

export default function Initiatives({ onSelectInitiative }: InitiativesProps) {
  
  // Icon selector based on initiative ID for high visual appeal
  const getInitiativeIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Sparkles className="w-5 h-5 text-red-500" />;
      case 2:
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 3:
        return <Coins className="w-5 h-5 text-yellow-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="our-initiatives" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-red-500 font-semibold bg-red-50 px-3 py-1 rounded-full">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-gray-900 font-bold tracking-tight mt-3">
            Fields of Social Impact
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base mt-3 font-light">
            We are dedicated to sustainable community progress, addressing real issues through practical, structural, and direct actions.
          </p>
        </div>

        {/* 3-Card Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {INITIATIVES_DATA.map((initiative, idx) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.035)] hover:border-gray-200/60 transition-all duration-500 flex-1"
              id={`initiative-card-${initiative.id}`}
            >
              {/* Image Container with high-res photography and overlays */}
              <div className="relative overflow-hidden h-56 md:h-60">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Elegant overlay shadow & category pill */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/20 flex items-center gap-1.5">
                  {getInitiativeIcon(initiative.id)}
                  <span className="text-[10px] font-mono tracking-wider text-gray-700 uppercase font-semibold">
                    {initiative.category}
                  </span>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="font-display text-xl text-gray-900 font-bold group-hover:text-red-500 transition-colors duration-300 leading-snug">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm mt-3 leading-relaxed text-justify">
                    {initiative.summary}
                  </p>
                </div>

                {/* Explore Action Button */}
                <button
                  onClick={() => onSelectInitiative(initiative.id)}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-100 bg-[#FAFAFA] group-hover:bg-red-50/20 group-hover:border-red-200 text-sm font-medium text-gray-700 group-hover:text-red-500 transition-all duration-300 active:scale-98 cursor-pointer shadow-sm"
                  id={`explore-button-${initiative.id}`}
                >
                  <span>Explore Initiative</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
