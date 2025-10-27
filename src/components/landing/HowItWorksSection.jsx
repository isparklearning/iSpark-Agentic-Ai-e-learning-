import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserPlus, FaBrain, FaRoute, FaLaptopCode, 
  FaClipboardCheck, FaCertificate, FaCalendarCheck, FaRocket 
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx';

const steps = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Create your account and set your career goals',
    icon: <FaUserPlus />,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 2,
    title: 'Complete Free AI Career Assessment',
    description: 'Our AI analyzes your skills, interests, and career aspirations',
    icon: <FaBrain />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'AI Agent Creates Custom Learning Path',
    description: 'Get a personalized roadmap tailored to your goals',
    icon: <FaRoute />,
    color: 'from-indigo-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Attend Courses & Mock Interviews',
    description: 'Learn from experts and practice with real-world scenarios',
    icon: <FaLaptopCode />,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 5,
    title: 'Complete Assessments',
    description: 'Validate your skills with industry-standard tests',
    icon: <FaClipboardCheck />,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Get Certificates & Resume Generated',
    description: 'Earn recognized credentials and a professional resume',
    icon: <FaCertificate />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 7,
    title: 'AI Schedules Company Interviews',
    description: 'Our AI handles the logistics of job interviews',
    icon: <FaCalendarCheck />,
    color: 'from-indigo-500 to-pink-500'
  },
  {
    id: 8,
    title: '80% Placement Assurance',
    description: 'Our commitment to your success with guaranteed placement',
    icon: <FaRocket />,
    color: 'from-purple-500 to-indigo-500'
  }
];

const StepCard = ({ step, index }) => {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className={`relative h-full rounded-xl ${
        isDark
          ? 'bg-white/5 border border-purple-500/20 shadow-lg shadow-purple-500/5'
          : 'bg-white border border-purple-200 shadow-xl shadow-purple-100'
      } hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
        {/* Step Number */}
        <div className="absolute -top-4 -left-4 z-10">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-lg ${
            isDark ? 'shadow-purple-500/20' : 'shadow-purple-200'
          }`}>
            {step.id}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col items-start gap-4">
            {/* Icon with gradient background */}
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300 ${
              isDark ? 'shadow-lg shadow-purple-500/20' : 'shadow-lg shadow-purple-200'
            }`}>
              {step.icon}
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {step.description}
              </p>
            </div>
          </div>
        </div>

        {/* Connection Lines */}
        {step.id < steps.length && (
          <>
            {/* Horizontal Line */}
            <div className={`hidden lg:block absolute -right-8 top-1/2 w-8 h-0.5 ${
              isDark ? 'bg-purple-500/20' : 'bg-purple-200'
            }`} />
            
            {/* Vertical Line for every 4th item */}
            {step.id % 4 === 0 && step.id !== 8 && (
              <div className={`hidden lg:block absolute left-1/2 -bottom-12 h-12 w-0.5 ${
                isDark ? 'bg-purple-500/20' : 'bg-purple-200'
              }`}>
                <div className={`absolute bottom-0 -left-1 w-2 h-2 rounded-full ${
                  isDark ? 'bg-purple-500' : 'bg-purple-400'
                }`} />
              </div>
            )}
          </>
        )}

        {/* Gradient background hover effect */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen py-10 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-violet-900/20'
          : 'bg-gradient-to-br from-gray-50 via-purple-100/30 to-violet-100/30'
      }`} />

      <div className="relative container mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-2 rounded-full text-sm mb-6 border ${
              isDark 
                ? 'bg-white/5 border-white/10 text-gray-300'
                : 'bg-pink-50 border-pink-100 text-pink-600'
            }`}
          >
            <span className="mr-2 text-pink-500">✦</span>
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Your Interactive
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
           {' '}AI Journey to Success
            </span>{' '}
          
          </motion.h2>
        </div>

        {/* Journey Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-20 mb-16">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* CTA Section */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center"
>
  <a
    href="/zoomlive"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className={`group transform transition-all duration-300 hover:-translate-y-1 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-3 ${
        isDark
          ? "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-lg shadow-pink-900/20"
          : "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-xl shadow-pink-200"
      } hover:shadow-2xl`}
    >
      <FaRocket className="text-xl" />
      <span>Start Your Journey Now</span>
      <FaRocket className="text-xl group-hover:translate-x-2 transition-transform" />
    </button>
  </a>
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

export default HowItWorksSection;
