import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navRef = useRef(null);
  const underlineRef = useRef(null);
  const location = useLocation();
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const navLinks = navRef.current.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      if (link.classList.contains("active")) {
        setUnderlineStyle({
          left: link.offsetLeft,
          width: link.offsetWidth,
        });
      }
    });
  }, [location.pathname]);

  return (
    <nav className="header">
      <h2>Mohan Raj S</h2>
      <ul className="nav-links" ref={navRef}>
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
        <li><NavLink to="/work" className="nav-link">Work</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        <div className="underline" ref={underlineRef} style={underlineStyle}></div>
      </ul>
    </nav>
  );
};

export default Header;
