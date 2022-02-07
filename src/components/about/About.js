import "./about.scss";

import React from "react";

export default function About() {
  return (
    <>
      <div className="about-container">
        <h1>About</h1>
        <div className="about-text"></div>
        <div className="tech-stack">
          <img src="assets/postgresql-icon.svg" alt="" className="tech-icons" />
          <img src="assets/nodejs-icon.svg" alt="" className="tech-icons" />
          <img src="assets/react-icon.svg" alt="" className="tech-icons" />
          <img src="assets/auth0-icon.svg" alt="" className="tech-icons" />
          <img src="assets/javascript.svg" alt="" className="tech-icons" />
          <img src="assets/sass.svg" alt="" className="tech-icons" />
          <img src="assets/css.svg" alt="" className="tech-icons" />
          <img src="assets/html5-icon.svg" alt="" className="tech-icons" />
          <img src="assets/material-ui-1.svg" alt="" className="tech-icons" />
          <img src="assets/netlify.svg" alt="" className="tech-icons" />
          <img src="assets/heroku-4.svg" alt="" className="tech-icons" />
          <img src="assets/figma-1.svg" alt="" className="tech-icons" />
          <img
            src="assets/visual-studio-code-1.svg"
            alt=""
            className="tech-icons"
          />
          <img src="assets/express-js.png" alt="" className="tech-icons" />
          <img src="assets/jest-icon.svg" alt="" className="tech-icons" />
        </div>
      </div>
    </>
  );
}
