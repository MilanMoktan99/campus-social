import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/news", label: "News" },
    { to: "/events", label: "Events" },
    { to: "/clubs", label: "Clubs" },
    { to: "/friends", label: "Friends" },
    { to: "/success-stories", label: "Success Stories" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 shadow-sm transition-all duration-300
    ${
      isScrolled
        ? "py-0 bg-white/50 backdrop-blur-md"
        : "py-3 bg-white/50 backdrop-blur-md"
    }`}
      >
        {/* Left section */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="flex gap-2 items-center font-medium text-2xl">
            <img src={assets.logo} alt="logo" className="w-20 h-20" />
            Campus Mela
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className="flex items-center flex-col">
                <p>{label}</p>
                {/* Original style hr: always visible for active, hidden otherwise */}
                <hr className="w-2/4 h-[1.5px] bg-gray-800 border-none hidden" />
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/70 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
          <FiMenu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <FiX size={28} />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 p-5">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsSidebarOpen(false)}
              className="font-medium"
            >
              {label}
            </NavLink>
          ))}
        </ul>

        <div className="p-5">
          <button
            className="w-full bg-black text-white rounded-full px-6 py-2 hover:bg-black/60 transition-colors"
            onClick={() => console.log("Show login form")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
