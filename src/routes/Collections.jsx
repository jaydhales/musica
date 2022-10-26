import { useContext } from "react";
import { Link } from "react-router-dom";
import { MusicContext } from "../contexts/MusicContext";

import "../styles/collection.css";

const Collections = () => {
  const { myCollections } = useContext(MusicContext);

  if (!myCollections) return null;

  if (myCollections.length === 0) return <NoCollection />;

  return (
    <section className="collections-sect">
      {myCollections.map(({ data }) => (
        <Link
          to={`/${data.type}/${data.id}`}
          key={data.id}
          className="collection-card group"
        >
          <img
            src={data.picture_medium || data.cover_medium}
            alt=""
            className="group-hover:scale-125"
          />
          <div className="coll-content">
            <div>
              <h4>{data.title}</h4>
              {data.artist && <p>{data.artist.name}</p>}
              {data.creator && <p>{data.creator.name}</p>}
            </div>
          </div>
        </Link>
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
