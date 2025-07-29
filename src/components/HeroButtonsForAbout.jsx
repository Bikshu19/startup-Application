import React from "react";
import TypingForAbout from "./TypingForAbout";
import HeroButtonsForAbout from "./HeroButtonsForAbout";

export default function HeroTextForAbout() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-start z-20 ml-10 space-y-4">
      <TypingForAbout />
      <p className="text-[#320A6B] font-bold text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
        We design intelligent digital solutions
        <br />
        that empower businesses to scale and innovate.
        <br />
        From custom software to smart systems — we build what’s next.
      </p>
      <HeroButtonsForAbout />
    </div>
  );
}
