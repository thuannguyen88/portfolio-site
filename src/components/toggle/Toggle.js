import React, { useContext } from "react";
import "./toggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { ThemeContext } from "../../context";

export default function Toggle() {
  const theme = useContext(ThemeContext);

  const handleToggleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle-div">
      <FontAwesomeIcon icon={faSun} className="toggle-icon mr10" />
      <FontAwesomeIcon icon={faMoon} className="toggle-icon" />
      <div className="toggle-button" onClick={handleToggleClick}></div>
    </div>
  );
}
