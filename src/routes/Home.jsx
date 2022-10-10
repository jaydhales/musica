import Hero from "./Hero.jsx";
import ChartList from "../components/ChartList";
import MusicList from "../components/MusicList";
import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext.jsx";

const Home = () => {
  const { release, popular } = useContext(MusicContext);

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
    </div>
  );
};

export default Home;
