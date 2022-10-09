import { NavLink } from "react-router-dom";

const Nav = () => {
  const navArr = [
    ["", "Home"],
    ["/collections", "My Collections"],
    ["/radio", "Radio"],
    ["/library", "Library"],
  ];

  const navLink = (navData) => (navData.isActive ? "active" : "");

  return (
    <div className="nav">
      {navArr.map(([path, title]) => (
        <NavLink className={navLink} to={path} key={path} children={title} />
      ))}
    </div>
  );
};

export default Nav;
