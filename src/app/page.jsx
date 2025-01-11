'use client';

import React from "react";
import View from "./component/View";
import { PaneProvider } from "./component/context/PaneContext";
import Navigation from "./component/website/Navigation";
import SliderData from "./component/website/SliderData";
import WorkPlace from "./component/website/WorkPlace";
import { ButtonProvider } from "./component/context/ButtonContext";
import { TemplateProvider } from "./component/context/TemplateContext";
import { HeroProvider } from "./component/context/HeroContext";
import RedHero from "./component/website/RedHero";
import Details from "./component/website/Details";
import DisplayData from "./component/website/DisplayData";
import DisplayDataI from "./component/website/DisplayDataI";
import DisplayDataII from "./component/website/DisplayDataII";

export default function Home() {
  return (
    <ButtonProvider>
    <PaneProvider>
    <HeroProvider>
    <TemplateProvider>
      <div>
        <Navigation />
        <RedHero />
        <Details />
        <DisplayData />
        <DisplayDataI />
        <DisplayDataII />
        <SliderData word={"Work Area"} />
        <WorkPlace />
        <SliderData word={"Your Website"} />
        <View />
      </div>
    </TemplateProvider>
    </HeroProvider>
    </PaneProvider>
    </ButtonProvider>
  );
}
