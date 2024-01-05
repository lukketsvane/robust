"use client";
import { useEffect, useState } from 'react';
import { motion, useScroll, useAnimation } from 'framer-motion'; // Add useAnimation here
import './globals.css';


import NavBar from './components/NavBar';
import HeroTitle from './components/HeroTitle';
import HeroSection from './components/HeroSection';
import Stories from './components/Stories';
import AboutHero from './components/AboutHero';
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
const triggerPoints = [0.10, 0.4, 0.6, 0.8, 1.0];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);
  const [textColor, setTextColor] = useState('text-black');
  const [animationControls, setAnimationControls] = useState(Array(5).fill(null).map(() => useAnimation()));

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(latest => {
      for (let i = 0; i < triggerPoints.length; i++) {
        if (latest < triggerPoints[i]) {
          setCurrentSection(i);
          break;
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    document.body.style.backgroundColor = sectionColors[currentSection];
    setTextColor(textColorForSection[sectionColors[currentSection]] || 'text-black');
  }, [currentSection]);

  return (
    <>
      <NavBar currentSection={currentSection} sectionColors={sectionColors} />
      <motion.main
        className={`min-h-screen flex flex-col items-center justify-center ${textColor}`}
        style={{ backgroundColor: sectionColors[currentSection] }}
        animate={{ backgroundColor: sectionColors[currentSection] }}
        transition={{ duration: 0.35 }}
        data-section={currentSection}
      >
        <div className="w-full max-w-[90%] sm:max-w-[80%] mx-auto">
          {[0, 1, 2, 3, 4].map(index => (
            <div key={index} className={`section w-full my-8 ${textColor}`}>
              {/* Pass textColor and animationControls to relevant components */}
              {index === 0 && <HeroTitle textColor={textColor} />}
              {index === 1 && <AboutHero textColor={textColor} animationControls={animationControls[index]} />}
              {index === 2 && <Stories animationControls={animationControls[index]} />}
              {index === 3 && <HeroSection animationControls={animationControls[index]} />}
              {index === 4 && <Partners animationControls={animationControls[index]} />}
              {index === 5 && <TeamSection animationControls={animationControls[index]} />}
            </div>
          ))}
          <FingerFooter />
        </div>
      </motion.main>
      <ArticlesCTA />
      <Chatbot />
    </>
  );
}
