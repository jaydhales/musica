import Hero from "./Hero.jsx";
import ChartList from "./ChartList.jsx";
import MusicList from "./MusicList.jsx";

const Home = () => {
  return (
    <div className="home">
      <section className="top-section">
        <Hero />
        <ChartList />
      </section>
      <MusicList title="New releases." />
    </div>
  );
};

export default Home;
