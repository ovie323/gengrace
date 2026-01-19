import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Logo2 from "../../assets/Logo2.jpg";
import Logo3 from "../../assets/Logo3.jpg";
import Logo4 from "../../assets/Logo4.jpg";
import Logo5 from "../../assets/Logo5.webp";
import Logo6 from "../../assets/Logo6.jpg";
import Logo7 from "../../assets/Logo7.jpeg";
import SCISSORS from "../../assets/SCISSORS.jpg";
import ELASTIC from "../../assets/ELASTIC.jpg";
import MIKADO from "../../assets/MIKADO.jpg";
import buttons from "../../assets/buttons.jpg";

const Homel = () => {
  const slides = [
    {
      image: SCISSORS,
      title: "SCISSORS",
      subtitle: "Everything you need to create excellence",
    },
    {
      image: ELASTIC,
      title: "ELASTIC",
      subtitle: "Supplying quality elastic since day one",
    },
    {
      image: MIKADO,
      title: "MIKADO",
      subtitle: "Supplying quality MIKADO",
    },
    {
      image: Logo5,
      title: "Expert Craftsmanship Tools",
      subtitle: "Professional-grade equipment for perfect results",
    },
    {
      image: buttons,
      title: "Fast & Reliable Delivery",
      subtitle: "Get your supplies delivered right to your doorstep",
    },
    {
      image: Logo7,
      title: "Competitive Wholesale Prices",
      subtitle: "Best rates for bulk orders and regular customers",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="bg-[#F9F7F4] py-8">
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 ">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-2 animate-fadeIn">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-gray-200 animate-fadeIn delay-200">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-[#C7A86D] text-white p-1.5 md:p-2 rounded-full hover:bg-[#b7924f] transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-[#C7A86D] text-white p-1.5 md:p-2 rounded-full hover:bg-[#b7924f] transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#C7A86D] scale-110" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Homel;
