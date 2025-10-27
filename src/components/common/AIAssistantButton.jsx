import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FiSend, FiMic, FiSquare } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext.jsx"; // Adjust path if needed

const AIAssistantButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [thinkingText, setThinkingText] = useState("Thinking...");
  const chatBoxRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const { theme } = useTheme();

  // Auto-scroll chat
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const appendMessage = (sender, text, img = null) => {
    setMessages((prev) => [...prev, { sender, text, img }]);
  };

  const formatMessage = (text) =>
    text.split("\n").map((line, i) => (
      <span key={i}>
        {line.replace(/^\*\s?/, "")}
        <br />
      </span>
    ));

  const sendMessage = async (customInput = null) => {
    const message = (customInput || input).trim();
    if (!message) return;

    appendMessage("user", message);
    if (!customInput) setInput("");

    // Update thinking text based on keywords
    const lower = message.toLowerCase();
    if (lower.includes("course")) setThinkingText("Looking into our course details...");
    else if (lower.includes("ai")) setThinkingText("Checking our AI programs...");
    else if (lower.includes("cyber")) setThinkingText("Gathering info on Cybersecurity course...");
    else if (lower.includes("stem")) setThinkingText("Exploring STEM-related programs...");
    else {
      const fallback = ["Thinking...", "Analyzing your question...", "Preparing the best answer..."];
      setThinkingText(fallback[Math.floor(Math.random() * fallback.length)]);
    }

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_message: message }),
      });
      const data = await res.json();
      setLoading(false);

      if (data.response) {
        appendMessage("bot", data.response);
        if (data.audio_base64) {
          const audio = new Audio("data:audio/mp3;base64," + data.audio_base64);
          audio.play();
        }
      } else {
        appendMessage("bot", "⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      appendMessage("bot", "⚠️ I am a chatbot. Ask me a Question?");
    }
  };

  // Mic recording
  const toggleRecording = async () => {
    if (isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        const audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const formData = new FormData();
          formData.append("file", audioBlob, "voice.wav");

          try {
            const res = await fetch("http://127.0.0.1:8000/chat", {
              method: "POST",
              body: formData,
            });
            const data = await res.json();
            if (data.transcript) sendMessage(data.transcript);
            else appendMessage("bot", "⚠️ Could not understand audio.");
          } catch {
            appendMessage("bot", "⚠️ STT failed. Try again.");
          }
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch {
        alert("Microphone access denied!");
      }
    }
  };

  return (
    <>
      {!isOpen && (
        <ButtonWrapper>
          <RoundImageWrapper onClick={() => setIsOpen(true)}>
            <RoundImage src="/Chatbot_image1.jpg" alt="Assistant" />
          </RoundImageWrapper>
        </ButtonWrapper>
      )}

      {isOpen && (
        <ChatContainer theme={theme}>
          <Header>
            <h4>Your AI Assistant</h4>
            <CancelButton onClick={() => setIsOpen(false)}>✖</CancelButton>
          </Header>

          <ChatBox theme={theme} ref={chatBoxRef}>
            {messages.map((msg, idx) => (
              <Message key={idx} sender={msg.sender}>
                <Text sender={msg.sender} theme={theme}>
                  {formatMessage(msg.text)}
                </Text>
                {msg.img && <Image src={msg.img} alt="Chatbot" />}
              </Message>
            ))}

            {loading && (
              <Message sender="bot">
                <TypingContainer>
                  <TypingAvatar src="/Chatbot_image1.jpg" alt="Chatbot" />
                  <TypingDots>
                    <span></span>
                    <span></span>
                    <span></span>
                  </TypingDots>
                  <span
                    style={{
                      marginLeft: "10px",
                      fontSize: "14px",
                      color: theme === "dark" ? "#ccc" : "#555",
                    }}
                  >
                    {thinkingText}
                  </span>
                </TypingContainer>
              </Message>
            )}
          </ChatBox>

          <InputBox theme={theme}>
            <Input
              theme={theme}
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <SendButton onClick={() => sendMessage()}>
              <FiSend />
            </SendButton>
            <MicButton onClick={toggleRecording} isRecording={isRecording}>
              {isRecording ? <FiSquare size={20} /> : <FiMic size={20} />}
            </MicButton>
          </InputBox>
        </ChatContainer>
      )}
    </>
  );
};

// ================= Styled Components =================
const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 9999;
`;

const RoundImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #0000ff, #c11c84);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 480px) { width: 65px; height: 65px; }
`;

const RoundImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 15px;
  width: 90%;
  max-width: 450px;
  height: 70vh;
  max-height: 500px;
  background: ${(props) => props.theme === "dark" ? "rgba(17, 24, 39, 0.85)" : "rgba(255, 255, 255, 0.85)"};
  backdrop-filter: blur(12px);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  border: 1px solid rgba(138, 43, 226, 0.3);
  z-index: 9999;

  @media (max-width: 480px) {
    width: 100%;
    height: 75vh;
    bottom: 10;
    right: 0;
    border-radius: 10;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(135deg, #4f46e5, #8b5cf6, #db2777);
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 18px 18px 0 0;

  @media (max-width: 480px) { font-size: 14px; padding: 10px 14px; }
`;

const CancelButton = styled.button`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 18px;
`;

const ChatBox = styled.div`
  flex: 1;
  padding: 12px 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${(props) => (props.theme === "dark" ? "#1f2937" : "#f3f4f6")};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;

  @media (max-width: 480px) { padding: 10px 12px; gap: 8px; }
`;

const Message = styled.div`
  display: flex;
  justify-content: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
`;

const Text = styled.div`
  background: ${(props) => props.sender === "user"
      ? "linear-gradient(135deg, #3b82f6, #2563eb)"
      : props.theme === "dark" ? "#374151" : "#e5e5ea"};
  color: ${(props) => props.sender === "user" ? "#fff" : props.theme === "dark" ? "#eee" : "#000"};
  padding: 10px 14px;
  border-radius: 16px;
  max-width: 70%;
  word-wrap: break-word;

  @media (max-width: 480px) { max-width: 85%; padding: 8px 12px; font-size: 14px; }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  margin-left: 8px;
  @media (max-width: 480px) { width: 40px; height: 40px; }
`;

const InputBox = styled.div`
  display: flex;
  padding: 10px 14px;
  background: ${(props) => (props.theme === "dark" ? "#111827" : "#fff")};
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: ${(props) => (props.theme === "dark" ? "#374151" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "#eee" : "#000")};
  font-size: 14px;
  min-width: 0; /* prevents overflow in flex layouts */

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 13px;
    border-radius: 10px;
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 12px;
    border-radius: 8px;
  }
`;

const SendButton = styled.button`
  margin-left: 8px;
  padding: 8px 14px;
  background: linear-gradient(135deg, #4F46E5, #8B5CF6, #DB2777);
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 6px 10px;
    margin-left: 6px;
    font-size: 12px;
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 11px;
  }
`;


const MicButton = styled.button`
  margin-left: 8px;
  padding: 8px 12px;
  background: linear-gradient(135deg, #4F46E5, #8B5CF6, #DB2777);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 6px 10px;
    margin-left: 6px;
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
  }
`;


const TypingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TypingAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const TypingDots = styled.div`
  display: flex;
  gap: 5px;
  span {
    width: 6px;
    height: 6px;
    background: #3b82f6;
    border-radius: 50%;
    animation: bounce 1.2s infinite;
  }
  span:nth-child(1) { animation-delay: 0s; }
  span:nth-child(2) { animation-delay: 0.2s; }
  span:nth-child(3) { animation-delay: 0.4s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
    40% { transform: scale(1); opacity: 1; }
  }
`;

export default AIAssistantButton;
