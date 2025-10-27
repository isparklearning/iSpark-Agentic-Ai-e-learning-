// src/pages/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaUserShield, FaUsersCog, FaEdit, FaCheck,
  FaChartLine,
  FaBook,
  FaUserCheck,
  FaUserTimes,
  FaChartBar,
  FaCog,
  FaBell,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaGraduationCap,
  FaUsers,
  FaUserPlus,
  FaUserCog,
  FaChartPie,
  FaComments,
  FaBookReader,
  FaCertificate,
  FaSignOutAlt,
  FaRobot,
  FaHandshake,
  FaBriefcase,
  FaStar,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown
} from 'react-icons/fa';
import logo from "../../assets/logo-dark.png";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true' || false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    pendingApprovals: 0,
    activeCourses: 0,
    totalRevenue: 0,
  });
  const [productsOpen, setProductsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);
  
  // States for Add User modal
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    role: 'Student',
    phone: '',
    department: '',
    college: '',
  });
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  // States for Edit User modal
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormErrors, setEditFormErrors] = useState({});
  
  // States for Edit Profile modal
  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    department: '',
    college: '',
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileFormErrors, setProfileFormErrors] = useState({});
  
  // States for Settings modal
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: darkMode,
    emailNotifications: true,
    smsNotifications: false,
  });

  // Initialize user state
  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData && userData.role === 'Admin') {
        setUser(userData);
        // Initialize profile data with user info
        setProfileData({
          first_name: userData.first_name || '',
          last_name: userData.last_name || '',
          email: userData.email || '',
          phone: userData.phone || '',
          department: userData.department || '',
          college: userData.college || '',
        });
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/login');
    }
  }, [navigate]);

  // Fetch dashboard data
  useEffect(() => {
    if (!user) return;

    async function fetchData() {
      try {
        // Fetch pending users
        const usersRes = await fetch('http://127.0.0.1:8001/api/accounts/pending-users/');
        if (usersRes.ok) {
          const usersData = await usersRes.json();
          setUsers(Array.isArray(usersData) ? usersData : []);
          setStats(prev => ({ ...prev, pendingApprovals: usersData.length }));
        }

        // Fetch active users
        const activeUsersRes = await fetch('http://127.0.0.1:8001/api/accounts/active-users/');
        if (activeUsersRes.ok) {
          const activeUsersData = await activeUsersRes.json();
          setActiveUsers(Array.isArray(activeUsersData) ? activeUsersData : []);
        }

        // Fetch all users
        const allUsersRes = await fetch('http://127.0.0.1:8001/api/accounts/all-users/');
        if (allUsersRes.ok) {
          const allUsersData = await allUsersRes.json();
          setAllUsers(Array.isArray(allUsersData) ? allUsersData : []);
        }

        // Fetch admin stats
        const statsRes = await fetch('/api/admin-stats');
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(prev => ({ ...prev, ...statsData }));
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [user]);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('darkMode');
    navigate('/login');
  };

  // Approve user function
  const approveUser = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8001/api/accounts/approve/${id}/`, {
        method: 'POST'
      });
      setUsers(users.filter(u => u.id !== id));
      setStats(prev => ({ ...prev, pendingApprovals: prev.pendingApprovals - 1 }));
      
      // Refresh active users
      const activeUsersRes = await fetch('http://127.0.0.1:8001/api/accounts/active-users/');
      if (activeUsersRes.ok) {
        const activeUsersData = await activeUsersRes.json();
        setActiveUsers(Array.isArray(activeUsersData) ? activeUsersData : []);
      }
    } catch (error) {
      console.error("Error approving user:", error);
    }
  };

  // Reject user function
  const rejectUser = async (id) => {
    try {
      const userToReject = users.find(u => u.id === id);
      if (userToReject) {
        // Add to rejected users
        const rejectedUser = {
          ...userToReject,
          rejectionDate: new Date().toISOString()
        };
        setRejectedUsers(prev => [...prev, rejectedUser]);
      }
      
      await fetch(`http://127.0.0.1:8001/api/accounts/reject/${id}/`, {
        method: 'POST'
      });
      setUsers(users.filter(u => u.id !== id));
      setStats(prev => ({ ...prev, pendingApprovals: prev.pendingApprovals - 1 }));
    } catch (error) {
      console.error("Error rejecting user:", error);
    }
  };

  // Approve rejected user function
  const handleApproveUser = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8001/api/accounts/approve/${id}/`, {
        method: 'POST'
      });
      setRejectedUsers(prevRejected => {
        const userToApprove = prevRejected.find(u => u.id === id);
        if (userToApprove) {
          setActiveUsers(prevActive => [...prevActive, userToApprove]);
        }
        return prevRejected.filter(u => u.id !== id);
      });
    } catch (error) {
      console.error("Error approving rejected user:", error);
    }
  };

  // Toggle user status (activate/deactivate)
  const toggleUserStatus = async (id) => {
    try {
      // Find the user to get current status
      const user = allUsers.find(u => u.id === id);
      if (!user) return;
      
      const newStatus = user.is_active === 1 ? 0 : 1;
      
      // Call the API to update the user status
      const res = await fetch(`http://127.0.0.1:8001/api/accounts/toggle-status/${id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_active: newStatus }),
      });
      
      if (res.ok) {
        // Update the state
        setAllUsers(prev => prev.map(u => 
          u.id === id ? { ...u, is_active: newStatus } : u
        ));
      } else {
        console.error('Failed to toggle user status');
      }
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  // Modal functions
  const openModal = (action, userId) => {
    setModalAction(action);
    setCurrentUserId(userId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalAction('');
    setCurrentUserId(null);
  };

  const confirmAction = () => {
    if (modalAction === 'approve') {
      approveUser(currentUserId);
    } else if (modalAction === 'reject') {
      rejectUser(currentUserId);
    }
    closeModal();
  };

  // Add User Functions
  const openAddUserModal = () => {
    setAddUserModalOpen(true);
  };

  const closeAddUserModal = () => {
    setAddUserModalOpen(false);
    setNewUser({
      first_name: '',
      last_name: '',
      email: '',
      role: 'Student',
      phone: '',
      department: '',
      college: '',
    });
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!newUser.first_name.trim()) {
      errors.first_name = 'First name is required';
    }
    
    if (!newUser.last_name.trim()) {
      errors.last_name = 'Last name is required';
    }
    
    if (!newUser.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      errors.email = 'Email is invalid';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddUser = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsAddingUser(true);
    try {
      const response = await fetch('http://127.0.0.1:8001/api/accounts/add-user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const newUserFromServer = await response.json();
        console.log('New user from server:', newUserFromServer);
        
        // Refresh the user list to ensure we have the latest data
        const allUsersRes = await fetch('http://127.0.0.1:8001/api/accounts/all-users/');
        if (allUsersRes.ok) {
          const allUsersData = await allUsersRes.json();
          setAllUsers(Array.isArray(allUsersData) ? allUsersData : []);
        }
        
        // Close the modal and reset form
        closeAddUserModal();
        alert('User added successfully!');
      } else {
        let errorMessage = 'Error adding user';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
          try {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
          } catch (textError) {
            console.error('Error getting response text:', textError);
          }
        }
        
        console.error('Error adding user:', errorMessage);
        alert(`Error adding user: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Network error adding user:', error);
      alert(`Network error: ${error.message || 'Please check your network connection and try again.'}`);
    } finally {
      setIsAddingUser(false);
    }
  };

  // Edit User Functions
  const openEditUserModal = (userId) => {
    const userToEdit = allUsers.find(u => u.id === userId);
    if (userToEdit) {
      setCurrentUser({ ...userToEdit });
      setEditUserModalOpen(true);
    }
  };

  const closeEditUserModal = () => {
    setEditUserModalOpen(false);
    setCurrentUser(null);
    setEditFormErrors({});
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (editFormErrors[name]) {
      setEditFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateEditForm = () => {
    const errors = {};
    
    if (!currentUser.first_name.trim()) {
      errors.first_name = 'First name is required';
    }
    
    if (!currentUser.last_name.trim()) {
      errors.last_name = 'Last name is required';
    }
    
    if (!currentUser.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(currentUser.email)) {
      errors.email = 'Email is invalid';
    }
    
    setEditFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEditUser = async () => {
    if (!validateEditForm()) {
      return;
    }
    
    setIsEditing(true);
    try {
      const response = await fetch(`http://127.0.0.1:8001/api/accounts/update-user/${currentUser.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(currentUser),
      });

      if (response.ok) {
        // Refresh the user list to ensure we have the latest data
        const allUsersRes = await fetch('http://127.0.0.1:8001/api/accounts/all-users/');
        if (allUsersRes.ok) {
          const allUsersData = await allUsersRes.json();
          setAllUsers(Array.isArray(allUsersData) ? allUsersData : []);
        }
        
        // Close the modal and reset form
        closeEditUserModal();
        alert('User updated successfully!');
      } else {
        let errorMessage = 'Error updating user';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
          try {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
          } catch (textError) {
            console.error('Error getting response text:', textError);
          }
        }
        
        console.error('Error updating user:', errorMessage);
        alert(`Error updating user: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Network error updating user:', error);
      alert(`Network error: ${error.message || 'Please check your network connection and try again.'}`);
    } finally {
      setIsEditing(false);
    }
  };

  // Edit Profile Functions
  const openEditProfileModal = () => {
    setProfileData({
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      email: user.email || '',
      phone: user.phone || '',
      department: user.department || '',
      college: user.college || '',
    });
    setEditProfileModalOpen(true);
  };

  const closeEditProfileModal = () => {
    setEditProfileModalOpen(false);
    setProfileFormErrors({});
  };

  const handleProfileInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (profileFormErrors[name]) {
      setProfileFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateProfileForm = () => {
    const errors = {};
    
    if (!profileData.first_name.trim()) {
      errors.first_name = 'First name is required';
    }
    
    if (!profileData.last_name.trim()) {
      errors.last_name = 'Last name is required';
    }
    
    if (!profileData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      errors.email = 'Email is invalid';
    }
    
    setProfileFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEditProfile = async () => {
    if (!validateProfileForm()) {
      return;
    }
    
    setIsEditingProfile(true);
    try {
      const response = await fetch(`http://127.0.0.1:8001/api/accounts/update-profile/${user.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        // Update the user state with the new profile data
        setUser(updatedUser);
        // Update localStorage with the new user data
        localStorage.setItem('user', JSON.stringify(updatedUser));
        // Close the modal and reset form
        closeEditProfileModal();
        alert('Profile updated successfully!');
      } else {
        let errorMessage = 'Error updating profile';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
          try {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
          } catch (textError) {
            console.error('Error getting response text:', textError);
          }
        }
        
        console.error('Error updating profile:', errorMessage);
        alert(`Error updating profile: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Network error updating profile:', error);
      alert(`Network error: ${error.message || 'Please check your network connection and try again.'}`);
    } finally {
      setIsEditingProfile(false);
    }
  };

  // Settings Functions
  const openSettingsModal = () => {
    setSettings({
      notifications: true,
      darkMode: darkMode,
      emailNotifications: true,
      smsNotifications: false,
    });
    setSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setSettingsModalOpen(false);
  };

  const handleSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setSettings(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Update dark mode if changed
    if (name === 'darkMode') {
      setDarkMode(newValue);
    }
  };

  const handleSaveSettings = () => {
    // Save settings to localStorage or API
    localStorage.setItem('settings', JSON.stringify(settings));
    alert('Settings saved successfully!');
    closeSettingsModal();
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const renderRoleBadge = (role) => {
    const base = "inline-block px-3 py-1 rounded-full text-sm font-semibold text-white";
    const colors = {
      Admin: "bg-purple-500 text-black",
      "Super Admin": "bg-red-700",
      Trainer: "bg-purple-600",
      Student: "bg-blue-600"
    };
    return <span className={`${base} ${colors[role] || "bg-purple-500"}`}>{role}</span>;
  };

  const renderDashboard = () => (
    <>
      {/* Stats Section */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaUsers className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.totalUsers}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Users</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaUserCheck className="text-yellow-600 dark:text-yellow-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.pendingApprovals}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Pending Approvals</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaBook className="text-green-600 dark:text-green-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{stats.activeCourses}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Active Courses</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-center text-center transition-colors duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2 sm:mb-3">
            <FaChartLine className="text-purple-600 dark:text-purple-400 text-lg sm:text-xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">${stats.totalRevenue}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
        </div>
      </section>

      {/* User Approvals Section */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-300">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-yellow-600 dark:text-yellow-400">
            <FaUserShield /> User Approvals
          </h3>
          <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
            {stats.pendingApprovals} pending
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-600"></div>
          </div>
        ) : users.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {users.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                          {user.first_name ? user.first_name[0] : 'U'}
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {user.first_name} {user.last_name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            ID: {user.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      {renderRoleBadge(user.role)}
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">
                      {new Date(user.date_joined).toLocaleDateString()}
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => openModal('approve', user.id)}
                        className="px-4 py-1 bg-green-100 text-green-600 font-semibold rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-400 dark:hover:bg-green-800 dark:hover:text-green-300 mr-3"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => openModal('reject', user.id)}
                        className="px-4 py-1 ml-2 bg-red-100 text-red-600 font-semibold rounded hover:bg-red-200 hover:text-red-900 dark:bg-red-900 dark:text-red-400 dark:hover:bg-red-800 dark:hover:text-red-300"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">There are no users waiting for approval at this time.</p>
          </div>
        )}
      </section>

      {/* Rejected Users Section */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-300">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-red-600 dark:text-red-400">
            <FaUserTimes /> Rejected Users
          </h3>
          <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
            {rejectedUsers.length} rejected
          </span>
        </div>

        {rejectedUsers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rejection Date</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {rejectedUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                          {user.first_name ? user.first_name[0] : 'U'}
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {user.first_name} {user.last_name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            ID: {user.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      {renderRoleBadge(user.role)}
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">
                      {new Date(user.rejectionDate).toLocaleString()}
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleApproveUser(user.id)}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">There are no rejected users at this time.</p>
          </div>
        )}
      </section>
    </>
  );

  // Analytics Section
  const renderAnalytics = () => (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-300">
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">System Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">User Statistics</h3>
            <p className="text-gray-600 dark:text-gray-300">Detailed user analytics coming soon...</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Revenue Reports</h3>
            <p className="text-gray-600 dark:text-gray-300">Revenue analytics coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Tab Content Renderer
  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'approvals':
        return (
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-300">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-yellow-600 dark:text-yellow-400">
                <FaUserShield /> User Approvals
              </h3>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                {stats.pendingApprovals} pending
              </span>
            </div>

            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-600"></div>
              </div>
            ) : users.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {users.map(user => (
                      <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                              {user.first_name ? user.first_name[0] : 'U'}
                            </div>
                            <div className="ml-3 sm:ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {user.first_name} {user.last_name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                ID: {user.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {user.email}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                          {renderRoleBadge(user.role)}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">
                          {new Date(user.date_joined).toLocaleDateString()}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => openModal('approve', user.id)}
                            className="px-4 py-1 bg-green-100 text-green-600 font-semibold rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-400 dark:hover:bg-green-800 dark:hover:text-green-300 mr-3"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => openModal('reject', user.id)}
                            className="px-4 py-1 ml-2 bg-red-100 text-red-600 font-semibold rounded hover:bg-red-200 hover:text-red-900 dark:bg-red-900 dark:text-red-400 dark:hover:bg-red-800 dark:hover:text-red-300"
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">There are no users waiting for approval at this time.</p>
              </div>
            )}
          </section>
        );
      case 'rejected':
        return (
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-300">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-red-600 dark:text-red-400">
                <FaUserTimes /> Rejected Users
              </h3>
              <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                {rejectedUsers.length} rejected
              </span>
            </div>

            {rejectedUsers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rejection Date</th>
                      <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {rejectedUsers.map(user => (
                      <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                              {user.first_name ? user.first_name[0] : 'U'}
                            </div>
                            <div className="ml-3 sm:ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {user.first_name} {user.last_name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                ID: {user.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {user.email}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                          {renderRoleBadge(user.role)}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-gray-400">
                          {new Date(user.rejectionDate).toLocaleString()}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleApproveUser(user.id)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                          >
                            Approve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">There are no rejected users at this time.</p>
              </div>
            )}
          </section>
        );
      case 'analytics':
        return renderAnalytics();
      default:
        return renderDashboard();
    }
  };

  // Confirmation Modal Component
  const ConfirmationModal = ({ isOpen, onClose, onConfirm, action, userName }) => {
    if (!isOpen) return null;

    const getActionMessage = () => {
      if (action === 'approve') {
        return `Are you sure you want to approve ${userName}?`;
      } else if (action === 'reject') {
        return `Are you sure you want to reject ${userName}? This action cannot be undone.`;
      }
      return '';
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Confirm Action
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            {getActionMessage()}
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                action === 'approve'
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              {action === 'approve' ? 'Approve' : 'Reject'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Add User Modal Component
  const AddUserModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Add New User
          </h3>
          
          <div className="space-y-4">
            {/* First Name */}
            <div className="relative">
              <input
                type="text"
                name="first_name"
                value={newUser.first_name}
                onChange={handleInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  formErrors.first_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="first_name"
              />
              <label 
                htmlFor="first_name"
                className={`absolute left-3 transition-all duration-200 ${
                  newUser.first_name || document.activeElement.id === 'first_name'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                First Name <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Last Name */}
            <div className="relative">
              <input
                type="text"
                name="last_name"
                value={newUser.last_name}
                onChange={handleInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  formErrors.last_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="last_name"
              />
              <label 
                htmlFor="last_name"
                className={`absolute left-3 transition-all duration-200 ${
                  newUser.last_name || document.activeElement.id === 'last_name'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Last Name <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="email"
              />
              <label 
                htmlFor="email"
                className={`absolute left-3 transition-all duration-200 ${
                  newUser.email || document.activeElement.id === 'email'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Email <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Role */}
            <div className="relative">
              <select
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="role"
              >
                <option value="Student">Student</option>
                <option value="Trainer">Trainer</option>
                <option value="Admin">Admin</option>
                <option value="Super Admin">Super Admin</option>
              </select>
              <label 
                htmlFor="role"
                className={`absolute left-3 transition-all duration-200 ${
                  newUser.role || document.activeElement.id === 'role'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Role
              </label>
            </div>
            
            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={newUser.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="phone"
              />
              <label 
                htmlFor="phone"
                className={`absolute left-3 transition-all duration-200 ${
                  newUser.phone || document.activeElement.id === 'phone'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Phone
              </label>
            </div>
            
            {/* Department */}
            <div className="relative">
              <input
                type="text"
                name="department"
                value={newUser.department}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="department"
              />
              <label 
                htmlFor="department"
                className={`absolute left-3 transition-all duration-200 ${
                  newUser.department || document.activeElement.id === 'department'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Department
              </label>
            </div>
            
            {/* College */}
            <div className="relative">
              <input
                type="text"
                name="college"
                value={newUser.college}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="college"
              />
              <label 
                htmlFor="college"
                className={`absolute left-3 transition-all duration-200 ${
                  newUser.college || document.activeElement.id === 'college'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                College
              </label>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
            >
              Cancel
            </button>
            <button
              onClick={handleAddUser}
              disabled={isAddingUser}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition disabled:opacity-70"
            >
              {isAddingUser ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </>
              ) : 'Add User'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Edit User Modal Component
  const EditUserModal = ({ isOpen, onClose }) => {
    if (!isOpen || !currentUser) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Edit User
          </h3>
          
          <div className="space-y-4">
            {/* First Name */}
            <div className="relative">
              <input
                type="text"
                name="first_name"
                value={currentUser.first_name}
                onChange={handleEditInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  editFormErrors.first_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="edit_first_name"
              />
              <label 
                htmlFor="edit_first_name"
                className={`absolute left-3 transition-all duration-200 ${
                  currentUser.first_name || document.activeElement.id === 'edit_first_name'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                First Name <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Last Name */}
            <div className="relative">
              <input
                type="text"
                name="last_name"
                value={currentUser.last_name}
                onChange={handleEditInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  editFormErrors.last_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="edit_last_name"
              />
              <label 
                htmlFor="edit_last_name"
                className={`absolute left-3 transition-all duration-200 ${
                  currentUser.last_name || document.activeElement.id === 'edit_last_name'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Last Name <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={currentUser.email}
                onChange={handleEditInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  editFormErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="edit_email"
              />
              <label 
                htmlFor="edit_email"
                className={`absolute left-3 transition-all duration-200 ${
                  currentUser.email || document.activeElement.id === 'edit_email'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Email <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Role */}
            <div className="relative">
              <select
                name="role"
                value={currentUser.role}
                onChange={handleEditInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="edit_role"
              >
                <option value="Student">Student</option>
                <option value="Trainer">Trainer</option>
                <option value="Admin">Admin</option>
                <option value="Super Admin">Super Admin</option>
              </select>
              <label 
                htmlFor="edit_role"
                className={`absolute left-3 transition-all duration-200 ${
                  currentUser.role || document.activeElement.id === 'edit_role'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Role
              </label>
            </div>
            
            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={currentUser.phone}
                onChange={handleEditInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="edit_phone"
              />
              <label 
                htmlFor="edit_phone"
                className={`absolute left-3 transition-all duration-200 ${
                  currentUser.phone || document.activeElement.id === 'edit_phone'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Phone
              </label>
            </div>
            
            {/* Department */}
            <div className="relative">
              <input
                type="text"
                name="department"
                value={currentUser.department}
                onChange={handleEditInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="edit_department"
              />
              <label 
                htmlFor="edit_department"
                className={`absolute left-3 transition-all duration-200 ${
                  currentUser.department || document.activeElement.id === 'edit_department'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Department
              </label>
            </div>
            
            {/* College */}
            <div className="relative">
              <input
                type="text"
                name="college"
                value={currentUser.college}
                onChange={handleEditInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="edit_college"
              />
              <label 
                htmlFor="edit_college"
                className={`absolute left-3 transition-all duration-200 ${
                  currentUser.college || document.activeElement.id === 'edit_college'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                College
              </label>
            </div>
            
            {/* Status */}
            <div className="relative">
              <select
                name="is_active"
                value={currentUser.is_active}
                onChange={handleEditInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="edit_status"
              >
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
              <label 
                htmlFor="edit_status"
                className={`absolute left-3 transition-all duration-200 ${
                  currentUser.is_active || document.activeElement.id === 'edit_status'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Status
              </label>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
            >
              Cancel
            </button>
            <button
              onClick={handleEditUser}
              disabled={isEditing}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition disabled:opacity-70"
            >
              {isEditing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Edit Profile Modal Component
  const EditProfileModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Edit Profile
          </h3>
          
          <div className="space-y-4">
            {/* First Name */}
            <div className="relative">
              <input
                type="text"
                name="first_name"
                value={profileData.first_name}
                onChange={handleProfileInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  profileFormErrors.first_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="profile_first_name"
              />
              <label 
                htmlFor="profile_first_name"
                className={`absolute left-3 transition-all duration-200 ${
                  profileData.first_name || document.activeElement.id === 'profile_first_name'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                First Name <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Last Name */}
            <div className="relative">
              <input
                type="text"
                name="last_name"
                value={profileData.last_name}
                onChange={handleProfileInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  profileFormErrors.last_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="profile_last_name"
              />
              <label 
                htmlFor="profile_last_name"
                className={`absolute left-3 transition-all duration-200 ${
                  profileData.last_name || document.activeElement.id === 'profile_last_name'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Last Name <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileInputChange}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                  profileFormErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                required
                id="profile_email"
              />
              <label 
                htmlFor="profile_email"
                className={`absolute left-3 transition-all duration-200 ${
                  profileData.email || document.activeElement.id === 'profile_email'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Email <span className="text-red-500">*</span>
              </label>
            </div>
            
            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleProfileInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="profile_phone"
              />
              <label 
                htmlFor="profile_phone"
                className={`absolute left-3 transition-all duration-200 ${
                  profileData.phone || document.activeElement.id === 'profile_phone'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Phone
              </label>
            </div>
            
            {/* Department */}
            <div className="relative">
              <input
                type="text"
                name="department"
                value={profileData.department}
                onChange={handleProfileInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="profile_department"
              />
              <label 
                htmlFor="profile_department"
                className={`absolute left-3 transition-all duration-200 ${
                  profileData.department || document.activeElement.id === 'profile_department'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                Department
              </label>
            </div>
            
            {/* College */}
            <div className="relative">
              <input
                type="text"
                name="college"
                value={profileData.college}
                onChange={handleProfileInputChange}
                className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                id="profile_college"
              />
              <label 
                htmlFor="profile_college"
                className={`absolute left-3 transition-all duration-200 ${
                  profileData.college || document.activeElement.id === 'profile_college'
                    ? 'top-0 text-xs text-purple-600 dark:text-purple-400 -translate-y-1/2'
                    : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }`}
              >
                College
              </label>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
            >
              Cancel
            </button>
            <button
              onClick={handleEditProfile}
              disabled={isEditingProfile}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition disabled:opacity-70"
            >
              {isEditingProfile ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Settings Modal Component
  const SettingsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Settings
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Dark Mode</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark mode for the application</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={settings.darkMode}
                  onChange={handleSettingsChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enable application notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleSettingsChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Email Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleSettingsChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">SMS Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via SMS</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="smsNotifications"
                  checked={settings.smsNotifications}
                  onChange={handleSettingsChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSettings}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans">
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`w-64 bg-white dark:bg-gray-800 shadow-lg h-screen fixed lg:relative z-50 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Header with logo on left and cancel button on right */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/home')}>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 lg:hidden"
            aria-label="Close sidebar"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <button
            onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center ${
              activeTab === 'dashboard' ? 'bg-purple-100 dark:bg-purple-700' : ''
            }`}
          >
            <FaHome className="mr-3 text-purple-600 dark:text-purple-400" /> Dashboard
          </button>

          <button
            onClick={() => { setActiveTab('approvals'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center ${
              activeTab === 'approvals' ? 'bg-purple-100 dark:bg-purple-700' : ''
            }`}
          >
            <FaUserShield className="mr-3 text-purple-600 dark:text-purple-400" /> User Approvals
          </button>

          <button
            onClick={() => { setActiveTab('rejected'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center ${
              activeTab === 'rejected' ? 'bg-purple-100 dark:bg-purple-700' : ''
            }`}
          >
            <FaUserTimes className="mr-3 text-purple-600 dark:text-purple-400" /> Rejected Users
          </button>

          <button
            onClick={() => { setActiveTab('analytics'); setSidebarOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center ${
              activeTab === 'analytics' ? 'bg-purple-100 dark:bg-purple-700' : ''
            }`}
          >
            <FaChartLine className="mr-3 text-purple-600 dark:text-purple-400" /> Analytics
          </button>

 

          <button
            onClick={() => { navigate('/ispark-vtu'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaHandshake className="mr-3 text-purple-600 dark:text-purple-400"/> iSpark-VTU
          </button>

          <button
            onClick={() => { navigate('/coursessection'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaBook className="mr-3 text-purple-600 dark:text-purple-400" /> Courses
          </button>

          <button
            onClick={() => { navigate('/internship/internpage'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaBriefcase className="mr-3 text-purple-600 dark:text-purple-400" /> Internship
          </button>

          {/* Products dropdown */}
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition"
            >
              <span className="flex items-center">
                <FaRobot className="mr-3 text-purple-600 dark:text-purple-400" /> Products
              </span>
              {productsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {productsOpen && (
              <div className="ml-6 mt-2 space-y-1">
                <button
                  onClick={() => { navigate('/products/humanoid-ai-teacher-robot'); setSidebarOpen(false); }}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-600 text-gray-700 dark:text-gray-200 transition flex items-center"
                >
                  <FaChevronRight className="mr-3 text-xs text-purple-500 dark:text-purple-300" /> Humanoid AI Robots
                </button>
                <button
                  onClick={() => { navigate('/products/coe-lab'); setSidebarOpen(false); }}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-600 text-gray-700 dark:text-gray-200 transition flex items-center"
                >
                  <FaChevronRight className="mr-3 text-xs text-purple-500 dark:text-purple-300" /> CoE Lab
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => { navigate('/success-stories'); setSidebarOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 text-gray-900 dark:text-gray-100 font-medium transition flex items-center"
          >
            <FaStar className="mr-3 text-purple-600 dark:text-purple-400" /> Success Stories
          </button>

          {/* Logout Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 font-medium transition flex items-center"
            >
              <FaSignOutAlt className="mr-3" /> Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-6 max-w-full overflow-auto">
        {/* Mobile header with menu toggle */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 sm:hidden">
          {sidebarOpen ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle Sidebar"
                className="text-2xl text-gray-700 dark:text-gray-200"
              >
                <FaTimes />
              </button>
              <h1 className="text-lg font-bold text-purple-600">Admin Dashboard</h1>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <h1 className="text-lg font-bold text-purple-600">Admin Dashboard
                 <p className="text-lg font-bold text-purple-600">{user.user_fullname || user.username}</p>
              </h1>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle Sidebar"
                className="text-2xl text-gray-700 dark:text-gray-200"
              >
                <FaBars />
              </button>
            </div>
          )}
        </div>

        {/* Desktop header */}
        <header className="hidden sm:flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-6 sm:gap-0 text-gray-900 dark:text-gray-100">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Welcome, <span className='text-purple-600'> {user.user_fullname || user.username} </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300">Administrator Panel</p>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
              className="text-xl focus:outline-none hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Notifications */}
            <div className="relative cursor-pointer">
              <FaBell className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300" />
              {stats.pendingApprovals > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-2 py-0.5 font-bold shadow-lg">
                  {stats.pendingApprovals}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Profile Avatar with Edit Button */}
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg">
                {user.first_name ? user.first_name[0] : user.username[0]}
              </div>
              <button className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center shadow-md transition-colors">
                <FaUser className="text-xs sm:text-sm" />
              </button>
            </div>
            
            {/* Profile Information */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3">
                <h2 className="text-xl sm:text-2xl font-bold dark:text-gray-100 text-gray-800">
                  {user.first_name} {user.last_name}
                </h2>
                <div className="mt-1 sm:mt-0">
                  {renderRoleBadge(user.role)}
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-2 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <FaEnvelope className="text-purple-500" />
                {user.email}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {user.department && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Department</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.department}</p>
                  </div>
                )}
                {user.college && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">College</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.college}</p>
                  </div>
                )}
                {user.phone && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{user.phone}</p>
                  </div>
                )}
                {user.joinDate && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Member Since</p>
                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm sm:text-base">{new Date(user.joinDate).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
               
                <button 
                  onClick={openSettingsModal}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition flex items-center gap-1.5 sm:gap-2 text-sm"
                >
                  <FaCog className="text-xs sm:text-sm" /> 
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        {renderTabContent()}
      </main>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={closeModal}
        onConfirm={confirmAction}
        action={modalAction}
        userName={users.find(u => u.id === currentUserId)?.first_name || 'User'}
      />
      
      {/* Add User Modal */}
      <AddUserModal
        isOpen={addUserModalOpen}
        onClose={closeAddUserModal}
      />
      
      {/* Edit User Modal */}
      <EditUserModal
        isOpen={editUserModalOpen}
        onClose={closeEditUserModal}
      />
      
      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={editProfileModalOpen}
        onClose={closeEditProfileModal}
      />
      
      {/* Settings Modal */}
      <SettingsModal
        isOpen={settingsModalOpen}
        onClose={closeSettingsModal}
      />
    </div>
  );
};

export default AdminDashboard;