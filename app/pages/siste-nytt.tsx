"use client";
import { useEffect } from 'react';
import HeroTitle from '../components/HeroTitle';
import AboutHero from '../components/AboutHero';

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
    </div>
  );
}

export default SisteNytt;