import React, { useState } from "react";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconMenuClose from "../images/icon-menu-close.svg";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex justify-between items-center mt-6">
                <img src={logo} alt="Logo" className="" />
                <img
                    src={iconMenu}
                    alt="Menu"
                    onClick={toggleClose}
                    className=""
                />
            </div>
            {isOpen && (
                <div className="w-[60%] bg-white fixed top-0 right-0 h-full">
                    <div className="flex items-center justify-end py-7 px-5">
                        <img
                            src={iconMenuClose}
                            alt="Close Menu"
                            onClick={toggleClose}
                        />
                    </div>

                    <nav className="flex flex-col gap-6 px-8 mt-[86px]">
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
                    </nav>
                </div>
            )}
        </>
    );
};

export default MobileNavbar;
