// src/components/CalendarWidget.jsx
import React, { useMemo, useState } from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight, FiPlusCircle } from "react-icons/fi";

const CalendarWidget = ({ events = [], selectedDate, onSelectDate }) => {
  const [cursor, setCursor] = useState(new Date()); // month in view

  const monthGrid = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const startDay = first.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];
    for (let i = 0; i < startDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [cursor]);

  const eventDates = useMemo(() => {
    return new Set(
      (events || []).map((e) =>
        new Date(e.date + "T00:00:00").toDateString()
      )
    );
  }, [events]);

  const todayStr = new Date().toDateString();
  const isPast = (date) => date < new Date(new Date().toDateString());

  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl p-4 shadow-sm border">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold flex items-center gap-2">
          <FiCalendar />{" "}
          {cursor.toLocaleString(undefined, { month: "long", year: "numeric" })}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-gray-100 rounded-xl"
            onClick={() =>
              setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))
            }
          >
            <FiChevronLeft />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-xl"
            onClick={() =>
              setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))
            }
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-xs text-gray-500 mb-1">
        {"SMTWTFS".split("").map((d, i) => (
          <div key={i} className="py-1 text-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {monthGrid.map((date, idx) => {
          if (!date) return <div key={idx} className="h-9" />;
          const ds = date.toDateString();
          const hasEvent = eventDates.has(ds);
          const isToday = ds === todayStr;
          const sel = selectedDate && ds === selectedDate.toDateString();
          return (
            <button
              key={idx}
              onClick={() => onSelectDate?.(date)}
              className={[
                "h-9 rounded-xl text-sm transition transform",
                "hover:-translate-y-0.5 hover:shadow",
                sel
                  ? "bg-indigo-600 text-white"
                  : isToday
                  ? "ring-2 ring-indigo-500"
                  : "",
                hasEvent ? (isPast(date) ? "bg-gray-100" : "bg-indigo-50") : "",
              ].join(" ")}
              title={hasEvent ? "Event on this day" : ""}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-indigo-50 rounded"></span> Upcoming
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-100 rounded"></span> Past
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="font-semibold mb-1">Event Organizer?</div>
        <p className="text-sm/5 opacity-90">
          Create and manage your own campus events. Reach hundreds of students.
        </p>
        <button
          onClick={() => alert("Open Create Event modal or route")}
          className="mt-3 inline-flex items-center gap-2 bg-white text-gray-900 px-3 py-2 rounded-xl hover:scale-105 transition"
        >
          <FiPlusCircle /> Start Creating
        </button>
      </div>
    </div>
  );
};

export default CalendarWidget;
