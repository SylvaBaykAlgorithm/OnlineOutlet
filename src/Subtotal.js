import { SportsBasketball } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"

function Subtotal() {

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{'{value}'}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button className="checkoutButton">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
