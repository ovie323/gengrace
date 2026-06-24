import React from "react";
import LOGO from "../../assets/LOGO.png";

const About1 = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: "420px" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1420] via-[#1E2A38] to-[#0B1420]" />

      {/* Decorative ring */}
      <div className="absolute w-96 h-96 rounded-full border border-[#C7A86D]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-64 h-64 rounded-full border border-[#C7A86D]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 text-center px-6">
        <img src={LOGO} alt="GenGrace Logo" className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Our Story
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          About <span className="text-[#C7A86D]">GenGrace</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Quality Tailoring Materials You Can Trust
        </p>
      </div>
    </section>
  );
};

export default About1;
