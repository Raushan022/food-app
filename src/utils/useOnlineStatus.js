import { useEffect, useState } from "react";

const useOnlineStatus = () => {
   const [onlineStatus, setOnlineStatus] = useState(true);
   //check if online or not
   useEffect(() => {
      addEventListener("offline", () => {
         setOnlineStatus(false)
      });

      addEventListener("online", () => {
         setOnlineStatus(true)
      });
   }, [])

   return onlineStatus;
}

export default useOnlineStatus;