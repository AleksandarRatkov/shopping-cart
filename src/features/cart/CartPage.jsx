import React from "react";
import "./CartPage.css"
import CartTotal from "./CartTotal";
import { selectAllCartItems } from "./cartSlice";
import { useSelector } from 'react-redux'
import CartItem from "./CartItem";

const CartPage = () => {

    const cartItems = useSelector(selectAllCartItems)

    return (
        <div className="container mt-5">
            <p className="cart-title">{cartItems.length !== 0 ? 'Your Cart' : 'Your Cart is empty'}</p>
            {cartItems.map((item) => (
                <CartItem item={item} key={item.id} />
            ))}
            {cartItems.length !== 0 && (
                <div className="row cart border-0 my-4">
                    <CartTotal />
                </div>
            )}
        </div>

    )
}

export default CartPage