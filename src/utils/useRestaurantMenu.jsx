import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant.js";

const useRestaurantMenu = (resId) => {
    const[resInfo, setresInfo] = useState(null)

    useEffect(() => {
     fetchdata();
    },[])

    const fetchdata = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setresInfo(json.data)
    }
    return resInfo;  
}
export default useRestaurantMenu;