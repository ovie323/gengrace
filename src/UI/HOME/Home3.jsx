import React from "react";
import { ShieldCheck, Sparkles, Package, Heart } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description: "We source only premium materials to ensure lasting quality, strength, and beauty in every tailoring project.",
  },
  {
    icon: Sparkles,
    title: "Elegant Variety",
    description: "From rich fabrics to refined accessories, our collection inspires creativity and sophisticated craftsmanship.",
  },
  {
    icon: Package,
    title: "Reliable Supply",
    description: "We maintain steady stock and fast delivery, helping you meet your clients' needs without delays.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Our support team ensures a smooth shopping experience — your satisfaction drives everything we do.",
  },
];

const Home3 = () => {
  return (
    <section className="py-24 px-6 bg-[#0B1420]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Why Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Choose <span className="text-[#C7A86D]">GenGrace</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine quality, consistency, and care to help tailors and designers bring excellence to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 hover:border-[#C7A86D]/50 rounded-2xl p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/8 hover:shadow-xl hover:shadow-[#C7A86D]/10"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#C7A86D]/10 border border-[#C7A86D]/20 mb-6 group-hover:bg-[#C7A86D]/20 transition-colors duration-300">
                <item.icon size={26} className="text-[#C7A86D]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home3;
