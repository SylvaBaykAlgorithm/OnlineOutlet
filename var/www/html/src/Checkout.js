import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

export default function Checkout() {
    return (
        <div className="checkout">
            <div className="left-side">
                <h1 className="checkoutHeader">Shopping Cart</h1>
                <button className="gametimeButton"> Its Gametime</button>
            </div>
            <div className="right-side">
                <Subtotal />
            </div>
            
        </div>

    )
}
