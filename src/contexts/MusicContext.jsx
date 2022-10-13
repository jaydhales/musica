import axios from "axios";
import { createContext, useEffect, useState } from "react";

const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  // All logic stays here
  const apiUrl = "https://cors-anywhere.herokuapp.com/api.deezer.com/";
  const [hero, setHero] = useState();
  const [chartsData, setChartsData] = useState();
  const [release, setRelease] = useState();
  const [popular, setPopular] = useState();
  const [screenWidth, setScreenWidth] = useState();
  const [details, setDetails] = useState();

  //Get Screen Width
  window.onload = (e) => setScreenWidth(window.innerWidth);
  window.onresize = (e) => setScreenWidth(e.target.innerWidth);

  const fetchData = async (path) => {
    return (
      await axios.get("/api/" + path)
    ).data;
  };

  useEffect(() => {
    async function runData() {
      setHero(await fetchData("playlist/6059358144"));
      setChartsData(await fetchData("chart/0/playlists?index=0&limit=3"));
      setRelease(await fetchData("chart/0/albums"));
      setPopular(await fetchData("chart/0/albums"));
    }

    runData();
  }, []);

  return (
    <MusicContext.Provider
      value={{
        hero,
        chartsData,
        release,
        popular,
        screenWidth,
        details,
        setDetails,
        fetchData,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicContextProvider };
