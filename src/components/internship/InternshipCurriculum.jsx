import React from "react";
import {
  FaCalendarAlt,
  FaBookOpen,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaProjectDiagram,FaPuzzlePiece,FaHandPaper,FaBalanceScale,FaBug,FaMoneyBillWave,FaBuilding,FaRupeeSign,
  FaRobot,FaTools,FaUsers, FaClipboardCheck,
  FaClock,
  FaCheckSquare,
} from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../landing/Navbar.jsx";
import Footer from "../Footer.jsx";
import Fees from "./Fees.jsx"
import { 
  GraduationCap, 
  CheckCircle, 
  Bot, 
  Settings, 
  FileText, 
  Presentation,
  Target,
  Cpu,
  Eye,
  Zap
} from "lucide-react";
export default function InternshipCurriculum() {
   const weeks = [
    {
      title: "Weeks 1–2: Foundations",
      icon: Target,
      bullets: [
        "Robotics overview (healthcare/logistics/hospitality/education)",
        "EV3 hardware: motors, sensors, programming basics",
      ],
      projects: [
        "TRACK3R tracked vehicle with tools",
        "Line Follower Robot", 
        "Gripp3r (object handling)"
      ],
    },
    {
      title: "Weeks 3–4: Intermediate Robotics",
      icon: Settings,
      bullets: [
        "Control systems: open vs closed loop, PID basics",
        "Navigation with ultrasonic & color sensors",
      ],
      projects: [
        "GyroBoy (balancing robot)", 
        "Maze Solver using multi-sensors", 
        "SPIK3R scorpion robot"
      ],
    },
    {
      title: "Weeks 5–6: Applied AI Foundations",
      icon: Cpu,
      bullets: [
        "Intro to Python, data handling, logic control",
        "Basics of computer vision (OpenCV)",
        "Basics of voice recognition",
        "Hands-on: Using Pi/ESP32 with simple AI tasks",
      ],
      projects: [],
    },
    {
      title: "Weeks 7–8: Advanced Robotics",
      icon: Zap,
      bullets: [
        "Multi-DOF motion & robotic arm control",
        "Projects: Robotic Arm, R3PTAR, Color Sorter",
      ],
      projects: [
        "Robotic Arm (pick & place)",
        "R3PTAR snake robot (bio-inspired locomotion)",
        "Color Sorter Robot (automation)"
      ],
    },
  ];


const batches = [
  { name: "Batch A", time: "9:00 am – 12:00 pm" },
  { name: "Batch B", time: "1:30 pm – 4:30 pm" },
];

  const capstoneProjects = [
    "Healthcare Delivery Bot – medicine delivery in hospitals",
    "Hospitality Waiter Bot – service robot for hospitality",
    "Warehouse Logistics Bot – autonomous package movement",
    "Educational Assistant Bot – interactive robot for classrooms",
  ];

  const deliverables = [
    { icon: Settings, title: "Working prototype" },
    { icon: FileText, title: "Technical report & documentation" },
    { icon: Presentation, title: "Final presentation & demo" }
  ];

  return (
    <>
    <Navbar/>
    <br></br><br></br><br></br>
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12 text-gray-800 dark:text-gray-100 text-base md:text-lg">
      {/* Hero / Header */}
      <header className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-3xl shadow-xl overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 sm:p-10 gap-8">
          {/* Left Section */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight flex items-center justify-center lg:justify-start gap-2">
              <FaGraduationCap className="text-teal-600" />4 Months Internship
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-purple-500 flex items-center justify-center lg:justify-start">
              <FaRobot className="text-blue-900 mr-2" /> Industry-Focused Internship in Service Robotics and Applied AI
            </h2>
             <p className="flex items-center justify-center lg:justify-start text-sm sm:text-base">
              <FaClock className="text-blue-900 mr-2" />
              12 weeks · 180 hours · 80% practical · 20% guided theory
            </p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-1 ">
  {/* Categories */}
  <p className="flex items-center text-indigo-600 font-semibold text-sm">
    <FaRobot className="mr-1 text-indigo-500" />
    Categories: <span className="ml-1 text-gray-800 dark:text-gray-200">Robotics</span>
  </p>

  {/* Skills */}
  <p className="flex items-center text-green-600 font-semibold text-sm">
    <FaTools className="mr-1 text-green-500" />
    Skills: <span className="ml-1 text-gray-800 dark:text-gray-200">Intelligent Machines</span>
  </p>

  {/* Vacancy */}
  <p className="flex items-center text-blue-600 font-semibold text-sm">
    <FaUsers className="mr-1 text-blue-500" />
    Vacancy: <span className="ml-1 text-gray-800 dark:text-gray-200">300 positions</span>
  </p>

  {/* Internship Type */}
  <p className="flex items-center text-purple-600 font-semibold text-sm">
    <FaMoneyBillWave className="mr-1 text-purple-500" />
    Internship Type: <span className="ml-1 text-gray-800 dark:text-gray-200">Paid</span>
  </p>

  {/* Internship Mode */}
  <p className="flex items-center text-teal-600 font-semibold text-sm">
    <FaBuilding className="mr-1 text-teal-500" />
    Internship Mode: <span className="ml-1 text-gray-800 dark:text-gray-200">Onsite</span>
  </p>

  {/* Deadline */}
  <p className="flex items-center text-red-600 font-semibold text-sm">
    <FaCalendarAlt className="mr-1 text-red-500" />
    Deadline: <span className="ml-1 text-gray-800 dark:text-gray-200">2025-09-15</span>
  </p>

  {/* Duration */}
  <p className="flex items-center text-yellow-600 font-semibold text-sm">
    <FaClock className="mr-1 text-yellow-500" />
    Duration: <span className="ml-1 text-gray-800 dark:text-gray-200">4 Months</span>
  </p>

  {/* Fees */}
  <p className="flex items-center text-pink-600 font-semibold text-sm">
    <FaRupeeSign className="mr-1 text-pink-500" />
    Fees: <span className="ml-1 text-gray-800 dark:text-gray-200">₹ 6,000</span>
  </p>
</div>

</div>

          {/* Right Section */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-white/5 dark:to-white/5 border border-indigo-300/30 dark:border-gray-700 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full sm:w-96">

  <h3 className="font-bold flex items-center gap-2 mt-3 text-indigo-600 dark:text-indigo-400">
    <FaCalendarAlt /> Batches  <span className="inline-block bg-purple-50 text-gray-800 text-xs sm:text-sm font-semibold px-3 py-1 mt-0 ml-0 rounded-full shadow-md">
    Internship 2025
  </span>
  </h3> 
  <div className="mt-3 space-y-2 text-sm sm:text-base">
    {batches.map((batch) => (
      <p key={batch.name} className="flex items-center gap-2">
        <FaClipboardCheck className="text-indigo-500" />
        {batch.name}: <span className="font-medium">{batch.time}</span>
      </p>
    ))}
  </div>
</div>
</div>
      </header>

      {/* Section 1: Overview */}
      <section className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border-l-4 border-indigo-500">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
          <FaBookOpen className="text-indigo-500" /> (1) Curriculum Overview
        </h2>

        <div className="space-y-3 leading-relaxed text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-gray-500" />
            <span>
              <strong>Duration:</strong> 12 weeks (4 months)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-gray-500" />
            <span>
              <strong>Format:</strong> 5 days/week × 3 hrs/day = 15 hrs/week →{" "}
              <strong>180 hrs total</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-gray-500" />
            <span>
              <strong>Mode:</strong> 80% practical, 20% guided theory
            </span>
          </div>

          {/* Monthly Structure */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaCheckCircle className="text-gray-500" />
              <span>
                <strong>Monthly Structure:</strong>
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-3">
              {/* Month 1 */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Month 1 – Foundations
                </h4>
                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-indigo-600" /> Intro to Robotics & Applied AI
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-indigo-600" /> Motors, sensors, programming basics
                  </li>
                {/* Mini-Projects Section */}
<div className="mt-4 p-4 rounded-lg bg-indigo-50 dark:bg-gray-800 border border-indigo-200 dark:border-gray-700">
  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">
    <FaBug className="text-indigo-600" /> Projects
  </h4>
  <ul className="space-y-2 text-sm sm:text-base">
    {["TRACK3R", "Line Follower", "Gripp3r"].map((proj, idx) => (
      <li key={idx} className="flex items-center gap-2">
        <FaCheckCircle className="text-indigo-600" />
        <span>{proj}</span>
      </li>
    ))}
  </ul>
</div>
</ul>
   </div>

              {/* Month 2 */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400">
                  Month 2 – Intermediate
                </h4>
               {/* Main Syllabus Points */}
<ul className="mt-2 space-y-2 text-sm sm:text-base">
  <li className="flex items-center gap-2">
    <FaCheckCircle className="text-purple-600" /> Feedback control & navigation
  </li>
  <li className="flex items-center gap-2">
    <FaCheckCircle className="text-purple-600" /> Multi-sensor integration
  </li>
  <li className="flex items-center gap-2">
    <FaCheckCircle className="text-purple-600" /> Intro to Python-based AI modules
  </li>
</ul>

{/* Mini-Projects Section */}
<div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-gray-800 border border-purple-200 dark:border-gray-700">
  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2">
    <FaBug className="text-purple-600" /> Projects
  </h4>
  <ul className="space-y-2 text-sm sm:text-base">
    {["GyroBoy (self-balancing)", "Maze Solver", "SPIK3R (bio-inspired robot)"].map((proj, idx) => (
      <li key={idx} className="flex items-center gap-2">
        <FaCheckCircle className="text-purple-600" />
        <span>{proj}</span>
      </li>
    ))}
  </ul>
</div>
 </div>

              {/* Month 3 */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-pink-600 dark:text-pink-400">
                  Month 3 – Advanced + Capstone
                </h4>
                <ul className="mt-2 space-y-2 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-pink-600" /> Complex robots: Arm, R3PTAR, Color Sorter
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-pink-600" /> AI integration: Vision, object detection, voice
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-pink-600" /> Capstone: Service-industry robot prototype
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Detailed Syllabus */}

  <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-l-4 border-purple-500 max-w-8xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-2xl font-bold mb-2 flex items-center gap-3">
          <GraduationCap className="text-purple-500" size={32} />
          <span className="text-gray-800 dark:text-gray-200">
            (2) Detailed Syllabus
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {weeks.map((week, idx) => {
          const WeekIcon = week.icon;
          return (
            <div
              key={idx}
              className="group p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                  <WeekIcon className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  {week.title}
                </h3>
              </div>

              <div className="space-y-3 mb-4">
                {week.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {week.projects.length > 0 && (
                <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-gray-800 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-3">
                    <Bot className="text-purple-600" size={18} />
                    <h4 className="font-semibold text-purple-900 dark:text-purple-300">
                      Mini-Projects
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {week.projects.map((project, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-purple-500 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
                          {project}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Capstone Project */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-purple-900 rounded-xl p-8 shadow-md border border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <GraduationCap className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-xl text-purple-900 dark:text-purple-100">
              Weeks 9–12: Capstone Project
            </h3>
            <p className="text-purple-700 dark:text-purple-300 text-sm mt-1">
              Team-based projects (4–6 students per team)
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-4 flex items-center gap-2">
              <Bot className="text-purple-600" size={18} />
              Project Options
            </h4>
            <div className="space-y-3">
              {capstoneProjects.map((project, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-purple-600 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm sm:text-base text-purple-800 dark:text-purple-200 leading-relaxed">
                    {project}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-4 flex items-center gap-2">
              <Target className="text-purple-600" size={18} />
              Deliverables
            </h4>
            <div className="grid gap-3">
              {deliverables.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-700 hover:shadow-sm transition-shadow"
                  >
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <ItemIcon className="text-purple-600 dark:text-purple-400" size={16} />
                    </div>
                    <span className="text-sm font-medium text-purple-900 dark:text-purple-200">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Section 3: Delivery Plan */}
   <section className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 shadow-lg border-l-4 border-pink-500">
  <h2 className="text-2xl sm:text-2xl font-bold mb-10 flex items-center gap-3 text-gray-800 dark:text-gray-200">
    <FaProjectDiagram className="text-pink-500" /> (3) Delivery Plan — 3 hrs/day × 12 weeks
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Session Structure */}
    <div className="p-7 rounded-xl border bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <span className="block w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mb-4 text-lg">
        1
      </span>
      <h3 className="font-semibold text-lg mb-4">Session Structure (per day)</h3>
      <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
        {[
          "30 mins – Theory & concept introduction",
          "2 hrs – Hands-on practicals",
          "30 mins – Reflection, documentation, Q&A",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaCheckCircle className="text-pink-500 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Weekly Plan */}
    <div className="p-7 rounded-xl border bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <span className="block w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mb-4 text-lg">
        2
      </span>
      <h3 className="font-semibold text-lg mb-4">Weekly Plan (15 hrs/week)</h3>
      <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
        {[
          "Monday: Weekly theme + demo",
          "Tuesday–Thursday: Guided hands-on builds",
          "Friday: Review, debugging, presentations",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaCheckSquare className="text-pink-500 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-sm sm:text-base text-gray-800 dark:text-gray-300">
        <strong className="text-blue-500">Total Contact Hours:</strong>
        <p className="mt-1">
          12 weeks × 15 hrs = <span className="font-semibold">180 hrs</span>
        </p>
        <p className="mt-2">
          Students complete <strong className="text-purple-500">6+ mini-projects</strong>  <strong className="text-purple-500">& 1 major capstone project</strong>
        </p>
      </div>
    </div>

    {/* Capstone & Assessment */}
    <div className="p-7 rounded-xl border bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <span className="block w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold mb-4 text-lg">
        3
      </span>
      <h3 className="font-semibold text-lg mb-4">Capstone & Evaluation</h3>

      <h4 className="font-medium text-md mb-3 text-gray-900 dark:text-gray-100">Team Roles</h4>
      <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
        {[
          "Team Lead / Project Manager",
          "Hardware Lead",
          "Software Lead",
          "Documentation & QA",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaCheckSquare className="text-pink-500 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h4 className="font-medium text-md mt-6 mb-3 text-gray-900 dark:text-gray-100">Assessment & Deliverables</h4>
      <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
        {[
          "Weekly progress logs & demos",
          "Mid-term mini-project evaluations",
          "Final prototype demo & report",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaCheckSquare className="text-pink-500 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


      {/*Fees Section */}
<Fees />

      {/* CTA Footer */}
      <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-100 dark:bg-gray-800 rounded-xl p-5 shadow-inner">
        <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base text-center sm:text-left">
          Want this as a printable syllabus or editable PDF? Export & share with your team.
        </p>
        <div className="flex justify-center sm:justify-end">
          <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:scale-105 hover:bg-indigo-700 transition text-sm sm:text-base">
            Download Syllabus
          </button>
        </div>
      </footer>
    </div>
    <Footer/>
    </>
  );
}
