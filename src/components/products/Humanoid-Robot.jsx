import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSchool,
  FaRobot,
  FaStar,
  FaSmile,
  FaPlay,
  FaMicrophone,
  FaLanguage,
  FaUserCheck,
  FaChartLine,
  FaChalkboardTeacher,
  FaPenFancy,
  FaGraduationCap,
  FaWalking,
  FaHeartbeat,
  FaCogs,
  FaCheckCircle,
  FaDollarSign,
  FaUserGraduate,
  FaGlobe,
  FaRegClock,
  FaSyncAlt,
  FaComments,
} from "react-icons/fa";
import Navbar from "../landing/Navbar.jsx";
import Footer from "../Footer.jsx";
import ThemeToggle from "../common/ThemeToggle.jsx";
import { Helmet } from "react-helmet";

/* ----------------------------------
 * Static Data
 * ---------------------------------- */
const infoData = [
  { title: "Developed By", value: "iSpark" },
  { title: "Launch Year", value: "2024" },
  { title: "Target Audience", value: "Students, Teachers, Institutions" },
  { title: "Location", value: "Chennai" },
];

const counterStats = [
  { icon: <FaSchool />, count: "10+", label: "Benefited Schools" },
  { icon: <FaRobot />, count: "10+", label: "Robots Deployed" },
  { icon: <FaStar />, count: "11+", label: "5 Star Reviews" },
  { icon: <FaSmile />, count: "9+", label: "Happy Customers" },
];

const featuresData = [
  { Icon: FaMicrophone, title: "Voice Interaction", desc: "Real-time responses to student queries." },
  { Icon: FaLanguage, title: "Multi-Language Support", desc: "Communicates in up to 20 languages." },
  { Icon: FaUserCheck, title: "Facial Recognition", desc: "Automates attendance with precision." },
  { Icon: FaChartLine, title: "Adaptive Learning", desc: "Personalized teaching strategies." },
  { Icon: FaChalkboardTeacher, title: "Classroom Supervision", desc: "Ensures a smooth learning environment." },
  { Icon: FaPenFancy, title: "Content Creation", desc: "Generates text, images & audio resources." },
  { Icon: FaGraduationCap, title: "Exam Coaching", desc: "NEET, JEE & more with AI guidance." },
  { Icon: FaWalking, title: "Mobility & Interaction", desc: "Moves & engages dynamically." },
  { Icon: FaHeartbeat, title: "Health Monitoring", desc: "Tracks student well-being." },
  { Icon: FaCogs, title: "Task Automation", desc: "Streamlines routine tasks." },
];

const advantagesData = [
  { Icon: FaCheckCircle, title: "Efficient Operations", desc: "Integrates seamlessly with school systems." },
  { Icon: FaStar, title: "Enhanced Reputation", desc: "Showcases innovation to attract students." },
  { Icon: FaDollarSign, title: "Cost-Effective", desc: "Reduces staff load & saves resources." },
  { Icon: FaUserGraduate, title: "Personalized Learning", desc: "Tailored lessons for every learner." },
  { Icon: FaRegClock, title: "24/7 Availability", desc: "Learning beyond classroom hours." },
  { Icon: FaSyncAlt, title: "Instant Feedback", desc: "Faster assessments & reports." },
  { Icon: FaGlobe, title: "Language Support", desc: "Breaks language barriers easily." },
  { Icon: FaComments, title: "Interactive Learning", desc: "Engages students effectively." },
];

/* Animation Variants */
const featureCardVariants = {
  initial: { opacity: 0, y: 20 },
  inView: (i) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.05, 
      duration: 0.4,
      ease: "easeOut"
    } 
  }),
  hover: { 
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
};

const featureIconVariants = {
  hover: { 
    scale: 1.2, 
    rotate: [0, -10, 10, -5, 5, 0], 
    transition: { duration: 0.5 } 
  },
};

// Enhanced animation variants for scroll-triggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// New scroll-triggered animation variants
const parallax = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -20, 0],
    transition: {
      duration: 6 + i * 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const zoomIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const bounceIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      bounce: 0.5
    }
  }
};

const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const slideDown = {
  initial: { opacity: 0, y: -40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const tilt = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/* Component */
const HumanoidRobot = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const element = document.querySelector("#counter-section");
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>iSMART - AI Teacher Robot | iSpark</title>
        <meta name="description" content="Revolutionary AI Teacher Robot for modern education. Personalized learning, classroom automation, and student engagement." />
        <meta name="keywords" content="AI teacher, educational robot, classroom automation, personalized learning" />
      </Helmet>
      
      <div className="bg-gradient-to-b from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
        <Navbar />
        <ThemeToggle />

        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-40 -right-32 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            ></motion.div>
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>
            </motion.div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* LEFT SIDE - TEXT */}
              <motion.div
                className="flex-1 max-w-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ x: -5 }}
              >
                <motion.div 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl border border-white/20"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      iSMART – Innovating Education
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Enhance learning with iSpark's <span className="font-semibold text-indigo-600 dark:text-indigo-400">AI Teacher Robot</span> — a revolutionary step in education. 
                    It brings <span className="font-semibold text-indigo-600 dark:text-indigo-400">personalized learning</span> to every student, ensuring adaptive and interactive experiences.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Our robot empowers educators by handling <span className="font-semibold text-indigo-600 dark:text-indigo-400">smart classroom automation</span>, 
                    reducing manual tasks. Prepare learners for the future with <span className="font-semibold text-indigo-600 dark:text-indigo-400">AI-driven, immersive education</span> 
                    designed for the 21st century.
                  </motion.p>
                  
                  <motion.div 
                    className="mt-8 flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.button 
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                    <motion.button 
                      className="px-6 py-3 bg-white dark:bg-gray-700 border border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg transition-colors duration-300 hover:bg-indigo-50 dark:hover:bg-gray-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Schedule Demo
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE - IMAGES */}
              <motion.div 
                className="flex-1 flex flex-col items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <motion.div 
                  className="relative w-full max-w-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  ></motion.div>
                  <img
                    src="/ismart-7.jpg"
                    alt="iSmart Main"
                    className="relative rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full max-w-lg"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { img: "/ismart-1.jpg", title: "AI-Powered Learning" },
                    { img: "/ismart10.jpg", title: "Future-Ready Skills" },
                    { img: "/ismart-3.jpg", title: "Smart Classroom Automation" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 text-center border border-gray-100 dark:border-gray-700"
                      whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.img
                        src={item.img}
                        alt={item.title}
                        className="rounded-lg mb-3 w-full h-24 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <p className="font-semibold text-indigo-600 dark:text-indigo-400 text-sm">
                        {item.title}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {infoData.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={fadeInUp}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 text-center"
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </motion.div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">{info.title}</h4>
                  <motion.p 
                    className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
                    animate={isVisible && info.title === "Benefited Schools" ? { scale: [1, 1.1, 1] } : {}}
                    transition={isVisible && info.title === "Benefited Schools" ? { duration: 1, repeat: Infinity } : {}}
                  >
                    {info.value}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-8xl text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Introduction to the{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Humanoid AI Teacher Robot
              </span>
            </motion.h3>

            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              iSMART – Smart Mentor AI Robot Teacher is a groundbreaking innovation by iSpark Learning Solutions designed to revolutionize modern education. 
              It stands as a reliable assistant for human teachers, enhances classroom engagement, and provides personalized learning experiences for students.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our AI robot seamlessly integrates into educational environments, offering advanced capabilities in teaching, assessment, and classroom management while maintaining the irreplaceable human touch in education.
            </motion.p>
          </div>
        </section>

        {/* Counters */}
        <section id="counter-section" className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
          <div className="container mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {counterStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={bounceIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-white/20 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mx-auto mb-4"
                    variants={pulse}
                    animate="animate"
                  >
                    <div className="text-2xl text-indigo-600 dark:text-indigo-400">{item.icon}</div>
                  </motion.div>
                  <motion.h2 
                    className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1"
                    animate={isVisible ? { scale: [1, 1.05, 1] } : {}}
                    transition={isVisible ? { duration: 1, repeat: Infinity } : {}}
                  >
                    {item.count}
                  </motion.h2>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div className="text-center mb-12">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Core <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  iSMART Capabilities
                </span>
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our AI teacher robot combines cutting-edge technology with educational expertise to transform learning experiences
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {featuresData.map((f, i) => {
                const Icon = f.Icon;
                return (
                  <motion.div
                    key={f.title}
                    custom={i}
                    variants={slideUp}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4"
                      variants={featureIconVariants}
                      whileHover="hover"
                    >
                      <Icon className="text-xl text-indigo-600 dark:text-indigo-400" />
                    </motion.div>
                    <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div className="text-center mb-12">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why Schools Choose{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  iSMART?
                </span>
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Transform your educational institution with our revolutionary AI teaching assistant
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {advantagesData.map(({ Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-white/20 flex items-start gap-4"
                  whileHover={{ x: 5, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-xl text-indigo-600 dark:text-indigo-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-10 px-4 md:px-6">
          <div className="container mx-auto max-w-2xl">
            <motion.div className="text-center mb-8">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                iSMART in Action
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Watch how our AI teacher robot transforms the learning experience
              </motion.p>
            </motion.div>

            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
              variants={zoomIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {!isPlaying ? (
                <motion.div 
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src="/ismart-5.jpg"
                    alt="iSmart in Action"
                    className="w-full"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    animate={{ opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaPlay className="text-indigo-600 ml-1 text-xl" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  className="aspect-video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    controls
                    autoPlay
                    className="w-full"
                  >
                    <source src="/ismart-video-1.mp4" type="video/mp4"/>
                  </video>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* New Animated Footer Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Ready to Transform Your Classroom?
            </motion.h3>
            <motion.p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Join the educational revolution with iSMART - the future of AI-powered teaching is here
            </motion.p>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button 
                className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:shadow-xl mr-4"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                variants={scaleIn}
              >
                Get Started
              </motion.button>
              <motion.button 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                variants={scaleIn}
                transition={{ delay: 0.1 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default HumanoidRobot;