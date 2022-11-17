import { useContext } from "react";
import { Link } from "react-router-dom";
import { MusicContext } from "../contexts/MusicContext";

import "../styles/collection.css";
import Play from "../assets/Play-2.svg";

const Collections = () => {
  const { myCollections, setAudioQueue, setTrackIndex } =
    useContext(MusicContext);

  const convertNum = (num) => {
    num *= 1000;

    if (num / 1000000 > 1) {
      return (num / 1000000).toFixed(1) + "m";
    } else if (num / 1000 > 1) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  if (!myCollections) return null;

  if (myCollections.length === 0) return <NoCollection />;

  return (
    <section className="collections-sect">
      {myCollections.map(({ data }) => (
        <div className="collection-card group" key={data.id}>
          <img
            src={data.picture_xl || data.cover_xl}
            alt=""
            className="group-hover:scale-125 coll-bg"
          />
          <div className="coll-content">
            <div className="group-hover:bottom-5">
              <Link to={`/${data.type}/${data.id}`}>
                <p className="title">{data.title}</p>
              </Link>

              {data.artist && <p className="artist">{data.artist.name}</p>}
              {data.creator && <p className="artist">{data.creator.name}</p>}
              <p className="likes">{convertNum(data.fans)} likes</p>
            </div>
            <a
              href="#"
              className="coll-play group-hover:bottom-5"
              onClick={(e) => {
                setAudioQueue(data);
                setTrackIndex(0);
              }}
            >
              <img src={Play} alt="play icon" />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

// return if collection Array is empty
const NoCollection = () => (
  <div className="no-coll">
    <h2>Collection is empty, Add Songs</h2>
  </div>
);

export default Collections;
