import React from "react";
import { useParams, Link } from "react-router-dom";
import Fabric1 from "../../assets/Fabric1.jpg";
import Fabric2 from "../../assets/Fabric2.jpg";
import Fabric3 from "../../assets/Fabric3.webp";
import Fabric4 from "../../assets/Fabric4.jpg";

const orderData = {
  GGV12345: {
    product: "Luxury Cotton Fabric",
    image: Fabric1,
    status: "Processing – Your order is being prepared.",
  },
  GGV67890: {
    product: "Silky Ankara Print",
    image: Fabric2,
    status: "Shipped – Your order is on its way!",
  },
  GGV54321: {
    product: "Classic Wool Blend",
    image: Fabric3,
    status: "Delivered – Your order has arrived.",
  },
  GGV98765: {
    product: "Elegant Satin Fabric",
    image: Fabric4,
    status: "Pending – Awaiting confirmation.",
  },
};

const Track2 = () => {
  const { id } = useParams();
  const order = orderData[id?.toUpperCase()];
  const whatsappNumber = "2349012345678"; // replace with your number

  if (!order) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          background: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
        }}
      >
        <h2 className="text-white text-3xl font-semibold mb-4">
          ❌ Order Not Found
        </h2>
        <p className="text-gray-300 mb-8">
          Please check your tracking ID or contact support.
        </p>
        <Link
          to="/Track1"
          className="bg-[#C7A86D] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b7924f] transition"
        >
          Back to Tracking
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{
        background: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
      }}
    >
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Order Details
        </h2>

        <img
          src={order.image}
          alt={order.product}
          className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
        />

        <h3 className="text-2xl font-semibold text-[#C7A86D] mb-2">
          {order.product}
        </h3>
        <p className="text-gray-200 text-lg mb-8">{order.status}</p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi! I’d like to know more about my order (${id}).`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
        >
          💬 Chat with Support
        </a>

        <div className="mt-8">
          <Link
            to="/Track1"
            className="text-[#C7A86D] hover:text-[#b7924f] underline"
          >
            ← Back to Track Another Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track2;
