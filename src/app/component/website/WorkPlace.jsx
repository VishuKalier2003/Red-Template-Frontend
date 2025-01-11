import React from "react";
import ComponentZone from "./WorkPlaceArea/ComponentZone";
import ChartZone from "./WorkPlaceArea/ChartZone";
import ForumZone from "./WorkPlaceArea/ForumZone";

const WorkPlace = () => {
    return(
        <div className="relative w-full h-[100vh] flex ">
            <ComponentZone className="border-style-red-full" />
            <ChartZone />
            <ForumZone />
        </div>
    )
}

export default WorkPlace;
