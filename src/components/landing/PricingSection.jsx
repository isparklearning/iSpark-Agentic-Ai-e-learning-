import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaGraduationCap,
  FaRocket,
  FaChartLine,
  FaBrain,
  FaUserTie,
  FaLaptopCode,
  FaCode,
  FaStar,
  FaShieldAlt,
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useNavigate } from 'react-router-dom';


// Animated number counter
const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  React.useEffect(() => {
    let startTime;
    let animationFrame;

    const updateValue = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setDisplayValue(Math.floor(value * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return displayValue;
};

// Feature Item
const FeatureItem = ({ feature, index }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-4 group/item"
    >
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 ${
          isDark ? 'border border-purple-500/20' : 'border border-purple-200'
        }`}
      >
        {feature.icon}
      </div>
      <div>
        <h4
          className={`text-lg font-semibold mb-1 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {feature.title}
        </h4>
        <p
          className={`text-sm mb-1 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {feature.description}
        </p>
        {feature.value > 0 && (
          <div className="flex items-center gap-2">
            <span
              className={`text-sm ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              Worth
            </span>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ₹<AnimatedNumber value={feature.value} />
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Main Pricing Section
const PricingSection = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();



  const features = [
    {
      icon: <FaBrain className="text-2xl text-purple-400" />,
      title: 'AI Learning Path',
      value: 25000,
      description: 'Personalized curriculum and adaptive learning',
    },
    {
      icon: <FaUserTie className="text-2xl text-purple-400" />,
      title: '1:1 Mentoring',
      value: 15000,
      description: 'Industry expert guidance and support',
    },
    {
      icon: <FaLaptopCode className="text-2xl text-purple-400" />,
      title: 'Live Projects',
      value: 20000,
      description: 'Real-world project experience',
    },
    {
      icon: <FaCode className="text-2xl text-purple-400" />,
      title: '24/7 Support',
      value: 8000,
      description: 'Round-the-clock AI assistance',
    },
    {
      icon: <FaGraduationCap className="text-2xl text-purple-400" />,
      title: 'Certification',
      value: 10000,
      description: 'Industry-recognized credentials',
    },
    {
      icon: <FaRocket className="text-2xl text-purple-400" />,
      title: 'Placement',
      value: 0,
      description: '80% placement guarantee',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              isDark ? '#ffffff' : '#000000'
            } 1px, transparent 1px), linear-gradient(to bottom, ${
              isDark ? '#ffffff' : '#000000'
            } 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
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
            Simple Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-800 dark:text-gray-200"
          >
            Invest in Your{' '}
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-transparent bg-clip-text">
              Tech Future
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Get ₹78,000+ worth of value at a fraction of the cost
          </motion.p>
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Animated Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

            <div
              className={`relative ${
                isDark ? 'bg-[#0A0A0B]' : 'bg-white'
              } rounded-xl overflow-hidden`}
            >
              {/* Header */}
              <div
                className={`p-8 text-center border-b ${
                  isDark ? 'border-white/10' : 'border-gray-100'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-pink-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/30">
                  <FaShieldAlt className="text-indigo-400" />
                  Most Popular
                </div>
                <h3
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Complete AI Career Package
                </h3>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-6xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 text-transparent bg-clip-text">
                    ₹9,500
                  </span>
                  <div className="text-left">
                    <span className="text-indigo-400 text-xl">+ GST</span>
                    <p
                      className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      One-time payment
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} index={index} />
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center space-y-6">
                  <button
                  
                    className="w-full group px-8 py-4 bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 text-white rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <FaRocket className="text-xl" />
                    Start Your Journey Today
                    <FaChartLine className="text-xl group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                      <FaStar className="text-xl" />
                      80% Placement Assurance
                    </div>
                    <p
                      className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
