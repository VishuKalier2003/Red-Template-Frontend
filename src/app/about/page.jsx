import React from "react";
import CommonHero from "../component/bloc/HeroSection/OneImage/Common";
import OldSchoolHero from "../component/bloc/HeroSection/OneImage/OldSchool";
import CenteredHero from "../component/bloc/HeroSection/OneImage/Centered";
import HorizonHero from "../component/bloc/HeroSection/OneImage/Horizon";
import VariantHero from "../component/bloc/HeroSection/OneImage/Variant";

export default function home() {
    return(
        <div className="back-white">
            <HorizonHero />
        </div>
    )
}
