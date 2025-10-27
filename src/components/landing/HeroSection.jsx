import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPlay, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx';
import AIButton from '../common/AIButton.jsx';
import CoursesSection from '../courses/Courses.jsx';
const HeroSection = () => {
  const [studentCount, setStudentCount] = useState(3533);
  const { currentTheme, isDark } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative min-h-screen mt-20 pb-10 flex items-center overflow-hidden ${currentTheme.background.primary}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.07]' : 'opacity-[0.05]'}`}
          style={{
            backgroundImage: `linear-gradient(to right, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px),
                             linear-gradient(to bottom, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            transform: 'perspective(1000px) rotateX(60deg) scale(2.5)',
            transformOrigin: '50% 0%'
          }}
        />
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 animate-gradient-shift"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left relative z-10 py-8 max-w-2xl mx-auto lg:mx-0">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold tracking-tight text-center lg:text-left leading-tight"
            >
              <span className={`${currentTheme.text.primary} transition-colors hover:text-purple-400 text-xl md:text-2xl lg:text-3xl`}>
                WORLD'S FIRST
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-flow font-bold text-3xl md:text-5xl lg:text-6xl">
                AGENTIC AI PLATFORM
              </span>
              <br />
              <span className={`${currentTheme.text.primary} transition-colors hover:text-purple-400 text-xl md:text-2xl lg:text-3xl`}>
                FOR
              </span>
              {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-flow font-bold text-3xl md:text-5xl lg:text-6xl">
                LEARNING & PLACEMENT
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-lg md:text-xl ${currentTheme.text.secondary} mb-6 md:mb-8 hover:text-purple-400 transition-colors text-justify max-w-xl mx-auto lg:mx-0`}
            >
              Acquire industry5.0- relevant skills in 12 most sought-after technologies and get placed in industries specialising in Robotics, AI, IoT, EV, Renewable Energy, Cybersecurity, Quantum Computing, Cloud Computing, Edge Computing etc.
            </motion.p>

            {/* Feature List */}
            <div className="grid gap-4 mb-8">
              {[
                "Learn from industry experts with real-world experience",
                "Build a portfolio of cutting-edge AI projects",
                "Get personalized mentorship and career guidance"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300"
                >
                  <FaCheckCircle className="text-purple-500 text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className={`${currentTheme.text.secondary} group-hover:text-purple-400 transition-colors`}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10 isolate">
              <a
  href='/coursessection'
  target="_blank"
  rel="noopener noreferrer"
  className="w-auto group px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
>
  <FaRocket className="text-xl" />
  Start Learning Now
  <FaChartLine className="text-xl group-hover:translate-x-1 transition-transform" />
</a>


              <AIButton
                onClick={() => {}}
                variant="secondary"
                className="text-base font-semibold tracking-wide relative z-10 hover:z-20"
              >
                <span className="flex items-center gap-2 relative">
                  Watch Demo
                  <FaPlay className="text-base transition-transform group-hover/button:translate-x-1 group-hover/button:scale-110" />
                </span>
              </AIButton>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-full min-h-[600px] lg:min-h-[calc(100vh-160px)]">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 h-full group"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02] shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                  alt="Students learning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${currentTheme.gradient.primary} opacity-30 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`absolute top-8 -left-16 ${currentTheme.glass.card} p-4 rounded-xl ${currentTheme.border.primary} shadow-lg backdrop-blur-md w-64 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 hover:border-purple-500/30 group/card`}
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                  alt="Student success"
                  className="w-full h-64 object-cover rounded-lg mb-3 group-hover/card:scale-[1.02] transition-transform duration-300"
                />
                <p className={`${currentTheme.text.primary} font-semibold group-hover/card:text-purple-400 transition-colors`}>
                  80% Salary Growth
                </p>
                <p className={`${currentTheme.text.secondary} text-sm group-hover/card:text-purple-300 transition-colors`}>
                  Average after completion
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className={`absolute bottom-8 -right-16 ${currentTheme.glass.card} p-4 rounded-xl ${currentTheme.border.primary} shadow-lg backdrop-blur-md w-64 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 hover:border-purple-500/30 group/card`}
              >
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=200"
                  alt="AI Projects"
                  className="w-full h-32 object-cover rounded-lg mb-3 mr-3 group-hover/card:scale-[1.02] transition-transform duration-300"

                />
                <p className={`${currentTheme.text.primary} font-semibold group-hover/card:text-purple-400 transition-colors`}>
                  Real-world Projects
                </p>
                <p className={`${currentTheme.text.secondary} text-sm group-hover/card:text-purple-300 transition-colors`}>
                  Build your portfolio
                </p>
              </motion.div>
            </motion.div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;