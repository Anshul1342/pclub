import React from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";
import './Nav.css';
function Nav() {

    return (
        <div className="navdiv">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width , intial-scale=1.0" />
    <meta http-equiv = "X-UA-Compatibile" content="ie=edge" />
    <title></title>
    <link rel="stylesheet" href="nav2.css" />
  </head>
  <body>
    {/* <div class="container"> */}
      <nav>
        <input type="checkbox" name="" id ="nav" class="hidden" value="" />
        <label for="nav" class="nav-btn">
          <i></i>
          <i></i>
          <i></i>
        </label>
          <img
                src="/images/plogo2.png"
                alt="slow network" class="image" />
        <div class="nav-wrapper">
          <ul>
         <NavLink exact to="/">
             <li>
              <h6> About Us <span className="sr-only"></span></h6>
             </li>
           </NavLink>
           <NavLink to="/Contact">
             <li>
             <h6>  Contact </h6> 
             </li>
           </NavLink>
           {/* <NavLink to="/Content">
             <li>
             <h6>  Content </h6> 
             </li>
           </NavLink> */}
           <NavLink to="/Event">
             <li>
             <h6>   Events </h6> 
             </li>
           </NavLink>
           </ul>
        </div>
      </nav>

    {/* </div> */}

  </body>
      </div>
    );
}

export default Nav;