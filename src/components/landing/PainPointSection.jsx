import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaCheckCircle, FaGraduationCap, FaChartLine,FaRocket, FaRobot, FaUserTie, FaBrain, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx';
import CoursesSection from '../courses/Courses.jsx';
const PainPointSection = () => {
  const { currentTheme, isDark } = useTheme();

  const problems = [
    {
      id: 1,
      icon: <FaExclamationTriangle className="text-red-500 text-4xl" />,
      title: "83% Engineering Graduates Unemployed",
      description: "Due to lack of practical skills and industry-ready knowledge"
    },
    {
      id: 2,
      icon: <FaGraduationCap className="text-red-500 text-4xl" />,
      title: "College Degrees Aren't Enough",
      description: "Traditional education fails to bridge the gap between academics and industry requirements"
    },
    {
      id: 3,
      icon: <FaChartLine className="text-red-500 text-4xl" />,
      title: "Outdated Learning Methods",
      description: "No personalized training, outdated syllabi, and lack of placement support"
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: <FaBrain className="text-purple-500 text-4xl" />,
      title: "AI-Powered Learning Path",
      description: "Personalized roadmap based on your skills and goals"
    },
    {
      id: 2,
      icon: <FaUserTie className="text-purple-500 text-4xl" />,
      title: "Industry Expert Interviews",
      description: "Mock interviews with real industry professionals"
    },
    {
      id: 3,
      icon: <FaLightbulb className="text-purple-500 text-4xl" />,
      title: "80% Placement Assurance",
      description: "Guaranteed job placement with our comprehensive program"
    }
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-violet-900/20'
          : 'bg-gradient-to-br from-gray-50 via-purple-100/30 to-violet-100/30'
      }`} />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-2 rounded-full text-sm mb-6 border ${
              isDark 
                ? 'bg-white/5 border-white/10 text-gray-300'
                : 'bg-purple-50 border-purple-100 text-purple-600'
            }`}
          >
            <span className="mr-2 text-purple-500">✦</span>
            The Truth You Need to Hear
          </motion.div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${currentTheme.text.primary}`}>
            Transform Your Career with
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 text-transparent bg-clip-text ml-2">
              AI Learning
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't let your engineering degree become just another piece of paper. 
            Transform your career with our AI-powered learning platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Problems Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-8 flex items-center gap-3">
              <FaExclamationTriangle />
              <span>Current Challenges</span>
            </h3>
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`rounded-xl p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border border-red-500/20 shadow-lg shadow-red-500/5'
                    : 'bg-white border border-red-200 shadow-xl shadow-red-100'
                } hover:shadow-2xl ${
                  isDark
                    ? 'hover:shadow-red-500/10'
                    : 'hover:shadow-red-200'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                      {problem.icon}
                    </div>
                    <div>
                      <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {problem.title}
                      </h4>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-purple-500 mb-8 flex items-center gap-3">
              <FaRobot />
              <span>Our AI Solutions</span>
            </h3>
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`rounded-xl p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-white/5 border border-purple-500/20 shadow-lg shadow-purple-500/5'
                    : 'bg-white border border-purple-200 shadow-xl shadow-purple-100'
                } hover:shadow-2xl ${
                  isDark
                    ? 'hover:shadow-purple-500/10'
                    : 'hover:shadow-purple-200'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {solution.title}
                      </h4>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center items-center w-full">
  <a
  href="/coursessection"
  target="_blank"
  rel="noopener noreferrer"
  className="w-auto group px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
>
  <FaBrain className="text-xl" />
  Transform Your Career Today
  <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform"/>
</a>
</div>
</motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className={`absolute bottom-0 left-0 w-full h-32 
          ${isDark 
            ? 'bg-gradient-to-t from-[#0A0A0B] to-transparent' 
            : 'bg-gradient-to-t from-white to-transparent'
          }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </section>
  );
};

export default PainPointSection;  