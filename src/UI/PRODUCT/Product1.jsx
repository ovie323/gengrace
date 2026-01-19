import React, { useState } from "react";
import { useSearch } from "../Context/Searchcontext";
import { useCart } from "../Context/CartContext";
import { Star, ShoppingCart, Filter } from "lucide-react";
import { products, productCategories } from "../../data/products";

const Product1 = () => {
  const { searchTerm } = useSearch();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const whatsappNumber = "2349012345678";

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{
        background:
          "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Premium Tailoring Materials
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Explore our luxurious range of high-quality fabrics and accessories
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#C7A86D] text-white shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
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

export default Product1;
