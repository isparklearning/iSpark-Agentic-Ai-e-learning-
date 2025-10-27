import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBrain,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserShield,
  FaUserCog,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dark.png";
import { Helmet } from "react-helmet";

const Signup = () => {
  const navigate = useNavigate();
  const { currentTheme, isDark, toggleTheme } = useTheme();

  const [selectedRole, setSelectedRole] = useState("student");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    mobile_number: "",
    date_of_birth: "",
    gender: "",
    college: "",
    department: "",
    aadhar_number: "",
    experience: "",
    role_title: "",
    password: "",
    confirm_password: "",
  });

  const [modal, setModal] = useState({ show: false, message: "", isSuccess: false });

  const roles = [
    { id: "student", name: "Student", icon: <FaUserGraduate /> },
    { id: "trainer", name: "Trainer", icon: <FaChalkboardTeacher /> },
    { id: "admin", name: "Admin", icon: <FaUserShield /> },
    { id: "superadmin", name: "Super Admin", icon: <FaUserCog /> },
  ];

  const experienceOptions = [
    { value: "0-2", label: "0-2 years" },
    { value: "2-5", label: "2-5 years" },
    { value: "5-10", label: "5-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const inputClass = `w-full rounded-lg px-4 py-3 border focus:outline-none focus:ring-2 transition ${
    isDark
      ? "bg-[#222] border-gray-700 text-gray-200 focus:ring-purple-400"
      : "bg-white border-gray-300 text-gray-800 focus:ring-purple-500"
  }`;

  const labelClass = `block text-sm font-medium mb-1 ${
    isDark ? "text-gray-200" : "text-gray-600"
  }`;

  const cardClass = `max-w-4xl w-full space-y-8 p-8 md:p-10 rounded-2xl border shadow-lg transition-all duration-300 ${
    isDark
      ? "bg-[#111] border-gray-700 text-gray-100"
      : "bg-white border-gray-200 text-gray-800"
  }`;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setModal({ show: true, message: "Passwords do not match!", isSuccess: false });
      return;
    }

    const payload = {
      role: selectedRole,
      first_name: formData.first_name,
      last_name: formData.last_name,
      username: formData.username,
      email: formData.email,
      mobile_number: formData.mobile_number,
      date_of_birth: formData.date_of_birth,
      gender: formData.gender,
      college: selectedRole === "student" ? formData.college : "",
      department: selectedRole === "student" ? formData.department : "",
      aadhar_number: selectedRole === "student" ? formData.aadhar_number : "",
      experience: selectedRole === "trainer" ? formData.experience : "",
      role_title: formData.role_title,
      password: formData.password,
    };

    try {
      const response = await fetch(
        "https://i-spark-agentic-ai-e-learning-bao2.vercel.app/api/accounts/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setModal({ show: true, message: data.message, isSuccess: true });
        setFormData({
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          mobile_number: "",
          date_of_birth: "",
          gender: "",
          college: "",
          department: "",
          aadhar_number: "",
          experience: "",
          role_title: "",
          password: "",
          confirm_password: "",
        });
      } else {
        setModal({ show: true, message: data.message || "Signup failed", isSuccess: false });
      }
    } catch (err) {
      console.error(err);
      setModal({ show: true, message: "Something went wrong!", isSuccess: false });
    }
  };

  const closeModal = () => {
    setModal({ ...modal, show: false });
    if (modal.isSuccess) {
      setTimeout(() => navigate("/login"), 800);
    }
  };

  const renderRoleSpecificFields = () => {
    switch (selectedRole) {
      case "student":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>College</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your College"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Enter your Department"
                  required
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className={labelClass}>Aadhar Number</label>
              <input
                type="text"
                name="aadhar_number"
                value={formData.aadhar_number}
                onChange={handleChange}
                placeholder="Enter your Aadhar Number"
                required
                className={inputClass}
              />
            </div>
          </>
        );
      case "trainer":
        return (
          <>
            <div>
              <label className={labelClass}>Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select Experience</option>
                {experienceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Role Title</label>
              <input
                type="text"
                name="role_title"
                value={formData.role_title}
                onChange={handleChange}
                placeholder="Enter your Role"
                required
                className={inputClass}
              />
            </div>
          </>
        );
      case "admin":
      case "superadmin":
        return (
          <div>
            <label className={labelClass}>Role Title</label>
            <input
              type="text"
              name="role_title"
              value={formData.role_title}
              onChange={handleChange}
              placeholder="Enter your Role"
              required
              className={inputClass}
            />
          </div>
        );
      default:
        return null;
    }
  };

  // Professional Modal Component
  const SignupModal = () => (
    <AnimatePresence>
      {modal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className={`p-6 flex items-center justify-center ${modal.isSuccess ? 'bg-gradient-to-r from-green-50 to-emerald-50' : 'bg-gradient-to-r from-red-50 to-rose-50'}`}>
              <div className={`p-4 rounded-full ${modal.isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {modal.isSuccess ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 text-center">
              <h3 className={`text-xl font-bold mb-2 ${modal.isSuccess ? 'text-green-700' : 'text-red-700'}`}>
                {modal.isSuccess ? 'Signup Successful!' : 'Signup Failed'}
              </h3>
              <p className={`text-gray-600 ${modal.isSuccess ? 'text-gray-800' : 'text-red-600'}`}>
                {modal.message}
              </p>
            </div>
            
            {/* Footer */}
            <div className="px-6 pb-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={closeModal}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
                  modal.isSuccess 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' 
                    : 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700'
                }`}
              >
                {modal.isSuccess ? 'Continue to Login' : 'Try Again'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>

      <div
        className={`min-h-screen flex flex-col relative ${
          isDark ? "bg-[#111]" : "bg-white"
        }`}
      >
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 lg:top-10">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Back Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 lg:top-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg font-medium shadow-lg text-white 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
             hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 
             transition-all duration-300"
          >
            ⬅ Back
          </motion.button>
        </div>

        <br></br><br></br>

        {/* Signup Card */}
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cardClass}
          >
            {/* Heading */}
            <div className="text-center">
              <FaBrain className="text-5xl text-purple-500 mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Your Account
              </h2>
              <p className={`mt-2 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Join our learning community
              </p>
            </div>

            {/* Role Selection */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {roles.map((role) => (
                <motion.button
                  key={role.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedRole(role.id)}
                  type="button"
                  className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 border ${
                    selectedRole === role.id
                      ? "border-purple-500 bg-purple-100 text-purple-600 shadow-md"
                      : isDark
                      ? "border-gray-700 bg-[#222] text-gray-200 hover:bg-[#333]"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-2xl mb-1">{role.icon}</span>
                  <span className="text-sm font-medium">{role.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Enter First Name" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Enter Last Name" required className={inputClass} />
                </div>
              </div>

              {/* Username & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Username</label>
                  <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Choose a username" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required className={inputClass} />
                </div>
              </div>

              {/* Mobile, DOB, Gender */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Mobile</label>
                  <input type="tel" name="mobile_number" value={formData.mobile_number} onChange={handleChange} placeholder="Enter Mobile Number" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Date of Birth</label>
                  <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required className={inputClass}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Role Specific Fields */}
              {renderRoleSpecificFields()}

              {/* Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create Password" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Confirm Password</label>
                  <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} placeholder="Confirm Password" required className={inputClass} />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-purple-700 transition-all">
                Create Account
              </motion.button>

              <p className={`text-center text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-purple-500 hover:text-purple-400">
                  Sign in
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Professional Modal */}
      <SignupModal />
    </>
  );
};

export default Signup;