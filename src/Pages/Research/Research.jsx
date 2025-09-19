import React, { useState } from "react";
import "./Research.css";

const Research = () => {
  const [selectedResearch, setSelectedResearch] = useState(null);

  const researchList = [
    {
      id: 1,
      title:
        "Analyzing AI-Simulated Roundtable Discussions: Extracting Structured Insights from LLM-Generated Dialogues",
      details:
        "My thesis at GPT Lab explores AI-simulated roundtable discussions, where multiple AI agents with distinct personas engage in structured conversations on predefined topics. I developed a web interface for manually inputting discussions and extracting insights, applying NLP and machine learning techniques to analyze sentiment, coherence, and topic evolution. The project also features graph-based visualizations to track idea flow and influence among agents, providing a novel approach to studying multi-agent dialogues and decision-making.",
    },
    {
      id: 2,
      title:
        "Implementation of a Web-based Technology for Tracking Readymade Garments Manufacturing Defects",
      details:
        "Readymade garments (RMG) manufacturing defects carry a significant role in reducing the quality of the products. Real-time production data tracking can play an important role to track those defects. A web-based software like InTrack can be a pioneer to produce that trackable data. InTrack is a Quality Control (QC) web-application to track RMG manufacturing defects using production line data. It requires complex architectural decisions for the backend and intricate management of frontend states and components. We have studied in-depth into the engineering of such a data intensive web-application and applicable for the RMG industies.",
    },
    {
      id: 3,
      title:
        "InTrack |A web-based technology to help the garments industry to detect defects in readymade garments",
      details:
        "As part of the Senior Design Project, developed a prototype of a web-based data-driven technology that can help detect defects in manufacturing readymade garments in real->me.",
    },
    {
      id: 4,
      title:
        "Docket | A website to track and share movies, TV shows, anime, games, and books.",
      details:
        "As part of Junior Design Projects, developed a website through which users can keep track of movies, TV shows, anime, games and books they watched/played/read or are watching/playing/ reading and pos>ng reviews/blogs.",
    },
    {
      id: 5,
      title:
        "Comparison of Different Convolutional Neural Network Architectures in classifying Dhaka City Traffic",
      details:
        "In this research, our team explored few Convolutional Neural Network(CNN) architectures and compared their results for classifying traffic patterns in Dhaka city. We tried to identify the most effective model for accurately identifying and cateforizing vehicle types and road conditions. We assessed the CNN architectures' performances by fine tuning the parameters and optimizing models to achieve the best classification accuracy. This research can contribute to more intelligent traffic management systems and support real-time decision making for urban planning.",
    },
  ];

  const handleResearchClick = (id) => {
    if (selectedResearch === id) {
      setSelectedResearch(null);
    } else {
      setSelectedResearch(id);
    }
  };

  return (
    <div className="research-page">
      <h1>My Research</h1>

      <div className="research-list">
        {researchList.map((research) => (
          <div key={research.id} className="research-item">
            <h2
              onClick={() => handleResearchClick(research.id)}
              className={`research-title ${
                selectedResearch === research.id ? "active" : ""
              }`}
            >
              {research.title}
            </h2>

            {selectedResearch === research.id && (
              <div className="research-details">
                <p>{research.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
