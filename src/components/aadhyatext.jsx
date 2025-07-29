import React from 'react';
import Aadhyatexttyping from './aadhyatexttyping';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Aadhyatext() {
  return (
    <div className=" z-20 w-full absolute bottom-0">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-0 py-12 md:flex-row flex-col items-start">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-start relative">
            <h1
              className="text-4xl mb-7 font-extrabold"
              style={{ textAlign: 'start', color: '#320A6B' }}
            >
              RAAVI AADHYA INFOTECH
            </h1>

            <div className="relative w-full">
              <Aadhyatexttyping />

              {/* Centered Button BELOW typing text */}
              <div className="mt-8 flex justify-center w-full">
                <Link
                  to="/blog"
                  className="min-w-[180px] md:min-w-[220px] lg:min-w-[260px] bg-[#320A6B] hover:bg-[#22074d] text-white font-semibold py-2 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 text-base md:text-lg lg:text-xl rounded-full flex items-center justify-center gap-2 transition duration-300"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aadhyatext;
