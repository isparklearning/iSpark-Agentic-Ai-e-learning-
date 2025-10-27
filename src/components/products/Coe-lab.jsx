import React from "react";
import { motion } from "framer-motion";
import Navbar from "../landing/Navbar.jsx";
import Footer from "../Footer.jsx";
import { techList } from "../../data/techList";
import { Helmet } from "react-helmet";
import { FaCheckCircle,FaQuoteLeft, FaGraduationCap, FaLaptopCode, FaRobot, FaChartLine, FaUsers, FaBook, FaLightbulb, FaAward } from "react-icons/fa";

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
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

const CoeLab = () => {
  const features = [
    {
      title: "100% Hands-On Learning",
      img: "/coelab-1.jpg",
      desc: "Project-based experiential education in Robotics, AI, IoT, and Coding for all grades.",
      icon: <FaLaptopCode className="text-3xl text-indigo-600" />
    },
    {
      title: "World-Class Infrastructure",
      img: "/coelab-3.jpg",
      desc: "Fully equipped labs with MIT-designed kits, AI tools, 3D printers, and computing devices.",
      icon: <FaRobot className="text-3xl text-purple-600" />
    },
    {
      title: "Teacher Empowerment",
      img: "/coelab-4.jpg",
      desc: "Continuous training programs to upskill educators in emerging technologies.",
      icon: <FaUsers className="text-3xl text-pink-600" />
    },
  ];

  const benefits = [
    {
      title: "Future-Ready Skills",
      desc: "Students gain expertise in AI, robotics, IoT, and coding - skills essential for tomorrow's workforce.",
      icon: <FaChartLine className="text-2xl text-indigo-500" />
    },
    {
      title: "Industry-Ready Graduates",
      desc: "Our curriculum aligns with industry standards, ensuring students are job-ready upon graduation.",
      icon: <FaGraduationCap className="text-2xl text-purple-500" />
    },
    {
      title: "Enhanced Critical Thinking",
      desc: "Problem-solving and analytical thinking through real-world projects and challenges.",
      icon: <FaLightbulb className="text-2xl text-pink-500" />
    },
    {
      title: "Competitive Advantage",
      desc: "Schools with CoE Labs attract more students and gain recognition as innovation leaders.",
      icon: <FaAward className="text-2xl text-yellow-500" />
    }
  ];

  const curriculum = [
    {
      level: "Elementary (Grades 1-5)",
      focus: "Introduction to Coding & Robotics",
      description: "Visual programming, basic robotics, and computational thinking through engaging activities."
    },
    {
      level: "Middle School (Grades 6-8)",
      focus: "Advanced Robotics & IoT",
      description: "Building robots, IoT projects, and introduction to artificial intelligence concepts."
    },
    {
      level: "High School (Grades 9-12)",
      focus: "AI, Machine Learning & Data Science",
      description: "Deep learning, neural networks, data analysis, and ethical AI development."
    }
  ];

  const testimonials = [
    {
      quote: "The CoE Lab transformed our school into an innovation hub. Students are more engaged and excited about learning.",
      author: "Dr. Priya Sharma",
      position: "Principal, Delhi Public School",
      avatar: "/testimonial1.jpg"
    },
    {
      quote: "Our students now have hands-on experience with cutting-edge technologies. They're building real-world solutions.",
      author: "Rajesh Kumar",
      position: "STEM Coordinator, Bangalore International School",
      avatar: "/testimonial2.jpg"
    },
    {
      quote: "iSpark's CoE Lab has revolutionized our approach to STEM education. The students love the interactive learning experience.",
      author: "Anita Reddy",
      position: "Director, Chennai Public School",
      avatar: "/testimonial3.jpg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>iSpark CoE Labs - Future-Ready Education Solutions</title>
        <meta name="description" content="Transform your school with iSpark's Centre of Excellence Labs. Hands-on learning in AI, Robotics, IoT, and Coding for all grades." />
        <meta name="keywords" content="STEM education, AI lab, robotics lab, IoT lab, coding education, future-ready skills" />
      </Helmet>
      <Navbar />
      <br></br><br></br>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-8 overflow-hidden">
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
          
          <div className="container mx-auto relative z-10 text-center">
            <div className="max-w-8xl mx-auto">
              <motion.div
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-white/20"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Building Future-Ready Classrooms with iSpark CoE Labs
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-8xl"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  iSpark's Centre of Excellence (CoE) Labs are state-of-the-art hubs designed to equip students with 21st-century skills through hands-on experiential learning in AI, Robotics, IoT, Coding, and more.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Partner With Us
                    <FaCheckCircle className="ml-2"/>
                  </motion.a>
                  <motion.a
                    href="#curriculum"
                    className="inline-flex items-center justify-center bg-white dark:bg-gray-700 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold py-3 px-8 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Curriculum
                    <FaBook className="ml-2"/>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Images */}
        <section className="py-8 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "/coehero1.png",
                "/coehero2.jpg",
                "/coehero3.jpeg",
                "/coehero5.jpg",
                "/coehero7.jpg",
                "/coehero6.jpg",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="relative overflow-hidden rounded-xl shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={src}
                    alt={`Lab ${i + 1}`}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-white font-medium">Innovation in Action</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="relative py-16 px-4 md:px-8 overflow-hidden">
          <div className="container mx-auto max-w-8xl">
            <div className="text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                What is <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">iSpark CoE Lab?</span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 max-w-8xl mx-auto leading-relaxed"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                iSpark's CoE is a research-driven platform built to nurture creativity, critical thinking, problem-solving, and computational skills. We partner with schools to create fully integrated facilities where students gain practical knowledge in emerging technologies and become future-ready innovators.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
          <div className="container mx-auto max-w-8xl">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                Transform Education with <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">CoE Labs</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experience the transformative power of hands-on technology education
              </motion.p>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-8xl">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                Why Choose <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">iSpark CoE Labs?</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our comprehensive solution for future-ready education
              </motion.p>
            </div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-6">
                    <motion.div 
                      className="mb-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.desc}</p>
                  </div>
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
          <div className="container mx-auto max-w-8xl">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Progressive Learning Path
                </span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our curriculum grows with students, building skills from basic to advanced
              </motion.p>
            </div>

            <div className="space-y-8">
              {curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-6"
                  whileHover={{ x: 5, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="md:w-1/3">
                    <motion.div 
                      className="bg-indigo-100 dark:bg-indigo-900/50 rounded-xl p-6 text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{item.level}</h3>
                    </motion.div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.focus}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-8xl">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                Explore <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Future Technologies</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Cutting-edge tools and platforms for modern education
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techList.map((tech, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <motion.div 
                    className="relative z-10 flex flex-col items-center"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-3">
                      {tech.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{tech.name}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
          <div className="container mx-auto max-w-8xl">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                Our <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">CoE in Action</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                See how our labs transform classrooms into innovation hubs
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { src: "/coeact.jpg", title: "Discover the Power of Innovation" },
                { src: "/coeact2.jpg", title: "Transforming Classrooms" },
                { src: "/coeact3.jpg", title: "Smart Classrooms for Next-Gen Learning" },
                { src: "/coeact4.jpg", title: "Hands-On Technology for Young Innovators" },
              ].map((img, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                  whileHover={{ y: -10 }}
                >
                  <motion.img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white text-lg font-medium">{img.title}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

     

        {/* STEM Lab & VTU Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
          <div className="container mx-auto max-w-8xl">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                Our Flagship Offerings: <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">STEM Lab & VTU</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Comprehensive solutions for educational excellence
              </motion.p>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* STEM Lab Card */}
              <motion.div
                variants={staggerItem}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-56 overflow-hidden">
                  <motion.img
                    src="/stem.jpg"
                    alt="STEM Lab"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    STEM Lab – Hands-on Learning for Young Innovators
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our STEM Lab empowers school students from Grades 1–8 to explore Science, Technology, Engineering, and Mathematics in a fun, practical way.
                  </p>
                  <motion.a
                    href="#stem"
                    className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore STEM Lab
                    <FaCheckCircle className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>

              {/* VTU Card */}
              <motion.div
                variants={staggerItem}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-56 overflow-hidden">
                  <motion.img
                    src="/VTU.jpg"
                    alt="VTU"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    VTU Integrated with iSpark E-Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Through its collaboration with iSpark, VTU is delivering cutting-edge next-generation learning solutions, helping bridge the gap between academics and industry.
                  </p>
                  <motion.a
                    href="#vtu"
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore VTU E-Learning
                    <FaCheckCircle className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .FaQuoteLeft {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default CoeLab;