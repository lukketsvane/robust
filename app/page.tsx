"use client";
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
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

  const rotateAnimation = {
    rotate: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  };

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
              {/* Pass textColor to HeroTitle */}
              {index === 0 && <HeroTitle textColor={textColor} />}
              {index === 1 && (
                <motion.div
                  initial={{ rotate: 2 + index * 0.5 }}
                  animate={currentSection === 1 ? rotateAnimation : {}}
                  custom={index}
                  className={`mb-6 ${index === 0 ? 'text-sm uppercase tracking-widest' : index === 1 ? 'title text-3xl sm:text-5xl font-extrabold leading-tight' : 'text-lg sm:text-xl font-normal'}`}
                >
                  <AboutHero textColor={textColor} />
                </motion.div>
              )}
              {index === 2 && <Stories />}
              {index === 3 && <HeroSection />}
              {index === 4 && <Partners />}
              {index === 5 && <TeamSection />}
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
