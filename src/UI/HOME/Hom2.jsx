import React from "react";
import { MessageCircle } from "lucide-react";
import { products } from "../../data/products";

const Hom2 = () => {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const whatsappNumber = "2349012345678"; // Example: 2349012345678 for +234 901 234 5678
  const message = encodeURIComponent("Hello GenGrace Ventures! I’d like to buy some tailoring materials.");


  const handleProductWhatsApp = (product) => {
    const productMessage = encodeURIComponent(`Hi GenGrace Ventures! I'm interested in ${product.name} (₦${product.price.toLocaleString()}). Can you provide more details?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${productMessage}`, "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const featuredProducts = products.slice(0, 5);

  return (
    <section className="bg-gradient-to-b from-[#F8F5F0] to-[#EDE4D8] py-20 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B1E0E] mb-4 tracking-tight">
          Our <span className="text-[#C7A86D]">Tailoring Materials</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Handpicked materials to bring your creative designs to life with elegance and quality.
        </p>
      </div>

      {/* Product Gallery */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl
                       transform hover:scale-105 transition duration-500 ease-out w-64 bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-48 rounded-t-2xl"
            />

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-[#C7A86D] font-bold mb-3">
                ₦{product.price.toLocaleString()}
              </p>
              
              <button
                onClick={() => handleProductWhatsApp(product)}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium transition-colors ${
                  product.inStock
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <MessageCircle size={16} />
                {product.inStock ? "Chat on WhatsApp" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 text-white text-lg font-medium px-8 py-3 rounded-full 
                     shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          Contact Us
        </button>
        <a
          href="/Mainproduct"
          className="bg-[#C7A86D] text-white text-lg font-medium px-8 py-3 rounded-full 
                     shadow-md hover:bg-[#b7924f] hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default Hom2;
