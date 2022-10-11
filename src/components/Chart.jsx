import ObjectSvg from "./ObjectSvg";
import likeIcon from "../assets/like.svg";
import { Link } from "react-router-dom";

const Chart = ({ info }) => {
  return (
    <div className="chart">
      <Link to={"/playlist/" + info.id}>
        <div className="content">
          <img src={info.picture_medium} alt="" className="chart-icon" />
          <div className="details">
            <h3>{info.title}</h3>
            <p>{info.user.name}</p>
          </div>
        </div>
      </Link>

      <ObjectSvg data={likeIcon} customClass="like-icon" />
    </div>
  );
};

export default Chart;
