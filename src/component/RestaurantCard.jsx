import React from "react";
import "./RestaurantCard.css";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({resList}) => {
     
     const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resList?.info
    return (
            <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
                <img className="img-logo" src={CDN_URL + cloudinaryImageId} alt="alt"></img> 
                    <h4 class="text" title={name}>{name}</h4>
                    <h4 class="text" title={cuisines.join(',')}>{cuisines.join(',')}</h4>
                    <h4 class="text" title={`${avgRating} stars`}>{avgRating} stars</h4>
                    <h4 class="text" title={`${deliveryTime} Minutes`}>{deliveryTime} Minutes</h4>
                    <h4 class="text" title={costForTwo}>{costForTwo}</h4>
            </div>
)}
        
    
export default RestaurantCard;