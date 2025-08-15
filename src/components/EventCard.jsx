import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiStar } from "react-icons/fi";

// ---------- Utilities ----------
const fmtDate = (iso) => {
  if (!iso) return "N/A";
  const dateObj = new Date(iso + "T00:00:00");
  return isNaN(dateObj)
    ? "Invalid date"
    : dateObj.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
};

const fmtTime = (t) => {
  if (!t) return "N/A";
  const [h, m] = t.split(":");
  const d = new Date();
  d.setHours(+h || 0, +m || 0);
  return isNaN(d) ? "Invalid time" : d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
};

// ---------- EventCard Component ----------
const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(false);

  if (!event || typeof event !== "object") {
    return null; // no crash, just render nothing
  }

  const {
    image,
    title,
    description,
    category,
    date,
    startTime,
    endTime,
    building,
    attendees,
    id,
  } = event;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white/90 backdrop-blur border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300"
    >
      {/* Image & Category */}
      <div className="relative overflow-hidden group">
        {image ? (
          <motion.img
            src={image}
            alt={title || "Event image"}
            className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-44 w-full bg-gray-200 flex items-center justify-center text-gray-500">
            No image
          </div>
        )}
        {category && (
          <span className="absolute top-3 left-3 text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">
            {category}
          </span>
        )}
        <button
          onClick={() => setWishlist((w) => !w)}
          className={`absolute top-3 right-3 p-2 rounded-full text-white transition ${
            wishlist
              ? "bg-pink-500 hover:bg-pink-600"
              : "bg-gray-700 hover:bg-gray-800"
          }`}
          title={wishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <FiStar />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-full space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{title || "Untitled Event"}</h3>
          {description && (
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
          )}

          <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-gray-600">
            <div className="flex items-center gap-1"><FiCalendar /> {fmtDate(date)}</div>
            <div className="flex items-center gap-1"><FiClock /> {fmtTime(startTime)}–{fmtTime(endTime)}</div>
            <div className="flex items-center gap-1"><FiMapPin /> {building || "TBA"}</div>
          </div>

          {attendees !== undefined && (
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
              <FiUsers /> {attendees} attendees
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-3 flex gap-2">
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => alert("You joined the event!")}
            className="flex-1 px-3 py-2 rounded-xl bg-indigo-600 text-white text-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 transition"
          >
            Join Event
          </motion.button>

          {id && (
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/events/${id}`)}
              className="flex-1 px-3 py-2 rounded-xl bg-gray-200 text-gray-900 text-sm hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 transition"
            >
              View Details
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
