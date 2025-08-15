// src/components/SuccessStories.jsx
import React from "react";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  return (
    <section className="mt-16 mb-20">
      <h2 className="text-2xl font-bold mb-4">Student Success Stories</h2>
      <div className="text-center">
        <p className="mb-6">
          Discover how students are making an impact on campus and beyond.
        </p>
        <Link
          to="/success-stories"
          className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-500 transition-colors"
        >
          Read Stories
        </Link>
      </div>
    </section>
  );
};

export default SuccessStories;
