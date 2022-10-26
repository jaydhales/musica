import { useContext } from "react";
import Heart from "../assets/Heart.svg";
import More from "../assets/more-vertical.svg";
import { MusicContext } from "../contexts/MusicContext";
import ObjectSvg from "./ObjectSvg";

const TrackCard = ({ data }) => {
  const { id, title, link, artist, duration, album } = data;
  const { setAudioQueue, setTrackIndex, details } = useContext(MusicContext);

  const playTrack = (e) => {
    e.preventDefault();
    setAudioQueue(details.tracks);
    setTrackIndex(details.tracks.data.indexOf(data));
  };

  return (
    <div className="track-card">
      <div className="flex gap-4 items-center">
        <a href="#" onClick={(e) => playTrack(e)}>
          <img src={album.cover_small} className="track-cover" />
        </a>

        <img src={Heart} alt="" className="w-5" />
      </div>

      <div className="track-info">
        <a href="#" className="info1" onClick={(e) => playTrack(e)}>
          <span>{title} - </span>
          <span>{artist.name}</span>
        </a>
        <p className="info2">{album.title}</p>
        <p className="info3">
          <span>{Math.floor(duration / 60)}</span>:
          <span>{("0" + (duration % 60)).slice(-2)}</span>
        </p>
        <ObjectSvg data={More} customClass="info4" />
      </div>
    </div>
  );
};

export default TrackCard;
