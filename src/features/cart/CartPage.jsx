import React from "react";
import "./CartPage.css"
import CartTotal from "./CartTotal";

const CartPage = () => {

    const items = [
        {
            "id": 1,
            "title": "Shop Item 1",
            "price": 55,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image1.jpg"
        },
        {
            "id": 2,
            "title": "Shop Item 2",
            "price": 18,
            "description": "Ut enim ad minim veniam.",
            "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image2.jpeg"
        },
        {
            "id": 3,
            "title": "Shop Item 3",
            "price": 820,
            "description": "Aliquip ex ea commodo consequat.",
            "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image3.jpeg"
        },
        {
            "id": 4,
            "title": "Shop Item 4",
            "price": 536,
            "description": "Exercitation ullamco laboris nisi ut aliquip.",
            "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image4.jpeg"
        },
        {
            "id": 5,
            "title": "Shop Item 5",
            "price": 88,
            "description": "Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
            "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image5.jpeg"
        },
        {
            "id": 6,
            "title": "Shop Item 6",
            "price": 43,
            "description": "Pariatur excepteur sint occaecat.",
            "image": "https://raw.githubusercontent.com/brankostancevic/products/master/images/image6.jpeg"
        }
    ]
    return (
        <div className="container mt-5">
            <p className="cart-title">Your Cart</p>
            {items.map((item) => (
                <div className="row cart my-4" key={item.id}>
                    <div className="col-4 col-md-2 d-flex justify-content-start px-0">
                        <img src={item.image} className="cart-item-img" width="110" height="67" alt={item.id} />
                    </div>
                    <div className="col-8 col-md-10 px-0">
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
                                <p className="text-end cart-item-remove">Remove</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="row cart border-0 my-4">
                <CartTotal />
            </div>
        </div>

    )
}

export default CartPage