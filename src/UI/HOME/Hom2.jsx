import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

const WHATSAPP = "2348024344396";

const Hom2 = () => {
  const featured = products.slice(0, 8);

  const handleWhatsApp = (product) => {
    const msg = encodeURIComponent(`Hi GenGrace Ventures! I'm interested in ${product.name} (₦${product.price.toLocaleString()}). Can you provide more details?`);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <section className="py-24 px-6 bg-[#0F1923]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-[#C7A86D]">Materials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handpicked materials to bring your creative designs to life with elegance and quality.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group bg-[#1A2535] rounded-xl overflow-hidden border border-white/5 hover:border-[#C7A86D]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C7A86D]/10"
            >
              <div className="relative overflow-hidden h-36">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2535]/80 via-transparent to-transparent" />
                <div className="absolute top-2 right-2">
                  <span className="bg-[#C7A86D] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    In Stock
                  </span>
                </div>
              </div>

              <div className="p-3">
                <h3 className="text-white font-semibold text-sm mb-0.5 truncate">{product.name}</h3>
                <p className="text-gray-500 text-xs mb-3 line-clamp-1">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#C7A86D] text-sm font-bold">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleWhatsApp(product)}
                    className="flex items-center gap-1 bg-green-600 hover:bg-green-500 text-white text-xs px-2.5 py-1.5 rounded-lg transition-colors duration-200"
                  >
                    <MessageCircle size={11} />
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            to="/Mainproduct"
            className="inline-flex items-center gap-2 bg-[#C7A86D] hover:bg-[#b7924f] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C7A86D]/30"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hom2;
