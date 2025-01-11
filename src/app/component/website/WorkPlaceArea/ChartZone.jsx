import React from "react";
import WorkArea from "../../bloc/WorkArea";

const ChartZone = () => {
    return(
        <div className="relative w-[60vw] h-full flex-col back-eerie-black">
            <p className="relative text-center pt-[0.15rem] md:pt-[0.25rem] pb-[0.15rem] md:pb-[0.25rem] back-black poppins-light fore-gray text-lg md:text-xl border-style-red-full">Layout</p>
            <div className="relative w-full h-[95%] flex flex-col items-center">
                <p className="poppins-semibold fore-cadmium-red text-2xl pt-[0.75rem] pb-[0.75rem]">DOM Table</p>
                <div className="relative w-full h-[90%] flex justify-center items-center">
                    <WorkArea />
                </div>
            </div>
        </div>
    )
}

export default ChartZone;
