import React, { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const TeamCarousel = () => {
  const [selected, setSelected] = useState(0);
  const carouselRef = useRef(null);

  const team = [
    {
      name: 'Shamyutha Gembali',
      role: 'Full Stack Developer',
      image: '/profiles/1a.png',
    },
    {
      name: 'Swathi Rao',
      role: 'Frontend Developer',
      image: '/profiles/1b.png',
    },
    {
      name: 'Anjali Mehra',
      role: 'UI/UX Designer',
      image: '/profiles/1d.webp',
    },
    {
      name: 'Vikram Reddy',
      role: 'Data Analyst',
      image: '/profiles/1e.jpg',
    },
    {
      name: 'Kiran Joshi',
      role: 'App Developer',
      image: '/profiles/1f.png',
    },{
      name: 'Shamyutha Gembali',
      role: 'Full Stack Developer',
      image: '/profiles/1a.png',
    },
    {
      name: 'Swathi Rao',
      role: 'Frontend Developer',
      image: '/profiles/1b.png',
    },
    {
      name: 'Ravi Kumar',
      role: 'AI/ML Engineer',
      image: '/profiles/1a.png',
    },
    {
      name: 'Anjali Mehra',
      role: 'UI/UX Designer',
      image: '/profiles/1d.webp',
    },
    {
      name: 'Vikram Reddy',
      role: 'Data Analyst',
      image: '/profiles/1e.jpg',
    },
    {
      name: 'Kiran Joshi',
      role: 'App Developer',
      image: '/profiles/1f.png',
    },
    // ... more repeated entries
  ];

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    container.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => {
        const next = (prev + 1) % team.length;
        scroll("right");
        return next;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [team.length]);

  return (
    <div className="bg-[#0B0F34] text-white py-12 px-4">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#ffffff] hover:cursor-default text-center">
        Domain Experts
      </h1>
      {/* Display Selected Profile */}
      <div className="text-center mb-10">
        <h3 className="text-xl font-bold flex items-center justify-center gap-2">
          <span className="w-1.5 h-6 bg-yellow-400 block rounded-sm" />
          <span className="text-white">{team[selected].name}</span>
        </h3>
        <p className="text-gray-400 mt-1 text-lg">{team[selected].role}</p>
      </div>

      {/* Carousel Section */}
      <div className="flex items-center justify-center relative">
        <button
          onClick={() => {
            scroll("left");
            setSelected((prev) => (prev - 1 + team.length) % team.length);
          }}
          className="absolute left-2 z-10 p-1 rounded-full hover:bg-gray-700/30"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-400" />
        </button>

        <div
          id="carousel"
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide px-10"
        >
          {team.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className={`rounded-full border-4 transition duration-300 shrink-0 ${
                selected === idx
                  ? "border-white scale-105"
                  : "border-transparent opacity-80"
              } cursor-pointer`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-20 w-20 object-cover rounded-full"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            scroll("right");
            setSelected((prev) => (prev + 1) % team.length);
          }}
          className="absolute right-2 z-10 p-1 rounded-full hover:bg-gray-700/30"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
