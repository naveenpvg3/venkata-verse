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
  // Resources categorized under different sections
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
    { name: "Y Combinator", link: "https://www.ycombinator.com" }
  ];

  const aiResources = [
    { name: "DeepLearning.AI", link: "https://www.deeplearning.ai" },
    { name: "Google AI", link: "https://ai.google" },
    { name: "Fast.ai", link: "https://www.fast.ai" },
    { name: "OpenAI", link: "https://www.openai.com" }
  ];

  const financeManagementResources = [
    { name: "Investopedia", link: "https://www.investopedia.com" },
    { name: "Personal Finance by Dave Ramsey", link: "https://www.ramseysolutions.com" },
    { name: "NerdWallet", link: "https://www.nerdwallet.com" },
    { name: "Morningstar", link: "https://www.morningstar.com" }
  ];

  return (
    <div className="learning-resources">
      <h2>Learning Resources</h2>
      <h3>Startup Resources</h3>
      <ResourceSection title="Incubators" resources={incubators} />
      <ResourceSection title="Venture Capitalists" resources={ventureCapitalists} />
      <ResourceSection title="Startup Accelerators" resources={startupAccelators} />

      <h3>AI Resources</h3>
      <ResourceSection title="Artificial Intelligence Platforms and Courses" resources={aiResources} />

      <h3>Finance Management Resources</h3>
      <ResourceSection title="Finance Management and Investment Tools" resources={financeManagementResources} />
    </div>
  );
};

export default LearningResources;
