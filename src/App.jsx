import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MusicContext } from "./contexts/MusicContext";

// Import Components
import Menu from "./components/Menu";
import Search from "./components/Search";
import Player from "./components/Player.jsx";
import ObjectSvg from "./components/ObjectSvg";
// Import Routes
import Home from "./routes/Home";
import Collections from "./routes/Collections";
import Radio from "./routes/Radio";
import Library from "./routes/Library";
import Details from "./routes/Details";

import "./styles/App.css";
import logo from "./assets/logo.svg";
import bars from "./assets/bars.svg";

function App() {
  const path = useLocation();
  const {
    detailsBg,
    setDetails,
    setDetailsBg,
    isNavOpen,
    setNavOpen,
    screenWidth,
  } = useContext(MusicContext);
  if (path.pathname === "/") path.pathname = "/home";

  useEffect(() => {
    if (path.pathname === "/home" || "/collections" || "/library" || "radio") {
      setDetailsBg("");
      setDetails("");
    }
    screenWidth < 768 && setNavOpen(false);
  }, [path.pathname]);

  // Set Details Background  to current music
  document.getElementById("root").style.backgroundImage = `url(${detailsBg})`;
  const bodyClass = detailsBg !== "" ? "body withBg" : "body noBg";

  return (
    <div className={bodyClass}>
      <div className="app">
        <header>
          <a
            href="#"
            onClick={(e) => setNavOpen(!isNavOpen)}
            className="mobile-btn"
          >
            <img src={bars} alt="" />
          </a>

          <img src={logo} alt="Musica Logo" className="p-1" />
          <Search />
        </header>

        <div className="main">
          <Menu />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/library" element={<Library />} />
            <Route path="/:type/:query" element={<Details />} />

            <Route path="*" element={<>Not Found</>} />
          </Routes>
          <Player />
        </div>
      </div>
    </div>
  );
}

export default App;
