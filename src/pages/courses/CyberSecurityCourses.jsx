import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import ThemeToggle from "../../components/common/ThemeToggle.jsx";
import { useTheme, ThemeProvider } from "../../context/ThemeContext.jsx";
import Fees from "./Fees";
import { FaRobot, FaCogs, FaSatellite } from "react-icons/fa";
import { GiArtificialIntelligence, GiCircuitry, GiProcessor } from "react-icons/gi";
import { MdSensors } from "react-icons/md";
// Icons
import { 
  FaMicrochip, FaBrain, FaCloud, FaLightbulb, FaArrowRight, FaBookOpen, FaFileDownload,FaUserGraduate,FaGraduationCap,
  FaServer, FaUserTie, FaBalanceScale, FaClipboardList, FaNetworkWired, FaLock,FaHandsHelping, FaUsers,FaTools ,FaClipboardCheck,
  FaLaptopCode, FaBug, FaShieldAlt, FaSearch, FaMedal, FaBriefcase, FaCheckCircle,FaRibbon,FaVideo,FaFileAlt,FaRupeeSign,FaMoneyCheckAlt,FaHandshake,FaClock,FaChartLine
} from 'react-icons/fa';
import {MdOutlineAutoAwesome} from 'react-icons/md';
export default function CyberSecurityCourses() {
  return (
    <ThemeProvider>
      <InnerCyberSecurityCourses />
    </ThemeProvider>
  );
}

function InnerCyberSecurityCourses() {
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
       id: 'ai',
       title: 'Professional Diploma in Humanoid Robotics for Service Industries',
       description: 'Design, program, and deploy humanoid robots specifically for service sectors like healthcare, hospitality, and retail, emphasizing interaction and automation.',
       icon: <FaRobot className="text-4xl" />,
       color: 'from-purple-500 to-purple-600',
       route: '/courses/ai'
     },
   {
     id: 'cloud',
     title: 'Industry-Ready Diploma in Cloud & Edge Technologies',
     description: 'Gain skills to implement and manage cloud and edge computing solutions for scalable, high-performance, and real-time applications in modern enterprises.',
     icon: <FaCloud className="text-4xl" />,
     color: 'from-blue-500 to-purple-500',
     route: '/courses/cloud'
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
    <div className={isDark ? "dark" : ""}>
      <Navbar />
      <br></br>
      <ThemeToggle />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-9xl mx-auto px-4 md:px-8 py-8">

          {/* Page Header */}
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
          Career-Ready Diploma in{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
Cybersecurity & Digital Forensics
            </span>
          </span>
        </motion.h2>
      </div>
    </div>
<br></br>
          {/* About Section */}
          <header className="mb-12 text-center md:text-left px-4 md:px-0">
           <h1
             className="flex items-center gap-3 text-xl md:text-2xl font-semibold 
                        bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 
                        dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 
                        px-5 py-3 rounded-lg shadow-md w-fit mb-8"
           >
             <FaGraduationCap className="text-purple-600 dark:text-pink-400 text-2xl" />
             About the Course
           </h1>
            <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
              Secure your future with our <span className="font-semibold text-indigo-600 dark:text-indigo-400">Career-Ready Diploma in Cybersecurity & Digital Forensics</span>. Learn to protect digital assets, detect and respond to cyber threats, and investigate cybercrimes using cutting-edge forensic tools and techniques. Gain practical skills to safeguard networks, applications, and data in real-world environments.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-base md:text-lg lg:text-xl">
              Work on hands-on projects, explore advanced cybersecurity frameworks, and download the brochure to kickstart your journey toward becoming a certified cybersecurity and digital forensics professional.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-12">

            {/* Left Column: Courses */}
            <aside className="md:col-span-3 order-2 md:order-1">
              <div className="sticky top-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 md:p-5">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">All Courses</h2>
                  <ul className="space-y-4">
                    {courses.map((c) => (
                      <li key={c.id}>
                        <Link
                          to={c.route}
                          className="flex flex-col gap-2 w-full text-justify rounded-xl border border-gray-300 dark:border-gray-600 hover:border-purple-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-3 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className={`p-2 rounded-full text-white bg-gradient-to-r ${c.color}`}>
                              {c.icon}
                            </span>
                            <span className="font-semibold text-gray-800 dark:text-gray-100">{c.title}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{c.description}</p>
                          <div className={`inline-flex items-center gap-2 mt-2 text-sm font-semibold ${isDark ? "text-purple-400 hover:text-purple-300" : "text-purple-600 hover:text-purple-700"} transition-colors duration-300 cursor-pointer`}>
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

            {/* Center Column: Course Description + Curriculum + Experiential Stack */}
            <main className="md:col-span-6 order-1 md:order-2 space-y-10 px-4 md:px-0">

              {/* Course Description */}
              <section className="my-8 px-4 md:px-6 py-6 border border-purple-400 dark:border-purple-700 rounded-xl bg-white dark:bg-gray-800 shadow">
                <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  <FaBookOpen className="text-3xl text-purple-600 dark:text-purple-400 mr-2" />
                  Course Description
                </h2>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  The VTU Hands-on STEM Lab is a 60-hour immersive program designed for pre-final and final-year engineering students across all disciplines...
                </p>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  Learners build working projects every session, forming a mini-portfolio with GitHub repositories and demo videos...
                </p>
              </section>

              {/* Cybersecurity Curriculum */}
             <section className="my-12 px-4 md:px-0 space-y-8 max-w-5xl mx-auto">
  {/* Header */}
  <div className="flex items-center mb-6 space-x-4">
    <FaClipboardList className="text-4xl text-green-600" />
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
      Cybersecurity Curriculum
    </h2>
  </div>

  <p className="text-gray-900 dark:text-gray-300 text-sm md:text-base mb-6">
    Total program spans <span className="font-semibold text-green-600">26 weeks</span> across phases. Each phase includes hands-on labs, practical exercises, and key artefacts.
  </p>

  {/* Phases */}
  {[ 
    { phase: "Phase 1 — Boot-Camp",  duration: "Week 1 | Duration: 1 week", focus: "Cybersecurity & Network Fundamentals, Linux/Windows, Command Line & Scripting", artefact: "Personal war-room VM image" },
    { phase: "Phase 2 — Cybersecurity Foundations",   duration: "Weeks 2–4 | Duration: 3 weeks", focus: "AD Fundamentals, Cryptography, Exploitation Basics, Metasploit, Web Hacking, Defensive Security", artefact: "Foundation Lab Completion Badge" },
    { phase: "Phase 3 — Pentesting", duration: "Weeks 5–8 | Duration: 4 weeks", focus: "Recon, Enumeration, Vulnerability Discovery, Privilege Escalation, Burp Suite Deep Dive", artefact: "Red Team Playbook #1" },
    { phase: "Phase 4 — Web Application Pentesting",  duration: "Weeks 9–11 | Duration: 3 weeks", focus: "SQLi, XSS, SSRF, RCE, Auth & Authorization Bypass, Client/Server Attacks", artefact: "Bug Bounty Exposure" },
    { phase: "Phase 5 — CompTIA Pentest+",  duration: "Weeks 12–15 | Duration: 4 weeks", focus: "Engagement Management, Recon, Vulnerability Analysis, Post-Exploitation", artefact: "Pentest+ Report & Exploit Demo" },
    { phase: "Phase 6 — SOC & Digital Forensics",  duration: "Weeks 16–19 | Duration: 4 weeks", focus: "Threat Intelligence, Traffic Analysis, SIEM (Splunk/ELK), Forensics (Autopsy, Volatility), Incident Response", artefact: "Forensic Case Report & SOC Dashboard" },
    { phase: "Phase 7 — CompTIA CySA+", duration: "Weeks 20–23 | Duration: 4 weeks", focus: "Security Operations, Threat Hunting, Vulnerability Management, Incident Reporting", artefact: "CySA+ Threat Detection Report" },
    { phase: "Phase 8 — Capstone: Purple-Team Fusion", duration: "Week 24 | Duration: 1 week", focus: "72-hour live-range hackathon, defend against pro red-teamers", artefact: "Executive After-Action Debrief" },
    { phase: "Phase 9 — Career Accelerator",  duration: "Weeks 25–26 | Duration: 2 weeks", focus: "CV & LinkedIn optimization, mock interviews, bug-bounty challenges", artefact: "Offer-Letter Scoreboard" }
  ].map((item, idx) => (
    <div
      key={idx}
      className={`p-5 border-l-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white/50 dark:bg-gray-900/90`}
      style={{ borderColor: `${item.color}-500`, backdropFilter: "blur(8px)" }}
    >
      <div className="flex items-start space-x-4">
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {item.phase}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.duration}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">Focus:</span> {item.focus}
          </p>
          <p className="font-medium text-gray-800 dark:text-gray-100">
            Key Skills / Artefact: {item.artefact}
          </p>
        </div>
      </div>
    </div>
  ))}
</section>


              {/* Experiential Delivery Stack */}
              <section className="my-12 px-6 py-6 border border-indigo-300 dark:border-indigo-700 rounded-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-3">
                  <FaLaptopCode className="text-indigo-600 dark:text-indigo-400 text-3xl" /> Experiential Delivery Stack
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Cyber-Range Campus", icon: <FaServer className="text-blue-600 dark:text-blue-400 text-3xl mt-1" />, desc: "40-node cloud lab per learner, auto-reset in 90 seconds for uninterrupted hands-on practice.", bg: "bg-blue-50 dark:bg-blue-900/30" },
                    { title: "Mentor Ratio", icon: <FaUserTie className="text-green-600 dark:text-green-400 text-3xl mt-1" />, desc: "1:4 guidance from OSCP, SANS, and ex-CERT professionals for personalized mentorship.", bg: "bg-green-50 dark:bg-green-900/30" },
                    { title: "Immersive Clinics", icon: <FaLaptopCode className="text-yellow-600 dark:text-yellow-400 text-3xl mt-1" />, desc: "Weekly “Breach-of-the-Week” sessions with industry leaders to tackle real-world scenarios.", bg: "bg-yellow-50 dark:bg-yellow-900/30" },
                    { title: "Ethics & Legal Track", icon: <FaBalanceScale className="text-red-600 dark:text-red-400 text-3xl mt-1" />, desc: "Taught by a cybercrime prosecutor; includes GDPR & PDPB compliance to instill legal awareness.", bg: "bg-red-50 dark:bg-red-900/30" }
                  ].map((item, idx) => (
                    <motion.div key={idx} className={`flex items-start gap-4 p-6 rounded-2xl shadow hover:shadow-lg transition ${item.bg}`} whileHover={{ scale: 1.02 }}>
                      {item.icon}
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-xl mb-1">{item.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Eligibility */}
<section className="my-8 px-6 py-6 border border-pink-300 dark:border-pink-700 rounded-xl bg-white dark:bg-gray-800">
  <div className="flex items-center mb-4 space-x-3">
    <FaUserGraduate className="text-2xl text-yellow-600" />
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Eligibility</h2>
  </div>

  <div className="space-y-2 text-gray-700 dark:text-gray-300">
    {[
      "Final-year B.E./B.Tech/BSc (CS, IT, ECE) students",
      "Working professionals with ≤3 years of experience",
      "Comfortable with Linux terminal and basic programming"
    ].map((item, idx) => (
      <motion.div
        key={idx}
        className="flex items-start gap-2 p-2 rounded hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition"
        whileHover={{ scale: 1.02 }}
      >
        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
        <p>{item}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Pre-requisites */}
<section className="my-8 px-6 py-6 border border-purple-300 dark:border-purple-700 rounded-xl bg-white dark:bg-gray-800">
  <div className="flex items-center mb-4 space-x-3">
    <FaCogs className="text-xl text-pink-600" />
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Pre-requisites</h2>
  </div>

  <div className="space-y-2 text-gray-700 dark:text-gray-300">
    {[
      "Basic Python or C programming knowledge",
      "Understanding of computer networks & operating systems",
      "Curiosity for real-world hacking, ethical investigation, and incident response"
    ].map((item, idx) => (
      <motion.div
        key={idx}
        className="flex items-start gap-2 p-2 rounded hover:bg-pink-50 dark:hover:bg-pink-900/20 transition"
        whileHover={{ scale: 1.02 }}
      >
        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
        <p>{item}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Course Delivery Details */}
<section className="my-8 px-6 py-6 border border-pink-300 dark:border-pink-700 rounded-xl bg-white dark:bg-gray-800">
  <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 space-x-2">
    <FaLaptopCode className="text-red-500" />
    <span>Course Delivery Details</span>
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    {[
      {
        icon: <FaLaptopCode className="text-indigo-600 text-2xl mt-1" />,
        text: "Mode: Online & Cloud-based cyber-range labs",
        bg: "bg-indigo-50 dark:bg-indigo-900/30"
      },
      {
        icon: <FaHandsHelping className="text-green-600 text-2xl mt-1" />,
        text: "Hands-on Practice: Daily lab missions & weekly hackathons",
        bg: "bg-green-50 dark:bg-green-900/30"
      },
      {
        icon: <FaUsers className="text-yellow-600 text-2xl mt-1" />,
        text: "Mentorship: 1:4 ratio with industry experts",
        bg: "bg-yellow-50 dark:bg-yellow-900/30"
      },
      {
        icon: <FaTools className="text-pink-600 text-2xl mt-1" />,
        text: "Tools Provided: Kali Linux, Metasploit, Burp Suite Pro, Splunk, Autopsy, Volatility",
        bg: "bg-pink-50 dark:bg-pink-900/30"
      },
      {
        icon: <FaClipboardCheck className="text-red-600 text-2xl mt-1" />,
        text: "Assessments: Live-range (40%), artefact quality (25%), peer review (20%), ethics compliance (15%)",
        bg: "bg-red-50 dark:bg-red-900/30"
      }
    ].map((item, idx) => (
      <motion.div
        key={idx}
        className={`flex items-start space-x-3 p-4 rounded-xl shadow hover:shadow-md transition ${item.bg}`}
        whileHover={{ scale: 1.02 }}
      >
        {item.icon}
        <p className="text-gray-800 dark:text-gray-100 font-medium">{item.text}</p>
      </motion.div>
    ))}
  </div>
</section>


{/* Certification / Diploma */}
<section className="my-8 px-6 py-6 border border-purple-300 dark:border-purple-700 rounded-xl bg-white dark:bg-gray-800">
  <div className="flex items-center mb-6 space-x-4">
    <FaRibbon className="text-4xl text-pink-800 dark:text-pink-400" />
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-wide">
      Certification / Diploma
    </h2>
  </div>

  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
    Portfolio includes:
  </p>

  <div className="grid md:grid-cols-2 gap-4 mb-6">
    {[
      { icon: <FaVideo className="text-red-600 dark:text-red-400 text-2xl" />, text: "3 Red-Team Exploit Videos" },
      { icon: <FaClipboardList className="text-blue-600 dark:text-blue-400 text-2xl" />, text: "2 Blue-Team Playbooks" },
      { icon: <FaFileAlt className="text-green-600 dark:text-green-400 text-2xl" />, text: "1 Court-Ready Forensic Report" },
      { icon: <FaVideo className="text-yellow-600 dark:text-yellow-400 text-2xl" />, text: "Mock Testimony Video" }
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center space-x-3 p-4 rounded-xl shadow hover:shadow-md transition bg-indigo-50 dark:bg-indigo-900/30"
      >
        {item.icon}
        <span className="font-medium text-gray-800 dark:text-gray-100">{item.text}</span>
      </div>
    ))}
  </div>

  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
    Certifications aligned with course:
  </p>

  <div className="flex flex-col gap-2 mb-4">
    {[
      "Offensive Security: CEH, eJPT, PT1, CompTIA Pentest+",
      "Defensive Security: CompTIA CySA+, CHFI, Splunk Core Certified"
    ].map((cert, idx) => (
      <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <FaCheckCircle className="text-green-600" />
        <span>{cert}</span>
      </div>
    ))}
  </div>

  <p className="text-gray-700 dark:text-gray-300 font-medium">
    Exam vouchers subsidized for top performers
  </p>
</section>

{/* Fee Section */}
<section className="my-8 px-6 py-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-sm bg-white dark:bg-gray-800 space-y-6">
  {/* Fee Header */}
  <div className="flex items-center space-x-3">
    <FaRupeeSign className="text-4xl text-indigo-600 dark:text-indigo-400" />
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
      Program Fee & Placement
    </h2>
  </div>

  {/* Fee Details */}
  <div className="space-y-3 text-gray-700 dark:text-gray-300">
    <p>
      The fee includes: <strong className="text-sky-600 font-bold">₹45,000</strong>
    </p>

    <div className="flex items-start gap-3">
      <FaMoneyCheckAlt className="text-green-600 mt-1" />
      <p>
        Transparent program fee (contact{' '}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">isparklearning.com</span>{' '}
        for current rates)
      </p>
    </div>

    <div className="flex items-start gap-3">
      <FaTools className="text-yellow-600 mt-1" />
      <p>Includes all software tools, lab access, mentorship, and workshops</p>
    </div>

    <div className="flex items-start gap-3">
      <FaBriefcase className="text-purple-600 mt-1" />
      <p>Placement support & bug-bounty earnings during the program</p>
    </div>
  </div>

  {/* Placement Guarantee */}
  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
      <FaHandshake className="text-red-500 dark:text-red-400" />
      Placement Guarantee
    </h3>

    <div className="space-y-2 text-gray-700 dark:text-gray-300">
      <div className="flex items-start gap-3">
        <FaClock className="text-indigo-600 dark:text-indigo-400 mt-1" />
        <p>Job-ready within 60 days of graduation or free reskilling</p>
      </div>
      <div className="flex items-start gap-3">
        <FaChartLine className="text-green-600 mt-1" />
        <p>Average starting CTC: 2.5× current internship stipend</p>
      </div>
      <div className="flex items-start gap-3">
        <FaUsers className="text-yellow-600 mt-1" />
        <p>Recruiter pool: Big-4 DFIR teams, CERT-In SOCs, global MSSPs, bug-bounty platforms</p>
      </div>
    </div>
  </div>

  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2 text-sm md:text-base">
    <strong>Note:</strong> Fee is <strong>exclusive of GST</strong>. Applicable GST will be added to the total fee. Fee may vary depending on additional consumables or specialized lab resources requested by participants.
  </p>
</section>
<Fees/>
            </main>

            {/* Right Column: Brochure */}
          {/* Right: Download Brochure */}
<aside className="md:col-span-3 order-3">
  <div className="sticky top-6">
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-5 border border-gray-100 dark:border-gray-700">

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold flex items-center space-x-2">
        <FaFileDownload className="text-indigo-600 dark:text-indigo-400" />
        <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
          Download Brochure
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed text-justify">
        Get the complete details of our{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          Career-Ready Diploma in Cybersecurity & Digital Forensics
        </span>{" "}
        course. Learn about modules, curriculum, projects, and career opportunities.
      </p>

      {/* Checklist */}
      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        <li className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          <FaCheckCircle className="text-purple-500 dark:text-purple-400" />
          <span>Comprehensive course modules</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          <FaCheckCircle className="text-purple-500 dark:text-purple-400" />
          <span>Hands-on AI robotics projects</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          <FaCheckCircle className="text-purple-500 dark:text-purple-400" />
          <span>Career guidance & certifications</span>
        </li>
      </ul>

      {/* Download Button */}
      <a
        href="/brochure.pdf"
        download
        className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:to-blue-700 shadow-lg transition-all duration-300"
      >
        Download PDF
      </a>

      {/* Footer Note */}
      <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm italic">
        📄 Instant access. Start planning your journey into AI-driven robotics today!
      </p>
    </div>
  </div>
</aside>


          </div>

          {/* Partners Section */}
          <div className="max-w-7xl mx-auto mb-20 overflow-hidden">
            <h2 className={`text-3xl font-bold text-center mt-8 mb-8 ${isDark ? "text-white" : "text-gray-600"}`}>
              Our Industry Partners
            </h2>
            <div className="relative">
              <motion.div className="flex gap-8 py-4" animate={{ x: ["0%", "-90%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                {[...partners, ...partners].map((partner, index) => (
                  <motion.div key={`${partner.name}-${index}`} className={`flex-shrink-0 p-6 rounded-xl ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white hover:bg-purple-50"} border ${isDark ? "border-purple-500/20" : "border-purple-100"} transition-all duration-300 group min-w-[280px]`}>
                    <img src={partner.logo} alt={partner.name} className="h-12 object-contain mx-auto mb-4 filter dark:invert" />
                    <p className={`text-sm text-center ${isDark ? "text-gray-400" : "text-gray-600"}`}>{partner.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
