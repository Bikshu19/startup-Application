import React from 'react';
import HeroText from './Herotext';

function AadhyaImage() {
  return (
    <div className="relative w-screen h-screen">
      <img
        src="/aadhya1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ADB2D4] to-transparent z-10 h-full" />
    </div>
  );
}

export default AadhyaImage;
