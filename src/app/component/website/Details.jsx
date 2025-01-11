import React, { useEffect, useRef } from "react";

const Details = () => {
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
            { threshold: 0.01 } // Trigger animation when 10% visible
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

    return (
        <div className="relative w-full back-chinese-black flex flex-col">
            <section className="relative inter-font fore-scarlet md:text-[1.75rem] lg:text-[2.5rem] pb-[0.75rem] flex back-chinese-black justify-center">
                <p>Choose from variety of Components</p>
            </section>
            <section ref={addToRefs} className="relative w-full flex justify-around items-center back-chinese-black mt-[2.5rem] mb-[2.5rem]">
                <div
                    className="relative w-[30%] inter-font text-[0.75rem] md:text-[0.85rem] lg:text-[1.15rem] fore-gray text-center shadow-red rounded-lg p-[1.15rem]"
                >
                    Useable components ranging from navigation bars to footer which are customized
                </div>
                <div
                    className="relative w-[30%] inter-font text-[0.75rem] md:text-[0.85rem] lg:text-[1.15rem] fore-gray text-center shadow-red rounded-lg p-[1.15rem]"
                >
                    Download the zipped file to render, adjust and deploy your components at ease for free
                </div>
            </section>
        </div>
    );
};

export default Details;
