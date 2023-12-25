"use client";
import { useEffect } from 'react';
import HeroTitle from '../app/components/HeroTitle';
import AboutHero from '../app/components/AboutHero';

const SisteNytt = () => {
  useEffect(() => {
    // Apply the yellow background color globally
    document.body.style.backgroundColor = "#F2C744";

    // Clean up the effect by setting the color back on component unmount
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    // Ensuring the div stretches to at least the height of the viewport with the correct background color
    <div className="flex flex-col items-center justify-center min-h-screen w-full" style={{ backgroundColor: '#F2C744' }}>
      <HeroTitle />
      <AboutHero /> {/* Ensure any added components are contained within the main div */}
      {/* More content can be added here with the proper background color */}
    </div>
  );
}

export default SisteNytt;