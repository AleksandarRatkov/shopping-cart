import React from "react";
import "./CartItem.css"
import { useDispatch } from 'react-redux'
import { quantityChanged, removeFromCart } from "./cartSlice";

const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    const onItemQuantityChange = (e) => {
        dispatch(quantityChanged({ id: item.id, quantity: +e.target.value }))
    }

    const onRemoveItem = () => {
        dispatch(removeFromCart({ id: item.id}))
    }

    return (
        <div className="row cart my-4">
            <div className="col-4 col-md-2 d-flex justify-content-start px-0">
                <img src={item.image} className="cart-item-img" alt={item.id} />
            </div>
            <div className="col-md-1 d-flex m-auto">
                <input type="number" onChange={onItemQuantityChange} min="1" value={item.quantity} className="form-control" id={item.id} />
            </div>
            <div className="col-8 col-md-9 pr-0">
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