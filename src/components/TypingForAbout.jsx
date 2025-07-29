import { Typewriter } from "react-simple-typewriter";

export default function TypingForAbout() {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-left text-blue-950 drop-shadow-lg">
      <Typewriter
        words={["AADHAYA INFOTECH SOLUTIONS"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={30}
        deleteSpeed={90}
        delaySpeed={1500}
      />
    </h1>
  );
}
