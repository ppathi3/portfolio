import React from "react";
import "./../styles/Projects.css";

const Projects = ({id}) => {
  const projects = [
    {
      title: "8-Puzzle Problem Solver",
      description: "A Java-based solver using A* algorithm to solve the 8-puzzle problem.",
    },
    // Add more projects here
  ];

  return (
    <section className="projects" id={id}>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
