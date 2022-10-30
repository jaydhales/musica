import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MusicContext } from "../contexts/MusicContext";
import TrackCard from "../components/TrackCard";

import HeartA from "../assets/Heart-active.svg";
import Play from "../assets/Play.svg";
import Add from "../assets/music-square-add.svg";

const Details = () => {
  const {
    details,
    setDetails,
    fetchData,
    setDetailsBg,
    setAudioQueue,
    setTrackIndex,
    myCollections,
    addToCollections,
    removeFromCollections,
    setSearchResults,
  } = useContext(MusicContext);
  const { type, query } = useParams();
  const [isInCollection, setIsInCollection] = useState(false);

  useEffect(() => {
    // Check if the data exists in collection
    if (details && myCollections) {
      const check = myCollections.filter((data) => data.id === details.id);

      check.length === 1 && setIsInCollection(true);
    }
  }, [details]);

  useEffect(() => {
    setSearchResults([]);
    async function getDetails() {
      const data = await fetchData(type + "/" + query + "?index=0&limit=50");

      setDetails(data);
      setDetailsBg(data.picture_xl || data.cover_xl);
    }

    getDetails();
  }, [query]);

  if (!details) return null;

  const handleOptions = (e, text) => {
    e.preventDefault();

    if (text === "Play All") {
      setAudioQueue(details);
      setTrackIndex(0);
    }

    if (text === "Add to collection") {
      addToCollections(details);
      setIsInCollection(true);
    }

    if (text === "Remove from collection") {
      removeFromCollections(details.id);
      setIsInCollection(false);
    }
  };

  return (
    <div>
      <section className="detail-top-sect">
        <img
          src={details.picture_medium || details.cover_medium}
          alt=""
          className="detail-img"
        />

        <div className="detail-content">
          <h1 className="text-primary">{details.title}</h1>
          <p className="my-3">{details.description}</p>
          <p>
            <span>{details.nb_tracks} tracks </span> -
            <span> {Math.floor(details.duration / 3600)} hrs </span>
            <span> {Math.floor((details.duration % 3600) / 60)} mins </span>
          </p>

          <div className="detail-options">
            {[
              [Play, "Play All"],
              [
                Add,
                isInCollection ? "Remove from collection" : "Add to collection",
              ],
              [HeartA],
            ].map(([src, text]) => (
              <a
                href="#"
                className="btn"
                key={src}
                onClick={(e) => handleOptions(e, text)}
              >
                <img src={src} alt="src" />
                {text && <p>{text}</p>}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="tracks">
        {details.tracks.data.map((info) => (
          <TrackCard key={info.id} data={info} />
        ))}
      </section>
    </div>
  );
};

export default Details;
