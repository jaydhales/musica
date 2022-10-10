import axios from "axios";
import { createContext, useEffect, useState } from "react";

const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  // All logic stays here
  //apiUrl = "https://api.deezer.com/";
  const [hero, setHero] = useState();
  const [chartsData, setChartsData] = useState();

  const fetchData = async (path) => {
    return (await axios.get(`/api/${path}`)).data;
  };

  useEffect(() => {
    async function runData() {
      setHero(await fetchData("playlist/6059358144"));
      setChartsData(await fetchData("chart/0/playlists"));
    }

    runData();
  }, []);

  return (
    <MusicContext.Provider
      value={{
        hero,
        chartsData,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicContextProvider };
