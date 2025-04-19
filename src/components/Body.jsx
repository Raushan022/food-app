import { useState } from "react";
import { resList } from "../utils/mockData";
import ResturantCard from "./ResturantCard";

const Body = () => {
  //Local State Variable - super powerful variable
  const [listOfResturant, setListOfResturant] = useState(resList);

  const handleFilter = () => {
    const filterdResturant = listOfResturant.filter((res) => {
      return res.info.avgRating >= 4.3;
    });
    setListOfResturant(filterdResturant);
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
