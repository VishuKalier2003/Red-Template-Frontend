'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { HeroConsumer } from "../../context/HeroContext";
import { TemplateConsumer } from "../../context/TemplateContext";

const TwoHeroForm = () => {
    const { heroKey, heroType, addTwoHeroSection, deleteTwoHeroSection } = HeroConsumer();
    const { fetchTemplate } = TemplateConsumer();

    const [heroData, setHeroData] = useState({
        dataKey: heroKey,
        heroLink1: "",
        heroLink2: "",
        heroTitle: "",
        heroContent: "",
        heroButton: "",
        customName: "",
        colorSwitch: false // Initialize as boolean
    });

    useEffect(() => {
        if (heroKey) {
            setHeroData((prevData) => ({ ...prevData, heroKey, dataKey: heroKey }));
        }
    }, [heroKey]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/two-hero/update?tag=${heroType}`, heroData);
            if (response.status === 200)
                fetchTemplate(); // Re-fetch the entire template
        } catch (error) {
            console.error(error);
        }
    };

    const createHeroHere = () => {
        addTwoHeroSection(heroType);
    }

    const deleteHeroHere = () => {
        deleteTwoHeroSection();
    }

    return (
        <div className="relative w-full h-full flex flex-col">
            <button className="relative w-full text-center lg:text-[1rem] fore-black back-red2 poppins-semibold pt-[0.25rem] pb-[0.25rem] cursor-pointer border-button mb-[1.5rem]" onClick={() => {createHeroHere()}}>Create Hero</button>
            <button className="relative w-full text-center lg:text-[1rem] fore-black back-red2 poppins-semibold pt-[0.25rem] pb-[0.25rem] cursor-pointer border-button mb-[1.5rem]" onClick={() => {deleteHeroHere()}}>Delete Hero</button>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="relative mb-[1rem] ml-[6px] mr-[6px] pl-[4px] text-[0.75rem] md:text-[1rem] w-[18vw] poppins-regular">First Image Link</label>
                    <input className="relative back-black-light fore-white poppins-light ml-[6px] mr-[6px] pl-[4px] text-lg md:text-xl w-[18vw] rounded-lg mb-[1rem]"
                        type="text"
                        value={heroData.heroLink1}
                        placeholder=""
                        onChange={(e) => setHeroData({ ...heroData, heroLink1: e.target.value })}
                    />
                </div>
                <div>
                    <label className="relative mb-[1rem] ml-[6px] mr-[6px] pl-[4px] text-[0.75rem] md:text-[1rem] w-[18vw] poppins-regular">Second Image Link</label>
                    <input className="relative back-black-light fore-white poppins-light ml-[6px] mr-[6px] pl-[4px] text-lg md:text-xl w-[18vw] rounded-lg mb-[1rem]"
                        type="text"
                        value={heroData.heroLink2}
                        placeholder=""
                        onChange={(e) => setHeroData({ ...heroData, heroLink2: e.target.value })}
                    />
                </div>
                <div>
                    <label className="relative mb-[1rem] ml-[6px] mr-[6px] pl-[4px] text-[0.75rem] md:text-[1rem] w-[18vw] poppins-regular">Title</label>
                    <input className="relative back-black-light fore-white poppins-light ml-[6px] mr-[6px] pl-[4px] text-lg w-[18vw] rounded-lg mb-[1rem]"
                        type="text"
                        value={heroData.heroTitle}
                        onChange={(e) => setHeroData({ ...heroData, heroTitle: e.target.value })}
                    />
                </div>
                <div>
                    <label className="relative mb-[1rem] ml-[6px] mr-[6px] pl-[4px] text-[0.75rem] md:text-[1rem] w-[18vw] poppins-regular">Content</label>
                    <input className="relative back-black-light fore-white poppins-light ml-[6px] mr-[6px] pl-[4px] text-lg w-[18vw] rounded-lg mb-[1rem]"
                        type="text"
                        value={heroData.heroContent}
                        onChange={(e) => {setHeroData({...heroData, heroContent : e.target.value})}} />
                </div>
                <div>
                    <label className="relative mb-[1rem] ml-[6px] mr-[6px] pl-[4px] text-[0.75rem] md:text-[1rem] w-[18vw] poppins-regular">Button Text</label>
                    <input className="relative back-black-light fore-white poppins-light ml-[6px] mr-[6px] pl-[4px] text-lg w-[18vw] rounded-lg mb-[1rem]"
                        type="text"
                        value={heroData.heroButton}
                        onChange={(e) => {setHeroData({...heroData, heroButton : e.target.value})}} />
                </div>

                {/* Radio Buttons for Color Switch */}
                <div className="mb-4">
                    <label className="relative mb-[1rem] ml-[6px] mr-[6px] pl-[4px] text-[0.75rem] md:text-[1rem] w-[18vw] poppins-regular">Color Switch</label>
                    <div>
                        <label className="inline-flex items-center mr-4 ml-4">
                            <input
                                type="radio"
                                name="colorSwitch"
                                value="true"
                                checked={heroData.colorSwitch == true}
                                onChange={() => setHeroData({ ...heroData, colorSwitch: true })}
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="colorSwitch"
                                value="false"
                                checked={heroData.colorSwitch == false}
                                onChange={() => setHeroData({ ...heroData, colorSwitch: false })}
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                </div>

                <button type="submit" className="relative w-full text-center lg:text-[1rem] fore-black back-red2 poppins-semibold pt-[0.25rem] pb-[0.25rem] cursor-pointer border-button">Update Hero</button>
            </form>
        </div>
    );
};

export default TwoHeroForm;
