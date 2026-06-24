import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SCISSORS from "../../assets/SCISSORS.jpg";
import MIKADO from "../../assets/MIKADO.jpg";
import DUTCHESS from "../../assets/DUTCHESS.jpg";

const slides = [
  {
    image: SCISSORS,
    tag: "New Arrivals",
    title: "Craft With\nPrecision",
    sub: "Professional-grade tools for the modern tailor",
  },
  {
    image: MIKADO,
    tag: "Premium Fabrics",
    title: "Wear What\nMatters",
    sub: "Luxurious Mikado fabric for structured, elegant garments",
  },
  {
    image: DUTCHESS,
    tag: "Exclusive Collection",
    title: "Elegance\nIn Every Thread",
    sub: "Duchess satin — the fabric of unforgettable occasions",
  },
];

const Home1 = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const slide = slides[current];

  return (
    <div className="relative w-full bg-[#080E17] overflow-hidden" style={{ height: "100vh", minHeight: "600px", maxHeight: "820px" }}>
      {/* Background image */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${animating ? "opacity-0" : "opacity-100"}`}>
        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C7A86D]" />
            <span className="text-[#C7A86D] text-xs font-semibold tracking-[0.3em] uppercase">
              {slide.tag}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6 whitespace-pre-line">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/Mainproduct"
              className="inline-flex items-center gap-2 bg-[#C7A86D] hover:bg-[#b7924f] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#C7A86D]/30 text-sm"
            >
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link
              to="/Mainabout"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-[#C7A86D] text-white hover:text-[#C7A86D] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators — vertical on right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "h-8 w-1 bg-[#C7A86D]" : "h-3 w-1 bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-8 md:left-20 z-20 flex items-center gap-3">
        <span className="text-[#C7A86D] text-sm font-bold">0{current + 1}</span>
        <div className="w-12 h-px bg-white/20">
          <div
            className="h-full bg-[#C7A86D] transition-all duration-500"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="text-white/30 text-sm">0{slides.length}</span>
      </div>
    </div>
  );
};

export default Home1;
