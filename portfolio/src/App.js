import './App.css';
import React from 'react';
import Contact from './components/pages/Contact';
import Header from './components/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import { Routes,Route, Router } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';


function App() {
  return (
      <div>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="contact" element={<Contact />}/>
        </Routes>
      </div>
  );
}

export default App;
