import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Intro from "./Components/Intro/Intro";
import Footer from "./Components/Footer/Footer";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectsSection from "./Components/ProjectSection/ProjectSection";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
