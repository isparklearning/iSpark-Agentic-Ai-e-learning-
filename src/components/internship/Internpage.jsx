import React from "react";
import { Helmet } from "react-helmet";
import Internmain from "./Internmain.jsx";
import Navbar from "../landing/Navbar.jsx";
import Footer from "../Footer.jsx";


const Internpage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Internship - Robotics & Applied AI</title>
      </Helmet>
<Navbar/>
<br></br><br></br>
      {/* Internship Header + Card */}
      <Internmain hideHeader={false} />

     
      
      <Footer/>
    </div>
  );
};

export default Internpage;
