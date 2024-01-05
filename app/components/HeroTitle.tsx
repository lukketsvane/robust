"use client"; 
import React from 'react';

const HeroTitle = ({ textColor }) => {
    return (
        <div className="min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-[10%] lg:px-[15%] xl:px-[20%]">
            <h1 className={`title text-5xl sm:text-6xl md:text-7xl font-extrabold text-left leading-tight ${textColor}`}>
                Mot en robust fremtid —<br />
                for et bærekraftig Norge.
            </h1>
        </div>
    );
};

export default HeroTitle;
