// src/pages/Events.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiFilter } from "react-icons/fi";

import EventCard from "../components/EventCard";
import CalendarWidget from "../components/CalendarWidget";

// 🔴 STOP importing from assets
// import { assets } from "../assets/assets";

// ✅ Import from data module
import { EVENTS, CATEGORIES } from "../data/eventsData";

const Events = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [onlyUpcoming, setOnlyUpcoming] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const today = new Date(new Date().toDateString());
    return EVENTS.filter(
      (e) =>
        (category === "All" || e.category === category) &&
        (!q ||
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)) &&
        (!onlyUpcoming || new Date(e.date + "T00:00:00") >= today) &&
        (!selectedDate ||
          new Date(e.date + "T00:00:00").toDateString() ===
            selectedDate?.toDateString())
    );
  }, [query, category, onlyUpcoming, selectedDate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-6 pt-32">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-3 text-xl font-semibold">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-indigo-600 text-white">
              🎓
            </span>
            Campus Events
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <Link to="/events" className="text-gray-900 font-medium">Events</Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left/Main */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-4">
            {/* Search + Filter */}
            <div className="relative bg-white/70 backdrop-blur p-3 rounded-2xl border shadow-sm flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                <FiSearch className="text-gray-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search events…"
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>
              <button
                onClick={() => setShowFilters((v) => !v)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-gray-50 text-sm z-20"
              >
                <FiFilter /> More Filters
              </button>

              {/* Filter dropdown */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full right-0 mt-2 bg-white border shadow-lg rounded-2xl p-4 w-72 z-30"
                  >
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={onlyUpcoming}
                        onChange={(e) => setOnlyUpcoming(e.target.checked)}
                      />
                      Only upcoming events
                    </label>
                    <button
                      onClick={() => {
                        setOnlyUpcoming(false);
                        setSelectedDate(null);
                      }}
                      className="mt-3 text-xs text-gray-600 hover:text-gray-900"
                    >
                      Reset filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 mt-2 overflow-x-auto no-scrollbar">
              {CATEGORIES.map(({ key, count }) => (
                <button
                  key={key}
                  onClick={() => setCategory(key)}
                  className={`px-3 py-1.5 rounded-xl text-sm border transition-all duration-200 ${
                    category === key
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                      : "bg-white text-gray-700 hover:shadow hover:-translate-y-0.5"
                  }`}
                >
                  {key} <span className="ml-1 text-xs opacity-75">{count}</span>
                </button>
              ))}
            </div>

            {/* Event Cards */}
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-4"
            >
              <AnimatePresence>
                {filtered.map((ev) => (
                  <motion.div
                    key={ev.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.25 }}
                  >
                    <EventCard event={ev} />
                  </motion.div>
                ))}
                {filtered.length === 0 && (
                  <div className="col-span-full text-center text-gray-500 p-10">
                    No events match your filters.
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right/Sidebar */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
            <CalendarWidget
              events={EVENTS}              // ✅ pass events from data
              selectedDate={selectedDate}
              onSelectDate={(d) => setSelectedDate(d)}
            />

            <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
              <h4 className="font-semibold mb-1">Want to organize an event?</h4>
              <button
                onClick={() => alert("Open Create Event modal or route")}
                className="mt-2 inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-xl hover:scale-105 transition"
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
