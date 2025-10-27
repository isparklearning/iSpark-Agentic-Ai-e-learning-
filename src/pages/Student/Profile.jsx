import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaCertificate, FaBell, FaLock, FaCamera } from 'react-icons/fa';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    education: 'Bachelor of Engineering',
    specialization: 'Computer Science',
    bio: 'Passionate about AI and machine learning. Currently pursuing advanced courses in full-stack development and data science.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(profileData);

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData(editedData);
    setIsEditing(false);
  };

  const achievements = [
    { icon: <FaCertificate className="text-[#fbbf24]" />, title: "AI Fundamentals", date: "Completed on Dec 2023" },
    { icon: <FaCertificate className="text-[#3b82f6]" />, title: "Machine Learning Basics", date: "Completed on Jan 2024" },
    { icon: <FaCertificate className="text-[#8b5cf6]" />, title: "Python Programming", date: "Completed on Nov 2023" }
  ];

  const settings = [
    { icon: <FaBell className="text-[#3b82f6]" />, title: "Notifications", description: "Manage your notification preferences" },
    { icon: <FaLock className="text-[#fbbf24]" />, title: "Privacy", description: "Control your privacy settings" }
  ];

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Profile Settings</h1>
          <p className="text-white/70">Manage your account settings and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-[#0f172a] rounded-xl border border-white/10 overflow-hidden mb-8">
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Avatar Section */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={profileData.avatar}
                      alt="Profile"
                      className="w-32 h-32 rounded-full border-4 border-[#3b82f6]"
                    />
                    {isEditing && (
                      <button
                        type="button"
                        className="absolute bottom-0 right-0 bg-[#3b82f6] p-2 rounded-full text-white hover:bg-[#2563eb] transition-colors"
                      >
                        <FaCamera />
                      </button>
                    )}
                  </div>
                  {!isEditing && (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="mt-4 px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>

                {/* Profile Fields */}
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-white/50" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={isEditing ? editedData.name : profileData.name}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-2 bg-[#1e293b] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/70 text-sm mb-2">Email</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-white/50" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={isEditing ? editedData.email : profileData.email}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-2 bg-[#1e293b] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/70 text-sm mb-2">Phone</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhone className="text-white/50" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={isEditing ? editedData.phone : profileData.phone}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-2 bg-[#1e293b] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/70 text-sm mb-2">Education</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaGraduationCap className="text-white/50" />
                        </div>
                        <input
                          type="text"
                          name="education"
                          value={isEditing ? editedData.education : profileData.education}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-2 bg-[#1e293b] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">Bio</label>
                    <textarea
                      name="bio"
                      value={isEditing ? editedData.bio : profileData.bio}
                      onChange={handleChange}
                      disabled={!isEditing}
                      rows="3"
                      className="w-full px-4 py-2 bg-[#1e293b] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent disabled:opacity-50"
                    />
                  </div>

                  {isEditing && (
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsEditing(false);
                          setEditedData(profileData);
                        }}
                        className="px-6 py-2 bg-transparent border border-white/10 text-white rounded-lg hover:border-white/30 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-[#0f172a] p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  {achievement.icon}
                  <h3 className="text-white font-medium">{achievement.title}</h3>
                </div>
                <p className="text-white/70 text-sm">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Settings Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {settings.map((setting, index) => (
              <div key={index} className="bg-[#0f172a] p-4 rounded-xl border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  {setting.icon}
                  <div>
                    <h3 className="text-white font-medium">{setting.title}</h3>
                    <p className="text-white/70 text-sm">{setting.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 