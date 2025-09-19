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
        "I am pursuing a Master’s in Data Science at Tampere University, focusing on machine learning, AI, and data analytics. Through courses such as Advanced Machine Learning, Data Mining and Visualization, Statistical Methods for Data Analysis, and Big Data Analytics, I’ve gained hands-on experience in building AI-driven applications, designing machine learning models for anomaly detection and predictive analytics, and working with large-scale datasets. My studies have also strengthened my data preprocessing, feature engineering, and model evaluation skills, equipping me to turn complex data into actionable insights and practical solutions.",
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
        "I completed my Bachelor’s in Computer Science & Engineering at North South University, where I gained a strong foundation in software development, algorithms, and system design. I developed full-stack applications during my studies, worked on database design, and learned to implement efficient data structures and algorithms. My undergraduate projects and research experience allowed me to apply theoretical knowledge to real-world problems and sparked my interest in AI and machine learning.",
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
