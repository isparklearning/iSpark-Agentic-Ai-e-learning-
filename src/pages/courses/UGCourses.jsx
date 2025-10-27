import React from "react";
import { Link } from "react-router-dom"; 
import { 
  FaRobot, FaBrain, FaCloud, FaShieldAlt, FaArrowRight, FaCheckCircle,  FaMicrochip,
  FaClipboardList, FaBookOpen, FaToolbox, FaRupeeSign, FaMoneyCheckAlt, 
  FaTools, FaBriefcase, FaHandshake, FaClock, FaChartLine, FaUsers, FaCertificate, FaLightbulb,
  FaUserGraduate, FaCogs, FaFileDownload,FaGraduationCap,FaSatellite ,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import Navbar from "@/components/landing/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Fees from "./Fees.jsx";
import {MdOutlineAutoAwesome,MdSensors} from 'react-icons/md';
import {GiArtificialIntelligence, GiCircuitry,GiProcessor } from 'react-icons/gi';
export default function UGCourses() {
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
     id: 'cloud',
     title: 'Industry-Ready Diploma in Cloud & Edge Technologies',
     description: 'Gain skills to implement and manage cloud and edge computing solutions for scalable, high-performance, and real-time applications in modern enterprises.',
     icon: <FaCloud className="text-4xl" />,
     color: 'from-blue-500 to-purple-500',
     route: '/courses/cloud'
   },
     {
       id: 'ai',
       title: 'Professional Diploma in Humanoid Robotics for Service Industries',
       description: 'Design, program, and deploy humanoid robots specifically for service sectors like healthcare, hospitality, and retail, emphasizing interaction and automation.',
       icon: <FaRobot className="text-4xl" />,
       color: 'from-purple-500 to-purple-600',
       route: '/courses/ai'
     },
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

const modules = [
  {
    color: "green",
    title: "Module 1 — Lab Foundations & Rapid Prototyping (S1–S4)",
    sessions: [
      "S1: Lab safety & instruments. Project: test a sensor on a breadboard.",
      "S2: Microcontroller bring-up. Project: LED dimmer with button debounce.",
      "S3: Serial communication & PCB basics. Project: fabricate tiny LED PCB.",
      "S4: Mechanical fasteners & 3D CAD. Project: 3D-print a sensor mount."
    ],
  },
  {
    color: "yellow",
    title: "Module 2 — Sensors, Actuators & Control (S5–S8)",
    sessions: [
      "S5: DC motors & drivers. Project: speed-controlled DC motor.",
      "S6: Servos & stepper motors. Project: servo pan-tilt tracking dot.",
      "S7: Closed-loop control (PID). Project: balance a beam using PID.",
      "S8: Instrumentation & logging. Project: log IMU & temperature."
    ],
  },
    {
    color: "blue",
    title: "Module 3 — IoT & Cloud (S9–S12)",
    sessions: [
      "S9: ESP32 networking (Wi-Fi, MQTT). Project: sensor → dashboard.",
      "S10: Edge → Cloud pipelines. Project: alert on threshold.",
      "S11: Power & reliability. Project: battery IoT node simulation.",
      "S12: Device security fundamentals. Project: provision secure credentials."
    ]
  },
  {
    color: "purple",
    title: "Module 4 — Mobile Robotics (S13–S16)",
    sessions: [
      "S13: Robot chassis & 2WD kinematics. Project: build & drive calibrated 2WD bot.",
      "S14: Line following & maze logic. Project: PID line follower with lap-time metric.",
      "S15: Mapping & sensors. Project: obstacle avoidance grid with state machine.",
      "S16: Mechanical add-ons. Project: 3D-print sensor bracket & improve clearance."
    ]
  },
  {
    color: "pink",
    title: "Module 5 — Computer Vision Foundations (S17–S20)",
    sessions: [
      "S17: Image basics (OpenCV, thresholds). Project: shape & color detection.",
      "S18: Classical CV (edges, homography). Project: fiducial tracking.",
      "S19: Data collection & labeling. Project: create 100-image dataset.",
      "S20: Tiny classifiers (MobileNet/TFLite). Project: run a classifier on Raspberry Pi."
    ]
  },
  {
    color: "teal",
    title: "Module 6 — ML/AI for Engineers (S21–S24)",
    sessions: [
      "S21: ML pipeline (split, fit, validate). Project: predict motor RPM from PWM & load.",
      "S22: TinyML on MCU (quantization). Project: gesture recognition on ESP32.",
      "S23: Jetson bring-up (containers, CUDA, cameras). Project: run YOLO-N/v8 on Jetson.",
      "S24: Edge optimization (INT8, batching). Project: 2× speed improvement."
    ]
  },
  {
    color: "orange",
    title: "Module 7 — Edge + Cloud + DevOps (S25–S28)",
    sessions: [
      "S25: APIs & microservices (FastAPI). Project: device → API → dashboard.",
      "S26: CI/CD for firmware & models. Project: GitHub Actions builds.",
      "S27: Telemetry at scale (InfluxDB/Grafana). Project: live lab dashboard.",
      "S28: OTA & fleet management. Project: staged rollout to 10 ESP32s."
    ]
  },
  {
    color: "indigo",
    title: "Module 8 — 3D Printing & Additive Design (S29–S32)",
    sessions: [
      "S29: DfAM principles. Project: print motor mount & test fit.",
      "S30: Materials & strength. Project: bracket A/B test with deflection report.",
      "S31: Design sprint & reverse engineering. Project: recreate & improve coupler.",
      "S32: Mechanical-electrical integration. Project: printed enclosure with standoffs."
    ]
  },
  {
    color: "red",
    title: "Module 9 — Cybersecurity & Digital Forensics (S33–S36)",
    sessions: [
      "S33: Network fundamentals & traffic analysis. Project: capture & interpret MQTT sessions.",
      "S34: Threat modeling for robots/IoT. Project: STRIDE analysis & mitigation backlog.",
      "S35: Hardening & secure updates. Project: sign firmware & verify at boot.",
      "S36: DFIR basics. Project: recover incident timeline from device logs."
    ]
  },
  {
    color: "teal",
    title: "Module 10 — Capstone & Showcase (S37–S40)",
    sessions: [
      "S37: Capstone project kickoff. Teams select a domain.",
      "S38: Mid-project checkpoint. Submit demo video, GitHub repo, draft BOM.",
      "S39: Final project completion. Submit demo, GitHub repo, BOM, technical brief.",
      "S40: Expo & viva. Stakeholder demo day with rubric-based grading & feedback."
    ]
  }
];

  return (
    <>
      <Navbar />
      <br />
      <br></br>
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="max-w-8xl mx-auto px-4 md:px-8 py-8">
          {/* Centered Heading */}
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
          Year-long STEM Readiness{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
              For UG/Students
            </span>
          </span>
        </motion.h2>
      </div>
    </div>
<br></br>
          {/* Header */}
          <header className="mb-6 text-center md:text-left">
           <h1
             className="flex items-center gap-3 text-xl md:text-2xl font-semibold 
                        bg-gradient-to-r from-gray-50 via-gray-50 to-gray-50 
                        dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 
                        px-5 py-3 rounded-lg shadow-md w-fit mb-8"
           >
             <FaGraduationCap className="text-purple-600 dark:text-pink-400 text-2xl" />
             About the Course
           </h1>

            <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed">
              Prepare for a future in Science, Technology, Engineering, and Mathematics with our{" "}
              <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">
                Year-long STEM Readiness Program
              </span>{" "}
              designed specifically for undergraduate students. Build a strong foundation in core STEM concepts, gain hands-on experience with cutting-edge technologies, and develop problem-solving skills that will set you apart.
            </p>
          </header>

          {/* Three-column layout */}
          <div className="grid gap-6 md:grid-cols-12">
            {/* Left: Courses */}
            <aside className="md:col-span-3 order-2 md:order-1">
              <div className="sticky top-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 md:p-5">
                  <h2 className="text-xl font-semibold mb-4">All Courses</h2>
                  <ul className="space-y-4">
                    {courses.map((c) => (
                      <li key={c.id}>
                        <Link
                          to={c.route}
                          className="flex flex-col gap-2 w-full text-justify rounded-xl border border-blue-400 hover:border-violet-400 hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-3"
                        >
                          <div className="flex items-center gap-2">
                            <span className={`p-2 rounded-full text-white bg-gradient-to-r ${c.color}`}>
                              {c.icon}
                            </span>
                            <span className="font-semibold">{c.title}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{c.description}</p>
                          <div className={`inline-flex items-center gap-2 mt-2 text-sm font-semibold text-purple-600 dark:text-purple-400 cursor-pointer`}>
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

            {/* Center: Course description */}
            <main className="md:col-span-6 order-1 md:order-2 space-y-12 px-4 md:px-0">
              {/* Example: Course Description */}
              {/* Course Description */}
<section className="my-8 px-4 md:px-6 py-6 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300">
  <h2 className="flex items-center text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
    <FaBookOpen className="text-3xl text-purple-600 mr-2 animate-pulse" />
    Course Description
  </h2>
  <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4 text-justify tracking-wide">
    The VTU Hands-on STEM Lab is a 60-hour immersive program designed for pre-final and final-year engineering students across all disciplines, including Mechanical, EEE, EC, CS, IT, and Bio-Med. This program equips students with practical, project-based experience in Robotics, IoT, Edge AI, Computer Vision, 3D Printing, Cloud/DevOps, and Cybersecurity.
  </p>
  <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify tracking-wide">
    Learners build working projects every session, forming a mini-portfolio with GitHub repositories and demo videos that showcase real-world engineering skills. Each session embeds 21st-century skills: problem framing, hypothesis, build, test, and communication through short 2-minute stand-ups.
  </p>
</section>


<section className="my-12 px-4 md:px-0 space-y-8 max-w-5xl mx-auto">
  {/* Header */}
  <div className="flex items-center mb-6 space-x-4">
    <FaClipboardList className="text-4xl text-green-600" />
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
      Curriculum Checklist{" "}
      <span className="text-green-600 text-lg font-medium">
        (60 Hours / 40 Sessions)
      </span>
    </h2>
  </div>

  <p className="text-gray-900 dark:text-gray-300 text-sm md:text-base mb-6">
    Program: 40 sessions × 1.5 hrs. Each session:{" "}
    <span className="font-semibold text-green-600">10-60-10</span> pattern — intro, hands-on, demo, quiz.
  </p>

  {/* Modules */}
  {modules.map((mod, idx) => (
    <div
      key={idx}
      className={`p-5 border-l-4 rounded-xl shadow-md hover:shadow-xl transition duration-300
                  bg-white/50 dark:bg-gray-900/90`}
      style={{
        borderColor: `${mod.color}-500`,
        backdropFilter: "blur(8px)",
      }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {mod.title}
      </h3>
      <ul className="space-y-2">
        {mod.sessions.map((s, i) => (
          <motion.li
            key={i}
            className="flex items-start space-x-3 p-2 rounded-lg transition duration-200 hover:scale-105"
          >
            <FaCheckCircle className="mt-1 flex-shrink-0 text-green-500" />
            <span className="text-gray-900 dark:text-gray-200 text-sm">{s}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  ))}
</section>

 <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-shadow duration-500">
      <div className="flex items-center mb-6 space-x-4">
        <FaClipboardList className="text-4xl text-red-600" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Course Delivery Details
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Mode:</strong> In-person lab with 40 students (pairs of 2, 20 teams).
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Sessions:</strong> 40 × 1.5 hours.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Team Roles:</strong> Driver (hardware) + Scribe (software/notes), rotated weekly.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Session Structure:</strong> Each session includes a project build, reflection, and GitHub commit.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        <strong>Version Control:</strong> All teams maintain repositories; facilitators keep reference solutions.
      </p>
    </article>

     {/* Certification / Diploma */}
      <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-shadow duration-500">
        <div className="flex items-center mb-6 space-x-4">
          <FaCertificate className="text-4xl text-indigo-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Certification / Diploma
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Upon successful completion of the VTU Hands-on STEM Lab, students will receive a{" "}
          <strong>VTU-recognized Certificate / Diploma</strong> acknowledging their practical experience and project-based skills across Robotics, IoT, Edge AI, Computer Vision, 3D Printing, Cloud/DevOps, and Cybersecurity.
        </p>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Portfolio Ready:</strong> Projects, GitHub repos, and demo videos included.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Industry Recognition:</strong> Certificate recognized by VTU and useful for internships or jobs.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Hands-on Skills:</strong> Practical exposure to robotics, IoT, AI, CV, 3D Printing, Cloud/DevOps.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Career Advancement:</strong> Tangible proof of applied engineering skills for resumes & higher studies.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Showcase Ready:</strong> Demo-ready projects and reports for stakeholder presentations.</span>
          </li>
        </ul>
      </article>

      {/* Eligibility & Pre-requisites */}
      <section className="my-12 grid md:grid-cols-2 gap-6">
        {/* Eligibility */}
        <div className="px-6 py-6 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300">
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
                className="flex items-start gap-2 p-2 rounded hover:bg-yellow-50 dark:hover:bg-yellow-900/30 transition"
                whileHover={{ scale: 1.02 }}
              >
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pre-requisites */}
        <div className="px-6 py-6 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300">
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
                className="flex items-start gap-2 p-2 rounded hover:bg-pink-50 dark:hover:bg-pink-900/30 transition"
                whileHover={{ scale: 1.02 }}
              >
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


        {/* Lab Equipment & BOM Highlights */}
      <article className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-3xl transition-shadow duration-500">
        <div className="flex items-center mb-6 space-x-4">
          <FaToolbox className="text-4xl text-yellow-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Lab Equipment & BOM Highlights
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          For smooth operation of the VTU Hands-on STEM Lab with 40 students (20 teams), the lab is equipped with modern compute, microcontrollers, sensors, robotics kits, fabrication tools, and essential e-tools.
        </p>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Compute & AI:</strong> Raspberry Pi 5, NVIDIA Jetson Orin Nano, official PSU for each unit.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Microcontrollers:</strong> Arduino Uno, ESP32 DevKit, NodeMCU ESP8266.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Sensors & Robotics:</strong> DHT22, BMP280, HC-SR04, MPU-6050, 2WD robot chassis, DC motors, L298N motor driver, servos.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>Fabrication:</strong> 3D Printers (Creality Ender-3), PLA filament, CAD tools for rapid prototyping.</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" />
            <span><strong>E-tools:</strong> Digital Multimeters, bench power supplies, soldering stations, oscilloscopes, logic analyzers, hand tools, ESD mats for safety.</span>
          </li>
        </ul>
      </article>

      {/* Fee Section */}
      <div className="px-6 py-6 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md space-y-6 transition-all duration-300 hover:shadow-2xl mt-8">
        {/* Fee Header */}
        <div className="flex items-center space-x-3">
          <FaRupeeSign className="text-4xl text-indigo-600 animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Program Fee & Placement
          </h2>
        </div>

        {/* Fee Details */}
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="font-medium text-gray-800 dark:text-gray-100 text-lg">
            The fee includes: <span className="text-indigo-600 font-bold">₹9000</span>
          </p>

          <div className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <FaMoneyCheckAlt className="text-green-600 mt-1 text-2xl" />
            <p className="text-gray-800 dark:text-gray-100 text-sm md:text-base">
              Transparent program fee (contact <span className="font-semibold text-indigo-600 dark:text-indigo-400">isparklearning.com</span> for current rates)
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <FaTools className="text-yellow-600 mt-1 text-2xl" />
            <p className="text-gray-800 dark:text-gray-100 text-sm md:text-base">
              Includes all software tools, lab access, mentorship, and workshops
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <FaBriefcase className="text-purple-600 mt-1 text-2xl" />
            <p className="text-gray-800 dark:text-gray-100 text-sm md:text-base">
              Placement support & bug-bounty earnings during the program
            </p>
          </div>
        </div>

        {/* Placement Guarantee */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <FaHandshake className="text-red-500" /> Placement Guarantee
          </h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaClock className="text-indigo-600 mt-1 text-xl" />
              <p>Job-ready within 60 days of graduation or free reskilling</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaChartLine className="text-green-600 mt-1 text-xl" />
              <p>Average starting CTC: 2.5× current internship stipend</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <FaUsers className="text-yellow-600 mt-1 text-xl" />
              <p>Recruiter pool: Big-4 DFIR teams, CERT-In SOCs, global MSSPs, bug-bounty platforms</p>
            </div>
          </div>
        </div>

        {/* GST Note */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-sm md:text-base">
          <strong>Note:</strong> Fee is <strong>exclusive of GST</strong>. Applicable GST will be added to the total fee. Fee may vary depending on additional consumables or specialized lab resources requested by participants.
        </p>
      </div>
<Fees/>
            </main>

            {/* Right: Download brochure */}
               <aside className="md:col-span-3 order-3">
      <div className="sticky top-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
            <FaFileDownload className="text-indigo-600" />
            <span>Download Brochure</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Get the complete details of our{" "}
            <span className="font-semibold text-indigo-600">
              Year-long STEM Readiness For UG/Students
            </span>{" "}
            course. Learn about modules, curriculum, projects, and career opportunities.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-purple-500" />
              <span>Comprehensive course modules</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-purple-500" />
              <span>Hands-on AI robotics projects</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-purple-500" />
              <span>Career guidance & certifications</span>
            </li>
          </ul>
          <a
            href="/brochure.pdf"
            download
            className="inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            Download PDF
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className={`flex-shrink-0 p-6 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-purple-50'} border ${isDark ? 'border-purple-500/20' : 'border-purple-100'} transition-all duration-300 group min-w-[280px]`}
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
      <Footer />
    </>
  );
}
