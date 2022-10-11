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

function App() {
  const path = useLocation();
  if (path.pathname === "/") path.pathname = "/home";

  return (
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
  );
}

export default App;
