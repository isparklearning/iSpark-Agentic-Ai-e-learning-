import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Added import
import { 
  FaCalendar, 
  FaClock, 
  FaUsers, 
  FaVideo, 
  FaDownload, 
  FaExclamationCircle, 
  FaCheckCircle,
  FaPlay,
  FaStar,
  FaQuoteLeft,
  FaUserTie,
  FaBook,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaCircle,
  FaPause
} from "react-icons/fa";

const ZoomLive = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('live');
  
  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // State for scroll animations
  const [visibleElements, setVisibleElements] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // State for number animations
  const [animatedNumbers, setAnimatedNumbers] = useState({
    hours: 0,
    instructors: 0,
    students: 0,
    satisfaction: 0
  });

  // State for meeting creation
  const [isCreatingMeeting, setIsCreatingMeeting] = useState(false);
  
  // State for video playing status per class
  const [videoStates, setVideoStates] = useState({});
  
  // Added: navigate
  const navigate = useNavigate();

  // Refs for scroll sections
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const tabsRef = useRef(null);
  const classesRef = useRef(null);
  const scheduleRef = useRef(null);
  const testimonialsRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  // Set up intersection observer and scroll listener
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
          
          // Trigger number animation when stats section is visible
          if (entry.target.id === 'stats' && !animatedNumbers.hours) {
            animateNumbers();
          }
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections
    const sections = [
      { ref: headerRef, id: 'header' },
      { ref: statsRef, id: 'stats' },
      { ref: tabsRef, id: 'tabs' },
      { ref: classesRef, id: 'classes' },
      { ref: scheduleRef, id: 'schedule' },
      { ref: testimonialsRef, id: 'testimonials' },
      { ref: instructorsRef, id: 'instructors' },
      { ref: faqRef, id: 'faq' },
      { ref: ctaRef, id: 'cta' }
    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Scroll listener for parallax effect
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Number animation function
  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setAnimatedNumbers({
        hours: Math.floor(progress * 120),
        instructors: Math.floor(progress * 24),
        students: Math.floor(progress * 5000),
        satisfaction: Math.floor(progress * 98)
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Calculate parallax effect
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
    transition: 'transform 0.1s ease-out'
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Updated: navigate to live class viewer
  const openZoomModal = async (cls) => {
    setIsCreatingMeeting(true);
    
    try {
      const response = await fetch('http://127.0.0.1:5000/api/meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: cls.title,
          teacher_name: cls.instructor
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create meeting');
      }

      const data = await response.json();
      // Navigate to the live class viewer page
      navigate('/live-class-viewer', { 
        state: { 
          classDetails: cls, 
          meetingDetails: data 
        } 
      });
    } catch (error) {
      console.error('Error creating meeting:', error);
      alert('Failed to create Zoom meeting. Please try again.');
    } finally {
      setIsCreatingMeeting(false);
    }
  };

  // Toggle video play/pause
  const toggleVideo = (classId) => {
    setVideoStates(prev => ({
      ...prev,
      [classId]: !prev[classId]
    }));
  };

  // Sample data for live classes
  const [liveClasses] = useState([
    {
      id: 1,
      title: "React Fundamentals",
      date: "2025-10-15",
      time: "14:00 - 16:00",
      instructor: "Dr. Sarah Johnson",
      participants: 45,
      description: "Introduction to React components, props, and state management.",
      status: "upcoming",
      zoomLink: "https://zoom.us/j/1234567890",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      id: 2,
      title: "Node.js Backend Development",
      date: "2025-10-17",
      time: "14:00 - 16:00",
      instructor: "Prof. Michael Chen",
      participants: 38,
      description: "Building RESTful APIs with Express.js and middleware.",
      status: "upcoming",
      zoomLink: "https://zoom.us/j/0987654321",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
    },
    {
      id: 5,
      title: "Advanced CSS Techniques",
      date: "2025-10-19",
      time: "14:00 - 16:00",
      instructor: "Dr. Priya Sharma",
      participants: 52,
      description: "Mastering flexbox, grid, and responsive design patterns.",
      status: "upcoming",
      zoomLink: "https://zoom.us/j/5555555555",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      id: 6,
      title: "JavaScript ES6+ Features",
      date: "2025-10-21",
      time: "14:00 - 16:00",
      instructor: "Dr. Sarah Johnson",
      participants: 41,
      description: "Modern JavaScript features including arrow functions and promises.",
      status: "upcoming",
      zoomLink: "https://zoom.us/j/6666666666",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
    }
  ]);

  // Sample data for archived classes
  const [archivedClasses] = useState([
    {
      id: 3,
      title: "HTML & CSS Basics Overview",
      date: "2025-10-20",
      time: "14:00 - 16:00",
      instructor: "Dr. Sarah Johnson",
      participants: 52,
      description: "Fundamentals of web markup and styling essentials.",
      status: "archived",
      recordingLink: "https://example.com/recording-1",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      id: 4,
      title: "JavaScript ES6+ Features",
      date: "2025-10-22",
      time: "14:00 - 16:00",
      instructor: "Dr. Priya Sharma",
      participants: 41,
      description: "Modern JavaScript features including arrow functions and destructuring.",
      status: "archived",
      recordingLink: "https://example.com/recording-2",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
    },
    {
      id: 7,
      title: "React Hooks Deep Dive",
      date: "2025-10-23",
      time: "14:00 - 16:00",
      instructor: "Prof. Michael Chen",
      participants: 48,
      description: "Understanding and implementing React hooks for state management.",
      status: "archived",
      recordingLink: "https://example.com/recording-3",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      id: 8,
      title: "Database Fundamentals",
      date: "2025-10-24",
      time: "14:00 - 16:00",
      instructor: "Dr. Priya Sharma",
      participants: 37,
      description: "Introduction to SQL databases and data modeling.",
      status: "archived",
      recordingLink: "https://example.com/recording-4",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
    }
  ]);

  // New data for additional sections
  const courseSchedule = [
    {
      month: "Month 1",
      title: "Web Development Fundamentals",
      topics: ["HTML & CSS Basics", "Responsive Design", "Introduction to JavaScript"]
    },
    {
      month: "Month 2",
      title: "Frontend Development",
      topics: ["DOM Manipulation", "ES6+ Features", "React Fundamentals"]
    },
    {
      month: "Month 3",
      title: "Advanced Frontend",
      topics: ["State Management", "React Hooks", "API Integration"]
    },
    {
      month: "Month 4",
      title: "Backend Development",
      topics: ["Node.js", "Express.js", "Database Fundamentals"]
    },
    {
      month: "Month 5",
      title: "Full Stack Integration",
      topics: ["Authentication", "RESTful APIs", "Deployment"]
    },
    {
      month: "Month 6",
      title: "Capstone Project",
      topics: ["Project Planning", "Implementation", "Presentation"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Web Developer",
      text: "This course completely transformed my career. The hands-on projects and real-world examples made learning practical and engaging.",
      rating: 5
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "UI/UX Designer",
      text: "The instructors are incredibly knowledgeable and supportive. I now feel confident building full-stack web applications from scratch.",
      rating: 5
    },
    {
      id: 3,
      name: "David Kim",
      role: "Software Engineer",
      text: "The curriculum is comprehensive and up-to-date. The live sessions allowed for direct interaction with instructors and peers.",
      rating: 4
    }
  ];

  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Lead Instructor",
      bio: "15+ years of experience in web development. PhD in Computer Science from MIT.",
      expertise: ["Frontend", "React", "UI/UX"]
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Backend Specialist",
      bio: "Senior software engineer at Google. Expert in Node.js and cloud architecture.",
      expertise: ["Node.js", "Database Design", "Cloud"]
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      title: "Full Stack Expert",
      bio: "Published author and tech conference speaker. Specializes in modern web frameworks.",
      expertise: ["Full Stack", "DevOps", "Architecture"]
    }
  ];

  const faqs = [
    {
      question: "Is prior programming experience required?",
      answer: "No, this course is designed for beginners. We start with the fundamentals and gradually progress to advanced topics."
    },
    {
      question: "How are the live sessions conducted?",
      answer: "Live sessions are conducted via Zoom with interactive features like screen sharing, polls, and breakout rooms for group work."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, you'll receive a verified certificate of completion after successfully finishing all course requirements and projects."
    },
    {
      question: "Are there any prerequisites for the course?",
      answer: "Basic computer literacy and familiarity with using the internet are the only prerequisites. No prior coding experience is needed."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "Yes, all course materials including videos, slides, and resources remain accessible to you for 12 months after completion."
    }
  ];

  // Video Preview Component
  const VideoPreview = ({ videoUrl, classId, isArchived }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    return (
      <div className="relative rounded-lg overflow-hidden mb-4">
        <video 
          ref={videoRef}
          className="w-full h-48 object-cover" 
          poster="/blackshade.jpg"
          onClick={togglePlay}
          autoPlay
          muted
          loop
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div 
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            className="w-16 h-16 rounded-full bg-black bg-opacity-50 flex items-center justify-center"
          >
            {isPlaying ? (
              <FaPause className="text-white text-2xl" />
            ) : (
              <FaPlay className="text-white text-2xl ml-1" />
            )}
          </motion.div>
        </motion.button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
          <p className="text-white text-sm">
            {isPlaying ? 'Playing preview...' : 'Click to play preview'}
          </p>
        </div>
      </div>
    );
  };

  // Testimonials Section with slide from right animation
  <motion.div 
    ref={testimonialsRef}
    id="testimonials"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-16 relative z-10"
  >
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-gray-800 mb-8 text-center"
    >
      Student <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Testimonials</span>
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div 
          key={testimonial.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i}
                className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <div className="mb-4">
            <FaQuoteLeft className="text-blue-500 text-xl mb-2" />
            <p className="text-gray-600 italic">{testimonial.text}</p>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <span className="text-blue-700 font-bold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 mb-10 relative overflow-hidden">
        {/* Parallax background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20" style={parallaxStyle}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full opacity-20" style={{...parallaxStyle, transform: `translateY(${scrollPosition * -0.1}px)`}}></div>
        </div>

        {/* Header with slide from left animation */}
        <motion.div 
          ref={headerRef} 
          id="header"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="text-center mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Live <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Web Development</span> Classes
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Interactive online classes with expert instructors and hands-on projects
            </motion.p>
          </div>
        </motion.div>

        {/* Stats with fade in animation and animated numbers */}
        <motion.div 
          ref={statsRef} 
          id="stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: animatedNumbers.hours, label: "Hours of Content", suffix: "+" },
              { value: animatedNumbers.instructors, label: "Expert Instructors" },
              { value: animatedNumbers.students, label: "Students Enrolled", suffix: "+" },
              { value: animatedNumbers.satisfaction, label: "Satisfaction Rate", suffix: "%" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-3xl font-bold text-blue-600 transition-all duration-500">
                  {stat.value}{stat.suffix || ''}
                </div>
                <div className="text-gray-600">{stat.label}</div>
                {/* Animated progress bar */}
                <div className="w-16 h-1 bg-blue-200 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(stat.value / (stat.label === "Hours of Content" ? 120 : stat.label === "Expert Instructors" ? 24 : stat.label === "Students Enrolled" ? 5000 : 98)) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Tabs with slide from bottom animation */}
        <motion.div 
          ref={tabsRef} 
          id="tabs"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 relative z-10"
        >
          <div className="flex border-b border-gray-200">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`py-3 px-6 font-medium text-lg relative transition-all duration-300 ${
                activeTab === 'live' 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('live')}
            >
              {activeTab === 'live' && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-lg"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
              Live Classes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`py-3 px-6 font-medium text-lg relative transition-all duration-300 ${
                activeTab === 'archived' 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('archived')}
            >
              {activeTab === 'archived' && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-lg"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
              Archived Classes
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Classes with horizontal scroll container */}
        <motion.div 
          ref={classesRef} 
          id="classes"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative z-12"
        >
          {activeTab === 'live' && (
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-800 mb-6"
              >
                Upcoming Live Classes
              </motion.h2>
              <div className="flex overflow-x-auto space-x-14 pb-4 snap-x snap-mandatory">
                {liveClasses.map((cls, index) => {
                  // Check if class is currently happening
                  const now = new Date();
                  const classDate = new Date(`${cls.date} ${cls.time.split(' - ')[0]}`);
                  const classEnd = new Date(`${cls.date} ${cls.time.split(' - ')[1]}`);
                  const isLive = now >= classDate && now <= classEnd;
                  const isUpcoming = now < classDate;
                  
                  return (
                    <motion.div 
                      key={cls.id} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                        isLive ? 'ring-2 ring-red-500 animate-pulse' : ''
                      } snap-center`}
                    >
                      <div className="p-6">
                        {/* Video Preview */}
                        <VideoPreview videoUrl={cls.videoUrl} classId={cls.id} isArchived={false} />
                        
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <motion.h3 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3 }}
                              className="text-xl font-bold text-gray-800"
                            >
                              {cls.title}
                            </motion.h3>
                            <motion.p 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className="text-gray-600 mt-1"
                            >
                              {cls.description}
                            </motion.p>
                          </div>
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              isLive 
                                ? 'bg-red-100 text-red-800 animate-pulse' 
                                : isUpcoming 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {isLive ? 'LIVE NOW' : isUpcoming ? 'Upcoming' : 'Ended'}
                          </motion.div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="flex items-center text-gray-600"
                          >
                            <FaCalendar className="mr-2 text-blue-500" />
                            <span>{cls.date}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className="flex items-center text-gray-600"
                          >
                            <FaClock className="mr-2 text-blue-500" />
                            <span>{cls.time}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            className="flex items-center text-gray-600"
                          >
                            <FaUserTie className="mr-2 text-blue-500" />
                            <span>{cls.instructor}</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            className="flex items-center text-gray-600"
                          >
                            <FaUsers className="mr-2 text-blue-500" />
                            <span>{cls.participants} enrolled</span>
                          </motion.div>
                        </div>
                        
                        {/* Live indicator animation */}
                        {isLive && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-4 flex items-center justify-center"
                          >
                            <motion.div 
                              className="flex items-center bg-red-50 px-4 py-2 rounded-full"
                              animate={{ 
                                scale: [1, 1.05, 1],
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <FaCircle className="text-red-500 mr-2" />
                              <span className="text-red-600 font-medium">Class is in session</span>
                            </motion.div>
                          </motion.div>
                        )}
                        
                        <div className="flex justify-between items-center">
                        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  disabled={isCreatingMeeting}
  className={`flex items-center font-medium transition-all duration-300 ${
    isLive 
      ? 'bg-red-600 text-white hover:bg-red-700' 
      : 'bg-blue-600 text-white hover:bg-blue-700'
  } px-4 py-3 text-md rounded-lg shadow-md hover:shadow-lg`}
  onClick={() => navigate('/Liveclassviewer')}
>
  {isCreatingMeeting ? (
    <>
      <span className="animate-spin mr-2">⏳</span>
      Creating...
    </>
  ) : (
    <>
      <FaPlay className="mr-2 text-sm" />
      {isLive ? 'Join Live Now' : 'Join Live Class'}
    </>
  )}
</motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'archived' && (
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-800 mb-6"
              >
                Archived Classes
              </motion.h2>
              <div className="flex overflow-x-auto space-x-14 pb-4 snap-x snap-mandatory">
                {archivedClasses.map((cls, index) => (
                  <motion.div 
                    key={cls.id} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl snap-center"
                  >
                    <div className="p-6">
                      {/* Video Preview */}
                      <VideoPreview videoUrl={cls.videoUrl} classId={cls.id} isArchived={true} />
                      
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <motion.h3 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="text-xl font-bold text-gray-800"
                          >
                            {cls.title}
                          </motion.h3>
                          <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-gray-600 mt-1"
                          >
                            {cls.description}
                          </motion.p>
                        </div>
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3 }}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          Archived
                        </motion.div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex items-center text-gray-600"
                        >
                          <FaCalendar className="mr-2 text-blue-500" />
                          <span>{cls.date}</span>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="flex items-center text-gray-600"
                        >
                          <FaClock className="mr-2 text-blue-500" />
                          <span>{cls.time}</span>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          className="flex items-center text-gray-600"
                        >
                          <FaUserTie className="mr-2 text-blue-500" />
                          <span>{cls.instructor}</span>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          className="flex items-center text-gray-600"
                        >
                          <FaUsers className="mr-2 text-blue-500" />
                          <span>{cls.participants} enrolled</span>
                        </motion.div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                        >
                          <FaVideo className="mr-1" />
                          Watch Recording
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex text-sm items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        >
                          <FaDownload className="mr-1"/>
                          Download Materials
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Course Schedule Section with card-based design */}
        <motion.div 
          ref={scheduleRef} 
          id="schedule"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Course</span> Schedule
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseSchedule.map((month, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Simplified header */}
                <div className="bg-pink-50 p-4">
                  <div className="flex items-center justify-between">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="text-lg font-semibold text-blue-700"
                    >
                      {month.month}
                    </motion.h3>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="bg-blue-500 bg-opacity-20 text-blue-900 px-2 py-1 rounded text-xs"
                    >
                      Week {index * 4 + 1}-{index * 4 + 4}
                    </motion.span>
                  </div>
                </div>
                
                {/* Simplified content */}
                <div className="p-4">
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="font-medium text-gray-800 mb-3"
                  >
                    {month.title}
                  </motion.h4>
                  
                  {/* Simplified topics list */}
                  <div className="space-y-2">
                    {month.topics.map((topic, topicIndex) => (
                      <motion.div 
                        key={topicIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + topicIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center mr-2 flex-shrink-0">
                          <FaBook className="text-white text-xs" />
                        </div>
                        <span>{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Simplified progress indicator */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="mt-4"
                  >
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{Math.min((index + 1) / courseSchedule.length * 100, 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <motion.div 
                        className="bg-blue-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((index + 1) / courseSchedule.length * 100, 100)}%` }}
                        transition={{ duration: 1, delay: 0.6 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Instructors Section with slide from left animation */}
        <motion.div 
          ref={instructorsRef} 
          id="instructors"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Meet Our <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Instructors</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div 
                key={instructor.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-bold text-xl">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{instructor.name}</h3>
                      <p className="text-blue-600">{instructor.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section with slide from right animation */}
        <motion.div 
          ref={faqRef} 
          id="faq"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Frequently <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Asked Questions</span>
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md mb-4 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <motion.button
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-800"
                  onClick={() => toggleFaq(index)}
                >
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <FaQuestionCircle className="text-blue-500 mr-3" />
                    {faq.question}
                  </motion.span>
                  <motion.div 
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </motion.div>
                </motion.button>
                {openFaqIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-100"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section with slide from bottom animation */}
        <motion.div 
          ref={ctaRef} 
          id="cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center text-gray-800 mb-10 relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Transform{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Your Career?
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-6 max-w-2xl mx-auto"
          >
            Join thousands of students who have transformed their careers with our comprehensive program.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "blue" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-800 text-blue-50 font-bold rounded-lg shadow-lg"
            >
              Enroll Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-purple-600 font-bold rounded-lg"
            >
              Schedule a Call
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ZoomLive;