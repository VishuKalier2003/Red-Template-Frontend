'use client';

import React from "react";
import { PaneConsumer } from "../context/PaneContext";
import { HeroConsumer } from "../context/HeroContext";
import { TemplateConsumer } from "../context/TemplateContext";

const WorkArea = () => {
    const { paneKeys } = PaneConsumer();
    const { updateHeroKey } = HeroConsumer();
    const { updateTag } = TemplateConsumer();

    const handleClick = (dataKey) => {
        console.log("data key clicked : "+dataKey);
        updateHeroKey(dataKey);
        updateTag(dataKey);
    }

    return(
        <div className="relative">{
            paneKeys.map((pane, index) => {
                return <div className="relative poppins-regular md:text-[0.75rem] lg:text-xl back-black fore-white pl-[1.5rem] pr-[1.5rem] md:pt-[0.25rem] lg:pt-[0.5rem] md:pb-[0.25rem] lg:pb-[0.5rem] md:mb-[0.5rem] lg:mb-[1.25rem] rounded-xl cursor-pointer text-center" key={pane.dataKey} onClick={() => {handleClick(pane.dataKey);}}>{pane.tag}</div>
            })
        }</div>
    )
}

export default WorkArea;
