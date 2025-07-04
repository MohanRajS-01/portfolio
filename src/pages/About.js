import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>

      <div className="about-card">
        <h2>Education</h2>
        <ul>
          <li>B. Tech IT | Adhiparasakthi Engineering College | 2022–2026 | CGPA: 8.35</li>
          <li>HSS | Anderson Hr Sec School | 2020 | 75.67%</li>
          <li>SSLC | Sree Narayana Guru School | 2019 | 74.8%</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>Achievements</h2>
        <ul>
          <li>1st Place in Hackathon – Intelligent chatbot</li>
          <li>4× Winner in Inter-college symposiums</li>
          <li>Team leader in multiple projects</li>
          <li>15+ Medals in Drawing & Taekwondo</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>Extra-Curricular Activities</h2>
        <ul>
          <li>Developed a patented Electric Tiller with my team</li>
          <li>Led teams for 3 years, driving collaboration and success</li>
          <li>Winner of 15+ medals in Drawing & Taekwondo</li>
        </ul>
      </div>

      <div className="button-wrapper">
        <button className="project-button" onClick={() => navigate("/projects")}>
          Check My Projects
        </button>
      </div>
    </div>
  );
};

export default About;
