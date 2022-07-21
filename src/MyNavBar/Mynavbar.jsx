import React from 'react';
import './Mynavbar.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Mynavbar() {
  const [brand,updateBrand]=useState("Sparks Foundation");
  return (
    <>
      <div>
      <nav className="navbar">
     {/* <!-- LOGO --> */}
     <div className="logo">{brand}</div>
     {/* <!-- NAVIGATION MENU --> */}
     <ul className="nav-links">
       {/* <!-- USING CHECKBOX HACK --> */}
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" className="hamburger">&#9776;</label>
       {/* <!-- NAVIGATION MENUS --> */}
       <div className="menu">
         <li><Link to="/" onClick={()=>{updateBrand("Sparks Foundation")}}>Home</Link></li>
         <li><Link to="/about" onClick={()=>{updateBrand("About");}}>About</Link></li>
                {/* <li className="services"> */}
                  {/* <Link to="/" onClick={()=>{updateBrand("Services")}}>Services</Link> */}
                  {/* <!-- DROPDOWN MENU --> */}
                  {/* <ul className="dropdown">
                    <li><Link to="/" onClick={()=>{updateBrand("Dropdown 1")}}>Dropdown 1 </Link></li>
                    <li><Link to="/" onClick={()=>{updateBrand("Dropdown 2")}}>Dropdown 2</Link></li>
                    <li><Link to="/" onClick={()=>{updateBrand("Dropdown 3")}}>Dropdown 2</Link></li>
                    <li><Link to="/" onClick={()=>{updateBrand("Dropdown 4")}}>Dropdown 3</Link></li>
                    <li><Link to="/" onClick={()=>{updateBrand("Dropdown 5")}}>Dropdown 4</Link></li>
                  </ul> */}
                {/* </li> */}
         {/* <li><Link to="/" onClick={()=>{updateBrand("Pricing")}}>Pricing</Link></li> */}
         <li><Link to="/contact" onClick={()=>{updateBrand("Contact")}}>Contact</Link></li>
       </div>
     </ul>
   </nav>
      </div>
    </>
  );
}


export default Mynavbar;