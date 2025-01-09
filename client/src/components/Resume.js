import React from 'react';
import './../styles/Resume.css';

const Resume = ({id}) => {
  return (
    <section className="resume" id={id}>
      <h2>Resume</h2>
      <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
        Download my resume
      </a>
    </section>
  );
};

export default Resume;
