import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-wrapper">
      <h1 className="zoom-fade-heading">Hi, I'm Mohan Raj</h1>
    <div className="glow-ring-wrapper">
  
     <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Mohan Raj" className="profile-img" />
      <div className="glow-arc"></div>
      </div>
     <p className="intro-description">
      
                     Motivated Full Stack Web Developer with proven ability to build scalable, responsive web applications. Skilled in both front-end and back-end development using React, JavaScript, Node.js, PHP, and MySQL. Delivered impactful projects that improved user experience and reduced delivery time by up to 50%. Eager to contribute strong technical and collaboration skills to dynamic development teams.
      </p>
      <p className="intro-description">
        Proficient in designing and developing secure, scalable RESTful APIs and integrating third-party services like payment gateways and cloud storage. Focused on performance optimization, data protection, and seamless cross-platform compatibility. Ensured robust backend architecture that supports fast data retrieval and enhances user experience across web and mobile applications.
      </p>
      <div className="Button">
      <button className="about-button" onClick={() => navigate("/about")}>Want to know about me? Click here</button>
      </div>
    </div>
  );
};

export default Home;