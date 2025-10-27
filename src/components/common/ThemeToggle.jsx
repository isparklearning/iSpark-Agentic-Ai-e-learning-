import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx'; // Make sure this path is correct
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme, currentTheme } = useTheme();

  if (!currentTheme) return null; // Safety check

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-lg ${currentTheme.button.secondary} transition-colors`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >  
      {isDark ? (
        <FaSun className={`text-xl ${currentTheme.text.primary}`} />
      ) : (
        <FaMoon className={`text-xl ${currentTheme.text.primary}`} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
