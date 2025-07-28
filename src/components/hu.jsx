import React from "react";

const StarRating = ({ rating = 4.5, max = 5 }) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    const curveOffset = Math.sin((i - 1) * (Math.PI / (max - 1))) * -15;

    if (i <= Math.floor(rating)) {
      stars.push(<Star key={i} filled offset={curveOffset} />);
    } else if (i - rating < 1) {
      stars.push(<Star key={i} half offset={curveOffset} />);
    } else {
      stars.push(<Star key={i} offset={curveOffset} />);
    }
  }

  return (
    <div className="text-center my-6">
      <h1 className="sm:text-3xl title-font mb-4 text-[#320A6B] text-lg font-bold">
        Top-Rated by Aadhya Infotech Students
      </h1>
      <div className="flex justify-center gap-2">
        {stars}
      </div>
    </div>
  );
};

const Star = ({ filled = false, half = false, offset = 0 }) => {
  const style = {
    transform: `translateY(${offset}px) scale(1)`,
    transition: "transform 0.4s ease, fill 0.3s ease",
  };

  const strokeProps = {
    stroke: "#320A6B",
    strokeWidth: 0.5,
  };

  if (half) {
    return (
      <svg
        className="w-25 h-25 text-yellow-400 hover:scale-110 hover:rotate-[-3deg]"
        viewBox="0 0 24 24"
        style={style}
        fill="url(#halfGradient)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="halfGradient">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.416 8.253L12 18.896l-7.416 4.954L6 15.597 0 9.75l8.332-1.595z"
          {...strokeProps}
        />
      </svg>
    );
  }

  return (
    <svg
      className={`w-20 h-20 hover:scale-110 hover:rotate-[-3deg] ${
        filled ? "text-yellow-400" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 24 24"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.416 8.253L12 18.896l-7.416 4.954L6 15.597 0 9.75l8.332-1.595z"
        {...strokeProps}
      />
    </svg>
  );
};

export default StarRating;
