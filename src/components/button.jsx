import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
      <button
        type="button"
        className="w-full sm:w-auto min-w-[180px] md:min-w-[220px] lg:min-w-[260px] bg-[#320A6B] hover:bg-[#22074d] text-white font-semibold py-2 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 text-base md:text-lg lg:text-xl rounded-full flex items-center justify-center gap-2 transition duration-300 hover:cursor-pointer"
      >
        Get Started
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </button>

      <button
        type="button"
        className="w-full sm:w-auto min-w-[180px] md:min-w-[220px] lg:min-w-[260px] bg-white hover:bg-gray-200 text-[#320A6B] font-semibold py-2 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 text-base md:text-lg lg:text-xl rounded-full flex items-center justify-center gap-2 transition duration-300 hover:cursor-pointer"
      >
        Contact Us
        <Mail className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </button>
    </div>
  );
}
