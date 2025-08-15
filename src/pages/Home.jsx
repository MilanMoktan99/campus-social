// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Links from "../components/Links";
import UpcomingEvents from "../components/UpcomingEvents";
import SuccessStories from "../components/SuccessStories";
import { assets } from "../assets/assets";

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

  return (
    <div className="px-[60px] pt-32">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-6">
        <HeroSection />
        {/* Desktop Quick Links */}
        <div className="hidden md:flex md:w-1/4 flex-col gap-6">
          {quickLinks.map((link, i) => (
            <Links key={i} to={link.to} imgSrc={link.img} label={link.label} />
          ))}
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
