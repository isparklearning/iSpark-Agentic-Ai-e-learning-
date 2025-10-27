import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRobot, FaDatabase, FaCloud, FaAtom, FaMicrochip } from 'react-icons/fa';
import Navbar from './Navbar.jsx';
import HeroSection from './HeroSection.jsx';
import WhyAISection from './WhyAISection.jsx';
import PricingSection from './PricingSection.jsx';
import TestimonialsSection from './TestimonialsSection.jsx';
import PainPointSection from './PainPointSection.jsx';
import HowItWorksSection from './HowItWorksSection.jsx';
import CourseCategories from '../courses/CourseCategories.jsx';
import { Helmet } from "react-helmet";
import Footer from "../Footer.jsx"
import CallToAction from './CallToAction.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

const FloatingIcon = ({ icon: Icon, delay, duration, x, y }) => {
  const xOffset = 20;
  const yOffset = 20;
  
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, xOffset, 0, -xOffset, 0],
        y: [0, yOffset, 0, -yOffset, 0],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay
      }}
      className="absolute text-purple-500/10 transform hover:scale-110 transition-transform"
      style={{ left: x, top: y }}
    >
      <Icon className="text-4xl" />
    </motion.div>
  );
};

const BackgroundIcons = () => {
  const icons = [
    { Icon: FaCode, x: "10%", y: "20%", delay: 0, duration: 8 },
    { Icon: FaBrain, x: "85%", y: "15%", delay: 1, duration: 10 },
    { Icon: FaRobot, x: "75%", y: "65%", delay: 2, duration: 9 },
    { Icon: FaDatabase, x: "15%", y: "75%", delay: 3, duration: 11 },
    { Icon: FaCloud, x: "50%", y: "85%", delay: 4, duration: 12 },
    { Icon: FaAtom, x: "90%", y: "40%", delay: 5, duration: 10 },
    { Icon: FaMicrochip, x: "5%", y: "50%", delay: 6, duration: 9 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          icon={icon.Icon}
          x={icon.x}
          y={icon.y}
          delay={icon.delay}
          duration={icon.duration}
        />
      ))}
    </div>
  );
};

const LandingPage = () => {
  const { currentTheme } = useTheme();

  return (
    <div className={`min-h-screen ${currentTheme.background.primary}`}>

      <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1></h1>
    </div>
      {/* Animated Background Icons */}
      <BackgroundIcons />
      {/* Main Content */}
      <main className="relative z-10">
        <Navbar />
        <HeroSection />
        <PainPointSection />
        <WhyAISection />
        <HowItWorksSection />
        <CallToAction />
        <PricingSection />
        <Footer/>
      </main>
    </div>
  );
};

export default LandingPage; 