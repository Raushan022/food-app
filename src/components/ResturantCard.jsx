import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // console.log(props.resData?.info);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    props?.resData?.info || {};

  return (
    <div className="w-[300px] p-[5px] bg-[#f0f0f0] hover:border hover:border-black cursor-pointer">
      <img
        className="w-full h-[280px]"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h5>
        {cuisines.join(", ").length > 30
          ? cuisines.join(", ").slice(0, 30) + "..."
          : cuisines.join(", ")}
      </h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h6>{sla.slaString} </h6>
    </div>
  );
};

export default ResturantCard;
