import Heart from "../assets/Heart.svg";
import More from "../assets/more-vertical.svg";
import ObjectSvg from "./ObjectSvg";

const TrackCard = ({ data }) => {
  const { id, title, link, artist, duration, album } = data;

  return (
    <div className="track-card" onClick={e => console.log(data)}>
      <div className="flex gap-4 items-center">
        <img src={album.cover_small} className="track-cover" />
        <img src={Heart} alt="" className="w-5" />
      </div>

      <div className="track-info">
        <p className="info1">
          <span>{title} - </span>
          <span>{artist.name}</span>
        </p>
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
