import "./hero.scss";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export default function Intro() {
  return (
    <>
      <div className="intro" id="intro">
        <div className="left">
          <div className="background-img"></div>
          <div className="img-container">
            <img
              src="assets/thuan_profile_picture_1.jpeg"
              alt=""
              className="thuan-profile"
            />
          </div>
        </div>
        <div className="right">
          <div className="hero-text">
            <h2>👋 Hi there! I'm</h2>
            <h1>Thuan Nguyen</h1>
            <h3>Full Stack Developer</h3>
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
