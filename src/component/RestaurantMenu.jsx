import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import {useParams} from 'react-router-dom'
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";
// import { MENU_API } from "../utils/constant.js";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  const[showIndex, setShowIndex] = useState(null)

    // useEffect(() => {
    //         fetchmenu();
    //      },[])

    //      const fetchmenu = async () => {
    //      const data = await fetch(MENU_API+ resId);
    //      const json = await data.json();
    //      console.log(json);
    //      setresInfo(json.data);
    //      };
           
        if ( resInfo === null) return <Shimmer /> 
        
         const {name,cuisines,costForTwo} = resInfo?.cards[2]?.card?.card?.info 
         console.log("heyyy",resInfo?.cards[2]?.card?.card?.info)
       
        const  {itemCards}  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card
        console.log("menuu",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card)

        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>   // to filter itemcategory
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

         return  (
        <div className="menu text-center">
            <h1 className="font-bold my-6 Text-2xl">{name}</h1>
            <p className="font-bold Text-lg">{cuisines?.join(",")} - {costForTwo} </p>

            {/* {categories accordian} */}
            {categories?.map((category, index) =>
            <RestaurantCategory key={category?.card?.card.title} 
              data={category?.card?.card} 
              showItems = {index === showIndex ? true : false}
              setShowIndex = {() => setShowIndex(index)}
              />)}
               </div>
    )
}

export default RestaurantMenu;