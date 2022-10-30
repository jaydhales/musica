import Scroller from "./Scroller.jsx";
import AlbumCard from "./AlbumCard.jsx";

const MusicList = ({ title, data }) => {
  return (
    <section className="albums-section">
      <h2>{title}</h2>

      <Scroller direction="horizontal" customStyle="lists">
        {title === "Recently Played"
          ? data &&
            data.map(({ data }) => <AlbumCard info={data} key={data.id} />)
          : data && data.map((info) => <AlbumCard info={info} key={info.id} />)}
      </Scroller>
    </section>
  );
};

export default MusicList;
