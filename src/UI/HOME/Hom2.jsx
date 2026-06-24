import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const WHATSAPP = "2348024344396";

const Hom2 = () => {
  const { addToCart } = useCart();
  const featured = products.slice(0, 6);

  const handleWhatsApp = (product) => {
    const msg = encodeURIComponent(`Hi GenGrace Ventures! I'm interested in ${product.name} (₦${product.price.toLocaleString()}).`);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <section className="bg-[#06090F] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#C7A86D]" />
              <span className="text-[#C7A86D] text-xs font-semibold tracking-[0.3em] uppercase">
                Featured Collection
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Our Finest <span className="text-[#C7A86D]">Materials</span>
            </h2>
          </div>
          <Link
            to="/Mainproduct"
            className="inline-flex items-center gap-2 text-[#C7A86D] hover:text-white text-sm font-semibold transition-colors duration-200 group"
          >
            View full catalogue
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Product grid — 3 cols with one large feature card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">

          {/* Large feature card */}
          <div className="group relative md:row-span-2 bg-[#0D1520] overflow-hidden">
            <img
              src={featured[0]?.image}
              alt={featured[0]?.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              style={{ minHeight: "360px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[#C7A86D] text-xs font-semibold tracking-widest uppercase">Featured</span>
              <h3 className="text-white text-xl font-bold mt-1 mb-1">{featured[0]?.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{featured[0]?.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#C7A86D] text-lg font-bold">₦{featured[0]?.price.toLocaleString()}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(featured[0])}
                    className="bg-[#C7A86D] hover:bg-[#b7924f] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleWhatsApp(featured[0])}
                    className="bg-white/10 hover:bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded-full transition-colors duration-200"
                  >
                    <MessageCircle size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Small cards */}
          {featured.slice(1).map((product) => (
            <div key={product.id} className="group relative bg-[#0D1520] overflow-hidden flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-32 flex-shrink-0 overflow-hidden" style={{ height: "140px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1520] hidden md:block" />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center p-4 flex-1">
                <span className="text-[#C7A86D] text-[10px] font-semibold tracking-widest uppercase mb-1">
                  {product.category}
                </span>
                <h3 className="text-white text-sm font-semibold mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-gray-500 text-xs line-clamp-1 mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#C7A86D] text-sm font-bold">₦{product.price.toLocaleString()}</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-[#C7A86D]/20 hover:bg-[#C7A86D] text-[#C7A86D] hover:text-white text-[10px] font-semibold px-3 py-1.5 rounded-full border border-[#C7A86D]/30 transition-all duration-200"
                    >
                      Cart
                    </button>
                    <button
                      onClick={() => handleWhatsApp(product)}
                      className="bg-white/5 hover:bg-green-600 text-white text-[10px] p-1.5 rounded-full transition-colors duration-200"
                    >
                      <MessageCircle size={11} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hom2;
