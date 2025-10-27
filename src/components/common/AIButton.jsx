import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';

const AIButton = ({ onClick, className = '', variant = 'primary', children }) => {
  const { isDark } = useTheme();

  const variants = {
    primary: `
      bg-gradient-to-r from-purple-600 to-blue-500
      hover:from-purple-700 hover:to-blue-600
      text-white
      border border-purple-500/20
      hover:border-purple-500/40
    `,
    secondary: `
      ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}
      ${isDark ? 'text-white' : 'text-gray-800'}
      border border-gray-500/20
      hover:border-gray-500/40
    `
  };

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0.9 }}
      whileHover={{ 
        scale: 1.02,
        opacity: 1,
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group/button
        px-6 py-3
        rounded-xl
        font-medium
        transition-all duration-300
        flex items-center gap-2
        ${variants[variant]}
        ${className}
        backdrop-blur-[2px]
        hover:backdrop-blur-[4px]
        shadow-lg
        hover:shadow-xl hover:shadow-purple-500/10
        isolate
        overflow-hidden
      `}
    >
      {/* Background gradient animation */}
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 -z-10" 
      />
      
      {/* Content wrapper */}
      <div className="relative flex items-center gap-2">
        {children}
      </div>

      {/* Shine effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000 rounded-xl -z-10" 
      />
    </motion.button>
  );
};

export default AIButton; 