// src/components/UpcomingEvents.jsx
import React from "react";
import { Link } from "react-router-dom";

const UpcomingEvents = ({ events }) => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-500">{event.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
