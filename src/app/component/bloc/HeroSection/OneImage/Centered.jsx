'use client';

import React, {useState, useEffect} from "react";
import axios from "axios";

const CenteredHero = ({hero, onClick}) => {

    const[color, setColor] = useState(false);

    useEffect(() => {
        const getColor = async() => {
        const present = await axios.get(`http://localhost:8081/dom/search/nodeByEntry/tag?dataKey=${hero.dataKey}`);
        if(present.data === true) {
            const colorValue = await axios.get(`http://localhost:8080/one-hero/color?dataKey=${hero.dataKey}`);
            setColor(colorValue.data);
            }
        }
        getColor();
    }, [hero]);

    return(
        <div className={`relative w-full h-[80vh] flex flex-col justify-end items-center ${color ? "back-cadmium-red" : "back-chinese-black"}`} onClick={() => {onClick(hero.dataKey)}}>
                <div className={`relative mb-[0.75rem] md:mb-[1.5rem] playwrite-font-extrabold text-sm md:text-[2rem] lg:text-[2.5rem] ${color ? "fore-eerie-black" : "fore-cadmium-red"}`}>{hero.heroTitle || "Site Sculptor"}</div>
                <div className="relative w-2/3 mb-[0.75rem] md:mb-[1.5rem] poppins-regular text-[0.75rem] md:text-[1rem] lg:text-[1.5rem] text-center fore-gray2">{hero.heroContent || "An Automated Solution for creating any website in minutes"}</div>
                <button className={`relative w-auto md:w-auto pl-[0.75rem] pr-[0.75rem] pt-[0.25rem] pb-[0.25rem] text-[0.75rem] md:text-[1rem] lg:text-[1.5rem] poppins-semibold rounded-lg mb-[0.75rem] md:mb-[2rem] ${color ? "back-black fore-white" : "back-scarlet fore-chinese-black"}`}>{hero.heroButton || "Check Out"}</button>
                <section className="relative w-4/5 h-1/2">
                    <img src="/next.svg" className="w-full h-full" />
                </section>
        </div>
    )
}

export default CenteredHero;
