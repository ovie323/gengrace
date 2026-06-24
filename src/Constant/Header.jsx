import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, Search, MessageCircle, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../UI/Context/Searchcontext";
import { useCart } from "../UI/Context/CartContext";
import Cart from "../UI/CART/Cart";
import COMPANYLOGO from "../assets/LOGO.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/Mainproduct" },
  { name: "Track Order", path: "/Maintrack" },
  { name: "About Us", path: "/Mainabout" },
  { name: "Contact", path: "/MainContact" },
];

const Header = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const { getTotalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchTerm.trim()) {
        navigate("/Mainproduct");
        setSearchOpen(false);
      }
    }
  };

  const cartCount = getTotalItems();

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#06090F]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-[#C7A86D]/30 group-hover:ring-[#C7A86D]/70 transition-all duration-300">
              <img src={COMPANYLOGO} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-sm tracking-wide">GenGrace</span>
              <span className="text-[#C7A86D] text-[10px] tracking-[0.2em] uppercase font-medium">Ventures</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-sm font-medium group"
                >
                  <span className={`transition-colors duration-200 ${active ? "text-[#C7A86D]" : "text-gray-400 group-hover:text-white"}`}>
                    {item.name}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#C7A86D] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Search size={18} />
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348024344396"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 hidden md:flex items-center justify-center rounded-xl text-gray-400 hover:text-green-400 hover:bg-white/5 transition-all duration-200"
            >
              <MessageCircle size={18} />
            </a>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 relative"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C7A86D] text-[#06090F] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 ml-1"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search dropdown */}
        <div className={`overflow-hidden transition-all duration-400 ${searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-[#06090F]/95 backdrop-blur-xl border-t border-white/5 px-6 md:px-10 py-3">
            <div className="max-w-2xl mx-auto flex gap-3">
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search for fabrics, threads, tools..."
                className="flex-1 bg-white/5 border border-white/10 focus:border-[#C7A86D]/50 text-white placeholder-gray-600 text-sm px-4 py-2.5 rounded-xl outline-none transition-colors duration-200"
              />
              <button
                onClick={handleSearch}
                className="bg-[#C7A86D] hover:bg-[#b7924f] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer — only when not on homepage (hero handles its own spacing) */}
      {location.pathname !== "/" && <div className="h-20" />}

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#06090F] flex flex-col transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-[#C7A86D]/30">
              <img src={COMPANYLOGO} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-sm">GenGrace</span>
              <span className="text-[#C7A86D] text-[10px] tracking-[0.2em] uppercase">Ventures</span>
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-white bg-white/5"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
          {navItems.map((item, i) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
                className={`flex items-center justify-between py-4 border-b border-white/5 transition-all duration-300 ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                <span className={`text-2xl font-bold tracking-tight ${active ? "text-[#C7A86D]" : "text-white"}`}>
                  {item.name}
                </span>
                {active && <span className="w-2 h-2 rounded-full bg-[#C7A86D]" />}
              </Link>
            );
          })}
        </nav>

        <div className="px-8 pb-10 flex items-center gap-4">
          <a
            href="https://wa.me/2348024344396"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <button
            onClick={() => { setCartOpen(true); setMenuOpen(false); }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200 relative"
          >
            <ShoppingCart size={16} />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#C7A86D] text-[#06090F] text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
