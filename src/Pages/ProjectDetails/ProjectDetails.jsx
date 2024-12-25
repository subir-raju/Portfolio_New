import React, { useState } from "react";
import "./ProjectDetails.css";
import project_data from "../../assets/project_data1";

const ProjectDetails = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  return (
    <div className="project-details-page">
      <h1 className="project-details-title">
        Project Details
        </h1>
      <div className="project-details-container">
        <div className="project-list">
          {project_data.map((project, index) => (
            <button
              key={index}
              className={`project-list-item ${
                selectedProject === index ? "selected" : ""
              }`}
              onClick={() => handleProjectClick(index)}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div className="project-details">
          <h2>{project_data[selectedProject].title}</h2>
          {project_data[selectedProject].w_img && (
            <img
              src={project_data[selectedProject].w_img}
              alt={project_data[selectedProject].title}
              className="project-image"
            />
          )}
          <p>{project_data[selectedProject].description}</p>
          <div className="project-technologies">
            <div className="tech-icons">
              {project_data[selectedProject].technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  className="tech-icon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
