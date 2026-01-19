import React, { useState } from "react";
import { useNavigate } from "react-router-dom";







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
      setError("❌ Order not found. Please check your tracking ID.");
    }
  };

  return (



    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{
        background: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
      }}
    >
      <div className="max-w-lg w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Track Your Order
        </h2>
        <p className="text-gray-300 mb-8">
          Enter your tracking ID below to check your order status.
        </p>

        {/* Input Field */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Tracking ID (e.g. GGV12345)"
            value={trackingId}
            onChange={(e) => {
              setTrackingId(e.target.value);
              setError("");
            }}
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C7A86D] text-gray-800"
          />
          <button
            onClick={handleTrack}
            className="bg-[#C7A86D] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b7924f] transition"
          >
            Track Order
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Track1;
