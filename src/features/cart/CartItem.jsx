import React, { useState } from "react";
import "./CartItem.css"
import { useDispatch } from 'react-redux'
import { quantityChanged, removeFromCart } from "./cartSlice";

const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    const [isRemoving, setIsRemoving] = useState(false);
    const onItemQuantityChange = (e) => {
        dispatch(quantityChanged({ id: item.id, quantity: +e.target.value }))
    }

    const onRemoveItem = () => {
        setIsRemoving(true)
        setTimeout(() => {
            dispatch(removeFromCart({ id: item.id }));
        }, 500);
    }

    return (
        <div className={`row cart my-4 ${isRemoving ? 'animate__animated animate__zoomOut' : ''}`}>
            <div className="col-3 col-md-2 d-flex justify-content-start px-0">
                <img src={item.image} className="cart-item-img" alt={item.id} />
            </div>
            <div className="col-2 col-md-1 d-flex m-auto">
                <input type="number" onChange={onItemQuantityChange} min="1" value={item.quantity} className="form-control" id={item.id} />
            </div>
            <div className="col-7 col-md-9 pr-0">
                <div className="row">
                    <div className="col-7">
                        <p className="text-start cart-item-title">{item.title}</p>
                    </div>
                    <div className="col-5">
                        <p className="text-end cart-item-price">{item.price}$</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <p className="text-start cart-item-description">{item.description}</p>
                    </div>
                    <div className="col-5">
                        <p className="text-end cart-item-remove" onClick={onRemoveItem}>Remove</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem