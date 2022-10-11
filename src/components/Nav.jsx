import { NavLink } from "react-router-dom";

import homeIcon from "../assets/home.svg";
import homeIconActive from "../assets/home-active.svg";
import playlistIcon from "../assets/playlist.svg";
import playlistIconActive from "../assets/playlist-active.svg";
import radioIcon from "../assets/radio.svg";
import radioIconActive from "../assets/radio-active.svg";
import videoIcon from "../assets/videos.svg";
import videoIconActive from "../assets/video-active.svg";

const Nav = () => {
  const navArr = [
    ["/home", "Home", homeIcon, homeIconActive],
    ["/collections", "My Collections", playlistIcon, playlistIconActive],
    ["/radio", "Radio", radioIcon, radioIconActive],
    ["/library", "Library", videoIcon, videoIconActive],
  ];

  const navLink = (navData) =>
    navData.isActive ? "nav-link active" : "nav-link";

  return (
    <div className="nav">
      {navArr.map(([path, title, src, srcActive]) => (
        <NavLink className={navLink} to={path} key={path}>
          <img
            src={src}
            alt={title}
            className={src !== homeIcon ? "p-[10px]" : ""}
          />
          <span>{title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
