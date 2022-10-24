import { useContext, useEffect, useState } from "react";
import searchIcon from "../assets/search.svg";
import { MusicContext } from "../contexts/MusicContext";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { fetchData } = useContext(MusicContext);

  const handleSearch = async () => {
    const data = await fetchData("search?q=" + searchQuery);

    console.log(data);
  };

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
    </div>
  );
};

export default Search;
