import React from "react";
import { ShieldCheck, Sparkles, Package, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "50+", label: "Products" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Quality Assured" },
];

const features = [
  { icon: ShieldCheck, title: "Trusted Quality", description: "Only premium materials that ensure lasting strength and beauty in every project." },
  { icon: Sparkles, title: "Elegant Variety", description: "From rich fabrics to refined accessories — inspiring creativity at every step." },
  { icon: Package, title: "Reliable Supply", description: "Steady stock and fast delivery so you never miss a deadline." },
  { icon: Heart, title: "Customer First", description: "Dedicated support that ensures a seamless experience from browse to delivery." },
];

const Home3 = () => {
  return (
    <section className="bg-[#06090F] py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#0D1520] px-8 py-8 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#C7A86D] mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column: heading + features */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C7A86D]" />
              <span className="text-[#C7A86D] text-xs font-semibold tracking-[0.3em] uppercase">Why GenGrace</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
              Built for Tailors,<br />Loved by Designers
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We combine quality, consistency, and care to help tailors and designers bring excellence to life — every single time.
            </p>
            <Link
              to="/Mainabout"
              className="inline-flex items-center gap-2 border border-[#C7A86D]/40 hover:border-[#C7A86D] text-[#C7A86D] text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right — feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <div
                key={i}
                className="group bg-white/3 border border-white/8 hover:border-[#C7A86D]/30 rounded-2xl p-6 transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C7A86D]/10 border border-[#C7A86D]/20 flex items-center justify-center mb-4 group-hover:bg-[#C7A86D]/20 transition-colors duration-300">
                  <item.icon size={18} className="text-[#C7A86D]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home3;
