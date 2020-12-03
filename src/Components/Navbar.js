import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="main-nav">
        
        <div className="nav-logo">LOGO</div>
        
        <div/>
        
        <div className="nav-items">
        <Link to="/Cart" >
        <li>
            My Cart
        </li>  
        </Link>
          <li>
            About
        </li>
        </div>
        

        </nav>
    );
};

export default Navbar;