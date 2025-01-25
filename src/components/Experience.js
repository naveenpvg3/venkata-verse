// src/components/Experience.js
import React from 'react';

const Experience = () => (
  <section id="work-experience" className="work-experience">
    <h2>Professional Experience</h2>
    <hr className="divider" />
    <div className="experience">
      {/* Job 1 */}
      <div className="job">
        <h3>Software Developer Consultant</h3>
        <p className="company">SCS Tech Services (Client: M&T Bank)</p>
        <p className="date">Jan 2024 - Present</p>
      </div>
      {/* Job 2 */}
      <div className="job">
        <h3>Software Development Engineer</h3>
        <p className="company">Amazon Web Services (AWS)</p>
        <p className="date">Sep 2022 - Dec 2023</p>
      </div>
    </div>

    <h2>Internships</h2>
    <hr className="divider" />
    <div className="internships">
      {/* Internship 1 */}
      <div className="internship">
        <h3>Machine Learning Intern</h3>
        <p className="company">Tech For Good Inc.</p>
        <p className="date">Jun 2021 – Aug 2022</p>
      </div>
      {/* Internship 2 */}
      <div className="internship">
        <h3>Applied Data Science Intern</h3>
        <p className="company">Basil Labs</p>
        <p className="date">Oct 2021 – Dec 2021</p>
      </div>
    </div>

    <h2>Research Experience</h2>
    <hr className="divider" />
    <div className="research">
      {/* Researcher */}
      <div className="research-role">
        <h3>Graduate Researcher</h3>
        <p className="company">The George Washington University</p>
        <p className="date">Oct 2021 - Jun 2022</p>
      </div>
    </div>

    <h2>Teaching Assistantship</h2>
    <hr className="divider" />
    <div className="teaching-assistant">
      {/* Teaching Assistant */}
      <div className="teaching-role">
        <h3>Teaching Assistant</h3>
        <p className="company">The George Washington University</p>
        <p className="date">Aug 2021 - Dec 2021</p>
      </div>
    </div>
  </section>
);

export default Experience;
