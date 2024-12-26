import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import arrow_icon from "../../assets/arrow_icon.svg";
import skillsData from "../../assets/skillsData";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-right">
          <div className="about-para">
            <h1>Work Experience</h1>
            <p>
              I am Subir, a current master's degree student in data science at
              Tampere University.
            </p>
            <Link to="/experience" className="about-showmore-link">
              <div className="about-showmore">
                <p>See More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </Link>
          </div>
          <div className="about-para">
            <h1>Education</h1>
            <p>Tampere University, Data Science</p>
            <Link to="/education" className="about-showmore-link">
              <div className="about-showmore">
                <p>See More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </Link>
          </div>
          <div className="about-skills-section">
            <h1>Skills</h1>
            <div className="about-skills">
              {skillsData.map((skill, index) => (
                <div key={index} className="about-skill">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
