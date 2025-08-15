// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Links from "../components/Links";
import UpcomingEvents from "../components/UpcomingEvents";
import { SUCCESS_STORIES } from "../assets/assets";
import { assets } from "../assets/assets";
import { EVENTS } from "../data/eventsData";
import { clubsData } from "../data/clubsData"; // ✅ import clubs data

const Home = () => {
  const upcomingEvents = EVENTS.slice(0, 3);

  const quickLinks = [
    { to: "/events", img: assets.event, label: "Events" },
    { to: "/clubs", img: assets.clubs, label: "Clubs" },
    { to: "/news", img: assets.news, label: "News" },
    { to: "/friends", img: assets.friends, label: "Friends" },
  ];

  return (
    <div className="px-[60px] pt-32">
      {/* Hero + Quick Links */}
      <section className="flex flex-col md:flex-row gap-6">
        <HeroSection upcomingEvents={upcomingEvents} />
        <div className="hidden md:flex md:w-1/4 flex-col gap-6">
          {quickLinks.map((link, i) => (
            <Links key={i} to={link.to} imgSrc={link.img} label={link.label} />
          ))}
        </div>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-6 md:hidden">
        {quickLinks.map((link, i) => (
          <Links key={i} to={link.to} imgSrc={link.img} label={link.label} />
        ))}
      </section>

      {/* Upcoming Events */}
      <UpcomingEvents events={upcomingEvents} />

      {/* Clubs Section (only 6 clubs) */}
      <section className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Student Clubs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubsData.slice(0, 6).map((club) => (
            <Link
              key={club.id}
              to={`/clubs/${club.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center"
            >
              <img
                src={club.image}
                alt={club.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{club.name}</h3>
              <p className="text-indigo-600 font-medium mt-1">{club.category}</p>
              <p className="text-gray-500 text-sm mt-1">{club.members} members</p>
            </Link>
          ))}
        </div>
        {/* Optional: View All Clubs Button */}
        <div className="text-center mt-6">
          <Link
            to="/clubs"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            View All Clubs
          </Link>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story) => (
            <Link
              key={story.id}
              to={`/success-stories/${story.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center"
            >
              <img
                src={story.avatar}
                alt={story.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{story.name}</h3>
              <p className="text-indigo-600 font-medium mt-1">{story.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
