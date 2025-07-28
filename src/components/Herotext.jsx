// components/HeroText.jsx
import React from 'react';
import TypingText from './Typing';
import HeroButtons from './button';
export default function HeroText() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-5 mt-35">
      <h1 className="text-5xl font-bold text-[#320A6B] drop-shadow-md mb-6 mt-15">
        AADHYA InfoTech
      </h1>

      <TypingText />

      <p className="mt-17 text-[#320A6B] font-bold text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
        We design intelligent digital solutions<br />
        that empower businesses to scale and innovate.<br />
        From custom software to smart systems — we build what’s next.
      </p>
      <HeroButtons />
    </div>
  );
}
