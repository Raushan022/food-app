import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // console.log(props.resData?.info);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    props?.resData?.info || {};

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h6>{sla.slaString} </h6>
    </div>
  );
};

export default ResturantCard;
