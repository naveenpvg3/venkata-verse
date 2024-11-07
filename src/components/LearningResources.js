// src/components/LearningResources.js
import React from 'react';
import './LearningResources.css';

// Reusable component for displaying each subsection of resources
const ResourceSection = ({ title, resources }) => (
  <div className="resource-subsection">
    <h4>{title}</h4>
    <ul>
      {resources.map((resource, index) => (
        <li key={index}>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            {resource.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const LearningResources = () => {
  // Resources categorized under Incubators and Venture Capitalists
  const incubators = [
    { name: "Techstars", link: "https://www.techstars.com" }
    // Add more incubator resources here
  ];

  const ventureCapitalists = [
    { name: "Ganas VC", link: "https://www.ganas.vc" },
    { name: "Oasis Capital", link: "https://oasiscap.vc" }
    // Add more venture capitalist resources here
  ];

  const startupAccelators = [
  { name: "Y Combinator", link: "https://www.ycombinator.com"}
  ];

  return (
    <div className="learning-resources">
      <h2>Learning Resources</h2>
      <h3>Startup Resources</h3>
      <ResourceSection title="Incubators" resources={incubators} />
      <ResourceSection title="Venture Capitalists" resources={ventureCapitalists} />
       <ResourceSection title="StartUp Accelators" resources={startupAccelators} />
    </div>
  );
};

export default LearningResources;
