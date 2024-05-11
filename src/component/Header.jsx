import React, { useEffect , useContext} from "react";
import './Header.css';
import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = () => {
  const [btnNameReact, SetbtnNameReact] = useState("Login")
  console.log("Header")

   const {loggedInUser} = useContext(UserContext) 
    console.log(loggedInUser)
   
   useEffect(() => {
     console.log("useEffect")
   }, [btnNameReact])

   const onlineStatus = useOnlineStatus()

    return (
        <div className="flex justify-between border">
        <div className="logo-container">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
       <ul className="flex gap-4">
        <li>online status : {onlineStatus ? "⬆️" :"🔴"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/card">{loggedInUser}</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <button className="login"
        onClick = {() => {
          btnNameReact === "Login" ? SetbtnNameReact("Logout") : SetbtnNameReact("Login")
        }}>
         {btnNameReact}
        </button>
       </ul>
      </div>
      </div>
       
        
    )
}
export default Header;