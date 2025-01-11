'use client';

import React, { useEffect } from "react";
import { ButtonConsumer } from "../../context/ButtonContext";
import OneHeroForm from "../../forum/Hero/OneHeroForum";
import { HeroConsumer } from "../../context/HeroContext";
import TwoHeroForm from "../../forum/Hero/TwoHeroForum";

const ForumZone = () => {
    const {active, heroCommon, heroOld, heroCentered, heroVariant, heroHorizon} = ButtonConsumer();
    const { contain, cover} = HeroConsumer();

    useEffect(() => {console.log("active : "+active);}, []);

    return(
        <div className="relative w-[20vw] h-full back-red flex flex-col block-shadow1 z-0">
            <p className="relative text-center pt-[0.15rem] md:pt-[0.25rem] pb-[0.15rem] md:pb-[0.25rem] back-black poppins-light fore-gray text-lg md:text-xl border-style-red-full">Content</p>
            <div>
                {(heroCommon !== undefined) && (active === "Common") && <OneHeroForm />}
            </div>
            <div>
                {(heroOld !== undefined) && (active === "Old School") && <OneHeroForm />}
            </div>
            <div>
                {(heroCentered !== undefined) && (active === "Centered") && <OneHeroForm />}
            </div>
            <div>
                {(heroVariant !== undefined) && (active === "Variant") && <OneHeroForm />}
            </div>
            <div>
                {(heroHorizon !== undefined) && (active === "Horizon") && <OneHeroForm />}
            </div>
            <div>
                {(contain !== undefined) && (active === "Contain") &&
                <TwoHeroForm />}
            </div>
            <div>
                {(cover !== undefined) && (active === "Cover") &&
                <TwoHeroForm />}
            </div>
        </div>
    )
}

export default ForumZone;
