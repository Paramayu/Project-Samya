import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Heart, ArrowRight } from 'lucide-react';
import PrimaryLogo from './PrimaryLogo';
import { ViewType } from '../types';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsDrawerOpen(false);
    
    if (currentView !== 'home') {
      // Navigate to home view first
      onNavigate('home');
      // Delay slightly to allow the DOM to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: 'Our Story', action: () => handleNavClick('our-story'), type: 'scroll' },
    { label: 'Our Initiatives', action: () => handleNavClick('our-initiatives'), type: 'scroll' },
    { label: 'Our Team', action: () => handleNavClick('our-team'), type: 'scroll' },
    { label: 'Contact Us', action: () => handleNavClick('contact-us'), type: 'scroll' },
  ];

  return (
    <>
      {/* Sticky top glassmorphism navigation bar */}
      <header id="navbar" className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-gray-100/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left Side: Brand Logo and Title */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group focus:outline-none cursor-pointer"
            id="brand-logo-trigger"
          >
            <PrimaryLogo className="w-14 h-14 transition-transform duration-500 group-hover:scale-105" showText={true} />
          </button>

          {/* Desktop Right Side Navigation - Minimal & Elegant */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('our-story')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              id="nav-story"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('our-initiatives')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              id="nav-initiatives"
            >
              Our Initiatives
            </button>
            <button
              onClick={() => handleNavClick('our-team')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              id="nav-team"
            >
              Our Team
            </button>
            <button
              onClick={() => handleNavClick('contact-us')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              id="nav-contact"
            >
              Contact Us
            </button>
          </nav>

          {/* Hamburger Menu Icon (Mobile & Drawer Trigger) */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-2 -mr-2 text-gray-700 hover:text-gray-900 focus:outline-none transition-transform active:scale-95 cursor-pointer"
            aria-label="Open menu"
            id="hamburger-menu"
          >
            <Menu className="w-6 h-6 stroke-[1.75]" />
          </button>
        </div>
      </header>

      {/* Slide-out Vertical Drawer Navigation Menu */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm"
              id="drawer-backdrop"
            />

            {/* Vertical Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white/95 backdrop-blur-lg shadow-2xl flex flex-col justify-between border-l border-gray-100"
              id="drawer-container"
            >
              {/* Drawer Header */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <PrimaryLogo className="w-12 h-12" />
                  <span className="font-display font-bold text-gray-900">Project SAMYA</span>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-50 transition-colors active:scale-95 cursor-pointer"
                  aria-label="Close menu"
                  id="close-drawer"
                >
                  <X className="w-6 h-6 stroke-[1.75]" />
                </button>
              </div>

              {/* Drawer Body - Navigation Links */}
              <div className="flex-1 py-12 px-8 flex flex-col gap-6 justify-center">
                <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase border-b border-gray-100 pb-2">
                  Navigation
                </span>
                <div className="flex flex-col gap-5">
                  {menuItems.map((item, index) => {
                    const isTeamActive = item.label === 'Our Team' && currentView === 'team';
                    return (
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        key={item.label}
                        onClick={item.action}
                        className={`text-left text-2xl font-display font-medium tracking-tight py-1 flex items-center justify-between group cursor-pointer ${
                          isTeamActive ? 'text-red-600 font-semibold' : 'text-gray-800 hover:text-red-500'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 stroke-red-500" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="p-8 border-t border-gray-100 bg-gray-50/50">
                <p className="text-xs text-gray-400 font-mono">
                  Project SAMYA (समानताको पाइला)
                </p>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Nepal's youth-led initiative driving equity, safety, and empowerment.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
