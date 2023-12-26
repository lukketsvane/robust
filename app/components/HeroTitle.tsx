"use client"; // Ensure client-side rendering for hooks and framer-motion
import React from 'react'; // Import React to ensure it's in scope for JSX

const HeroTitle = () => {
    return (
        <div className="min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-[10%] lg:px-[15%] xl:px-[20%]">
            <h1 className="title text-5xl sm:text-6xl md:text-7xl font-extrabold text-black text-left leading-tight">
                Mot en robust fremtid —<br />
                for et bærekraftig Norge.
            </h1>
        </div>
    );
};

export default HeroTitle;
