import "./about.scss";

import React from "react";

export default function About() {
  return (
    <>
      <div className="about">
        <h1>About</h1>
        <div className="about-container">
          <div className="about-left">
            <h3 className="mr10">Lorem about me</h3>
            <p>
              Growl at dogs in my sleep reaches under door into adjacent room.
              Spend six hours per day washing, but still have a crusty butthole
              love you, then bite you, proudly present butt to human sleeping in
              the box. Purrr purr littel cat,
            </p>
          </div>
          <div className="about-right">
            <img
              src="assets/postgresql-icon.svg"
              alt=""
              className="tech-icons"
            />
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
      </div>
    </>
  );
}
