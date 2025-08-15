// src/components/QuickLink.jsx
import React from "react";
import { Link } from "react-router-dom";

const Links = ({ to, imgSrc, label }) => {
  return (
    <Link
      to={to}
      className="relative h-32 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      <img src={imgSrc} alt={label} className="absolute inset-0 w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-black/50"></div>
      <p className="relative z-10 text-white text-lg font-semibold text-center flex items-center justify-center h-full">
        {label}
      </p>
    </Link>
  );
};

export default Links;
