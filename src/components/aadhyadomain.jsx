import React from 'react';

const AccreditationLogos = ({ 
  title = "Industry Partnerships",
  logos = [{"src":'1a.png'},{"src":'1b.png'},{"src":'1c.png'},{"src":'1d.png'},{"src":'1e.png'},{"src":'1f.png'},{"src":'1g.png'},{"src":'1h.png'},{"src":'1i.png'},{"src":'1j.png'},{"src":'1k.png'}],
  className = ""
}) => {
  return (
    <div className={`w-full bg-white py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          {title}
        </h2>
        
        {/* Logos Container */}
     <div className="overflow-hidden w-full">
      <div className="flex flex-row items-center gap-8 animate-scroll-horizontal">
        {logos.concat(logos).map((logo, index) => ( // duplicate logos for smooth loop
          <div 
            key={index}
            className="flex items-center justify-center h-20 w-32 md:h-24 md:w-40 p-2"
          >
            <img
              src={`./logo/${logo.src}`}
              alt={logo.alt || `Accreditation logo ${index + 1}`}
              className="max-h-full max-w-full object-contain hover:scale-150 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          display: flex;
          width: max-content;
          animation: scroll-horizontal 90s linear infinite;
        }
      `}</style>
    </div>
        
        {/* Fallback message when no logos provided */}
        {logos.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No accreditation logos to display
          </div>
        )}
      </div>
    </div>
  );
};

export default AccreditationLogos;