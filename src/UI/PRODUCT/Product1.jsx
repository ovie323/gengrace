import React, { useState } from "react";
import { useSearch } from "../Context/Searchcontext";
import { useCart } from "../Context/CartContext";
import { Star, ShoppingCart, Search } from "lucide-react";
import { products, productCategories } from "../../data/products";

const WHATSAPP = "2348024344396";

const Product1 = () => {
  const { searchTerm } = useSearch();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0B1420] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Products
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Premium Tailoring <span className="text-[#C7A86D]">Materials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our luxurious range of high-quality fabrics and accessories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-[#C7A86D] text-white shadow-lg shadow-[#C7A86D]/30"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-[#C7A86D]/40 hover:text-white"
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#1A2535] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C7A86D]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C7A86D]/10"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2535] via-transparent to-transparent" />
                  {!product.inStock && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      Out of Stock
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-white font-semibold text-base mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#C7A86D] text-xl font-bold">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        product.inStock
                          ? "bg-[#C7A86D] text-white hover:bg-[#b7924f]"
                          : "bg-white/5 text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart size={15} />
                      Add to Cart
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi! I'm interested in ${product.name} - ₦${product.price.toLocaleString()}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-500 text-white px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search size={48} className="text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product1;
