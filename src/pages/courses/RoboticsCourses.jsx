import React from "react";
import { Link } from "react-router-dom"; // use Link for navigation
import { FaRobot,FaLightbulb, FaCloud, FaMicrochip, FaBrain, FaArrowRight, FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "@/components/landing/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import {  FaCogs, FaSatellite } from "react-icons/fa";
import { GiArtificialIntelligence, GiCircuitry, GiProcessor } from "react-icons/gi";
import { MdSensors } from "react-icons/md";

import { 
FaUserGraduate,FaGraduationCap,FaLaptopCode,FaIndustry,FaBook,FaFlask,FaChartLine,FaHospital, FaBriefcase,FaBroadcastTower,
FaRupeeSign,
FaCheck,FaFolderOpen,FaReact,FaCode,
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
  FaCheckCircle 
} from 'react-icons/fa';
import { GiFactory, GiGraduateCap } from "react-icons/gi";
import { MdMedicalServices,MdDeveloperMode,MdOutlineAutoAwesome  } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineSmartToy } from "react-icons/md";
import { FaFileDownload } from 'react-icons/fa';
import Fees from "./Fees.jsx"



export default function AICourses() {
  const { isDark } = useTheme();
  const courses = [
      {
        id: 'ai',
        title: 'Professional Diploma in Humanoid Robotics for Service Industries',
        description: 'Design, program, and deploy humanoid robots specifically for service sectors like healthcare, hospitality, and retail, emphasizing interaction and automation.',
        icon: <FaRobot className="text-4xl" />,
        color: 'from-purple-500 to-purple-600',
        route: '/courses/ai'
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
     id: 'ug',
     title: 'Year-long STEM Readiness For UG/Students',
     description: 'Develop STEM skills through practical IoT and IIoT projects, building smart systems and gaining real-world engineering experience throughout the year.',
     icon: <FaLightbulb className="text-4xl" />,
     color: 'from-green-500 to-blue-500',
     route: '/courses/ug'
   }
  ];


const career = [
  { title: "AI Engineer", icon: <FaLaptopCode /> },
  { title: "Machine Learning Engineer", icon: <FaBrain /> },
  { title: "Data Scientist / Data Analyst", icon: <FaChartLine /> },
  { title: "Computer Vision / NLP Engineer", icon: <FaRobot /> },
  { title: "AI Product Developer (Robotics, IoT, Edge AI)", icon: <FaProjectDiagram /> },
  { title: "Research Assistant in AI labs", icon: <FaFlask /> },
  { title: "Entrepreneur in AI-driven startups", icon: <FaIndustry /> },
];


const deliveryPlan = [
  {
    title: "Weeks 1–4: Foundations & Python for AI (48 hrs)",
    weeks: [
      { week: 1, live: { text: "Intro to AI & Industry 4.0, AI ethics (3 hrs)", icon: <FaBrain /> }, selfPaced: { text: "Basics of Python, variables, loops (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 2, live: { text: "Python for Data Science (NumPy, Pandas) (3 hrs)", icon: <FaLaptopCode /> }, selfPaced: { text: "Data wrangling, visualization with Matplotlib, Seaborn (9 hrs)", icon: <FaFlask /> } },
      { week: 3, live: { text: "Exploratory Data Analysis (EDA) (3 hrs)", icon: <FaProjectDiagram /> }, selfPaced: { text: "Case study: analyze real-world dataset (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 4, live: { text: "Python project review (EDA mini-project) (3 hrs)", icon: <FaProjectDiagram /> }, selfPaced: { text: "AI Companion-guided coding challenge (9 hrs)", icon: <FaLaptopCode /> } },
    ]
  },
  {
    title: "Weeks 5–8: Machine Learning (48 hrs)",
    weeks: [
      { week: 5, live: { text: "Supervised learning (Regression) (3 hrs)", icon: <FaBrain /> }, selfPaced: { text: "Regression coding exercises (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 6, live: { text: "Classification algorithms (Logistic, k-NN, SVM) (3 hrs)", icon: <FaBrain /> }, selfPaced: { text: "Build classifiers on datasets (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 7, live: { text: "Unsupervised learning (Clustering, Dimensionality Reduction) (3 hrs)", icon: <FaBrain /> }, selfPaced: { text: "k-Means, PCA mini-project (9 hrs)", icon: <FaProjectDiagram /> } },
      { week: 8, live: { text: "ML model evaluation (confusion matrix, ROC) (3 hrs)", icon: <FaBrain /> }, selfPaced: { text: "ML mini-project: spam filter or customer segmentation (9 hrs)", icon: <FaProjectDiagram /> } },
    ]
  },
  {
    title: "Weeks 9–12: Deep Learning (48 hrs)",
    weeks: [
      { week: 9, live: { text: "Intro to Neural Networks (3 hrs)", icon: <FaBrain /> }, selfPaced: { text: "Build simple ANN in TensorFlow/Keras (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 10, live: { text: "Convolutional Neural Networks (CNNs) (3 hrs)", icon: <FaRobot /> }, selfPaced: { text: "Image recognition lab (MNIST, CIFAR-10) (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 11, live: { text: "Recurrent Neural Networks (RNNs, LSTMs) (3 hrs)", icon: <FaRobot /> }, selfPaced: { text: "NLP basics, text classification (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 12, live: { text: "Deep learning mini-project showcase (3 hrs)", icon: <FaProjectDiagram /> }, selfPaced: { text: "Students build & demo CNN/NLP model (9 hrs)", icon: <FaLaptopCode /> } },
    ]
  },
  {
    title: "Weeks 13–16: AI in Industries (48 hrs)",
    weeks: [
      { week: 13, live: { text: "Predictive maintenance, vision in assembly (3 hrs)", icon: <FaIndustry /> }, selfPaced: { text: "Build defect detection model (9 hrs)", icon: <FaRobot /> } },
      { week: 14, live: { text: "AI for medical imaging & diagnosis (3 hrs)", icon: <FaFlask /> }, selfPaced: { text: "Build disease classifier (e.g., X-ray dataset) (9 hrs)", icon: <FaRobot /> } },
      { week: 15, live: { text: "Fraud detection, credit scoring (3 hrs)", icon: <FaProjectDiagram /> }, selfPaced: { text: "Risk prediction mini-project (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 16, live: { text: "AI tutors & personalized learning (3 hrs)", icon: <FaBrain /> }, selfPaced: { text: "Chatbot for student Q&A (9 hrs)", icon: <FaLaptopCode /> } },
    ]
  },
  {
    title: "Weeks 17–20: Advanced Topics & Capstone (48 hrs)",
    weeks: [
      { week: 17, live: { text: "Generative AI (LLMs, GPT, diffusion models) (3 hrs)", icon: <FaBrain /> }, selfPaced: { text: "Hands-on: build text generator (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 18, live: { text: "Agentic AI, RAG, Edge AI (3 hrs)", icon: <FaRobot /> }, selfPaced: { text: "AI on IoT device mini-project (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 19, live: { text: "Capstone mentoring (3 hrs)", icon: <FaProjectDiagram /> }, selfPaced: { text: "Capstone development (teams) (9 hrs)", icon: <FaLaptopCode /> } },
      { week: 20, live: { text: "Final Capstone Presentations (3 hrs)", icon: <FaProjectDiagram /> }, selfPaced: { text: "Final report & portfolio submission (9 hrs)", icon: <FaLaptopCode /> } },
    ]
  }
];

  const careers = [
    { name: "AI Engineer", icon: <FaBrain className="text-green-600" /> },
    { name: "Machine Learning Engineer", icon: <FaRobot className="text-blue-500" /> },
    { name: "Data Scientist / Data Analyst", icon: <FaChartLine className="text-purple-600" /> },
    { name: "Computer Vision / NLP Engineer", icon: <FaLaptopCode className="text-indigo-500" /> },
    { name: "AI Product Developer (Robotics, IoT, Edge AI)", icon: <FaProjectDiagram className="text-orange-500" /> },
    { name: "Research Assistant in AI labs", icon: <FaFlask className="text-red-500" /> },
    { name: "Entrepreneur in AI-driven startups", icon: <FaLightbulb className="text-yellow-500" /> },
  ];

  const benefits = [
    "Hands-on coding skills",
    "Knowledge of AI industry applications",
    "Portfolio of 4+ mini projects + 1 major capstone",
    "Industry-ready certification"
  ];

const modules = [
  {
    title: "Module 1: Foundations of AI & Industry Relevance",
    color: "green",
    sessions: [
      "History & Evolution of AI",
      "AI in Industry 4.0 & 5.0",
      "Core AI concepts: agents, search, knowledge representation",
      "AI ethics & responsible AI",
    ],
    hours: "20 hrs",
  },
  {
    title: "Module 2: Python for AI & Data Science",
    color: "blue",
    sessions: [
      "Python essentials for ML/AI",
      "Libraries: NumPy, Pandas, Matplotlib, Seaborn",
      "Data cleaning, preprocessing & visualization",
      "Mini-project: Exploratory Data Analysis (EDA)",
    ],
    hours: "40 hrs",
  },
  {
    title: "Module 3: Machine Learning Fundamentals",
    color: "purple",
    sessions: [
      "Supervised & Unsupervised Learning",
      "Regression, Classification, Clustering",
      "Feature engineering & model evaluation",
      "Hands-on: Build ML models from scratch",
    ],
    hours: "40 hrs",
  },
  {
    title: "Module 4: Deep Learning & Neural Networks",
    color: "pink",
    sessions: [
      "ANN, CNN, RNN fundamentals",
      "Keras & TensorFlow basics",
      "Computer Vision: image recognition, object detection",
      "NLP basics: sentiment analysis, text classification",
      "Mini-project: Image classifier / Chatbot",
    ],
    hours: "40 hrs",
  },
  {
    title: "Module 5: AI Applications in Industries",
    color: "yellow",
    sessions: [
      "Manufacturing: Predictive maintenance, defect detection, robotics vision",
      "Healthcare: Medical imaging AI, disease prediction, drug discovery",
      "Finance: Fraud detection, credit scoring, algorithmic trading",
      "Education: AI tutors, personalized learning, exam analytics",
    ],
    hours: "50 hrs",
  },
  {
    title: "Module 6: Advanced Topics & Tools",
    color: "teal",
    sessions: [
      "Generative AI (LLMs, GPT, diffusion models)",
      "Agentic AI & RAG (Retrieval Augmented Generation)",
      "Edge AI & IoT + AI",
      "Cloud AI platforms: AWS, GCP, Azure",
    ],
    hours: "20 hrs",
  },
  {
    title: "Module 7: Capstone Projects",
    color: "red",
    sessions: [
      "Students choose one industry project from Manufacturing, Healthcare, Finance, or Education",
      "Work in teams, mentored by trainers + AI companion",
      "Deliverables: Working prototype + Project report + Presentation",
    ],
    hours: "30 hrs",
  },
];

const industryProjects = [
  {
    domain: "Manufacturing",
    icon: GiFactory,
    projects: [
      "AI-powered predictive maintenance system for machines",
      "Computer vision for defect detection in assembly lines",
    ],
  },
  {
    domain: "Healthcare",
    icon: MdMedicalServices,
    projects: [
      "AI model for early disease detection (diabetes, cancer from scans)",
      "AI chatbot for basic medical triage & recommendations",
    ],
  },
  {
    domain: "Finance",
    icon: AiOutlineDollarCircle,
    projects: [
      "Fraud detection in transactions",
      "AI for loan eligibility prediction & risk assessment",
    ],
  },
  {
    domain: "Education",
    icon: GiGraduateCap,
    projects: [
      "Personalized AI tutor for engineering subjects",
      "AI-powered exam evaluation & feedback system",
    ],
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


  return (
    <>
   <Navbar/>
   <br></br><br></br>
<div className=" relative min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
 {/* Background Icons */}
      <FaCode className="absolute text-blue-400/20 text-5xl top-10 left-20 animate-spin-slow" />
      <FaRobot className="absolute text-purple-400/20 text-4xl top-1/3 right-10 animate-pulse" />
      <FaBrain className="absolute text-pink-400/20 text-6xl bottom-20 left-1/4 animate-bounce" />
      <FaReact className="absolute text-green-400/20 text-4xl bottom-10 right-1/3 animate-spin-slow" />
      {/* Extra icons for full-page coverage */}
      <FaLaptopCode className="absolute text-indigo-400/20 text-4xl top-1/2 left-10 animate-float" />
      <FaBook className="absolute text-yellow-400/20 text-5xl top-1/4 right-1/4 animate-float" />
      <FaChalkboardTeacher className="absolute text-red-400/20 text-5xl bottom-32 right-16 animate-float" />
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
          Diploma in Artificial Intelligence{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
              Applications Across Industries
            </span>
          </span>
        </motion.h2>
      </div>
    </div>
<br></br>
<header className="mb-15 text-center md:text-left">
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
     Diploma in Artificial Intelligence Applications Across Industries
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
        className={`flex flex-col gap-2 w-full rounded-xl border px-3 py-3 transition-all duration-300 text-justify
          ${
            isDark
              ? 'border-purple-700 hover:border-gray-600 hover:bg-gray-800'
              : 'border-purple-200 hover:border-gray-300 hover:bg-gray-50'
          }
          shadow-sm shadow-indigo-300/30 hover:shadow-md hover:shadow-purple-400/30
        `}
      >
        <div className="flex items-center gap-2">
          <span className={`p-2 rounded-full text-white bg-gradient-to-r ${c.color}`}>
            {c.icon}
          </span>
          <span className="font-semibold">{c.title}</span>
        </div>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {c.description}
        </p>

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
<section className="my-10 px-6 md:px-10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 transition duration-300 hover:shadow-xl">
  {/* Section Title */}
  <div className="flex items-center mb-8">
    <FaBook className="text-4xl text-purple-500 mr-4 drop-shadow-md" />
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      Course Description
    </h2>
  </div>

  {/* Intro Paragraph */}
  <p className="leading-relaxed text-base md:text-lg mb-8 text-gray-700 dark:text-gray-300">
    This <strong>6-month, 240-hour Diploma in Applied AI</strong> is designed to transform engineering students into{" "}
    <strong>industry-ready AI professionals</strong>. Delivered in a{" "}
    <strong>blended learning mode</strong> 
    (<span className="text-purple-500 font-semibold">30% live faculty sessions</span> +{" "}
    <span className="text-indigo-500 font-semibold">70% AI-driven self-paced learning</span>), 
    the course equips learners with both{" "}
    <strong>theoretical knowledge</strong> and <strong>practical skills</strong> for real-world applications.
  </p>

  {/* Key Features */}
  <ul className="list-none space-y-5 mb-8">
    <li className="flex items-start p-4 rounded-xl bg-white/70 dark:bg-gray-800/60 shadow-sm hover:shadow-md transition">
      <FaBrain className="text-purple-500 mr-4 mt-1 text-xl" />
      <span>
        Strong foundations in <strong>AI, Machine Learning (ML), and Deep Learning (DL) concepts</strong>.
      </span>
    </li>
    <li className="flex items-start p-4 rounded-xl bg-white/70 dark:bg-gray-800/60 shadow-sm hover:shadow-md transition">
      <FaLaptopCode className="text-indigo-500 mr-4 mt-1 text-xl" />
      <span>
        Hands-on practice through <strong>coding labs</strong> and <strong>AI companion assignments</strong>.
      </span>
    </li>
    <li className="flex items-start p-4 rounded-xl bg-white/70 dark:bg-gray-800/60 shadow-sm hover:shadow-md transition">
      <FaIndustry className="text-green-500 mr-4 mt-1 text-xl" />
      <span>
        Deep understanding of AI’s role in <strong>four high-impact industries</strong>: Manufacturing, Healthcare, Finance, and Education.
      </span>
    </li>
    <li className="flex items-start p-4 rounded-xl bg-white/70 dark:bg-gray-800/60 shadow-sm hover:shadow-md transition">
      <FaProjectDiagram className="text-pink-500 mr-4 mt-1 text-xl" />
      <span>
        Real-world <strong>capstone projects</strong> aligned with industry needs.
      </span>
    </li>
  </ul>

  {/* Closing Paragraph */}
  <p className="leading-relaxed text-base md:text-lg text-gray-700 dark:text-gray-300">
    By the end of this Diploma, students will have mastered both the{" "}
    <strong>technical depth</strong> and <strong>practical application</strong> of AI, 
    preparing them for <span className="text-green-500 font-semibold">jobs</span>,{" "}
    <span className="text-blue-500 font-semibold">startups</span>, and{" "}
    <span className="text-pink-500 font-semibold">higher research</span> opportunities.
  </p>
</section>


  {/* Curriculum Checklist */}
    <section className="my-12 px-4 md:px-0 space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6 space-x-4">
        <FaClipboardList className="text-4xl text-green-600" />
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Curriculum Checklist{" "}
          <span className="text-green-600 text-lg font-medium">
            (240 Hours / 40 Sessions)
          </span>
        </h2>
      </div>

      <p className="text-gray-900 dark:text-gray-300 text-sm md:text-base mb-6">
        Program: Total 240 hours across modules. Each session includes{" "}
        <span className="font-semibold text-green-600">
          theory, hands-on, mini-projects & practical applications
        </span>
        .
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
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {mod.title}{" "}
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              ({mod.hours})
            </span>
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




 <section className="my-16 px-4 md:px-0 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-gray-100 gap-3">
  <FaIndustry className="text-orange-600 text-4xl" />
  Industry-Focused Capstone Projects
</h2>

        <p className="text-gray-00 dark:text-gray-300 mt-2 text-left">
          Choose 4 Domains and build real-world AI solutions
        </p>
      </div>

      {/* Glassmorphic Cards */}
<div className="grid md:grid-cols-2 gap-8">
  {industryProjects.map((item, idx) => {
    const DomainIcon = item.icon;
    return (
      <motion.div
        key={idx}
        className="relative p-6 rounded-2xl shadow-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
      >
        {/* Top-left Icon Badge */}
        <div
          className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center
                      bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100
                      text-purple-800 dark:text-gray-200 shadow-lg`}
        >
          <DomainIcon className="w-6 h-6" />
        </div>

        {/* Gradient Header */}
        <div
          className={`px-4 py-2 rounded-xl font-bold text-gray-800 dark:text-gray-200 text-lg mb-4 
                      bg-gradient-to-r from-${item.colorFrom} to-${item.colorTo} 
                      shadow-md`}
        >
          {item.domain}
        </div>

        {/* Projects List with Icon Boxes */}
        <ul className="space-y-4">
          {item.projects.map((proj, i) => (
            <li key={i} className="flex items-center space-x-3">
              {/* Icon Box */}
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center text-white">
                <FaCheckCircle />
              </div>
              {/* Project Text */}
              <span className="text-gray-900 dark:text-gray-200">{proj}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  })}
</div>
    </section>

<section className="my-16 px-5 md:px-0 max-w-4xl mx-auto bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200 rounded-3xl p-10 shadow-2xl">
  {/* Header */}
 <h2 className="text-3xl md:text-3xl font-bold mb-12 text-center flex items-center justify-left ml-3 text-gray-800 dark:text-gray-200 gap-3">
  <FaBriefcase className="text-4xl text-indigo-500" />
  Career Options After Diploma
</h2>

  {/* Career Roles */}
 <div className="mb-10 space-y-6">
  <h3 className="text-2xl font-semibold mb-4 flex items-center ml-8 gap-2  pb-2">
    Possible Roles :
  </h3>
  <div className="grid gap-2">
    {careers.map((career, index) => (
      <div 
        key={index} 
        className="flex items-left gap-3 p-2 ml-8 mr-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm transition-transform duration-150 cursor-pointer border-[0.5px] border-gray-300 dark:border-gray-600 hover:shadow-md"
      >
        <span className="text-2xl">{career.icon}</span>
        <span className="text-md font-medium">{career.name}</span>
      </div>
    ))}
  </div>
</div>

<div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">

  {/* Benefits / Skills */}
  <div className="flex-1 space-y-4 bg-pink-50 dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold flex items-center gap-2 border-b border-purple-400 pb-2 mb-3">
      What You'll Gain
    </h3>
    <ul className="space-y-2 text-base">
      {benefits.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Additional Info */}
  <div className="flex-1 p-5 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-inner hover:scale-[1.01] transition-transform duration-300">
    <h3 className="text-xl font-semibold flex items-center gap-2 border-b border-blue-400 pb-2 mb-3">
      Students Will Also Graduate With
    </h3>
    <ul className="space-y-2 text-base">
      <li className="flex items-center gap-2">
        <FaCheckCircle className="text-orange-500" /> Real-world mini projects (4+)
      </li>
      <li className="flex items-center gap-2">
        <FaCheckCircle className="text-orange-500" /> 1 Major Capstone Project demonstrating applied AI skills
      </li>
      <li className="flex items-center gap-2">
        <FaCheckCircle className="text-orange-500" /> Portfolio to showcase to employers
      </li>
      <li className="flex items-center gap-2">
        <FaCheckCircle className="text-orange-500" /> Industry-recognized certification
      </li>
    </ul>
  </div>
</div>
</section>



{/*Week Module*/}
<section className="max-w-6xl mx-auto px-4 md:px-0 my-14">
<h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100 flex items-center justify-left gap-2">
  <MdOutlineSmartToy className="text-purple-500" />
  20-Week AI Learning Delivery Plan
</h2>

<div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm">
  <ul className="text-gray-700 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700">
    
    <li className="flex items-start gap-3 py-2">
      <FaClock className="mt-1 text-indigo-600" aria-hidden="true" />
      <div>
        <span className="font-semibold text-gray-900 dark:text-gray-100">Total Duration:</span>{" "}
        240 hrs
      </div>
    </li>

    <li className="flex items-start gap-3 py-2">
      <FaClock className="mt-1 text-green-600" aria-hidden="true" />
      <div>
        <span className="font-semibold text-gray-900 dark:text-gray-100">Weekly Load:</span>{" "}
        12 hrs <span className="text-sm text-gray-500 dark:text-gray-400">(3 hrs live + 9 hrs self-paced)</span>
      </div>
    </li>

    <li className="py-2">
      <div className="font-semibold text-gray-900 dark:text-gray-100">Format:</div>
      <ul className="ml-6 divide-y divide-gray-200 dark:divide-gray-700">
        
        <li className="flex items-start gap-3 py-2">
          <FaChalkboardTeacher className="mt-1 text-yellow-600" aria-hidden="true" />
          <div>
            <span className="font-medium">Live Classes (30%)</span>
            <span className="text-gray-600 dark:text-gray-400"> — Faculty-led, interactive (from iSpark studio)</span>
          </div>
        </li>

        <li className="flex items-start gap-3 py-2">
          <FaVideo className="mt-1 text-pink-600" aria-hidden="true" />
          <div>
            <span className="font-medium">Self-Paced (70%)</span>
            <span className="text-gray-600 dark:text-gray-400"> — AI Companion-guided video lessons, coding labs, assignments, projects</span>
          </div>
        </li>

      </ul>
    </li>

  </ul>
</div>


  <div className="space-y-12 mt-4">
    {deliveryPlan.map((module, idx) => (
      <div key={idx}>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pb-2 inline-block">
          {module.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {module.weeks.map((weekItem) => (
            <motion.div
              key={weekItem.week}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 transition-transform bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-6"
            >
              {/* Colorful accent circle */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 blur-3xl"></div>
              
              <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
                Week {weekItem.week}
              </h4>

              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl text-blue-500">{weekItem.live.icon}</span>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Live:</strong> {weekItem.live.text}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-green-500">{weekItem.selfPaced.icon}</span>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Self-Paced:</strong> {weekItem.selfPaced.text}
                </p>
              </div>

              {/* Decorative gradient line at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    ))}
  </div>
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
        <p>Engineering students (UG/PG) from CSE, IT, ECE, EEE, Mechanical, Biomedical, Mechatronics, and related streams.</p>
      </div>
      <div className="flex items-start space-x-2">
        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
        <p>Students from Mathematics, Statistics, or Science backgrounds with programming knowledge are also eligible.</p>
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
        <p>Basic programming knowledge (preferably Python).</p>
      </div>
      <div className="flex items-start space-x-2">
        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
        <p>Familiarity with mathematics (linear algebra, probability, statistics) is helpful.</p>
      </div>
      <div className="flex items-start space-x-2">
        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
        <p>No prior AI/ML knowledge required – beginners are welcome.</p>
      </div>
    </div>
  </div>

{/*Course Delivery*/}
<section className="my-16 px-5 md:px-0 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-2xl shadow-lg p-8">
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center flex items-center justify-left  gap-2">
  <FaClock className=" text-red-500 text-3xl ml-4" />
  Course Delivery
</h2>

 <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-500">
  <h3 className="text-xl font-semibold mb-2">Blended Learning Mode:</h3>
  <ul className="space-y-2">
    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
      <FaCheckCircle className="mt-1 text-blue-500" />
      30% Live Classes → Faculty-led, interactive sessions (from iSpark Studio)
    </li>
    <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
      <FaCheckCircle className="mt-1 text-blue-500" />
      70% Self-Paced Learning → AI companion-guided video lessons, coding labs, and assignments
    </li>
  </ul>
</div>

  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-l-4 border-green-500">
    <h3 className="text-xl font-semibold mb-2">Weekly Learning Load:</h3>
<p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
  <FaCheckCircle className="text-green-500" />
  12 hours (3 hrs live + 9 hrs self-paced)
</p>

  </div>

  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-l-4 border-purple-500">
    <h3 className="text-xl font-semibold mb-2">Total Duration:</h3>
    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
  <FaCheckCircle className="text-purple-500" />
  6 months (20 weeks / 240 hrs)
</p>
  </div>

  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-l-4 border-yellow-500 leading-relaxed">
    <h3 className="text-xl font-semibold mb-2">Components:</h3>
    <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
  <FaCheckCircle className="text-yellow-500" />
  Live sessions
</p>
<p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
  <FaCheckCircle className="text-yellow-500" />
   self-paced video lessons
</p>
<p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
  <FaCheckCircle className="text-yellow-500" />
   coding labs
</p>
<p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
  <FaCheckCircle className="text-yellow-500" />
   4+ mini projects
</p>
<p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
  <FaCheckCircle className="text-yellow-500" />
1 Capstone project
</p>
  </div>
</div>
</section>

 <section className="my-12 px-5 md:px-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
        <FaGraduationCap className="text-blue-700 ml-4" />
        Certification / Diploma
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300 ml-4">
        Awarded by <strong>Visvesvaraya Technological University (VTU)</strong>, one of India’s premier universities.
      </p>
      
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <FaCertificate className="mt-1 text-green-800 ml-4" />
          <span>Diploma in <strong>Applied Artificial Intelligence & Industry Applications</strong></span>
        </li>
        <li className="flex items-start gap-3">
          <FaFolderOpen className="mt-1 text-purple-500 ml-4" />
          <span>Portfolio of <strong>4+ mini projects</strong> and <strong>1 major capstone project</strong></span>
        </li>
        <li className="flex items-start gap-3">
          <FaCertificate className="mt-1 text-yellow-900 ml-4" />
          <span>Industry-ready certification recognized by <strong>employers & startups</strong></span>
        </li>
      </ul>
    </section>


        <section className="my-8 px-5 md:px-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-2xl p-6 shadow-md">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-6">
        <FaMoneyBillWave className="mr-3 text-green-500 ml-4" />
        Fee
      </h2>

      <div className="space-y-4 text-gray-700 dark:text-gray-300 ml-4">
        <p>
          <span className="font-semibold">Program Duration:</span> 6 months (240 hrs)
        </p>
        <p>
          <span className="font-semibold">Fee Structure:</span> ₹ [To be finalized]
        </p>
        <p>
          <span className="font-semibold">Scholarships / Group Discounts:</span> Available for bulk enrollment
        </p>
      </div>

    </section>  
     <Fees/>
</main>


          {/* Right: Download brochure */}
<aside className="md:col-span-3 order-3 mt-10">
  <div className="sticky top-6">
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-300 shadow-lg p-6 space-y-4">
      {/* Header */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
        <FaFileDownload className="text-indigo-600 dark:text-indigo-400" />
        <span>Download Brochure</span>
      </h2>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base text-justify">
        Get the complete details of our <span className="font-semibold text-indigo-600 dark:text-indigo-400">Diploma in Artificial Intelligence Applications Across Industries</span> course. Learn about modules, curriculum, projects, and career opportunities.
      </p>

      {/* Highlights */}
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        <li className="flex items-center space-x-2">
          <FaCheckCircle className="text-purple-500 dark:text-purple-400"/>
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
        className="inline-flex items-center justify-center w-full rounded-xl px-4 py-3 font-semibold border border-indigo-600 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-indigo-900 dark:text-gray-100"
      >
        Download PDF
      </a>

      {/* Note */}
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
