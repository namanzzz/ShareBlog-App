// AboutMe.jsx
import React from 'react';
import './about.css'; // Import the external CSS file

const AboutMe = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Developer</h2>

      <div className="about-section">
        <span className="about-label">Name:</span>
        Naman Matoliya
      </div>

      <div className="about-section">
        <span className="about-label">Contact:</span>
        <a href="mailto:naman.matoliya50962@gmail.com" className='link'>Email</a> | <a href="tel:+919352115099" className='link'>Phone</a>
      </div>

      <div className="about-section">
        <span className="about-label">Education Background:</span>
        <ul className="education-list">
          <li>B.E Computer Science and Engineering - KLE Technological University (2023)</li>
        </ul>

        <span className="about-label">Experience:</span>
        <ul className="education-list">
          <li>Software Engineer Intern - Deevia Software private limited (Jan 2023 - July 2023)</li>
        </ul>
        
      </div>
    </div>
  );
};

export default AboutMe;
