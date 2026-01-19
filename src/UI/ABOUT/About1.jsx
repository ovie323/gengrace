import React from 'react'
import LOGO from "../../assets/LOGO.png";// // <-- replace with your own image

function About1() {
  return (
     <section className="bg-[#E7EEF7]  relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${LOGO.png})` }}>
        <div className="absolute inset-0 bg-[#E7EEF7] "></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-3">
            About <span className="text-[#C7A86D]">GenGrace Ventures</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Quality Tailoring Materials You Can Trust
          </p>
        </div>
      </section>
  )
}

export default About1