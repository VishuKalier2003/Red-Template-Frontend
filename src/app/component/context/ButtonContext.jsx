'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

const ButtonContext = createContext();

export const ButtonConsumer = () => useContext(ButtonContext);

export const ButtonProvider = ({ children }) => {
    // Imp- All component selection actions and current selected button are maintained here
    const [nav1, setNav1] = useState(false);
    const [nav2, setNav2] = useState(false);
    const [active, setActive] = useState("");
    const [heroCommon, setHeroCommon] = useState(false);
    const [heroOld, setHeroOld] = useState(false);
    const [heroCentered, setHeroCentered] = useState(false);
    const [heroVariant, setHeroVariant] = useState(false);
    const [heroHorizon, setHeroHorizon] = useState(false);
    const [contentOpened, setContentOpened] = useState(false);

    useEffect(() => {}, []);

    const updateNav1 = () => {
        setNav1(!nav1); setContentOpened(!contentOpened);
        setActive("Navbar Black");
    }

    const updateNav2 = () => {
        setNav2(!nav2); setContentOpened(!contentOpened);
        setActive("Navbar Red");
    }

    const updateHeroCommon = () => {
        setHeroCommon(!heroCommon); setContentOpened(!contentOpened);
        setActive("Common");
        console.log("active : "+active);
    }

    const updateHeroOld = () => {
        setHeroOld(!heroOld); setContentOpened(!contentOpened);
        setActive("Old School");
    }

    const updateHeroCentered = () => {
        setHeroCentered(!heroCentered); setContentOpened(!contentOpened);
        setActive("Centered")
    }

    const updateHeroVariant = () => {
        setHeroVariant(!heroVariant); setContentOpened(!contentOpened);
        setActive("Variant");
    }

    const updateHeroHorizon = () => {
        setHeroHorizon(!heroHorizon); setContentOpened(!contentOpened);
        setActive("Horizon");
    }

    return(
        <ButtonContext.Provider value={{nav1, setNav1, updateNav1, contentOpened, nav2, setNav2, updateNav2, active, setActive, heroCommon, setHeroCommon, heroOld, setHeroOld, heroCentered, setHeroCentered, updateHeroCommon, updateHeroOld, updateHeroCentered, heroVariant, heroHorizon, setHeroVariant, setHeroHorizon, updateHeroVariant, updateHeroHorizon}}>
            {children}
        </ButtonContext.Provider>
    )
}
