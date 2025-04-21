import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";

const Body = () => {
  //Local State Variable - super powerful variable
  const [listOfResturant, setListOfResturant] = useState([]);

  const handleFilter = () => {
    const filterdResturant = listOfResturant.filter((res) => {
      return res.info.avgRating >= 4.4;
    });
    setListOfResturant(filterdResturant);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1286243&lng=91.8012675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Filter Resturant
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
