'use client';

import React, { useEffect } from "react";
import { TemplateConsumer } from "./context/TemplateContext";
import { HeroConsumer } from "./context/HeroContext";
import { ButtonConsumer } from "./context/ButtonContext";
import CommonHero from "./bloc/HeroSection/OneImage/Common";
import OldSchoolHero from "./bloc/HeroSection/OneImage/OldSchool";
import CenteredHero from "./bloc/HeroSection/OneImage/Centered";
import VariantHero from "./bloc/HeroSection/OneImage/Variant";
import HorizonHero from "./bloc/HeroSection/OneImage/Horizon";
import ContainedHero from "./bloc/HeroSection/TwoImage/Contained";

const View = () => {
    const {template, fetchTemplate} = TemplateConsumer();
    const { updateHeroKey } = HeroConsumer();
    const { updateTag } = ButtonConsumer();

    // Ensure the navbar data is refreshed when View is mounted
    useEffect(() => {
        fetchTemplate();
    }, [fetchTemplate]);

    //! Function for handling click and id selection in work area
    const handleClick = (id) => {
        updateHeroKey(id);  // Updating Hero id
        updateTag(id);      // Updating tag of selected component
    };

    const showResultsNavbar1 = () => {
      return template.map((templateItem) => {
        if(templateItem.tag === "Common") {
          return(
            <CommonHero key={templateItem.dataKey}
            hero={templateItem}
            onClick={() => handleClick(templateItem.dataKey)} />
          )
        }
        else if(templateItem.tag === "Old School") {
          return(
            <OldSchoolHero key={templateItem.dataKey}
            hero={templateItem}
            onClick={() => handleClick(templateItem.dataKey)} />
          )
        }
        else if(templateItem.tag === "Centered") {
          return(
            <CenteredHero key={templateItem.dataKey}
            hero={templateItem}
            onClick={() => handleClick(templateItem.dataKey)} />
          )
        }
        else if(templateItem.tag === "Variant") {
          return(
            <VariantHero key={templateItem.dataKey}
            hero={templateItem}
            onClick={() => handleClick(templateItem.dataKey)} />
          )
        }
        else if(templateItem.tag === "Horizon") {
          return(
            <HorizonHero key={templateItem.dataKey}
            hero={templateItem}
            onClick={() => handleClick(templateItem.dataKey)} />
          )
        }
        else if(templateItem.tag === "Contain") {
          return(
            <ContainedHero key={templateItem.dataKey}
            hero={templateItem}
            onClick={() => handleClick(templateItem.dataKey)} />
          )
        }
      })
    }

    return (
      <div className="relative">
        {showResultsNavbar1()}
      </div>
    );
};

export default View;
