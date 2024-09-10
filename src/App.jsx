import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar.jsx";
import bigImageDesktop from "./images/image-web-3-desktop.jpg";
import bigImageMobile from "./images/image-web-3-mobile.jpg";

import imageOne from "./images/image-retro-pcs.jpg";
import imageTwo from "./images/image-top-laptops.jpg";
import imageThree from "./images/image-gaming-growth.jpg";

const App = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="xl:mx-10 mx-4 md:mt-10 xl:mt-0">
                {width < 768 ? <MobileNavbar /> : <Navbar />}
                <section className="mt-[54px] flex gap-[30px] xl:flex-row flex-col xl:items-start items-center">
                    <div className="flex flex-col max-w-[730px] gap-[30px]">
                        <img
                            src={
                                width < 1280 ? bigImageMobile : bigImageDesktop
                            }
                            alt="Big Desktop"
                            className="w-full"
                        />
                        <div className="flex gap-[30px] justify-between h-full flex-col xl:flex-row">
                            <h1 className="headingXL flex-1">
                                The Bright Future of Web 3.0?
                            </h1>
                            <div className="flex flex-col flex-1 items-start justify-between">
                                <p className="navLink">
                                    We dive into the next evolution of the web
                                    that claims to put the power of the
                                    platforms back into the hands of the people.
                                    But is it really fulfilling its promise?
                                </p>
                                <button className="readMore bg-[#F15D51] py-3 px-8 hover:bg-[#00001A] hover:text-white xl:mt-0 mt-6">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="xl:max-w-[350px] w-[90%] bg-[#00001A] text-white py-8 px-6">
                        <h1 className="headingL">New</h1>
                        <div className="flex flex-col gap-8 h-full max-h-[378px] mt-7">
                            <div className="flex flex-col gap-2 group">
                                <p className="headingS group-hover:text-[#E9AA52] hover:cursor-pointer">
                                    Hydrogen VS Electric Cars
                                </p>
                                <p className="navLink text-[#C5C6CE]">
                                    Will hydrogen-fueled cars ever catch up to
                                    EVs?
                                </p>
                            </div>
                            <div className="border-b-[1px] border-[#5E607A]"></div>
                            <div className="flex flex-col gap-2 group">
                                <p className="headingS group-hover:text-[#E9AA52] hover:cursor-pointer">
                                    The Downsides of AI Artistry
                                </p>
                                <p className="navLink text-[#C5C6CE]">
                                    What are the possible adverse effects of
                                    on-demand AI image generation?
                                </p>
                            </div>
                            <div className="border-b-[1px] border-[#5E607A]"></div>
                            <div className="flex flex-col gap-2 group">
                                <p className="headingS group-hover:text-[#E9AA52] hover:cursor-pointer">
                                    Is VC Funding Drying Up?
                                </p>
                                <p className="navLink text-[#C5C6CE]">
                                    Private funding by VC firms is down 50% YOY.
                                    We take a look at what that means.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-between  gap-8 xl:gap-5 mt-16 xl:flex-row flex-col xl:items-start items-center">
                    <LittleBox
                        number="01"
                        title="Reviving Retro PCs"
                        desc="What happens when old PCs are given modern upgrades?"
                        image={imageOne}
                        className="flex-1"
                    />
                    <LittleBox
                        number="02"
                        title="Top 10 Laptops of 2022"
                        desc="Our best picks for various needs and budgets."
                        image={imageTwo}
                        className="flex-1"
                    />
                    <LittleBox
                        number="03"
                        title="The Growth of Gaming"
                        desc="How the pandemic has sparked fresh opportunities."
                        image={imageThree}
                        className="flex-1"
                    />
                </div>
            </div>
        </div>
    );
};

const LittleBox = ({ number, title, desc, image }) => {
    return (
        <div className="flex gap-6 max-w-[350px] group">
            <img src={image} alt="" className="max-w-[100px] max-h-[127px]" />
            <div className="flex flex-col justify-between ">
                <h1 className="headingM">{number}</h1>
                <a
                    href="/"
                    className="headingXS group-hover:text-[#F15D51] hover:cursor-pointer"
                >
                    {title}
                </a>
                <p className="navLink">{desc}</p>
            </div>
        </div>
    );
};

export default App;
