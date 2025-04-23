import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resturantName, setResturantName] = useState("");

  const { resId } = useParams();
  //   console.log(resId);
  //   console.log(MENU_API + resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    //  console.log(json);
    //  console.log(
    //    json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //      ?.card?.itemCards
    //  );
    setResInfo(json?.data);
    setResturantName(json.data?.cards[0]?.card?.card?.text);
  };

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
      ?.card || {};
  //   console.log(itemCards);
  //   console.log(
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card
  //   );

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
