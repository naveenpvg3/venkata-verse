// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="work-experience" className="work-experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>
      <hr className="divider" />
      <motion.div 
        className="experience"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="job" variants={itemVariants}>
          <h3>Software Developer Consultant</h3>
          <p className="company">SCS Tech Services</p>
          <p className="date">Jan 2024 - Present</p>
        </motion.div>
        <motion.div className="job" variants={itemVariants}>
          <h3>Software Development Engineer</h3>
          <p className="company">Amazon Web Services (AWS)</p>
          <p className="date">Sep 2022 - Dec 2023</p>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Internships
      </motion.h2>
      <hr className="divider" />
      <motion.div 
        className="internships"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="internship" variants={itemVariants}>
          <h3>Machine Learning Intern</h3>
          <p className="company">Tech For Good Inc.</p>
          <p className="date">Jun 2021 – Aug 2022</p>
        </motion.div>
        <motion.div className="internship" variants={itemVariants}>
          <h3>Applied Data Science Intern</h3>
          <p className="company">Basil Labs</p>
          <p className="date">Oct 2021 – Dec 2021</p>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Research Experience
      </motion.h2>
      <hr className="divider" />
      <motion.div 
        className="research"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="research-role" variants={itemVariants}>
          <h3>Graduate Researcher</h3>
          <p className="company">The George Washington University</p>
          <p className="date">Oct 2021 - Jun 2022</p>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Teaching Assistantship
      </motion.h2>
      <hr className="divider" />
      <motion.div 
        className="teaching-assistant"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="teaching-role" variants={itemVariants}>
          <h3>Teaching Assistant</h3>
          <p className="company">The George Washington University</p>
          <p className="date">Aug 2021 - Dec 2021</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
