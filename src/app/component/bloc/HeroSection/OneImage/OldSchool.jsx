'use client';

import axios from "axios";
import React, {useState, useEffect} from "react";

const OldSchoolHero = ({hero, onClick}) => {
    const[color, setColor] = useState(false);

    useEffect(() => {
        const getColor = async() => {
            console.log(hero.dataKey);
        const present = await axios.get(`http://localhost:8081/dom/search/nodeByEntry/tag?dataKey=${hero.dataKey}`);
        console.log(present.data);
        if(present.data === true) {
            const colorValue = await axios.get(`http://localhost:8080/one-hero/color?dataKey=${hero.dataKey}`);
            setColor(colorValue.data);
            }
        }
        getColor();
    }, [hero]);

    return(
        <div className={`relative w-full h-[80vh] flex justify-center items-center ${color ? "back-red" : "back-chinese-black"}`} onClick={() => {onClick(hero.dataKey)}}>
            <section className="absolute w-4/5 h-2/3">
                <img src="/next.svg" className="w-full h-full" />
            </section>
            <section className="relative w-1/3 h-auto flex flex-col items-center z-20">
                <div className={`relative mb-[0.75rem] md:mb-[1.5rem] playwrite-font-extrabold text-sm md:text-[2rem] lg:text-[2.5rem] ${color ? "fore-eerie-black" : "fore-cadmium-red"}`}>{hero.heroTitle || "Site Sculptor"}</div>
                <div className="relative mb-[0.75rem] md:mb-[1.5rem] poppins-regular text-[0.75rem] md:text-[1rem] lg:text-[1.5rem] text-center fore-gray2">{hero.heroContent || "An Automated Solution for creating any website in minutes"}</div>
                <button className={`relative w-2/3 md:w-1/2 pl-[0.75rem] pr-[0.75rem] pt-[0.25rem] pb-[0.25rem] text-[0.75rem] md:text-[1rem] lg://localhost:8080 rounded-lg`}>{hero.heroButton || "Check Out"}</button>
            </section>
        </div>
    )
}

export default OldSchoolHero;
