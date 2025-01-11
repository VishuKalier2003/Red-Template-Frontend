import React from "react";

const Navigation = () => {
    return(
        <div className="relative w-full h-auto flex flex-col md:flex-row poppins-regular back-chinese-black border-red-style">
            <section className="relative w-full md:w-[25vw] pb-[0.25rem] pt-[0.25rem] flex justify-center items-center gap-x-[0.5rem]">
                <div className="relative poppins-regular fore-cadmium-red text-sm md:text-lg cursor-pointer">Sculptor</div>
            </section>
            <section className="relative w-full md:w-[75vw] pb-[0.25rem] pt-[0.25rem] flex justify-end items-center">
                <div className="relative w-full md:w-[70%] lg:w-[50%] flex justify-around">
                    <a href="/" className="poppins-regular fore-gray text-sm md:text-lg">Create</a>
                    <a href="/" className="poppins-regular fore-gray text-sm md:text-lg">Design</a>
                    <a href="/" className="poppins-regular fore-gray text-sm md:text-lg">Download</a>
                </div>
            </section>
        </div>
    )
}

export default Navigation;
