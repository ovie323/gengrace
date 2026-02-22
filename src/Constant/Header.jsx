import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingCart,
  Search,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../UI/Context/Searchcontext";
import { useCart } from "../UI/Context/CartContext";
import Cart from "../UI/CART/Cart";
import COMPANYLOGO from "../assets/LOGO.png";

const Header = () => {
  // WhatsApp: +2348188594189
  const { searchTerm, setSearchTerm } = useSearch();
  const { getTotalItems } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchTerm.trim()) {
        navigate('/Mainproduct');
        setSearchOpen(false);
        setShowSearch(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/Mainproduct" },
    { name: "Track", path: "/Maintrack" },
    { name: "About Us", path: "/Mainabout" },
    { name: "Contact", path: "/MainContact" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-[#1E2A38]/95 backdrop-blur-md shadow-md text-white transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-[#C7A86D] font-bold text-xl tracking-wide hover:text-[#E3C98C] transition-colors duration-200 flex items-center gap-2"
          >
            <img src={COMPANYLOGO} alt="Company Logo" className="h-12 w-12" />
            GenGrace Ventures
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 text-white hover:text-[#E3C98C] ${
                  location.pathname === item.path ? "text-[#E3C98C]" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-[#E3C98C] transition-colors duration-200"
            >
              <Search size={20} />
            </button>

            <a
              href="https://wa.me/2348024344396"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E3C98C] transition-colors duration-200"
            >
              <MessageCircle size={20} />
            </a>

            <button 
              onClick={() => setCartOpen(true)}
              className="hover:text-[#E3C98C] transition-colors duration-200 relative"
            >
              <ShoppingCart size={22} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#C7A86D] text-[#1E2A38] text-xs font-bold px-1.5 rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#C7A86D] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="bg-[#EADDCB] text-[#1E2A38] px-6 py-3 shadow-inner transition-all duration-500">
            <div className="max-w-3xl mx-auto flex items-center">
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleSearch}
                placeholder="Search for tailoring materials..."
                className="flex-1 bg-white text-gray-800 rounded-full px-4 py-2 focus:outline-none border border-[#C7A86D] placeholder-gray-500"
              />
              <button
                onClick={handleSearch}
                className="ml-2 bg-[#C7A86D] text-white px-4 py-2 rounded-full hover:bg-[#b7924f] transition"
              >
                Search
              </button>


            </div>
          </div>
        )}

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#1E2A38]/95 backdrop-blur-md border-t border-[#C7A86D] px-6 py-4 space-y-4 text-sm font-medium transition-all duration-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-white hover:text-[#E3C98C] transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Icons for Mobile */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-600">
              {/* Search */}
<div className="relative">
  <button
    onClick={() => setShowSearch(!showSearch)}
    className="hover:text-[#E3C98C] transition-colors duration-200"
  >
    <Search size={20} />
  </button>

  {showSearch && (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={handleSearch}
      className="absolute right-0 mt-2 bg-white text-black rounded-md px-3 py-1 text-sm w-48 shadow-lg focus:outline-none"
    />
  )}
</div>


              <a
                href="https://wa.me/2348024344396"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E3C98C] transition-colors duration-200"
              >
                <MessageCircle size={20} />
              </a>

              <button 
                onClick={() => setCartOpen(true)}
                className="hover:text-[#E3C98C] transition-colors duration-200 relative"
              >
                <ShoppingCart size={22} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-2 bg-[#C7A86D] text-[#1E2A38] text-xs font-bold px-1.5 rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20"></div>
      
      {/* Cart Modal */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
