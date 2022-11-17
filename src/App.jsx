import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MusicContext } from "./contexts/MusicContext";

// Import Components
import Menu from "./components/Menu";
import Search from "./components/Search";
import Player from "./components/Player";
import ObjectSvg from "./components/ObjectSvg";

// Import Routes
import Home from "./routes/Home";
import Collections from "./routes/Collections";
import Radio from "./routes/Radio";
import Library from "./routes/Library";
import Details from "./routes/Details";

// Import Assets and styles
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
    setScreenWidth,
  } = useContext(MusicContext);

  // route index update to home
  if (path.pathname === "/") path.pathname = "/home";

  useEffect(() => {
    //
    if (
      path.pathname.includes("playlist") ||
      path.pathname.includes("artist")
    ) {
    } else {
      setDetailsBg("");
      setDetails("");
    }
  }, [path.pathname]);

  // Get screen width on window resize
  useEffect(() => {
    const resizeListener = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  // Close mobile nav when width is above 800px and path changes
  useEffect(() => {
    if (screenWidth > 800) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth < 800) {
      setNavOpen(false);
    }
  }, [path]);

  // Set Details Background  to current music
  document.getElementById("root").style.backgroundImage = `url(${detailsBg})`;
  const bodyClass = detailsBg !== "" ? "body withBg" : "body noBg";

  return (
    <div className={bodyClass}>
      <div className="app">
        <header>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setNavOpen(!isNavOpen);
            }}
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
