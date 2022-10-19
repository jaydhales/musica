import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home.svg";

const Nav = ({ navArr }) => {
  const navLink = (navData) =>
    navData.isActive ? "nav-link active" : "nav-link";

  return (
    <div className="nav">
      {navArr.map(([path, title, src, srcActive]) => (
        <NavLink className={navLink} to={path} key={path}>
          <img
            src={src}
            alt={title}
            className={src !== homeIcon ? "p-[10px] nav-icon" : "nav-icon"}
          />

          <img
            src={srcActive}
            alt={title}
            className={src !== homeIcon ? "p-[10px] nav-icon-a" : "nav-icon-a"}
          />

          <span>{title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
