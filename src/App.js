// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skillset from './components/Skillset';
import Footer from './components/Footer';
import LearningResources from './components/LearningResources';
import MyGear from './components/MyGear';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <section id="header"><Header /></section>
              <section id="home"><Home /></section>
              <section id="about-me"><AboutMe /></section>
              <section id="educational"><Education /></section>
              <section id="work-experience"><Experience /></section>
              <section id="skillset"><Skillset /></section>
              <Footer />
            </>
          } 
        />
        <Route path="/my-gear" element={<MyGear />} />
        <Route path="/learning-resources" element={<LearningResources />} />
      </Routes>
    </Router>
  );
}

export default App;
