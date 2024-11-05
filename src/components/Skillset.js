// src/components/Skillset.js
import React from 'react';

const Skillset = () => (
  <section id="skillset" className="skillset">
    <h2>Technical Skills</h2>
    <div className="skill-category">
        <ul>
          <li>Programming Languages: C, C++, Java, SQL, JavaScript, Python, R, SAS</li>
          <li>Web Technologies: HTML, CSS, JavaScript, jQuery, Ajax, JSON, XML, TypeScript</li>
          <li>Frameworks/Libraries: ReactJS, Next.js, Spring Boot, Spring MVC, Spring Cloud, Spring Data JPA</li>
          <li>Big Data: ETL, PySpark, Hadoop, Data Modeling, Data Mining, Geopandas, Geospatial</li>
          <li>Machine Learning: Data Preprocessing, Supervised Learning, Unsupervised Learning, Deep Learning, NLP</li>
          <li>Tools: Sklearn, TensorFlow, PyTorch, Keras, Spacy, NLTK, Git, Docker, Kubernetes, Jenkins, SOAP UI, Swagger UI, GraphQL, Mockito, JUnit, Kafka</li>
          <li>Cloud Platforms: AWS (SQS, SNS, S3, EC2, CloudWatch, CloudFormation), Google Cloud Platform</li>
          <li>Database Systems: MySQL, PostgreSQL, MongoDB, Oracle, Cassandra</li>
          <li>Methodologies: SDLC, Agile, Scrum-Ban, Kanban</li>
        </ul>

    </div>
    {/* Add more skill categories */}
  </section>
);

export default Skillset;
