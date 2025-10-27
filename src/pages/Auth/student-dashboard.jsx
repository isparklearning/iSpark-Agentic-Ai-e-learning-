// src/pages/student/StudentDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FaBook, FaBell, FaMoon, FaEnvelope, FaEdit, FaCog, FaSun,
  FaHome, FaBriefcase, FaRobot, FaStar, FaSignInAlt, FaUserPlus,
  FaChevronRight, FaChevronUp, FaChevronDown, FaBars, FaTimes,
  FaUser, FaHandshake, FaChartLine, FaTrophy, FaCalendarAlt,
  FaClock, FaGraduationCap, FaMedal, FaAward, FaCheckCircle,
  FaTasks, FaUsers, FaChartBar, FaLaptopCode, FaLightbulb,
  FaCogs, FaVideo, FaPlay, FaChalkboardTeacher, FaUserTie,
  FaUserGraduate, FaUserShield, FaUsersCog, FaChartPie, FaComments,
  FaBookReader, FaCertificate, FaSignOutAlt
} from 'react-icons/fa';
import logo from "../../assets/logo-dark.png";

const StudentDashboard = () => {
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
    enrolledCourses: 0,
    completedCourses: 0,
    averageProgress: 0,
    certificates: 0,
  });
  const [liveClasses, setLiveClasses] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard'); 
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(false);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('darkMode');
    navigate('/login');
  };

  // Function to load meetings
  async function loadMeetings() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/meetings");
      const data = await res.json();
      setMeetings(data);
    } catch (err) {
      alert("Error loading meetings: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  // Load meetings on component mount and set up interval
  useEffect(() => {
    loadMeetings();
    // Poll every 30 seconds to refresh list
    const interval = setInterval(loadMeetings, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    async function fetchData() {
      try {
        const coursesRes = await fetch(`/api/student-courses?student=${user.username}`);
        const notificationsRes = await fetch(`/api/student-notifications?student=${user.username}`);
        const liveClassesRes = await fetch(`/api/student-live-classes?student=${user.username}`);
        
        if (coursesRes.ok) {
          const coursesData = await coursesRes.json();
          setCourses(coursesData);
          
          // Calculate stats
          const enrolledCourses = coursesData.length;
          const completedCourses = coursesData.filter(course => course.progress === 100).length;
          const totalProgress = coursesData.reduce((sum, course) => sum + (course.progress || 0), 0);
          const averageProgress = enrolledCourses > 0 ? (totalProgress / enrolledCourses).toFixed(0) : 0;
          const certificates = coursesData.filter(course => course.completed && course.hasCertificate).length;
          
          setStats({
            enrolledCourses,
            completedCourses,
            averageProgress,
            certificates,
          });
        }
        
        if (notificationsRes.ok) setNotifications(await notificationsRes.json());
        
        if (liveClassesRes.ok) {
          const liveClassesData = await liveClassesRes.json();
          setLiveClasses(liveClassesData);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      }
    }
    fetchData();
  }, [user, navigate]);

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
      Student: "bg-blue-600",
      Alumni: "bg-green-600",
      "Premium Member": "bg-purple-600"
    };
    return <span className={`${base} ${colors[role] || "bg-blue-500"}`}>{role}</span>;
  };

  const products = [
    { name: "Humanoid AI  Robot Teacher ", href: "/humanoid-robot" },
    { name: "CoE Lab", href: "/coe-lab" },
  ];

  const upcomingAssignments = [
    { title: "Math Assignment 3", course: "Mathematics", dueDate: "2023-06-15" },
    { title: "Science Project", course: "Physics", dueDate: "2023-06-20" },
    { title: "Essay Submission", course: "Literature", dueDate: "2023-06-25" },
  ];

  const renderLiveClasses = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-3 text-red-600 dark:text-red-400">
        <FaVideo /> Live Classes
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">Available classes (click Join):</p>
      
      {loading && (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
        </div>
      )}
      
      <div className="space-y-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-2">
        {meetings.map(m => (
          <div key={m.id} className="border dark:border-gray-700 p-3 sm:p-4 rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-900">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100">{m.topic}</h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {new Date(m.start_time).toLocaleString()}
                </p>
              </div>
              <span className="text-xs sm:text-xs bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-2 py-1 rounded-full">
                {m.duration} min
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Status: {new Date(m.start_time) < new Date() ? "Live Now" : "Upcoming"}
              </div>
              <button 
                onClick={() => window.open(m.join_url, "_blank")}
                className="px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition text-sm sm:text-base"
              >
                Join Live Class
              </button>
            </div>
          </div>
        ))}
        {meetings.length === 0 && !loading && (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">No classes available at the moment.</p>
          </div>
        )}
      </div>
      
      <div className="mt-4 sm:mt-6 flex justify-center">
        <button 
          onClick={loadMeetings}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
        >
          Refresh
        </button>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <>
      {/* Stats Section */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaBook className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.enrolledCourses}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Enrolled Courses</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaCheckCircle className="text-green-600 dark:text-green-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.completedCourses}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Completed Courses</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaChartLine className="text-yellow-600 dark:text-yellow-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.averageProgress}%</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Average Progress</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaCertificate className="text-purple-600 dark:text-purple-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.certificates}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Certificates Earned</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Enrolled Courses Section */}
        <section className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-blue-700 dark:text-blue-400">
              <FaBookReader /> My Courses
            </h3>
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
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                      {course.progress}% Complete
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-3">
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  {course.upcomingLiveClass && (
                    <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="text-xs sm:text-sm text-red-600 dark:text-red-400 font-medium">
                        <FaVideo className="inline mr-1" /> Live class today at {course.upcomingLiveClass.time}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(course.upcomingLiveClass.join_url, "_blank");
                        }}
                        className="px-2 sm:px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs sm:text-sm transition"
                      >
                        Join
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-10">
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">You haven't enrolled in any courses yet.</p>
              <button
                onClick={() => navigate('/coursessection')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white rounded-lg font-medium transition"
              >
                Browse Courses
              </button>
            </div>
          )}
        </section>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Notifications */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 max-h-[400px] sm:max-h-[500px] overflow-auto transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-3 text-blue-600 dark:text-blue-400">
              <FaBell /> Notifications
            </h3>
            {notifications.length > 0 ? (
              <ul className="space-y-3">
                {notifications.map(note => (
                  <li
                    key={note.id}
                    className="border-l-4 border-blue-500 dark:border-blue-400 p-3 rounded-md bg-blue-50 dark:bg-blue-900/30 shadow-sm hover:bg-blue-100 dark:hover:bg-blue-800 cursor-default"
                  >
                    <p className="text-sm sm:text-base text-gray-700 dark:text-blue-200">{note.message}</p>
                    <small className="text-xs sm:text-sm text-gray-500 dark:text-blue-400 mt-2 block">{new Date(note.date).toLocaleString()}</small>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8 sm:py-10">
                <p className="text-gray-500 dark:text-gray-400">You have no new notifications.</p>
              </div>
            )}
          </section>

          {/* Upcoming Assignments */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <FaTasks /> Upcoming Assignments
            </h3>
            <div className="space-y-3">
              {upcomingAssignments.map((assignment, index) => (
                <div key={index} className="flex items-start gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                    <FaTasks className="text-red-600 dark:text-red-400 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-100">{assignment.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{assignment.course} • Due {assignment.dueDate}</p>
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
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaBookReader className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">My Courses</span>
        </button>
        
        <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 hover:shadow-lg transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaCertificate className="text-green-600 dark:text-green-400 text-lg sm:text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">Certificates</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('live')}
          className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 hover:shadow-lg transition-colors duration-300"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaVideo className="text-red-600 dark:text-red-400 text-lg sm:text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">Live Classes</span>
        </button>
        
        <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 hover:shadow-lg transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaChartLine className="text-purple-600 dark:text-purple-400 text-lg sm:text-xl" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-100">Progress</span>
        </button>
      </section>
    </>
  );

  const renderProfile = () => (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-colors duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-3 text-blue-700 dark:text-blue-400">
        <FaUser /> Student Profile
      </h3>
      
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-lg mx-auto mb-4">
            {user.first_name ? user.first_name[0] : user.username[0]}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold dark:text-gray-100 text-gray-800 mb-2">
            {user.first_name} {user.last_name}
          </h2>
          {renderRoleBadge(user.role)}
          <button className="mt-3 sm:mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white rounded-lg font-medium transition text-sm sm:text-base">
            Edit Profile
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
            <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.email}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Student ID</p>
            <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.studentId || 'N/A'}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Department</p>
            <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.department || 'N/A'}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Year</p>
            <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.year || 'N/A'}</p>
          </div>
        </div>
        
        {user.bio && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">About Me</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{user.bio}</p>
          </div>
        )}
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">Learning Goals</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs sm:text-sm">
              Web Development
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs sm:text-sm">
              Data Science
            </span>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs sm:text-sm">
              Machine Learning
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white rounded-lg font-medium transition text-sm sm:text-base">
            View Certificates
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition text-sm sm:text-base">
            Settings
          </button>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-800 text-red-700 dark:text-red-200 rounded-lg font-medium transition flex items-center gap-2 text-sm sm:text-base"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
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
                <h1 className="text-lg font-bold text-purple-600">Student Dashboard</h1>
                <h1 className="text-lg font-bold text-purple-600">{user.user_fullname}</h1>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold text-purple-600">Student Dashboard</h1>
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

        {/* Tab Content */}
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'live' && renderLiveClasses()}
        {activeTab === 'profile' && renderProfile()}
      </main>
    </div>
  );
};

export default StudentDashboard;