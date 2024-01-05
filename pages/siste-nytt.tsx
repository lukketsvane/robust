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
    <div className="flex flex-col items-center " style={{ backgroundColor: '#F2C744' }}>
      <HeroTitle textColor="#F2C744" /> {/* Pass the textColor prop */}
      <AboutHero textColor="#000" />
      <div className=' '>
        <TeamSection /> 
      </div>
    </div>
  );
}

export default SisteNytt;
