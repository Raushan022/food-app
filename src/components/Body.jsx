import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - super powerful variable
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered");

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
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1>Looks like you are offline!! Please turn on your Internet..</h1>;
  }

  return (
    <>
      {listOfResturant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="mx-[80px] my-0">
          <div className="flex">
            <button className="m-[10px] cursor-pointer" onClick={handleFilter}>
              Filter Resturant
            </button>
            <div className="p-3 flex">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className=" border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="ml-1.5"
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

          <div className="grid grid-cols-4 gap-4">
            {filteredResturant.map((resturant) => (
              <Link
                key={resturant.info.id}
                to={`/resturant/${resturant.info.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ResturantCard resData={resturant} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
