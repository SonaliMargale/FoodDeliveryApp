import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard.jsx";
import './Body.css';
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import UserContext from "../utils/userContext.js";


const Body = () => {
   const [listofRestaurant, setlistofRestaurant] = useState([]);
   const[filterRestaurant, setfilterRestaurant] = useState([]);
   const [searchText, setsearchText] = useState("")

   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

   const {loggedInUser, setUserName} = useContext(UserContext)

    useEffect(() => {
      fetchdata();
     },[])
    
     const fetchdata =  async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
       console.log(json)
      const restaurants = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setlistofRestaurant(restaurants)
      setfilterRestaurant(restaurants)
      

      const onlineStatus = useOnlineStatus()
      if(onlineStatus === false) return (
      <h1>please check your internet connection once</h1>
      )


    }
    
    return listofRestaurant.length === 0 ? <Shimmer /> : (
       <div className="body">
        <div className="filter">
          <div className="search m-2 p-2">
            <input type="text" 
             className="search-box border border-solid border-black"
             value = {searchText}
             onChange = {(e) => {
              setsearchText(e.target.value)
             }}>
            </input>
             
             <button className="px-2 py-2 bg-green-100 m-2 rounded-lg"
              onClick={() => {
              const filterrestaurant = listofRestaurant.filter((res) => 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setfilterRestaurant(filterrestaurant)
              }}>
              search
             </button>
             <button className="bg-gray-100 py-2 px-2 rounded-lg"
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
            <label className="m-2">UserName:</label> 
            <input className="border border-black" 
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
         {filterRestaurant?.map((Restaurant) =>
         <Link to={"/restaurants/" + Restaurant.info.id}>
          <RestaurantCard  key={Restaurant?.info.id}  resList={Restaurant}  /> 
          </Link>
          )}
                   
        </div>
       </div>
    )
  }

export default Body;