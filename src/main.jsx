import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MusicContextProvider } from "./contexts/MusicContext";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MusicContextProvider>
      <Router>
        <App />
      </Router>
    </MusicContextProvider>
  </React.StrictMode>
);
