import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
    return (
        <div className="flex justify-between w-full">
            <img src={logo} alt="Logo" />
            <div className="flex items-center justify-between gap-10">
                <a
                    href="/"
                    className="navLink hover:cursor-pointer hover:text-[#F15D51]"
                >
                    Home
                </a>
                <a
                    href="/"
                    className="navLink hover:cursor-pointer hover:text-[#F15D51]"
                >
                    New
                </a>
                <a
                    href="/"
                    className="navLink hover:cursor-pointer hover:text-[#F15D51]"
                >
                    Popular
                </a>
                <a
                    href="/"
                    className="navLink hover:cursor-pointer hover:text-[#F15D51]"
                >
                    Trending
                </a>
                <a
                    href="/"
                    className="navLink hover:cursor-pointer hover:text-[#F15D51]"
                >
                    Categories
                </a>
            </div>
        </div>
    );
};

export default Navbar;
