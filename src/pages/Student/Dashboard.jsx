import React, { useEffect, useState } from 'react';
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
} from 'react-icons/fa';
import logo from "../../assets/logo-dark.png";

const Dashboard = () => {
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
    completedCourses: 0,
    inProgressCourses: 0,
    certificates: 0,
    totalHours: 0,
  });
  const [liveClass, setLiveClass] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    async function fetchData() {
      try {
        const coursesRes = await fetch(`/api/courses?user=${user.username}`);
        const notificationsRes = await fetch(`/api/notifications?user=${user.username}`);
        const liveClassRes = await fetch(`/api/live-class?user=${user.username}`);
        
        if (coursesRes.ok) {
          const coursesData = await coursesRes.json();
          setCourses(coursesData);
          
          // Calculate stats
          const completed = coursesData.filter(course => course.progress === 100).length;
          const inProgress = coursesData.filter(course => course.progress > 0 && course.progress < 100).length;
          const totalHours = coursesData.reduce((sum, course) => sum + (course.hours || 0), 0);
          
          setStats({
            completedCourses: completed,
            inProgressCourses: inProgress,
            certificates: completed,
            totalHours: totalHours,
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
      Trainer: "bg-green-600",
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

  const achievements = [
    { title: "Python Basics", icon: <FaCheckCircle className="text-green-500" />, earned: true },
    { title: "Web Development", icon: <FaCheckCircle className="text-green-500" />, earned: true },
    { title: "Machine Learning", icon: <FaMedal className="text-yellow-500" />, earned: false },
    { title: "Data Science", icon: <FaMedal className="text-yellow-500" />, earned: false },
  ];

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
        {/* Logo */}
        <div
          className="flex items-center justify-center mt-6 mb-8 h-20 border-b border-gray-200 dark:border-gray-700 cursor-pointer"
          onClick={() => navigate('/home')}
        >
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <button
            onClick={() => { navigate('/'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaHome className="mr-3 text-purple-600 dark:text-purple-400" /> Home
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
        </nav>

      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 max-w-full overflow-auto">
        {/* Mobile header with menu toggle */}
        <div className="flex items-center justify-between mb-6 sm:hidden">
          <div className='flex flex-col gap-3'>
            <h1 className="text-xl font-bold text-indigo-600">Dashboard</h1>
            <h1 className="text-xl font-bold text-purple-600">{user.username}</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle Sidebar"
            className="text-2xl text-gray-700 dark:text-gray-200"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop header */}
        <header className="hidden sm:flex flex-col sm:flex-row items-center justify-between mb-12 gap-6 sm:gap-0 text-gray-900 dark:text-gray-100">
          <div className='flex flex-col gap-6'>
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Welcome, <span className='text-purple-600'> {user.first_name || user.username}!!</span>
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
              className="text-xl focus:outline-none hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Notifications */}
            <div className="relative cursor-pointer">
              <FaBell className="text-3xl text-gray-700 dark:text-gray-300" />
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-2 py-0.5 font-bold shadow-lg">
                  {notifications.length}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Profile */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Profile Avatar with Edit Button */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                {user.first_name ? user.first_name[0] : user.username[0]}
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white flex items-center justify-center shadow-md transition-colors">
                <FaUser className="text-sm" />
              </button>
            </div>
            
            {/* Profile Information */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <h2 className="text-2xl sm:text-3xl font-bold dark:text-gray-100 text-gray-800">
                  {user.first_name} {user.last_name}
                </h2>
                <div className="mt-2 sm:mt-0">
                  {renderRoleBadge(user.role)}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center gap-2">
                <FaEnvelope className="text-indigo-500" />
                {user.email}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {user.department && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Department</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{user.department}</p>
                  </div>
                )}
                {user.college && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">College</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{user.college}</p>
                  </div>
                )}
                {user.phone && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{user.phone}</p>
                  </div>
                )}
                {user.joinDate && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Member Since</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{new Date(user.joinDate).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
              
              {/* Bio Section */}
              {user.bio && (
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <FaUser className="text-sm" /> About Me
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{user.bio}</p>
                </div>
              )}
              
              {/* Skills Section */}
              {user.skills && user.skills.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <FaStar className="text-yellow-500" /> Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <span key={index} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition flex items-center gap-2">
                  <FaEdit className="text-sm" /> Edit Profile
                </button>
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition flex items-center gap-2">
                  <FaCog className="text-sm" /> Settings
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Class Section */}
        {liveClass && (
          <section className="mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                  <FaVideo className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Live Class Now</h3>
                  <p className="text-indigo-100">{liveClass.title}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-center">
                  <p className="text-sm text-indigo-100">Starts</p>
                  <p className="font-bold">{liveClass.startTime}</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-center">
                  <p className="text-sm text-indigo-100">Duration</p>
                  <p className="font-bold">{liveClass.duration}</p>
                </div>
                {user.role === 'Student' ? (
                  <button
                    onClick={() => navigate(`/live-class/${liveClass.id}`)}
                    className="bg-white text-indigo-600 hover:bg-opacity-90 px-6 py-3 rounded-lg font-bold flex items-center justify-center transition"
                  >
                    <FaPlay className="mr-2" /> Join Class
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/live-class/${liveClass.id}`)}
                    className="bg-white text-indigo-600 hover:bg-opacity-90 px-6 py-3 rounded-lg font-bold flex items-center justify-center transition"
                  >
                    <FaPlay className="mr-2" /> Start Class
                  </button>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center text-center transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
              <FaBook className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.completedCourses}</h3>
            <p className="text-gray-600 dark:text-gray-400">Completed Courses</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center text-center transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
              <FaGraduationCap className="text-purple-600 dark:text-purple-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.inProgressCourses}</h3>
            <p className="text-gray-600 dark:text-gray-400">In Progress</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center text-center transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
              <FaTrophy className="text-green-600 dark:text-green-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.certificates}</h3>
            <p className="text-gray-600 dark:text-gray-400">Certificates</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center text-center transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-3">
              <FaClock className="text-yellow-600 dark:text-yellow-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.totalHours}</h3>
            <p className="text-gray-600 dark:text-gray-400">Learning Hours</p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Courses Section */}
          <section className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold flex items-center gap-3 text-indigo-700 dark:text-indigo-400">
                <FaBook /> Your Courses
              </h3>
              <button
                onClick={() => navigate('/coursessection')}
                className="hidden sm:block px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white rounded-lg font-medium transition"
              >
                Explore Courses
              </button>
            </div>

            {courses.length > 0 ? (
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {courses.map(course => (
                  <div
                    key={course.id}
                    className="border dark:border-gray-700 p-4 rounded-lg hover:shadow-lg transition cursor-pointer bg-white dark:bg-gray-900"
                    onClick={() => navigate(`/course/${course.id}`)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 truncate">{course.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{course.description}</p>
                      </div>
                      <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
                        {course.category || 'General'}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2 w-full overflow-hidden dark:bg-gray-700">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">You are not enrolled in any courses yet.</p>
                <button
                  onClick={() => navigate('/explore-courses')}
                  className="sm:hidden px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white rounded-lg font-medium transition"
                >
                  Explore Courses
                </button>
              </div>
            )}
          </section>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Notifications */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-h-[500px] overflow-auto transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-red-600 dark:text-red-400">
                <FaBell /> Notifications
              </h3>
              {notifications.length > 0 ? (
                <ul className="space-y-4">
                  {notifications.map(note => (
                    <li
                      key={note.id}
                      className="border-l-4 border-red-500 dark:border-red-400 p-4 rounded-md bg-red-50 dark:bg-red-900/30 shadow-sm hover:bg-red-100 dark:hover:bg-red-800 cursor-default"
                    >
                      <p className="text-gray-700 dark:text-red-200">{note.message}</p>
                      <small className="text-gray-500 dark:text-red-400 mt-2 block">{new Date(note.date).toLocaleString()}</small>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500 dark:text-gray-400">You have no new notifications.</p>
                </div>
              )}
            </section>

            {/* Upcoming Events */}
            <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <FaCalendarAlt /> Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                      <FaCalendarAlt className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-100">{event.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{event.date} at {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Achievements Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mt-8 transition-colors duration-300">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-yellow-600 dark:text-yellow-400">
            <FaAward /> Your Achievements
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border flex flex-col items-center transition-colors ${
                  achievement.earned 
                    ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' 
                    : 'border-gray-200 dark:border-gray-700 opacity-60'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <h4 className="text-center font-medium text-gray-800 dark:text-gray-100">{achievement.title}</h4>
                <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                  {achievement.earned ? 'Earned' : 'In Progress'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8">
          <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-lg transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
              <FaChartLine className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-100">Progress Report</span>
          </button>
          
          <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-lg transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
              <FaUsers className="text-purple-600 dark:text-purple-400 text-xl" />
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-100">Study Groups</span>
          </button>
          
          <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-lg transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
              <FaTasks className="text-green-600 dark:text-green-400 text-xl" />
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-100">Assignments</span>
          </button>
          
          <button className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-lg transition-colors duration-300">
            <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-3">
              <FaCogs className="text-yellow-600 dark:text-yellow-400 text-xl" />
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-100">Settings</span>
          </button>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;