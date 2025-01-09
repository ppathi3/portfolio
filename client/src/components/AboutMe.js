import React from "react";
import "./../styles/AboutMe.css";

const AboutMe = ({ id }) => {
  return (
    <section className="about-me" id={id}>
      <h2>About Me</h2>
      <p>
      Hi, I’m Pooja Pathi, a passionate Software Engineer with over three years of experience turning ideas into impactful digital solutions. I specialize in crafting seamless front-end experiences and building robust backend systems using technologies like JavaScript, React, Node.js, and AWS. Whether it’s developing SDKs, optimizing workflows, or collaborating with teams to bring innovative products to life, I thrive on solving complex challenges.
      </p><p>
Beyond coding, I’m a lifelong learner who enjoys exploring new technologies, contributing to meaningful projects, and constantly pushing the boundaries of what’s possible. Let’s create something amazing together!
      </p>
    </section>
  );
};

export default AboutMe;
