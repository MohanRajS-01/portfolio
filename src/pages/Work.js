import React from "react";
import "./Work.css";

const workData = [
  {
    title: "Full-Stack Developer Intern",
    company: "Codebind Technologies",
    location: "Chennai",
    date: "08/2024",
    details: [
      "Built a shopping site with payment gateway.",
      "Managed backend integrations, responsive UI."
    ]
  },
  {
    title: "Web Development Intern",
    company: "TechnoHacks",
    location: "Virtual",
    date: "09/2024",
    details: [
      "Built weather app & portfolio site.",
      "Used PHP, MySQL for CRUD apps."
    ]
  },
  {
    title: "Web Development Intern",
    company: "InternPE",
    location: "Virtual",
    date: "05/08/2024 – 01/09/2024",
    details: [
      "Dived deep into building dynamic websites.",
      "Excited to take these skills forward into future projects."
    ]
  },
  {
    title: "Web Designing & Dev Intern",
    company: "Prompt Infotech",
    location: "Virtual",
    date: "19/08/2024 – 23/08/2024",
    details: [
      "Learned HTML, CSS, JavaScript, UI/UX design.",
      "Practiced backend deployment with PHP."
    ]
  }
];

const Work = () => (
  <div className="work-page">
    <h1 className="work-title">Work Experience</h1>
    <div className="work-grid">
      {workData.map((item, index) => (
        <div key={index} className="work-card">
          <h2>{item.title}</h2>
          <span className="company">{item.company} • {item.location}</span>
          <p className="date">{item.date}</p>
          <ul>
            {item.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Work;
