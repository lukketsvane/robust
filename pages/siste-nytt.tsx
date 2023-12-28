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
    <div className="flex flex-col items-center justify-center w-full" style={{ backgroundColor: '#F2C744' }}>
      <HeroTitle />
      <AboutHero textColor="#000" />
      <div className='-mr-52 vh-70'>
      <TeamSection /> 
      </div>
    </div>
  );
}

export default SisteNytt;