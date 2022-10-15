import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MusicContext } from "../contexts/MusicContext";
import TrackCard from "../components/TrackCard";

import HeartA from "../assets/Heart-active.svg";
import Play from "../assets/Play.svg";
import Add from "../assets/music-square-add.svg";

const Details = () => {
  const { details, setDetails, fetchData, setDetailsBg, setAudioQueue } =
    useContext(MusicContext);
  const { type, query } = useParams();

  useEffect(() => {
    async function getDetails() {
      const data = await fetchData(type + "/" + query);

      setDetails(data);
      setDetailsBg(data.picture_xl || data.cover_xl);
      // setAudioQueue(data.tracks);
    }

    getDetails();
  }, []);

  const handleOptions = (e, text) => {
    e.preventDefault();
    console.log(text);

    if (text === "Play All") {
      setAudioQueue(details.tracks);
    }
  };

  if (!details) return null;

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
            {[[Play, "Play All"], [Add, "Add to collection"], [HeartA]].map(
              ([src, text]) => (
                <a
                  href="#"
                  className="btn"
                  key={src}
                  onClick={(e) => handleOptions(e, text)}
                >
                  <img src={src} alt="src" />
                  {text && <p>{text}</p>}
                </a>
              )
            )}
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
