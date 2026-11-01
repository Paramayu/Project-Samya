import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Initiatives from './components/Initiatives';
import InitiativeDetail from './components/InitiativeDetail';
import Team from './components/Team';
import Contact from './components/Contact';
import { ViewType } from './types';
import { INITIATIVES_DATA } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  // Ensure document title matches the requested tab heading
  useEffect(() => {
    document.title = 'SAMYA: Footsteps Towards Equality';
  }, []);

  // Handle scrolling to top when changing views
  useEffect(() => {
    // Only scroll to top if we are not navigating to a specific team member
    if (currentView !== 'team' || !selectedMember) {
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    }
  }, [currentView, selectedMember]);

  const handleNavigate = (view: ViewType) => {
    if (view !== 'team') {
      setSelectedMember(null);
    }
    setCurrentView(view);
  };

  const handleNavigateToMember = (memberName: string) => {
    setSelectedMember(memberName);
    setCurrentView('team');
  };

  const handleSelectInitiative = (id: number) => {
    if (id === 1) setCurrentView('initiative-1');
    else if (id === 2) setCurrentView('initiative-2');
    else if (id === 3) setCurrentView('initiative-3');
  };

  const handleScrollToStory = () => {
    const element = document.getElementById('our-story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find active initiative data
  const getActiveInitiative = () => {
    if (currentView === 'initiative-1') return INITIATIVES_DATA[0];
    if (currentView === 'initiative-2') return INITIATIVES_DATA[1];
    if (currentView === 'initiative-3') return INITIATIVES_DATA[2];
    return null;
  };

  const activeInitiative = getActiveInitiative();

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col antialiased selection:bg-red-500/10 selection:text-red-600">
      {/* Sticky Global Navigation */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Render Box with Animating Views */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* SECTION 2: Hero */}
              <Hero onScrollToStory={handleScrollToStory} />

              {/* SECTION 3 & 4: Scroll-linked borders & Story */}
              <Story />

              {/* SECTION 5: Initiatives Grid */}
              <Initiatives onSelectInitiative={handleSelectInitiative} />

              {/* SECTION 6: Team Profiles Grid (Inline) */}
              <Team isInline={true} onNavigate={handleNavigate} onNavigateToMember={handleNavigateToMember} />
            </motion.div>
          )}

          {currentView === 'team' && (
            <motion.div
              key="team-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Team 
                onBack={() => handleNavigate('home')} 
                selectedMember={selectedMember}
                onClearSelectedMember={() => setSelectedMember(null)}
              />
            </motion.div>
          )}

          {activeInitiative && (
            <motion.div
              key={`initiative-detail-${activeInitiative.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <InitiativeDetail 
                initiative={activeInitiative} 
                onBack={() => handleNavigate('home')} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* SECTION 6: Global Contact Form & Footer */}
      <Contact />
    </div>
  );
}
