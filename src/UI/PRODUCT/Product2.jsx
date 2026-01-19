import React, { useState } from "react";
import { useSearch } from "../Context/Searchcontext";
import { useCart } from "../Context/CartContext";
import { Star, ShoppingCart, Filter } from "lucide-react";
import { productCategories } from "../../data/products";
import Fabric2 from "../../assets/Fabric2.jpg";
import Fabric3 from "../../assets/Fabric3.webp";
import Fabric4 from "../../assets/Fabric4.jpg";
import Fabric5 from "../../assets/Fabric5.jpg";
import Logo3 from "../../assets/Logo3.jpg";
import Logo4 from "../../assets/Logo4.jpg";
import APPLIQUE from "../../assets/APPLIQUE.jpg";

const product2Items = [
  {
    id: 11,
    name: "Silky Ankara Print",
    category: "fabrics",
    price: 3200,
    image: Fabric2,
    description: "Vibrant African print fabric with silky smooth texture",
    inStock: true,
    rating: 4.9,
    reviews: 18,
  },
  {
    id: 12,
    name: "Classic Wool Blend",
    category: "fabrics",
    price: 4500,
    image: Fabric3,
    description: "High-quality wool blend ideal for suits and coats",
    inStock: true,
    rating: 4.7,
    reviews: 31,
  },
  {
    id: 13,
    name: "Premium Cotton Blend",
    category: "fabrics",
    price: 3800,
    image: Fabric3,
    description: "Soft cotton blend perfect for everyday wear",
    inStock: true,
    rating: 4.6,
    reviews: 25,
  },
  {
    id: 14,
    name: "Elegant Satin Fabric",
    category: "fabrics",
    price: 3800,
    image: Fabric4,
    description: "Luxurious satin fabric for evening wear and formal attire",
    inStock: true,
    rating: 4.6,
    reviews: 12,
  },
  {
    id: 15,
    name: "Premium Lace Fabric",
    category: "fabrics",
    price: 5200,
    image: Fabric5,
    description: "Delicate lace fabric perfect for bridal and special occasion wear",
    inStock: true,
    rating: 4.9,
    reviews: 27,
  },
  {
    id: 16,
    name: "Designer Collection",
    category: "accessories",
    price: 2800,
    image: Logo3,
    description: "Premium designer accessories for professional tailoring",
    inStock: true,
    rating: 4.8,
    reviews: 42,
  },
  {
    id: 17,
    name: "Professional Tools Set",
    category: "tools",
    price: 3500,
    image: Logo4,
    description: "Complete set of professional tailoring tools",
    inStock: true,
    rating: 4.9,
    reviews: 35,
  },
  {
    id: 18,
    name: "Applique Design",
    category: "accessories",
    price: 2200,
    image: APPLIQUE,
    description: "Beautiful applique designs for decorative embellishments",
    inStock: true,
    rating: 4.7,
    reviews: 31,
  },
];

const Product2 = () => {
  const { searchTerm } = useSearch();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const whatsappNumber = "2349012345678";

  const filteredProducts = product2Items.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div
      className="min-h-screen px-6"
      style={{
        background:
          "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
      }}
    >
      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto pb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Out of Stock
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#C7A86D]">
                    ₦{product.price.toLocaleString()}
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? "bg-[#C7A86D] text-white hover:bg-[#b7924f]"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in ${encodeURIComponent(
                      product.name
                    )} - ₦${product.price.toLocaleString()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Filter size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-300 text-lg">
            No products found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Product2;
