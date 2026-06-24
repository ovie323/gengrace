import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PackageSearch, ArrowRight } from "lucide-react";

const Track1 = () => {
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleTrack = () => {
    if (!trackingId.trim()) {
      setError("Please enter a tracking ID.");
      return;
    }
    if (trackingId.toUpperCase().startsWith("GGV")) {
      navigate(`/Track2/${trackingId}`);
    } else {
      setError("Order not found. Please check your tracking ID.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1420] flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-lg">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-[#C7A86D]/10 border border-[#C7A86D]/20 flex items-center justify-center">
            <PackageSearch size={36} className="text-[#C7A86D]" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#C7A86D] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Order Tracking
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Track Your Order
          </h2>
          <p className="text-gray-400">
            Enter your tracking ID below to check your order status.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Tracking ID (e.g. GGV12345)"
              value={trackingId}
              onChange={(e) => { setTrackingId(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              className="flex-1 bg-white/5 border border-white/10 focus:border-[#C7A86D]/60 text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none transition-colors duration-200 text-sm"
            />
            <button
              onClick={handleTrack}
              className="flex items-center justify-center gap-2 bg-[#C7A86D] hover:bg-[#b7924f] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#C7A86D]/30 whitespace-nowrap"
            >
              Track Order
              <ArrowRight size={16} />
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
              {error}
            </p>
          )}

          <p className="text-gray-600 text-xs mt-5 text-center">
            Your tracking ID was sent to your email or WhatsApp after your order was confirmed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Track1;
