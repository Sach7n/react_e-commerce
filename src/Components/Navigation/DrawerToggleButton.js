import React from 'react';
import "./DrawerToggleButton.css"

const DrawerToggleButton = props => {
    let toggleClasses='toggle_button_div';
    if(props.show)
    {toggleClasses='toggle_button_div close'}

    return (
        <button className={toggleClasses} onClick={props.click1}>
            <div className="toggle_button_line1"></div>
            <div className="toggle_button_line2"></div>
            <div className="toggle_button_line3"></div>

        </button>
    );
};

export default DrawerToggleButton;