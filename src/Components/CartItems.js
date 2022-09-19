import React, { useContext } from 'react';
import { ProdContext } from '../Context';
import "./CartItem.css";

const CartItems = props => {

    let item = props.value;
    const { increament, decreament, removeItem } = useContext(ProdContext);


    return (
        <div className="cart_container">
            <div className="item_details">
                <img className="cart_image" src={item.img} alt="/" />
                <p className="item_title">{item.title}</p>
            </div>

            <div className="qty_class">
                <div className="tag"><p>qty</p></div>
                <div className="qty_items">
                    <button onClick={() => increament(item.id)}>+</button>
                    <p>{item.count}</p>
                    <button onClick={() => decreament(item.id)}>-</button>
                </div>
            </div>

            <div className="price_class">
                <div className="tag"><p>Price</p></div>
                <div>    <p>${item.price}</p></div>
            </div>

            <div className="total_class">
                <div className="tag"><p>Total</p></div>
                <div>    <p>${item.total}</p></div>
            </div>

            <div className="remove_class">
                <button onClick={() => removeItem(item.id)}>x</button>
            </div>
            <div>
            </div>
        </div>
    );
};

export default CartItems;