import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMicrophone, FaImage, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext.jsx';
import './AIInput.css';

const StyledWrapper = styled.div`
  /* Add your styles here */
`;

const AIInput = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const face = document.querySelector('.ai-face');
      if (!face) return;

      const rect = face.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Calculate angle and distance
      const angle = Math.atan2(y, x);
      const distance = Math.min(Math.hypot(x, y) / 5, 8);

      // Convert polar to cartesian coordinates with limited range
      const eyeX = Math.cos(angle) * distance;
      const eyeY = Math.sin(angle) * distance;

      setEyePosition({ x: eyeX, y: eyeY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message);
      setMessage('');
    }
  };

  return (
    <StyledWrapper>
      <div className="container-ai-input">
        {[...Array(15)].map((_, index) => (
          <div key={index} className="area" />
        ))}
        <label className="container-wrap">
          <input
            type="checkbox"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <motion.div
            className="card"
            animate={{
              scale: isOpen ? 1 : 0.8,
              opacity: isOpen ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="content-card">
              <div className="background-blur-card" />
              <div className="background-blur-balls">
                <div className="balls">
                  <span className="ball rosa" />
                  <span className="ball violet" />
                  <span className="ball green" />
                  <span className="ball cyan" />
                </div>
              </div>
              <div className="eyes-container">
                <div className="eye-group">
                  <div 
                    className="eye"
                    style={{
                      transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                    }}
                  >
                    <div className="pupil"></div>
                  </div>
                </div>
                <div className="eye-group">
                  <div 
                    className="eye"
                    style={{
                      transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                    }}
                  >
                    <div className="pupil"></div>
                  </div>
                </div>
              </div>
              <div className="eyes happy">
                <svg viewBox="0 0 100 50" width="100" height="50">
                  <path
                    d="M10,25 Q50,45 90,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="mouth"
                  />
                  <circle cx="30" cy="20" r="8" fill="currentColor" className="eye-left" />
                  <circle cx="70" cy="20" r="8" fill="currentColor" className="eye-right" />
                </svg>
              </div>
              <div className="container-ai-chat">
                <form onSubmit={handleSubmit} className="chat">
                  <div className="chat-bot">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Imagine Something...✦˚"
                      name="chat_bot"
                      id="chat_bot"
                      rows={4}
                    />
                  </div>
                  <div className="options">
                    <div className="btns-add">
                      <button type="button" aria-label="Upload image">
                        <svg viewBox="0 0 24 24" height={20} width={20}>
                          <path d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" />
                        </svg>
                      </button>
                      <button type="button" aria-label="Voice input">
                        <svg viewBox="0 0 24 24" width={20} height={20}>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0-8h6m-3-3v6" />
                        </svg>
                      </button>
                      <button type="button">
                        <svg viewBox="0 0 24 24" width={20} height={20}>
                          <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667" />
                        </svg>
                      </button>
                    </div>
                    <button type="submit" className="btn-submit" aria-label="Send message">
                      <i>
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </label>
      </div>
    </StyledWrapper>
  );
};

export default AIInput; 