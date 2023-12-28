"use client";
import { useEffect } from 'react';
import HeroTitle from '../app/components/HeroTitle';
import AboutHero from '../app/components/AboutHero';
import TeamSection from '../app/components/TeamSection';

const SisteNytt = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F2C744";

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full" style={{ backgroundColor: '#F2C744' }}>
      <HeroTitle />
      <AboutHero textColor="#000" />
      <TeamSection /> 
    </div>
  );
}

export default SisteNytt;