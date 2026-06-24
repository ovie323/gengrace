import React, { useState } from "react";
import { useSearch } from "../Context/Searchcontext";
import { useCart } from "../Context/CartContext";
import { Star, ShoppingCart, Search } from "lucide-react";
import Fabric2 from "../../assets/Fabric2.jpg";
import Fabric3 from "../../assets/Fabric3.webp";
import Fabric4 from "../../assets/Fabric4.jpg";
import Fabric5 from "../../assets/Fabric5.jpg";
import Logo3 from "../../assets/Logo3.jpg";
import Logo4 from "../../assets/Logo4.jpg";
import APPLIQUE from "../../assets/APPLIQUE.jpg";

const WHATSAPP = "2348024344396";

const product2Items = [
  { id: 11, name: "Silky Ankara Print", category: "fabrics", price: 3200, image: Fabric2, description: "Vibrant African print fabric with silky smooth texture", inStock: true, rating: 4.9, reviews: 18 },
  { id: 12, name: "Classic Wool Blend", category: "fabrics", price: 4500, image: Fabric3, description: "High-quality wool blend ideal for suits and coats", inStock: true, rating: 4.7, reviews: 31 },
  { id: 13, name: "Premium Cotton Blend", category: "fabrics", price: 3800, image: Fabric3, description: "Soft cotton blend perfect for everyday wear", inStock: true, rating: 4.6, reviews: 25 },
  { id: 14, name: "Elegant Satin Fabric", category: "fabrics", price: 3800, image: Fabric4, description: "Luxurious satin fabric for evening wear and formal attire", inStock: true, rating: 4.6, reviews: 12 },
  { id: 15, name: "Premium Lace Fabric", category: "fabrics", price: 5200, image: Fabric5, description: "Delicate lace fabric perfect for bridal and special occasion wear", inStock: true, rating: 4.9, reviews: 27 },
  { id: 16, name: "Designer Collection", category: "accessories", price: 2800, image: Logo3, description: "Premium designer accessories for professional tailoring", inStock: true, rating: 4.8, reviews: 42 },
  { id: 17, name: "Professional Tools Set", category: "tools", price: 3500, image: Logo4, description: "Complete set of professional tailoring tools", inStock: true, rating: 4.9, reviews: 35 },
  { id: 18, name: "Applique Design", category: "accessories", price: 2200, image: APPLIQUE, description: "Beautiful applique designs for decorative embellishments", inStock: true, rating: 4.7, reviews: 31 },
];

const Product2 = () => {
  const { searchTerm } = useSearch();
  const { addToCart } = useCart();

  const filteredProducts = product2Items.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#0B1420] px-6 pb-16">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-600"} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C7A86D] text-xl font-bold">₦{product.price.toLocaleString()}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      product.inStock ? "bg-[#C7A86D] text-white hover:bg-[#b7924f]" : "bg-white/5 text-gray-600 cursor-not-allowed"
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
  );
};

export default Product2;
