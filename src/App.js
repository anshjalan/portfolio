import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
import RightBar from "./components/rightbar";
import LeftBar from "./components/leftbar";

function App() {
  return (
    <Router>
      <div className="App w-full min-h-screen bg-customDarkBlue flex flex-col">
        <Navbar />
        <div className="flex flex-1 flex-row">
          <div className="hidden md:block md:w-[20%]">
            <LeftBar />
          </div>
          <div className="w-full my-4 py-4 mx-auto md:w-[60%] flex flex-col flex-1 space-y-32">
            <div id="home" className="flex-1">
              <Home />
            </div>
            <div id="about" className="flex-1">
              <About />
            </div>
            <div id="experience" className="flex-1">
              <Experience />
            </div>
            <div id="education" className="flex-1">
              <Education />
            </div>
            <div id="projects" className="flex-1">
              <Projects />
            </div>
            <div id="contact" className="flex-1">
              <Contact />
            </div>
            <Footer />
          </div>
          <div className="hidden md:block md:w-[20%]">
            <RightBar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
