import React from "react";
import "./RestaurantCard.css";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({resList}) => {
     
     const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resList?.info
    return (
            <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="alt"></img> 
                    <h4 class="font-bold py-4 text-lg" title={name}>{name}</h4>
                    <h4 class="truncate" title={cuisines.join(',')}>{cuisines.join(',')}</h4>
                    <h4 class="text" title={`${avgRating} stars`}>{avgRating} stars</h4>
                    <h4 class="text" title={`${deliveryTime} Minutes`}>{deliveryTime} Minutes</h4>
                    <h4 class="text" title={costForTwo}>{costForTwo}</h4>
            </div>
)}
        
    
export default RestaurantCard;