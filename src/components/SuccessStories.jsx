import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaChalkboardTeacher,
  FaLightbulb,
  FaRegLightbulb,
  FaBookOpen,
  FaCogs,
  FaStar,
  FaHeart,
  FaRocket,
  FaMagic,
  FaLaptopCode,
  FaGraduationCap,
  FaRobot,
  FaAward,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaHandsHelping,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { ChevronLeft, ChevronRight, Pause, Play, BookOpen as LucideBook, Lightbulb as LucideLightbulb, Rocket as LucideRocket, Globe, CheckCircle, GraduationCap, Quote } from "lucide-react";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import Navbar from "./landing/Navbar.jsx";
import Footer from "./Footer.jsx";
import ThemeToggle from "../components/common/ThemeToggle.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";
import { Helmet } from "react-helmet";
// ✅ Success Stories Data
const successStories = [
  {
    name: "Krithvik",
    grade: "IX B",
    school: "St.Joseph Global Senior Secondary School",
    image: "/KRITHVIK.jpg",
    message: "As I continue to navigate the exciting world of technology, I am eager to see how my skills and knowledge will contribute to the advancements that lie ahead.",
  },
  {
    name: "Shika",
    grade: "VIII",
    school: "St.Joseph Global Senior Secondary School",
    image: "/Shika.jpeg",
    message: "iSpark allows me to transform my creative ideas into tangible objects, fostering hands-on learning and innovation.",
  },
  {
    name: "Divya",
    grade: "X",
    school: "St.Joseph Global Senior Secondary School",
    image: "/Divya.jpeg",
    message: "iSpark allows me to engage in hands-on, creative learning experiences that combine robotics and programming.",
  },
  {
    name: "Yukesh Raj",
    grade: "VI A",
    school: "St.Joseph Global Senior Secondary School",
    image: "/yukesh.jpeg",
    message: "iSpark opens doors to a world of hands-on learning, problem-solving, and innovation.",
  },
  {
    name: "Jasin",
    grade: "VI C",
    school: "St.Joseph Global Senior Secondary School",
    image: "/jasin.jpg",
    message: "My exploration with technology has been a journey of empowerment, where I've learned to adapt to the ever-evolving digital landscape.",
  },
  {
    name: "Sanjay",
    grade: "IX B",
    school: "St.Joseph Global Senior Secondary School",
    image: "/sanjay.jpg",
    message: "Through technology, I've come to understand its power to connect, create, and solve real-world problems.",
  },
];

// ✅ Highlights Data
const highlights = [
  {
    icon: <FaBrain className="text-indigo-600 text-4xl" />,
    title: "21st-Century Skills Development",
    description: "Empowering students with critical thinking, creativity, computational thinking, and problem-solving skills to excel in the digital era.",
  },
  {
    icon: <FaChalkboardTeacher className="text-purple-600 text-4xl" />,
    title: "Aligned with NEP 2020",
    description: "Our approach is fully aligned with the National Education Policy 2020, ensuring holistic and futuristic learning models.",
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    title: "Innovation & Hands-on Learning",
    description: "Interactive workshops and real-world projects nurture practical understanding, encouraging students to become creators, not just consumers.",
  },
  {
    icon: <FaRobot className="text-blue-600 text-4xl" />,
    title: "AI-Powered Learning Tools",
    description: "With our iSmart Humanoid AI Teacher, we deliver personalized, adaptive learning experiences, making classrooms more engaging and tech-driven.",
  },
  {
    icon: <FaAward className="text-green-600 text-4xl" />,
    title: "Recognized as a Rising Startup",
    description: "Acknowledged as one of Chennai’s top rising startups in 2022, proving our dedication to revolutionizing education through innovation.",
  },
];

const AboutAndStories = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { theme } = useTheme();

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (window.mySwiper) {
      if (!isPaused) {
        window.mySwiper.autoplay.stop();
      } else {
        window.mySwiper.autoplay.start();
      }
    }
  };
const containerStyle = { width: '100%', height: '400px' };
const center = { lat: 13.0886959, lng: 80.195952 };
const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#202124" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#202124" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#383838" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e0e0e" }] },
];

  return (
    <>
     <Helmet>
            <title>Success Stories</title>
          </Helmet>
      <Navbar />
      <ThemeToggle />

      {/* About Section */}
      <section className={`py-20 px-6 ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gradient-to-br from-indigo-50 via-white to-purple-50"}`}>
        {/* Floating Background Icons */}
        <FaRobot className="absolute text-indigo-200 text-7xl top-10 left-10 animate-pulse opacity-30" />
        <FaBrain className="absolute text-purple-200 text-8xl top-40 right-16 animate-bounce opacity-25" />
        <FaChalkboardTeacher className="absolute text-pink-200 text-6xl bottom-20 left-1/4 animate-spin-slow opacity-30" />
        <FaGraduationCap className="absolute text-yellow-200 text-7xl bottom-32 right-1/3 animate-pulse opacity-25" />
        <FaLaptopCode className="absolute text-indigo-300 text-6xl top-1/3 left-12 animate-float opacity-30" />
        <FaRegLightbulb className="absolute text-yellow-300 text-7xl bottom-10 right-10 animate-bounce opacity-20" />
        <FaBookOpen className="absolute text-purple-300 text-6xl top-2/3 right-20 animate-pulse opacity-25" />
        <FaCogs className="absolute text-pink-300 text-7xl top-24 left-1/2 animate-spin-slow opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-4xl font-extrabold mb-6 flex items-center justify-center gap-3 "
      >
        <FaRegLightbulb className="text-yellow-500 drop-shadow-md animate-bounce" />
        <span className="text-purple-600">
          About iSpark Learning Solutions
        </span>
      </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-8xl mx-auto text-justify"
          >
            <span className="font-semibold text-indigo-700">iSpark Learning Solutions</span> is transforming education by fostering{" "}
            <span className="font-semibold text-indigo-600">innovation, creativity, and problem-solving</span>. We bridge the gap between traditional education and future-ready skills through{" "}
            <span className="text-purple-600 font-semibold">online and blended programs</span>, preparing students for an <span className="text-pink-600 font-bold">AI-driven future</span>.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="flex items-center gap-3 bg-indigo-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <FaGraduationCap className="text-indigo-600 text-2xl" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Future-Ready Education</span>
            </div>
            <div className="flex items-center gap-3 bg-indigo-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <FaLaptopCode className="text-purple-600 text-2xl" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">AI & Robotics Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 max-w-7xl mx-auto px-6">
  {highlights.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
      className="relative rounded-xl p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-500"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg text-3xl shadow-md mb-6">
          {item.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {item.title}
        </h3>
        <span className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4"></span>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-sm">
          {item.description}
        </p>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="w-10 h-6 bg-indigo-500 dark:bg-indigo-600 rounded-b-lg"></div>
        </div>
      </div>
    </motion.div>
  ))}
</div>



      {/* Swiper Carousel */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-6 overflow-hidden">
       
       {/* ✅ Swiper Carousel Section Title */}
<div className="text-center max-w-3xl mx-auto mb-12 px-4">
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold  mb-4"
  >
    Reflections <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
               bg-clip-text text-transparent">from Students</span> 
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed"
  >
    Student voices provide valuable insights into their learning journey, shaping improvements and creating a more engaging educational experience for everyone.
  </motion.p>

  {/* Decorative underline */}
  <div className="mt-6 flex justify-center">
    <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                    shadow-md dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
    </div>
  </div>
</div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 pt-10 relative"
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 px-6 py-6 flex flex-col items-center text-center h-[300px] max-w-md mx-auto"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
                  <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-900"></div>
                </div>

                <motion.img
                  whileHover={{ scale: 1.07 }}
                  src={story.image}
                  alt={story.name}
                  className="relative w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg mb-3"
                />
                <h3 className="relative text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{story.name}</h3>
                <p className="relative text-sm text-gray-600 dark:text-gray-400 mb-2">Grade {story.grade} • {story.school}</p>
                <p className="relative text-gray-700 dark:text-gray-300 italic text-sm leading-relaxed max-w-xs">“{story.message}”</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Buttons */}
<div className="flex justify-center gap-8 mt-8">
  {/* Prev */}
  <button
    className="custom-prev group relative w-14 h-14 rounded-full 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white shadow-xl transition-all duration-300 
               flex items-center justify-center overflow-hidden
               dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"
  >
    <span className="absolute inset-0 rounded-full 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                     opacity-75 blur-lg group-hover:opacity-100 group-hover:scale-110 transition
                     dark:from-pink-600 dark:via-purple-600 dark:to-indigo-600">
    </span>
    <ChevronLeft className="relative w-7 h-7 group-hover:scale-125 transition-transform" />
  </button>

  {/* Pause / Resume */}
  <button
    onClick={togglePause}
    className="custom-pause group relative w-14 h-14 rounded-full 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white shadow-xl transition-all duration-300 
               flex items-center justify-center overflow-hidden
               dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"
  >
    <span className="absolute inset-0 rounded-full 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                     opacity-75 blur-lg group-hover:opacity-100 group-hover:scale-110 transition
                     dark:from-pink-600 dark:via-purple-600 dark:to-indigo-600">
    </span>
    {isPaused ? (
      <Play className="relative w-7 h-7 group-hover:scale-125 transition-transform" />
    ) : (
      <Pause className="relative w-7 h-7 group-hover:scale-125 transition-transform" />
    )}
  </button>

  {/* Next */}
  <button
    className="custom-next group relative w-14 h-14 rounded-full 
               bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
               text-white shadow-xl transition-all duration-300 
               flex items-center justify-center overflow-hidden
               dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600"
  >
    <span className="absolute inset-0 rounded-full 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                     opacity-75 blur-lg group-hover:opacity-100 group-hover:scale-110 transition
                     dark:from-pink-600 dark:via-purple-600 dark:to-indigo-600">
    </span>
    <ChevronRight className="relative w-7 h-7 group-hover:scale-125 transition-transform" />
  </button>
</div>
      </section>


<br></br>
     {/* Contact info */}
<section
  id="contact"
  className="relative py-18 px-8 max-w-8xl mx-auto"
>
  {/* Soft Background */}
  <div className="absolute inset-0 rounded-3xl opacity-70
                  bg-gradient-to-r from-violet-100 via-blue-100 to-gray-200
                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  </div>

  {/* Content */}
  <div className="relative z-10">
    {/* Heading */}
    <div className="text-center mb-14">
      <br></br>
      <h2 className="text-3xl md:text-3xl font-bold 
                     bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                     bg-clip-text text-transparent">
        Contact Us
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg">
        Reach out today — let’s make the future of learning brighter together
      </p>
    </div>

    {/* Contact Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Address */}
      <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 
                      rounded-2xl shadow-md p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition">
            <FaMapMarkerAlt className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Chennai Office</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            53/10, Soundarya Colony,<br />
            Anna Nagar West Extension,<br />
            Chennai, Tamil Nadu 600101
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700
                      rounded-2xl shadow-md p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition">
            <FaEnvelope className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Email Us</h3>
          <a
            href="mailto:info@isparklearning.com"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition"
          >
            info@isparklearning.com
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700
                      rounded-2xl shadow-md p-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-teal-500 to-blue-500 flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition">
            <FaPhoneAlt className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Call Us</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">+91 9176132300</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">+91 6381581239</p>
        </div>
      </div>
    </div>
  </div>
  <br></br><br></br>
</section>
<br></br>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutAndStories;
