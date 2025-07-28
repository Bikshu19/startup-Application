import React from "react";
import HeroText from "./Herotext";
import HeroTextForAbout from "./HeroTextForAbout";

function AboutPageImage() {
  return (
    <div className="relative w-screen h-screen">
      <img
        src="/1e.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#ADB2D4] to-transparent z-10 h-full" />
      <HeroTextForAbout />
    </div>
  );
}

export default AboutPageImage;
