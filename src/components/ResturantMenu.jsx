import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();
  //   console.log(resId);

  const [resInfo, resturantName] = useResturantMenu(resId); //custom hook that returns resInfo and resturantName
  console.log(resInfo);

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
  //     ?.card || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[7]?.card
      ?.card?.itemCards || [];

  if (resturantName.length === 0) return <Shimmer />;
  return (
    <div className="menu">
      <h1>{resturantName}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
