import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import CoursesSection from "./components/courses/Courses.jsx";
// Components & Pages
import LandingPage from './components/landing/LandingPage.jsx';
import AICourses from './pages/courses/AICourses.jsx';
import RoboticsCourses from './pages/courses/RoboticsCourses.jsx';
import UGCourses from './pages/courses/UGCourses.jsx';
import CloudCourses from './pages/courses/CloudCourses.jsx';
import CoursesPage from './components/courses/CoursesPage.jsx';
import AIAssistantButton from './components/common/AIAssistantButton.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import Login from './pages/Auth/Login.jsx';
import Signup from './pages/Auth/Signup.jsx';
import HumanoidRobot from './components/products/Humanoid-Robot.jsx';
import CoeLab from './components/products/Coe-lab.jsx';
import ISparkVTU from './components/ISparkVTU.jsx';
import SuccessStories from "./components/SuccessStories.jsx";
import CybersecurityCourses from './pages/courses/CyberSecurityCourses.jsx';
import InternshipCurriculum from './components/internship/InternshipCurriculum.jsx';
import Internpage from './components/internship/Internpage.jsx';
// ✅ Make sure these components exist or comment them out for now
// import StemLab from './components/products/StemLab';
// import VtuLab from './components/products/VtuLab';

import Courses from './components/courses/Courses.jsx';
import ZoomLive from './components/ZoomLive.jsx';
// Corrected import paths without .jsx extension
import StudentDashboard from "./pages/Auth/student-dashboard.jsx";
import TeacherDashboard from "./pages/Auth/trainer-dashboard.jsx";
import Liveclassviewer from './components/Liveclassviewer.jsx';
import AdminDashboard from './pages/Auth/admin-dashboard.jsx';
import ForgotPassword from './pages/Auth/ForgotPassword.jsx';
import ResetPassword from './pages/Auth/ResetPassword.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A0A0B] text-white p-8">
          <h1 className="text-2xl text-red-500 mb-4">Something went wrong</h1>
          <pre className="text-sm text-gray-400 overflow-auto">
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Suspense
            fallback={
              <div className="min-h-screen bg-[#0A0A0B] text-white flex items-center justify-center">
                Loading...
              </div>
            }
          >
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/ai" element={<AICourses />} />
              <Route path="/courses/robotics" element={<RoboticsCourses />} />
              <Route path="/courses/ug" element={<UGCourses />} />
              <Route path="/courses/cloud" element={<CloudCourses />} />
              <Route path='/courses/cybersecurity' element={<CybersecurityCourses/>} />
              <Route path='/courses' element={<Courses/>}/>
             
              {/* Auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<StudentDashboard />} />
              <Route path='/student-dashboard' element={<StudentDashboard/>}/>
              <Route path='/trainer-dashboard' element={<TeacherDashboard/>}/>
              <Route path='/admin-dashboard' element={<AdminDashboard />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />

              {/* Products */}
              <Route path="/products/humanoid-ai-teacher-robot" element={<HumanoidRobot />} />
              <Route path="/products/coe-lab" element={<CoeLab />} />
              {/* Uncomment these if components exist */}
              {/* <Route path="/products/coe-lab/stem" element={<StemLab />} /> */}
              {/* <Route path="/products/coe-lab/vtu" element={<VtuLab />} /> */}

              {/* VTU */}
              <Route path="/ispark-vtu" element={<ISparkVTU />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/coursessection" element={<CoursesSection />} />
              <Route path='/internship/internpage' element={<Internpage/> }/>
              <Route path="/internship/internshipcurriculum" element={<InternshipCurriculum />} />
              <Route path='/zoomlive' element={<ZoomLive/>} />
             <Route path='Liveclassviewer' element={< Liveclassviewer/>}/>

            </Routes>
          <AIAssistantButton />
          </Suspense>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
export default App;