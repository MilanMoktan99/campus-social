import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EVENTS } from "../data/eventsData"; // use the new data file
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiTag } from "react-icons/fi";
import { motion } from "framer-motion";

const fmtDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const fmtTime = (t) => {
  const [h, m] = t.split(":");
  const d = new Date();
  d.setHours(+h, +m);
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
};

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = EVENTS.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <p className="text-gray-500 text-lg">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-indigo-600 hover:underline flex items-center gap-1"
        >
          &larr; Back to Events
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Image Header */}
          <div className="relative overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-80 sm:h-96 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="p-8 space-y-6">
            {/* Title & Description */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-extrabold">{event.title}</h1>
              <p className="text-gray-600 text-lg">{event.description}</p>
            </div>

            {/* Event Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
              <div className="flex items-center gap-2 bg-indigo-50 px-4 py-3 rounded-2xl shadow-sm">
                <FiCalendar className="text-indigo-500" />
                <span>{fmtDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-50 px-4 py-3 rounded-2xl shadow-sm">
                <FiClock className="text-indigo-500" />
                <span>
                  {fmtTime(event.startTime)} – {fmtTime(event.endTime)}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-50 px-4 py-3 rounded-2xl shadow-sm">
                <FiMapPin className="text-indigo-500" />
                <span>{event.building}</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-50 px-4 py-3 rounded-2xl shadow-sm">
                <FiUsers className="text-indigo-500" />
                <span>{event.attendees} attendees</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium text-sm hover:bg-indigo-200 transition"
                >
                  <FiTag /> {tag}
                </span>
              ))}
            </div>

            {/* Detailed Agenda */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
                <h2 className="text-2xl font-semibold mb-4">Agenda</h2>
                <ul className="space-y-2 list-inside text-gray-700">
                  {event.agenda.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="font-medium text-indigo-600 w-24">{item.time}</span>
                      <span>{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => alert("You joined the event!")}
                className="px-6 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-semibold shadow-md"
              >
                Join Event
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/events")}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-300 font-semibold shadow-md"
              >
                Back to Events
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetails;
