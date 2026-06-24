import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Logo5 from "../../assets/Logo5.webp";
import Logo7 from "../../assets/Logo7.jpeg";
import SCISSORS from "../../assets/SCISSORS.jpg";
import ELASTIC from "../../assets/ELASTIC.jpg";
import MIKADO from "../../assets/MIKADO.jpg";
import buttons from "../../assets/buttons.jpg";

const slides = [
  { image: SCISSORS, title: "Precision Tools", subtitle: "Everything you need to create excellence" },
  { image: ELASTIC, title: "Elastic Collection", subtitle: "Supplying quality elastic since day one" },
  { image: MIKADO, title: "Mikado Fabric", subtitle: "Premium quality for structured garments" },
  { image: Logo5, title: "Expert Craftsmanship", subtitle: "Professional-grade equipment for perfect results" },
  { image: buttons, title: "Fast & Reliable Delivery", subtitle: "Get your supplies delivered right to your doorstep" },
  { image: Logo7, title: "Wholesale Prices", subtitle: "Best rates for bulk orders and regular customers" },
];

const Home1 = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  useEffect(() => {
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "520px" }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6">
            <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              GenGrace Ventures
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {slide.title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#C7A86D] hover:border-[#C7A86D] transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#C7A86D] hover:border-[#C7A86D] transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2 bg-[#C7A86D]" : "w-2 h-2 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home1;
