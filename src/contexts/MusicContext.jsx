import axios from "axios";
import { createContext, useEffect, useState } from "react";
import LocalStore from "./LocalStore";

const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  // All logic stays here
  const apiUrl = "https://api.deezer.com/";
  const [hero, setHero] = useState();
  const [chartsData, setChartsData] = useState();
  const [release, setRelease] = useState();
  const [popular, setPopular] = useState();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [details, setDetails] = useState();
  const [detailsBg, setDetailsBg] = useState("");
  const [audioQueue, setAudioQueue] = useState();
  const [trackIndex, setTrackIndex] = useState(0);
  const [isNavOpen, setNavOpen] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const {
    myCollections,
    addToCollections,
    removeFromCollections,
    recentlyPlayed,
    addToRecent,
  } = LocalStore();

  // Function to fetch api with @param;
  const fetchData = async (params) => {
    return (await axios.get("/api/" + params)).data;
  };

  useEffect(() => {
    async function runData() {
      setHero(await fetchData("playlist/6059358144"));
      setChartsData(await fetchData("chart/0/playlists?index=0&limit=3"));
      setRelease(await fetchData("editorial/2/releases"));
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
        setScreenWidth,
        details,
        setDetails,
        fetchData,
        detailsBg,
        setDetailsBg,
        audioQueue,
        setAudioQueue,
        trackIndex,
        setTrackIndex,
        isNavOpen,
        setNavOpen,
        myCollections,
        addToCollections,
        removeFromCollections,
        searchResults,
        setSearchResults,
        recentlyPlayed,
        addToRecent,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicContextProvider };
