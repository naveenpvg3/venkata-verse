// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle scrolling or navigating to the home page
  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Adjust timeout if necessary
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => handleScroll("home")}>Home</button></li>
        <li><button onClick={() => handleScroll("about-me")}>About Me</button></li>
        <li><button onClick={() => handleScroll("educational")}>Educational</button></li>
        <li><button onClick={() => handleScroll("work-experience")}>Work Experience</button></li>
        <li><button onClick={() => handleScroll("skillset")}>Skills</button></li>
        <li>
          <a href="https://medium.com/@naveenpvg" target="_blank" rel="noopener noreferrer">
            MyBlogs
          </a>
        </li>
        <li><Link to="/my-gear">My Gear</Link></li>
        <li><Link to="/learning-resources">Learning Resources</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
