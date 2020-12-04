import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="main-nav">


            <div className="nav-logo">
                <Link to="/" className="nav_link">
                    LOGO
                </Link>
            </div>
            
            
            <div className="nav-items">
                <li>
                    <Link to="/Cart" className="nav_link">My Cart </Link>
                </li>
            </div>


        </nav>
    );
};

export default Navbar;