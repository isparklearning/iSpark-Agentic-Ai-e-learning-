import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSignInAlt, FaUserGraduate } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx';
import ThemeToggle from '../common/ThemeToggle.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo-dark.png';
import CoursesPage from '../courses/CoursesPage.jsx';

// Navigation Links
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'iSpark-VTU', href: '/ispark-vtu' },
  { name: 'Courses', href: '/coursessection' },
  { name: "Internship", href: "/internship/internpage" },
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'Humanoid AI Teacher Robots', href: '/products/humanoid-ai-teacher-robot' },
      { name: 'CoE Lab', href: '/products/coe-lab' },
    ],
  },
  { name: 'Success Stories', href: '/success-stories' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Navigate to page
  const handleNavigation = (href) => {
    navigate(href);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // ✅ Fixed active link
  const isActive = (href, dropdown = null) => {
    if (dropdown) {
      return dropdown.some(
        (sub) => location.pathname === sub.href || location.pathname.startsWith(sub.href + '/')
      );
    }

    if (href === '/coursessection') {
      return location.pathname.startsWith('/coursessection') || location.pathname.startsWith('/courses/');
    }

    if (href === '/products') {
      return location.pathname.startsWith('/products');
    }

    if (href === "/internship/internpage") {
      return location.pathname === href || 
             location.pathname.startsWith(href + '/') ||
             location.pathname === "/internship" ||
             location.pathname.startsWith("/internship/");
    }

    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  // Get link class
  const getLinkClass = (href, dropdown = null) =>
    `px-5 py-2 font-semibold rounded-full text-1xl transition-all duration-300 flex items-center justify-center relative ${
      isActive(href, dropdown)
        ? isDark
          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg scale-105'
          : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg scale-105'
        : isDark
        ? 'text-white'
        : 'text-gray-900'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-lg ${
        isDark ? 'bg-[#0A0A0B]/80 shadow-md' : 'bg-white/50 shadow-md'
      }`}
    >
      <div className="w-full">
        <div className={`flex items-center justify-between h-20 ${isScrolled ? 'shadow-xl backdrop-blur-xl' : ''}`}>
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer ml-3"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="Logo" className="h-10" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 text-1xl text-md relative">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group" onClick={(e) => e.stopPropagation()}>
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={getLinkClass(link.href, link.dropdown)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (link.dropdown) setOpenDropdown(openDropdown === link.name ? null : link.name);
                    else handleNavigation(link.href);
                  }}
                >
                  {link.name}
                </motion.button>

                {/* Desktop Dropdown - Enhanced Box Style */}
                {link.dropdown && openDropdown === link.name && (
                  <div
                    className={`absolute top-full left-0 mt-2 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out 
                      ${isDark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
                    style={{
                      minWidth: "250px",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.dropdown.map((sub) => (
                      <button
                        key={sub.name}
                        className={`block w-full text-left py-3 px-4 text-sm font-medium transition-all duration-300
                          ${isDark 
                            ? "text-gray-200 hover:bg-gray-700 hover:text-white" 
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          }
                          border-b border-gray-200 last:border-b-0`}
                        onClick={() => handleNavigation(sub.href)}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/login')}
              className={`px-4 py-2 font-semibold flex items-center gap-2 rounded-full transition ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              <FaSignInAlt className="text-violet-500" /> Sign In
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              onClick={() => navigate('/signup')}
              className="px-4 py-2 mr-2 rounded-full flex items-center gap-2 font-semibold shadow-lg transition bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 hover:from-blue-600 hover:to-violet-600 text-white"
            >
              <FaUserGraduate /> Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl`}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${isDark ? 'bg-[#0A0A0B]/90' : 'bg-white/70'} md:hidden shadow-lg backdrop-blur-lg w-full`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} onClick={(e) => e.stopPropagation()}>
                  <button
                    className={`flex justify-between items-center w-full ${getLinkClass(link.href, link.dropdown)}`}
                    onClick={() => {
                      if (link.dropdown) setOpenDropdown(openDropdown === link.name ? null : link.name);
                      else handleNavigation(link.href);
                    }}
                  >
                    {link.name}
                    {link.dropdown && <span>{openDropdown === link.name ? '-' : '+'}</span>}
                  </button>

                  {/* Mobile Dropdown - Enhanced Box Style */}
                  {link.dropdown && openDropdown === link.name && (
                    <div className={`ml-4 mt-2 rounded-lg overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border border-gray-200`}>
                      {link.dropdown.map((sub) => (
                        <button
                          key={sub.name}
                          className={`w-full text-left py-3 px-4 text-sm font-medium transition-all duration-300
                            ${isDark 
                              ? "text-gray-200 hover:bg-gray-700 hover:text-white" 
                              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            }
                            border-b border-gray-200 last:border-b-0`}
                          onClick={() => handleNavigation(sub.href)}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <hr className={`border-gray-200 ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />

              <motion.button
                onClick={() => navigate('/login')}
                className={`${isDark ? 'text-white' : 'text-gray-900'} px-4 py-3 flex gap-2 rounded-full border-2`}
              >
                <FaSignInAlt /> Sign In
              </motion.button>

              <motion.button
                onClick={() => navigate('/signup')}
                className="px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full flex gap-2"
              >
                <FaUserGraduate /> Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;