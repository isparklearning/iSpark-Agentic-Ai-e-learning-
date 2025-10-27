import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaUserGraduate, FaClock, FaCheck } from "react-icons/fa";

const featuredCourses = [
  {
    title: "Fundamentals of Humanoid Robotics",
    instructor: "Dr. Alice Johnson",
    description:
      "Learn the basics of humanoid robots including sensors, actuators, and control systems. Build your first humanoid prototype.",
    duration: "6 months",
    rating: 4.9,
    students: 2100,
    image: "/h1.png",
    skills: ["Robotics Basics", "Sensors", "Actuators", "Arduino/Pi"],
    features: [
      "Hands-on Humanoid Kit",
      "Beginner-Friendly",
      "Project-Based Learning",
    ],
  },
  {
    title: "Cybersecurity for AI-Driven Systems",
    instructor: "Prof. Michael Lee",
    description:
      "Master cybersecurity concepts specifically designed for protecting AI and robotics systems. Includes penetration testing and ethical hacking.",
    duration: "8 months",
    rating: 4.8,
    students: 1850,
    image: "/cyber.jpg",
    skills: ["AI Security", "Ethical Hacking", "Cryptography", "Pen Testing"],
    features: ["Real-World Labs", "Industry Mentors", "Certification"],
  },
  {
    title: "Ethical Hacking Essentials",
    instructor: "Mr. John Smith",
    description:
      "Ethical Hacking Essentials: Learn to legally identify and fix system vulnerabilities to protect networks, applications, and data.",
    duration: "5 months",
    rating: 4.8,
    students: 1900,
    image: "/hack1.jpg",
    skills: ["Penetration Testing", "Kali Linux", "Recon"],
    features: [
      "Hands-on Hacking Labs",
      "Bug Bounty Basics",
      "Real Attack Scenarios",
    ],
  },
];

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300 flex flex-col"
    >
      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-50 object-cover"
      />

      {/* Course Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
          <p className="text-sm text-gray-700 mt-2 text-justify">
            {course.description}
          </p>

          {/* Instructor */}
          <div className="flex items-center gap-2 mt-3">
            <img
              src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random`}
              alt={course.instructor || "Instructor"}
              className="w-6 h-6 rounded-full border border-white/20"
            />
            <span className="text-sm text-gray-800">{course.instructor}</span>
          </div>

          {/* Details */}
          <div className="flex justify-between text-sm text-gray-500 mt-4">
            <span className="flex items-center gap-1">
              <FaClock className="text-purple-600" /> {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-600" /> {course.rating}
            </span>
            <span className="flex items-center gap-1">
              <FaUserGraduate className="text-violet-600" /> {course.students}
            </span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {course.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-violet-50 text-violet-600 px-2 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="mt-3 space-y-2 text-sm text-gray-700 text-justify">
            {course.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-violet-100">
                  <FaCheck size={10} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => {
  const isDark = false; // toggle true for dark mode

  return (
    <section
      className={`py-16 px-6 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-8xl mx-auto text-center">
        {/* ✦ Featured Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block px-4 py-2 rounded-full text-sm mb-6 border ${
            isDark
              ? "bg-white/5 border-white/10 text-gray-300"
              : "bg-purple-50 border-purple-100 text-purple-600"
          }`}
        >
          <span className="mr-2 text-purple-500">✦</span>
          Featured Courses
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-transparent bg-clip-text">
            Courses
          </span>
        </motion.h2>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
