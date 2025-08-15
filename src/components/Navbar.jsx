import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiX, FiMenu, FiBell } from "react-icons/fi";
import { assets } from "../assets/assets";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    let unsubscribe = () => {};
    try {
      const auth = getAuth();
      unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    } catch {}
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe && unsubscribe();
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
          <Link
            to="/"
            className="flex gap-2 items-center font-medium text-2xl"
          >
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
            <FiBell size={24} className="cursor-pointer text-gray-700 hover:text-black transition-colors" />
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded shadow-lg">
                Notifications
              </div>
            )}
          </div>

          {/* Profile chip and dropdown (only when logged in) */}
          {user && (
            <div
              className="relative"
              onMouseEnter={() => setShowProfileCard(true)}
              onMouseLeave={() => setShowProfileCard(false)}
            >
              <button
                className="flex items-center gap-2 px-3 py-1.5 bg-white/70 backdrop-blur rounded-full border border-gray-200 hover:shadow"
              >
                <img
                  src={user.photoURL || "https://i.pravatar.cc/80"}
                  alt={user.displayName || user.email}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className="text-sm text-gray-800 max-w-[120px] truncate">{user.displayName || user.email}</span>
              </button>

              {showProfileCard && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl border border-gray-100 shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.photoURL || "https://i.pravatar.cc/80"}
                      alt={user.displayName || user.email}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 truncate">{user.displayName || 'Welcome!'}</p>
                      <p className="text-xs text-gray-600 truncate">{user.email}</p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <button onClick={() => navigate('/profile')} className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 text-center">Profile</button>
                    <button onClick={() => navigate('/friends')} className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-center">Friends</button>
                    <button onClick={() => navigate('/events')} className="px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg text-center">Events</button>
                    <button onClick={() => navigate('/success-stories')} className="px-3 py-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-lg text-center">Stories</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {user ? (
            <button
              className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
              onClick={async () => {
                try { await signOut(getAuth()); } catch {}
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
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
          {user ? (
            <button
              className="w-full bg-gray-100 text-gray-800 rounded-full px-6 py-2 hover:bg-gray-200 transition-colors"
              onClick={async () => {
                try { await signOut(getAuth()); } catch {}
                setIsSidebarOpen(false)
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="w-full bg-black text-white rounded-full px-6 py-2 hover:bg-black/60 transition-colors"
              onClick={() => { setIsSidebarOpen(false); navigate('/login') }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
