import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import './Body.css';
 import resobj from "../utils/mockData.js";
import Shimmer from "./Shimmer.jsx";

const Body = () => {
   const [listofRestaurant, setlistofRestaurant] = useState([]);
   const[filterRestaurant, setfilterRestaurant] = useState([]);
   const [searchText, setsearchText] = useState("")
  
    useEffect(() => {
      fetchdata();
     },[])
    
     const fetchdata =  async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
       console.log(json)
    //  console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      const restaurants = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // console.log(restaurants) 
      setlistofRestaurant(restaurants)
      setfilterRestaurant(restaurants)
      //  console.log("jsonnn",restaurants)
      //  console.log("resobjjj",resList)

    }
    
    return listofRestaurant.length === 0 ? <Shimmer /> : (
       <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" 
             className="search-box"
             value = {searchText}
             onChange = {(e) => {
              setsearchText(e.target.value)
             }}>
            </input>
             
             <button 
              onClick={() => {
              const filterrestaurant = listofRestaurant.filter((res) => 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setfilterRestaurant(filterrestaurant)
              }}>
              search
             </button>
          </div>
          
          <button className="filter-btn"
            onClick = {() => {
              //filter logic here
              let filterList = listofRestaurant.filter(
             (res) => res.info.avgRating > 4.5
             )
              console.log("topres",filterList)
              setlistofRestaurant(filterList)
            }}>
            top rated Restaurant 
          </button>
          {/* key={Restaurant?.data.id} */}
        </div>
        <div className="res-container">
         {listofRestaurant?.map((Restaurant) =>
          (<RestaurantCard  key={Restaurant?.info.id}  resList={Restaurant}  />
          ))}         
        </div>
       </div>
    )
  }

export default Body;