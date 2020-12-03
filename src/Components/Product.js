import React,{useState,useContext} from 'react';
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
                <button onClick={()=>handleCart(item.id)}>+</button>
            </div>
            </div>
        
        </div>
    );
};

export default Product;