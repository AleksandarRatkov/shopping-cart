import React from "react";
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom";
import CartIconDropdown from "./CartIconDropdown";

const Navbar = () => {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand logo">
                    <img src="./EtonLogo.png" alt="Logo" width="153" height="41" />
                </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-50">
                            <Link className="text-decoration-none" to="/"><span className="nav-link header-title">Shop</span></Link>
                        </li>

                        {location.pathname !== "/cart" && (
                            <CartIconDropdown />
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar