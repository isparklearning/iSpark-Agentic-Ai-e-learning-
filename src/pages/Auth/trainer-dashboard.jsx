// src/pages/teacher/TeacherDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaBook,
  FaBell,
  FaMoon, FaEnvelope, FaEdit, FaCog,
  FaSun,
  FaHome,
  FaBriefcase,
  FaRobot,
  FaStar,
  FaSignInAlt,
  FaUserPlus,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaUser,
  FaHandshake,
  FaChartLine,
  FaTrophy,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaMedal,
  FaAward,
  FaCheckCircle,
  FaTasks,
  FaUsers,
  FaChartBar,
  FaLaptopCode,
  FaLightbulb,
  FaCogs,
  FaVideo,
  FaPlay,
  FaChalkboardTeacher,
  FaUserTie,
  FaUserGraduate,
  FaUserShield,
  FaUsersCog,
  FaChartPie,
  FaComments,
  FaBookReader,
  FaCertificate,
  FaSignOutAlt
} from 'react-icons/fa';
import logo from "../../assets/logo-dark.png";

const TeacherDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize user state with error handling
  const [user, setUser] = useState(() => {
    try {
      const userData = location.state?.user || JSON.parse(localStorage.getItem('user'));
      return userData || null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  });
  
  const [courses, setCourses] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true' || false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    coursesTaught: 0,
    totalStudents: 0,
    averageRating: 0,
    totalHours: 0,
  });
  const [liveClass, setLiveClass] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard'); 

  // State for student management
  const [students, setStudents] = useState([]);
  const [studentLoading, setStudentLoading] = useState(true);
  const [studentStats, setStudentStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    completedCourses: 0,
    averageProgress: 0,
  });

  // State for live class creation
  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("AI");
  const [duration, setDuration] = useState(60);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('darkMode');
    navigate('/login');
  };

  // Function to create meeting
  async function createMeeting() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/create_meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          start_time: new Date().toISOString(),
          duration
        })
      });
      const data = await res.json();
      if (!res.ok) {
        alert("Create meeting failed: " + JSON.stringify(data));
      } else {
        setMeeting(data);
      }
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    async function fetchData() {
      try {
        const coursesRes = await fetch(`/api/trainer-courses?trainer=${user.username}`);
        const notificationsRes = await fetch(`/api/trainer-notifications?trainer=${user.username}`);
        const liveClassRes = await fetch(`/api/trainer-live-class?trainer=${user.username}`);
        
        if (coursesRes.ok) {
          const coursesData = await coursesRes.json();
          setCourses(coursesData);
          
          // Calculate stats
          const coursesTaught = coursesData.length;
          const totalStudents = coursesData.reduce((sum, course) => sum + (course.students || 0), 0);
          const averageRating = coursesData.reduce((sum, course) => sum + (course.rating || 0), 0) / coursesData.length || 0;
          const totalHours = coursesData.reduce((sum, course) => sum + (course.hours || 0), 0);
          
          setStats({
            coursesTaught,
            totalStudents,
            averageRating: averageRating.toFixed(1),
            totalHours,
          });
        }
        
        if (notificationsRes.ok) setNotifications(await notificationsRes.json());
        
        if (liveClassRes.ok) {
          const liveClassData = await liveClassRes.json();
          setLiveClass(liveClassData);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      }
    }
    fetchData();
  }, [user, navigate]);

  // Fetch student data
  useEffect(() => {
    if (!user || activeTab !== 'students') return;
    
    async function fetchStudentData() {
      setStudentLoading(true);
      try {
        const studentsRes = await fetch(`http://127.0.0.1:8000/api/students?trainer=${user.username}`);
        if (studentsRes.ok) {
          const studentsData = await studentsRes.json();
          setStudents(Array.isArray(studentsData) ? studentsData : []);
          
          // Calculate student stats
          const totalStudents = studentsData.length;
          const activeStudents = studentsData.filter(s => s.is_active === 1).length;
          const completedCourses = studentsData.reduce((sum, s) => sum + (s.completed_courses || 0), 0);
          const totalProgress = studentsData.reduce((sum, s) => sum + (s.progress || 0), 0);
          const averageProgress = totalStudents > 0 ? Math.round(totalProgress / totalStudents) : 0;
          
          setStudentStats({
            totalStudents,
            activeStudents,
            completedCourses,
            averageProgress,
          });
        }
      } catch (error) {
        console.error('Failed to fetch student data', error);
      } finally {
        setStudentLoading(false);
      }
    }
    
    fetchStudentData();
  }, [user, activeTab]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const renderRoleBadge = (role) => {
    const base = "inline-block px-3 py-1 rounded-full text-sm font-semibold text-white";
    const colors = {
      Trainer: "bg-purple-600",
      Admin: "bg-yellow-400 text-black",
      "Super Admin": "bg-red-700"
    };
    return <span className={`${base} ${colors[role] || "bg-purple-500"}`}>{role}</span>;
  };

  const products = [
    { name: "Humanoid AI Robots", href: "/products/humanoid-ai-teacher-robot" },
    { name: "CoE Lab", href: "/products/coe-lab" },
  ];

  const upcomingEvents = [
    { title: "AI Workshop", date: "2023-06-15", time: "10:00 AM" },
    { title: "Final Exam", date: "2023-06-20", time: "2:00 PM" },
    { title: "Project Submission", date: "2023-06-25", time: "11:59 PM" },
  ];

  const renderLiveClassBroadcaster = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-purple-600 dark:text-purple-400">
          <FaVideo /> Live Class Broadcaster
        </h3>
        <button
          onClick={() => setActiveTab('dashboard')}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
        >
          Back to Dashboard
        </button>
      </div>
      
      {/* Meeting Creation Form */}
      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">Create New Meeting</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Topic</label>
            <input 
              type="text" 
              value={topic} 
              onChange={(e) => setTopic(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Duration (minutes)</label>
            <input 
              type="number" 
              value={duration} 
              onChange={(e) => setDuration(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
        <button 
          onClick={createMeeting} 
          disabled={loading}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Live Class"}
        </button>
      </div>
      
      {/* Meeting Details */}
      {meeting && (
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-800 dark:text-green-300">Meeting Created!</h4>
          <div className="mb-3 sm:mb-4">
            <p className="font-medium text-gray-700 dark:text-gray-300">Topic: {meeting.topic}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Start Time: {new Date(meeting.start_time).toLocaleString()}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Duration: {meeting.duration} minutes</p>
          </div>
          
          <div className="mb-3 sm:mb-4">
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Start URL (Teacher only):</p>
            <a 
              href={meeting.start_url} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
            >
              <FaPlay className="mr-2" /> Start Live Class
            </a>
          </div>
          
          <div>
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Join URL (share with students):</p>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 sm:p-4 rounded-lg font-mono text-sm break-all">
              {meeting.join_url}
            </div>
          </div>
        </div>
      )}
      
      <div className="text-center">
        <div id="status" className="text-lg font-semibold text-gray-700 dark:text-gray-300"></div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <>
      {/* Stats Section */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaChalkboardTeacher className="text-green-600 dark:text-green-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.coursesTaught}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Courses Taught</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaUsers className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.totalStudents}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Students Enrolled</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaStar className="text-yellow-600 dark:text-yellow-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.averageRating}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaClock className="text-purple-600 dark:text-purple-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.totalHours}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Teaching Hours</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Courses Section */}
        <section className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-green-700 dark:text-green-400">
              <FaChalkboardTeacher /> Your Courses
            </h3>
            <button
              onClick={() => navigate('/create-course')}
              className="hidden sm:block px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:opacity-90 text-white rounded-lg font-medium transition"
            >
              Create Course
            </button>
          </div>

          {courses.length > 0 ? (
            <div className="space-y-3 sm:space-y-4 max-h-[350px] sm:max-h-[400px] overflow-y-auto pr-2">
              {courses.map(course => (
                <div
                  key={course.id}
                  className="border dark:border-gray-700 p-3 sm:p-4 rounded-lg hover:shadow-lg transition cursor-pointer bg-white dark:bg-gray-900"
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100 truncate">{course.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{course.description}</p>
                    </div>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                      {course.students || 0} Students
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-3">
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <span>Rating</span>
                      <span>{course.rating || 0}/5</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < Math.floor(course.rating || 0) ? 'text-yellow-500' : 'text-gray-300'} mr-1 text-sm`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-10">
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">You haven't created any courses yet.</p>
              <button
                onClick={() => navigate('/create-course')}
                className="sm:hidden px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:opacity-90 text-white rounded-lg font-medium transition"
              >
                Create Course
              </button>
            </div>
          )}
        </section>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Notifications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 max-h-[400px] sm:max-h-[500px] overflow-auto transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-3 text-green-600 dark:text-green-400">
              <FaBell /> Notifications
            </h3>
            {notifications.length > 0 ? (
              <ul className="space-y-3">
                {notifications.map(note => (
                  <li
                    key={note.id}
                    className="border-l-4 border-green-500 dark:border-green-400 p-3 rounded-md bg-green-50 dark:bg-green-900/30 shadow-sm hover:bg-green-100 dark:hover:bg-green-800 cursor-default"
                  >
                    <p className="text-sm sm:text-base text-gray-700 dark:text-green-200">{note.message}</p>
                    <small className="text-xs sm:text-sm text-gray-500 dark:text-green-400 mt-2 block">{new Date(note.date).toLocaleString()}</small>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8 sm:py-10">
                <p className="text-gray-500 dark:text-gray-400">You have no new notifications.</p>
              </div>
            )}
          </section>

          {/* Upcoming Classes */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
              <FaCalendarAlt /> Upcoming Classes
            </h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <FaCalendarAlt className="text-green-600 dark:text-green-400 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-100">{event.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{event.date} at {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-6 sm:mt-8">
        <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 hover:shadow-lg transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaUserTie className="text-green-600 dark:text-green-400 text-lg sm:text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">Manage Students</span>
        </button>
        
        <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 hover:shadow-lg transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaChartLine className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">Performance Reports</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('live')}
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 hover:shadow-lg transition-colors duration-300"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaVideo className="text-red-600 dark:text-red-400 text-lg sm:text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">Start Live Class</span>
        </button>
        
        <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 hover:shadow-lg transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaCogs className="text-yellow-600 dark:text-yellow-400 text-lg sm:text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">Settings</span>
        </button>
      </section>
    </>
  );

  const renderAnalytics = () => (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-3 text-blue-700 dark:text-blue-400">
        <FaChartLine /> Course Analytics
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">Student Engagement</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Average Completion Rate</span>
              <span className="font-bold">78%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Average Time Spent</span>
              <span className="font-bold">45 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Students</span>
              <span className="font-bold">142</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">Course Performance</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Top Rated Course</span>
              <span className="font-bold">Web Development</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Most Popular Course</span>
              <span className="font-bold">Python Basics</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Highest Enrollment</span>
              <span className="font-bold">JavaScript Fundamentals</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">Student Feedback</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Average Rating</span>
              <span className="font-bold">4.2/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Positive Reviews</span>
              <span className="font-bold">87%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Common Feedback</span>
              <span className="font-bold">More examples needed</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">Revenue & Growth</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Monthly Revenue</span>
              <span className="font-bold">$3,240</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Growth Rate</span>
              <span className="font-bold text-green-600">+12%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">New Students</span>
              <span className="font-bold">48 this month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderStudents = () => (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-purple-700 dark:text-purple-400">
          <FaUsersCog /> Student Management
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={() => navigate('/add-student')}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white rounded-lg font-medium transition"
          >
            Add Student
          </button>
        </div>
      </div>
      
      {/* Student Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 sm:p-4">
          <div className="text-2xl sm:text-3xl font-bold text-purple-700 dark:text-purple-400">{studentStats.totalStudents}</div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Students</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 sm:p-4">
          <div className="text-2xl sm:text-3xl font-bold text-green-700 dark:text-green-400">{studentStats.activeStudents}</div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Students</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 sm:p-4">
          <div className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400">{studentStats.completedCourses}</div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Completed Courses</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 sm:p-4">
          <div className="text-2xl sm:text-3xl font-bold text-yellow-700 dark:text-yellow-400">{studentStats.averageProgress}%</div>
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Avg. Progress</div>
        </div>
      </div>
      
      {studentLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
        </div>
      ) : students.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Student</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Courses</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Progress</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Activity</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {students.map(student => (
                <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                        {student.first_name ? student.first_name[0] : 'S'}
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {student.first_name} {student.last_name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          ID: {student.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {student.email}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {student.enrolled_courses || 0} Courses
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div 
                        className={`h-2 rounded-full ${student.progress >= 70 ? 'bg-green-600' : student.progress >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                        style={{ width: `${student.progress || 0}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{student.progress || 0}%</span>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">
                    {student.last_activity ? new Date(student.last_activity).toLocaleDateString() : 'No activity'}
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.is_active === 1 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {student.is_active === 1 ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => navigate(`/student/${student.id}`)}
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">You have no students assigned to you.</p>
          <button 
            onClick={() => navigate('/add-student')}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white rounded-lg font-medium transition"
          >
            Add Your First Student
          </button>
        </div>
      )}
    </section>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans">
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`w-64 bg-white dark:bg-gray-800 shadow-lg h-screen fixed lg:relative z-50 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Header with logo on left and cancel button on right */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/home')}>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 lg:hidden"
            aria-label="Close sidebar"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <button
            onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center ${
              activeTab === 'dashboard' ? 'bg-purple-100 dark:bg-purple-700' : ''
            }`}
          >
            <FaHome className="mr-3 text-purple-600 dark:text-purple-400" /> Dashboard
          </button>

          <button
            onClick={() => { setActiveTab('live'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center ${
              activeTab === 'live' ? 'bg-purple-100 dark:bg-purple-700' : ''
            }`}
          >
            <FaVideo className="mr-3 text-purple-600 dark:text-purple-400" /> Live Classes
          </button>

          <button
            onClick={() => { setActiveTab('analytics'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center ${
              activeTab === 'analytics' ? 'bg-purple-100 dark:bg-purple-700' : ''
            }`}
          >
            <FaChartLine className="mr-3 text-purple-600 dark:text-purple-400" /> Analytics
          </button>

          <button
            onClick={() => { setActiveTab('students'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center ${
              activeTab === 'students' ? 'bg-purple-100 dark:bg-purple-700' : ''
            }`}
          >
            <FaUsersCog className="mr-3 text-purple-600 dark:text-purple-400" /> Students
          </button>

          <button
            onClick={() => { navigate('/ispark-vtu'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaHandshake className="mr-3 text-purple-600 dark:text-purple-400"/> iSpark-VTU
          </button>

          <button
            onClick={() => { navigate('/coursessection'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaBook className="mr-3 text-purple-600 dark:text-purple-400" /> Courses
          </button>

          <button
            onClick={() => { navigate('/internship/internpage'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaBriefcase className="mr-3 text-purple-600 dark:text-purple-400" /> Internship
          </button>

          {/* Products dropdown */}
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition"
            >
              <span className="flex items-center">
                <FaRobot className="mr-3 text-purple-600 dark:text-purple-400" /> Products
              </span>
              {productsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {productsOpen && (
              <div className="ml-6 mt-2 space-y-1">
                {products.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => { navigate(item.href); setSidebarOpen(false); }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-600 text-gray-700 dark:text-gray-200 transition flex items-center"
                  >
                    <FaChevronRight className="mr-3 text-xs text-purple-500 dark:text-purple-300" /> {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => { navigate('/success-stories'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaStar className="mr-3 text-purple-600 dark:text-purple-400" /> Success Stories
          </button>

          {/* Logout Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 font-medium transition flex items-center"
            >
              <FaSignOutAlt className="mr-3" /> Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-6 max-w-full overflow-auto">
        {/* Mobile header with menu toggle */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 sm:hidden">
          {sidebarOpen ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle Sidebar"
                className="text-2xl text-gray-700 dark:text-gray-200"
              >
                <FaTimes />
              </button>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold text-purple-600">Teacher Dashboard</h1>
                <h1 className="text-lg font-bold text-purple-600">{user.user_fullname}</h1>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold text-purple-600">Teacher Dashboard</h1>
                <h1 className="text-lg font-bold text-purple-600">{user.user_fullname}</h1>
              </div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle Sidebar"
                className="text-2xl text-gray-700 dark:text-gray-200"
              >
                <FaBars />
              </button>
            </div>
          )}
        </div>

        {/* Desktop header */}
        <header className="hidden sm:flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-6 sm:gap-0 text-gray-900 dark:text-gray-100">
          <div className='flex flex-col gap-4'>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Welcome, <span className='text-purple-600'> {user.user_fullname || user.username}</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
              className="text-xl focus:outline-none hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Notifications */}
            <div className="relative cursor-pointer">
              <FaBell className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300" />
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-2 py-0.5 font-bold shadow-lg">
                  {notifications.length}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Profile Avatar with Edit Button */}
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg">
                {user.first_name ? user.first_name[0] : user.username[0]}
              </div>
              <button className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-md transition-colors">
                <FaUser className="text-xs sm:text-sm" />
              </button>
            </div>
            
            {/* Profile Information */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3">
                <h2 className="text-xl sm:text-2xl font-bold dark:text-gray-100 text-gray-800">
                  {user.first_name} {user.last_name}
                </h2>
                <div className="mt-1 sm:mt-0">
                  {renderRoleBadge(user.role)}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-2 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <FaEnvelope className="text-green-500" />
                {user.email}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {user.department && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Department</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.department}</p>
                  </div>
                )}
                {user.college && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">College</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.college}</p>
                  </div>
                )}
                {user.phone && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.phone}</p>
                  </div>
                )}
                {user.joinDate && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Member Since</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{new Date(user.joinDate).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
              
              {/* Bio Section */}
              {user.bio && (
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <h3 className="font-semibold text-green-700 dark:text-green-300 mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <FaUser className="text-xs sm:text-sm" /> About Me
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">{user.bio}</p>
                </div>
              )}
              
              {/* Skills Section */}
              {user.skills && user.skills.length > 0 && (
                <div className="mb-3 sm:mb-4">
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <FaStar className="text-yellow-500" /> Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <span key={index} className="bg-gradient-to-r from-purple-500 to-teal-600 text-white text-xs px-2 sm:px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
             
            </div>
          </div>
        </section>

        {/* Live Class Section */}
        {liveClass && activeTab !== 'live' && (
          <section className="mb-6 sm:mb-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl shadow-lg p-4 sm:p-6 text-white transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-3 sm:mb-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 sm:mr-4">
                  <FaVideo className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Live Class Now</h3>
                  <p className="text-green-100 text-sm">{liveClass.title}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-center">
                  <p className="text-xs sm:text-sm text-green-100">Starts</p>
                  <p className="font-bold text-sm">{liveClass.startTime}</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-center">
                  <p className="text-xs sm:text-sm text-green-100">Duration</p>
                  <p className="font-bold text-sm">{liveClass.duration}</p>
                </div>
                <button
                  onClick={() => setActiveTab('live')}
                  className="bg-white text-purple-600 hover:bg-opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold flex items-center justify-center transition text-sm"
                >
                  <FaPlay className="mr-1.5 sm:mr-2" /> Start Class
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Tab Content */}
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'live' && renderLiveClassBroadcaster()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'students' && renderStudents()}
      </main>
    </div>
  );
};

export default TeacherDashboard;