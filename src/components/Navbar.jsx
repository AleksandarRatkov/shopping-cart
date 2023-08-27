import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container">
            <div>
                <Link className="navbar-brand" to="/">
                    <img src="./EtonLogo.png" alt="Bootstrap" width="153" height="41" />
                </Link>
            </div>
                
            <div>
                <span className="nav-item">
                    <Link className="navbar-brand text-white" to="/">
                        Shop
                    </Link>
                </span>
                <Link className="navbar-brand" to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31" viewBox="0 0 35 31" fill="none">
                    <path d="M31.6872 18.0791L34.5236 5.59914C34.7284 4.69806 34.0435 3.84 33.1194 3.84H9.55248L9.00252 1.1514C8.86548 0.48126 8.2758 0 7.59174 0H1.44C0.6447 0 0 0.6447 0 1.44V2.4C0 3.1953 0.6447 3.84 1.44 3.84H5.63298L9.84786 24.4461C8.8395 25.026 8.16 26.1133 8.16 27.36C8.16 29.2157 9.66432 30.72 11.52 30.72C13.3757 30.72 14.88 29.2157 14.88 27.36C14.88 26.4196 14.4932 25.5699 13.8706 24.96H26.4494C25.8268 25.5699 25.44 26.4196 25.44 27.36C25.44 29.2157 26.9443 30.72 28.8 30.72C30.6557 30.72 32.16 29.2157 32.16 27.36C32.16 26.0297 31.3867 24.8801 30.2653 24.3357L30.5963 22.8791C30.8011 21.9781 30.1162 21.12 29.1921 21.12H13.087L12.6943 19.2H30.283C30.9554 19.2 31.5382 18.7348 31.6872 18.0791Z" fill="white"/>
                    </svg>
                </Link>
                {/* <img src="./shopping-cart-solid.png" alt="Bootstrap" width="35" height="31" /> */}
            </div>
        </div>
        </nav>
    )
}

export default Navbar