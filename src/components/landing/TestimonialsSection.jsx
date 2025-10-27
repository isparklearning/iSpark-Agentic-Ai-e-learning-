import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaArrowUp, FaLinkedin } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-purple-500/30 transition-colors duration-300">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/20">
            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <FaQuoteLeft className="text-2xl text-purple-400 mb-4" />
          <p className="text-gray-300 mb-4 italic">{testimonial.testimonial}</p>
          <div className="flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <div className="text-white font-semibold">{testimonial.name}</div>
          <div className="text-purple-400 mb-4">{testimonial.role}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-400">
              <FaArrowUp />
              <span className="font-semibold">₹{testimonial.salaryIncrease}L</span>
              <span className="text-gray-400 text-sm">Salary Increase</span>
            </div>
            <a
              href={testimonial.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer @ Google",
      rating: 5,
      testimonial: "The AI-powered learning path was exactly what I needed. It helped me land my dream job at Google!",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      beforeSalary: "4.2 LPA",
      afterSalary: "45 LPA",
      company: "Google"
    },
    {
      name: "Arun Kumar",
      role: "ML Engineer @ Microsoft",
      rating: 5,
      testimonial: "The personalized AI mentoring and mock interviews gave me the confidence I needed to succeed.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      beforeSalary: "3.6 LPA",
      afterSalary: "42 LPA",
      company: "Microsoft"
    }
  ];

  return (
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
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white/5 rounded-full text-gray-300 text-sm mb-6 border border-white/10"
          >
            <span className="mr-2 text-purple-400">✦</span>
            Success Stories
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">Hear from Our </span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Successful Graduates
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400"
          >
            Real stories from real people who transformed their careers with our AI-powered learning platform
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-400">
            <span className="text-purple-400 font-semibold">350+</span> success stories and counting
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 