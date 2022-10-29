import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import { MusicContext } from "../contexts/MusicContext";
import Scroller from "./Scroller";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchClass, setSearchClass] = useState("");
  const [showResult, setShowResult] = useState(false);
  const { fetchData, searchResults, setSearchResults } =
    useContext(MusicContext);

  const handleSearch = async () => {
    const { data } = await fetchData("search?q=" + searchQuery);

    setSearchResults(data);
    setShowResult(true);
    setSearchQuery("");
  };

  useEffect(() => {
    searchResults.length > 0
      ? setSearchClass("search-result-container")
      : setSearchClass("search-result-container hidden");
  }, [searchResults]);

  return (
    <div className="search-box">
      <img src={searchIcon} alt="" />
      <input
        type="text"
        placeholder="Search Artists"
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
      />
      <div className={searchClass}>
        <Scroller direction={"vertical"} customStyle={"inner"}>
          {searchResults.length > 0 &&
            searchResults.map(({ id, album, title, artist }) => (
              <div className="search-results" key={id}>
                <img
                  src={album.cover_small}
                  alt={title}
                  className="track-cover"
                />
                <Link to={`album/${album.id}`}>{title}</Link>
                <p>{artist.name}</p>
              </div>
            ))}
        </Scroller>
      </div>
    </div>
  );
};

export default Search;
