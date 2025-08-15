// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HeroSection = () => {
  return (
    <div className="w-full md:w-3/4 relative flex items-center justify-center bg-black/60 text-white rounded-lg shadow-lg overflow-hidden h-[50vh] md:h-[80vh] mx-auto">
      <img
        src={assets.heroImage}
        alt="Campus Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Campus Mela - "Where Campus Life Comes Alive"
        </h1>
        <p className="text-md md:text-xl mb-10">
          Connect, Engage, and Celebrate Campus Life!
        </p>
        <Link
          to="/events"
          className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          Explore Events
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
