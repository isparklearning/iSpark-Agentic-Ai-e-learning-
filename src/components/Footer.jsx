import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext.jsx";

const Footer = () => {
  const { theme } = useTheme();

  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
      : "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200";
  const textColor = theme === "dark" ? "text-gray-200" : "text-black";
  const borderColor = theme === "dark" ? "border-gray-600" : "border-white/70";
  const inputBg = theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900";

  return (
    <footer className={`relative ${bgGradient} ${textColor} px-6 py-12 transition-colors duration-300 overflow-hidden`}>
      
    {/* Background design shapes */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {/* Soft gradient waves */}
  <div className="absolute w-[120%] h-72 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-indigo-400/20 -top-20 -left-10 rounded-full blur-3xl animate-slow-pulse"></div>
  <div className="absolute w-[100%] h-64 bg-gradient-to-l from-indigo-300/20 via-purple-300/20 to-pink-300/20 bottom-0 -right-20 rounded-full blur-2xl animate-slow-pulse delay-300"></div>

  {/* Floating polygons */}
  <div className="absolute w-20 h-20 bg-purple-400/10 rotate-45 top-16 left-12 clip-polygon animate-bounce-slow"></div>
  <div className="absolute w-28 h-28 bg-pink-400/10 rotate-12 bottom-10 right-16 clip-polygon animate-bounce-slow delay-200"></div>
  <div className="absolute w-16 h-16 bg-indigo-400/10 -rotate-6 top-28 right-24 clip-polygon animate-bounce-slow delay-400"></div>

  {/* Soft diagonal lines */}
  <div className="absolute w-[1px] h-full bg-white/5 left-10 rotate-12"></div>
  <div className="absolute w-[1px] h-full bg-white/5 left-1/2 -rotate-12"></div>
</div>


      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <img src="/logo-dark.png" alt="iSpark logo" className="h-10" />
            <span className="text-2xl font-bold tracking-wide"></span>
          </div>
          <p className="text-sm text-justify leading-relaxed font-semibold">
           Empowering learners worldwide with cutting-edge education and hands-on training.
  We bridge the gap between theory and practice, fostering innovation, critical thinking,
  and lifelong learning. Our programs provide real-world projects, mentorship, and career
  guidance to help every learner thrive in a rapidly evolving digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className={`font-bold mb-3 border-b ${borderColor} inline-block pb-1 text-lg`}>
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "iSpark-VTU", href: "/ispark-vtu" },
              { name: "Courses", href: "/coursessection" },
              { name: "Internship", href: "/internship/internpage" },
              { name: "Humanoid AI Robots", href: "/products/humanoid-ai-teacher-robot" },
              { name: "CoE Lab", href: "/products/coe-lab" },
              { name: "Success Stories", href: "/success-stories" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-purple-500 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h4 className={`font-bold mb-3 border-b ${borderColor} inline-block pb-1 text-lg`}>
            Categories
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Professional Diploma in Humanoid Robotics for Service Industries", href: "/courses/ai" },
              { name: "Diploma in Artificial Intelligence Applications Across Industries", href: "/courses/robotics" },
              { name: "Industry-Ready Diploma in Cloud & Edge Technologies", href: "/courses/cloud" },
              { name: "Career-Ready Diploma in Cybersecurity & Digital Forensics", href: "/courses/cybersecurity" },
              { name: "Year-long STEM Readiness For UG/Students", href: "/courses/ug" },
            ].map((cat, idx) => (
              <li key={idx}>
                <a
                  href={cat.href}
                  className="hover:text-purple-500 transition-colors duration-200 font-medium"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h4 className={`font-bold mb-3 border-b ${borderColor} inline-block pb-1 text-lg`}>
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Community",
              "Help Center",
              "Refund Policy",
              "Privacy Policy",
              "Student Support",
              "Terms of Service",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-purple-500 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Newsletter & Social */}
      <div className={`relative max-w-7xl mx-auto mt-10 border-t ${borderColor} pt-6 flex flex-col md:flex-row justify-between items-center gap-4`}>
        <div className="text-sm text-center md:text-left mb-4 md:mb-0">
          Stay Updated — Get the latest course updates and exclusive offers delivered to your inbox.
        </div>

        <div className="flex space-x-4 text-xl mb-4 md:mb-0">
          <a href="https://www.facebook.com/isparkskills" className="hover:text-purple-500 transition-colors duration-200">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/ispark-learning-solutions/" className="hover:text-purple-500 transition-colors duration-200">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/iSparkLearning" className="hover:text-purple-500 transition-colors duration-200">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/ispark_learning_solutions/" className="hover:text-purple-500 transition-colors duration-200">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@isparklearningsolutions1486/featured" className="hover:text-purple-500 transition-colors duration-200">
            <FaYoutube />
          </a>
        </div>

        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className={`px-4 py-2 rounded-l-md ${inputBg} focus:outline-none w-full md:w-64 transition-colors duration-300`}
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-purple-600 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative text-center mt-6 text-sm opacity-90">
        © 2025 iSpark Learning Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
