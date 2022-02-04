import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left-nav">
          <div
            className="hamburger-container"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="center-nav">
          <li>
            <a href="#portfolio" className="mr">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#references" className="mr">
              References
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
        <div className="right-nav">
          <div className="toggle-container"></div>
          <FontAwesomeIcon icon={faGithub} className="icon mr10" />
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </div>
      </div>
    </div>
  );
}
