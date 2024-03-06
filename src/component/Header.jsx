import React, { useEffect } from "react";
import './Header.css';
import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnNameReact, SetbtnNameReact] = useState("Login")
  console.log("Header")


   useEffect(() => {
     console.log("useEffect")
   }, [btnNameReact])
    return (
        <div className="header">
        <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/card">card</Link></li>
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