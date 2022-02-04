import "./hero.scss";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Javascript", "React", "Node", "Express", "PostgreSQL"],
      backDelay: 1000,
    });
  }, []);

  return (
    <>
      <div className="intro" id="intro">
        <div className="left">
          <div className="background-img"></div>
          <div className="img-container">
            <img src="assets/duck-logo.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="hero-text">
            <h2>👋 Hi there! I'm</h2>
            <h1>Thuan Nguyen</h1>
            <h3>
              Full Stack Developer: <span ref={textRef}></span>
            </h3>
            <p>
              A school of code bootcamper, honing my skills as a developer by
              building websites and applications that help solve peoples'
              problems
            </p>

            <a href="#portfolio">
              <ArrowCircleDownIcon
                className="arrow-down"
                sx={{ fontSize: 50 }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
