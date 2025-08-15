// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Campus Mela</h2>
            <p className="text-gray-400 text-sm">
              Connecting students, clubs, and events in one place.  
              Stay informed and engaged with your campus life.
            </p>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/events" className="hover:text-white">Events</Link></li>
              <li><Link to="/clubs" className="hover:text-white">Clubs</Link></li>
              <li><Link to="/news" className="hover:text-white">News</Link></li>
              <li><Link to="/success-stories" className="hover:text-white">Success Stories</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} CampusConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
