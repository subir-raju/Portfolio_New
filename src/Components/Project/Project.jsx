import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'
import project_data from '../../assets/project_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div id="project" className="project">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
        {project_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt=" " />;
        })}
      </div>
      <Link to="/details" className="project-showmore-link">
        <div className="project-showmore">
          <p>See More</p>
          <img src={arrow_icon} alt=" " />
        </div>
      </Link>
    </div>
  );
}

export default Project