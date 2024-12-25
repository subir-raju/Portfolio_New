import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import profile from "../../assets/profile.png";
import arrow_icon from "../../assets/arrow_icon.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>
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
                <img src={arrow_icon} alt=" " />
              </div>
            </Link>
          </div>
          <div className="about-para">
            <h1>Education</h1>
            <p>Tampere University, Data Science</p>
            <Link to="/education" className="about-showmore-link">
              <div className="about-showmore">
                <p>See More</p>
                <img src={arrow_icon} alt=" " />
              </div>
            </Link>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
