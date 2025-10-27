import React from "react";
import CourseCategories from "./CourseCategories.jsx";
import CourseLevels from "./CourseLevels.jsx";
import CoursesSection from "./CoursesSection.jsx";
import Navbar from "../landing/Navbar.jsx";
import CoursesPage from "./CoursesPage.jsx";
import Footer from "../Footer.jsx";
import { Helmet } from "react-helmet";

const Courses = () => {
  return (
    <>
    <Helmet>
      <title>Courses</title>
    </Helmet>
    <Navbar/>
    <br></br>
  <br></br>
<div className="min-h-screen bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] bg-repeat text-gray-900 flex items-center justify-center">
  <CourseCategories />
</div>
    <Footer/>
    </>
  );
};

export default Courses;
