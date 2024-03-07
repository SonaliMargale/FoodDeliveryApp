import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import {useParams} from 'react-router-dom'
import { MENU_API } from "../utils/constant.js";

const RestaurantMenu = () => {
  const[resInfo, setresInfo] = useState(null)

  const {resId} = useParams();

    useEffect(() => {
            fetchmenu();
         },[])

         const fetchmenu = async () => {
         const data = await fetch(MENU_API+ resId);
         const json = await data.json();
         console.log(json);
         setresInfo(json.data);
         };
           
        if ( resInfo === null) return <Shimmer /> 
        
        const {name,cuisines,costForTwo} = resInfo?.cards[0]?.card?.card?.info;
       
        const  {itemCards}  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
       //console.log("menuu",itemCards)

         return  (
        <div className="menu">

            <h1>{name}</h1>
            <h1>{cuisines.join(",")}</h1>
            <h1>{costForTwo}</h1>
            <h2>Menu</h2>
                <ul>
                  {itemCards?.map((item) => (
                    <li key={item.card.info.id} >{item.card.info.name}-{" "}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                  ))}    
             </ul>
               </div>
    )
}

export default RestaurantMenu;
