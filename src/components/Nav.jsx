import { NavLink } from "react-router-dom";

import homeIcon from "../assets/home.svg";
import playlistIcon from "../assets/playlist.svg";
import radioIcon from "../assets/radio.svg";
import videoIcon from "../assets/videos.svg";

const Nav = () => {
  const navArr = [
    ["/home", "Home", homeIcon],
    ["/collections", "My Collections", playlistIcon],
    ["/radio", "Radio", radioIcon],
    ["/library", "Library", videoIcon],
  ];

  const navLink = (navData) =>
    navData.isActive ? "nav-link active" : "nav-link";

  return (
    <div className="nav">
      {navArr.map(([path, title, src]) => (
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
