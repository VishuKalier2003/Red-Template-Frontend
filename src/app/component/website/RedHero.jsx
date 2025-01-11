'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const RedHero = () => {
    const [isMdScreen, setIsMdScreen] = useState(false);
    const animationRefs = useRef([]);

    // Check screen width on load and resize
    useEffect(() => {
        const handleResize = () => {
            setIsMdScreen(window.innerWidth >= 764);
        };
        // Initial check
        handleResize();
        // Add resize listener
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Intersection Observer for animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {entry.target.classList.add("animate-pulse-1");}
                    else {entry.target.classList.remove("animate-pulse-1");}
                });
            }, { threshold: 0.1 } // Trigger animation when 10% visible
        );
        animationRefs.current.forEach((ref) => {
            if (ref) {observer.observe(ref);}
        });
        return () => {
            animationRefs.current.forEach((ref) => {
                if (ref) {observer.unobserve(ref);}
            });
        };
    }, []);

    // Static configuration for the containers
    const containers = [
        { id: 1, width: 300, height: 175, top: "10%", left: "5%", img: "/red-moon.svg" },
        { id: 2, width: 175, height: 175, top: "30%", left: "0%", img: "/red1.svg" },
        { id: 3, width: 250, height: 150, top: "45%", left: "15%", img: "/site-sculptor.svg" },
        { id: 4, width: 200, height: 250, top: "20%", left: "25%", img: "/red-moon.svg" },
        { id: 5, width: 225, height: 175, top: "40%", left: "40%", img: "/next.svg" },
        { id: 6, width: 200, height: 200, top: "55%", left: "45%", img: "/next.svg" },
        { id: 7, width: 170, height: 190, top: "15%", left: "50%", img: "/next.svg" },
    ];

    return (
        <div className="relative w-full h-[100vh] back-chinese-black flex">
            <section className="relative md:w-1/3 lg:w-1/2 h-full back-chinese-black flex items-center">
                <div ref={(el) => (animationRefs.current[3] = el)} className="relative md:ml-[2rem] lg:ml-[4rem] z-20 w-[80%]">
                    <p className="relative poppins-regular fore-white md:text-[1.75rem] lg:text-[2.5rem] pb-[0.75rem]">
                        Red Moon Template
                    </p>
                    <p className="relative fore-gray md:text-[1rem] lg:text-[1.25rem]">
                        A Customizable Template with 100+ unique user-friendly components for creating robust websites.
                    </p>
                </div>
            </section>
            <section className="relative md:w-2/3 lg:w-1/2 h-full back-chinese-black">
                {/* Animated Div Elements */}
                <div
                    ref={(el) => (animationRefs.current[0] = el)}
                    className="absolute w-[2rem] md:w-[6rem] lg:w-[12rem] h-full -skew-x-12 -translate-x-[20rem] md:-translate-x-[12rem] lg:-translate-x-[18rem] background-gradient"
                ></div>
                <div
                    ref={(el) => (animationRefs.current[1] = el)}
                    className="absolute w-[2rem] md:w-[6rem] lg:w-[12rem] h-full -skew-x-12 -translate-x-[14rem] md:-translate-x-[2rem] lg:-translate-x-[4rem] background-gradient"
                ></div>
                <div
                    ref={(el) => (animationRefs.current[2] = el)}
                    className="absolute w-[2rem] md:w-[6rem] lg:w-[12rem] h-full -skew-x-12 -translate-x-[8rem] md:translate-x-[8rem] lg:translate-x-[10rem] background-gradient"
                ></div>
                {/* Image Containers */}
                <div className="relative w-full h-full">
                    {isMdScreen &&
                        containers.map((container) => (
                            <div
                                key={container.id}
                                style={{
                                    width: `${container.width}px`,
                                    height: `${container.height}px`,
                                    top: container.top,
                                    left: container.left,
                                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                                }}
                                className="absolute shadow-lg rounded-lg"
                            >
                                <Image
                                    src={`${container.img}`}
                                    alt={`Image ${container.id}`}
                                    width={container.width}
                                    height={container.height}
                                    className="relative w-full h-full"
                                />
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default RedHero;
