"use client";
import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import './globals.css';

import NavBar from './components/NavBar';
import HeroTitle from './components/HeroTitle';
import HeroSection from './components/HeroSection';
import Stories from './components/Stories';
import AboutHero from './components/AboutHero'; // Updated component
import Partners from './components/Partners';
import TeamSection from './components/TeamSection';
import FingerFooter from './components/FingerFooter';
import Chatbot from './components/Chatbot';
import ArticlesCTA from './components/ArticlesCTA';

const sectionColors = ['#F2C744', '#617864', '#4324D2', '#FFFFFF', '#F2C744'];
const textColorForSection = {
  '#617864': 'text-white',
  '#4324D2': 'text-white',
  '#FFFFFF': 'text-black',
  '#F2C744': 'text-black',
};

export default function Home() {
  const { scrollY } = useViewportScroll();
  const [currentSection, setCurrentSection] = useState(0);
  const [textColor, setTextColor] = useState('text-black');

  useEffect(() => {
    const updateSection = () => {
      const scrollPosition = scrollY.get();
      const sectionIndex = sectionColors.findIndex((color, index) => {
        if (index === sectionColors.length - 1) {
          return true;
        }
        return scrollPosition < window.innerHeight * (index + 1);
      });
      setCurrentSection(sectionIndex);
      setTextColor(textColorForSection[sectionColors[sectionIndex]] || 'text-black');
    };

    updateSection();
    window.addEventListener('scroll', updateSection);
    return () => {
      window.removeEventListener('scroll', updateSection);
    };
  }, [scrollY]);

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <motion.main
        className={`min-h-screen flex flex-col items-center justify-center ${textColor}`}
        style={{ backgroundColor: sectionColors[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
        <div className="w-full max-w-[90%] sm:max-w-[80%] mx-auto">
          {[0, 1, 2, 3, 4].map(index => (
            <div key={index} className={`section w-full my-8 ${textColor}`}>
              {/* Pass textColor to HeroTitle */}
              {index === 0 && <HeroTitle textColor={textColor} />}
              {index === 1 && <AboutHero textColor={textColor} />} {/* Updated component */}
              {index === 2 && <Stories />} {/* No need to pass textColor */}
              {index === 3 && <HeroSection />} {/* No need to pass textColor */}
              {index === 4 && <Partners />} {/* No need to pass textColor */}
              {index === 5 && <TeamSection />} {/* No need to pass textColor */}
            </div>
          ))}
          <FingerFooter />
        </div>
      </motion.main>
      <ArticlesCTA /> {/* No need to pass textColor */}
      <Chatbot /> {/* No need to pass textColor */}
    </>
  );
}
