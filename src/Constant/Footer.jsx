import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import LOGO from "../assets/LOGO.png";

const WHATSAPP = "2348024344396";

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F4] border-t border-[#E8DDD0]">

      {/* Top CTA band */}
      <div className="bg-[#1E2A38] border-b border-[#2A3A4A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#C7A86D] text-xs font-semibold tracking-[0.3em] uppercase mb-1">Ready to order?</p>
            <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">
              Get premium materials delivered to your door.
            </h3>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C7A86D] hover:bg-[#b7924f] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C7A86D]/30"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
            <Link
              to="/Mainproduct"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#C7A86D] text-white hover:text-[#C7A86D] text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Brand */}
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-[#C7A86D]/40 group-hover:ring-[#C7A86D] transition-all duration-300">
              <img src={LOGO} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#1A1A2E] font-bold text-base">GenGrace</span>
              <span className="text-[#C7A86D] text-[10px] tracking-[0.25em] uppercase font-semibold">Ventures</span>
            </div>
          </Link>

          <p className="text-[#6B7280] text-sm leading-relaxed mb-5 max-w-xs">
            Premium tailoring materials — fabrics, threads, tools, and accessories — trusted by professionals and fashion lovers across Nigeria.
          </p>

          <p className="text-[#C7A86D]/80 text-xs italic border-l-2 border-[#C7A86D]/30 pl-3 text-[#8B7355]">
            "Quality Tailoring Materials You Can Trust."
          </p>

          <div className="flex gap-3 mt-6">
            {[
              { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
              { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
              { href: "mailto:gengraceventures@gmail.com", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-white border border-[#E8DDD0] flex items-center justify-center text-[#9CA3AF] hover:text-[#C7A86D] hover:border-[#C7A86D]/50 hover:shadow-md transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block md:col-span-1" />

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h4 className="text-[#1A1A2E] text-xs font-bold uppercase tracking-[0.2em] mb-6">Navigation</h4>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/Mainproduct" },
              { name: "About Us", path: "/Mainabout" },
              { name: "Track Order", path: "/Maintrack" },
              { name: "Contact", path: "/MainContact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-1.5 text-[#6B7280] hover:text-[#C7A86D] text-sm transition-colors duration-200"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="text-[#1A1A2E] text-xs font-bold uppercase tracking-[0.2em] mb-6">Contact</h4>
          <ul className="space-y-4">
            {[
              { Icon: Phone, text: "+2348024344396", href: "tel:+2348024344396" },
              { Icon: MessageCircle, text: "Chat on WhatsApp", href: `https://wa.me/${WHATSAPP}` },
              { Icon: Mail, text: "gengraceventures@gmail.com", href: "mailto:gengraceventures@gmail.com" },
              { Icon: MapPin, text: "12 Tailors Street, Lagos, Nigeria" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#F5EDE0] border border-[#E8DDD0] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.Icon size={13} className="text-[#C7A86D]" />
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B7280] hover:text-[#C7A86D] text-sm transition-colors duration-200 leading-relaxed"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-[#6B7280] text-sm leading-relaxed">{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E8DDD0] bg-[#F5EDE0]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#9CA3AF] text-xs">
            © {new Date().getFullYear()} GenGrace Ventures. All Rights Reserved.
          </p>
          <p className="text-[#C7A86D]/60 text-xs font-medium">
            Crafted with care · Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
