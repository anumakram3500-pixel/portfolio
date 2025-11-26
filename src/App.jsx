import { useState } from "react";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Contactus from "./pages/contactus";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Skill from "./pages/Skill";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
function App() {
  return (
    <>
      {/* <div className="pb-20"> */}
      <Header />
      {/* </div> */}
      <div className="pt-10">
        <Routes>
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
