import React,{useContext} from 'react';
import { ProdContext } from '../Context';
import "./CartItem.css";

const CartItems = props => {
    
    let item = props.value;
    const { increament,decreament,removeItem } = useContext(ProdContext);


    return (
        <div className="cart_container">
            
            <div className="item_details">
            <img className="cart_image" src={item.img} alt="/"/>       
            <p className="item_title">{item.title}</p>
            </div>
            
            
            <div>
            {item.count}       
            </div>
            <div>
            {item.total}       
            </div>
            <div>
            {item.price}       
            </div>
            <button onClick={()=>removeItem(item.id)}>remove item</button>
            <button onClick={()=>increament(item.id)}>+</button>
            <button onClick={()=>decreament(item.id)}>-</button>
            
            <div>
                   
            </div>
        </div>
    );
};

export default CartItems;