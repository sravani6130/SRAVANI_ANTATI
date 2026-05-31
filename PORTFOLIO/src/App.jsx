import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./index.css";

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
