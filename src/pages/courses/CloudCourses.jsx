import React from "react";
import { Link } from "react-router-dom"; // use Link for navigation
import { FaRobot,FaLightbulb, FaCloud, FaMicrochip, FaBrain, FaArrowRight, FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "@/components/landing/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { 
FaUserGraduate,FaGraduationCap,
FaRupeeSign,
FaCheck,
FaGithub, 
FaVideo,
FaShieldAlt,
FaLaptop,
FaProjectDiagram,
FaNetworkWired,
FaClock,
FaUsers,
FaClipboardCheck,
FaTools,
FaClipboardList,
FaAward,
FaMedal,
FaChalkboardTeacher,
FaCertificate,
FaMoneyBillWave,
  FaInfoCircle, 
  FaBookOpen, 
  FaCogs, 
  FaCheckCircle 
} from 'react-icons/fa';

import {   FaSatellite } from "react-icons/fa";
import { GiArtificialIntelligence, GiCircuitry, GiProcessor } from "react-icons/gi";
import { MdSensors } from "react-icons/md";
import Fees from "./Fees.jsx"
import {MdOutlineAutoAwesome} from 'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';
export default function AICourses() {
  const { isDark } = useTheme();
  const courses = [
    {
      id: 'robotics',
      title: 'Diploma in Artificial Intelligence Applications Across Industries',
      description: 'Explore AI applications that drive efficiency, automation, and intelligent decision-making across industries such as manufacturing, logistics, and business.',
      icon: <FaBrain className="text-4xl" />,
      color: 'from-blue-500 to-blue-600',
      route: '/courses/robotics'
    },
  {
     id: 'cybersecurity',
     title: 'Career-Ready Diploma in Cybersecurity & Digital Forensics',
     description: 'Learn to protect digital infrastructure, prevent cyber attacks, and conduct forensic investigations to secure critical systems in real-world environments.',
     icon: <FaShieldAlt className="text-4xl" />,
     color: 'from-blue-500 to-purple-500',
     route: '/courses/cybersecurity'
   },
      {
        id: 'ai',
        title: 'Professional Diploma in Humanoid Robotics for Service Industries',
        description: 'Design, program, and deploy humanoid robots specifically for service sectors like healthcare, hospitality, and retail, emphasizing interaction and automation.',
        icon: <FaRobot className="text-4xl" />,
        color: 'from-purple-500 to-purple-600',
        route: '/courses/ai'
      },
   {
     id: 'ug',
     title: 'Year-long STEM Readiness For UG/Students',
     description: 'Develop STEM skills through practical IoT and IIoT projects, building smart systems and gaining real-world engineering experience throughout the year.',
     icon: <FaLightbulb className="text-4xl" />,
     color: 'from-green-500 to-blue-500',
     route: '/courses/ug'
   }
  ];

  const partners = [
  {
    name: 'AWS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
    description: 'Cloud Platform Partner'
  },
  {
    name: 'Microsoft Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png',
    description: 'Cloud Services Partner'
  },
  {
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png',
    description: 'Cloud Technology Partner'
  },
  {
    name: 'IBM Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
    description: 'Enterprise Cloud Partner'
  },
  {
    name: 'Oracle Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png',
    description: 'Database Cloud Partner'
  },
  {
    name: 'VMware',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/2560px-Vmware.svg.png',
    description: 'Virtualization Partner'
  },
  {
    name: 'Red Hat',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/2560px-Red_Hat_logo.svg.png',
    description: 'Open Cloud Partner'
  }
];


  return (
    <>
   <Navbar/>
   <br></br><br></br>
<div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
  <div className="max-w-8xl mx-auto px-4 md:px-8 py-8">
  <div className="relative flex items-center justify-center my-12 px-6">
      {/* Background floating icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Existing Icons */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-10 left-10 text-indigo-400 text-5xl"
        >
          <FaRobot />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.2, y: -10 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-12 right-16 text-purple-400 text-6xl"
        >
          <FaCogs />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.2, x: 20 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-1/2 left-1/4 text-pink-400 text-7xl"
        >
          <FaMicrochip />
        </motion.div>

        {/* New Icons */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-32 text-green-400 text-5xl opacity-20"
        >
          <GiArtificialIntelligence />
        </motion.div>

        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-24 left-20 text-yellow-400 text-6xl opacity-25"
        >
          <GiCircuitry />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 text-blue-400 text-5xl opacity-20"
        >
          <GiProcessor />
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 text-red-400 text-6xl opacity-20"
        >
          <MdSensors />
        </motion.div>

        <motion.div
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-5 right-1/2 text-cyan-400 text-6xl opacity-20"
        >
          <FaSatellite />
        </motion.div>
      </div>

      {/* Title content */}
      <div className="text-center max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold leading-snug"
        >
          Industry-Ready Diploma in{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
              Cloud & Edge Technologies
            </span>
          </span>
        </motion.h2>
      </div>
    </div>
<br></br>
<header className="mb-10 text-center md:text-left">
  {/* Main Heading */}
<h1
  className="flex items-center gap-3 text-xl md:text-2xl font-semibold 
             bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 
             dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 
             px-5 py-3 rounded-lg shadow-md w-fit mb-8"
>
  <FaGraduationCap className="text-purple-600 dark:text-pink-400 text-2xl" />
  About the Course
</h1>

  {/* Course Description */}
  <p className="text-gray-900 dark:text-gray-100 text-lg md:text-xl leading-relaxed mb-4">
    <span className="text-indigo-500 dark:text-indigo-400 font-semibold">
     Industry-Ready Diploma in Cloud & Edge Technologies
    </span>{" "}
    equips learners to design, program, and deploy humanoid robots for healthcare, hospitality, retail, and customer service. Gain hands-on experience with AI, sensors, and real-world projects to become industry-ready.
  </p>

  <p className="text-gray-700 dark:text-gray-300 text-md md:text-lg mb-6">
    Browse course modules, work on real-world humanoid robotics projects, and download the brochure to start your journey as an AI robotics expert.
  </p>

  {/* CTA Button */}

</header>
        {/* Three-column layout */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* Left: Courses column */}
<aside className="md:col-span-3 order-2 md:order-1">
  <div className="sticky top-6">
    <div
      className={`rounded-2xl shadow p-4 md:p-5 ${
        isDark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">All Courses</h2>
      <ul className="space-y-4">
        {courses.map((c) => (
          <li key={c.id}>
            <Link
              to={c.route}
              className={`flex flex-col gap-2 w-full rounded-xl border px-3 py-3 transition-colors duration-300 text-justify
                ${
                  isDark
                    ? 'border-gray-700 hover:border-gray-600 hover:bg-gray-800'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center gap-2">
                <span className={`p-2 rounded-full text-white bg-gradient-to-r ${c.color}`}>
                  {c.icon}
                </span>
                <span className="font-semibold">{c.title}</span>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{c.description}</p>

              {/* Explore Button for each course */}
              <div
                className={`inline-flex items-center gap-2 mt-2 text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                  isDark
                    ? 'text-purple-400 hover:text-purple-300'
                    : 'text-purple-600 hover:text-purple-700'
                }`}
              >
                Explore Courses
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</aside>


  <main className="md:col-span-6 order-1 md:order-2 space-y-10 px-4 md:px-0">

  {/* Course Description */}
  <section className="my-8 px-5 md:px-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-2xl text-justify p-6">
    <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-4 ">
      <FaBookOpen className="text-3xl text-purple-400 mr-3" />
      Course Description
    </h2>
    <p className="leading-relaxed mb-4">
      The VTU Hands-on STEM Lab is a 60-hour immersive program designed for pre-final and final-year engineering students across all disciplines, including Mechanical, EEE, EC, CS, IT, and Bio-Med. This program equips students with practical, project-based experience in Robotics, IoT, Edge AI, Computer Vision, 3D Printing, Cloud/DevOps, and Cybersecurity.
    </p>
    <p className="leading-relaxed">
      Learners build working projects every session, forming a mini-portfolio with GitHub repositories and demo videos that showcase real-world engineering skills. Each session embeds 21st-century skills: problem framing, hypothesis, build, test, and communication through short 2-minute stand-ups.
    </p>
  </section>

  {/* Curriculum Checklist */}
  <section className="my-8 px-4 md:px-0 space-y-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-2xl p-6">
    {/* Header */}
    <div className="flex items-center mb-4 space-x-3">
      <FaClipboardList className="text-2xl text-green-400" />
      <h2 className="text-3xl font-bold">
        Curriculum Checklist <span className="text-green-400 text-sm">(60 Hours / 40 Sessions)</span>
      </h2>
    </div>
    <p className="text-sm md:text-base mb-4">
      Program: 40 sessions × 1.5 hrs. Each session: <span className="font-semibold text-green-400">10-60-10</span> pattern — intro, hands-on, demo, quiz.
    </p>

    {/* Modules */}
    {[
      { title: "Module 1 — Lab Foundations & Rapid Prototyping (S1–S4)", color: "green", sessions: [
        "S1: Lab safety & instruments. Project: test a sensor on a breadboard.",
        "S2: Microcontroller bring-up. Project: LED dimmer with button debounce.",
        "S3: Serial communication & PCB basics. Project: fabricate tiny LED PCB.",
        "S4: Mechanical fasteners & 3D CAD. Project: 3D-print a sensor mount."
      ]},
      { title: "Module 2 — Sensors, Actuators & Control (S5–S8)", color: "yellow", sessions: [
        "S5: DC motors & drivers. Project: speed-controlled DC motor.",
        "S6: Servos & stepper motors. Project: servo pan-tilt tracking dot.",
        "S7: Closed-loop control (PID). Project: balance a beam using PID.",
        "S8: Instrumentation & logging. Project: log IMU & temperature."
      ]},
      { title: "Module 3 — IoT & Cloud (S9–S12)", color: "blue", sessions: [
        "S9: ESP32 networking (Wi-Fi, MQTT). Project: sensor → dashboard.",
        "S10: Edge → Cloud pipelines. Project: alert on threshold.",
        "S11: Power & reliability. Project: battery IoT node simulation.",
        "S12: Device security fundamentals. Project: provision secure credentials."
      ]},
      { title: "Module 4 — Mobile Robotics (S13–S16)", color: "purple", sessions: [
        "S13: Robot chassis & 2WD kinematics. Project: build & drive calibrated 2WD bot.",
        "S14: Line following & maze logic. Project: PID line follower with lap-time metric.",
        "S15: Mapping & sensors. Project: obstacle avoidance grid with state machine.",
        "S16: Mechanical add-ons. Project: 3D-print sensor bracket & improve clearance."
      ]},
      { title: "Module 5 — Computer Vision Foundations (S17–S20)", color: "pink", sessions: [
        "S17: Image basics (OpenCV, thresholds). Project: shape & color detection.",
        "S18: Classical CV (edges, homography). Project: fiducial tracking.",
        "S19: Data collection & labeling. Project: create 100-image dataset.",
        "S20: Tiny classifiers (MobileNet/TFLite). Project: run a classifier on Raspberry Pi."
      ]},
      { title: "Module 6 — ML/AI for Engineers (S21–S24)", color: "teal", sessions: [
        "S21: ML pipeline (split, fit, validate). Project: predict motor RPM from PWM & load.",
        "S22: TinyML on MCU (quantization). Project: gesture recognition on ESP32.",
        "S23: Jetson bring-up (containers, CUDA, cameras). Project: run YOLO-N/v8 on Jetson.",
        "S24: Edge optimization (INT8, batching). Project: 2× speed improvement."
      ]},
      { title: "Module 7 — Edge + Cloud + DevOps (S25–S28)", color: "orange", sessions: [
        "S25: APIs & microservices (FastAPI). Project: device → API → dashboard.",
        "S26: CI/CD for firmware & models. Project: GitHub Actions builds.",
        "S27: Telemetry at scale (InfluxDB/Grafana). Project: live lab dashboard.",
        "S28: OTA & fleet management. Project: staged rollout to 10 ESP32s."
      ]},
      { title: "Module 8 — 3D Printing & Additive Design (S29–S32)", color: "indigo", sessions: [
        "S29: DfAM principles. Project: print motor mount & test fit.",
        "S30: Materials & strength. Project: bracket A/B test with deflection report.",
        "S31: Design sprint & reverse engineering. Project: recreate & improve coupler.",
        "S32: Mechanical-electrical integration. Project: printed enclosure with standoffs."
      ]},
      { title: "Module 9 — Cybersecurity & Digital Forensics (S33–S36)", color: "red", sessions: [
        "S33: Network fundamentals & traffic analysis. Project: capture & interpret MQTT sessions.",
        "S34: Threat modeling for robots/IoT. Project: STRIDE analysis & mitigation backlog.",
        "S35: Hardening & secure updates. Project: sign firmware & verify at boot.",
        "S36: DFIR basics. Project: recover incident timeline from device logs."
      ]},
      { title: "Module 10 — Capstone & Showcase (S37–S40)", color: "teal", sessions: [
        "S37: Capstone project kickoff. Teams select a domain.",
        "S38: Mid-project checkpoint. Submit demo video, GitHub repo, draft BOM.",
        "S39: Final project completion. Submit demo, GitHub repo, BOM, technical brief.",
        "S40: Expo & viva. Stakeholder demo day with rubric-based grading & feedback."
      ]},
    ].map((module, idx) => (
      <div key={idx} className={`p-4 border-l-4 border-${module.color}-400 hover:border-${module.color}-500 transition-colors duration-200`}>
        <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
        <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
          {module.sessions.map((session, sidx) => (
            <motion.li
              key={sidx}
              className={`flex items-start space-x-2 p-1 rounded hover:bg-${module.color}-900 transition`}
              whileHover={{ scale: 1.02 }}
            >
              <FaCheckCircle className={`text-${module.color}-400 mt-1 flex-shrink-0`} />
              <span>{session}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ))}
  </section>

  {/* Eligibility */}
  <div className="my-6 space-y-3 bg-white dark:bg-gray-900 p-4 rounded-2xl text-gray-900 dark:text-gray-200">
    <div className="flex items-center mb-4 space-x-3">
      <FaUserGraduate className="text-2xl text-yellow-400" />
      <h2 className="text-1xl md:text-2xl font-bold">Eligibility</h2>
    </div>
    <div className="space-y-2">
      <div className="flex items-start space-x-2">
        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
        <p>Pre-final & final-year engineering students (All disciplines)</p>
      </div>
      <div className="flex items-start space-x-2">
        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
        <p>Basic programming knowledge recommended (C/C++/Python)</p>
      </div>
    </div>
  </div>

  {/* Pre-requisites */}
  <div className="my-6 space-y-3 bg-white dark:bg-gray-900 p-4 rounded-2xl text-gray-900 dark:text-gray-200">
    <div className="flex items-center mb-4 space-x-3">
      <FaCogs className="text-xl text-pink-400" />
      <h2 className="text-2xl font-bold">Pre-requisites</h2>
    </div>
    <div className="space-y-2">
      <div className="flex items-start space-x-2">
        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
        <p>Laptop with USB ports, Wi-Fi</p>
      </div>
      <div className="flex items-start space-x-2">
        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
        <p>Basic knowledge of electronics and programming</p>
      </div>
    </div>
  </div>
<Fees/>
</main>


          {/* Right: Download brochure */}
<aside className="md:col-span-3 order-3">
  <div className="sticky top-6">
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-4">
      {/* Header */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
        <FaFileDownload className="text-indigo-600 dark:text-indigo-400" />
        <span>Download Brochure</span>
      </h2>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base text-justify">
        Get the complete details of our <span className="font-semibold text-indigo-600 dark:text-indigo-400">Industry-Ready Diploma in Cloud & Edge Technologies</span> course. Learn about modules, curriculum, projects, and career opportunities.
      </p>

      {/* Highlights */}
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        <li className="flex items-center space-x-2">
          <FaCheckCircle className="text-purple-500 dark:text-purple-400" />
          <span>Comprehensive course modules</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCheckCircle className="text-purple-500 dark:text-purple-400" />
          <span>Hands-on AI robotics projects</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCheckCircle className="text-purple-500 dark:text-purple-400" />
          <span>Career guidance & certifications</span>
        </li>
      </ul>

      {/* Download Button */}
      <a
        href="/brochure.pdf"
        download
        className="inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-900 dark:text-gray-100"
      >
        Download PDF
      </a>

      {/* Note */}
      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm ">
        Instant access. Start planning your journey into AI-driven robotics today!
      </p>
    </div>
  </div>
</aside>

        </div>
      </div>
    </div>
     {/* Partners Section */}
          <div className="max-w-7xl mx-auto mb-20 overflow-hidden">
            <h2 className={`text-3xl font-bold text-center mt-8 mb-8 ${isDark ? 'text-white' : 'text-gray-600'}`}>
             Our Industry Partners
            </h2>
            <div className="relative">
              <motion.div 
                className="flex gap-8 py-4"
                animate={{ x: ["0%", "-90%"] }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    className={`flex-shrink-0 p-6 rounded-xl ${
                      isDark
                        ? 'bg-white/5 hover:bg-white/10'
                        : 'bg-white hover:bg-purple-50'
                    } border ${
                      isDark
                        ? 'border-purple-500/20'
                        : 'border-purple-100'
                    } transition-all duration-300 group min-w-[280px]`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 object-contain mx-auto mb-4 filter dark:invert"
                    />
                    <p className={`text-sm text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {partner.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
             
          </div>
    <Footer/>
     </>
  );
}
