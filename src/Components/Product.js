import React, {useContext } from 'react';
import { Link } from "react-router-dom";
import { ProdContext } from '../Context';
import "./Product.css";

const Product = props => {

    let item = props.value;
    const { handleCart } = useContext(ProdContext);

    return (
        <div className="main-cont">

            <div className="image-container">
                <img className="image" src={item.img} alt="failed to load" />
            </div>

            <div className="item_desc">
                <div className="item-name">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </div>
                <div className="button-class">
                    {item.count===0 ?
                        (<button className="button" onClick={() => handleCart(item.id)}>+</button>):(
                            <Link to="/Cart" >  <button >in cart</button></Link>
                        )}
                </div>
            </div>

        </div>
    );
};

export default Product;