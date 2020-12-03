import React, { useContext } from 'react';
import CartItems from './CartItems';
import { ProdContext } from '../Context';
import './Cart.css';



const Cart = props => {

    const { items, loading, setLoading } = useContext(ProdContext);
    console.log(items)
    return (
        <>
            {(items.length==0) ? (
                <h1>Your cart is empty</h1>

            ) : (
                    <div className="main_cart">
                        <div>
                            <h1>Your shopping cart</h1>
                            <h2>Item details</h2>
                        </div>
                        {items.map(value => <CartItems key={value.id} value={value} />)}
                    </div>

                )
            }
        </>
    );
};

export default Cart;