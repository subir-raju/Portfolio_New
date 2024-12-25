import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Research from "./Pages/Research/Research";
import Blogs from "./Pages/Blogs/Blogs";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Project />
                <Contact />
              </>
            }
          />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/details" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
