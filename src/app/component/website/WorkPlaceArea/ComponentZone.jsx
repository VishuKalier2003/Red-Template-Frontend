'use client';

import React, { useState } from "react";
import { ButtonConsumer } from "../../context/ButtonContext";
import AlertBox from "../data/InfoBox";
import { HeroConsumer } from "../../context/HeroContext";

const ComponentZone = () => {
    const { heroCommon, heroOld, heroCentered, updateHeroCommon, updateHeroOld, updateHeroCentered, heroVariant, updateHeroVariant, heroHorizon, updateHeroHorizon } = ButtonConsumer();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const { updateHeroType, contain, updateContain } = HeroConsumer();

    const onHeroHandleCommon = () => {
        updateHeroCommon();
        updateHeroType("Common");
        console.log("After clicking : heroCommon "+heroCommon);
    }

    const onHeroHandleOld = () => {
        updateHeroOld();
        updateHeroType("Old School");
    }

    const onHeroHandleCentered = () => {
        updateHeroCentered();
        updateHeroType("Centered");
    }

    const onHeroHandleVariant = () => {
        updateHeroVariant();
        updateHeroType("Variant");
    }

    const onHeroHandleHorizon = () => {
        updateHeroHorizon();
        updateHeroType("Horizon");
    }

    const onHeroHandleContain = () => {
        updateContain();
        updateHeroType("Contain");
    }

    const showAlert = (message, file) => {
        setAlertMessage(message);
        setImgSrc(file);
        setAlertVisible(true);
    };

    const closeAlert = () => {
        setAlertVisible(false);
    };

    return (
        <div className={`relative w-[20vw] h-full flex flex-col border-style-red-full block-shadow back-eerie-black`}>
            <p className="relative text-center pt-[0.15rem] md:pt-[0.25rem] pb-[0.15rem] md:pb-[0.25rem] back-black poppins-light fore-gray text-lg md:text-xl">
                Components
            </p>
            <section className="relative w-full pt-[4px] pb-[4px]">
                <p className="relative poppins-regular back-chinese-black fore-scarlet text-center lg:text-[1rem] ml-[0.75rem] mr-[0.75rem]">Hero Section</p>
                <div className="relative w-full grid grid-flow-row grid-cols-2 gap-4 lg:gap-6 p-3">
                    <div className="relative flex flex-col justify-center items-center">
                        <img
                            src="/hero-common.jpg"
                            className={`w-[4rem] lg:w-[5rem] border-button`}
                            onMouseEnter={onHeroHandleCommon}
                            onClick={() => showAlert("Use this navbar for creating an impactful website, fill in the content using the forum given on the right. Preview currently showing on the screen", 'hero-common.jpg')}
                        />
                        <p className={`relative text-sm poppins-light ${heroCommon ? "fore-cadmium-red" : "fore-white"}`}>Common</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center">
                    <img
                            src="/hero-old-school.jpg"
                            className={`w-[4rem] lg:w-[5rem] border-button $`}
                            onMouseEnter={onHeroHandleOld}
                            onClick={() => showAlert("Use this navbar for creating an impactful website, fill in the content using the forum given on the right. Preview currently showing on the screen", 'hero-old-school.jpg')}
                        />
                        <p className={`relative text-sm poppins-light ${heroOld ? "fore-cadmium-red" : "fore-white"}`}>Old School</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center">
                    <img
                            src="/hero-centered.jpg"
                            className={`w-[4rem] lg:w-[5rem] border-button $`}
                            onMouseEnter={onHeroHandleCentered}
                            onClick={() => showAlert("Use this navbar for creating an impactful website, fill in the content using the forum given on the right. Preview currently showing on the screen", 'hero-centered.jpg')}
                        />
                        <p className={`relative text-sm poppins-light ${heroCentered ? "fore-cadmium-red" : "fore-white"}`}>Centered</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center">
                    <img
                            src="/hero-variant.jpg"
                            className={`w-[4rem] lg:w-[5rem] border-button $`}
                            onMouseEnter={onHeroHandleVariant}
                            onClick={() => showAlert("Use this navbar for creating an impactful website, fill in the content using the forum given on the right. Preview currently showing on the screen", 'hero-variant.jpg')}
                        />
                        <p className={`relative text-sm poppins-light ${heroVariant ? "fore-cadmium-red" : "fore-white"}`}>Variant</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center">
                    <img
                            src="/hero-horizon.jpg"
                            className={`w-[4rem] lg:w-[5rem] border-button $`}
                            onMouseEnter={onHeroHandleHorizon}
                            onClick={() => showAlert("Use this navbar for creating an impactful website, fill in the content using the forum given on the right. Preview currently showing on the screen", 'hero-horizon.jpg')}
                        />
                        <p className={`relative text-sm poppins-light ${heroHorizon ? "fore-cadmium-red" : "fore-white"}`}>Horizon</p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center">
                    <img
                            src="/hero-horizon.jpg"
                            className={`w-[4rem] lg:w-[5rem] border-button $`}
                            onMouseEnter={onHeroHandleContain}
                            onClick={() => showAlert("Use this navbar for creating an impactful website, fill in the content using the forum given on the right. Preview currently showing on the screen", 'hero-horizon.jpg')}
                        />
                        <p className={`relative text-sm poppins-light ${contain ? "fore-cadmium-red" : "fore-white"}`}>Contained</p>
                    </div>
                </div>
            </section>
            <AlertBox
                visible={alertVisible}
                onClose={closeAlert}
                title="Component Information"
                imgSrc={imgSrc}
            >
                <p>{alertMessage}</p>
            </AlertBox>
        </div>
    );
};

export default ComponentZone;
