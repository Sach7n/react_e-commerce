import React, { useState } from 'react'
import Backdrop from './Backdrop'
import Navbar from "./Navbar"
import Sidedrawer from './Side-drawer'
import DrawerToggleButton from './DrawerToggleButton';
import "./MainNavigation.css";


export default function MainNavigation() {
const [show,setShow]= useState(false)

const drawerToggleClickHandler = () => {
  return setShow(!show)
  
}
const backdropClickHandler = () => {
  setShow(false);
}
let backdrop;
if(show){
 backdrop=<Backdrop click={backdropClickHandler}/>
}

    return (
        <div className="main-navigation">
         <div className="navbar"> <Navbar /> </div> 
         <div className="sideDrawer"> <Sidedrawer show={show}/> </div>
          {backdrop}
        <div className="toggle-button"><DrawerToggleButton click1={drawerToggleClickHandler} show={show}/></div>

        </div>
    )
}
