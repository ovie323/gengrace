import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E2A38] text-[#EADDCB] pt-10 pb-6 border-t border-[#C7A86D]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-[#C7A86D] text-xl font-semibold mb-3">
            GenGrace Ventures
          </h2>
          <p className="text-sm leading-relaxed text-[#EADDCB]/90">
            At GenGrace Ventures, we supply premium tailoring materials — fabrics,
            threads, tools, and accessories — trusted by professionals and
            fashion lovers alike.
          </p>
          <p className="text-sm mt-4 italic text-[#C9A34A]/80">
            “Quality Tailoring Materials You Can Trust.”
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#C7A86D] text-lg font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-[#E3C98C] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Mainproduct"
                className="hover:text-[#E3C98C] transition-colors duration-200"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/Mainabout"
                className="hover:text-[#E3C98C] transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Maintrack"
                className="hover:text-[#E3C98C] transition-colors duration-200"
              >
                Track Order
              </Link>
            </li>
            <li>
              <Link
                to="/MainContact"
                className="hover:text-[#E3C98C] transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[#C7A86D] text-lg font-semibold mb-3">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-[#C7A86D]" />
              <span>+234 812 646 6789</span>
            </li>
            <li className="flex items-center space-x-2">
              <MessageCircle size={16} className="text-[#C7A86D]" />
              <span>WhatsApp: +234 812 345 6789</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-[#C7A86D]" />
              <span>info@gengraceventures.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} className="text-[#C7A86D]" />
              <span>12 Tailors Street, Lagos, Nigeria</span>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E3C98C] transition-transform transform hover:scale-110 duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E3C98C] transition-transform transform hover:scale-110 duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:info@gengraceventures.com"
              className="hover:text-[#E3C98C] transition-transform transform hover:scale-110 duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-[#C7A86D]/30 pt-4 text-center text-xs sm:text-sm text-[#EADDCB]/80">
        © {new Date().getFullYear()} GenGrace Ventures. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
