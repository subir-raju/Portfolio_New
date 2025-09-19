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
        "During my role as a Full Stack Developer at HypeScout Pte. Ltd., I worked on building and optimizing server-rendered web applications using React.js and Node.js, with a focus on performance and scalability. I developed RESTful APIs with Python FastAPI to enable efficient communication between the frontend and backend, and I integrated OpenAI NLP models to create a chatbot that automated user queries, reducing the need for manual intervention and enhancing user engagement. In addition, I designed a global state management store to support the application’s complex data needs, collaborated closely with cross-functional teams to deliver user-friendly solutions, and applied testing frameworks to ensure the robustness of speech- and language-driven applications.",
    },
    ex2: {
      title: "North South University",
      position: "Research Assistant",
      duration: "February 2021 - May 2021",
      description: (
        <>
          As a Research Assistant, I designed and implemented a data
          preprocessing and visualization pipeline to handle large-scale
          industrial datasets, enabling cleaner and more insightful analysis. My
          work involved applying machine learning algorithms for anomaly
          detection, which improved the reliability and accuracy of data-driven
          insights. This research led to a peer-reviewed IEEE publication
          (2021), which I co-authored, available{" "}
          <a
            href="https://ieeexplore.ieee.org/document/9498295"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            here
          </a>
          .
        </>
      ),
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
        </div>
        <div className="education-details">
          <h2>{experienceDetails[selectedUniversity].title}</h2>
          <p>
            <strong></strong> {experienceDetails[selectedUniversity].position}
          </p>
          <p>
            <strong></strong> {experienceDetails[selectedUniversity].duration}
          </p>
          <p>
            <strong></strong>{" "}
            {experienceDetails[selectedUniversity].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
