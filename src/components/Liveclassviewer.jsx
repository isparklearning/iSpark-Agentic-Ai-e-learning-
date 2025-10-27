import React, { useState, useEffect } from "react";
import { FaVideo, FaPlay, FaTimes } from "react-icons/fa";
import axios from "axios";

const Liveclassviewer = ({ setActiveTab, meetingId }) => {
  // Student view only
  const [videoUrl, setVideoUrl] = useState(""); 
  const [status, setStatus] = useState("Click Join to connect to the live session.");
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const fetchLiveClass = async () => {
      try {
        if (!meetingId) {
          setStatus("No meeting ID provided.");
          return;
        }

        // Call student backend endpoint
        const response = await axios.post(" http://127.0.0.1:5000/api/meeting", {
          meeting_id: meetingId
        });

        if (response.data.video_url) {
          setVideoUrl(response.data.video_url);
          setStatus(response.data.status || "Live class is ready. Click Join to enter.");
        } else {
          setStatus("Zoom link not available. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching live class data:", error);
        setStatus("Unable to fetch live class. Please try again later.");
      }
    };

    fetchLiveClass();
  }, [meetingId]);

  const handleJoin = () => {
    if (!videoUrl) {
      setStatus("Zoom link not available.");
      return;
    }
    window.open(videoUrl, "_blank"); 
    setIsJoined(true);
    setStatus("Redirecting to Zoom...");
  };

  const handleLeave = () => {
    setIsJoined(false);
    setStatus("You have left the class.");
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 max-w-7xl mx-auto transition-colors duration-500 mt-10">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-extrabold flex items-center gap-4 text-blue-600 dark:text-blue-400 text-center">
          <FaVideo className="text-4xl" /> Join Live Class
        </h3>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mb-8">
        <button
          onClick={handleJoin}
          disabled={isJoined || !videoUrl}
          className={`px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-3 shadow-md transition ${
            isJoined || !videoUrl
              ? "bg-green-400 cursor-not-allowed opacity-50"
              : "bg-green-600 hover:bg-green-700 active:bg-green-800"
          }`}
        >
          <FaPlay className="text-lg" /> Join Class
        </button>

        <button
          onClick={handleLeave}
          disabled={!isJoined}
          className={`px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-3 shadow-md transition ${
            !isJoined
              ? "bg-red-500 cursor-not-allowed opacity-50"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          <FaTimes className="text-lg" /> Leave Class
        </button>
      </div>

      <div className="text-center">
        <div className="text-xl font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
          {status}
        </div>
      </div>
    </div>
  );
};

export default Liveclassviewer;
