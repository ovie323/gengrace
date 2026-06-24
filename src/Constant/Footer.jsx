import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import LOGO from "../assets/LOGO.png";

const WHATSAPP = "2348024344396";

const Footer = () => {
  return (
    <footer className="bg-[#080E17] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={LOGO} alt="Logo" className="w-10 h-10" />
            <span className="text-[#C7A86D] font-bold text-lg">GenGrace Ventures</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Premium tailoring materials — fabrics, threads, tools, and accessories — trusted by professionals and fashion lovers alike.
          </p>
          <p className="text-[#C7A86D]/60 text-sm italic">
            "Quality Tailoring Materials You Can Trust."
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/Mainproduct" },
              { name: "About Us", path: "/Mainabout" },
              { name: "Track Order", path: "/Maintrack" },
              { name: "Contact", path: "/MainContact" },
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-gray-500 hover:text-[#C7A86D] text-sm transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Get in Touch</h3>
          <ul className="space-y-3">
            {[
              { icon: Phone, text: "+2348024344396" },
              { icon: MessageCircle, text: "WhatsApp: +2348024344396", href: `https://wa.me/${WHATSAPP}` },
              { icon: Mail, text: "gengraceventures@gmail.com", href: "mailto:gengraceventures@gmail.com" },
              { icon: MapPin, text: "12 Tailors Street, Lagos, Nigeria" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <item.icon size={15} className="text-[#C7A86D] flex-shrink-0" />
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#C7A86D] text-sm transition-colors duration-200">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">{item.text}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-6">
            {[
              { href: "https://facebook.com", Icon: Facebook },
              { href: "https://instagram.com", Icon: Instagram },
              { href: "mailto:gengraceventures@gmail.com", Icon: Mail },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#C7A86D] hover:border-[#C7A86D]/40 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} GenGrace Ventures. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
