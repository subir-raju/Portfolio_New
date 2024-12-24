import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("ex1");

  const experienceDetails = {
    ex1: {
      title: "HypeScout Pte. Ltd.",
      position: "Full Stack Developer",
      duration: " July 2021 - January 2023",
      description:
        "Currently pursuing a Master's degree in Data Science, with a focus on AI, Machine Learning, and Data Analytics. Done with all the course works, now focusing mainly on my thesis.",
    },
    ex2: {
      title: "North South University",
      position: "Masters in Computational Sciences",
      duration: "August 2022 - May 2023",
      description:
        "Before starting my masters in data science in Finland, I was admitted to FUB in the Computational Sciences program for 2 semesters. But Due to long visa waiting period, I choose to move Finland, instead of Germany.",
    },
    NSU: {
      title: "North South University (NSU)",
      position: "Bachelor of Science in Computer Science & Engineering",
      duration: "January 2017 - May 2021",
      description:
        "Completed my undergraduation with distinction (Magna Cum Laude). My major in bachelor was in Networking.",
    },
  };

  const handleUniversityChange = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <div className="education-container">
      <h1>My Experience</h1>
      <div className="education-content">
        <div className="university-list">
          <button
            onClick={() => handleUniversityChange("ex1")}
            className={selectedUniversity === "ex1" ? "selected" : ""}
          >
            HypeScout
          </button>
          <button
            onClick={() => handleUniversityChange("ex2")}
            className={selectedUniversity === "ex2" ? "selected" : ""}
          >
            North South University
          </button>
          <button
            onClick={() => handleUniversityChange("NSU")}
            className={selectedUniversity === "NSU" ? "selected" : ""}
          >
            Tampere University
          </button>
        </div>
        <div className="education-details">
          <h2>{experienceDetails[selectedUniversity].title}</h2>
          <p>
            <strong></strong>{" "}
            {experienceDetails[selectedUniversity].position}
          </p>
          <p>
            <strong></strong>{" "}
            {experienceDetails[selectedUniversity].duration}
          </p>
          <p>
            <strong></strong> {experienceDetails[selectedUniversity].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
