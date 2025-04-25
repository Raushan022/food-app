import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResturantMenu = (resId) => {
   const [resInfo, setResInfo] = useState(null);
   const [resturantName, setResturantName] = useState("");

   useEffect(() => {
      fetchData();
   }, [])

   const fetchData = async () => {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json?.data);
      setResturantName(json.data?.cards[0]?.card?.card?.text);
   };

   return [resInfo, resturantName];
};

export default useResturantMenu;  