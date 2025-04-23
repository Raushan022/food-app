import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resturantName, setResturantName] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1286243&lng=91.8012675&restaurantId=934502&catalog_qa=undefined&submitAction=ENTER"
    );

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
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card || {};
  //   console.log(itemCards);

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
