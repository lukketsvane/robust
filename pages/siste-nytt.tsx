"use client";
import { useEffect } from 'react';
import HeroTitle from '../app/components/HeroTitle';
import AboutHero from '../app/components/AboutHero';
import TeamSection from '../app/components/TeamSection';

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
    <div className="flex flex-col items-center justify-center min-h-screen w-full" style={{ backgroundColor: '#F2C744' }}>
      <HeroTitle />
      <AboutHero textColor="#000" />
      <TeamSection /> {/* Ensures TeamSection is properly included */}
    </div>
  );
}

export default SisteNytt;