import logo from './logo.svg';
import './App.css';
import React from 'react';
import Contact from './components/pages/Contact';
import Header from './components/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
  <div>
    <Home/>
    <Projects/>
  </div>
  );
}

export default App;
