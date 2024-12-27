import React, { useState } from "react";
import "./Education.css";

const Education = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("TAU");

  const educationDetails = {
    TAU: {
      title: "Tampere University (TAU)",
      degree: "Master's in Data Science",
      duration: " August 2023 - Present",
      description:
        "I am currently pursuing a Master's degree in Data Science at Tampere University, where I am honing my skills in machine learning, artificial intelligence, and data analytics. The program offers a deep dive into data-driven problem-solving, statistical methods, and advanced AI technologies, providing me with the knowledge and tools to tackle complex challenges in data science.",
    },
    FUB: {
      title: "Freie Universität Berlin (FUB)",
      degree: "Masters in Computational Sciences",
      duration: "August 2022 - May 2023",
      description:
        "I briefly attended Freie Universität Berlin (FUB) as part of my Computational Sciences master's program. During that time, I learn some of the advanced computational techniques and modeling for data analysis.",
    },
    NSU: {
      title: "North South University (NSU)",
      degree: "Bachelor of Science in Computer Science & Engineering",
      duration: "January 2017 - May 2021",
      description:
        "I completed my Bachelor’s degree in Computer Science and Engineering from North South University (NSU). During my undergraduate studies, I gained a solid foundation in computer science principles, software engineering, and programming languages. I worked on various projects and research, which sparked my interest in data science and machine learning.",
    },
  };

  const handleUniversityChange = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <div className="education-container">
      <h1>My Education History</h1>
      <div className="education-content">
        <div className="university-list">
          <button
            onClick={() => handleUniversityChange("TAU")}
            className={selectedUniversity === "TAU" ? "selected" : ""}
          >
            Tampere University
          </button>
          <button
            onClick={() => handleUniversityChange("FUB")}
            className={selectedUniversity === "FUB" ? "selected" : ""}
          >
            Freie Universität Berlin
          </button>
          <button
            onClick={() => handleUniversityChange("NSU")}
            className={selectedUniversity === "NSU" ? "selected" : ""}
          >
            North South University
          </button>
        </div>
        <div className="education-details">
          <h2>{educationDetails[selectedUniversity].title}</h2>
          <p>
            <strong>Degree:</strong>{" "}
            {educationDetails[selectedUniversity].degree}
          </p>
          <p>
            <strong>Duration:</strong>{" "}
            <i>{educationDetails[selectedUniversity].duration}</i>
          </p>
          <p>
            <strong></strong> {educationDetails[selectedUniversity].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
