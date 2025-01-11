import React from "react";

const SliderData = ({word}) => {
    return(
        <div className="relative w-full h-[3rem] md:h-[5rem] back-eerie-black flex items-center">
            <div className="pl-[1rem] md:pl-[2.5rem] poppins-regular fore-white text-md md:text-2xl"><p className="inline-block text-md md:text-2xl fore-red pr-[1rem]">|</p>{word}</div>
        </div>
    )
}

export default SliderData;
