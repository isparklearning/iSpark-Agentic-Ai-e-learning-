import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import { FaRocket, FaGraduationCap, FaChartLine } from 'react-icons/fa';

const CallToAction = () => {
  const { currentTheme } = useTheme();

  return (
    <section className={`relative py-10 overflow-hidden ${currentTheme.background.primary}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${currentTheme.gradient.primary} opacity-30`}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className={`text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200  ${currentTheme.text.primary}`}
>
 Ready to Transform   <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
    Your{" "}  Career?
  </span>

</motion.h2>

            <p className={`text-xl ${currentTheme.text.secondary} max-w-2xl mx-auto`}>
              Join thousands of successful graduates who have accelerated their careers with our AI-powered learning platform.
            </p>
          </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
>
  <button className="group px-8 py-4 rounded-lg font-medium text-lg flex text-white items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 hover:scale-105">
    Start Free AI Career Assessment
  </button>

<a
  href="/coursessection"
  rel="noopener noreferrer"
  className={`group px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 ${currentTheme.button.secondary} transition-all duration-300 hover:scale-105`}
>
  <FaGraduationCap className="text-xl group-hover:translate-x-1 transition-transform" />
  Explore Courses
</a>

</motion.div>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
  <div className={`p-6 rounded-xl ${currentTheme.background.card} border ${currentTheme.border.primary}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <FaChartLine className="text-xl text-white" />
      </div>
      <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>
        80% Salary Jump
      </h3>
    </div>
    <p className={`${currentTheme.text.secondary}`}>
      Our graduates see an average salary increase of 80% within 6 months
    </p>
  </div>

  <div className={`p-6 rounded-xl ${currentTheme.background.card} border ${currentTheme.border.primary}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <FaGraduationCap className="text-xl text-white" />
      </div>
      <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>
        24/7 AI Mentor
      </h3>
    </div>
    <p className={`${currentTheme.text.secondary}`}>
      Get personalized guidance from your AI mentor anytime, anywhere
    </p>
  </div>

  <div className={`p-6 rounded-xl ${currentTheme.background.card} border ${currentTheme.border.primary}`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <FaRocket className="text-xl text-white" />
      </div>
      <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>
        Job Guarantee
      </h3>
    </div>
    <p className={`${currentTheme.text.secondary}`}>
      We guarantee job placement or your money back within 6 months
    </p>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default CallToAction; 