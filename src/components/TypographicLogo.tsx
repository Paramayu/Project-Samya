import React from 'react';
import logoImage from '../assets/images/hero_centerpiece.png';

export default function TypographicLogo() {
  return (
    <div className="relative w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto aspect-[2000/1556] select-none overflow-visible bg-transparent flex items-center justify-center">
      <img
        src={logoImage}
        alt="PROJECT SAMYA Custom Name Graphic"
        style={{
          width: '77.8%',
          height: '128.53%',
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 object-contain mix-blend-multiply bg-transparent transition-transform duration-500 hover:scale-[1.03]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
