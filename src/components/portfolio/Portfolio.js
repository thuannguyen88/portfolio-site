import { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { allPortfolio, groupProjects, soloProjects } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "projects",
      title: "Latest Works",
    },
    {
      id: "group",
      title: "Group Projects",
    },
    {
      id: "solo",
      title: "Solo Projects",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(allPortfolio);
        break;
      case "group":
        setData(groupProjects);
        break;
      case "solo":
        setData(soloProjects);
        break;
      default:
        setData(allPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul className="portfolio-tag-list">
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="portfolio-container">
        {data.map((d) => (
          <div className="portfolio-item">
            <div className="buttons-div">
              <button className="btn-demo mb10">
                <FontAwesomeIcon icon={faLink} className="icon mr10" />
                See demo
              </button>
              <button className="btn-code">
                <FontAwesomeIcon icon={faGithub} className="icon mr10" />
                See code
              </button>
            </div>

            <img src={d.image} alt="" className="portfolio-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
