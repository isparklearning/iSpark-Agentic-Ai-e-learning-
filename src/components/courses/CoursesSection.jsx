import { color } from 'framer-motion';
import React from 'react';
import { FaStar, FaUsers, FaClock, FaCertificate, FaPlay } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: "Full Stack AI Developer",
    instructor: "Dr. Alex Kumar",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    students: 1245,
    duration: "12 weeks",
    price: "₹5000",
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
    price: "₹8000",
    featured: false
  },
  {
    id: 3,
    title: "AI App Development",
    instructor: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    students: 756,
    duration: "8 weeks",
    price: "₹8999",
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
    price: "₹5999",
    featured: false
  }
];

const CourseCard = ({ course }) => {
 
  return (
    <div className="bg-[#ffffff] rounded-xl border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#3b82f6]/10 overflow-hidden" >
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
        <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#3b82f6] transition-colors">
          {course.title}
        </h3>
        <p className="text-black/70 mb-4">
          Instructor: {course.instructor}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <FaStar className="text-[#fbbf24]" />
            <span className="text-black">{course.rating}</span>
          </div>
          <div className="flex items-center gap-2 text-black/70">
            <FaUsers className="text-[#3b82f6]" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-black/70">
            <FaClock className="text-[#8b5cf6]" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <FaCertificate className="text-[#fbbf24]" />
            <span className="text-black/70">Certificate Included</span>
          </div>
          <div className="text-[#3b82f6] font-bold text-xl">
            {course.price}
          </div>
        </div>
        
<button
  className="w-full mt-4 py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 border-2 border-transparent bg-transparent 
  bg-clip-padding 
  [background:linear-gradient(purple)_padding-box,linear-gradient(to_right,#8b5cf6,#22c55e,#3b82f6)_border-box]
  transform transition-transform duration-300 hover:scale-105"
>
  <FaPlay className="text-lg" />
  <span>Enroll Now</span>
</button>

      </div>
    </div>
       
  );
};

const CoursesSection = () => {
  
  return (
   
    <section className="py-20 px-4 lg:px-20 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Trending <span className="text-[darkorange]">AI Courses</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Master the skills that will define the future of technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-[#ffffff] p-4 rounded-lg border border-white/10">
            <FaCertificate className="text-3xl text-[#fbbf24]" />
            <div className="text-left">
              <h3 className="text-black font-semibold">Certificates awarded on completion</h3>
              <p className="text-black/70">Mock Interviews after every module</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default CoursesSection; 