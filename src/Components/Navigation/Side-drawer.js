import React from 'react';
import { Link } from "react-router-dom";
import "./Side-drawer.css"

const Sidedrawer = props => {

  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }

  return (

    <nav className={drawerClasses} onClick={props.click1}>
      <div className="sidedrawer_items" >
        <ul>
          <li>
            <Link to="/SignUp" >SignUp </Link>
          </li>
          <li>
            <Link to="/Cart" >My Cart </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Sidedrawer;

