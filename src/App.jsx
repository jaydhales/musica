import { Route, Routes } from "react-router-dom";
// Import Components
import Menu from "./components/Menu";
import Search from "./components/Search";
// Import Routes
import Home from "./routes/Home";
import Collections from "./routes/Collections";
import Radio from "./routes/Radio";
import Library from "./routes/Library";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="main">
        <Search />
        <Routes>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="radio" element={<Radio />} />
          <Route path="library" element={<Library />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
