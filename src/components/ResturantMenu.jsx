import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { resId } = useParams();
  //   console.log(resId);

  const [resInfo, resturantName] = useResturantMenu(resId); //custom hook that returns resInfo and resturantName
  // console.log(resInfo);

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
  //     ?.card || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[7]?.card
      ?.card?.itemCards || [];

  // console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const menuItemsCategories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(menuItemsCategories);

  if (resturantName.length === 0) return <Shimmer />;
  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{resturantName}</h1>

      {/* Categories accordions */}
      {menuItemsCategories.map((category) => (
        <ResturantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default ResturantMenu;
