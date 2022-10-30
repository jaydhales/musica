import Hero from "../components/Hero.jsx";
import ChartList from "../components/ChartList";
import MusicList from "../components/MusicList";
import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext.jsx";

const Home = () => {
  const { release, popular, setDetailsBg, recentlyPlayed } =
    useContext(MusicContext);

  return (
    <div className="home">
      <section className="top-section">
        <Hero />
        <ChartList />
      </section>

      {release && <MusicList title="New releases." data={release.data} />}

      {popular && (
        <MusicList title="Popular in your area." data={popular.data} />
      )}

      {recentlyPlayed && (
        <MusicList
          title="Recently Played"
          data={recentlyPlayed.sort((a, b) => b.timeStamp - a.timeStamp)}
        />
      )}
    </div>
  );
};

export default Home;
