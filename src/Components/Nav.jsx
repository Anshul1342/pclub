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
                src="data:image/jpeg;base64,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"
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