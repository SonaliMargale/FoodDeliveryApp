import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
const RestaurantMenu = () => {
    const[resInfo, setresInfo] = useState(null)

    useEffect(() => {
            fetchmenu();
         },[])

        //  const fetchmenu = async () => {
        //  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=484182&catalog_qa=undefined&submitAction=ENTER");
        //  const json = await data.json();
        //  console.log(json);
        //  setresInfo(json.data);
        //  };
           
        const fetchmenu = async () => {
          try {
              const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=484182&catalog_qa=undefined&submitAction=ENTER");
              const json = await data.json();
              console.log(json);
              setresInfo(json.data);
          } catch (error) {
              console.error("Error fetching menu:", error);
          }
      };
        if ( resInfo === null) return <Shimmer /> 
        
        const {name,cuisines,costForTwo} = resInfo?.cards[0]?.card?.card?.info;
        console.log("ressss",resInfo?.cards[0]?.card?.card?.info)
        //console.log("menu",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info)
          
        const  {itemCards}  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info
        //if we put constant then api is coming in console.

       console.log("menuu",itemCards)

         return  (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(",")}</h1>
            <h1>{costForTwo}</h1>
            <h2>Menu</h2>
                <ul>
                  {/* {itemCards.map((item) => (
                    <i>{item.card.info.name}</i>
                  ))} */}
                
                   
             </ul>
               </div>
    )
}
export default RestaurantMenu;
