import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRobot, FaChalkboardTeacher, FaCode, FaLightbulb } from "react-icons/fa";
import InternshipCurriculum from "./InternshipCurriculum.jsx";
import {MdOutlineSchool} from 'react-icons/md';
import {BiUserCheck} from 'react-icons/bi';
const internship = [
  {
    id: "internship",
    title: "4-Month Internship - Industry-Focused Internship in Service Robotics and Applied AI",
    description:
      "This 4-month internship at VTU Centre provides hands-on robotics training using LEGO Mindstorms and iSpark kits, preparing students for careers in robotics and automation.",
    icon: <MdOutlineSchool className="text-5xl text-purple-600 dark:text-purple-400" />,
    color: "from-purple-500 to-purple-600",
    route: "/internship/internshipcurriculum",
    skills: ["Robotics Programming", "AI & ML Models", "Embedded Systems", "Python & ROS"],
    highlights: [
      "Hands-on project experience with autonomous robots",
      "Learn AI integration in real-world systems",
      "Mentorship from industry experts",
      "Final project showcase & certificate",
    ],
  },
];

const Internmain = ({ hideHeader = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedInternship, setSelectedInternship] = useState(null);

  return (
    <section className="w-full min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      {!hideHeader && (
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white flex justify-center">
            Explore{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text ml-2">
              Our Internship Programs 
            </span>
            <BiUserCheck className="text-5xl text-indigo-600 dark:text-indigo-400 ml-2"   />
          </h2>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-300 max-w-4xl mx-auto">
            Discover programs designed to boost your career with future-ready skills and industry mentorship.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-9xl mx-auto px-6">
        {internship.map((course, index) => {
          const isActive = location.pathname === course.route;

          return (
   <motion.div
  key={course.id}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ scale: 1.03 }}
  className={`relative group cursor-pointer rounded-1xl p-10 shadow-lg w-full justify-center
    border transition-all duration-500 overflow-hidden flex flex-col
    ${isActive
      ? "border-indigo-600 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"
      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl hover:border-indigo-400"
    }`}
  onClick={() => setSelectedInternship(course)}
>
  {/* Gradient overlay */}
  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-all`}></div>

  <div className="relative z-10 flex flex-col h-full">
    {/* Icon + Title + Description */}
    <div className="flex flex-col space-y-6 flex-grow">
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-100 dark:bg-gray-700 text-indigo-600 text-4xl group-hover:scale-110 transition-transform">
        {course.icon}
      </div>
      <h3 className={`text-lg md:text-xl font-bold leading-snug text-left
        ${isActive ? "text-indigo-700 dark:text-indigo-400" : "text-gray-900 dark:text-gray-100"}`}>
        {course.title}
      </h3>
      
      {/* Full description */}
      <div className="overflow-y-auto max-h-40">
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed text-left">
          {course.description}
        </p>
      </div>
    </div>

    {/* Buttons */}
    <div className="mt-6 flex gap-3">
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate(course.route);
        }}
        className="self-start px-5 py-2 rounded-md text-sm font-medium 
                   text-white shadow-md transition 
                   bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                   hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
      >
        Learn More →
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedInternship(course);
        }}
        className="self-start px-5 py-2 rounded-md text-sm font-medium
                   text-purple-700 dark:text-purple-300 border border-purple-400 dark:border-purple-500
                   hover:bg-purple-50 dark:hover:bg-purple-900 transition"
      >
        Quick View
      </button>
    </div>
  </div>
</motion.div>

          );
        })}
      </div>

      {/* Professional Modal */}
      <AnimatePresence>
        {selectedInternship && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-3xl w-full shadow-xl relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-xl font-bold"
                onClick={() => setSelectedInternship(null)}
              >
                &times;
              </button>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedInternship.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{selectedInternship.description}</p>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">Key Skills You Will Learn:</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                    {selectedInternship.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2"><FaLightbulb className="text-purple-500"/> {skill}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">Program Highlights:</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                    {selectedInternship.highlights.map((point, i) => (
                      <li key={i} className="flex items-center gap-2"><FaCode className="text-indigo-500"/> {point}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => navigate(selectedInternship.route)}
                    className="px-6 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg shadow-md hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Internmain;
