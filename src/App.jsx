import { Route, Routes, useLocation } from "react-router-dom";
// Import Components
import Menu from "./components/Menu";
import Search from "./components/Search";
// Import Routes
import Home from "./routes/Home";
import Collections from "./routes/Collections";
import Radio from "./routes/Radio";
import Library from "./routes/Library";
import Details from "./routes/Details";

import "./styles/App.css";
import logo from "./assets/logo.svg";
import { useContext, useEffect } from "react";
import { MusicContext } from "./contexts/MusicContext";

function App() {
  const path = useLocation();
  const { detailsBg,setDetails, setDetailsBg } = useContext(MusicContext);
  if (path.pathname === "/") path.pathname = "/home";

  useEffect(() => {
    if (path.pathname === "/home" || "/collections" || "/library" || "radio") {
      setDetailsBg("")
      setDetails('')
    };

  }, [path]);

  // Set Background  to current music
  document.getElementById("root").style.backgroundImage = `url(${detailsBg})`;

  const bodyClass = detailsBg !== "" ? "body withBg" : "body noBg";

  return (
    <div className={bodyClass}>
      <div className="app">
        <header>
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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
