import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, Users } from 'lucide-react';
import storyClassroom from '../assets/images/story_classroom.jpg';

export default function Story() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress starting when the section enters from the bottom
      // to when it occupies the viewport.
      const entryPoint = windowHeight;
      const exitPoint = -rect.height;
      const scrolled = windowHeight - rect.top;
      const totalScrollable = windowHeight + rect.height;
      
      let progress = scrolled / (totalScrollable * 0.7); // speed up slightly for rich response
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // initial trigger

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="our-story" 
      className="relative py-28 md:py-36 bg-[#FAFAFA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-red-500 font-semibold">
            Our Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-gray-900 font-bold tracking-tight mt-2">
            The Story of Project SAMYA
          </h2>
          <p className="text-sm font-mono text-gray-400 mt-2">समानताको पाइला • Footsteps Towards Equity</p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic High-Quality Stock Image Representing Impact Work */}
          <div className="lg:col-span-5 relative group">
            {/* Visual background soft frames */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-red-100 to-orange-50 rounded-2xl opacity-70 blur-xl group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-white bg-white">
              <img 
                src={storyClassroom} 
                alt="Children studying together in Nepal" 
                className="w-full h-[400px] object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Micro stat-badge positioned just below the photo container */}
            <div className="relative mt-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400">Founded by</p>
                <p className="text-xs font-bold text-gray-800">Youth Leaders in Nepal</p>
              </div>
            </div>
          </div>

          {/* Right Column: Beautifully Typeset Narrative Text Block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_32px_rgba(239,68,68,0.025)] transition-all duration-500">
              {/* Quote visual element */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-400 font-serif text-2xl select-none shadow-sm">
                “
              </div>
              
              <p className="text-gray-700 font-sans text-base md:text-lg leading-relaxed font-light text-justify" id="narrative-text">
                Project SAMYA was founded on a simple truth: equality gives everyone the same tools, but equity ensures everyone gets what they actually need to thrive. As a youth-led movement in Nepal, we realized that sustainable change cannot be dropped off in a box; it must be built alongside the community. What began as a student initiative to make mathematics practical and engaging in Kailali quickly grew. By listening first and acting second, our footsteps expanded into providing safe drinking water, disaster preparedness training, and economic empowerment for women. We don’t just donate—we empower, build capacity, and walk forward together.
              </p>
            </div>

            {/* Micro Highlights Badges beneath narrative block */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-white border border-gray-100 flex flex-col gap-1 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-1">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-gray-800">Listening First</span>
                <span className="text-[10px] text-gray-400 leading-tight">Community design</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-100 flex flex-col gap-1 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 mb-1">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-gray-800">Capacity Building</span>
                <span className="text-[10px] text-gray-400 leading-tight">Self-sufficiency</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-100 flex flex-col gap-1 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-1">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-gray-800">Youth-Driven</span>
                <span className="text-[10px] text-gray-400 leading-tight">Led from within Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
