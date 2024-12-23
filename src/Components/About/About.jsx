import React from "react";
import { Link } from "react-router-dom"; // Import Link
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
            <div className="about-showmore">
              <p>See More</p>
              <img src={arrow_icon} alt="Arrow" />
            </div>
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
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
