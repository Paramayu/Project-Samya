import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Instagram, Users } from 'lucide-react';
import { ViewType } from '../types';
import teamAryaka from '../assets/images/team_aryaka.jpg';
import teamNispriha from '../assets/images/team_nispriha.jpg';
import teamAnshu from '../assets/images/team_anshu.jpg';
import teamPiyush from '../assets/images/team_piyush.jpg';
import teamParamayu from '../assets/images/team_paramayu.jpg';
import teamArya from '../assets/images/team_arya.jpg';
import teamAarnav from '../assets/images/team_aarnav.jpg';

interface TeamProps {
  onBack?: () => void;
  isInline?: boolean;
  onNavigate?: (view: ViewType) => void;
  onNavigateToMember?: (memberName: string) => void;
  selectedMember?: string | null;
  onClearSelectedMember?: () => void;
}

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  email: string;
  instagram: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Aryaka Bist',
    role: 'Project Lead',
    imageUrl: teamAryaka,
    bio: 'Lead organizer coordinating the Kailali and Lalitpur chapters. Dedicated to designing practical education frameworks and equitable health toolkits for local community empowerment.',
    email: 'aaryakabist6112008@gmail.com',
    instagram: 'https://www.instagram.com/akayra_tisb/'
  },
  {
    name: 'Piyush Joshi',
    role: 'Project Vice-Lead',
    imageUrl: teamPiyush,
    bio: 'Oversees safety workshops, evacuation drills, and agricultural snakebite first-aid campaigns, managing localized kits and field logistics across far-western districts.',
    email: 'pj4408127@gmail.com',
    instagram: 'https://www.instagram.com/pyuush_/'
  },
  {
    name: 'Nispriha Neupane',
    role: 'Secretary',
    imageUrl: teamNispriha,
    bio: 'Specializes in restructuring pedagogical materials, blending practical math methodologies with Vedic teaching techniques to benefit school-level students in rural hubs.',
    email: 'nisprihaneupane11@gmail.com',
    instagram: 'https://www.instagram.com/_nispriha_/'
  },
  {
    name: 'Anshu Rai',
    role: 'Communications & Outreach',
    imageUrl: teamAnshu,
    bio: 'Guides external relations, content curation, and community awareness campaigns, bridging the gap between student volunteer networks and local partner organizations.',
    email: 'cheena7113@gmail.com',
    instagram: 'https://www.instagram.com/kyuka_13/'
  },
  {
    name: 'Paramayu Bhattarai',
    role: 'Technical Coordinator & Logistics Head',
    imageUrl: teamParamayu,
    bio: 'Directs digital strategy, web systems, and project tools, facilitating seamless communication workflows and resource tracking across all regional chapters.',
    email: 'bparamayu@gmail.com',
    instagram: 'https://www.instagram.com/paramayu.b/'
  },
  {
    name: 'Arya Regmi',
    role: 'Treasurer',
    imageUrl: teamArya,
    bio: 'Manages financial transparency, tracking resources, and ensuring sustainable budget distribution for student-led educational initiatives and community safety toolkits.',
    email: 'aaryaregmi257@gmail.com',
    instagram: 'https://www.instagram.com/aryaregmi'
  },
  {
    name: 'Aarnav Chettri',
    role: 'Communications & Outreach',
    imageUrl: teamAarnav,
    bio: 'Co-directs public outreach and community awareness campaigns, coordinating student volunteer efforts across all local hubs in Nepal.',
    email: 'aarnavchhetri0@gmail.com',
    instagram: 'https://www.instagram.com/arnav_chtri/'
  },
];

export default function Team({ 
  onBack, 
  isInline = false, 
  onNavigate,
  onNavigateToMember,
  selectedMember,
  onClearSelectedMember
}: TeamProps) {
  React.useEffect(() => {
    if (!isInline && selectedMember) {
      const timer = setTimeout(() => {
        const elementId = `member-${selectedMember.toLowerCase().replace(/\s+/g, '-')}`;
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Highlight the card with a temporary focus style
          element.classList.add('ring-2', 'ring-red-500', 'ring-offset-4', 'scale-[1.02]', 'transition-all', 'duration-[1000ms]');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-red-500', 'ring-offset-4', 'scale-[1.02]');
            if (onClearSelectedMember) onClearSelectedMember();
          }, 3000);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInline, selectedMember]);

  if (isInline) {
    return (
      <section id="our-team" className="py-24 md:py-32 bg-[#FAFAFA] border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Block */}
          <div className="mb-16 text-center">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-red-500 bg-red-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              Our Team
            </span>
            <h1 className="font-display text-3xl md:text-4xl text-gray-900 font-extrabold tracking-tight mt-4">
              The Youth Council Behind SAMYA
            </h1>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
              Project SAMYA is a completely youth-led, self-governing collective of students, designers, and community organizers operating across several geographic hubs in Nepal.
            </p>
          </div>

          {/* Minimalist Grid Layout containing all 7 team members (4 on top row, 3 centered on bottom row) */}
          <div className="space-y-12" id="team-minimalist-grid">
            {/* Top row: 4 members */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 text-center max-w-5xl mx-auto">
              {TEAM_MEMBERS.slice(0, 4).map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center"
                >
                  {/* Profile Photo: small, uniform circular container */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-sm bg-gray-50 border border-gray-100 relative">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Typography & Subtitle */}
                  <h3 className="font-display font-bold text-gray-900 text-sm md:text-base mt-4 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mt-1 min-h-[32px] px-2 flex items-center justify-center">
                    {member.role}
                  </p>

                  {/* Sub-page Link */}
                  <button
                    onClick={() => {
                      if (onNavigateToMember) {
                        onNavigateToMember(member.name);
                      } else if (onNavigate) {
                        onNavigate('team');
                      }
                    }}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-600 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>View Profile</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Bottom row: 3 remaining members centered */}
            <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-12 text-center max-w-4xl mx-auto">
              {TEAM_MEMBERS.slice(4).map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center w-[calc(50%-1.5rem)] sm:w-auto sm:min-w-[170px] max-w-[210px]"
                >
                  {/* Profile Photo: small, uniform circular container */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-sm bg-gray-50 border border-gray-100 relative">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Typography & Subtitle */}
                  <h3 className="font-display font-bold text-gray-900 text-sm md:text-base mt-4 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium mt-1 min-h-[32px] px-2 flex items-center justify-center">
                    {member.role}
                  </p>

                  {/* Sub-page Link */}
                  <button
                    onClick={() => {
                      if (onNavigateToMember) {
                        onNavigateToMember(member.name);
                      } else if (onNavigate) {
                        onNavigate('team');
                      }
                    }}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-600 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>View Profile</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Deep-dive version of Team page (when currentView is 'team')
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#FAFAFA] py-16 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        {onBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 font-mono transition-colors duration-300 mb-10 cursor-pointer focus:outline-none group"
            id="back-to-home-from-team"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to main page</span>
          </button>
        )}

        {/* Header Block */}
        <div className="mb-20 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-red-500 bg-red-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            Our Team
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-gray-900 font-extrabold tracking-tight mt-4">
            The Youth Council Behind SAMYA
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Project SAMYA is a completely youth-led, self-governing collective of students, designers, and community organizers operating across several geographic hubs in Nepal.
          </p>
        </div>

        {/* 7-Member Profiles Clean Grid Container */}
        <div className="mb-20">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-8 border-l-4 border-red-500 pl-4">
            Council Members & Core Roles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                id={`member-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info area */}
                  <div className="p-6">
                    <h3 className="font-display font-extrabold text-gray-900 text-xl tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-red-500 uppercase tracking-wider mt-1.5">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Footer section with minimal links */}
                <div className="p-6 pt-0 border-t border-gray-50 mt-4 flex items-center justify-between">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors font-mono truncate max-w-[200px]"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full hover:bg-pink-50 text-gray-400 hover:text-pink-600 transition-colors"
                      title={`${member.name}'s Instagram`}
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global summary stats */}
        <div className="p-10 rounded-3xl bg-red-50/40 border border-red-100/50 text-center flex flex-col items-center gap-4">
          <h2 className="font-display text-lg font-bold text-gray-900">
            Expanding the Footsteps of Equity
          </h2>
          <p className="text-gray-500 text-sm max-w-md font-light leading-relaxed">
            Alongside our primary youth council, more than 25 active student volunteers support local operations, school distributions, and community emergency awareness drills across regional chapters.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

