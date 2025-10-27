import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'dark';
  });

  const isDark = theme === 'dark';

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', isDark);
    document.body.style.backgroundColor = isDark ? '#0A0A0B' : '#ffffff';
  }, [theme, isDark]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Theme configurations
  const themeConfig = {
    dark: {
      background: {
        primary: 'bg-[#0A0A0B]',
        secondary: 'bg-[#1A1A1B]',
        tertiary: 'bg-[#2A2A2B]',
        card: 'bg-[#1A1A1B]/60',
        overlay: 'bg-black/50',
        accent: 'bg-purple-500/5'
      },
      text: {
        primary: 'text-white',
        secondary: 'text-gray-300',
        muted: 'text-gray-400',
        accent: 'text-purple-400'
      },
      border: {
        primary: 'border-white/10',
        secondary: 'border-white/5',
        accent: 'border-purple-500/30'
      },
      button: {
        primary: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/20',
        secondary: 'bg-white/5 hover:bg-white/10',
        outline: 'border border-white/10 hover:border-purple-500/30'
      },
      gradient: {
        primary: 'from-purple-400 via-blue-400 to-purple-400',
        secondary: 'from-purple-500/5 via-transparent to-blue-500/5',
        card: 'from-purple-500/10 via-transparent to-blue-500/10'
      },
      shadow: {
        card: 'shadow-xl shadow-purple-500/5',
        button: 'shadow-lg shadow-purple-500/20'
      },
      glass: {
        primary: 'backdrop-blur-md bg-white/5',
        card: 'backdrop-blur-sm bg-[#1A1A1B]/60'
      }
    },
    light: {
      background: {
        primary: 'bg-white',
        secondary: 'bg-gray-50',
        tertiary: 'bg-gray-100',
        card: 'bg-white',
        overlay: 'bg-white/50',
        accent: 'bg-purple-500/5'
      },
      text: {
        primary: 'text-gray-900',
        secondary: 'text-gray-600',
        muted: 'text-gray-500',
        accent: 'text-purple-600'
      },
      border: {
        primary: 'border-gray-200',
        secondary: 'border-gray-100',
        accent: 'border-purple-500/30'
      },
      button: {
        primary: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/20',
        secondary: 'bg-gray-100 hover:bg-gray-200',
        outline: 'border border-gray-200 hover:border-purple-500/30'
      },
      gradient: {
        primary: 'from-purple-500 via-blue-500 to-purple-500',
        secondary: 'from-purple-500/5 via-transparent to-blue-500/5',
        card: 'from-purple-500/10 via-transparent to-blue-500/10'
      },
      shadow: {
        card: 'shadow-xl shadow-purple-500/5',
        button: 'shadow-lg shadow-purple-500/20'
      },
      glass: {
        primary: 'backdrop-blur-md bg-white/90',
        card: 'backdrop-blur-sm bg-white'
      }
    }
  };

  const currentTheme = themeConfig[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing theme classes
export const useThemeClass = (type, variant) => {
  const { currentTheme } = useTheme();
  return currentTheme[type][variant];
}; 