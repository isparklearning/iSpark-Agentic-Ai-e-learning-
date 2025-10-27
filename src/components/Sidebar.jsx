import React, { useState } from 'react';
import { 
  FaBook, 
  FaGraduationCap, 
  FaChartLine, 
  FaCertificate, 
  FaClock, 
  FaStar, 
  FaBookmark,
  FaCog,
  FaSignInAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import AIChat from './AIChat';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const courseCategories = [
    { name: 'Programming', icon: <FaBook className="text-[#3b82f6]" /> },
    { name: 'Web Development', icon: <FaGraduationCap className="text-[#fbbf24]" /> },
    { name: 'Data Science', icon: <FaChartLine className="text-[#8b5cf6]" /> },
    { name: 'UI/UX Design', icon: <FaStar className="text-[#3b82f6]" /> },
    { name: 'Mobile Development', icon: <FaBook className="text-[#fbbf24]" /> },
    { name: 'Cloud Computing', icon: <FaGraduationCap className="text-[#8b5cf6]" /> },
  ];

  const learningProgress = [
    { course: 'JavaScript Basics', progress: 75 },
    { course: 'React Fundamentals', progress: 45 },
    { course: 'Node.js Backend', progress: 30 },
    { course: 'Database Design', progress: 60 },
  ];

  return (
    <>
      <div className={`fixed left-0 top-0 h-screen bg-[#0f172a] text-white overflow-y-auto overflow-x-hidden scrollbar-hide border-r border-[#1e293b] transition-all duration-300 ${isOpen ? 'w-72 lg:w-64 xl:w-72' : 'w-0'} z-30`}>
        <div className={`${!isOpen && 'hidden'} min-w-[18rem] lg:min-w-[16rem] xl:min-w-[18rem]`}>
          {/* User Profile Section */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <img
                src="https://avatars.githubusercontent.com/u/16860528"
                alt="User"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#3b82f6]"
              />
              <div>
                <h3 className="font-semibold text-base lg:text-lg">Guest User</h3>
                <p className="text-xs lg:text-sm text-white/70">Please sign in to view your profile</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-4 grid grid-cols-2 gap-3 lg:gap-4">
            <div className="bg-[#0f172a]/50 p-2 lg:p-3 rounded-lg text-center">
              <FaClock className="mx-auto text-[#fbbf24] text-lg lg:text-xl" />
              <p className="text-xs lg:text-sm mt-1">Study Time</p>
              <p className="text-base lg:text-lg font-bold">0h</p>
            </div>
            <div className="bg-[#0f172a]/50 p-2 lg:p-3 rounded-lg text-center">
              <FaCertificate className="mx-auto text-[#3b82f6] text-lg lg:text-xl" />
              <p className="text-xs lg:text-sm mt-1">Certificates</p>
              <p className="text-base lg:text-lg font-bold">0</p>
            </div>
          </div>

          {/* Course Categories */}
          <div className="p-4">
            <h3 className="text-base lg:text-lg font-semibold mb-3">Course Categories</h3>
            <ul className="space-y-1 lg:space-y-2">
              {courseCategories.map((category, index) => (
                <li key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#0f172a]/50 cursor-pointer transition-all">
                  <span className="text-xl lg:text-2xl">{category.icon}</span>
                  <span className="text-sm lg:text-base">{category.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Progress */}
          <div className="p-4 border-t border-white/10">
            <h3 className="text-base lg:text-lg font-semibold mb-3">Learning Progress</h3>
            {!isLoggedIn ? (
              <div className="text-center py-4">
                <p className="text-sm text-white/70 mb-3">Sign in to track your learning progress</p>
                <button 
                  onClick={() => setIsLoggedIn(true)}
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {learningProgress.map((course, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs lg:text-sm mb-1">
                      <span className="text-white/70">{course.course}</span>
                      <span className="text-[#fbbf24]">{course.progress}%</span>
                    </div>
                    <div className="h-1.5 lg:h-2 bg-[#0f172a]/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#3b82f6] rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Saved Courses */}
          <div className="p-4 border-t border-white/10">
            <h3 className="text-base lg:text-lg font-semibold mb-3 flex items-center">
              <FaBookmark className="mr-2 text-[#fbbf24]" />
              Saved Courses
            </h3>
            {!isLoggedIn ? (
              <div className="text-center py-4">
                <p className="text-sm text-white/70">Sign in to save courses</p>
              </div>
            ) : (
              <div className="space-y-1 lg:space-y-2">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#0f172a]/50 cursor-pointer transition-all">
                  <FaBook className="text-[#3b82f6] text-lg lg:text-xl" />
                  <span className="text-xs lg:text-sm">Advanced React Patterns</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#0f172a]/50 cursor-pointer transition-all">
                  <FaBook className="text-[#8b5cf6] text-lg lg:text-xl" />
                  <span className="text-xs lg:text-sm">Machine Learning Basics</span>
                </div>
              </div>
            )}
          </div>

          {/* Settings & Login */}
          <div className="p-4 border-t border-white/10">
            <div className="space-y-1 lg:space-y-2">
              <button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#0f172a]/50 cursor-pointer transition-all w-full text-sm lg:text-base">
                <FaCog className="text-white/70 text-lg lg:text-xl" />
                <span>Settings</span>
              </button>
              <button 
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#0f172a]/50 cursor-pointer transition-all w-full text-[#3b82f6] text-sm lg:text-base"
              >
                <FaSignInAlt className="text-lg lg:text-xl" />
                <span>{isLoggedIn ? 'Sign Out' : 'Sign In'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Component */}
      <AIChat isLoggedIn={isLoggedIn} onSignIn={() => setIsLoggedIn(true)} />

      {/* Collapse Button with Tooltip */}
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed z-50 ${isOpen ? 'left-[17.5rem] lg:left-[15.5rem] xl:left-[17.5rem]' : 'left-2'} top-[50%] transform -translate-y-1/2 bg-[#1e293b] p-1.5 rounded-full border border-white/10 hover:bg-[#0f172a] transition-all shadow-lg group`}
        >
          {isOpen ? (
            <FaChevronLeft className="text-white/70 w-3 h-3 lg:w-4 lg:h-4" />
          ) : (
            <FaChevronRight className="text-white/70 w-3 h-3 lg:w-4 lg:h-4" />
          )}
          <div className={`absolute ${isOpen ? 'left-8' : 'left-8'} top-1/2 -translate-y-1/2 bg-[#1e293b] text-white text-xs lg:text-sm py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none`}>
            {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </div>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
