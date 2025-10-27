// src/pages/auth/Login.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx';
import logo from "../../assets/logo-dark.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const { isDark, currentTheme } = useTheme();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // ✅ Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("https://i-spark-agentic-ai-e-learning-bao2.vercel.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }), // backend expects only username & password
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const fullName = data.user_fullname || username; 
        setModalMessage(`✅ Welcome ${fullName}!`);
        setIsSuccess(true);
        setShowModal(true);

        // Store the user info
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        setModalMessage(`❌ ${data.message || 'Invalid credentials'}`);
        setIsSuccess(false);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Login error:", error);
      setModalMessage("❌ Something went wrong. Please try again.");
      setIsSuccess(false);
      setShowModal(true);
    }
  };

  // Close modal and navigate
  const closeModal = () => {
    setShowModal(false);
    
    if (isSuccess) {
      setTimeout(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        switch ((userData.role || "").toLowerCase()) {
          case "student":
            navigate("/student-dashboard");
            break;
          case "trainer":
            navigate("/trainer-dashboard");
            break;
          case "admin":
            navigate("/admin-dashboard");
            break;
          case "superadmin":
            navigate("/superadmin-dashboard");
            break;
          default:
            navigate("/dashboard");
        }
      }, 800);
    }
  };

  // Professional Modal Component
  const MessageModal = () => (
    <AnimatePresence>
      {showModal && (
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
            <div className={`p-6 flex items-center justify-center ${isSuccess ? 'bg-gradient-to-r from-green-50 to-emerald-50' : 'bg-gradient-to-r from-red-50 to-rose-50'}`}>
              <div className={`p-4 rounded-full ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {isSuccess ? (
                  <FaCheckCircle className="text-2xl" />
                ) : (
                  <FaExclamationCircle className="text-2xl" />
                )}
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 text-center">
              <h3 className={`text-xl font-bold mb-2 ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
                {isSuccess ? 'Login Successful!' : 'Login Failed'}
              </h3>
              <p className={`text-gray-600 ${isSuccess ? 'text-gray-800' : 'text-red-600'}`}>
                {modalMessage}
              </p>
            </div>
            
            {/* Footer */}
            <div className="px-6 pb-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={closeModal}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
                  isSuccess 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' 
                    : 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700'
                }`}
              >
                {isSuccess ? 'Continue to Dashboard' : 'Try Again'}
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
        <title>Login</title>
      </Helmet>
      <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-[#0A0A0B]' : 'bg-gray-50'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8"
        >
          {/* Logo */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 lg:top-10">
            <img src={logo} alt="Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
          </div>

          {/* Header */}
          <div className="text-center">
            <FaBrain className="text-5xl text-purple-500 mx-auto" />
            <h2 className="mt-6 text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              Welcome
            </h2>
            <p className={`mt-2 text-sm ${currentTheme.text.secondary}`}>
              Sign in to your account
            </p>
          </div>

          {/* Login Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">

              {/* Username */}
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className={`appearance-none rounded-lg relative block w-full px-4 py-3 border ${
                    isDark ? 'border-white/10 bg-white/5' : 'border-gray-300 bg-white'
                  } placeholder-gray-500 ${currentTheme.text.primary} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="Username"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className={`appearance-none rounded-lg relative block w-full px-4 py-3 border ${
                    isDark ? 'border-white/10 bg-white/5' : 'border-gray-300 bg-white'
                  } placeholder-gray-500 ${currentTheme.text.primary} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={`h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500 ${isDark ? 'bg-white/5' : 'bg-white'}`}
                />
                <label htmlFor="remember-me" className={`ml-2 block text-sm ${currentTheme.text.secondary}`}>
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-purple-500 hover:text-purple-400">
  Forgot your password?
</Link>

              </div>
            </div>

            {/* Submit */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
              >
                Sign in
              </motion.button>
            </div>
          </form>

          {/* Signup Link */}
          <div className="text-center">
            <p className={`text-sm ${currentTheme.text.secondary}`}>
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-purple-500 hover:text-purple-400">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Back Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 lg:top-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg font-medium shadow-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300"
          >
            ⬅ Back
          </motion.button>
        </div>
      </div>

     
      <MessageModal />
    </>
  );
};

export default Login;