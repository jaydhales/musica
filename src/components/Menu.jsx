import Nav from "./Nav.jsx";
import homeIcon from "../assets/home.svg";
import homeIconActive from "../assets/home-active.svg";
import playlistIcon from "../assets/playlist.svg";
import playlistIconActive from "../assets/playlist-active.svg";
import radioIcon from "../assets/radio.svg";
import radioIconActive from "../assets/radio-active.svg";
import videoIcon from "../assets/videos.svg";
import videoIconActive from "../assets/video-active.svg";
import profileIcon from "../assets/profile.svg";
import logoutIcon from "../assets/logout.svg";
import profileIconActive from "../assets/profile-active.svg";
import logoutIconActive from "../assets/logout-active.svg";
import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext.jsx";

const Menu = () => {
  const { isNavOpen } = useContext(MusicContext);
  const menuClass = isNavOpen ? "menu nav-active" : "menu";
  const mainNav = [
    ["/home", "Home", homeIcon, homeIconActive],
    ["/collections", "My Collections", playlistIcon, playlistIconActive],
    ["/radio", "Radio", radioIcon, radioIconActive],
    ["/library", "Library", videoIcon, videoIconActive],
  ];

  const profileNav = [
    ["/profile", "Profile", profileIcon, profileIconActive],
    ["/logout", "Logout", logoutIcon, logoutIconActive],
  ];

  return (
    <div className={menuClass}>
      <Nav navArr={mainNav} />
      <Nav navArr={profileNav} />
    </div>
  );
};

export default Menu;
