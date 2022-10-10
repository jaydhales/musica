const AlbumCard = ({ info }) => {
  return (
    <div className="album-card">
      <img src={info.cover_medium || info.album.cover_medium} alt="" />
      <h3>{info.title}</h3>
      <p>{info.artist.name}</p>
    </div>
  );
};

export default AlbumCard;
