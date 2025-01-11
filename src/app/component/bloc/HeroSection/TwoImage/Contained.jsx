'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";

const ContainedHero = ({ hero, onClick }) => {
    const[color, setColor] = useState(false);
    useEffect(() => {
        const getColor = async() => {
        const present = await axios.get(`https://template-red.df.r.appspot.com/pane/search/tag?dataKey=${hero.dataKey}`);
        if(present.data !== undefined) {
            const colorValue = await axios.get(`https://template-red.df.r.appspot.com/two-hero/color?dataKey=${hero.dataKey}`);
            setColor(colorValue.data);
            }
        }
        getColor();
    }, [hero]);
    return(
        <div className={`relative w-full h-[80vh] back-red2 flex ${color ? "back-cadmium-red" : "back-chinese-black"}`}>
            <section className="relative w-1/2 h-full flex flex-col items-center justify-end pl-[2rem] md:pl-[4rem]" onClick={() => {onClick(hero.dataKey)}}>
                <div className="relative w-full h-[14rem] mb-[4rem]">
                    <img src="/next.svg" className="w-full h-full" />
                </div>
                <div className="relative w-full h-[14rem]">
                    <img src="/next.svg" className="w-full h-full" />
                </div>
            </section>
            <section className="relative w-1/2 h-full flex flex-col justify-center pl-[4rem] pt-[4rem]">
                <p className={`relative mb-[1.5rem] md:mb-[2.5rem] playwrite-font-extrabold text-sm md:text-[2rem] lg:text-[2.5rem] ${color ? "fore-eerie-black" : "fore-cadmium-red"}`}>{hero.heroTitle}</p>
                <div className="relative w-2/3 mb-[1.5rem] md:mb-[2.5rem] poppins-regular text-[0.75rem] md:text-[1rem] lg:text-[1.5rem] fore-gray2">{hero.heroContent || "An Automated Solution for creating any websites in minutes"}</div>
                <button className={`relative w-1/2 md:w-1/3 pl-[0.75rem] pr-[0.75rem] pt-[0.25rem] pb-[0.25rem] text-[0.75rem] md:text-[1rem] lg:text-[1.5rem] poppins-semibold rounded-lg mb-[0.75rem] md:mb-[2rem] ${color ? "back-black fore-white" : "back-scarlet fore-chinese-black"}`}>{hero.heroButton || "Click Here"}</button>
            </section>
        </div>
    )
}

export default ContainedHero;
