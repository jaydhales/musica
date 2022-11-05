import axios from "axios";
import { createContext, useEffect, useState } from "react";
import LocalStore from "./LocalStore";

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
  const [detailsBg, setDetailsBg] = useState("");
  const [audioQueue, setAudioQueue] = useState();
  const [trackIndex, setTrackIndex] = useState(0);
  const [isNavOpen, setNavOpen] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  (function () {
    var cors_api_host = "cors-anywhere.herokuapp.com";
    var cors_api_url = "https://" + cors_api_host + "/";
    var slice = [].slice;
    var origin = window.location.protocol + "//" + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (
        targetOrigin &&
        targetOrigin[0].toLowerCase() !== origin &&
        targetOrigin[1] !== cors_api_host
      ) {
        args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
    };
  })();

  const {
    myCollections,
    addToCollections,
    removeFromCollections,
    recentlyPlayed,
    addToRecent,
  } = LocalStore();

  //Get Screen Width
  window.onload = (e) => {
    setScreenWidth(window.innerWidth);
  };
  window.onresize = (e) => {
    setScreenWidth(e.target.innerWidth);
  };

  useEffect(() => {
    if (screenWidth < 768) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  }, [screenWidth]);

  // Function to fetch api with @param;
  const fetchData = async (params) => {
    return (await axios.get(apiUrl + params)).data;
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
