import React, { useEffect, useState } from "react";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [c1, c2, c3, c4, c5];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getClass = (index) => {
    if (index === activeIndex) {
      return "scale-105 z-10 shadow-xl";
    }

    return "brightness-75 scale-90 hidden md:block shadow-lg";
  };

  return (
    <div className=" bg-[#8FDACF] dark:bg-[#444444] w-full">
      <div className="md:pt-6 pt-3">
        <h1 className="md:text-4xl text-2xl font-bold text-teal-800 dark:text-white">
          FROM THE ARCHIVES
        </h1>
      </div>
      <div className="w-full flex items-center justify-evenly md:py-8 py-6">
        <button onClick={prevSlide}>
          <ChevronLeft className="text-gray-700 dark:text-white cursor-pointer" size={40} />
        </button>

        <div className="flex gap-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className={`md:w-64 w-56 h-auto transition duration-300 ease-in-out rounded-2xl ${getClass(
                index
              )}`}
            />
          ))}
        </div>

        <button onClick={nextSlide}>
          <ChevronRight className="text-gray-700 dark:text-white cursor-pointer" size={40} />
        </button>
      </div>
    </div>
  );
};
