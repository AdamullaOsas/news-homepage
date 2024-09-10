import React from "react";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconMenuClose from "../images/icon-menu-close.svg";

const Navbar = () => {
    return (
        <div className="flex justify-between w-full">
            <img src={logo} alt="Logo" />
            <div className="flex items-center justify-between gap-10">
                <a href="/" className="navLink">
                    Home
                </a>
                <a href="/" className="navLink">
                    New
                </a>
                <a href="/" className="navLink">
                    Popular
                </a>
                <a href="/" className="navLink">
                    Trending
                </a>
                <a href="/" className="navLink">
                    Categories
                </a>
            </div>
        </div>
    );
};

export default Navbar;
