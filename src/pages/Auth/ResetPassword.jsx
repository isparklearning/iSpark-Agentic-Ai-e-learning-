// src/pages/auth/ResetPassword.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setModalMessage("❌ Passwords do not match.");
      setIsSuccess(false);
      setShowModal(true);
      return;
    }
    try {
      const res = await fetch("http://127.0.0.1:8001/api/accounts/reset-password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, new_password: newPassword }),
      });
      const data = await res.json();
      setModalMessage(data.message);
      setIsSuccess(data.success);
      setShowModal(true);
    } catch (err) {
      setModalMessage("❌ Something went wrong.");
      setIsSuccess(false);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (isSuccess) navigate("/login");
  };

  const MessageModal = () => (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className={`p-6 flex items-center justify-center ${isSuccess ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className={`p-4 rounded-full ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {isSuccess ? <FaCheckCircle className="text-2xl"/> : <FaExclamationCircle className="text-2xl"/>}
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className={`text-xl font-bold mb-2 ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
                {isSuccess ? 'Success!' : 'Failed'}
              </h3>
              <p className="text-gray-600">{modalMessage}</p>
            </div>
            <div className="px-6 pb-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={closeModal}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}
              >
                OK
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <Helmet><title>Reset Password</title></Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button type="submit" className="w-full py-2 bg-purple-500 text-white rounded-lg">Reset Password</button>
        </form>
      </div>
      <MessageModal />
    </>
  );
};

export default ResetPassword;
