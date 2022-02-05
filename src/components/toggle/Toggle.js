import React from "react";
import "./toggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function Toggle() {
  return (
    <div className="toggle-div">
      <FontAwesomeIcon icon={faSun} className="toggle-icon mr10" />
      <FontAwesomeIcon icon={faMoon} className="toggle-icon" />
      <div className="toggle-button"></div>
    </div>
  );
}
