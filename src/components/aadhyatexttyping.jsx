import { Typewriter } from 'react-simple-typewriter';

export default function TypingText() {
  return (
    <div className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-[#000000] text-center mt-0 leading-relaxed font-bold">
      <Typewriter
        words={[
          'Ravi Aadhya Infotech, established in 2024,empowers future professionals through hands-on internships across IT, Engineering, Management, and more...'
        ]}
        loop={1} // loop just once
        cursor
        cursorStyle="|"
        typeSpeed={40}
        deleteSpeed={0}
        delaySpeed={1000}
      />
      {/* Line breaks inserted manually after typing */}
    </div>
  );
}
