import React, { useState } from 'react';
import { FaStar, FaUsers, FaClock, FaCertificate, FaSearch, FaFilter } from 'react-icons/fa';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data - replace with actual data from your backend
  const courses = [
    {
      id: 1,
      title: "Full Stack AI Developer",
      instructor: "Dr. Alex Kumar",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.9,
      students: 1245,
      duration: "12 weeks",
      price: "$299",
      category: "development",
      featured: true
    },
    {
      id: 2,
      title: "Data Science & AI",
      instructor: "Prof. Sarah Chen",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      students: 987,
      duration: "10 weeks",
      price: "$249",
      category: "data-science",
      featured: false
    },
    {
      id: 3,
      title: "AI-Powered App Development",
      instructor: "Michael Rodriguez",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      students: 756,
      duration: "8 weeks",
      price: "$199",
      category: "development",
      featured: false
    },
    {
      id: 4,
      title: "AI Product Manager",
      instructor: "Jennifer Lee",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.9,
      students: 543,
      duration: "6 weeks",
      price: "$179",
      category: "business",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'business', name: 'Business' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">AI Courses</h1>
        <p className="text-white/70">Explore our cutting-edge AI courses and start your journey</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-white/50" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-lg border ${
                selectedCategory === category.id
                  ? 'bg-[#3b82f6] text-white border-transparent'
                  : 'bg-[#0f172a] text-white/70 border-white/10 hover:border-[#3b82f6]/50'
              } whitespace-nowrap transition-all duration-300`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-[#0f172a] rounded-xl border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#3b82f6]/10 overflow-hidden">
            <div className="relative">
              <div className="overflow-hidden h-48">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {course.featured && (
                <div className="absolute top-4 left-4 bg-[#fbbf24] text-[#0f172a] px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                {course.title}
              </h3>
              <p className="text-white/70 mb-4">
                Instructor: {course.instructor}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#fbbf24]" />
                  <span className="text-white">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <FaUsers className="text-[#3b82f6]" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <FaClock className="text-[#8b5cf6]" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <FaCertificate className="text-[#fbbf24]" />
                  <span className="text-white/70">Certificate Included</span>
                </div>
                <div className="text-[#3b82f6] font-bold text-xl">
                  {course.price}
                </div>
              </div>
              
              <button className="w-full mt-4 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg transition-all duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/70 text-lg">No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Courses; 