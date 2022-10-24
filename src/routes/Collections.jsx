import { useContext } from "react";
import { Link } from "react-router-dom";
import { MusicContext } from "../contexts/MusicContext";

import "../styles/collection.css";

const Collections = () => {
  const { myCollections } = useContext(MusicContext);

  if (myCollections.length === 0) return <NoCollection />;

  console.log(myCollections);

  myCollections.forEach((item) => {
    console.log(item.artist);
  });

  return (
    <section className="collections-sect">
      {myCollections.map((info) => (
        <Link
          to={`/${info.type}/${info.id}`}
          key={info.id}
          className="collection-card group"
        >
          <img
            src={info.picture_medium || info.cover_medium}
            alt=""
            className="group-hover:scale-125"
          />
          <div className="coll-content">
            <div>
              <h4>{info.title}</h4>
              {info.artist && <p>{info.artist.name}</p>}
              {info.creator && <p>{info.creator.name}</p>}
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
