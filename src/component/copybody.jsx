import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import './Body.css';
 import resobj from "../utils/mockData.js"


const Body = () => {
   const [listofRestaurant, setlistofRestaurant] = useState([resobj]);

    useEffect(() => {
       fetchdata()
      // console.log("useEffect called")     // here first body will render after that only useEffect will execute so that first it will body render then useEffect called
     },[])
     console.log("body render")

    const fetchdata =  async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      console.log(json)
      setlistofRestaurant(json?.data?.cards[1]?.card?.card)
    //   if (json && json.data && json.data.cards && Array.isArray(json.data.cards)) {
    //     setlistofRestaurant(json.data.cards[2]?.card?.card);
    //  } else {
    //     console.error("Data received is not in the expected format:", json);
    //  }
    // };
  
    return (
       <div className="body">
        <div className="filter">
          <button className="filter-btn"
            onClick = {() => {
              //filter logic here
             let filterList = listofRestaurant.filter(
              (res) => res.data.avgRating > 4
              )
              setlistofRestaurant(filterList)
            }}>
            top rated Restaurant 
          </button>
        </div>
        <div className="search" style={{padding:10}}>Search</div>
        <div className="res-container">
         {listofRestaurant.map((Restaurant) =>
          (<RestaurantCard key={Restaurant.data.id} resobj={Restaurant} />))}       
           {/* // we need to give key compulsory and we shd give unique id not index  and we use map because we need multiple card so we cant paste 100 ReastaurantCard so we use map*/   }
        </div>
       </div>
    )
  }
}
export default Body;