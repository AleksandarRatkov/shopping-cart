import React from "react";
import "./CartTotal.css"

const CartTotal = () => {
    return (
        <>
            <div className="col-2 px-0">
                <p className="text-start cart-total">Total</p>
            </div>
            <div className="col-10 px-0">
                <p className="text-end cart-total-amount">5430$</p>
            </div>
        </>
    )
}

export default CartTotal