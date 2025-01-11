'use client';

import Image from "next/image";
import React, {useEffect, useRef} from "react";

const DisplayData = () => {
    const animationRefs = useRef([]);

        // Ensure `animationRefs` is cleared before use
        animationRefs.current = [];

        // Intersection Observer for animation
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate-pulse-1");
                        } else {
                            entry.target.classList.remove("animate-pulse-1");
                        }
                    });
                },
                { threshold: 0.01 } // Trigger animation when 1% visible
            );

            // Observe all refs
            animationRefs.current.forEach((ref) => {
                if (ref) {
                    observer.observe(ref);
                }
            });

            // Cleanup
            return () => {
                animationRefs.current.forEach((ref) => {
                    if (ref) {
                        observer.unobserve(ref);
                    }
                });
            };
        }, []);

        // Add elements to refs array dynamically
        const addToRefs = (el) => {
            if (el && !animationRefs.current.includes(el)) {
                animationRefs.current.push(el);
            }
        };
    return(
        <div className="relative w-full h-[8rem] md:h-[12rem] lg:h-[24rem] back-chinese-black flex flex-col justify-center">
                <div ref={addToRefs} className="absolute w-full h-[4rem] md:h-[6rem] lg:h-[12rem] background-gradient-flat fore-white z-10 flex justify-between items-center">
                    <p className="relative pl-[2rem] md:pl-[4rem] poppins-light text-[0.85rem] md:text-[1.25rem] lg:text-[2rem]">Just click, update <br/> and customize</p>
                    <div className="relative w-[30vw] h-[150%] mr-[4rem]">
                    <Image src="/red1.svg" alt="" layout="fill" objectFit="contain" className="" />
                    </div>
                </div>
        </div>
    )
}

export default DisplayData;
