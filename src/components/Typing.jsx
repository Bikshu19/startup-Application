import { Typewriter } from 'react-simple-typewriter';

export default function TypingText() {
  return (
    <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-9xl  xl:text-4xl font-semibold text-white text-center mt-8">
      <Typewriter
        words={[
           'Digital Innovation .',
  'Custom Tech Solutions .',
  'Secure & Scalable .',
  'Innovative Minds .',
  'Future-Ready Tech .',
  'Smart Engineering .',
  'NextGen Solutions .',
  'Code Excellence .',
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </h1>
  );
}
