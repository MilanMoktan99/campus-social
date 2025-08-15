import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiX, FiMenu, FiBell } from "react-icons/fi";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const navigate = useNavigate();
  const { currentUser, logout } = useAppContext();
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileCard(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowProfileCard(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
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
                <hr className="w-2/4 h-[1.5px] bg-gray-800 border-none hidden" />
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Notification Icon */}
          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => navigate("/notifications")}
          >
            <FiBell
              size={24}
              className="cursor-pointer text-gray-700 hover:text-black transition-colors"
            />
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded shadow-lg">
                Notifications
              </div>
            )}
          </div>

          {/* Profile chip and dropdown (only when logged in) */}
          {currentUser && (
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center gap-2 px-3 py-1.5 bg-white/70 backdrop-blur rounded-full border border-gray-200 hover:shadow"
                onClick={() => setShowProfileCard(!showProfileCard)}
              >
                <img
                  src={currentUser.photoURL || "https://i.pravatar.cc/80"}
                  alt={currentUser.displayName || currentUser.email}
                  className="w-7 h-7 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://i.pravatar.cc/80";
                  }}
                />
                <span className="text-sm text-gray-800 max-w-[120px] truncate">
                  {currentUser.displayName || currentUser.email}
                </span>
              </button>

              {showProfileCard && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl border border-gray-100 shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={currentUser.photoURL || "https://i.pravatar.cc/80"}
                      alt={currentUser.displayName || currentUser.email}
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://i.pravatar.cc/80";
                      }}
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 truncate">
                        {currentUser.displayName || "Welcome!"}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {currentUser.email}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-center"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => navigate("/profile")}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 text-center"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => navigate("/friends")}
                      className="px-3 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg text-center"
                    >
                      Friends
                    </button>
                    <button
                      onClick={() => navigate("/events")}
                      className="px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-center"
                    >
                      Events
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentUser ? (
            <button
              className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                className="bg-white text-black border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-200"
                onClick={() => {
                  setAuthMode("signup");
                  setShowAuthModal(true);
                }}
              >
                Sign Up
              </button>
              <button
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => {
                  setAuthMode("login");
                  setShowAuthModal(true);
                }}
              >
                Login
              </button>
            </div>
          )}
        </div>

        {/* Mobile Section */}
        <div className="md:hidden flex items-center gap-4">
          {/* Notification Icon */}
          <FiBell
            size={24}
            className="cursor-pointer text-gray-700 hover:text-black transition-colors"
            onClick={() => navigate("/notifications")}
          />

          {/* Mobile Menu Button */}
          <button onClick={() => setIsSidebarOpen(true)}>
            <FiMenu size={28} />
          </button>
        </div>
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
          {currentUser ? (
            <div className="space-y-3">
              <button
                className="w-full bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition-colors"
                onClick={() => {
                  setIsSidebarOpen(false);
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </button>
              <button
                className="w-full bg-gray-100 text-gray-800 rounded-full px-6 py-2 hover:bg-gray-200 transition-colors"
                onClick={() => {
                  logout();
                  setIsSidebarOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                className="w-full bg-white text-black border-2 border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all duration-200"
                onClick={() => {
                  setIsSidebarOpen(false);
                  setAuthMode("signup");
                  setShowAuthModal(true);
                }}
              >
                Sign Up
              </button>
              <button
                className="w-full bg-black text-white rounded-full px-6 py-2 hover:bg-black/60 transition-colors"
                onClick={() => {
                  setIsSidebarOpen(false);
                  setAuthMode("login");
                  setShowAuthModal(true);
                }}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;
