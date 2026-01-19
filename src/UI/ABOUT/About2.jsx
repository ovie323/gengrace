import React from "react";
import owner from "../../assets/owner.jpg";

const About2 = () => {
  return (
    <div className="bg-[#E7EEF7]  text-gray-800 min-h-screen">
      {/* Hero Section */}
      

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4A1C1C] mb-6">
          Our Story
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          GenGrace Ventures was founded with a passion for empowering tailors and
          fashion designers with premium materials that inspire creativity.
          Over the years, we’ve built a reputation for providing only the best
          quality fabrics, threads, zippers, and accessories — ensuring every
          stitch tells a story of excellence.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-[#E7EEF7]  py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4A1C1C] mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            To deliver exceptional tailoring materials that support creativity,
            craftsmanship, and confidence in every tailor.  
            We are committed to providing quality, affordability, and trust — one
            fabric at a time.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={owner}
          alt="Tailoring workspace"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold text-[#4A1C1C] mb-3">
            Creativity Meets Quality
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every product we offer is carefully sourced and tested to meet the
            highest standards of durability and beauty. Whether you’re a
            professional tailor or a fashion enthusiast, GenGrace Ventures is
            here to help you create with confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About2;
