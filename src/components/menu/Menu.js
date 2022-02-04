import "./menu.scss";
import Menulist from "../menulist/MenuList";

import React from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div>
      <Menulist menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

/* <div className={"menu " + (menuOpen && "active")}>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#intro">Home</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#works">Works</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#references">References</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#contact">Contact</a>
      </li> */
