import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable - super powerful variable
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

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
    // console.log(json);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (listOfResturant.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <>
      {listOfResturant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={handleFilter}>
              Filter Resturant
            </button>
            <div className="search">
              <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="search-btn"
                onClick={() => {
                  //filter the resturant cards by searched item and update the UI
                  const searchedResturant = listOfResturant.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredResturant(searchedResturant);
                }}
              >
                Search
              </button>
            </div>
          </div>

          <div className="res-container">
            {filteredResturant.map((resturant) => (
              <ResturantCard key={resturant.info.id} resData={resturant} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
