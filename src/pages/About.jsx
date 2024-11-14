
import React from 'react';
import '../styles/About.css';

const About = () => {
  const technologies = [
    {
      name: 'MongoDB',
      
      logo: '/images/mongodb-logo.png',
      alt: 'MongoDB Logo'
    },
    {
      name: 'Express.js',
      logo: '/images/express-logo.png',
      alt: 'Express.js Logo'
    },
    {
      name: 'React',
      logo: '/images/react-logo.png',
      alt: 'React Logo'
    },
    {
      name: 'Node.js',
      logo: '/images/nodejs-logo.png',
      alt: 'Node.js Logo'
    }
  ];

  return (
    <div className="about-container">
      <h1>About Connectify</h1>

      <section className="vision-section">
        <h2>Project Vision</h2>
        <p>
          Connectify was developed to address inefficiencies in university communication systems. 
          It aims to create a unified platform where all stakeholders can access and manage 
          academic and administrative information seamlessly.
        </p>
      </section>

      <section className="team-section">
        <h2>Development Team</h2>
        <div className="team-members">
          <h3>Team Members:</h3>
          <ul>
            <li>Rohan Patel</li>
            <li>Yuvraj Rathod</li>
            <li>Venish Sureliya</li>
            <li>Sagar Bheda</li>
          </ul>
          <div className="guide">
            <p><strong>Project Guide:</strong> Prof. Bhavisha Suthar</p>
          </div>
          <div className="institution">
            <p><strong>Institution:</strong> U.V. Patel College of Engineering, Ganpat University</p>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <h2>Technologies Used</h2>




        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={tech.logo} alt={tech.alt} className="tech-logo" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="future-section">
        <h2>Future Goals</h2>
        <p>
          Plans include integrating external systems for advanced analytics, expanding user roles, 
          and continuously enhancing the platform based on user feedback.
        </p>
      </section>
    </div>
  );
};


export default About;