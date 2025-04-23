// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/my-photo.jpg';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png';
import leetcodeIcon from '../assets/leetcode-icon.png';
import emailIcon from '../assets/email-icon.png';  // Import the email icon

const Header = () => (
  <header className="header">
    <div className="header-content">
      <motion.div 
        className="profile-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={profilePhoto} 
          alt="Venkata Gangadhar Palaka" 
          className="profile-photo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Venkata Gangadhar Palaka
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Software Engineer
        </motion.p>
      </motion.div>
      <motion.div 
        className="icons-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <motion.a 
          href="https://www.linkedin.com/in/venkatagangadharpalaka/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </motion.a>
        <motion.a 
          href="https://github.com/naveenpvg3" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={githubIcon} alt="GitHub" className="icon" />
        </motion.a>
        <motion.a 
          href="https://leetcode.com/venkata_palaka/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={leetcodeIcon} alt="LeetCode" className="icon" />
        </motion.a>
        <motion.a 
          href="mailto:venkatagangadharpalaka@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={emailIcon} alt="Email" className="icon" />
        </motion.a>
      </motion.div>
    </div>
  </header>
);

export default Header;
