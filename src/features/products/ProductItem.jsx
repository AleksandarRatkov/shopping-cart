import React from "react";
import { addToCart } from "../cart/cartSlice";
import { useDispatch } from 'react-redux'
import "./ProductItem.css"

const ProductItem = ({ item }) => {

    const dispatch = useDispatch()
    const addItemToCart = () => {
        dispatch(addToCart({ item }))
    }

    return (
        <div className="cols-12 col-md-6 col-lg-4">
            <div className="card product-card">
                <img src={item.image} className="card-img-top product-image" alt={item.id} />
                <div className="card-body">
                    <div className="row">
                        <div className="col-7">
                            <p className="card-text text-start product-title">{item.title}</p>
                        </div>
                        <div className="col-5">
                            <p className="card-text text-end product-price">{item.price}$</p>
                        </div>
                    </div>
                    <p className="text-start">{item.description.length > 50 ? item.description.slice(0, 60) + "..." : item.description}</p>
                </div>
                <div className="text-center">
                    <button className="btn btn-add-cart" onClick={addItemToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem