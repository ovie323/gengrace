import React from "react";
import owner from "../../assets/owner.jpg";
import { Target, Gem } from "lucide-react";

const About2 = () => {
  return (
    <div className="bg-[#0B1420] text-gray-300">

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-4">Who We Are</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Our Story</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          GenGrace Ventures was founded with a passion for empowering tailors and fashion designers
          with premium materials that inspire creativity. Over the years, we've built a reputation
          for providing only the best quality fabrics, threads, zippers, and accessories — ensuring
          every stitch tells a story of excellence.
        </p>
      </section>

      {/* Mission + Vision */}
      <section className="py-16 px-6 bg-[#0F1923]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 hover:border-[#C7A86D]/40 rounded-2xl p-8 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C7A86D]/10 border border-[#C7A86D]/20 mb-5">
              <Target size={22} className="text-[#C7A86D]" />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To deliver exceptional tailoring materials that support creativity, craftsmanship, and
              confidence in every tailor. We are committed to quality, affordability, and trust —
              one fabric at a time.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 hover:border-[#C7A86D]/40 rounded-2xl p-8 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C7A86D]/10 border border-[#C7A86D]/20 mb-5">
              <Gem size={22} className="text-[#C7A86D]" />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To become the most trusted supplier of tailoring materials in Nigeria — a brand
              synonymous with quality, elegance, and reliability for every fashion professional.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Text */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={owner}
            alt="Tailoring workspace"
            className="rounded-2xl w-full object-cover shadow-2xl"
            style={{ height: "420px" }}
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-[#C7A86D]/20" />
        </div>
        <div>
          <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Promise
          </p>
          <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">
            Creativity Meets Quality
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Every product we offer is carefully sourced and tested to meet the highest standards
            of durability and beauty. Whether you're a professional tailor or a fashion enthusiast,
            GenGrace Ventures is here to help you create with confidence.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-bold text-[#C7A86D]">500+</p>
              <p className="text-gray-500 text-sm mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C7A86D]">50+</p>
              <p className="text-gray-500 text-sm mt-1">Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#C7A86D]">5+</p>
              <p className="text-gray-500 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About2;
