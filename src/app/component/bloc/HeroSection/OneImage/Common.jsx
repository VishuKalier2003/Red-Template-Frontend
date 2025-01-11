'use client';

import React, {useState, useEffect} from "react";
import Image from "next/image";
import axios from "axios";

const CommonHero = ({ hero, onClick }) => {
    const[color, setColor] = useState(false);
    useEffect(() => {
        const getColor = async() => {
        const present = await axios.get(`https://template-red.df.r.appspot.com/pane/search/tag?dataKey=${hero.dataKey}`);
        if(present.data !== undefined) {
            const colorValue = await axios.get(`https://template-red.df.r.appspot.com/one-hero/color?dataKey=${hero.dataKey}`);
            setColor(colorValue.data);
            }
        }
        getColor();
    }, [hero]);
    return(
        <div className={`relative w-full h-[80vh] grid grid-flow-col grid-cols-2 gap-0 ${color ? "back-cadmium-red" : "back-chinese-black"}`} onClick={() => {onClick(hero.dataKey)}}>
            <section className="relative flex justify-center items-center">
                <div className="relative w-3/4 h-2/3 flex justify-center items-center">
                    <section className="relative m-[0.5rem] md:m-[1.5rem]">
                        <p className={`mb-[0.75rem] md:mb-[1.5rem] playwrite-font-extrabold text-sm md:text-[2rem] lg:text-[2.5rem] ${color ? "fore-eerie-black" : "fore-cadmium-red"}`}>{hero.heroTitle || "Site Sculptor"}</p>
                        <p className="mb-[0.75rem] md:mb-[1.5rem] poppins-regular text-[0.75rem] md:text-[1rem] lg:text-[1.5rem] fore-gray2">{hero.heroContent || "An Automated Solution for creating any website in minutes"}</p>
                        <button className={`relative pl-[1rem] pr-[1rem] pt-[0.25rem] pb-[0.25rem] text-[0.75rem] md:text-[1rem poppins-semibold ${color ? "back-black fore-white" : "back-scarlet fore-chinese-black"} rounded-lg`}>{hero.heroButton|| "Check Out"}</button>
                    </section>
                </div>
            </section>
            <section className="relative flex justify-center items-center">
                <div className="relative w-3/4 h-2/3 flex justify-center items-center">
                    <Image src='/next.svg' width={100} height={200} alt="" className="w-full h-full" />
                </div>
            </section>
        </div>
    )
}

export default CommonHero;
