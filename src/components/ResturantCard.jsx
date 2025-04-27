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

//Highrt Order Function
//input - ResturantCard
//output - ResturantCardPromoted
export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    console.log(...props);
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-b-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
