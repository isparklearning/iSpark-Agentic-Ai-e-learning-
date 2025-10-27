import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRobot, FaShieldAlt, FaLightbulb, FaBrain, FaCloud,FaCogs,FaClipboardList,FaHandsHelping} from "react-icons/fa";
import {BiBadgeCheck,BiBriefcase} from 'react-icons/bi';
import {MdWork,MdOutlineEngineering,MdScience,MdCloudQueue} from 'react-icons/md';
import {GiArtificialIntelligence} from 'react-icons/gi';
// Course Data 
const courses = [
  {
    id: "ai",
    title: "Professional Diploma in Humanoid Robotics for Service Industries",
    description:
      "Design, program, and deploy humanoid robots specifically for service sectors like healthcare, hospitality, and retail, emphasizing interaction and automation.",
    icon: <MdOutlineEngineering className="text-5xl text-purple-600 dark:text-purple-400" />,
    color: "from-purple-500 to-purple-600",
    route: "/courses/ai",
  },
  {
    id: "robotics",
    title: "Diploma in Artificial Intelligence Applications Across Industries",
    description:
      "Explore AI applications that drive efficiency, automation, and intelligent decision-making across industries such as manufacturing, logistics, and business.",
    icon: <GiArtificialIntelligence className="text-5xl text-blue-600 dark:text-blue-400" />,
    color: "from-blue-500 to-blue-600",
    route: "/courses/robotics",
  },
  {
    id: "cloud",
    title: "Industry-Ready Diploma in Cloud & Edge Technologies",
    description:
      "Gain skills to implement and manage cloud and edge computing solutions for scalable, high-performance, and real-time applications in modern enterprises.",
    icon: <MdCloudQueue className="text-5xl text-orange-600 dark:text-blue-400" />,
    color: "from-blue-500 to-purple-500",
    route: "/courses/cloud",
  },
  {
    id: "cybersecurity",
    title: "Career-Ready Diploma in Cybersecurity & Digital Forensics",
    description:
      "Learn to protect digital infrastructure, prevent cyber attacks, and conduct forensic investigations to secure critical systems in real-world environments.",
    icon: <FaShieldAlt className="text-5xl text-red-600 dark:text-red-400" />,
    color: "from-red-500 to-red-700",
    route: "/courses/cybersecurity",
  },
  {
    id: "ug",
    title: "Year-long STEM Readiness For UG/Students",  
    description:
      "Develop STEM skills through practical IoT and IIoT projects, building smart systems and gaining real-world engineering experience throughout the year.",
    icon: <FaLightbulb className="text-5xl text-green-600 dark:text-green-400" />,
    color: "from-green-500 to-blue-500",
    route: "/courses/ug",
  },

];


const CourseCategories = ({ hideHeader = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="w-full min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      {!hideHeader && (
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-2 text-gray-900 mr-1 flex justify-center">
            Explore <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text ml-2">
            Our Courses 
            </span>
            <FaHandsHelping className="text-violet-700 justify-center ml-2"/>
          </h2>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Discover programs designed to boost your career with future-ready skills.
          </p>
        </div>
      )}

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-9xl mx-auto px-6">
        {courses.map((course, index) => {
          const isActive = location.pathname === course.route;
          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(course.route)}
              className={`relative group cursor-pointer rounded-2xl p-8 shadow-lg w-full 
                border transition-all duration-500 overflow-hidden flex flex-col
                ${
                  isActive
                    ? "border-indigo-600 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl hover:border-indigo-400"
                }`}
            >
              {/* Accent Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-all`}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Top Section */}
                <div className="flex flex-col space-y-6 flex-grow">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-100 dark:bg-gray-700 text-indigo-600 text-4xl group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  {/* Title */}
                  <h3
                    className={`text-3xl md:text-xl font-bold leading-relaxed text-justify
                      ${
                        isActive
                          ? "text-indigo-700 dark:text-indigo-400"
                          : "text-gray-900 dark:text-gray-100"
                      }`}
                  >
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed text-justify line-clamp-4">
                    {course.description}
                  </p>
                </div>

                {/* Bottom Button - always aligned */}
                <div className="mt-6">
                  <button
                    className="self-start px-5 py-2 rounded-md text-sm font-medium 
                               text-white shadow-md transition 
                               bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                               hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseCategories;