import React, { useState, useEffect, useRef } from "react";

const sponsors = [
  {
    name: "91.9 Friends FM",
    role: "Exclusive Radio Partner",
    link: "https://www.instagram.com/919friendsfm",
    logo: "/assets/friendsfm-logo.png",
  },
  {
    name: "Calcutta Capturers",
    role: "Social Media Partners",
    link: "https://www.instagram.com/calcuttacapturers",
    logo: "/assets/calcutta-capturers-logo.png",
  },
  {
    name: "Photoartisan",
    role: "Social Media Partners",
    link: "https://www.instagram.com/photoartisan00",
    logo: "/assets/photoartisan-logo.png",
  },
];

export const SponsorCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % sponsors.length);
      }, 2000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, isHovered]);

  return (
    <div className="relative max-w-[90%] md:max-w-xl mx-auto text-center p-4 md:p-6 bg-white dark:bg-gray-700 shadow-xl rounded-2xl">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Meet Our Sponsor
      </h2>

      <div className="relative h-32 md:h-40 overflow-hidden flex justify-center items-center">
        {sponsors.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={s.logo}
              alt={s.name}
              className="max-h-28 md:max-h-36 object-contain hover:scale-105 transition-transform duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
        ))}
      </div>

      <div className="mt-4 transition-opacity duration-1000 ease-in-out">
        <h3 className="text-lg md:text-xl font-semibold text-teal-600 dark:text-white">
          {sponsors[index].name}
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          {sponsors[index].role}
        </p>
      </div>
    </div>
  );
};
