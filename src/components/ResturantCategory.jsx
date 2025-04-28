import React from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
  //   console.log(data);

  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <div>
      {/* header */}
      <div className="w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={clickHandler}
        >
          <span className="font-bold ">
            {data.title} - {data.itemCards.length}
          </span>
          <span>🔽</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default ResturantCategory;
