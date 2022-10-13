import { Link } from "react-router-dom";

const AlbumCard = ({ info }) => {
  return (
    <div className="album-card">
      <img src={info.cover_medium || info.album.cover_medium} alt="" />
      
      <Link to={"/album/" + info.id}>
        <h3>{info.title}</h3>
      </Link>

      <p>{info.artist.name}</p>
    </div>
  );
};

export default AlbumCard;
