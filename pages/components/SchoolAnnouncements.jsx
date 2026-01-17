// components/SchoolAnnouncements.jsx
import React from "react";
import { FaBullhorn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  {
    id: 1,
    title: "Admissions Open for 2026-27 Academic Year",
    date: "Present",
  },
  {
    id: 2,
    title: "Vasant Panchami Celebration",
    date: "January 23, 2026",
  },
  {
    id: 3,
    title: `Republic Day`,
    date: "january 26, 2026",
  },
  {
    id: 4,
    title: "Guru Ravidas Jayanti ",
    date: "February 01, 2026",
  },
    {
    id: 5,
    title: "Maha Shivratri",
    date: " February 15, 2026",
  },
    {
    id: 6,
    title: "Chhatarapati Shivaji Jayanti",
    date: " February 19, 2026",
  },
    {
    id: 7,
    title: "National Science Day",
    date: "February 28, 2026",
  },
    {
    id: 8,
    title: "Holi Celebration",
    date: "March 03, 2026",
  },
    {
    id: 9,
    title: "Internation Women's Day",
    date: "March 08, 2026",
  },
    {
    id: 10,
    title: "World Water Day",
    date: "March 22, 2026",
  },
  {
    id: 11,
    title: "Ram Navami",
    date: "March 26, 2026",
  },
 

];

const SchoolAnnouncements = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 border-blue-600 border-2 rounded-md md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FaBullhorn className="text-blue-600 text-2xl" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Latest Announcements
          </h2>
        </div>

        <div className="relative h-48 overflow-hidden">
          <motion.div
            className="space-y-4"
            animate={{ y: ["0%", "-300%"] }}
            transition={{
              duration: announcements.length * 9,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {announcements.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md border-l-4 border-blue-600 p-4 rounded-md w-full"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            ))}
            {/* Duplicate for seamless looping */}
            {announcements.map((item) => (
              <div
                key={item.id + "-copy"}
                className="bg-white shadow-md border-l-4 border-blue-600 p-4 rounded-md w-full"
              >
                <h3 className="text-lg font-semibold text-gray-800 display-linebreak">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchoolAnnouncements;
