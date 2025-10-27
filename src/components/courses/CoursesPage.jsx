import React from 'react';
import CourseCategories from './CourseCategories.jsx';
import CourseLevels from './CourseLevels.jsx';
import { motion } from 'framer-motion';

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      {/* Course Categories Section */}
      <section className="relative py-24 bg-[#0A0A0B] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.15]" 
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }}>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0A0A0B] to-transparent"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-gray-300 text-sm mb-6 border border-white/10"
              >
                <span className="text-purple-400">✦</span>
                Course Categories
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Explore Our </span>
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Course Categories
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Choose from our diverse range of technology courses
                </p>
              </motion.div>
            </div>
            
            <div className="relative z-10">
              <CourseCategories hideHeader={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels Section */}
      <section className="relative py-24 bg-[#0A0A0B] overflow-hidden">
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-gray-300 text-sm mb-6 border border-white/10"
              >
                <span className="text-purple-400">✦</span>
                Education Levels
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Choose Your </span>
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Education Level
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Select the program that matches your educational goals
                </p>
              </motion.div>
            </div>
            <CourseLevels />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage; 