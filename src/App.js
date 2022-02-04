import Navbar from "./components/navbar/Navbar";
import Intro from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import References from "./components/references/References";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Toggle from "./components/toggle/Toggle";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Toggle />
      <div className="sections">
        <Intro />
        <Portfolio />
        <References />
        <Contact />
      </div>
    </div>
  );
}

export default App;
