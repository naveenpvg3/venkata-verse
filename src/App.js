// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skillset from './components/Skillset';
import Footer from './components/Footer';
import './App.css'; 


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <AboutMe />
      <Education />
      <Experience />
      <Skillset />
      <Footer />
    </div>
  );
}

export default App;
