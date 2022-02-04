import { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { devPortfolio, flashcardApp, reminderApp } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("portfolio");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "portfolio",
      title: "Portfolio Site",
    },
    {
      id: "flashcards",
      title: "Flashcards App",
    },
    {
      id: "event-reminder",
      title: "Reminder App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "portfolio":
        setData(devPortfolio);
        break;
      case "flashcards":
        setData(flashcardApp);
        break;
      case "event-reminder":
        setData(reminderApp);
        break;
      default:
        setData(devPortfolio);
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
            <h3 className="portfolio-item-h3">{d.title}</h3>
            <img src={d.image} alt="" className="portfolio-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
