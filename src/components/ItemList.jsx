import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-gray-200 border-b-2 text-left p-2 m-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>₹{item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 px-2">
            <div className="absolute">
              <button className="p-2 rounded-lg shadow-lg bg-black text-white">
                Add+
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
