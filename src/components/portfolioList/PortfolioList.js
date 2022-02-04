import "./portfolio-list.scss";

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portfolio-list active" : "portfolio-list"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
