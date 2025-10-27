import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUserGraduate, FaUserTie } from 'react-icons/fa';

const levels = [
  {
    id: 'diploma',
    title: 'Diploma Courses',
    description: 'Short-term courses focused on practical skills',
    icon: <FaGraduationCap className="text-4xl" />,
    color: 'from-yellow-500 to-yellow-600',
    duration: '6-12 months'
  },
  {
    id: 'ug',
    title: 'Undergraduate',
    description: 'Comprehensive bachelor degree programs',
    icon: <FaUserGraduate className="text-4xl" />,
    color: 'from-blue-500 to-blue-600',
    duration: '3-4 years'
  },
  {
    id: 'pg',
    title: 'Postgraduate',
    description: 'Advanced master degree programs',
    icon: <FaUserTie className="text-4xl" />,
    color: 'from-purple-500 to-purple-600',
    duration: '1-2 years'
  }
];

const CourseLevels = () => {
  return (
    <section className="py-20 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-blue-600">Education Level</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the program that matches your educational goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level) => (
            <Link 
              to={`/courses/level/${level.id}`}
              key={level.id}
              className="group"
            >
              <div className="bg-blue-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col items-center text-center border border-gray-800 hover:border-purple-500">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {level.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-500 transition-colors">
                  {level.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {level.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
                    Duration: {level.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseLevels; 