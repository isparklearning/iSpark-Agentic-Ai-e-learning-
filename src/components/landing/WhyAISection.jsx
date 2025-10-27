import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, FaLaptopCode, FaDatabase, FaAward, FaUserTie, 
  FaRobot, FaGraduationCap, FaChartLine, FaCertificate 
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx';

const FeatureCard = ({ feature, index }) => {
  const { isDark } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group transform transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`relative rounded-xl overflow-hidden ${
        isDark
          ? 'bg-white/5 border border-violet-500/20 shadow-lg shadow-pink-500/5'
          : 'bg-white border border-violet-200 shadow-xl shadow-pink-100'
      } hover:shadow-2xl ${
        isDark
          ? 'hover:shadow-pink-500/10'
          : 'hover:shadow-pink-200'
      }`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={feature.image} 
            alt={feature.title}
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gray-900/80' : 'bg-white/90'}`} />
        </div>

        {/* Content */}
        <div className="relative p-6">
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
              isDark ? 'bg-violet-500/20' : 'bg-violet-100'
            }`}>
              {feature.icon}
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm rounded-full ${
                      isDark 
                        ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' 
                        : 'bg-pink-50 text-pink-600 border border-pink-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WhyAISection = () => {
  const { isDark } = useTheme();

  const features = [
    {
      id: 1,
      icon: <FaBrain className={`text-3xl ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      title: "AI-Powered Personalized Learning",
      description: "Our AI adapts to your learning style, creating custom roadmaps that evolve with your progress.",
      techStack: ["Neural Networks", "Machine Learning", "Adaptive AI"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      icon: <FaRobot className={`text-3xl ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      title: "24/7 AI Career Mentor",
      description: "Get instant guidance and support from your personal AI mentor anytime, anywhere.",
      techStack: ["NLP", "ChatGPT-4", "Expert Systems"],
      image: "https://images.unsplash.com/photo-1531746790731-6bf607ccff6f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      icon: <FaLaptopCode className={`text-3xl ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      title: "Interactive Live Coding",
      description: "Practice with real-time feedback and pair programming with AI assistance.",
      techStack: ["VS Code", "GitHub Copilot", "Real-time Collaboration"],
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      icon: <FaChartLine className={`text-3xl ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      title: "Progress Analytics",
      description: "Track your skill development with detailed analytics and performance insights.",
      techStack: ["Data Analytics", "Skill Mapping", "Progress Tracking"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      icon: <FaCertificate className={`text-3xl ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      title: "Industry Certifications",
      description: "Earn recognized credentials validated by top tech companies and institutions.",
      techStack: ["AWS", "Google Cloud", "Microsoft Azure"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      icon: <FaUserTie className={`text-3xl ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />,
      title: "Guaranteed Placement",
      description: "80% placement assurance with our network of 500+ hiring partners.",
      techStack: ["Interview Prep", "Resume Building", "Job Matching"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="relative min-h-screen py-10 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-violet-900/20 to-pink-900/20'
          : 'bg-gradient-to-br from-gray-50 via-violet-100/30 to-pink-100/30'
      }`} />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-2 rounded-full text-sm mb-6 border ${
              isDark 
                ? 'bg-white/5 border-white/10 text-gray-300'
                : 'bg-violet-50 border-violet-100 text-violet-600'
            }`}
          >
            <span className="mr-2 text-pink-500">✦</span>
            Why Choose Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Experience the <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 text-transparent bg-clip-text">
              Future of{' '}Tech Learning
            </span>
            
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Our AI-powered platform combines cutting-edge technology with expert guidance 
            to fast-track your tech career
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center"
        >
          <a
            href="/coursessection"
            target="_blank"
            rel="noopener noreferrer"
            className={`group transform transition-all duration-300 hover:-translate-y-1 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-3 hover:shadow-2xl ${
              isDark
                ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white shadow-lg shadow-pink-900/20"
                : "bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white shadow-xl shadow-pink-200"
            }`}
          >
            <FaGraduationCap className="text-xl text-white" />
            <span className="text-white">Start Learning Today</span>
            <FaChartLine className="text-xl text-white transition-transform group-hover:translate-x-2" />
          </a>

          <p className={`mt-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Join thousands of successful graduates who transformed their careers
          </p>
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

export default WhyAISection;
