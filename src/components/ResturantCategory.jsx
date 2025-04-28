import React, { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const clickHandler = () => {
    setShowItems(!showItems);
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
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
