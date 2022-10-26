import ObjectSvg from "./ObjectSvg";
import grain from "../assets/grain.svg";
import { MusicContext } from "../contexts/MusicContext";
import { useContext } from "react";

import artist from "../assets/Cruel-Santino.png";
import likes from "../assets/hero-likes.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const { hero } = useContext(MusicContext);

  if (hero)
    return (
      <div className="hero">
        <ObjectSvg data={grain} customClass="grain" />
        <div className="content">
          <p>Curated Playlist</p>
          <div className="details">
            <Link to={`/playlist/${hero.id}`}>
              <h1>{hero.title}</h1>
            </Link>

            <p>
              The contemporary new wave of alternative, genre-bending and
              creative afro-fusion music.
            </p>
          </div>
          <img src={likes} alt="Hero Likes" />
        </div>
        <img src={artist} alt="Alte Artist" className="cover" />
      </div>
    );
};

export default Hero;
