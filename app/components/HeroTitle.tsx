"use client"; // Ensure client-side rendering for hooks and framer-motion
import React from 'react'; // Import React to ensure it's in scope for JSX

const HeroTitle = () => {
    return (
        // Apply consistent padding class
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-[10%] lg:px-[15%] xl:px-[20%]">
            <h1 className="title text-4xl sm:text-5xl md:text-6xl font-extrabold text-black text-center sm:text-left leading-tight">
                Håndverk for bærekraft<br />
                skapt med menneskelig varme<br />
                i Norges ånd.
            </h1>
        </div>
    );
};

export default HeroTitle;