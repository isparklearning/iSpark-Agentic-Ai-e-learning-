import React, { useState, useEffect } from "react";
import Navbar from "../components/landing/Navbar.jsx";
import { CheckCircle } from "lucide-react";
import {
  FaChalkboardTeacher, FaCloud, FaMicrochip,
  FaBookOpen,
  FaLightbulb,
  FaGlobe,  
  FaFacebookF,
  FaBrain,
  FaGraduationCap,
  FaLaptopCode,
  FaInstagram,
  FaLinkedinIn,
  FaUserGraduate,
  FaCheckCircle,
  FaCogs,
  FaRocket,
  FaYoutube,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { FaUniversity, FaRobot,  FaProjectDiagram } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import ThemeToggle from "./common/ThemeToggle.jsx";
import { motion, useAnimation } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  FaTrophy,
  FaHandshake,
  FaCertificate
} from "react-icons/fa";
import { FaIndustry, FaUsers } from "react-icons/fa";
import Footer from "./Footer"
import CoursesSection from "./courses/CoursesSection";
const ISparkVTU = () => {
  // Animation controls for the title
  const titleControls = useAnimation();
  
  useEffect(() => {
    // Trigger the animation after component mounts
    const timer = setTimeout(() => {
      titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.3 }
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [titleControls]);

  return (
    <>
     <Helmet>
        <title>iSpark-VTU</title>
      </Helmet>
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
      <Navbar />
 <ThemeToggle />
 <br></br><br></br>
      {/* ✅ Hero Section */}
<section className="relative py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden w-full">
  {/* Floating React Icons */}
  <FaRobot className="absolute text-indigo-300 text-5xl top-10 left-10 animate-pulse opacity-20" />
  <FaBrain className="absolute text-purple-300 text-5xl top-20 right-16 animate-bounce opacity-15" />
  <FaChalkboardTeacher className="absolute text-pink-300 text-5xl bottom-20 left-1/4 animate-spin-slow opacity-20" />
  <FaGraduationCap className="absolute text-yellow-300 text-5xl bottom-32 right-1/3 animate-pulse opacity-15" />
  <FaLaptopCode className="absolute text-green-300 text-5xl top-2/3 right-1/4 animate-bounce opacity-15" />
  <FaLightbulb className="absolute text-orange-300 text-5xl bottom-1/4 left-1/3 animate-pulse opacity-15" />
  <FaProjectDiagram className="absolute text-blue-300 text-5xl top-1/2 left-1/5 animate-bounce opacity-15" />
  <FaBookOpen className="absolute text-red-300 text-5xl bottom-10 right-10 animate-pulse opacity-15" />
  <FaUserGraduate className="absolute text-red-300 text-5xl bottom-10 left-10 animate-pulse opacity-15" />

  {/* Content Wrapper */}
  <div className="relative z-10 w-full text-center px-6 lg:px-20">
    {/* Animated Heading */}
  
<>
  <style>{`
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fade-in-down {
      animation: fadeInDown 0.8s ease-out forwards;
      position: relative;
      z-index: 1;
    }
    
   .innovation-header {
  background: linear-gradient(135deg, #4f46e5, #7c3aed, #db2777);
  background-size: 100% 100%;
  animation: gradientShift 8s ease infinite;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

/* Animation for smooth gradient movement */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

 
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .innovation-title {
      font-family: 'Arial', sans-serif;
      font-size: 2.5rem;
      font-weight: 600;
      color: white;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      letter-spacing: 1px;
      margin: 0;
      position: relative;
      display: inline-block;
    }
    
    .innovation-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 3px;
      background: linear-gradient(to right, transparent, #fff, transparent);
    }
    
    @media (max-width: 768px) {
      .innovation-title {
        font-size: 1.8rem;
      }
      
      .innovation-header {
        padding: 10px;
      }
    }
  `}</style>

  <div className="innovation-header">
    <h2 className="innovation-title fade-in-down">iSpark VTU Innovation Partnership</h2>
  </div>
</>
<br></br>
    {/* Description */}
    <motion.p 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8 text-justify"
    >
      iSpark Learning Solutions bridges academic and industry, creating an 
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="font-semibold text-indigo-600 dark:text-indigo-400"
      >
        innovation-driven ecosystem
      </motion.span>. 
      Through the VTU partnership, students gain hands-on experience with 
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-medium text-purple-600 dark:text-purple-400"
      >
        AI, Robotics, IoT, and Cloud Computing
      </motion.span>, 
      preparing them to be <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="font-semibold text-purple-600 dark:text-purple-400"
      >
        industry-ready and entrepreneurial-minded
      </motion.span>.  
      This initiative fosters practical skills, innovation, and continuous learning across VTU institutions.
    </motion.p>
  </div>
</section>

      {/* ✅ About VTU Partnership */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-18 px-6 max-w-8xl mx-auto text-left"
      >
<section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 overflow-hidden">
  {/* Background Decorative Shapes */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply opacity-20 -translate-x-1/3 -translate-y-1/3"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply opacity-20 translate-x-1/4 translate-y-1/4"></div>
  <div className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-purple-200 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 left-1/4 w-48 h-48 border-2 border-indigo-200 rounded-2xl opacity-10 rotate-12"></div>

  <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">

    {/* Heading */}
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8"
    >
      Why Partner with <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
      >
        iSpark & VTU?
      </motion.span>
    </motion.h2>

    {/* Content wrapper with newspaper-like styling */}
   <motion.div 
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8, delay: 0.2 }}
     className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-10 md:p-16 text-left max-w-6xl 
  shadow-[0_0_12px_rgba(99,102,241,0.35),0_0_20px_rgba(139,92,246,0.3),0_0_28px_rgba(236,72,153,0.25)]">

     {/* Paragraphs */}
<motion.p 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-6 text-justify"
>
  This partnership goes beyond traditional academic collaborations by creating an 
  <motion.span 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="font-semibold text-indigo-600 dark:text-indigo-400"
  >
    innovation-driven ecosystem
  </motion.span>
  within VTU-affiliated institutions. It empowers universities to establish
  <motion.span 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="font-semibold text-indigo-600 dark:text-indigo-400"
  >
    advanced technology labs
  </motion.span>
  equipped with cutting-edge tools, integrate trending skills like
  <motion.span 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="font-medium"
  >
    AI, Robotics, IoT, Cloud Computing, and Data Science
  </motion.span>
  into the core curriculum, and enhance the employability of students through
  <motion.span 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.7 }}
    className="font-semibold text-indigo-600 dark:text-indigo-400"
  >
    experiential learning programs
  </motion.span>.
</motion.p>

<motion.p 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.8 }}
  className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-6 text-justify"
>
  By bridging the gap between academia and industry, this initiative ensures students
  gain practical, job-ready expertise through
  <motion.span 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.9 }}
    className="font-semibold text-indigo-600 dark:text-indigo-400"
  >
    real-world projects
  </motion.span>,
  <motion.span 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 1.0 }}
    className="font-semibold text-indigo-600 dark:text-indigo-400"
  >
    startup incubation opportunities
  </motion.span>,
  and collaborative research programs with industry leaders.
</motion.p>
      {/* Decorative underline */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "8rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-6"
      ></motion.div>
    </motion.div>
  </div>
    {/* ✅ Highlights */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="max-w-7xl mx-auto px-6 py-8"
>
  <div className="grid md:grid-cols-3 gap-8 text-center">
    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl p-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-transparent hover:border-indigo-400/40 transition-all duration-300 hover:shadow-[0_0_12px_rgba(99,102,241,0.4),0_0_20px_rgba(139,92,246,0.3),0_0_28px_rgba(236,72,153,0.25)]"
    >
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 shadow-md"
      >
        <FaRobot className="text-white text-3xl" />
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3"
      >
        AI & Robotics Labs
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-gray-600 dark:text-gray-300 leading-relaxed"
      >
        Fully equipped labs for Artificial Intelligence, Robotics, IoT, and Cloud Computing.
      </motion.p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl p-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 backdrop-blur-md border border-transparent hover:border-pink-400/40 transition-all duration-300 hover:shadow-[0_0_12px_rgba(236,72,153,0.4),0_0_20px_rgba(139,92,246,0.3),0_0_28px_rgba(99,102,241,0.25)]"
    >
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 shadow-md"
      >
        <FaChalkboardTeacher className="text-white text-3xl" />
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3"
      >
        Industry-Aligned Curriculum
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-gray-600 dark:text-gray-300 leading-relaxed"
      >
        Upgrade academic programs with trending technologies for practical learning.
      </motion.p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl p-8 bg-gradient-to-r from-pink-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-md border border-transparent hover:border-indigo-400/40 transition-all duration-300 hover:shadow-[0_0_12px_rgba(99,102,241,0.4),0_0_20px_rgba(139,92,246,0.3),0_0_28px_rgba(236,72,153,0.25)]"
    >
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mb-6 shadow-md"
      >
        <FaProjectDiagram className="text-white text-3xl" />
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3"
      >
        Research & Startups
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-gray-600 dark:text-gray-300 leading-relaxed"
      >
        Collaborate on innovative projects, incubation programs, and patents.
      </motion.p>
    </motion.div>
  </div>
</motion.div>
</section>
  </motion.section>
{/* ✅ Strategic Collaboration Message Section */}
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-16 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-white dark:bg-gray-800 rounded-2xl text-left"
  >
      <div className="max-w-9xl mx-auto text-center rounded-2xl">

        {/* Intro / Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border p-10 md:p-16 text-left"
        >
          
          {/* Heading */}
    <h2 className="text-3xl md:text-5xl mb-8 font-bold flex items-center text-gray-800 dark:text-gray-200 gap-5 max-w-full w-full">
      <FaUniversity className="text-indigo-600 dark:text-indigo-400" />
     
      <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
       iSpark & VTU:  Shaping the Future of Engineering Education
      </span>
  
    </h2>

          {/* Paragraphs */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-6 text-justify"
          >
            iSpark Learning Solutions has entered into a landmark collaboration with 
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-semibold text-indigo-700 dark:text-indigo-400"
            >
              Visvesvaraya Technological University (VTU)
            </motion.span>, 
            benefiting <strong>204 VTU-affiliated institutions</strong>. This strategic partnership is designed to revolutionize engineering education, equipping students with 
            <strong> 21st-century skills</strong>, exposure to cutting-edge technologies, and hands-on project experience across Karnataka.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-6 text-justify"
          >
            Through this collaboration, VTU institutions will gain access to advanced technology labs, incubation centers, and a curriculum that integrates
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="font-semibold text-indigo-600 dark:text-indigo-400"
            >
              AI, Robotics, IoT, Cloud Computing, and Cybersecurity
            </motion.span>. 
            Students and faculty alike will benefit from real-world project experience, innovation-driven startup ecosystems, and skill-development initiatives that prepare graduates for the future workforce.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed text-justify"
          >
            This initiative reinforces the commitment of iSpark and VTU to foster an 
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-semibold text-indigo-600 dark:text-indigo-400"
            >
              innovation-driven ecosystem
            </motion.span>
            that bridges the gap between academia and industry, enabling practical learning, research collaboration, and transformative education outcomes.
          </motion.p>

          {/* Highlights with Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid md:grid-cols-5 gap-6 mt-10 text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaRobot className="text-3xl text-purple-600 dark:text-purple-400 mb-2" />
              <span className="text-gray-700 dark:text-gray-300">AI & Robotics</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col items-center"
            >
              <FaCloud className="text-3xl text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="text-gray-700 dark:text-gray-300">Cloud Computing</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex flex-col items-center"
            >
              <MdSecurity className="text-3xl text-pink-600 dark:text-pink-400 mb-2" />
              <span className="text-gray-700 dark:text-gray-300">Cybersecurity</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-col items-center"
            >
              <FaProjectDiagram className="text-3xl text-cyan-600 dark:text-cyan-400 mb-2" />
              <span className="text-gray-700 dark:text-gray-300">Innovation Projects</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex flex-col items-center"
            >
              <FaUniversity className="text-3xl text-green-600 dark:text-green-400 mb-2" />
              <span className="text-gray-700 dark:text-gray-300">Academia-Industry</span>
            </motion.div>
          </motion.div>
          {/* Decorative separator */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-12"
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>

    {/* ✅ Newsletter/Stats Section */}
<motion.section 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
>
  {/* Glow Background Effects */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-400 opacity-20 blur-3xl rounded-full"></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 opacity-10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  </div>

  <div className="max-w-8xl mx-auto relative bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-[0_0_20px_rgba(99,102,241,0.15)] p-12 md:p-16 text-left overflow-hidden">
    
    {/* Heading */}
    <motion.h3 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-5xl font-bold mb-6 leading-snug text-gray-800 dark:text-gray-200 flex items-center gap-3 justify-center"
    >
      Building Future-Ready <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Universities</span>
   
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
      >
         
      </motion.span>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-indigo-500 dark:text-pink-400 w-10 h-10"
      >
        <FaRocket className="w-full h-full animate-bounce-slow" />
      </motion.div>
    </motion.h3>

    {/* Intro Paragraph */}
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-10 leading-relaxed text-justify"
    >
      Through the <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-semibold text-indigo-600 dark:text-indigo-400"
      >
        VTU partnership
      </motion.span>, we empower institutions with cutting-edge infrastructure, 
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-semibold text-purple-600 dark:text-purple-400"
      >
        industry-driven programs
      </motion.span>, and practical research exposure. 
      Together, we're creating a <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="font-semibold text-pink-600 dark:text-pink-400"
      >
        future-ready ecosystem
      </motion.span> that bridges academia and industry.
    </motion.p>

    {/* Stats Section */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md"
      >
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-4"
        >
          <CheckCircle className="w-8 h-8" />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          50+
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-700 dark:text-gray-300 text-lg"
        >
          Universities Connected
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md"
      >
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-4"
        >
          <CheckCircle className="w-8 h-8" />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold text-pink-600 dark:text-pink-400"
        >
          100+
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-700 dark:text-gray-300 text-lg"
        >
          Industry Projects Completed
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md"
      >
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-4"
        >
          <CheckCircle className="w-8 h-8"/>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl font-bold text-purple-600 dark:text-purple-400"
        >
          10,000+
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-700 dark:text-gray-300 text-lg"
        >
          Students Impacted
        </motion.p>
      </motion.div>
    </motion.div>
  </div>
</motion.section>

      {/* ✅ Final CTA */}
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
      <div className="max-w-8xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 
                     bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 
                     bg-clip-text text-transparent"
        >
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-800 dark:text-gray-200"
        >
          Bridging
        </motion.span>    <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-800 dark:text-gray-200"
        >
             <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
 Academia 
      </span> & Industry
        </motion.span>
        </motion.h2>
        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-14 text-center max-w-7xl mx-auto"
        >
          iSpark Learning Solutions, in collaboration with{" "}
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-bold text-indigo-600 dark:text-pink-400"
          >
            VTU
          </motion.span>, equips
          students with real-world skills in AI, Robotics, IoT, and Cloud Computing. This
          ecosystem drives <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="font-semibold"
          >
            innovation, entrepreneurship,
          </motion.span>{" "}
          and continuous learning across institutions.
        </motion.p>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 
                       shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl text-yellow-400 mx-auto mb-4"
            >
              <FaLightbulb />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-bold text-xl mb-2 dark:text-white text-center"
            >
              AI Innovation
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 text-center"
            >
              Empowering students to solve real problems using Artificial Intelligence.
            </motion.p>
          </motion.div>

          {/* Robotics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: -5 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 
                       shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            <motion.div 
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl text-indigo-500 mx-auto mb-4"
            >
              <FaRobot />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-bold text-xl mb-2 dark:text-white text-center"
            >
              Robotics
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-center"
            >
              Hands-on experience with robotics to drive innovation in automation.
            </motion.p>
          </motion.div>

          {/* IoT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 
                       shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl text-pink-500 mx-auto mb-4"
            >
              <FaMicrochip />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-bold text-xl mb-2 dark:text-white text-center"
            >
              IoT Solutions
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-600 dark:text-gray-300 text-center"
            >
              Connecting devices & data for smarter campuses and future-ready solutions.
            </motion.p>
          </motion.div>

          {/* Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05, rotateY: -5 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 
                       shadow-[0_0_20px_rgba(147,51,234,0.4)]"
          >
            <motion.div 
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl text-purple-500 mx-auto mb-4"
            >
              <FaCloud />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="font-bold text-xl mb-2 dark:text-white text-center"
            >
              Cloud Computing
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-gray-600 dark:text-gray-300 text-center"
            >
              Scalable cloud technologies to power research, learning, and innovation.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
     <Footer/>
    </div>
   </>
  );
};
export default ISparkVTU;