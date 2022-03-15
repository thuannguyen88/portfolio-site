import Navbar from "./components/navbar/Navbar";
import Intro from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import References from "./components/references/References";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Toggle from "./components/toggle/Toggle";
import "./app.scss";
import { useState, useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <Portfolio />
        <References />
        <Contact />
      </div>
      <Toggle />
    </div>
  );
}

export default App;
