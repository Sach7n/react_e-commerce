import React from 'react';
import "./Navbar1.css"
import { Link } from "react-router-dom";

const Navbar1 = props => {
    return (
        <nav className="main-nav">

            <div className="nav-logo"><Link to="/">
                LOGO
            </Link></div>

            <div />

            <div className="nav-items">
                <li>
                    <Link to="/SignUp" >SignUp </Link>
                </li>
                <li>
                    <Link to="/Cart" >My Cart </Link>
                </li>
            </div>


        </nav>
    );
};

export default Navbar1;