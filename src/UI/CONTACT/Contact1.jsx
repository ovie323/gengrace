import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const WHATSAPP = "2348024344396";

const Contact1 = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "cors",
      });
      if (response.ok) {
        setSubmitMessage("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitMessage("error");
      }
    } catch {
      const msg = encodeURIComponent(`Hi GenGrace Ventures! \n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
      setSubmitMessage("whatsapp");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+2348024344396" },
    { icon: MessageCircle, label: "WhatsApp", value: "+2348024344396", href: `https://wa.me/${WHATSAPP}` },
    { icon: Mail, label: "Email", value: "gengraceventures@gmail.com", href: "mailto:gengraceventures@gmail.com" },
    { icon: MapPin, label: "Address", value: "12 Tailors Street, Lagos, Nigeria" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1420] px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get in <span className="text-[#C7A86D]">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions or want to place an order? We're always happy to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-[#C7A86D]/40 rounded-2xl p-5 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C7A86D]/10 border border-[#C7A86D]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#C7A86D]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-[#C7A86D] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your name", col: 1 },
                { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", col: 1 },
                { name: "subject", label: "Subject", type: "text", placeholder: "How can we help?", col: 2 },
              ].map((field) => (
                <div key={field.name} className={field.col === 2 ? "md:col-span-2" : ""}>
                  <label className="block text-gray-400 text-sm font-medium mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-[#C7A86D]/60 text-white placeholder-gray-600 px-4 py-3 rounded-xl outline-none transition-colors duration-200 text-sm"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your request..."
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-[#C7A86D]/60 text-white placeholder-gray-600 px-4 py-3 rounded-xl outline-none transition-colors duration-200 text-sm resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-[#C7A86D] hover:bg-[#b7924f] disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C7A86D]/30"
                >
                  <Send size={16} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitMessage === "success" && <p className="text-green-400 text-sm mt-3">Message sent successfully!</p>}
                {submitMessage === "error" && <p className="text-red-400 text-sm mt-3">Failed to send. Please try again.</p>}
                {submitMessage === "whatsapp" && <p className="text-yellow-400 text-sm mt-3">Redirected to WhatsApp.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
