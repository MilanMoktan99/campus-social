// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Links from "../components/Links";
import UpcomingEvents from "../components/UpcomingEvents";
import SuccessStories from "../components/SuccessStories";
import { assets } from "../assets/assets";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const upcomingEvents = [
    { id: 1, title: "Tech Fest 2025", date: "Aug 25, 2025" },
    { id: 2, title: "Art Exhibition", date: "Sep 5, 2025" },
    { id: 3, title: "Sports Meet", date: "Sep 15, 2025" },
  ];

  const featuredClubs = [
    { id: 1, name: "Coding Club" },
    { id: 2, name: "Drama Club" },
    { id: 3, name: "Photography Club" },
  ];

  const quickLinks = [
    { to: "/events", img: assets.event, label: "Events" },
    { to: "/clubs", img: assets.clubs, label: "Clubs" },
    { to: "/news", img: assets.news, label: "News" },
    { to: "/friends", img: assets.friends, label: "Friends" },
  ];

  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      const auth = getAuth();
      return onAuthStateChanged(auth, setUser);
    } catch {
      return () => {};
    }
  }, []);

  return (
    <div className="px-[60px] pt-32">
      {/* Hero Section with Profile Sidebar when logged in */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <HeroSection />
        </div>
        <div className="hidden md:flex md:col-span-1 flex-col gap-6">
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            {quickLinks.map((link, i) => (
              <Links key={i} to={link.to} imgSrc={link.img} label={link.label} />
            ))}
          </div>

          {/* Profile box when logged in */}
          {user && (
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <img src={user.photoURL || "https://i.pravatar.cc/80"} alt={user.displayName || user.email} className="w-12 h-12 rounded-full object-cover" />
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{user.displayName || 'Welcome!'}</p>
                  <p className="text-sm text-gray-600 truncate">{user.email}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <Link to="/friends" className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-center">Friends</Link>
                <Link to="/events" className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-center">Events</Link>
                <Link to="/clubs" className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-center">Clubs</Link>
                <Link to="/success-stories" className="px-3 py-2 bg-yellow-50 text-yellow-700 rounded-lg text-center">Stories</Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Quick Links */}
      <section className="mt-6 grid grid-cols-2 gap-6 md:hidden">
        {quickLinks.map((link, i) => (
          <Links key={i} to={link.to} imgSrc={link.img} label={link.label} />
        ))}
      </section>

      {/* Upcoming Events */}
      <UpcomingEvents events={upcomingEvents} />

      {/* Featured Clubs */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Clubs</h2>
        <div className="flex flex-wrap gap-6">
          {featuredClubs.map((club) => (
            <Link
              key={club.id}
              to={`/clubs/${club.id}`}
              className="px-6 py-4 bg-white rounded shadow hover:shadow-lg transition"
            >
              {club.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories />
    </div>
  );
};

export default Home;
