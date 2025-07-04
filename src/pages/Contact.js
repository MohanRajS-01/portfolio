import React from "react";
import SocialIcons from "../components/SocialIcons";
import "./Contact.css";

const Contact = () => (
  <div className="contact-page">
    <h1 className="contact-title">Let's Connect</h1>
    <p className="contact-sub">Feel free to reach out through any of the platforms below!</p>
    <div className="icon-wrapper">
      <SocialIcons />
    </div>
  </div>
);

export default Contact;
