"use client"; // Ensure client-side rendering for hooks and framer-motion
import React from 'react'; // Import React to ensure it's in scope for JSX

const HeroTitle = () => {
    return (
      <div className="min-h-screen flex items-center">
        <h1 className="text-6xl font-extrabold text-black text-left leading-tight">
          Håndverk for bærekraft<br />
          skapt med menneskelig varme<br />
          i Norges ånd.
        </h1>
      </div>
    );
};

export default HeroTitle;
