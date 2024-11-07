// src/components/Header.js
import React from 'react';
import profilePhoto from '../assets/my-photo.jpg';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png';
import leetcodeIcon from '../assets/leetcode-icon.png';
import emailIcon from '../assets/email-icon.png';  // Import the email icon

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="profile-section">
        <img src={profilePhoto} alt="Venkata Palaka" className="profile-photo" />
        <h1>Venkata Palaka</h1>
        <p>Software Engineer</p>
      </div>
      <div className="icons-section">
        <a href="https://www.linkedin.com/in/venkatagangadharnaveenpalaka/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="https://github.com/naveenpvg3" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
        <a href="https://leetcode.com/venkata_palaka/" target="_blank" rel="noopener noreferrer">
          <img src={leetcodeIcon} alt="LeetCode" className="icon" />
        </a>
        <a href="mailto:venkatapalaka23@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email" className="icon" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
