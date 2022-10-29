import ObjectSvg from "./ObjectSvg";
import likeIcon from "../assets/like.svg";
import { Link } from "react-router-dom";

const Chart = ({ info }) => {
  const { picture_medium, title, user, id } = info;
  return (
    <div className="chart">
      <Link to={"/playlist/" + id}>
        <div className="content">
          <img src={picture_medium} alt="" className="chart-icon" />
          <div className="details">
            <h3>{title}</h3>
            <p>{user.name}</p>
          </div>
        </div>
      </Link>

      <ObjectSvg data={likeIcon} customClass="like-icon" />
    </div>
  );
};

export default Chart;
