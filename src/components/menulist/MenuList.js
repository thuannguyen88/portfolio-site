import "./menulist.scss";

export default function MenuList({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <li className="menu-list" onClick={() => setMenuOpen(false)}>
        <a href="#intro">Home</a>
      </li>
      <li className="menu-list" onClick={() => setMenuOpen(false)}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li className="menu-list" onClick={() => setMenuOpen(false)}>
        <a href="#references">References</a>
      </li>
      <li className="menu-list" onClick={() => setMenuOpen(false)}>
        <a href="#contact">Contact</a>
      </li>
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
