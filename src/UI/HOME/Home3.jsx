import React from "react";
import { ShieldCheck, Sparkles, Package, Heart } from "lucide-react"; // icons

const features = [
  {
    id: 1,
    icon: <ShieldCheck size={42} className="text-[#C7A86D]" />,
    title: "Trusted Quality",
    description:
      "We source only premium materials to ensure lasting quality, strength, and beauty in every tailoring project.",
  },
  {
    id: 2,
    icon: <Sparkles size={42} className="text-[#C7A86D]" />,
    title: "Elegant Variety",
    description:
      "From rich fabrics to refined accessories, our collection inspires creativity and sophisticated craftsmanship.",
  },
  {
    id: 3,
    icon: <Package size={42} className="text-[#C7A86D]" />,
    title: "Reliable Supply",
    description:
      "We maintain steady stock and fast delivery, helping you meet your clients’ needs without delays.",
  },
  {
    id: 4,
    icon: <Heart size={42} className="text-[#C7A86D]" />,
    title: "Customer Care",
    description:
      "Our support team ensures a smooth shopping experience — your satisfaction drives everything we do.",
  },
];

const Home3 = () => {
  return (
    <section className="bg-[#F9F7F4] py-20 px-6"> 
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B1E0E] tracking-tight mb-3">
          Why Choose <span className="text-[#C7A86D]">GenGrace Ventures</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We combine quality, consistency, and care to help tailors and designers bring excellence to life.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white/80 backdrop-blur-sm border border-[#E8E1D9]
                       rounded-2xl shadow-sm hover:shadow-xl p-8 text-center
                       transform hover:-translate-y-2 hover:scale-105
                       transition-all duration-500 ease-out"
          >
            <div className="flex justify-center mb-5">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#3B1E0E] mb-3 tracking-tight">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home3;
