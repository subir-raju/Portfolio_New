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
        "Currently pursuing a Master's degree in Data Science, with a focus on AI, Machine Learning, and Data Analytics. Done with all the course works, now focusing mainly on my thesis.",
    },
    FUB: {
      title: "Freie Universität Berlin (FUB)",
      degree: "Masters in Computational Sciences",
      duration: "August 2022 - May 2023",
      description:
        "Before starting my masters in data science in Finland, I was admitted to FUB in the Computational Sciences program for 2 semesters. But Due to long visa waiting period, I choose to move Finland, instead of Germany.",
    },
    NSU: {
      title: "North South University (NSU)",
      degree: "Bachelor of Science in Computer Science & Engineering",
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
            {educationDetails[selectedUniversity].duration}
          </p>
          <p>
            <strong></strong>{" "}
            {educationDetails[selectedUniversity].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
