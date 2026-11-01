import React from 'react';
import mainLogo from '../assets/images/mainlogo.png';

interface PrimaryLogoProps {
  className?: string;
  showText?: boolean;
}

export default function PrimaryLogo({ className = "w-14 h-14", showText = false }: PrimaryLogoProps) {
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={mainLogo}
        alt="Main Logo"
        className={`${className} object-cover rounded-xl shadow-sm bg-gray-50 border border-gray-100`}
        referrerPolicy="no-referrer"
      />
      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-lg font-bold tracking-tight text-gray-900 leading-none">
            Project SAMYA
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 mt-1">
            समानताको पाइला
          </span>
        </div>
      )}
    </div>
  );
}
