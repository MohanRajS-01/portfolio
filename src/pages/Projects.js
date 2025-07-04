import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Clothing Delivery Service",
    type: "Full-Stack Web",
    oneLine: "Real-time GPS clothing delivery app.",
    desc: "Successfully launched a web app that delivers clothing within 30 minutes with real-time GPS tracking. Efficiently managed key vendor partnerships and handled urgent delivery needs. Implemented secure user authentication, robust order system, and full customer experience."
  },
  {
    title: "Railway Ticket Booking App",
    type: "UI/UX Designer",
    oneLine: "Simplified ticket booking UX design.",
    desc: "Designed an intuitive and user-friendly Railway ticket booking prototype. Created wireframes, mockups, and user flow diagrams using Figma to solve usability challenges."
  },
  {
    title: "AI Short Film Creation",
    type: "AI Tools Expert",
    oneLine: "AI-powered filmmaking and editing.",
    desc: "Showcased the innovative potential of AI in storytelling. Explored AI-driven video editing and script generation to enhance production quality.",
    link: "https://youtu.be/xMYjHJaADx0?si=wAC2K3h2McL0J1-V"
  },
  {
    title: "Chatbot for Cinema Info",
    type: "NLP-Based Chatbot",
    oneLine: "AI chatbot for multilingual movie info.",
    desc: "Built a multilingual, multimedia chatbot using NLP to deliver movie info via text, voice, and media. Supports interactive AI-based conversation about cinema.",
    link: "https://mohanrajs-01.github.io/moviebot"

  },
  {
    title: "Agri Moto Tiller",
    type: "Hardware + AI",
    oneLine: "Smart AI-powered farming tiller.",
    desc: "Transformed a motorcycle into a smart AI-powered tiller. Integrated remote control and intelligent automation for modernizing small-scale farming.",
    link: "https://youtu.be/vxV7-4yZoMA?si=gOlVkq4vm-HPa43w"
  },
  {
    title: "Choosify",
    type: "Rest API + Web",
    oneLine: "Five in One Guide platform ",
    desc: "Choosify is a modern multi-platform that helps you discover the best movies, food, music, products, jobs, and places — all in one place.",
    link: "https://mohanrajs-01.github.io/choosify/"
  }
];

const Projects = () => (
  <div className="projects-page">
    <h1 className="projects-title">My Projects</h1>
    <div className="projects-grid">
      {projects.map((p, i) => (
        <div className="flip-card" key={i}>
          <div className="flip-inner">
            <div className="flip-front">
              <h2>{p.title}</h2>
              <span className="project-type">{p.type}</span>
              <p className="one-line">{p.oneLine}</p>
            </div>
            <div className="flip-back">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              {p.link && (
                <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link">
                  view project
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
