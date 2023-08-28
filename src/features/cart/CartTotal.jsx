import React from "react";
import "./CartTotal.css"
import { selectCartTotal } from "./cartSlice";
import { useSelector } from 'react-redux'

const CartTotal = () => {

    const total = useSelector(selectCartTotal)

    return (
        <>
            <div className="col-2 px-0">
                <p className="text-start cart-total">Total</p>
            </div>
            <div className="col-10 px-0">
                <p className="text-end cart-total-amount">{total}$</p>
            </div>
        </>
    )
}

export default CartTotal