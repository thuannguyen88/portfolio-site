import { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { allPortfolio, reactApps, backendApps } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("portfolio");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "portfolio",
      title: "Latest Works",
    },
    {
      id: "react",
      title: "React Apps",
    },
    {
      id: "backend",
      title: "Flashcard REST API",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "portfolio":
        setData(allPortfolio);
        break;
      case "react":
        setData(reactApps);
        break;
      case "backend":
        setData(backendApps);
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
              <button className="btn-demo mb10">See demo</button>
              <button className="btn-code">See code</button>
            </div>

            <img src={d.image} alt="" className="portfolio-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
