import "./references.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function References() {
  const referencesData = [
    {
      id: 1,
      name: "Ashley",
      title: "Backend Engineer",
      img: "assets/profile-pic-1.png",
      icon: "assets/twitter.png",
      description: `Growl at dogs in my sleep reaches under door into adjacent room.
    Spend six hours per day washing, but still have a crusty butthole
    love you, then bite you, proudly present butt to human sleeping in
    the box. Purrr purr littel cat,`,
    },
    {
      id: 2,
      name: "Thi",
      title: "Devops Engineer",
      img: "assets/profile-pic-1.png",
      icon: "assets/twitter.png",
      description: `Growl at dogs in my sleep reaches under door into adjacent room.
    Spend six hours per day washing, but still have a crusty butthole
    love you, then bite you, proudly present butt to human sleeping in
    the box. Purrr purr littel cat,`,
    },
  ];

  return (
    <div className="references" id="references">
      <h1>References</h1>
      <div className="references-container">
        {referencesData.map((d) => (
          <div className="references-card">
            <div className="card-top">
              <FontAwesomeIcon icon={faQuoteLeft} className="left" />
            </div>
            <div className="card-center">{d.description}</div>
            <div className="card-bottom">
              <img src={d.img} alt="" className="user" />
              <div className="card-name-title">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
